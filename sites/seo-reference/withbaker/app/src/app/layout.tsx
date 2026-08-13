import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Meta Ads CLI and MCP Explained: How It Changes Your Campaign Strategy in 2026",
  "description": "Meta launched its Ads CLI on April 29, 2026. Baker's framework for using it with Claude, ChatGPT and MCP to run Meta campaigns from the terminal.",
  "robots": "index, follow",
  "alternates": {
    "canonical": "/blog/meta-ads-cli-mcp-2026",
    "languages": {
      "en": "https://withbaker.com/blog/meta-ads-cli-mcp-2026",
      "es": "https://withbaker.com/es/blog/cli-mcp-meta-ads-2026",
      "x-default": "https://withbaker.com/blog/meta-ads-cli-mcp-2026"
    }
  },
  "openGraph": {
    "title": "Meta Ads CLI and MCP Explained: How It Changes Your Campaign Strategy in 2026",
    "description": "Meta launched its Ads CLI on April 29, 2026. Baker's framework for using it with Claude, ChatGPT and MCP to run Meta campaigns from the terminal.",
    "type": "article",
    "siteName": "Baker",
    "url": "/blog/meta-ads-cli-mcp-2026",
    "images": [
      "https://withbaker.com/og-image.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Meta Ads CLI and MCP Explained: How It Changes Your Campaign Strategy in 2026",
    "description": "Meta launched its Ads CLI on April 29, 2026. Baker's framework for using it with Claude, ChatGPT and MCP to run Meta campaigns from the terminal."
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/616830dfa2c8.png",
        "type": "image/png"
      },
      {
        "url": "/assets/cloned/images/cafdb7eb201b.ico",
        "type": "image/x-icon",
        "sizes": "32x32"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Article\",\"headline\":\"Meta Ads CLI and MCP Explained: How It Changes Your Campaign Strategy in 2026\",\"description\":\"Meta launched its Ads CLI on April 29, 2026. Baker's framework for using it with Claude, ChatGPT and MCP to run Meta campaigns from the terminal.\",\"datePublished\":\"2026-04-30T00:00:00.000Z\",\"author\":{\"@type\":\"Person\",\"name\":\"Baker Team\",\"url\":\"", "\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Baker\",\"url\":\"", "\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/logo.webp\"}},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"", "/blog/meta-ads-cli-mcp-2026\"},\"image\":\"", "/og-image.png\",\"inLanguage\":\"en-US\",\"keywords\":[\"meta cli\",\"meta mcp\",\"meta ads claude\",\"chatgpt meta ads\",\"meta ads cli\",\"meta marketing api cli\",\"ai agents meta ads\",\"b2b saas meta ads\"],\"articleSection\":\"Meta Ads\",\"speakable\":{\"@type\":\"SpeakableSpecification\",\"cssSelector\":[\"article h1\",\"article [data-speakable]\"]}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Blog\",\"item\":\"", "/blog\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Meta Ads CLI and MCP Explained: How It Changes Your Campaign Strategy in 2026\",\"item\":\"", "/blog/meta-ads-cli-mcp-2026\"}]},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is the Meta Ads CLI?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The Meta Ads CLI is an official command-line tool released by Meta on April 29, 2026 that wraps the Meta Marketing API into terminal commands. It lets developers and AI agents create, list, update and delete campaigns, ad sets, ads, creatives, catalogs and conversion pixels without writing custom API code. It requires Python 3.12+ and installs via pip or uv. New resources default to PAUSED status as a safety guardrail, and outputs are available as a human-readable table, JSON (compatible with jq) or tab-separated values for shell pipelines.\"}},{\"@type\":\"Question\",\"name\":\"How do you use Meta Ads CLI with Claude or ChatGPT?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The CLI is the deterministic execution layer; Claude or ChatGPT is the planning layer that generates and runs CLI commands through an MCP (Model Context Protocol) server or Code Interpreter. The pattern Baker uses is: install the CLI in a sandboxed environment, expose it to the model with read-only credentials first, and let the model translate natural language briefs into commands like `meta ads insights get --campaign_id 12345 --fields=impressions,conversions --date-preset last_7d`. Always start with --no-input and --force disabled so the human reviews each write before it executes.\"}},{\"@type\":\"Question\",\"name\":\"What is MCP and how does it relate to the Meta Ads CLI?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"MCP (Model Context Protocol) is the open standard that lets AI assistants like Claude and ChatGPT call external tools through a standardised server interface. With an MCP server wrapped around the Meta Ads CLI, an assistant can run audits, build campaigns and pull insights in natural language. Pipboard already operates a third-party MCP for Meta Ads that allows pulling visualisations into Claude and executing live optimisations like pausing campaigns or reallocating budgets without logging into Business Manager.\"}},{\"@type\":\"Question\",\"name\":\"Is the Meta Ads CLI safe to use in production accounts?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"It is safe when scoped correctly. The CLI ships three safety defaults: new campaigns, ad sets and ads are created in PAUSED state, exit codes are standardised (0 success, 3 auth error, 4 API error) so CI/CD pipelines can fail fast, and --no-input plus --force flags must be explicitly passed for unattended runs. Baker's rule for production: read-only token in the AI assistant's MCP server, write-enabled token only in human-reviewed CI workflows, and an approval step on every spend-changing command.\"}},{\"@type\":\"Question\",\"name\":\"What can you automate with the Meta Ads CLI in 2026?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Five workflows have an immediate ROI when automated: daily creative fatigue audits (pull hook rate and frequency, flag ads above thresholds), weekly Andromeda diagnostics (entity ID diversity, campaign consolidation checks), CAPI Event Match Quality monitoring, ad set duplication for new geographies (apply settings in bulk via JSON output piped into shell), and ENCAC reporting that joins CLI insights with CRM exports. According to Session Media, custom agency MCPs prevent the manual setup errors that plague bulk campaign work, like leaving audience expansion enabled by default.\"}},{\"@type\":\"Question\",\"name\":\"What are the limitations of the Meta Ads CLI?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The CLI inherits Meta Marketing API rate limits, requires Python 3.12+ (older runtimes are unsupported), and currently does not handle every Business Manager surface (catalog and offline conversion paths exist but some lifecycle operations still require Ads Manager). When orchestrated by AI agents, the failure modes documented for Manus AI on Meta still apply: budget formatting confusion (monthly vs daily), objective mixing inside a single campaign, and over-rotation toward retargeting at the expense of prospecting. Human review on the first PAUSED draft prevents all three.\"}},{\"@type\":\"Question\",\"name\":\"Will the Meta Ads CLI replace Meta Ads Manager?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No, it changes who uses Ads Manager and when. The CLI absorbs repeatable, structured operations (creation, duplication, reporting, bulk edits) that Ads Manager makes slow. Ads Manager remains the system of record for asset upload, creative preview, manual review and the policy review surface. Multi-expert consensus across Pipboard, Session Media and the Google Ads MCP rollout is that AI-driven CLIs handle 70-80% of recurring tasks, freeing media buyers to spend the remaining time on offer, creative angle and account strategy.\"}}]}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:Merriweather,_serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
