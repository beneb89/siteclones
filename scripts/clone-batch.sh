#!/usr/bin/env bash
# Clone every URL in a target list into its own folder under sites/.
#
#   scripts/clone-batch.sh                       # clone targets.txt
#   scripts/clone-batch.sh --file=targets-seo.txt
#   scripts/clone-batch.sh --dest=seo-reference  # group them under sites/<dest>/
#   scripts/clone-batch.sh --force               # re-clone sites that already exist
#   scripts/clone-batch.sh --mode=multi          # extra flags go to ditto's CLI
#
# Each target lands in sites/<dest>/<slug>/app, one folder per URL — see
# scripts/slugs.mjs for how <slug> is derived (short domain name when it's the
# only page from that site, path-qualified when a list holds several).
# --dest groups a list's output under a shared folder; omit it to clone
# straight into sites/.
#
# One failure does not stop the run: every target is reported pass/fail at the
# end, and each target's full log is kept under logs/.
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENDOR_DIR="$REPO_ROOT/vendor/ditto"
TARGETS="$REPO_ROOT/targets.txt"
LOG_DIR="$REPO_ROOT/logs"
STAGING="$REPO_ROOT/sites/.staging"
FORCE=0
DEST=""
PASSTHRU=()

for arg in "$@"; do
  case "$arg" in
    --force) FORCE=1 ;;
    --file=*) TARGETS="${arg#--file=}" ;;
    --dest=*) DEST="${arg#--dest=}" ;;
    *) PASSTHRU+=("$arg") ;;
  esac
done

# Strip stray leading/trailing slashes so --dest=/foo/ and --dest=foo agree.
DEST="${DEST#/}"
DEST="${DEST%/}"
OUT_DIR="$REPO_ROOT/sites${DEST:+/$DEST}"
OUT_REL="sites${DEST:+/$DEST}"
# Namespace the logs the same way, so two lists that share a slug don't
# overwrite each other's log.
LOG_DIR="$LOG_DIR${DEST:+/$DEST}"
LOG_REL="logs${DEST:+/$DEST}"

[ -f "$TARGETS" ] || { echo "clone-batch: no target list at $TARGETS" >&2; exit 2; }
[ -d "$VENDOR_DIR/node_modules" ] || "$REPO_ROOT/scripts/setup.sh"
mkdir -p "$LOG_DIR" "$OUT_DIR"

mapfile -t ROWS < <(node "$REPO_ROOT/scripts/slugs.mjs" "$TARGETS")
total=${#ROWS[@]}
echo "clone-batch: $total target(s) from $(basename "$TARGETS")"

declare -a OK=() FAILED=() SKIPPED=()
i=0
for row in "${ROWS[@]}"; do
  i=$((i + 1))
  url="${row%%$'\t'*}"
  slug="${row##*$'\t'}"
  dest="$OUT_DIR/$slug"
  printf '\n[%d/%d] %s -> %s/%s/\n' "$i" "$total" "$url" "$OUT_REL" "$slug"

  if [ "$FORCE" -eq 0 ] && [ -d "$dest/app" ]; then
    echo "        already cloned, skipping (--force to redo)"
    SKIPPED+=("$url")
    continue
  fi

  # ditto always appends its own domain-derived folder under --out, so clone
  # into staging and lift the result to the slug folder we actually want.
  work="$STAGING/$slug"
  rm -rf "$work"
  mkdir -p "$work"

  log="$LOG_DIR/$slug.log"
  if ( cd "$VENDOR_DIR" && SSRF_ALLOW_LOOPBACK="${SSRF_ALLOW_LOOPBACK:-true}" \
        npm run --silent clone -- "$url" --out="$work" \
        ${PASSTHRU[@]+"${PASSTHRU[@]}"} ) >"$log" 2>&1; then
    produced="$(find "$work" -mindepth 2 -maxdepth 2 -type d -name app -print -quit)"
    if [ -n "$produced" ]; then
      rm -rf "$dest"
      mkdir -p "$dest"
      # move app/ and the .clone/ working dir next to it
      mv "$produced" "$dest/app"
      [ -d "$(dirname "$produced")/.clone" ] && mv "$(dirname "$produced")/.clone" "$dest/.clone"
      echo "        ok — $OUT_REL/$slug/app"
      OK+=("$url")
    else
      echo "        FAILED — clone reported success but produced no app/"
      FAILED+=("$url")
    fi
  else
    echo "        FAILED — $(grep -m1 -iE '^error|Error:' "$log" | cut -c1-160)"
    echo "        log: $LOG_REL/$slug.log"
    FAILED+=("$url")
  fi
  rm -rf "$work"
done
rmdir "$STAGING" 2>/dev/null

printf '\n---\nclone-batch: %d ok, %d failed, %d skipped (of %d)\n' \
  "${#OK[@]}" "${#FAILED[@]}" "${#SKIPPED[@]}" "$total"
if [ "${#FAILED[@]}" -gt 0 ]; then
  printf 'failed:\n'; printf '  %s\n' "${FAILED[@]}"
  exit 1
fi
