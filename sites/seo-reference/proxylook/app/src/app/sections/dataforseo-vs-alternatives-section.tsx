import Tile9 from "../components/tile9";
import Tile10, { type Tile10Data } from "../components/tile10";
import Tile11 from "../components/tile11";
import TextLink5, { type TextLink5Data } from "../components/text-link5";
import { Tile11_styles, TextLink5_styles } from "../_styles";
import { tile9Data as tile9DataContent, tile11Data as tile11DataContent } from "../content";
const Tile10_data: Tile10Data[] = [
    { text: "Starting price (entry plan)", text2: "$50.00", text3: "$5.04", text4: "$49.00", text5: "$69.00" },
    { text: "Pool size", text2: "1.98T live backlinks, 8B+ Google keywords, 577M Google SERPs", text3: "150M+ IPs", text4: "Rotating pool", text5: "500+ pre-built scraping templates" },
    { text: "Locations", text2: "—", text3: "—", text4: "—", text5: "—" },
    { text: "Rating", text2: "4.6 / 5", text3: "4.6 / 5", text4: "4.6 / 5", text5: "4.6 / 5" }
];
const TextLink5_data: TextLink5Data[] = [
    { href: "/vs/bright-data-vs-dataforseo", text: "Bright Data" },
    { href: "/vs/dataforseo-vs-scrapingbee", text: "ScrapingBee" },
    { href: "/vs/dataforseo-vs-octoparse", text: "Octoparse" }
];
/** Dataforseo Vs Alternatives section. */
export default function DataforseoVsAlternativesSection({ tile9Data = tile9DataContent, tile10Data = Tile10_data, tile11Data = tile11DataContent, textLink5Data = TextLink5_data } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-alternatives" id="alternatives">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-surface text-[1.0625rem] leading-[1.25rem] bg-clr-15" />
        DataForSEO vs alternatives
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        How DataForSEO stacks up against the closest providers in our directory. Tap any column header to read that review.
      </p>
      {" "}
      <div className="border border-solid border-border block rounded-lg overflow-auto bg-surface">
        <table className="w-207 border border-solid border-border table min-w-140 my-4 rounded-lg overflow-hidden text-[0.8125rem] leading-[1.375rem] [border-collapse:collapse] [border-spacing:2px] max-md:w-[18.1875rem] max-lg:block max-lg:max-w-full max-lg:overflow-x-auto max-md:whitespace-nowrap max-md:text-nowrap max-lg:min-w-0 md:max-lg:w-170 2xl:w-217">
          <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
            <tr className="border-b border-solid border-b-border table-row align-middle bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              <th className="border-b border-solid border-b-border table-cell p-3 align-middle text-muted-foreground text-[0.6875rem] font-bold leading-[1.125rem] tracking-[0.66px] text-left uppercase bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
                Metric
              </th>
              <th className="border-b border-solid border-b-border border-l-2 border-l-primary table-cell p-3 align-middle text-primary text-xs font-bold leading-[1.25rem] tracking-[0.36px] text-center uppercase bg-surface-4 [border-collapse:collapse] [border-spacing:2px]">
                DataForSEO
              </th>
              {tile9Data.map((d, i) => <Tile9 key={i} d={d} />)}
            </tr>
          </thead>
          <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
            {tile10Data.map((d, i) => <Tile10 key={i} d={d} />)}
            <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
              <td className="table-cell p-3 align-middle text-muted-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
                Read review
              </td>
              <td className="border-l-2 border-solid border-l-primary table-cell p-3 align-middle text-accent text-center bg-surface-4 [border-collapse:collapse] [border-spacing:2px]">
                <span className="inline text-primary text-[0.6875rem] font-bold leading-[1.125rem] [border-collapse:collapse] [border-spacing:2px]">
                  YOU ARE HERE
                </span>
              </td>
              {tile11Data.map((d, i) => <Tile11 key={i} d={d} styles={Tile11_styles[i]} />)}
            </tr>
          </tbody>
        </table>
        {" "}
      </div>
      {" "}
      <div className="flex mt-3.5 flex-wrap gap-1.5">
        {textLink5Data.map((d, i) => <TextLink5 key={i} d={d} styles={TextLink5_styles[i]} />)}
        {" "}
      </div>
      {" "}
    </section>
  );
}
