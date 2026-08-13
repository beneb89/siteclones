import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import MediaCard, { type MediaCardData } from "../components/media-card";
import { MediaCard_styles } from "../_styles";
const MediaCard_data: MediaCardData[] = [
    { ariaLabel: "1 of 6", id: "splide01-slide01", ariaLabel2: "DataForSEO Keyword Research API: Python Keyword Data Guide", href: "/dataforseo-keyword-research-api/", alt: "DataForSEO Keyword Research API dashboard showing search volume, keyword difficulty, CPC, and intent", height: "429", imgSrc: "/assets/cloned/images/169bf61802c8.webp", srcSet: "/assets/cloned/images/169bf61802c8.webp 768w, /assets/cloned/images/b9d4e67af00c.webp 300w, /assets/cloned/images/4b3b90182bcd.webp 1024w, /assets/cloned/images/7f16d789e9e2.webp 1376w", kind: "heading", kind2: "link", href2: "/dataforseo-keyword-research-api/", title: "DataForSEO Keyword Research API: Python Keyword Data Guide", kind3: "link", dateTime: "2026-04-27T03:41:13+00:00", date: "April 27, 2026", dateTime2: "2026-08-12T15:57:48+00:00" },
    { ariaLabel: "2 of 6", id: "splide01-slide02", ariaLabel2: "DataForSEO with Gemini CLI: MCP Setup and Cost Guide", href: "/dataforseo-gemini-cli-mcp/", alt: "DataForSEO Gemini CLI MCP setup: terminal dashboard showing $0.02 per 100 keyword ideas on dark navy background", height: "428", imgSrc: "/assets/cloned/images/c7421b68efef.webp", srcSet: "/assets/cloned/images/c7421b68efef.webp 768w, /assets/cloned/images/3b1037574c4f.webp 300w, /assets/cloned/images/781a13263eea.webp 1024w, /assets/cloned/images/3b6461752f48.webp 1536w, /assets/cloned/images/207cc79c5822.webp 2048w", kind: "heading", kind2: "link", href2: "/dataforseo-gemini-cli-mcp/", title: "DataForSEO with Gemini CLI: MCP Setup and Cost Guide", kind3: "link", dateTime: "2026-04-27T08:44:00+00:00", date: "April 27, 2026", dateTime2: "2026-08-12T15:57:40+00:00" },
    { ariaLabel: "3 of 6", id: "splide01-slide03", ariahidden: "true", ariaLabel2: "AccuRanker vs SE Ranking: Which Is Worth the Price? (2026)", href: "/accuranker-vs-se-ranking/", alt: "AccuRanker vs SE Ranking: Which Is Worth the Price? (2026)", height: "403", imgSrc: "/assets/cloned/images/331483f6ab68.webp", srcSet: "/assets/cloned/images/331483f6ab68.webp 768w, /assets/cloned/images/613ddf0b6cc2.webp 300w, /assets/cloned/images/4bfc7fdfdce2.webp 1024w, /assets/cloned/images/c3000c1ade9c.webp 1200w", href2: "/accuranker-vs-se-ranking/", title: "AccuRanker vs SE Ranking: Which Is Worth the Price? (2026)", dateTime: "2026-04-22T16:52:32+00:00", date: "April 22, 2026", dateTime2: "2026-08-12T15:52:11+00:00" }
];
/** Related Posts section. */
export default function RelatedPostsSection({ mediaCardData = MediaCard_data } = {}) {
  return (
    <div className="block clear-both max-w-full bg-surface">
      <div className="block max-w-322.5 px-6">
        <div className="block clear-both max-w-full py-[59.5px] px-6">
          <h2 className="block mb-6 text-background [font-family:Poppins,_sans-serif] text-[2.5rem] font-bold leading-15 max-md:text-3xl max-md:leading-[2.8125rem] md:max-lg:text-4xl md:max-lg:leading-13.5" data-component="heading" id="related-posts-title">
            Related Posts
          </h2>
          {" "}
          <div className="block relative mb-7.5" aria-labelledby="related-posts-title" aria-roledescription="Posts" id="splide01" role="region">
            <div className="block">
              <button className="w-8 h-12 border-2 border-solid border-clr-15 flex absolute top-[clamp(215.5px,_50%,_calc(100%_-_215.5px))] left-4 z-1 opacity-85 rounded-[3px] justify-center items-center text-color-001 [font-family:Poppins,_sans-serif] text-base font-semibold leading-[1.625rem] text-center capitalize bg-clr-16 shadow-[var(--clr-0)_0px_0px_0px_-7px] transform-[matrix(1,0,0,1,0,-24)] cursor-pointer" data-component="button" aria-controls="splide01-track" aria-label="Go to last slide" type="button">
                <Icon2 />
              </button>
              <button className="w-8 h-12 border-2 border-solid border-clr-15 flex absolute top-[clamp(215.5px,_50%,_calc(100%_-_215.5px))] right-4 z-1 opacity-85 rounded-[3px] justify-center items-center text-color-001 [font-family:Poppins,_sans-serif] text-base font-semibold leading-[1.625rem] text-center capitalize bg-clr-16 shadow-[var(--clr-0)_0px_0px_0px_-7px] transform-[matrix(1,0,0,1,0,-24)] cursor-pointer" data-component="button" aria-controls="splide01-track" aria-label="Next" type="button">
                <Icon3 />
              </button>
            </div>
            <div className="block relative z-0 overflow-hidden" aria-atomic="true" aria-live="polite" id="splide01-track">
              <ul className="h-[541.7px] flex grid-cols-2 [list-style-type:none] list-outside transform-[matrix(1,0,0,1,-588,0)] max-md:h-[28.5rem] max-md:grid-cols-[minmax(0px,_1fr)] max-md:transform-[matrix(1,0,0,1,-271,0)] md:max-lg:h-[26.9375rem] md:max-lg:transform-[matrix(1,0,0,1,-332,0)] 2xl:h-[34.0625rem] 2xl:transform-[matrix(1,0,0,1,-593,0)]" id="splide01-list" role="presentation">
                <li className="w-137 list-item relative mr-10 shrink-0 max-md:w-[14.4375rem] md:max-lg:w-73 2xl:w-[34.5625rem]" aria-hidden="true" aria-label="6 of 6" aria-roledescription="slide" id="splide01-clone04" role="tabpanel">
                  <article className="block rounded-lg overflow-hidden bg-surface shadow-[var(--clr-1)_0px_15px_15px_-10px]">
                    <a className="block relative pb-[365.3px] overflow-hidden text-primary underline cursor-pointer max-md:pb-38.5 md:max-lg:pb-[194.7px] 2xl:pb-[368.7px] hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" aria-hidden="true" aria-label="Best Perplexity Rank Tracker Tools for 2026: 10 Reviewed" href="/best-perplexity-rank-tracker/" role="presentation">
                      {" "}
                      <div className="h-full block absolute top-0 inset-x-0 hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]">
                        <img className="w-137 h-[22.8125rem] block max-w-full flex-1 overflow-clip object-cover aspect-[auto_768/428] align-bottom max-md:w-[14.4375rem] max-md:h-38.5 md:max-lg:w-73 md:max-lg:h-[12.1875rem] 2xl:w-[34.5625rem] 2xl:h-[23.0625rem]" data-component="image" alt="Best Perplexity rank tracker tools comparison hero showing brand mentions, source citations, clickable links, and refresh frequency as the four signals 10 reviewed tools differentiate on" height="428" sizes="(max-width: 768px) 100vw, 768px" src="/assets/cloned/images/f850f065344d.webp" srcSet="/assets/cloned/images/f850f065344d.webp 768w, /assets/cloned/images/315f0a540c12.webp 300w, /assets/cloned/images/646ca702b4ac.webp 1024w, /assets/cloned/images/47d5a2da2e0c.webp 1536w, /assets/cloned/images/be924b3a25e9.webp 2048w" width="768" />
                        {" "}
                      </div>
                      {" "}
                    </a>
                    {" "}
                    <div className="block p-8 max-md:p-6">
                      <header className="block mb-[1.0625rem]">
                        {" "}
                        <h3 className="block text-background [font-family:Poppins,_sans-serif] text-xl font-bold leading-7.5 [overflow-wrap:break-word]">
                          <a className="inline cursor-pointer" href="/best-perplexity-rank-tracker/" rel="bookmark">
                            Best Perplexity Rank Tracker Tools for 2026: 10 Reviewed
                          </a>
                        </h3>
                        <div className="flex my-[0.85rem] flex-wrap text-sm leading-[1.375rem]">
                          {" "}
                          <span className="flex flex-wrap items-center after:content-[''] after:hidden after:w-1 after:h-1 after:mx-2 after:bg-foreground after:opacity-80 after:rounded-tl-full">
                            {" "}
                            <time className="block whitespace-nowrap text-nowrap" dateTime="2026-05-11T16:26:24+00:00" itemProp="datePublished">
                              May 11, 2026
                            </time>
                            <time className="hidden min-w-0 whitespace-nowrap text-nowrap" dateTime="2026-08-12T15:38:10+00:00" itemProp="dateModified">
                              August 12, 2026
                            </time>
                            {" "}
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </header>
                      {" "}
                    </div>
                    {" "}
                  </article>
                  {" "}
                </li>
                {mediaCardData.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
              </ul>
              {" "}
            </div>
            {" "}
            <ul className="h-4.5 flex absolute -bottom-[1.5625rem] inset-x-0 z-1 px-[1.0625rem] flex-wrap justify-center items-center [list-style-type:disc] list-outside pointer-events-none" aria-label="Select a slide to show" role="tablist">
              <li className="block leading-[1.0625rem] [list-style-type:none]" role="presentation">
                <button className="h-2.5 inline-block opacity-75 m-[0.1875rem] rounded-[50%] text-color-001 [font-family:Poppins,_sans-serif] text-lg font-semibold leading-[1.8125rem] text-center capitalize bg-color-003 shadow-[var(--clr-0)_0px_0px_0px_-7px] cursor-pointer" data-component="button" aria-controls="splide01-slide01" aria-label="Go to slide 1" aria-selected="true" role="tab" type="button" />
              </li>
              <li className="block leading-[1.0625rem] [list-style-type:none]" role="presentation">
                <button className="h-2.5 inline-block opacity-25 m-[0.1875rem] rounded-[50%] text-color-001 [font-family:Poppins,_sans-serif] text-lg font-semibold leading-[1.8125rem] text-center capitalize bg-color-003 shadow-[var(--clr-0)_0px_0px_0px_-7px] cursor-pointer" data-component="button" aria-controls="splide01-slide02" aria-label="Go to slide 2" role="tab" type="button" />
              </li>
              <li className="block leading-[1.0625rem] [list-style-type:none]" role="presentation">
                <button className="h-2.5 inline-block opacity-25 m-[0.1875rem] rounded-[50%] text-color-001 [font-family:Poppins,_sans-serif] text-lg font-semibold leading-[1.8125rem] text-center capitalize bg-color-003 shadow-[var(--clr-0)_0px_0px_0px_-7px] cursor-pointer" data-component="button" aria-controls="splide01-slide03" aria-label="Go to slide 3" role="tab" type="button" />
              </li>
              <li className="block leading-[1.0625rem] [list-style-type:none]" role="presentation">
                <button className="h-2.5 inline-block opacity-25 m-[0.1875rem] rounded-[50%] text-color-001 [font-family:Poppins,_sans-serif] text-lg font-semibold leading-[1.8125rem] text-center capitalize bg-color-003 shadow-[var(--clr-0)_0px_0px_0px_-7px] cursor-pointer" data-component="button" aria-controls="splide01-slide04" aria-label="Go to slide 4" role="tab" type="button" />
              </li>
              <li className="block leading-[1.0625rem] [list-style-type:none]" role="presentation">
                <button className="h-2.5 inline-block opacity-25 m-[0.1875rem] rounded-[50%] text-color-001 [font-family:Poppins,_sans-serif] text-lg font-semibold leading-[1.8125rem] text-center capitalize bg-color-003 shadow-[var(--clr-0)_0px_0px_0px_-7px] cursor-pointer" data-component="button" aria-controls="splide01-slide05" aria-label="Go to slide 5" role="tab" type="button" />
              </li>
              <li className="block leading-[1.0625rem] [list-style-type:none]" role="presentation">
                <button className="h-2.5 inline-block opacity-25 m-[0.1875rem] rounded-[50%] text-color-001 [font-family:Poppins,_sans-serif] text-lg font-semibold leading-[1.8125rem] text-center capitalize bg-color-003 shadow-[var(--clr-0)_0px_0px_0px_-7px] cursor-pointer" data-component="button" aria-controls="splide01-slide06" aria-label="Go to slide 6" role="tab" type="button" />
              </li>
            </ul>
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
