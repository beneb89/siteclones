export const dynamic = "force-static";

export function GET() {
  return new Response("# SparkToro\n\n> SparkToro is an audience research tool that tells you what your audience reads, watches, listens to, follows, and searches for.\n\n## API\n- [API Documentation](https://sparktoro.com/api/docs): REST API reference, endpoints, credit weights, and authentication.\n- [OpenAPI Specification](https://sparktoro.com/api/openapi.json): Machine-readable OpenAPI 3.1 spec.\n- [API Catalog](https://sparktoro.com/.well-known/api-catalog): RFC 9727 linkset for the public API.\n\n## Agent Access (MCP)\n- [MCP Server Card](https://sparktoro.com/.well-known/mcp/server-card.json): Discovery card for the SparkToro MCP server.\n- MCP endpoint: https://mcp.sparktoro.com/mcp (Streamable HTTP, OAuth 2.1).\n- [OAuth Metadata](https://sparktoro.com/.well-known/oauth-authorization-server): Authorization server metadata.\n\n## About\n- [Homepage](https://sparktoro.com): What SparkToro does and who it's for.", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
