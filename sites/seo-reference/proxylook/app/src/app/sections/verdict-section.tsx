import ListRow2, { type ListRow2Data } from "../components/list-row2";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import Illustration from "../svgs/svg-illustration";
import TextLink2, { type TextLink2Data } from "../components/text-link2";
import { ListRow2_styles } from "../_styles";
const ListRow2_data: ListRow2Data[] = [
    { text: "Massive scale — 1.98T backlinks, 8B+ keywords, 577M SERPs" },
    { text: "True pay-as-you-go, pay only for what you consume" },
    { text: "13+ distinct APIs covering the full SEO data stack" },
    { text: "24/7 customer support" },
    { text: "ISO-certified data provider" },
    { text: "Docs plus Sheets, Zapier, Make, n8n, Postman integrations" },
    { text: "Low $50 entry deposit with budget/spend controls" }
];
const ListRow3_data: ListRow3Data[] = [
    { text: "No flat free tier — requires a $50 minimum deposit" },
    { text: "Per-API rates not shown on main pricing page" },
    { text: "No published uptime SLA or success-rate benchmarks" },
    { text: "Consumption pricing can be unpredictable at scale" },
    { text: "Crypto payment support not disclosed" }
];
const TextLink2_data: TextLink2Data[] = [
    { href: "/vs/bright-data-vs-dataforseo", text: "Bright Data" },
    { href: "/vs/dataforseo-vs-scrapingbee", text: "ScrapingBee" },
    { href: "/vs/dataforseo-vs-octoparse", text: "Octoparse" }
];
/** Verdict section. */
export default function VerdictSection({ listRow2Data = ListRow2_data, listRow3Data = ListRow3_data, textLink2Data = TextLink2_data } = {}) {
  return (
    <section className="border border-solid border-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" id="overview">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        The verdict
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        Benchmark data and published specifications — here's where DataForSEO lands.
      </p>
      {" "}
      <div className="border-b border-solid border-b-surface-3 grid mb-4.5 pb-4 grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[2.53] max-md:aspect-[0.408] md:max-lg:aspect-[1.745] 2xl:aspect-[2.652]">
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(292px,_1fr))] max-md:gap-3">
          <div className="border border-solid border-color-012 block py-4 px-4.5 rounded-lg bg-clr-11">
            <div className="border-b border-solid border-b-color-003 flex mb-3 pb-2 items-center gap-2 text-color-003 text-xs font-bold leading-[1.25rem] tracking-[0.72px] uppercase">
              <i className="w-3.5 h-3.5 block [vertical-align:-1.75px] text-sm leading-[1.4375rem] bg-color-003" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E\")" }} />
              What we like
            </div>
            {" "}
            <ul className="grid gap-2 text-sm leading-[1.25rem] [list-style-type:none] list-outside grid-cols-1">
              {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="border border-solid border-color-011 block py-4 px-4.5 rounded-lg bg-clr-12">
            <div className="border-b border-solid border-b-color-010 flex mb-3 pb-2 items-center gap-2 text-color-010 text-xs font-bold leading-[1.25rem] tracking-[0.72px] uppercase">
              <i className="w-3.5 h-3.5 block [vertical-align:-1.75px] text-sm leading-[1.4375rem] bg-color-010" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z'/%3E%3C/svg%3E\")" }} />
              Watch outs
            </div>
            {" "}
            <ul className="grid gap-2 text-sm leading-[1.25rem] [list-style-type:none] list-outside grid-cols-1">
              {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
            </ul>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="border-t border-solid border-t-border grid mt-5 pt-5 items-center gap-6 grid-cols-[auto_1fr] max-md:pb-4 max-md:px-4 max-md:gap-3 max-md:justify-items-center max-md:text-center max-md:grid-cols-1">
        <div className="block shrink-0">
          <Illustration />
        </div>
        {" "}
        <div className="block text-accent text-[0.8125rem] leading-[1.25rem]">
          <div className="block mb-1.5 text-muted-foreground text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[0.66px] uppercase">
            Score breakdown
          </div>
          {" "}
          <p className="w-full max-w-136 block mb-2 leading-[1.375rem]">
            <strong className="inline text-foreground font-bold">
              Pricing C+ · Performance B · Pool quality B · Support B+ · Ethics B
            </strong>
          </p>
          {" "}
          <p className="w-full max-w-136 block text-muted-foreground text-[0.8125rem] leading-[1.3125rem]">
            {"Each axis is graded A+ to D using our standard rubric: "}
            <a className="inline-flex items-center gap-1 text-primary text-[0.8125rem] font-semibold leading-[1.375rem] cursor-pointer hover:underline" data-component="link" href="/methodology">
              how we score →
            </a>
          </p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="border border-solid border-border block mt-4.5 py-3.5 px-4 rounded-lg text-accent text-[0.8125rem] leading-[1.3125rem] bg-surface-2">
        <b className="block mb-2 text-muted-foreground text-[0.6875rem] font-bold leading-[1.125rem] tracking-[0.66px] uppercase">
          Compare DataForSEO head-to-head
        </b>
        {" "}
        <div className="flex flex-wrap gap-1.5">
          {textLink2Data.map((d, i) => <TextLink2 key={i} d={d} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <details className="border border-solid border-border block mt-3.5 rounded-lg bg-surface">
        <summary className="flex py-3 px-4 justify-between items-center text-[0.8125rem] font-semibold leading-[1.375rem] cursor-pointer">
          <span className="block">
            <i className="h-[0.8125rem] inline-block mr-2 [vertical-align:-1.625px] text-color-009 bg-color-009" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'/%3E%3C/svg%3E\")" }} />
            {"Who should "}
            <em className="inline italic">
              not
            </em>
            {" use DataForSEO?"}
          </span>
          <span className="block text-muted-foreground text-lg leading-[1.875rem]">
            +
          </span>
        </summary>
        {" "}
        <div className="block pb-3.5 px-4 text-accent text-[0.8125rem] leading-[1.3125rem]">
          {" DataForSEO is not the right fit if any of the following apply to your project: "}
          <b className="inline font-bold">
            no flat free tier — requires a $50 minimum deposit
          </b>
          {", "}
          <b className="inline font-bold">
            per-api rates not shown on main pricing page
          </b>
          {", "}
          <b className="inline font-bold">
            no published uptime sla or success-rate benchmarks
          </b>
          {". Teams in those categories will get more value from one of our "}
          <a className="inline-flex items-center gap-1 text-primary font-semibold cursor-pointer hover:underline" data-component="link" href="/all-providers">
            benchmarked alternatives
          </a>
          {" — start with "}
          <a className="inline-flex items-center gap-1 text-primary font-semibold cursor-pointer hover:underline" data-component="link" href="/providers/bright-data">
            Bright Data
          </a>
          {", or take the "}
          <a className="inline-flex items-center gap-1 text-primary font-semibold cursor-pointer hover:underline" data-component="link" href="/assistant">
            AI Proxy Finder
          </a>
          {" for a tailored recommendation. "}
        </div>
        {" "}
      </details>
      {" "}
    </section>
  );
}
