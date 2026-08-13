import ListRow3 from "../components/list-row3";
import ListRow4, { type ListRow4Data } from "../components/list-row4";
import { ListRow3_styles } from "../_styles";
import { listRow3Data as listRow3DataContent } from "../content";
const ListRow4_data: ListRow4Data[] = [
    { text: "Discover information about advertisers on Google Ads and their campaigns." },
    { text: "Access ad details, including advertiser verification status and more." },
    { text: "Analyze competitor ads with greater precision and efficiency." }
];
/** Home Announcement Categories section. */
export default function HomeAnnouncementCategoriesSection({ listRow3Data = listRow3DataContent, listRow4Data = ListRow4_data } = {}) {
  return (
    <div className="box-content block relative z-100 bg-clr-2 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem]" id="updates-wrapper">
      <div className="box-content w-275 block mx-22.5 pt-11 max-md:w-75 max-md:mx-[37.5px] md:max-lg:w-150 md:max-lg:mx-21 2xl:mx-102.5">
        <div className="box-content block mb-[0.9375rem]">
          <div className="box-content block mb-5">
            <div className="box-content block">
              <a className="box-content inline mb-5 text-color-001 text-[0.9375rem] cursor-pointer hover:underline" data-component="link" href="/updates">
                Home
              </a>
              <span className="box-content inline">
                {" / "}
              </span>
              <a className="box-content inline mb-5 text-color-001 text-[0.9375rem] cursor-pointer hover:underline" data-component="link" href="/updates/category/announcement">
                Announcement
              </a>
            </div>
          </div>
        </div>
        {" "}
        <div className="box-content flex flex-wrap before:content-['_'] before:table before:w-0 before:h-[1368.1px] before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] max-lg:before:h-0 after:content-['_'] after:table after:w-0 after:h-[1368.1px] after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] max-lg:after:h-0">
          <div className="box-content w-60.5 h-263 border border-solid border-surface block float-left mr-[0.9375rem] mb-7.5 py-7.5 pr-5 pl-7.5 rounded-md bg-background max-md:w-67 max-lg:h-17 max-lg:mb-[0.9375rem] max-lg:p-[0.9375rem] max-lg:mr-0 md:max-lg:w-142">
            <div className="box-content block">
              <div className="box-content block">
                <div className="box-content border border-solid border-surface-3 block mb-2.5 py-1.5 px-3 rounded-md text-color-001 text-[1rem] text-left md:max-lg:px-1.5 md:max-lg:[font-size:inherit]">
                  <div className="box-content hidden p-2.5 justify-between cursor-pointer max-lg:flex">
                    <div className="box-content block">
                      CATEGORIES
                    </div>
                    {" "}
                    <div className="box-content block">
                      <span className="box-content w-7.5 h-[0.1875rem] block mb-[0.3125rem] bg-color-002" />
                      <span className="box-content w-7.5 h-[0.1875rem] block mb-[0.3125rem] bg-color-002" />
                      <span className="box-content w-7.5 h-[0.1875rem] block mb-[0.3125rem] bg-color-002" />
                    </div>
                    {" "}
                  </div>
                  <ul className="box-content block [list-style-type:none] list-inside max-lg:hidden">
                    {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
                  </ul>
                </div>
                {" "}
                <div className="box-content block max-w-full max-lg:hidden">
                  <div className="w-60.5 border border-solid border-surface-2 block max-w-full p-[0.9375rem] rounded-lg text-color-002 [font-family:Verdana,_Geneva,_sans-serif] leading-[1.25rem] bg-background [background-position:50%_50%] bg-no-repeat" id="sp-form-221066">
                    <div className="w-52.5 block max-w-full">
                      <div className="block transform-[matrix(0.9,0,0,0.9,0,0)] origin-[105px_0px] mx-auto" />
                      <form className="block">
                        <div className="block relative p-2 text-left">
                          <div className="block leading-3.5">
                            <p className="block text-center [overflow-wrap:break-word]">
                              <span className="inline text-lg leading-4.5">
                                <strong className="inline font-semibold">
                                  <span className="inline text-color-001">
                                    Subscribe To Our Newsletter
                                  </span>
                                </strong>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="h-5 block relative grow basis-full text-left" />
                        <div className="block relative p-2 text-left">
                          <label className="block mb-1 text-color-001 text-[0.9375rem] font-normal leading-[1.3125rem] [overflow-wrap:break-word] cursor-default">
                            <span className="inline">
                              Name
                            </span>
                            <strong className="inline text-clr-3 font-semibold">
                              *
                            </strong>
                          </label>
                          <input className="w-full h-[2.1875rem] border border-solid border-color-004 inline-block max-w-full pt-px pb-0.5 px-[0.55rem] rounded-sm overflow-clip text-[0.9375rem] leading-[1.3125rem] text-start whitespace-nowrap text-nowrap bg-background cursor-text" data-component="input" name="sform[TmFtZQ==]" type="text" />
                        </div>
                        <div className="block relative p-2 text-left">
                          <label className="block mb-1 text-color-001 text-[0.9375rem] font-normal leading-[1.3125rem] [overflow-wrap:break-word] cursor-default">
                            <span className="inline">
                              Email
                            </span>
                            <strong className="inline text-clr-3 font-semibold">
                              *
                            </strong>
                          </label>
                          <input className="w-full h-[2.1875rem] border border-solid border-color-004 inline-block max-w-full pt-px pb-0.5 px-[0.55rem] rounded-sm overflow-clip text-[0.9375rem] leading-[1.3125rem] text-start whitespace-nowrap text-nowrap bg-background cursor-text" data-component="input" name="sform[email]" type="email" />
                        </div>
                        <div className="block relative p-2 text-center">
                          <button className="h-[2.1875rem] inline-block min-w-12.5 max-w-full pt-px pb-0.5 px-[17.5px] rounded-sm overflow-hidden text-background text-[0.9375rem] font-normal leading-[1.4375rem] whitespace-nowrap text-nowrap bg-primary cursor-pointer hover:opacity-90" data-component="button" id="sp-d61952d8-e0c3-4ae5-b9a5-16c853b0867c">
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
            </div>
            {" "}
          </div>
          {" "}
          <div className="box-content w-187 border border-solid border-surface block float-left mb-7.5 p-5 rounded-md bg-background max-md:w-[16.5625rem] max-md:min-w-[16.5625rem] md:max-lg:w-139.5">
            <div className="box-content h-full block">
              <div className="box-content h-full block">
                <div className="box-content h-full flex max-w-190 grow">
                  <div className="box-content w-15 flex mt-16.5 flex-col max-lg:hidden" />
                  {" "}
                  <article className="box-content block max-w-162.5 mb-2.5 pb-5">
                    <div className="box-content block mt-4.5">
                      <a className="box-content inline py-2.5 px-[1.5625rem] rounded-sm text-background font-semibold bg-primary cursor-pointer hover:bg-clr-9 focus:bg-clr-12" data-component="link" href="/updates" title="Back">
                        <i className="box-content inline-block mr-2 [font-family:FontAwesome] text-base font-normal leading-4 before:content-[''] before:text-background before:text-base before:leading-4" />
                        <span className="box-content inline">
                          Back
                        </span>
                      </a>
                    </div>
                    {" "}
                    <header className="box-content block">
                      <h1 className="box-content block mt-[1.175rem] mb-2 text-color-001 text-[1.75rem] font-semibold leading-9 max-lg:mt-[27.5px] max-lg:text-[2.5625rem]" data-component="heading">
                        Introducing Google Ads Search and Advertisers in SERP API!
                      </h1>
                      {" "}
                      <p className="box-content block mb-3">
                        November,26 2024 16:01:23
                      </p>
                      {" "}
                      <div className="box-content inline-block mr-1.5 py-[0.3125rem] px-2 rounded-sm text-background text-[0.6875rem] font-semibold leading-[0.8125rem] uppercase bg-clr-4" data-component="badge">
                        Announcement
                      </div>
                      {" "}
                      <div className="box-content inline-block mr-1.5 py-[0.3125rem] px-2 rounded-sm text-background text-[0.6875rem] font-semibold leading-[0.8125rem] uppercase bg-clr-5" data-component="badge">
                        SERP API
                      </div>
                      {" "}
                    </header>
                    {" "}
                    <section className="box-content block mt-6 text-base leading-6 md:max-lg:text-[0.9375rem]">
                      <div className="box-content block mb-5">
                        <img className="box-content w-162.5 h-[20.3125rem] inline max-w-full my-[1.5625rem] rounded-md overflow-clip shadow-[var(--clr-6)_-1px_3px_11px_5px] max-md:w-[16.5625rem] max-md:h-[8.3125rem] md:max-lg:w-139.5 md:max-lg:h-[17.4375rem]" data-component="image" alt="Introducing Google Ads Search and Advertisers in SERP API!" src="/assets/cloned/images/f87a758506b9.png" />
                        {" "}
                      </div>
                      {" "}
                      <p className="box-content block mt-[1.3rem]">
                        {"Today, we’re unveiling two powerful additions to the DataForSEO "}
                        <a className="box-content inline text-accent cursor-pointer" data-component="link" href="/apis/serp-api" rel="noopener" target="_blank">
                          SERP API
                        </a>
                        {" suite: "}
                        <a className="box-content inline text-accent cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/overview/?bash" rel="noopener" target="_blank">
                          Google Ads Advertisers API
                        </a>
                        {" and "}
                        <a className="box-content inline text-accent cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_search/overview/?bash" rel="noopener" target="_blank">
                          Google Ads Search API!
                        </a>
                      </p>
                      {" "}
                      <p className="box-content block mt-[1.3rem]">
                        {"These new solutions leverage data from the "}
                        <a className="box-content inline text-accent cursor-pointer" data-component="link" href="https://adstransparency.google.com/" rel="noopener nofollow" target="_blank">
                          Google Ads Transparency Center
                        </a>
                        {" to provide detailed advertising insights. "}
                      </p>
                      {" "}
                      <p className="box-content block mt-[1.3rem]">
                        <strong className="box-content inline font-semibold">
                          You can use these new APIs to:
                        </strong>
                      </p>
                      {" "}
                      <ul className="box-content block my-[0.9375rem] [list-style-type:disc] list-inside">
                        {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} />)}
                      </ul>
                      {" "}
                      <p className="box-content block mt-[1.3rem]">
                        Here’s what our new SERP API endpoints offer in more detail:
                      </p>
                      {" "}
                      <p className="box-content block mt-[1.3rem]">
                        <i className="box-content inline-block text-accent [font-family:FontAwesome] font-normal leading-4 md:max-lg:leading-[0.9375rem] before:content-[''] before:text-accent before:text-base before:leading-4 md:max-lg:before:text-[0.9375rem] md:max-lg:before:leading-[0.9375rem]" />
                        {" "}
                        <strong className="box-content inline font-semibold">
                          Google Ads Search API
                        </strong>
                        {" delivers data on ads displayed in Google search results based on target domain name or "}
                        <a className="box-content inline text-accent cursor-pointer" data-component="link" href="/help-center/what-is-an-advertiser_id-in-google-ads-and-how-can-you-obtain-it" rel="noopener" target="_blank">
                          advertiser ID.
                        </a>
                        <br className="box-content inline" />
                        {" "}
                        <i className="box-content inline-block text-accent [font-family:FontAwesome] font-normal leading-4 md:max-lg:leading-[0.9375rem] before:content-[''] before:text-accent before:text-base before:leading-4 md:max-lg:before:text-[0.9375rem] md:max-lg:before:leading-[0.9375rem]" />
                        {" "}
                        <strong className="box-content inline font-semibold">
                          Google Ads Advertisers API
                        </strong>
                        {" provides information on advertisers that run campaigns on Google Ads based on your specified keyword and location. Results include data on ad verification and campaign details, surfacing deeper insights into competitors’ advertising strategies."}
                      </p>
                      {" "}
                      <p className="box-content block mt-[1.3rem]">
                        <strong className="box-content inline font-semibold">
                          Note:
                        </strong>
                        {" your account will be billed per each SERP containing up to 40 results."}
                      </p>
                      {" "}
                      <p className="box-content block mt-[1.3rem]">
                        <a className="box-content inline text-accent cursor-pointer" data-component="link" href="/help-center/how-to-retrieve-data-on-ads-and-advertisers-from-google-ads" rel="noopener" target="_blank">
                          Check out this article from our Help Center
                        </a>
                        {" to learn more about how Ads SERP API endpoints work and how to use them. "}
                      </p>
                      {" "}
                      <p className="box-content block mt-[1.3rem]">
                        {"Start exploring the "}
                        <a className="box-content inline text-accent cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/overview/?bash" rel="noopener" target="_blank">
                          Google Ads Advertisers API
                        </a>
                        {" and "}
                        <a className="box-content inline text-accent cursor-pointer" data-component="link" href="https://docs.dataforseo.com/v3/serp/google/ads_search/overview/?bash" rel="noopener" target="_blank">
                          Google Ads Search API
                        </a>
                        {" today and enhance your online advertising strategies!"}
                      </p>
                      {" "}
                    </section>
                    {" "}
                  </article>
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
      {" "}
    </div>
  );
}
