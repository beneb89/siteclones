import Tile, { type TileData } from "../components/tile";
import { Tile_styles } from "../_styles";
const Tile_data: TileData[] = [
    { description: "The goal is rank and clicks", description2: "The goal is citations and mentions" },
    { description: "Works through search results pages", description2: "Works through AI answers" },
    { description: "Keyword targeting is core", description2: "Question targeting is core" },
    { description: "Measures CTR and rankings", description2: "Measures citations and share of voice" },
    { description: "Winning pages attract clicks", description2: "Winning pages get quoted" },
    { description: "Links boost authority", description2: "Links plus brand signals boost trust" },
    { description: "Technical SEO supports crawling", description2: "Technical SEO and schema support parsing" }
];
/** What Is Generative section. */
export default function WhatIsGenerativeSection({ tileData = Tile_data } = {}) {
  return (
    <div className="block relative min-w-0 max-w-full gap-5">
      <div className="block">
        <h2 className="block mt-2 mb-4 text-primary text-5xl font-medium leading-13.5 max-md:text-[2.375rem] max-md:leading-[2.6875rem] md:max-lg:text-[2.75rem] md:max-lg:leading-[3.125rem]" data-component="heading">
          What Is Generative Engine Optimization (GEO)?
        </h2>
        <p className="block mb-[0.9rem]">
          Generative engine optimization (GEO) prepares your pages so AI can quote and cite them. GEO examines how each part of your page reads, since AI tools pull short sections from different sites. Each passage should answer a question and include facts that people can verify.
        </p>
        <p className="block mb-[0.9rem]">
          GEO also depends on the basic web signals that help crawlers find and trust your page. ChatGPT now has over 700 million weekly active users, so being visible in AI answers affects how people discover brands. Google AI Overviews display an AI summary with links to sources, so citations matter even if people do not click right away.
        </p>
        <p className="block mb-[0.9rem]">
          How it works: If someone asks for the best dentist in Los Angeles, the AI searches for pages that mention the service and city and provides proof such as reviews and credentials. A practice page that lists specific services, office location, and reviews gives the AI a stronger reason to cite it. Pages with vague claims and little detail get cited less often.
        </p>
        <p className="block mb-[0.9rem]">
          GEO builds on SEO basics but adds passage-level writing, consistent use of names and details, and proper markup. For example, an FAQ section can provide easy-to-quote answers, and using the Organization or LocalBusiness schema helps confirm your identity. When you back up your claims with sources and dates, AI tools are more likely to trust and cite your page.
        </p>
        <h2 className="block mt-2 mb-4 text-primary text-5xl font-medium leading-13.5 max-md:text-[2.375rem] max-md:leading-[2.6875rem] md:max-lg:text-[2.75rem] md:max-lg:leading-[3.125rem]" data-component="heading">
          How GEO differs from traditional SEO
        </h2>
        <p className="block mb-[0.9rem]">
          Traditional SEO is about rankings and getting search clicks. You measure success by clicks, click-through rate (CTR), and keyword positions. GEO, on the other hand, focuses on being quoted and cited in AI answers, even if users never click your actual link.
        </p>
        <p className="block mb-[0.9rem]">
          Search engines list web pages, but AI tools write answers and may cite their sources. GEO encourages you to write sections that can stand alone, match real questions, and include facts with sources. Basic SEO, like keeping your site authority score healthy and building links, still helps with visibility.
        </p>
        <table className="w-full table mb-[0.9375rem] text-[1rem] [border-collapse:collapse]">
          <tbody className="table-row-group align-middle [border-collapse:collapse]">
            <tr className="table-row align-middle [border-collapse:collapse]">
              <td className="w-[459.5px] border border-solid border-border table-cell p-[0.9375rem] align-top leading-[1.5rem] bg-color-001 [border-collapse:collapse] max-md:w-[9.8125rem] md:max-lg:w-[343.5px]" width="153">
                <p className="block [border-collapse:collapse]">
                  <strong className="inline font-bold [border-collapse:collapse]">
                    Traditional SEO
                  </strong>
                </p>
              </td>
              <td className="w-[459.5px] border border-solid border-border table-cell p-[0.9375rem] align-top leading-[1.5rem] bg-color-001 [border-collapse:collapse] max-md:w-[9.8125rem] md:max-lg:w-[343.5px]" width="153">
                <p className="block [border-collapse:collapse]">
                  <strong className="inline font-bold [border-collapse:collapse]">
                    GEO
                  </strong>
                </p>
              </td>
            </tr>
            {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
          </tbody>
        </table>
        {" "}
      </div>
      {" "}
    </div>
  );
}
