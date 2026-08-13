export const dynamic = "force-static";

export function GET() {
  return new Response("# Site Not Found | Framer\n\nThis is a generated ditto.site clone. It preserves captured page content, metadata, route structure, and static assets where available.\n\n## Routes\n\n- [Site Not Found | Framer](https://trifecta.xyz/)\n\n## Captured Content\n\n### Site Not Found | Framer\nSite Not Found There is no site configured at this address.\n", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
