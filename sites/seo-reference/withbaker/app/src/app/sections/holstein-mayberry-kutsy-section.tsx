import ListRow2, { type ListRow2Data } from "../components/list-row2";
const ListRow2_data: ListRow2Data[] = [
    { text: "Holstein, J., Mayberry, M., Kutsy, A., Patel, S. “Introducing the Meta Ads CLI.” Meta for Developers blog, April 29, 2026." },
    { text: "Wijnand Meijer interview, “What Is A Google Ads MCP.” TrueClicks, 2026. Plus Corey Leno / Developer Assistant, October 2025 Google Ads MCP launch notes." },
    { text: "“Top 10 MCP Servers for PPC Marketers.” Multi-expert review, April 2026. Includes Pipboard (Meta Ads), Google Ads Official MCP, Microsoft Clarity, Stape GTM." },
    { text: "Session Media. “5 SaaS Strategies and the LinkedIn Ads Custom MCP Workflow,” April 2026." },
    { text: "Ralph Burns, Tier 11. Hook rate and hold rate benchmarks, 2026." },
    { text: "Manel Gomez, Crece sin Limite. “Andromeda Architecture and Campaign Consolidation.” $3.3M Ad Spend Analysis, 2026." },
    { text: "John Moran, Tier 11. “First-Click CAPI Imports and the 56% Shopify Attribution Problem.” Beauty Account ENCAC Case Study ($26 to $6.73), 2026." },
    { text: "Felipe Vergara. “Meta Manus AI Automation: Capabilities and Failure Modes,” March 2026." }
];
/** Holstein Mayberry Kutsy section. */
export default function HolsteinMayberryKutsySection({ listRow2Data = ListRow2_data } = {}) {
  return (
    <ol className="block mb-5 pl-6 [list-style-type:decimal] list-outside">
      {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
    </ol>
  );
}
