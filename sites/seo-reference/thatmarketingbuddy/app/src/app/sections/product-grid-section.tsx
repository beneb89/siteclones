import ListRow2, { type ListRow2Data } from "../components/list-row2";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import MediaLink from "../components/media-link";
import { ListRow2_styles, ListRow3_styles } from "../_styles";
import { mediaLinkData as mediaLinkDataContent } from "../content";
const ListRow2_data: ListRow2Data[] = [
    { text: "SEO Software Developers", text2: " Building rank trackers, keyword tools, or competitive analysis platforms that need reliable SERP data" },
    { text: "Digital Marketing Agencies", text2: " Creating custom client dashboards or automating large-scale SEO reporting workflows" },
    { text: "Enterprise SEO Teams", text2: " Need programmatic access to backlink data, keyword metrics, or SERP tracking for thousands of sites" },
    { text: "SaaS Companies", text2: " Integrating SEO data into existing platforms or building SEO features into their products" },
    { text: "Data Analysts", text2: " Conducting market research or competitive intelligence requiring structured SEO datasets" }
];
const ListRow3_data: ListRow3Data[] = [
    { text: "Small Business Owners", text2: " Need ready-to-use SEO tools, not raw data that requires development work to be useful" },
    { text: "Individual Marketers", text2: " Want plug-and-play SEO software with dashboards and reports, not API endpoints" },
    { text: "Budget-Conscious Users", text2: " The free $1 signup credit covers testing, but real usage needs the $50 minimum top-up, which can feel steep for occasional lookups." },
    { text: "Non-Technical Teams", text2: " APIs require development resources or technical knowledge to implement effectively" },
    { text: "One-Time Projects", text2: " Better to use existing SEO tools rather than build custom solutions for short-term needs" }
];
/** Product Grid section. */
export default function ProductGridSection({ listRow2Data = ListRow2_data, listRow3Data = ListRow3_data, mediaLinkData = mediaLinkDataContent } = {}) {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10" id="who-its-for">
      <p className="block mb-2 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
        Who It's For
      </p>
      <h2 className="block mb-6 text-color-001 text-2xl font-black leading-8 tracking-[-0.6px]" data-component="heading">
        Who DataForSEO is for (and who it isn't)
      </h2>
      <div className="w-full grid mb-6 gap-6 grid-cols-1 md:grid-cols-2">
        <div className="block p-6 rounded-2xl bg-foreground">
          <p className="flex mb-5 items-center gap-2 text-color-006 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4 tracking-[1.2px] uppercase">
            <span className="block">
              ✓
            </span>
            Best for
          </p>
          <ul className="block [list-style-type:none] list-outside">
            {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
          </ul>
        </div>
        <div className="block p-6 rounded-2xl bg-foreground">
          <p className="flex mb-5 items-center gap-2 text-accent [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4 tracking-[1.2px] uppercase">
            <span className="block">
              ✗
            </span>
            Skip this if
          </p>
          <ul className="block [list-style-type:none] list-outside">
            {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
          </ul>
          <div className="border-t border-solid border-t-surface block mt-5 pt-5">
            <p className="block mb-2 text-muted [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[0.5px] uppercase">
              Consider instead
            </p>
            <div className="flex flex-wrap gap-1.5">
              {mediaLinkData.map((d, i) => <MediaLink key={i} d={d} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
