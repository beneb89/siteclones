import ListRow3, { type ListRow3Data } from "../components/list-row3";
import ListRow4, { type ListRow4Data } from "../components/list-row4";
import { ListRow3_styles, ListRow4_styles, ListRow4_styles2 } from "../_styles";
const ListRow3_data: ListRow3Data[] = [
    { id: "category-406", href: "/help-center/category/serp-api", label: "SERP API" },
    { id: "category-407", href: "/help-center/category/keyword-data-api", label: "Keyword Data API" },
    { id: "category-408", href: "/help-center/category/domain-analytics-api", label: "Domain Analytics API" },
    { id: "category-409", href: "/help-center/category/onpage-api", label: "On-Page API" },
    { id: "category-410", href: "/help-center/category/dataforseo-labs-api", label: "DataForSEO Labs API" },
    { id: "category-411", href: "/help-center/category/business-data-api", label: "Business Data API" },
    { id: "category-412", href: "/help-center/category/merchant-api", label: "Merchant API" },
    { id: "category-428", href: "/help-center/category/backlinks-api", label: "Backlinks API" },
    { id: "category-564", href: "/help-center/category/app-data-api", label: "App Data API" },
    { id: "category-581", href: "/help-center/category/content-analysis-api", label: "Content Analysis API" },
    { id: "category-692", href: "/help-center/category/ai-optimization-api", label: "AI Optimization API" }
];
const ListRow4_data: ListRow4Data[] = [
    { text: "title", text2: " – the name of the advertiser;" },
    { text: "approx_ads_count", text2: " – the approximate number of ads that are run by the advertiser;" },
    { text: "verified", text2: " – displays if the advertiser is verified. Can take values true or false;" }
];
const ListRow4_data2: ListRow4Data[] = [
    { text: "title", text2: " – name of the advertiser;" },
    { text: "verified", text2: " – displays if the advertiser is verified;" },
    { text: "creative_id", text2: " – unique identifier of the advertisement;" }
];
/** Home Apis Serp section. */
export default function HomeApisSerpSection({ listRow3Data = ListRow3_data, listRow4Data = ListRow4_data, listRow4Data2 = ListRow4_data2 } = {}) {
  return (
    <div className="box-content block relative z-100 bg-clr-5 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem]">
      <div className="box-content w-275 block mx-22.5 pt-11 max-md:w-75 max-md:mx-[37.5px] md:max-lg:w-167.5 md:max-lg:mx-[3.0625rem] 2xl:mx-102.5">
        <div className="box-content block">
          <div className="box-content block mb-5">
            <div className="box-content block mb-[0.9375rem]">
              <a className="box-content inline mb-5 text-color-002 text-[0.9375rem] cursor-pointer hover:underline" data-component="link" href="/help-center">
                Home
              </a>
              <span className="box-content inline">
                {" / "}
              </span>
              <a className="box-content inline mb-5 text-color-002 text-[0.9375rem] cursor-pointer hover:underline" data-component="link" href="/help-center/category/api">
                APIs
              </a>
              <span className="box-content inline">
                {" / "}
              </span>
              <a className="box-content inline mb-5 text-color-002 text-[0.9375rem] cursor-pointer hover:underline" data-component="link" href="/help-center/category/serp-api">
                SERP API
              </a>
            </div>
          </div>
        </div>
        {" "}
        <div className="box-content block max-md:min-w-[16.5625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem]">
          <div className="box-content w-60.5 block float-left mr-[0.9375rem] mb-[1.5625rem] p-[0.9375rem] rounded-md bg-background max-md:w-[17.8125rem] md:max-lg:w-[636.5px]">
            <div className="box-content block">
              <div className="box-content block mb-12.5 max-lg:mb-0">
                <li className="box-content list-item [list-style-type:none]" id="text-24">
                  <div className="box-content block">
                    <div className="box-content border border-solid border-surface-2 block mt-0.5 rounded-md bg-background">
                      <div className="box-content hidden p-2.5 justify-between cursor-pointer max-lg:flex">
                        <div className="box-content block">
                          HELP CENTER
                        </div>
                        {" "}
                        <div className="box-content inline-block max-lg:block">
                          {" "}
                          <span className="box-content w-7.5 h-[0.1875rem] block mb-[0.3125rem] bg-color-003" />
                          <span className="box-content w-7.5 h-[0.1875rem] block mb-[0.3125rem] bg-color-003" />
                          <span className="box-content w-7.5 h-[0.1875rem] block mb-[0.3125rem] bg-color-003" />
                          {" "}
                        </div>
                        {" "}
                      </div>
                      <ul className="box-content block py-1.5 px-3 [list-style-type:none] list-outside max-lg:hidden">
                        <li className="box-content border-b border-dotted border-b-border list-item relative py-2.5 text-muted cursor-pointer" id="category-262">
                          <a className="box-content inline text-color-002 text-[1rem] font-bold hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)] focus:border-clr-14 focus:text-clr-14 focus:outline-clr-14 focus:[text-decoration-color:var(--clr-14)]" data-component="link" href="/help-center/category/getting-started">
                            Getting Started
                          </a>
                        </li>
                        <li className="box-content border-b border-dotted border-b-border list-item relative py-2.5 text-muted cursor-pointer" id="category-263">
                          <a className="box-content inline text-color-002 text-[1rem] font-bold hover:border-clr-11 hover:text-clr-11 hover:outline-clr-11 hover:[text-decoration-color:var(--clr-11)] focus:border-clr-15 focus:text-clr-15 focus:outline-clr-15 focus:[text-decoration-color:var(--clr-15)]" data-component="link" href="/help-center/category/account-and-billing">
                            {"Account & Billing"}
                          </a>
                        </li>
                        <li className="box-content border-b border-dotted border-b-border list-item relative py-2.5 text-muted cursor-pointer before:content-[''] before:block before:absolute before:top-2.5 before:right-3 before:bottom-[30.6875rem] before:left-48.5 before:w-2.5 before:h-4 before:text-muted before:text-base before:leading-4 max-lg:before:bottom-auto max-lg:before:left-auto max-lg:before:w-auto max-lg:before:h-auto" id="category-717">
                          <a className="box-content inline text-color-002 text-[1rem] font-bold hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)] focus:border-clr-14 focus:text-clr-14 focus:outline-clr-14 focus:[text-decoration-color:var(--clr-14)]" data-component="link" href="/help-center/category/api">
                            APIs
                          </a>
                          <ul className="box-content block pl-[0.9375rem] [list-style-type:none] list-outside 2xl:h-[29.5625rem]">
                            {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
                          </ul>
                        </li>
                        <li className="box-content border-b border-dotted border-b-border list-item relative py-2.5 text-muted cursor-pointer" id="category-271">
                          <a className="box-content inline text-color-002 text-[1rem] font-bold hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)] focus:border-clr-14 focus:text-clr-14 focus:outline-clr-14 focus:[text-decoration-color:var(--clr-14)]" data-component="link" href="/help-center/category/databases">
                            Databases
                          </a>
                        </li>
                        <li className="box-content border-b border-dotted border-b-border list-item relative py-2.5 text-muted cursor-pointer before:content-[''] before:block before:absolute before:top-2.5 before:right-3 before:bottom-4.5 before:left-49.5 before:w-1.5 before:h-4 before:text-muted before:text-base before:leading-4 max-lg:before:bottom-auto max-lg:before:left-auto max-lg:before:w-auto max-lg:before:h-auto" id="category-644">
                          <a className="box-content inline text-color-002 text-[1rem] font-bold hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)] focus:border-clr-14 focus:text-clr-14 focus:outline-clr-14 focus:[text-decoration-color:var(--clr-14)]" data-component="link" href="/help-center/category/third-party-integrations">
                            Integrations
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {" "}
                </li>
                {" "}
                <li className="box-content list-item mt-7.5 [list-style-type:none] max-lg:mt-0" id="text-30">
                  <div className="box-content block">
                    <div className="box-content block max-w-full">
                      <div className="w-60.5 border border-solid border-border block max-w-full p-[0.9375rem] rounded-lg text-color-003 [font-family:Verdana,_Geneva,_sans-serif] leading-[1.25rem] bg-background [background-position:50%_50%] bg-no-repeat max-lg:w-62.5 max-lg:mx-auto" id="sp-form-221066">
                        <div className="w-52.5 block max-w-full max-lg:w-54.5">
                          <div className="block transform-[matrix(0.9,0,0,0.9,0,0)] origin-[105px_0px] mx-auto max-lg:origin-[109px_0px]" />
                          <form className="block">
                            <div className="block relative p-2 text-left">
                              <div className="block leading-3.5">
                                <p className="block text-center [overflow-wrap:break-word]">
                                  <span className="inline text-lg leading-4.5">
                                    <strong className="inline font-semibold">
                                      <span className="inline text-color-002">
                                        Subscribe To Our Newsletter
                                      </span>
                                    </strong>
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="h-5 block relative grow basis-full text-left" />
                            <div className="block relative p-2 text-left">
                              <label className="block mb-1 pb-[0.3125rem] text-color-002 text-[0.9375rem] font-normal leading-[1.3125rem] [overflow-wrap:break-word] cursor-default">
                                <span className="inline">
                                  Name
                                </span>
                                <strong className="inline text-clr-6 font-semibold">
                                  *
                                </strong>
                              </label>
                              <input className="w-full h-[2.1875rem] border border-solid border-color-006 inline-block max-w-full pt-px pb-0.5 px-[0.55rem] rounded-sm overflow-clip text-[0.9375rem] leading-[1.3125rem] text-start whitespace-nowrap text-nowrap bg-background cursor-text" data-component="input" name="sform[TmFtZQ==]" type="text" />
                            </div>
                            <div className="block relative p-2 text-left">
                              <label className="block mb-1 pb-[0.3125rem] text-color-002 text-[0.9375rem] font-normal leading-[1.3125rem] [overflow-wrap:break-word] cursor-default">
                                <span className="inline">
                                  Email
                                </span>
                                <strong className="inline text-clr-6 font-semibold">
                                  *
                                </strong>
                              </label>
                              <input className="w-full h-[2.1875rem] border border-solid border-color-006 inline-block max-w-full pt-px pb-0.5 px-[0.55rem] rounded-sm overflow-clip text-[0.9375rem] leading-[1.3125rem] text-start whitespace-nowrap text-nowrap bg-background cursor-text" data-component="input" name="sform[email]" type="email" />
                            </div>
                            <div className="block relative p-2 text-center">
                              <button className="h-[2.1875rem] inline-block min-w-12.5 max-w-full pt-px pb-0.5 px-[17.5px] rounded-sm overflow-hidden text-background text-[0.9375rem] font-normal leading-[1.4375rem] whitespace-nowrap text-nowrap bg-accent cursor-pointer hover:opacity-90" data-component="button" id="sp-d61952d8-e0c3-4ae5-b9a5-16c853b0867c">
                                {"Subscribe "}
                              </button>
                            </div>
                          </form>
                          <div className="block relative pt-2 px-2 self-center text-left" />
                        </div>
                      </div>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </li>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="box-content w-[47.4375rem] border border-solid border-surface block float-left mb-7.5 py-7.5 pr-5 pl-7.5 rounded-md bg-background max-md:w-[17.8125rem] max-lg:p-[0.9375rem] md:max-lg:w-[636.5px]">
            <div className="box-content block">
              <div className="box-content block">
                <article className="box-content block mb-2.5 pb-5" id="post-98211">
                  <div className="box-content block">
                    <div className="box-content block">
                      <div className="box-content block">
                        <div className="box-content inline-block ml-3.5 align-top">
                          {" "}
                          <h1 className="box-content block relative z-20 mb-[0.3125rem] text-color-002 text-[1.75rem] font-bold leading-[1.9375rem] max-md:leading-[0.9375rem] max-md:[font-size:inherit] md:max-lg:text-lg md:max-lg:leading-[1.25rem]" data-component="heading">
                            {" How to retrieve data on ads and advertisers from Google Ads"}
                          </h1>
                          {" "}
                          <div className="box-content block relative z-20 mb-5 text-clr-7 capitalize">
                            <div className="box-content hidden relative pr-[0.9375rem] before:content-[''] before:pr-[0.3125rem] before:text-clr-7 before:text-sm before:font-medium before:leading-[1.4375rem] after:content-[''] after:block after:absolute after:top-0 after:right-[0.3125rem]">
                              {" in "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          When creating an online advertising campaign using Google Ads, it is important to understand your ad competitors and the types of ads they display in search engines. However, using Google Ads, you can’t see your competitors or their ads. You only have access to information about your ad campaigns. You can manually scrape data on competitors and their ads from SERP, but this approach is time- and resource-intensive.
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          {"To solve this problem, we introduced "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/task_post/" rel="noopener" target="_blank">
                              Google Ads Advertisers
                            </a>
                          </strong>
                          {" and "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_search/task_post/" rel="noopener" target="_blank">
                              Google Ads Search
                            </a>
                            {" "}
                          </strong>
                          {"endpoints of SERP API. These endpoints allow you to quickly get data about advertisers in Google Ads and the ad campaigns they run. "}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          {"Both endpoints leverage data from the "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://adstransparency.google.com/?region=UA" rel="noopener nofollow" target="_blank">
                              Google Ads Transparency Center
                            </a>
                          </strong>
                          {". It is designed to inform users about the advertisements they see across Google’s services, including Search, YouTube, and Display. Besides, you can use it to search for the data about the advertisers behind the ads, including their verification status and other details. "}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          With the Google Ads Advertisers and Google Ads Search endpoints you can access more detailed data from the Ads Transparency Center than what is available through manual use of the platform.
                          <br className="box-content inline" />
                          {" "}
                        </p>
                        {" "}
                        <h3 className="box-content inline-block mb-[0.9375rem] text-color-002 text-[1.375rem] font-bold leading-[1.625rem] max-md:text-base max-md:leading-[1.1875rem]" data-component="heading">
                          How do Google Ads Advertisers and Google Ads Search endpoints work
                        </h3>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            <span className="box-content border-[3px] border-solid border-color-005 inline-block -mt-1 mr-2.5 ml-1 rounded-[50%] align-middle leading-[1.4375rem] text-center">
                              1
                            </span>
                            {" Google Ads Advertisers"}
                          </strong>
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          This endpoint provides top search engine results based on specific location and keyword parameters. These results include details about Google Ads advertisers running campaigns for a given keyword and targeting a particular location. Additionally, it provides information on an advertiser’s verification status, advertiser ID, and the approximate number of ads they are running across Google Ads platforms.
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            <em className="box-content inline italic">
                              Here are detailed instructions on how to use the Google Ads Advertisers endpoint:
                            </em>
                          </strong>
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            1.
                          </strong>
                          {" First, make a call to the "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/task_post/" rel="noopener" target="_blank">
                              Google Ads Advertisers
                            </a>
                          </strong>
                          {" endpoint:"}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            POST https://api.dataforseo.com/v3/serp/google/ads_advertisers/task_post
                          </code>
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            2.
                          </strong>
                          {" Specify the keyword in the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            keyword
                          </code>
                          {" field. The keyword you specify must meet the rules and limitations of the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            keyword
                          </code>
                          {" field. We explain these rules and limitations in a dedicated "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis" rel="noopener" target="_blank">
                              Help Center article
                            </a>
                          </strong>
                          {". "}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            3.
                          </strong>
                          {" Use "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            location_name
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            location_code
                          </code>
                          {" or "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            location_coordinate
                          </code>
                          {" field to specify the location. You can get a list of supported locations by calling the "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/locations/" rel="noopener" target="_blank">
                              Locations
                            </a>
                          </strong>
                          {" endpoint."}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            Example:
                          </strong>
                          {" "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            “location_code”: 2840
                          </code>
                          .
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            <em className="box-content inline italic">
                              The request should be structured like this:
                            </em>
                          </strong>
                        </p>
                        {" "}
                        <div className="box-content block relative max-h-50">
                          <div className="box-content block max-h-50 mt-2 mb-6 px-2.5 rounded-[5px] overflow-auto text-primary text-xs leading-[1.0625rem] bg-color-009">
                            <code className="box-content inline [font-family:monospace]">
                              <p className="box-content block mb-4 text-base leading-6 max-lg:text-sm max-lg:leading-5.5" />
                              {" "}
                              <pre className="box-content block max-w-full py-4 pr-6 whitespace-pre-wrap [overflow-wrap:break-word]">
                                {"[\n  {\n    \"location_code\": 2840,\n    \"keyword\": \"apple\"\n  }\n]\n"}
                              </pre>
                              {" "}
                            </code>
                            <p className="box-content block mb-4 text-base leading-6 max-lg:text-sm max-lg:leading-5.5">
                              <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]" />
                            </p>
                            <i className="box-content w-3 h-3 block absolute top-2.5 right-[0.9375rem] opacity-70 p-[0.3125rem] rounded-[3px] [font-family:FontAwesome] font-normal leading-3 cursor-pointer before:content-[''] before:text-primary before:text-xs before:leading-3 hover:bg-clr-12 hover:opacity-[0.977495] focus:bg-clr-16 focus:opacity-[0.717119]" />
                          </div>
                        </div>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            <em className="box-content inline italic">
                              The response will return as follows:
                            </em>
                          </strong>
                        </p>
                        {" "}
                        <div className="box-content block relative max-h-50">
                          <div className="box-content block max-h-50 mt-2 mb-6 px-2.5 rounded-[5px] overflow-auto text-primary text-xs leading-[1.0625rem] bg-color-009">
                            <code className="box-content inline [font-family:monospace]">
                              <p className="box-content block mb-4 text-base leading-6 max-lg:text-sm max-lg:leading-5.5" />
                              {" "}
                              <pre className="box-content block max-w-full py-4 pr-6 whitespace-pre-wrap [overflow-wrap:break-word]">
                                {"{\n  \"version\": \"0.1.20241101\",\n  \"status_code\": 20000,\n  \"status_message\": \"Ok.\",\n  \"time\": \"0.2500 sec.\",\n  \"cost\": 0,\n  \"tasks_count\": 1,\n  \"tasks_error\": 0,\n  \"tasks\": [\n    {\n      \"id\": \"11202055-1535-0066-0000-91e8aada902c\",\n      \"status_code\": 20000,\n      \"status_message\": \"Ok.\",\n      \"time\": \"0.1930 sec.\",\n      \"cost\": 0,\n      \"result_count\": 1,\n      \"path\": [\n        \"v3\",\n        \"serp\",\n        \"google\",\n        \"ads_advertisers\",\n        \"task_get\",\n        \"advanced\",\n        \"11202055-1535-0066-0000-91e8aada902c\"\n      ],\n      \"data\": {\n        \"api\": \"serp\",\n        \"function\": \"task_get\",\n        \"se\": \"google\",\n        \"se_type\": \"ads_advertisers\",\n        \"location_code\": 2840,\n        \"keyword\": \"apple\",\n        \"device\": \"desktop\",\n        \"os\": \"windows\"\n      },\n      \"result\": [\n        {\n          \"keyword\": \"apple\",\n          \"type\": \"ads_advertisers\",\n          \"se_domain\": \"adstransparency.google.com\",\n          \"location_code\": 2840,\n          \"language_code\": \"en\",\n          \"check_url\": null,\n          \"datetime\": \"2024-11-20 18:55:54 +00:00\",\n          \"spell\": null,\n          \"refinement_chips\": null,\n          \"item_types\": [\n            \"ads_advertiser\",\n            \"ads_multi_account_advertiser\",\n            \"ads_domain\"\n          ],\n          \"se_results_count\": 0,\n          \"items_count\": 19,\n          \"items\": [\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 1,\n              \"title\": \"AppleAire\",\n              \"advertiser_id\": \"AR17003630320609656833\",\n              \"location\": \"US\",\n              \"verified\": true,\n              \"approx_ads_count\": 66\n            },\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 2,\n              \"rank_absolute\": 2,\n              \"title\": \"FANCY APPLE\",\n              \"advertiser_id\": \"AR10312208952913297409\",\n              \"location\": \"US\",\n              \"verified\": true,\n              \"approx_ads_count\": 64\n            },\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 3,\n              \"rank_absolute\": 3,\n              \"title\": \"Apple Inc\",\n              \"advertiser_id\": \"AR04280480096432685057\",\n              \"location\": \"US\",\n              \"verified\": true,\n              \"approx_ads_count\": 58\n            },\n            {\n              \"type\": \"ads_multi_account_advertiser\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 4,\n              \"title\": \"Apple Inc.\",\n              \"location\": \"US\",\n              \"approx_ads_count\": 49,\n              \"advertisers\": [\n                {\n                  \"type\": \"advertiser\",\n                  \"advertiser_id\": \"AR02439908557932462081\",\n                  \"location\": \"US\",\n                  \"verified\": true,\n                  \"approx_ads_count\": 45\n                },\n                {\n                  \"type\": \"advertiser\",\n                  \"advertiser_id\": \"AR06681431823521677313\",\n                  \"location\": \"US\",\n                  \"verified\": false,\n                  \"approx_ads_count\": 4\n                }\n              ]\n            },\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 4,\n              \"rank_absolute\": 5,\n              \"title\": \"Apple Auto\",\n              \"advertiser_id\": \"AR12151332228441309185\",\n              \"location\": \"US\",\n              \"verified\": true,\n              \"approx_ads_count\": 19\n            },\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 5,\n              \"rank_absolute\": 6,\n              \"title\": \"Apple Wood\",\n              \"advertiser_id\": \"AR06010505619184812033\",\n              \"location\": \"US\",\n              \"verified\": true,\n              \"approx_ads_count\": 3\n            },\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 6,\n              \"rank_absolute\": 7,\n              \"title\": \"Apple\",\n              \"advertiser_id\": \"AR16006410966849814529\",\n              \"location\": \"US\",\n              \"verified\": false,\n              \"approx_ads_count\": 2\n            },\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 7,\n              \"rank_absolute\": 8,\n              \"title\": \"Apple\",\n              \"advertiser_id\": \"AR03460445289142288385\",\n              \"location\": \"AU\",\n              \"verified\": false,\n              \"approx_ads_count\": 1\n            },\n            {\n              \"type\": \"ads_advertiser\",\n              \"rank_group\": 8,\n              \"rank_absolute\": 9,\n              \"title\": \"Apple Bits\",\n              \"advertiser_id\": \"AR06403154157905117185\",\n              \"location\": \"AU\",\n              \"verified\": false,\n              \"approx_ads_count\": 1\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 10,\n              \"domain\": \"apple.com\"\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 2,\n              \"rank_absolute\": 11,\n              \"domain\": \"snapple.com\"\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 3,\n              \"rank_absolute\": 12,\n              \"domain\": \"kappler.com\"\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 4,\n              \"rank_absolute\": 13,\n              \"domain\": \"applern.com\"\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 5,\n              \"rank_absolute\": 14,\n              \"domain\": \"applefcu.org\"\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 6,\n              \"rank_absolute\": 15,\n              \"domain\": \"applecart.co\"\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 7,\n              \"rank_absolute\": 16,\n              \"domain\": \"apple.com.cn\"\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 8,\n              \"rank_absolute\": 17,\n              \"domain\": \"applerock.com\"\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 9,\n              \"rank_absolute\": 18,\n              \"domain\": \"applejack.com\"\n            },\n            {\n              \"type\": \"ads_domain\",\n              \"rank_group\": 10,\n              \"rank_absolute\": 19,\n              \"domain\": \"applebank.com\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"}
                              </pre>
                              {" "}
                            </code>
                            <p className="box-content block mb-4 text-base leading-6 max-lg:text-sm max-lg:leading-5.5">
                              <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]" />
                            </p>
                            <i className="box-content w-3 h-3 block absolute top-2.5 right-[0.9375rem] opacity-70 p-[0.3125rem] rounded-[3px] [font-family:FontAwesome] font-normal leading-3 cursor-pointer before:content-[''] before:text-primary before:text-xs before:leading-3 hover:bg-clr-12 hover:opacity-[0.977422] focus:bg-clr-16 focus:opacity-[0.717132]" />
                          </div>
                        </div>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          {"In the response, you will find the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            ads_advertiser
                          </code>
                          {" and "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            ads_multi_account_advertiser
                          </code>
                          {" elements. The "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            ads_advertiser
                          </code>
                          {" element provides information about advertisers managing a single account, while the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            ads_multi_account_advertiser
                          </code>
                          {" element contains data about advertisers with multiple accounts that share the same name ("}
                          <strong className="box-content inline font-semibold">
                            multi-account advertisers
                          </strong>
                          ).
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            <em className="box-content inline italic">
                              These two elements contain such fields:
                            </em>
                          </strong>
                        </p>
                        {" "}
                        <ul className="box-content block mb-[0.9375rem] text-base leading-6 [list-style-type:none] list-outside">
                          {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
                          <li className="box-content list-item relative pl-3 before:content-['•'] before:block before:absolute before:top-0 before:right-[47.0625rem] before:bottom-6 before:left-0 before:w-1.5 before:h-6 before:text-foreground before:text-base before:font-medium before:leading-6 max-md:before:right-[17.4375rem] max-md:before:bottom-24 md:max-lg:before:right-[630.5px]">
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              advertiser_id
                            </code>
                            {" – unique identifier of the advertiser account. It can be used to obtain data on campaigns "}
                            <strong className="box-content inline font-semibold">
                              <a className="box-content inline text-accent cursor-pointer" data-component="link" href="/help-center/what-is-an-advertiser_id-in-google-ads-and-how-can-you-obtain-it" rel="noopener" target="_blank">
                                from the Google Ads Search endpoint
                              </a>
                            </strong>
                            ;
                          </li>
                          <li className="box-content list-item relative pl-3 before:content-['•'] before:block before:absolute before:top-0 before:right-[47.0625rem] before:bottom-6 before:left-0 before:w-1.5 before:h-6 before:text-foreground before:text-base before:font-medium before:leading-6 max-md:before:right-[17.4375rem] max-md:before:bottom-18 md:max-lg:before:right-[630.5px]">
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              rank_group
                            </code>
                            {" and "}
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              rank_absolute
                            </code>
                            {" – determine the group and absolute position of the element in SERP respectively."}
                          </li>
                        </ul>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          {"Additionally the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            ads_domain
                          </code>
                          {" element shows the Google Ads advertiser identified with a domain name. The domain name of the advertiser is located in the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            domain
                          </code>
                          {" field."}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          You can use this data to identify potential competitors in online advertising who run ads for a specific keyword and target a particular location. Additionally, the advertiser IDs obtained can be used with the Google Ads Search endpoint to retrieve more detailed information about competitors’ ads.
                          <br className="box-content inline" />
                          {" "}
                          <br className="box-content inline" />
                          {" "}
                          <strong className="box-content inline font-semibold">
                            <span className="box-content border-[3px] border-solid border-color-005 inline-block -mt-1 mr-2.5 ml-1 rounded-[50%] align-middle leading-[1.4375rem] text-center">
                              2
                            </span>
                            {" Google Ads Search"}
                          </strong>
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          {"The "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_search/task_post/" rel="noopener" target="_blank">
                              Google Ads Search
                            </a>
                            {" "}
                          </strong>
                          endpoint is designed to gather data on ads run by specific advertisers across all Google services within a defined location. It provides details such as the ad’s position in the SERP, its format, a preview image, and the first and last dates the ad was displayed.
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            <em className="box-content inline italic">
                              Below is a detailed description of how to use the Google Ads Search endpoint:
                            </em>
                          </strong>
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            1.
                          </strong>
                          {" Make an API call to the "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_search/task_post/" rel="noopener" target="_blank">
                              Google Ads Search
                            </a>
                          </strong>
                          {" endpoint:"}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            POST https://api.dataforseo.com/v3/serp/google/ads_search/task_post
                          </code>
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            2.
                          </strong>
                          {" Specify the advertiser(s) whose ads you want to analyze by using either the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            target
                          </code>
                          {" field or the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            advertiser_ids
                          </code>
                          {" array. In the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            target
                          </code>
                          {" field, you should provide the domain name associated with the advertiser account."}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          {"If you want to use the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            advertiser_ids
                          </code>
                          {" array, you can include "}
                          <strong className="box-content inline font-semibold">
                            up to 25 advertiser IDs
                          </strong>
                          {". Each "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            advertiser_id
                          </code>
                          {" is a unique identifier for an advertiser and can be obtained through the "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/task_post/" rel="noopener" target="_blank">
                              Google Ads Advertisers
                            </a>
                            {" "}
                          </strong>
                          {"endpoint. For more information about "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            advertiser_id
                          </code>
                          {", refer to this "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="/help-center/what-is-an-advertiser_id-in-google-ads-and-how-can-you-obtain-it" rel="noopener" target="_blank">
                              Help Center article
                            </a>
                          </strong>
                          .
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            Example:
                          </strong>
                          {" "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            “target”: “dataforseo.com”
                          </code>
                          {" or "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            “advertiser_ids”: ["AR13752565271262920705", "AR02439908557932462081"]
                          </code>
                          .
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            3.
                          </strong>
                          {" Specify the location using "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            location_name
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            location_code
                          </code>
                          {" or "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            location_coordinate
                          </code>
                          {" field. The full list of supported locations can be obtained from the separate "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/locations/" rel="noopener" target="_blank">
                              Locations
                            </a>
                          </strong>
                          {" endpoint."}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            Example:
                          </strong>
                          {" "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            “location_name”: “London,England,United Kingdom”
                          </code>
                          .
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            4.
                          </strong>
                          {" Choose the advertising platform from which you want to retrieve ad data by using the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            platform
                          </code>
                          {" field. The possible values are: "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            all
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            google_pay
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            google_maps
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            google_search
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            google_shopping
                          </code>
                          {", and "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            youtube
                          </code>
                          .
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            5.
                          </strong>
                          {" Select the format of the ads using the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            format
                          </code>
                          {" field. You can specify the following values: "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            all
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            text
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            image
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            video
                          </code>
                          .
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            6.
                          </strong>
                          {" To get data on ads within a specific time range, specify the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            date_from
                          </code>
                          {" and "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            date_to
                          </code>
                          {" fields with the respective timestamps."}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          {"Example: "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            “date_from”: “2020-01-01”
                          </code>
                          {", "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            “date_to”: “2020-03-10”
                          </code>
                          .
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            7.
                          </strong>
                          {" Additionally, you can set the crawl depth using the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            depth
                          </code>
                          {" parameter. The standard crawl depth is "}
                          <strong className="box-content inline font-semibold">
                            40 SERP results
                          </strong>
                          {", the maximum depth is "}
                          <strong className="box-content inline font-semibold">
                            700 results
                          </strong>
                          {". Note that setting "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            depth
                          </code>
                          {" "}
                          <strong className="box-content inline font-semibold">
                            above 40
                          </strong>
                          {" will result in additional charges."}
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            <em className="box-content inline italic">
                              Request example:
                            </em>
                          </strong>
                        </p>
                        {" "}
                        <div className="box-content block relative max-h-50">
                          <div className="box-content block max-h-50 mt-2 mb-6 px-2.5 rounded-[5px] overflow-auto text-primary text-xs leading-[1.0625rem] bg-color-009">
                            <code className="box-content inline [font-family:monospace]">
                              <p className="box-content block mb-4 text-base leading-6 max-lg:text-sm max-lg:leading-5.5" />
                              {" "}
                              <pre className="box-content block max-w-full py-4 pr-6 whitespace-pre-wrap [overflow-wrap:break-word]">
                                {"[\n  {\n    \"language_code\": \"en\",\n    \"location_code\": 2840,\n    \"platform\": \"google_search\",\n    \"format\": \"text\",\n    \"date_from\": \"2018-09-30\",\n    \"date_to\": \"2024-11-12\",\n    \"depth\": 41,\n    \"advertiser_ids\": [\n      \"AR13752565271262920705\",\n      \"AR13752565271262920705\"\n    ]\n  }\n]\n"}
                              </pre>
                              {" "}
                            </code>
                            <p className="box-content block mb-4 text-base leading-6 max-lg:text-sm max-lg:leading-5.5">
                              <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]" />
                            </p>
                            <i className="box-content w-3 h-3 block absolute top-2.5 right-[0.9375rem] opacity-70 p-[0.3125rem] rounded-[3px] [font-family:FontAwesome] font-normal leading-3 cursor-pointer before:content-[''] before:text-primary before:text-xs before:leading-3 hover:bg-clr-12 hover:opacity-[0.977426] focus:bg-clr-16 focus:opacity-[0.717133]" />
                          </div>
                        </div>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          <strong className="box-content inline font-semibold">
                            <em className="box-content inline italic">
                              Response example:
                            </em>
                          </strong>
                        </p>
                        {" "}
                        <div className="box-content block relative max-h-50">
                          <div className="box-content block max-h-50 mt-2 mb-6 px-2.5 rounded-[5px] overflow-auto text-primary text-xs leading-[1.0625rem] bg-color-009">
                            <code className="box-content inline [font-family:monospace]">
                              <p className="box-content block mb-4 text-base leading-6 max-lg:text-sm max-lg:leading-5.5" />
                              {" "}
                              <pre className="box-content block max-w-full py-4 pr-6 whitespace-pre-wrap [overflow-wrap:break-word]">
                                {"{\n  \"version\": \"0.1.20241101\",\n  \"status_code\": 20000,\n  \"status_message\": \"Ok.\",\n  \"time\": \"0.1075 sec.\",\n  \"cost\": 0,\n  \"tasks_count\": 1,\n  \"tasks_error\": 0,\n  \"tasks\": [\n    {\n      \"id\": \"11211908-1535-0066-0000-995f2c041af5\",\n      \"status_code\": 20000,\n      \"status_message\": \"Ok.\",\n      \"time\": \"0.0482 sec.\",\n      \"cost\": 0,\n      \"result_count\": 1,\n      \"path\": [\n        \"v3\",\n        \"serp\",\n        \"google\",\n        \"ads_search\",\n        \"task_get\",\n        \"advanced\",\n        \"11211908-1535-0066-0000-995f2c041af5\"\n      ],\n      \"data\": {\n        \"api\": \"serp\",\n        \"function\": \"task_get\",\n        \"se\": \"google\",\n        \"se_type\": \"ads_search\",\n        \"language_code\": \"en\",\n        \"location_code\": 2840,\n        \"platform\": \"google_search\",\n        \"format\": \"text\",\n        \"date_from\": \"2018-09-30\",\n        \"date_to\": \"2024-11-12\",\n        \"depth\": 41,\n        \"advertiser_ids\": [\n          \"AR13752565271262920705\",\n          \"AR13752565271262920705\"\n        ],\n        \"device\": \"desktop\",\n        \"os\": \"windows\"\n      },\n      \"result\": [\n        {\n          \"keyword\": \"ids:AR13752565271262920705,AR13752565271262920705\",\n          \"type\": \"ads_search\",\n          \"se_domain\": \"adstransparency.google.com\",\n          \"location_code\": 2840,\n          \"language_code\": \"en\",\n          \"check_url\": null,\n          \"datetime\": \"2024-11-21 17:08:48 +00:00\",\n          \"spell\": null,\n          \"refinement_chips\": null,\n          \"item_types\": [\n            \"ads_search\"\n          ],\n          \"se_results_count\": 0,\n          \"items_count\": 25,\n          \"items\": [\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 1,\n              \"rank_absolute\": 1,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR10722536040880406529\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR10722536040880406529?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/3366731893680246315\",\n                \"height\": 225,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-06-18 13:16:44 +00:00\",\n              \"last_shown\": \"2024-11-21 16:30:29 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 2,\n              \"rank_absolute\": 2,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR12740365827488874497\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR12740365827488874497?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/12218460936032361977\",\n                \"height\": 199,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-05-30 16:23:59 +00:00\",\n              \"last_shown\": \"2024-11-21 15:25:27 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 3,\n              \"rank_absolute\": 3,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR17249727445544730625\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR17249727445544730625?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/10347890168435160670\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-06-21 15:15:13 +00:00\",\n              \"last_shown\": \"2024-11-21 10:42:44 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 4,\n              \"rank_absolute\": 4,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR00784732753097654273\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR00784732753097654273?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/9542351460357964163\",\n                \"height\": 201,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:32:27 +00:00\",\n              \"last_shown\": \"2024-11-21 09:20:57 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 5,\n              \"rank_absolute\": 5,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR00625375447642800129\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR00625375447642800129?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/3248651356519787757\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 09:57:49 +00:00\",\n              \"last_shown\": \"2024-11-21 08:52:46 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 6,\n              \"rank_absolute\": 6,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR12042076438048800769\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR12042076438048800769?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/13379662968705477481\",\n                \"height\": 225,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-05-30 13:09:10 +00:00\",\n              \"last_shown\": \"2024-11-21 01:44:52 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 7,\n              \"rank_absolute\": 7,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR17473444801570406401\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR17473444801570406401?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/1641105414394893292\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-07-04 15:17:54 +00:00\",\n              \"last_shown\": \"2024-11-21 01:08:07 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 8,\n              \"rank_absolute\": 8,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR10640889605936644097\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR10640889605936644097?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/2838207111400385113\",\n                \"height\": 199,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-05-30 14:17:57 +00:00\",\n              \"last_shown\": \"2024-11-21 00:28:21 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 9,\n              \"rank_absolute\": 9,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR09896508379822555137\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR09896508379822555137?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/13134785928323047\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 11:27:59 +00:00\",\n              \"last_shown\": \"2024-11-21 00:16:00 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 10,\n              \"rank_absolute\": 10,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR04854618748897722369\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR04854618748897722369?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/9230452398675631152\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:12:13 +00:00\",\n              \"last_shown\": \"2024-11-20 17:39:24 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 11,\n              \"rank_absolute\": 11,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR01816727013944197121\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR01816727013944197121?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/15773752025748000294\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-28 13:00:11 +00:00\",\n              \"last_shown\": \"2024-11-20 15:51:54 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 12,\n              \"rank_absolute\": 12,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR13819929290680041473\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR13819929290680041473?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/18294340032311558783\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-07-08 14:17:23 +00:00\",\n              \"last_shown\": \"2024-11-14 19:36:27 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 13,\n              \"rank_absolute\": 13,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR06861227125991538689\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR06861227125991538689?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/2321777122437207576\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-06-23 14:00:03 +00:00\",\n              \"last_shown\": \"2024-11-14 19:31:43 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 14,\n              \"rank_absolute\": 14,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR07408544549506646017\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR07408544549506646017?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/9459395312870161349\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-08-21 21:43:38 +00:00\",\n              \"last_shown\": \"2024-09-27 10:29:50 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 15,\n              \"rank_absolute\": 15,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR01662930007510482945\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR01662930007510482945?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/18291553336063761605\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:01:58 +00:00\",\n              \"last_shown\": \"2024-09-07 05:52:26 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 16,\n              \"rank_absolute\": 16,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR06136059418896236545\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR06136059418896236545?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/11936678826542439633\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 11:18:26 +00:00\",\n              \"last_shown\": \"2024-08-30 18:33:18 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 17,\n              \"rank_absolute\": 17,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR02450351856812032001\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR02450351856812032001?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/8579142441311246542\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:01:28 +00:00\",\n              \"last_shown\": \"2024-07-04 14:37:49 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 18,\n              \"rank_absolute\": 18,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR12923292745233072129\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR12923292745233072129?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/9738062490339973503\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:10:40 +00:00\",\n              \"last_shown\": \"2024-07-04 14:20:59 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 19,\n              \"rank_absolute\": 19,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR11545231563230806017\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR11545231563230806017?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/15460004865836786971\",\n                \"height\": 153,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:03:01 +00:00\",\n              \"last_shown\": \"2024-06-14 12:40:09 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 20,\n              \"rank_absolute\": 20,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR11947770466740994049\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR11947770466740994049?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/10577436372011726083\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 10:01:20 +00:00\",\n              \"last_shown\": \"2024-05-22 14:48:26 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 21,\n              \"rank_absolute\": 21,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR08214837230976368641\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR08214837230976368641?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/9437093667243885247\",\n                \"height\": 153,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 09:58:08 +00:00\",\n              \"last_shown\": \"2024-05-22 14:39:14 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 22,\n              \"rank_absolute\": 22,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR03009556770549923841\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR03009556770549923841?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/11067731379200822780\",\n                \"height\": 159,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2023-06-03 11:04:08 +00:00\",\n              \"last_shown\": \"2024-05-14 08:05:29 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 23,\n              \"rank_absolute\": 23,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR11145766241396850689\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR11145766241396850689?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/12165623348263440250\",\n                \"height\": 153,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-04-15 10:11:14 +00:00\",\n              \"last_shown\": \"2024-04-29 11:53:50 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 24,\n              \"rank_absolute\": 24,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR00603931603646808065\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR00603931603646808065?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/9435649239286217035\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-03-06 21:20:29 +00:00\",\n              \"last_shown\": \"2024-04-29 11:01:41 +00:00\"\n            },\n            {\n              \"type\": \"ads_search\",\n              \"rank_group\": 25,\n              \"rank_absolute\": 25,\n              \"advertiser_id\": \"AR13752565271262920705\",\n              \"creative_id\": \"CR17660292096742916097\",\n              \"title\": \"Dataforseo OU\",\n              \"url\": \"https://adstransparency.google.com/advertiser/AR13752565271262920705/creative/CR17660292096742916097?region=US\",\n              \"verified\": true,\n              \"format\": \"text\",\n              \"preview_image\": {\n                \"url\": \"https://tpc.googlesyndication.com/archive/simgad/2635953811027937633\",\n                \"height\": 173,\n                \"width\": 380\n              },\n              \"preview_url\": null,\n              \"first_shown\": \"2024-02-13 15:00:14 +00:00\",\n              \"last_shown\": \"2024-02-26 11:19:23 +00:00\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"}
                              </pre>
                              {" "}
                            </code>
                            <p className="box-content block mb-4 text-base leading-6 max-lg:text-sm max-lg:leading-5.5">
                              <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]" />
                            </p>
                            <i className="box-content w-3 h-3 block absolute top-2.5 right-[0.9375rem] opacity-70 p-[0.3125rem] rounded-[3px] [font-family:FontAwesome] font-normal leading-3 cursor-pointer before:content-[''] before:text-primary before:text-xs before:leading-3 hover:bg-clr-12 hover:opacity-[0.977476] focus:bg-clr-16 focus:opacity-[0.71713]" />
                          </div>
                        </div>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          {"In the "}
                          <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001 max-lg:text-xs max-lg:leading-4.5 max-lg:[word-break:break-word]">
                            items
                          </code>
                          {" array of the result, you will find objects that provide information about ads from the advertisers specified in your request. "}
                          <em className="box-content inline italic">
                            <strong className="box-content inline font-semibold">
                              These objects include the following fields:
                            </strong>
                          </em>
                        </p>
                        {" "}
                        <ul className="box-content block mb-[0.9375rem] text-base leading-6 [list-style-type:none] list-outside">
                          {listRow4Data2.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles2[i]} />)}
                          <li className="box-content list-item relative pl-3 before:content-['•'] before:block before:absolute before:inset-y-0 before:right-[47.0625rem] before:left-0 before:w-1.5 before:h-6 before:text-foreground before:text-base before:font-medium before:leading-6 max-md:before:right-[17.4375rem] max-md:before:bottom-12 md:max-lg:before:right-[630.5px]">
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              url
                            </code>
                            {" – URL of the advertisement from the "}
                            <strong className="box-content inline font-semibold">
                              <a className="box-content inline text-accent cursor-pointer" data-component="link" href="https://adstransparency.google.com/?region=UA" rel="noopener nofollow" target="_blank">
                                Google Ads Transparency Center
                              </a>
                            </strong>
                            ;
                          </li>
                          <li className="box-content list-item relative pl-3 before:content-['•'] before:block before:absolute before:inset-y-0 before:right-[47.0625rem] before:left-0 before:w-1.5 before:h-6 before:text-foreground before:text-base before:font-medium before:leading-6 max-md:before:right-[17.4375rem] md:max-lg:before:right-[630.5px]">
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              format
                            </code>
                            {" – advertisement format;"}
                          </li>
                          <li className="box-content list-item relative pl-3 before:content-['•'] before:block before:absolute before:inset-y-0 before:right-[47.0625rem] before:left-0 before:w-1.5 before:h-6 before:text-foreground before:text-base before:font-medium before:leading-6 max-md:before:right-[17.4375rem] max-md:before:bottom-6 md:max-lg:before:right-[630.5px]">
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              preview_image
                            </code>
                            {" – preview image of the advertisement;"}
                          </li>
                          <li className="box-content list-item relative pl-3 before:content-['•'] before:block before:absolute before:top-0 before:right-[47.0625rem] before:bottom-6 before:left-0 before:w-1.5 before:h-6 before:text-foreground before:text-base before:font-medium before:leading-6 max-md:before:right-[17.4375rem] max-md:before:bottom-18 md:max-lg:before:right-[630.5px]">
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              rank_group
                            </code>
                            {" and "}
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              rank_absolute
                            </code>
                            {" – determine the group and absolute position of the ad in SERP, respectively;"}
                          </li>
                          <li className="box-content list-item relative pl-3 before:content-['•'] before:block before:absolute before:top-0 before:right-[47.0625rem] before:bottom-6 before:left-0 before:w-1.5 before:h-6 before:text-foreground before:text-base before:font-medium before:leading-6 max-md:before:right-[17.4375rem] max-md:before:bottom-12 md:max-lg:before:right-[630.5px]">
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              first_shown
                            </code>
                            {" and "}
                            <code className="box-content inline p-[0.1875rem] rounded-[3px] [font-family:Consolas,_Menlo,_Monaco,_'Lucida_Console',_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace,_serif] text-sm leading-[1.3125rem] bg-color-001">
                              last_shown
                            </code>
                            {" – dates when the advertisement was first and last displayed, respectively."}
                          </li>
                        </ul>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          Using this data, you can determine the types of ads your competitors run, including the creatives and text formats they use, and how these ads appear in the SERP. By analyzing competitors’ ads, you can make data-driven decisions to optimize your own Google Ads campaigns, making them more engaging and effective.
                        </p>
                        {" "}
                        <p className="box-content block mb-4 text-base leading-6 max-lg:leading-5.5 max-lg:[font-size:inherit]">
                          {"As you can see, the "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/task_post/" rel="noopener" target="_blank">
                              Google Ads Advertisers
                            </a>
                          </strong>
                          {" and "}
                          <strong className="box-content inline font-semibold">
                            <a className="box-content inline text-primary cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_search/task_post/" rel="noopener" target="_blank">
                              Google Ads Search
                            </a>
                          </strong>
                          {" endpoints allow you to effortlessly obtain comprehensive data on your advertising competitors and the ads they run."}
                        </p>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="border-t border-solid border-t-clr-8 border-b border-b-clr-8 block mt-7.5 py-4.5">
                    <div className="box-content block float-right max-md:[float:initial]" />
                    {" "}
                  </div>
                  {" "}
                </article>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
