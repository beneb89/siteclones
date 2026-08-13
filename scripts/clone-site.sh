#!/usr/bin/env bash
# Clone a public URL into a runnable app under sites/.
#
#   scripts/clone-site.sh https://example.com/
#   scripts/clone-site.sh https://example.com/ --mode=multi --styling=css
#   scripts/clone-site.sh https://example.com/ --framework=vite
#   scripts/clone-site.sh https://example.com/ --serve      # install deps + dev server
#
# ditto names the folder after the site's domain, so the result lands at
# sites/<site>/app (working artifacts in sites/<site>/.clone, gitignored).
# Re-cloning the same site reuses that folder.
#
# All flags are passed straight through to ditto's CLI:
#   --mode=single|multi  --styling=tailwind|css  --framework=next|vite
#   --max-routes=<n>     --serve  --open
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENDOR_DIR="$REPO_ROOT/vendor/ditto"

if [ $# -lt 1 ]; then
  sed -n '2,15p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
  exit 2
fi

URL="$1"; shift
case "$URL" in
  http://*|https://*) ;;
  *) echo "clone-site: first argument must be an http(s) URL, got: $URL" >&2; exit 2 ;;
esac

[ -d "$VENDOR_DIR/node_modules" ] || "$REPO_ROOT/scripts/setup.sh"

mkdir -p "$REPO_ROOT/sites"

echo "clone-site: $URL  ->  sites/"
cd "$VENDOR_DIR"
# SSRF_ALLOW_LOOPBACK lets you point the compiler at a dev server on localhost.
SSRF_ALLOW_LOOPBACK="${SSRF_ALLOW_LOOPBACK:-true}" \
  npm run --silent clone -- "$URL" --out="$REPO_ROOT/sites" ${1+"$@"}
