import FeatureCard from "../components/feature-card";
import ListRow, { type ListRowData } from "../components/list-row";
import { ListRow_styles } from "../_styles";
import { features as featuresContent } from "../content";
const ListRow_data: ListRowData[] = [
    { text: "Create and manage search campaigns across Bing, Yahoo, and Edge" },
    { text: "Configure ad groups, keywords, and match types" },
    { text: "Set bids and automated bidding strategies" },
    { text: "Upload responsive search ads and audience ads" },
    { text: "Manage LinkedIn profile targeting for B2B" },
    { text: "Pull performance reports and competitive insights" }
];
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent, listRowData = ListRow_data } = {}) {
  return (
    <section className="block mb-10">
      <h2 className="block mt-10 mb-4 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-2xl font-semibold leading-8 tracking-[-0.24px]" data-component="heading">
        What Microsoft Ads MCP Does
      </h2>
      <div className="block leading-6.5">
        <div className="block" id="microsoft-mcp">
          <div className="w-full grid my-8 gap-4 grid-cols-1 md:grid-cols-3">
            {features.map((d, i) => <FeatureCard key={i} d={d} />)}
          </div>
          <p className="block mb-5">
            MCP integration for Microsoft Ads connects your AI tools directly to the Microsoft Advertising API. You can create, manage, and analyze Bing campaigns from Claude Desktop without logging into Microsoft Ads Manager. For teams running Google and Microsoft Search in parallel, this centralizes both search platforms in a single interface.
          </p>
          <p className="block mb-5">
            Microsoft Ads reaches searchers on Bing, Yahoo, and Microsoft Edge. The Microsoft Audience Network extends reach to MSN, Outlook, and enables LinkedIn profile targeting. The platform consistently delivers lower CPCs than Google for equivalent keywords, making it a high-ROI complement to Google Search.
          </p>
          <div className="grid mt-6 gap-4 grid-cols-1">
            <div className="border border-solid border-border block p-6 rounded-xl overflow-hidden [overflow-wrap:break-word] bg-color-004">
              <h3 className="block mt-8 mb-3 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-xl font-semibold leading-7" data-component="heading">
                Microsoft Ads Management via Claude
              </h3>
              <div className="block">
                <ul className="block mb-5 pl-6 text-sm leading-5 [list-style-type:disc] list-outside">
                  {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
