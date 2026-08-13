import ListRow, { type ListRowData } from "../components/list-row";
import { ListRow_styles4, ListRow_styles5 } from "../_styles";
const ListRow_data4: ListRowData[] = [
    { text: "Campaign structure and settings" },
    { text: "Ad groups and keywords" },
    { text: "Responsive search ads" },
    { text: "Bidding strategies (converted to Microsoft equivalents)" },
    { text: "Negative keyword lists" }
];
const ListRow_data5: ListRowData[] = [
    { text: "LinkedIn profile targeting (Microsoft-specific)" },
    { text: "Audience Network campaigns" },
    { text: "Microsoft UET tag for conversion tracking" },
    { text: "Bing-specific ad extensions" }
];
/** Google Ads Import section. */
export default function GoogleAdsImportSection({ listRowData4 = ListRow_data4, listRowData5 = ListRow_data5 } = {}) {
  return (
    <section className="block mb-10">
      <h2 className="block mt-10 mb-4 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-2xl font-semibold leading-8 tracking-[-0.24px]" data-component="heading">
        Google Ads Import via MCP
      </h2>
      <div className="block leading-6.5">
        <div className="block" id="google-import">
          <p className="block mb-5">
            Microsoft Ads supports direct import of Google Ads campaigns, and Synter MCP exposes this as an agent tool. You can prompt Claude to import specific campaigns from Google into Microsoft Ads, with automatic conversion of ad formats and bid strategies. This makes expanding from Google-only to Google plus Microsoft a straightforward one-prompt operation.
          </p>
          <div className="grid mt-4 gap-4 grid-cols-[repeat(auto-fit,_minmax(326px,_1fr))]">
            <div className="border border-solid border-border block p-6 rounded-xl overflow-hidden [overflow-wrap:break-word] bg-color-004">
              <h3 className="block mt-8 mb-3 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-xl font-semibold leading-7" data-component="heading">
                What Gets Imported
              </h3>
              <div className="block">
                <ul className="block mb-5 pl-6 text-sm leading-5 [list-style-type:disc] list-outside">
                  {listRowData4.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles4[i]} />)}
                </ul>
              </div>
            </div>
            <div className="border border-solid border-border block p-6 rounded-xl overflow-hidden [overflow-wrap:break-word] bg-color-004">
              <h3 className="block mt-8 mb-3 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-xl font-semibold leading-7" data-component="heading">
                What Needs Manual Setup
              </h3>
              <div className="block">
                <ul className="block mb-5 pl-6 text-sm leading-5 [list-style-type:disc] list-outside">
                  {listRowData5.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles5[i]} />)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
