import ListRow, { type ListRowData } from "../components/list-row";
import { ListRow_styles2, ListRow_styles3 } from "../_styles";
const ListRow_data2: ListRowData[] = [
    { text: "LinkedIn profile targeting (job title, industry, company)" },
    { text: "Microsoft Audience Network (MSN, Outlook, Edge)" },
    { text: "Direct import from Google Ads campaigns" },
    { text: "Lower CPC than Google in many verticals" },
    { text: "Smart Campaigns for smaller accounts" },
    { text: "Performance Max campaigns" }
];
const ListRow_data3: ListRowData[] = [
    { text: "Keywords and search intent" },
    { text: "LinkedIn profile segments" },
    { text: "In-market and custom audiences" },
    { text: "Customer match from first-party data" },
    { text: "Remarketing lists" },
    { text: "Geographic and demographic targeting" }
];
/** Synter Mcp For section. */
export default function SynterMcpForSection({ listRowData2 = ListRow_data2, listRowData3 = ListRow_data3 } = {}) {
  return (
    <section className="block mb-10">
      <h2 className="block mt-10 mb-4 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-2xl font-semibold leading-8 tracking-[-0.24px]" data-component="heading">
        Synter MCP for Microsoft Ads
      </h2>
      <div className="block leading-6.5">
        <div className="block" id="synter-mcp">
          <p className="block mb-5">
            Synter MCP connects Claude Desktop to the Microsoft Advertising API through direct OAuth authentication. Microsoft Ads is one of Synter's 14 connected platforms. Managing Microsoft Ads through Synter puts it in the same context as Google Ads, making search budget allocation decisions across both platforms straightforward.
          </p>
          <p className="block mb-5">
            For B2B advertisers, Microsoft Ads' LinkedIn profile targeting is a standout feature. You can target Bing searchers by job title, company, industry, and seniority. Synter MCP surfaces this capability through natural language so you can combine search intent with professional profile targeting without navigating separate audience interfaces.
          </p>
          <div className="grid mt-4 gap-4 grid-cols-[repeat(auto-fit,_minmax(326px,_1fr))]">
            <div className="border border-solid border-border block p-6 rounded-xl overflow-hidden [overflow-wrap:break-word] bg-color-004">
              <h3 className="block mt-8 mb-3 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-xl font-semibold leading-7" data-component="heading">
                Microsoft Ads Unique Features
              </h3>
              <div className="block">
                <ul className="block mb-5 pl-6 text-sm leading-5 [list-style-type:disc] list-outside">
                  {listRowData2.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles2[i]} />)}
                </ul>
              </div>
            </div>
            <div className="border border-solid border-border block p-6 rounded-xl overflow-hidden [overflow-wrap:break-word] bg-color-004">
              <h3 className="block mt-8 mb-3 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-xl font-semibold leading-7" data-component="heading">
                Microsoft Ads Targeting
              </h3>
              <div className="block">
                <ul className="block mb-5 pl-6 text-sm leading-5 [list-style-type:disc] list-outside">
                  {listRowData3.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles3[i]} />)}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-l-4 border-solid border-l-primary block my-8 p-6 rounded-xl bg-color-004">
            <p className="block mb-5 font-semibold">
              Microsoft Ads for B2B advertisers
            </p>
            <div className="block">
              <p className="block mb-5 text-sm leading-5">
                LinkedIn profile targeting through Microsoft Ads gives B2B advertisers search intent plus professional context. Synter MCP lets you run Microsoft Ads campaigns targeting specific job titles or industries alongside LinkedIn Ads, with cross-platform performance comparison in a single prompt.
              </p>
            </div>
          </div>
          <div className="block mt-6 text-center">
            <a className="h-12.5 inline-flex mr-4 py-3 px-6 rounded-sm items-center gap-2 text-color-003 font-medium underline bg-clr-5 cursor-pointer hover:opacity-80" data-component="button" href="/mcp">
              View Synter MCP docs
            </a>
            <a className="h-12.5 inline-flex py-3 px-6 rounded-sm items-center gap-2 text-color-007 font-medium underline bg-accent cursor-pointer hover:opacity-80" data-component="button" href="/signup">
              Sign up for Synter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
