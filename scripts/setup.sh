#!/usr/bin/env bash
# Install (or refresh) the ditto.site toolchain into vendor/ditto.
#
#   scripts/setup.sh            install if missing, otherwise no-op
#   scripts/setup.sh --update   fetch the pinned ref and reinstall deps
#   scripts/setup.sh --quiet    only speak up on failure (used by the SessionStart hook)
#
# Idempotent: safe to run on every session start.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENDOR_DIR="$REPO_ROOT/vendor/ditto"
DITTO_REMOTE="${DITTO_REMOTE:-https://github.com/ion-design/ditto.site.git}"
DITTO_REF="${DITTO_REF:-main}"

UPDATE=0
QUIET=0
for arg in "$@"; do
  case "$arg" in
    --update) UPDATE=1 ;;
    --quiet)  QUIET=1 ;;
    *) echo "unknown flag: $arg" >&2; exit 2 ;;
  esac
done

say() { [ "$QUIET" -eq 1 ] || echo "$@"; }

# --- node ---------------------------------------------------------------
command -v node >/dev/null 2>&1 || { echo "setup: node is required (>=20)" >&2; exit 1; }
NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$NODE_MAJOR" -lt 20 ]; then
  echo "setup: node >=20 required, found $(node -v)" >&2
  exit 1
fi

# --- source -------------------------------------------------------------
if [ ! -d "$VENDOR_DIR/.git" ]; then
  say "setup: cloning ditto.site into vendor/ditto ..."
  mkdir -p "$REPO_ROOT/vendor"
  git clone --depth 1 --branch "$DITTO_REF" "$DITTO_REMOTE" "$VENDOR_DIR" >/dev/null 2>&1 \
    || git clone --depth 1 "$DITTO_REMOTE" "$VENDOR_DIR"
  UPDATE=1
elif [ "$UPDATE" -eq 1 ]; then
  say "setup: updating vendor/ditto to $DITTO_REF ..."
  git -C "$VENDOR_DIR" fetch --depth 1 origin "$DITTO_REF"
  git -C "$VENDOR_DIR" reset --hard FETCH_HEAD
fi

# --- dependencies -------------------------------------------------------
# Chromium ships preinstalled in Claude Code's remote environment; anywhere
# else, let playwright fetch it once.
export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
if [ ! -d "$VENDOR_DIR/node_modules" ] || [ "$UPDATE" -eq 1 ]; then
  say "setup: installing npm dependencies (this takes a minute) ..."
  ( cd "$VENDOR_DIR" && npm ci --no-audit --no-fund >/dev/null )
fi

# --- browser ------------------------------------------------------------
BROWSERS_PATH="${PLAYWRIGHT_BROWSERS_PATH:-}"
if [ -n "$BROWSERS_PATH" ] && compgen -G "$BROWSERS_PATH/chromium-*" >/dev/null; then
  say "setup: using preinstalled chromium at $BROWSERS_PATH"
else
  say "setup: installing chromium for playwright ..."
  ( cd "$VENDOR_DIR" && PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD= npx --yes playwright install chromium >/dev/null )
fi

say "setup: ready — vendor/ditto @ $(git -C "$VENDOR_DIR" rev-parse --short HEAD)"
