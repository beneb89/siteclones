import ListRow, { type ListRowData } from "../components/list-row";
import ListRow2 from "../components/list-row2";
import Tile, { type TileData } from "../components/tile";
import ListRow3 from "../components/list-row3";
import ListRow4 from "../components/list-row4";
import Tile2, { type Tile2Data } from "../components/tile2";
import { ListRow2_styles, Tile_styles, ListRow3_styles } from "../_styles";
import { listRow2Data as listRow2DataContent, listRow3Data as listRow3DataContent, listRow4Data as listRow4DataContent } from "../content";
const ListRow_data: ListRowData[] = [
    { href: "/ppc-news/2025-10/google-releases-open-source-mcp-server-for-ads-api/", label: "Google Releases Open Source MCP Server for Ads API", label2: "Google Releases Open Source MCP Server for Ads API" },
    { href: "/ppc-news/2025-07/google-ads-api-may-support-third-party-genai-tools-via-mcp/", label: "Google Ads API May Support Third-Party GenAI Tools via MCP", label2: "Google Ads API May Support Third-Party GenAI Tools via MCP" },
    { href: "/ppc-news/2026-05/microsoft-activate-2026-recap/", label: "Microsoft Activate 2026 Recap", label2: "Microsoft Activate 2026 Recap" },
    { href: "/ppc-news/2025-11/copilot-powered-image-animation-enters-global-pilot/", label: "Copilot-Powered Image Animation Enters Global Pilot", label2: "Copilot-Powered Image Animation Enters Global Pilot" },
    { href: "/ppc-news/2026-01/canada-cannabis-pilot-program-gets-extension/", label: "Canada Cannabis Pilot Program Gets Extension", label2: "Canada Cannabis Pilot Program Gets Extension" }
];
const Tile_data: TileData[] = [
    { kind: "link", href: "mailto:?subject=Microsoft%20Advertising%20MCP%20Server%20in%20Open%20Pilot&body=Microsoft%20Advertising%20MCP%20Server%20in%20Open%20Pilot%20https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" },
    { kind: "link", href: "https://www.linkedin.com/shareArticle?mini=true&url=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" },
    { kind: "link", href: "https://x.com/share?&text=Microsoft%20Advertising%20MCP%20Server%20in%20Open%20Pilot&url=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" },
    { kind: "link", href: "https://www.facebook.com/sharer.php?u=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" },
    { href: "fb-messenger://share/?link=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" },
    { kind: "link", href: "https://t.me/share/url?&text=Microsoft%20Advertising%20MCP%20Server%20in%20Open%20Pilot&url=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" },
    { href: "whatsapp://send?text=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" },
    { kind: "link", href: "http://www.reddit.com/submit?url=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" }
];
const Tile2_data: Tile2Data[] = [
    { id: "b4-11-1-chk-0", value: "Daily", htmlFor: "b4-11-1-chk-0", text: " Daily " },
    { id: "b4-11-1-chk-1", value: "Weekly", htmlFor: "b4-11-1-chk-1", text: " Weekly " },
    { id: "b4-11-1-chk-2", value: "Monthly", htmlFor: "b4-11-1-chk-2", text: " Monthly " }
];
/** Hero section — the page's lead block. */
export default function HeroSection({ listRowData = ListRow_data, listRow2Data = listRow2DataContent, tileData = Tile_data, listRow3Data = listRow3DataContent, listRow4Data = listRow4DataContent, tile2Data = Tile2_data } = {}) {
  return (
    <div className="grid relative gap-y-12 gap-x-10 grid-cols-[2.823fr_1fr] max-lg:grid-cols-1 max-lg:gap-x-[initial] 2xl:gap-x-45" id="content">
      <div className="block relative order-[1] text-lg leading-[1.6875rem]" id="primary">
        <div className="h-full block">
          <div className="h-full grid gap-x-10 grid-cols-[125px_675px] grid-rows-1 aspect-[0.393] max-lg:grid-cols-1 max-md:aspect-[0.131] max-lg:gap-x-[initial] md:max-lg:aspect-[0.323] 2xl:gap-x-45 2xl:grid-cols-[250px_677px] 2xl:aspect-[0.519]">
            <div className="block max-lg:hidden">
              <div className="h-55 flex sticky top-5 justify-end">
                <div className="w-30 flex min-w-30 flex-col items-start">
                  <div className="flex flex-col leading-4.5">
                    <div className="flex flex-col flex-wrap grow">
                      <div className="flex items-center">
                        <a className="h-5 flex rounded-md justify-start items-center grow text-color-003 cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-color-003 focus:outline-color-003 focus:[text-decoration-color:var(--color-003)]" data-component="link" href={"mailto:?subject=Microsoft%20Advertising%20MCP%20Server%20in%20Open%20Pilot&body=Microsoft%20Advertising%20MCP%20Server%20in%20Open%20Pilot%20https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/"} target="_blank">
                          {" "}
                          <i className="flex justify-center items-center [font-family:powerkit-icons] text-xl leading-5 before:content-[''] before:block before:w-5 before:h-5 before:text-color-003 before:text-xl before:leading-5 before:text-left max-lg:before:w-auto max-lg:before:h-auto hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-color-003 focus:text-color-003 focus:outline-color-003 focus:[text-decoration-color:var(--color-003)]" />
                          {" "}
                        </a>
                      </div>
                      <div className="flex mt-5 items-center">
                        <a className="h-5 flex rounded-md justify-start items-center grow text-color-004 cursor-pointer hover:border-clr-11 hover:text-clr-11 hover:outline-clr-11 hover:[text-decoration-color:var(--clr-11)] focus:border-clr-30 focus:text-clr-30 focus:outline-clr-30 focus:[text-decoration-color:var(--clr-30)]" data-component="link" href={"https://www.linkedin.com/shareArticle?mini=true&url=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/"} target="_blank">
                          {" "}
                          <i className="flex justify-center items-center [font-family:powerkit-icons] text-xl leading-5 before:content-[''] before:block before:w-[1.0625rem] before:h-5 before:text-color-004 before:text-xl before:leading-5 before:text-left max-lg:before:w-auto max-lg:before:h-auto hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] focus:border-color-004 focus:text-color-004 focus:outline-color-004 focus:[text-decoration-color:var(--color-004)]" />
                          {" "}
                        </a>
                      </div>
                      <div className="flex mt-5 items-center">
                        <a className="h-5 flex rounded-md justify-start items-center grow text-color-006 cursor-pointer hover:border-clr-12 hover:text-clr-12 hover:outline-clr-12 hover:[text-decoration-color:var(--clr-12)] focus:border-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]" data-component="link" href={"https://x.com/share?&text=Microsoft%20Advertising%20MCP%20Server%20in%20Open%20Pilot&url=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/"} target="_blank">
                          {" "}
                          <i className="flex justify-center items-center [font-family:powerkit-icons] text-xl leading-5 before:content-[''] before:block before:w-5 before:h-5 before:text-color-006 before:text-xl before:leading-5 before:text-left max-lg:before:w-auto max-lg:before:h-auto hover:border-color-006 hover:text-color-006 hover:outline-color-006 hover:[text-decoration-color:var(--color-006)] focus:border-color-006 focus:text-color-006 focus:outline-color-006 focus:[text-decoration-color:var(--color-006)]" />
                          {" "}
                        </a>
                      </div>
                      <div className="flex mt-5 items-center">
                        <a className="h-5 flex rounded-md justify-start items-center grow text-accent cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)] focus:border-accent focus:outline-accent focus:[text-decoration-color:var(--accent)]" data-component="link" href="https://www.facebook.com/sharer.php?u=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" target="_blank">
                          {" "}
                          <i className="flex justify-center items-center [font-family:powerkit-icons] text-xl leading-5 before:content-[''] before:block before:w-5 before:h-5 before:text-accent before:text-xl before:leading-5 before:text-left max-lg:before:w-auto max-lg:before:h-auto hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)] focus:border-accent focus:text-accent focus:outline-accent focus:[text-decoration-color:var(--accent)]" />
                          {" "}
                        </a>
                      </div>
                      <div className="flex mt-5 items-center">
                        <a className="h-5 flex rounded-md justify-start items-center grow text-color-007 cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)] focus:border-color-007 focus:outline-color-007 focus:[text-decoration-color:var(--color-007)]" data-component="link" href={"https://t.me/share/url?&text=Microsoft%20Advertising%20MCP%20Server%20in%20Open%20Pilot&url=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/"} target="_blank">
                          {" "}
                          <i className="flex justify-center items-center [font-family:powerkit-icons] text-xl leading-5 before:content-[''] before:block before:w-5 before:h-5 before:text-color-007 before:text-xl before:leading-5 before:text-left max-lg:before:w-auto max-lg:before:h-auto hover:border-color-007 hover:text-color-007 hover:outline-color-007 hover:[text-decoration-color:var(--color-007)] focus:border-color-007 focus:text-color-007 focus:outline-color-007 focus:[text-decoration-color:var(--color-007)]" />
                          {" "}
                        </a>
                      </div>
                      <div className="flex mt-5 items-center">
                        <a className="h-5 flex rounded-md justify-start items-center grow text-color-005 cursor-pointer hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:border-clr-31 focus:text-clr-31 focus:outline-clr-31 focus:[text-decoration-color:var(--clr-31)]" data-component="link" href="http://www.reddit.com/submit?url=https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" target="_blank">
                          {" "}
                          <i className="flex justify-center items-center [font-family:powerkit-icons] text-xl leading-5 before:content-[''] before:block before:w-5 before:h-5 before:text-color-005 before:text-xl before:leading-5 before:text-left max-lg:before:w-auto max-lg:before:h-auto hover:border-color-005 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)] focus:border-color-005 focus:text-color-005 focus:outline-color-005 focus:[text-decoration-color:var(--color-005)]" />
                          {" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="block relative mb-4">
                <div className="h-full block z-1">
                  <div className="h-full block relative">
                    <div className="block z-2 max-w-305 mb-8 text-sm font-semibold leading-[1.3125rem] max-md:max-w-none md:max-lg:max-w-180 2xl:max-w-358" id="breadcrumbs">
                      <span className="inline">
                        <span className="inline">
                          <a className="inline cursor-pointer hover:border-clr-16 hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:border-clr-32 focus:text-clr-32 focus:outline-clr-32 focus:[text-decoration-color:var(--clr-32)]" data-component="link" href="/">
                            Home
                          </a>
                        </span>
                        {" » "}
                        <span className="inline">
                          <a className="inline cursor-pointer hover:border-clr-16 hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:border-clr-32 focus:text-clr-32 focus:outline-clr-32 focus:[text-decoration-color:var(--clr-32)]" data-component="link" href="/ppc-news/">
                            PPC News
                          </a>
                        </span>
                        {" » "}
                        <span className="inline">
                          <a className="inline cursor-pointer hover:border-clr-16 hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] focus:border-clr-32 focus:text-clr-32 focus:outline-clr-32 focus:[text-decoration-color:var(--clr-32)]" data-component="link" href="/ppc-news/2026-06/">
                            2026-06
                          </a>
                        </span>
                        {" » "}
                        <span className="inline opacity-50" aria-current="page">
                          <strong className="inline font-black">
                            Microsoft Advertising MCP Server in Open Pilot
                          </strong>
                        </span>
                      </span>
                    </div>
                    <h1 className="block max-w-[42.3125rem] mt-5 text-[2.625rem] font-extrabold leading-[3rem] tracking-[-0.52px] [word-break:break-word] [overflow-wrap:break-word] max-md:text-4xl max-md:leading-[2.5625rem] max-md:tracking-[-0.45px]" data-component="heading">
                      <span className="inline-block">
                        Microsoft Advertising MCP Server in Open Pilot
                      </span>
                    </h1>
                    <div className="flex mt-5 py-3 flex-wrap items-center text-muted-foreground text-xs font-semibold leading-4.5 tracking-[0.2px]">
                      <div className="flex items-center">
                        June 19, 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block max-w-[42.3125rem]">
                <div className="h-full block max-w-[42.3125rem] leading-[1.875rem] tracking-[-0.2px] [word-break:break-word] before:content-[''] before:table before:w-0 before:h-0 after:content-[''] after:table after:w-0 after:h-0">
                  <p className="block mb-8">
                    {"The "}
                    <strong className="inline font-bold">
                      Microsoft Advertising MCP server
                    </strong>
                    {" is now in "}
                    <b className="inline font-bold">
                      open pilot
                    </b>
                    {", enabling businesses and agencies to build "}
                    <strong className="inline font-bold">
                      custom AI workflows
                    </strong>
                    {" across different AI environments including "}
                    <strong className="inline font-bold">
                      {"M365 Copilot, ChatGPT, Claude "}
                    </strong>
                    and others using live campaign data
                  </p>
                  {" "}
                  <figure className="block relative max-w-full my-8">
                    <a className="inline-block cursor-pointer after:content-[''] after:block after:absolute after:top-4 after:right-4 after:bottom-[323.7px] after:left-[38.6875rem] after:w-10 after:h-10 after:text-border after:text-base after:leading-10 after:tracking-[-0.2px] after:text-center after:bg-clr-2 after:opacity-0 after:rounded-tl-[50%] max-md:after:bottom-[8.275rem] max-md:after:left-[17.4375rem] md:max-lg:after:bottom-[20.3rem] md:max-lg:after:left-[38.8125rem] 2xl:after:bottom-[20.3rem] 2xl:after:left-[38.8125rem]" data-component="link" href="/wp-content/uploads/2026/06/microsoft-advertising-mcp-server-the.jpg">
                      <img className="w-[42.1875rem] h-95 inline min-w-full max-w-full overflow-clip align-bottom max-md:w-[20.9375rem] max-md:h-47 md:max-lg:w-[42.3125rem] md:max-lg:h-[23.8125rem] 2xl:w-[42.3125rem] 2xl:h-[23.8125rem]" data-component="image" alt="Screenshot of a Work IQ chat interface showing a Microsoft Advertising campaign analysis for a Contoso laptop search campaign, displaying performance metrics, main issues with high CPA, and optimization recommendations." src="/assets/cloned/images/74774c9e0359.jpg" />
                    </a>
                  </figure>
                  {" "}
                  <p className="block my-8">
                    {"The pilot focuses on "}
                    <strong className="inline font-bold">
                      read-only access
                    </strong>
                    , facilitating the integration of advertising data seamlessly into existing workflows directly.
                  </p>
                  {" "}
                  <p className="block my-8">
                    {"Read the official announcement here: "}
                    <a className="inline underline cursor-pointer hover:border-clr-17 hover:text-clr-17 hover:outline-clr-17 hover:[text-decoration-color:var(--clr-17)] hover:no-underline focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)] focus:no-underline" data-component="link" href="https://about.ads.microsoft.com/en/blog/post/june-2026/building-a-new-ai-economy-that-creates-value-for-everyone" rel="noopener noreferrer" target="_blank">
                      Building a new AI economy that creates value for everyone
                    </a>
                    .
                  </p>
                  <div className="block my-8" />
                  <div className="block my-8">
                    <span className="inline pb-[0.3125rem] text-[1.4375rem] font-bold leading-[2.3125rem] capitalize">
                      Related posts:
                    </span>
                    <ul className="block mb-4 pl-10 [list-style-type:disc] list-outside">
                      {listRowData.map((d, i) => <ListRow key={i} d={d} />)}
                    </ul>
                  </div>
                  <div className="block clear-both my-2 text-center">
                    <div className="block">
                      <br className="inline" />
                      {" "}
                      <div className="block relative my-7.5 px-[0.9375rem] text-color-001 text-left" id="lasso-anchor-id-14138-6a7ba90650003">
                        <div className="flex -mx-[0.9375rem] p-5 rounded-[10px] flex-wrap bg-border shadow-[var(--clr-3)_0px_1px_2px_0px]">
                          <div className="w-[5.7125rem] h-9 block absolute -top-4.5 -left-2.5 z-500 min-w-0 py-2.5 px-[0.9375rem] text-border text-base font-bold leading-4 bg-clr-4 shadow-[var(--clr-5)_2px_2px_2px_0px] after:content-['_'] after:block after:absolute after:top-9 after:right-[5.0875rem] after:-bottom-[0.4375rem] after:-left-2.5 after:w-5 after:h-[0.4375rem] after:text-border after:text-base after:font-bold after:leading-4 after:tracking-[-0.2px] after:text-left after:[filter:brightness(0.5)]">
                            {" Our Pick "}
                          </div>
                          {" "}
                          <div className="w-[444.5px] block relative max-w-[70%] px-2.5 shrink-0 basis-[70%] max-md:w-[206.5px] max-md:px-0 md:max-lg:w-[445.9px] 2xl:w-[445.9px]">
                            <a className="block my-2.5 text-[1.5625rem] font-bold leading-8 cursor-pointer max-md:text-[1.3125rem] max-md:leading-[1.6875rem]" data-component="link" href="/l/clickpatrol/" rel="nofollow noopener sponsored" target="_blank" title="1 In 5 Clicks On Your Ads Will Never Convert. Ever.">
                              {" 1 In 5 Clicks On Your Ads Will Never Convert. Ever. "}
                            </a>
                            {" "}
                            <div className="block" />
                            {" "}
                            <div className="block mb-5 text-base leading-[1.625rem] [overflow-wrap:anywhere]">
                              <p className="block mb-2.5">
                                {"Bots, competitors, and click farms do not just "}
                                <strong className="inline font-bold">
                                  waste your ad budget
                                </strong>
                                {". They also pollute your "}
                                <strong className="inline font-bold">
                                  remarketing lists
                                </strong>
                                {" and distort your data. Every fake click becomes someone you pay to target again."}
                              </p>
                              <p className="block mb-2.5">
                                <strong className="inline font-bold">
                                  {"ClickPatrol "}
                                </strong>
                                {"detects and blocks click fraud automatically, keeping your traffic, audiences, and data clean so your budget goes to real users. Trusted by "}
                                <strong className="inline font-bold">
                                  1,500+ businesses worldwide
                                </strong>
                                .
                              </p>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="block relative max-w-[30%] mb-[0.9375rem] pl-2.5 shrink-0 basis-[30%] text-center max-md:pl-[0.9375rem]">
                            <a className="inline pb-2.5 text-foreground font-bold cursor-pointer" data-component="link" href="/l/clickpatrol/" rel="nofollow noopener sponsored" target="_blank" title="1 In 5 Clicks On Your Ads Will Never Convert. Ever.">
                              {" "}
                              <img className="w-full h-[11.3125rem] inline-block max-w-full max-h-87.5 rounded-sm overflow-clip object-contain aspect-[auto_500/500] align-middle max-md:h-18.5" data-component="image" alt="1 In 5 Clicks On Your Ads Will Never Convert. Ever." height="500" src="/assets/cloned/images/08c8c4f4e60f.png" width="500" />
                              {" "}
                            </a>
                            {" "}
                          </div>
                          {" "}
                          <div className="block relative max-w-[50%] px-2.5 shrink-0 basis-1/2 max-md:pl-0">
                            <a className="inline-block mr-2.5 mb-2.5 py-2.5 px-[0.9375rem] rounded-sm text-border text-[0.9375rem] font-bold leading-[1.3125rem] text-center bg-primary cursor-pointer max-md:py-[0.9375rem] max-md:mr-0 max-md:mb-0 hover:shadow-[var(--clr-18)_0px_0px_0px_2.77468px_inset]" data-component="button" href="/l/clickpatrol/" rel="nofollow noopener sponsored" target="_blank" title="1 In 5 Clicks On Your Ads Will Never Convert. Ever.">
                              {" Learn More "}
                            </a>
                            {" "}
                          </div>
                          {" "}
                          <div className="block relative max-w-[50%] px-2.5 shrink-0 basis-1/2 text-right max-md:pr-0" />
                          {" "}
                          <div className="block relative max-w-[50%] pr-[0.9375rem] pl-2.5 shrink-0 basis-1/2 max-md:pr-0">
                            {" "}
                          </div>
                          {" "}
                          <div className="block relative max-w-[50%] pr-2.5 pl-[0.9375rem] shrink-0 basis-1/2 text-right max-md:pl-0">
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full block mt-16">
                <ul className="h-full flex flex-wrap justify-center items-start text-sm font-semibold leading-[1.3125rem] tracking-[-0.35px] [list-style-type:none] list-outside">
                  {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
                </ul>
              </div>
              <div className="w-full block mt-16 py-8 px-16 rounded-xl text-center bg-border max-lg:p-4">
                <div className="block">
                  <h5 className="block text-2xl font-extrabold leading-[1.6875rem] tracking-[-0.3px] [overflow-wrap:break-word]" data-component="heading">
                    Share this article
                  </h5>
                </div>
                <div className="flex mt-8 flex-wrap justify-center leading-4.5">
                  <div className="flex flex-wrap justify-center">
                    {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
                  </div>
                </div>
                <div className="block mt-8">
                  <div className="flex relative">
                    <input className="w-auto h-10 border border-solid border-clr-8 block py-1.5 pr-12 pl-4 rounded-md overflow-clip text-xs font-semibold leading-6.5 text-start bg-background cursor-text" data-component="input" type="text" value="https://ppcnewsfeed.com/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/" />
                    {" "}
                    <button className="w-12 h-10 flex absolute top-0 right-0 min-w-0 rounded-md justify-center items-center text-border text-sm font-semibold leading-4 cursor-pointer" data-component="button">
                      <span className="block text-foreground [font-family:cs-icons] font-normal leading-3.5 before:content-[''] before:text-foreground before:text-sm before:leading-3.5 before:text-center" />
                      {" "}
                    </button>
                  </div>
                  <span className="inline mt-2 text-muted-foreground text-xs font-semibold leading-4.5">
                    Shareable URL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="block order-[2]" id="secondary">
        <div className="h-full flex flex-col gap-x-10 max-lg:block max-lg:[flex-direction:initial]">
          <div className="block relative mb-10 p-6 rounded-xl overflow-hidden bg-border shadow-[var(--clr-1)_0px_1px_3px_0px]">
            <div className="block relative">
              <div className="block relative">
                <h2 className="border-b border-solid border-b-surface block -mt-2.5 mb-4 pb-3.5 text-xs font-semibold leading-[0.875rem] uppercase [overflow-wrap:break-word]" data-component="heading">
                  RECENT POSTS
                </h2>
                {" "}
                <ul className="block [list-style-type:disc] list-outside">
                  {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
                </ul>
              </div>
            </div>
          </div>
          <div className="block relative mb-10 p-6 rounded-xl overflow-hidden bg-border shadow-[var(--clr-1)_0px_1px_3px_0px]">
            <div className="block relative">
              <div className="block relative">
                <h2 className="border-b border-solid border-b-surface block -mt-2.5 mb-4 pb-3.5 text-xs font-semibold leading-[0.875rem] uppercase [overflow-wrap:break-word]" data-component="heading">
                  MONTHLY PPC NEWS ARCHIVES
                </h2>
                {" "}
                <div className="h-89 block sticky top-0 rounded-xl overflow-hidden text-sm leading-[1.3125rem] bg-border shadow-[var(--clr-1)_0px_1px_3px_0px] max-lg:relative max-lg:bottom-0 max-lg:inset-x-0">
                  <div className="block">
                    <ul className="block mb-4 pl-4 [list-style-type:disc] list-outside">
                      {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} />)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block relative mb-10 p-6 rounded-xl overflow-hidden bg-border shadow-[var(--clr-1)_0px_1px_3px_0px]">
            <div className="block relative">
              <div className="block relative">
                <h2 className="border-b border-solid border-b-surface block -mt-2.5 mb-4 pb-3.5 text-xs font-semibold leading-[0.875rem] uppercase [overflow-wrap:break-word]" data-component="heading">
                  Found missing news?
                </h2>
                {" "}
                <p className="block mb-4 text-muted-foreground text-sm leading-[1.3125rem]">
                  Have you spotted a new feature that is missing here? Let us know about it!
                </p>
                {" "}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="block">
                    <a className="inline py-3 px-8 rounded-md align-middle text-border text-sm font-semibold leading-3.5 text-center whitespace-nowrap text-nowrap bg-primary cursor-pointer" data-component="link" href="/ppc-news-submission-form/">
                      Submit news
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[420.7px] block sticky top-5 p-6 rounded-xl overflow-hidden bg-border shadow-[var(--clr-1)_0px_1px_3px_0px] max-lg:h-[399.7px] max-lg:relative max-md:top-22.5 max-md:-bottom-22.5 max-lg:inset-x-0 md:max-lg:-bottom-5 2xl:h-[399.7px]">
            <div className="block relative">
              <div className="block relative">
                <h2 className="border-b border-solid border-b-surface block -mt-2.5 mb-4 pb-3.5 text-xs font-semibold leading-[0.875rem] uppercase [overflow-wrap:break-word]" data-component="heading">
                  Subscribe to our Newsletter
                </h2>
                {" "}
                <p className="block mb-4 text-muted-foreground text-sm leading-[1.3125rem]">
                  Receive a dose of fresh PPC updates directly in your inbox. You decide the pace.
                </p>
                {" "}
                <div className="block relative" id="bitforms_4_26757_1">
                  <form className="grid rounded-xl bg-border shadow-[var(--clr-1)_0px_1px_3px_0px] grid-cols-60" id="form-bitforms_4_26757_1">
                    {" "}
                    <div className="h-[5.1875rem] min-h-[3.3125rem] block col-start-1 col-end-61 row-start-1 row-end-54">
                      <div className="block relative py-[0.4375rem] pr-2.5">
                        <div className="block">
                          <label className="flex mb-2 items-center text-sm font-semibold leading-[1.3125rem] cursor-default" htmlFor="b4-5-1" id="b4-5-1-lbl">
                            {" Email Address: "}
                          </label>
                        </div>
                        <div className="block">
                          <div className="block relative">
                            <input className="w-full h-10 border border-solid border-clr-8 inline-block py-1.5 px-4 rounded-md overflow-clip text-sm leading-6.5 text-start bg-surface cursor-text" data-component="input" aria-describedby="b4-5-err-txt" aria-required="true" id="b4-5-1" name="email-b4-5" type="email" />
                          </div>
                          <div className="block opacity-0" aria-live="assertive" role="alert">
                            <div className="block" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-30.5 min-h-26 block col-start-1 col-end-61 row-start-54 row-end-158">
                      <div className="block relative py-[0.4375rem] pr-2.5">
                        <div className="block">
                          <label className="flex mb-2 items-center text-sm font-semibold leading-[1.3125rem] cursor-default" htmlFor="b4-11-1" id="b4-11-1-lbl">
                            {" Email Frequency: "}
                          </label>
                        </div>
                        <div className="block">
                          <div className="grid gap-y-[0.3125rem] gap-x-2.5 grid-cols-1" aria-describedby="b4-11-err-txt" aria-labelledby="b4-11-1-lbl" aria-required="true" role="radiogroup">
                            {tile2Data.map((d, i) => <Tile2 key={i} d={d} />)}
                          </div>
                          <div className="block opacity-0" aria-live="assertive" role="alert">
                            <div className="block" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-13.5 min-h-[2.1875rem] block col-start-1 col-end-61 row-start-158 row-end-193">
                      <div className="flex relative py-[0.4375rem] pr-2.5">
                        <div className="w-full block">
                          <div className="block">
                            <button className="w-full h-10 inline-flex py-3 px-6 rounded-md justify-center items-center text-border text-sm font-semibold leading-4 text-center bg-primary cursor-pointer" data-component="button" aria-describedby="b4-1-err-txt" name="button-b4-1" type="submit">
                              {" Subscribe "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  {" "}
                  <div className="block" id="bf-form-msg-wrp-bitforms_4_26757_1" />
                  <div className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap" aria-live="polite" role="status" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
