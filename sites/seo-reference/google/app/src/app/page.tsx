import DropdownMenu from "./ditto/DropdownMenu";
import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import PageSummarySection from "./sections/page-summary-section";
import PreviousArrowBackSection from "./sections/previous-arrow-back-section";
import ExceptAsOtherwiseSection from "./sections/except-as-otherwise-section";
import BlogVisitOurSection from "./sections/blog-visit-our-section";
import Section7 from "./sections/section7";
import AndroidChromeFirebaseSection from "./sections/android-chrome-firebase-section";
import ListRow, { type ListRowData } from "./components/list-row";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import { ListRow_styles } from "./_styles";

const ListRow_data: ListRowData[] = [
    { href: "/google-ads/api/docs/api-policy/rate-sheet", label: "Rate sheet" },
    { href: "/google-ads/api/docs/api-policy/rmf", label: "Required Minimum Functionality" },
    { href: "/google-ads/api/docs/api-policy/non-compliance-fee", label: "Non-compliance fees" },
    { href: "/google-ads/api/docs/api-policy/terms", label: "Terms & conditions" },
    { href: "/google-ads/api/docs/api-policy/eu-par", label: "Support for European Union Political Ads Regulation" }
];

export default function Page() {
  return (
    <>
      {" "}
      <a className="w-12.5 h-0.5 border border-solid border-border block absolute -top-1000 -left-1600 -z-1 min-w-9 px-6 rounded-sm overflow-hidden align-middle text-clr-0 [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-8.5 text-center whitespace-nowrap [word-break:break-word] text-nowrap cursor-pointer" href="#main-content">
        {" Skip to main content "}
      </a>
      {" "}
      <section className="min-h-full flex flex-col">
        <devsite-cookie-notification-bar class="block" />
        <Navbar />
        {" "}
        <div className="w-[16.8125rem] h-full block fixed top-0 z-1 min-w-0 bg-surface-3 shadow-[var(--clr-1)_0px_1px_2px_0px,var(--clr-2)_0px_1px_3px_1px] max-lg:hidden after:content-[''] after:block after:fixed after:top-200 after:right-[62.5625rem] after:-bottom-2.5 after:left-0 after:w-[17.4375rem] after:h-2.5 after:bg-background max-lg:after:top-auto max-lg:after:right-auto 2xl:after:top-270 2xl:after:right-[102.5625rem]" />
        <devsite-book-nav class="w-[16.8125rem] h-[22.8125rem] block fixed top-24 z-1004 min-w-0 max-h-176 overflow-x-hidden overflow-y-auto transform-[none] 2xl:max-h-246">
          <div className="w-[16.8125rem] h-[5.0625rem] border-b border-solid border-b-border flex sticky top-0 z-2 mb-3 p-6 bg-surface-3 max-lg:hidden">
            <span className="w-0 h-8 block [font-family:'Material_Icons'] text-[1.5rem] whitespace-nowrap text-nowrap [font-feature-settings:'liga'] before:content-['filter\_list'] before:flex before:absolute before:inset-y-6 before:right-[13.3125rem] before:left-6 before:w-8 before:h-8 before:text-muted-foreground before:text-sm before:leading-3.5 max-lg:before:right-auto max-lg:before:bottom-auto" aria-hidden="true" />
            {" "}
            <input className="w-full h-8 block max-w-full py-[0.4375rem] px-8 rounded-sm overflow-clip align-middle text-muted-foreground text-[0.8125rem] leading-5 bg-surface-2 cursor-text hover:bg-background focus:bg-surface-3 focus:shadow-[var(--clr-1)_0px_1px_2px_0px,var(--clr-2)_0px_1px_3px_1px]" data-ditto-id="style-type-to-filter" data-component="input" aria-label="Type to filter" placeholder="Filter" role="searchbox" type="text" />
            {" "}
          </div>
          {" "}
          <nav className="block text-[0.8125rem]" data-component="nav" aria-label="Side menu">
            {" "}
            <div className="block transform-[none] max-lg:flex">
              {" "}
              <div className="w-full block max-lg:shrink-0">
                <ul className="block pb-16 [list-style-type:none] list-outside max-lg:pb-30">
                  <li className="list-item leading-4">
                    <a className="h-6 flex mr-2 py-1 pr-2 pl-6 rounded-tr-xl rounded-br-xl [word-break:break-word] cursor-pointer hover:bg-surface-2 focus:bg-surface-2" data-component="link" href="/google-ads/api/docs/api-policy/developer-token">
                      <span className="block overflow-x-clip">
                        Developer Token
                      </span>
                    </a>
                  </li>
                  <li className="list-item leading-4">
                    <a className="h-6 flex mr-2 py-1 pr-2 pl-6 rounded-tr-xl rounded-br-xl text-accent font-medium [word-break:break-word] bg-surface-4 cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" aria-current="page" href="/google-ads/api/docs/api-policy/access-levels">
                      <span className="block overflow-x-clip">
                        {"Access levels & permissible use"}
                      </span>
                    </a>
                  </li>
                  <li className="list-item leading-4">
                    <a className="h-6 flex mr-2 py-1 pr-2 pl-6 rounded-tr-xl rounded-br-xl [word-break:break-word] cursor-pointer hover:bg-surface-2 focus:bg-surface-2" data-component="link" href="/google-ads/api/docs/api-policy/brand-verification">
                      <span className="block overflow-x-clip">
                        Brand verification
                      </span>
                      <span className="block -my-px ml-1 [font-family:'Material_Icons'] text-lg leading-4.5 whitespace-nowrap text-nowrap [font-feature-settings:'liga'] cursor-default before:content-['new\_releases'] before:text-muted-foreground before:text-lg before:leading-4.5" aria-hidden="true" />
                    </a>
                  </li>
                  {ListRow_data.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                </ul>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
        </devsite-book-nav>
        <div className="w-[16.8125rem] h-16 block fixed bottom-0 z-1004 min-w-0 bg-surface-3 pointer-events-none max-lg:hidden" style={{ maskImage: "linear-gradient(var(--clr-0), var(--clr-3) 28px)" }} />
        <button className="w-10 h-10 flex fixed bottom-4 z-1004 min-w-6 rounded-[50%] justify-center items-center overflow-hidden align-middle text-muted-foreground [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-8.5 text-center whitespace-nowrap text-nowrap bg-surface-2 shadow-[var(--clr-1)_0px_1px_2px_0px,var(--clr-2)_0px_2px_6px_2px] transform-[matrix(1,0,0,1,221,0)] cursor-pointer max-lg:hidden hover:bg-background focus:bg-background" data-ditto-id="menu-trigger-hide-side-navigation" data-component="button" aria-expanded="true" aria-haspopup="menu" aria-label="Hide side navigation">
          <span className="w-5 h-5 block -top-0.5 mx-2 align-middle [font-family:'Material_Icons'] text-xl font-normal leading-5 [font-feature-settings:'liga'] before:content-['chevron\_left'] before:text-muted-foreground before:text-xl before:leading-5 before:text-center" />
        </button>
        {" "}
        <section className="flex mt-24 flex-col grow shrink-0 basis-[0%] max-lg:mt-12" id="gc-wrapper">
          <main className="w-full grid relative grow gap-6 grid-cols-[269px_803px_160px] max-lg:block max-lg:min-w-full max-lg:grid-cols-[269px_1fr_0px] 2xl:grid-cols-[468px_936px_468px]" id="main-content" role="main">
            <div className="block min-w-0 mt-6 mr-6 -ml-2 col-start-3 row-start-1 max-lg:hidden">
              <div className="h-146 flex fixed right-6 left-278 max-w-36 max-h-164 pl-2 flex-col bg-background 2xl:h-82 2xl:right-[7.1875rem] 2xl:left-361 2xl:max-w-113 2xl:max-h-234">
                <devsite-toc class="block overflow-auto text-[0.8125rem] max-lg:hidden" data-component="nav" aria-label="On this page" role="navigation">
                  <ul className="border-l-4 border-solid border-l-color-005 block pr-2 pl-3 [list-style-type:none] list-outside">
                    <li className="flex leading-4">
                      <span className="flex pb-1 text-color-002 font-bold" aria-level="2" role="heading">
                        <span className="block overflow-x-clip whitespace-nowrap">
                          On this page
                        </span>
                      </span>
                    </li>
                    <li className="list-item leading-4">
                      <a className="h-6 flex py-1 text-accent font-medium [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#access-levels">
                        <span className="block overflow-x-clip">
                          Access levels
                        </span>
                      </a>
                    </li>
                    <li className="list-item leading-4">
                      <a className="flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#test-account-access">
                        <span className="block overflow-x-clip">
                          Test Account Access level
                        </span>
                      </a>
                      <ul className="block pl-3 [list-style-type:none] list-outside">
                        <li className="list-item">
                          <a className="flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#how-to-apply-for-test-account-access">
                            <span className="block overflow-x-clip">
                              How to apply for Test Account Access level
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item leading-4">
                      <a className="flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#explorer-access">
                        <span className="block overflow-x-clip">
                          Explorer Access level
                        </span>
                      </a>
                      <ul className="block pl-3 [list-style-type:none] list-outside">
                        <li className="list-item">
                          <a className="flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#how_to_apply_for_explorer_access_level">
                            <span className="block overflow-x-clip">
                              How to apply for Explorer Access level
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item leading-4">
                      <a className="h-6 flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#basic-access">
                        <span className="block overflow-x-clip">
                          Basic Access level
                        </span>
                      </a>
                      <ul className="block pl-3 [list-style-type:none] list-outside">
                        <li className="list-item">
                          <a className="flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#how-to-apply-for-basic-access">
                            <span className="block overflow-x-clip">
                              How to apply for Basic Access level
                            </span>
                          </a>
                        </li>
                        <li className="list-item">
                          <a className="flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#brand-verification">
                            <span className="block overflow-x-clip">
                              Complete the brand verification of Google Cloud projects
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item leading-4">
                      <a className="flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#standard-access">
                        <span className="block overflow-x-clip">
                          Standard Access level
                        </span>
                      </a>
                      <ul className="block pl-3 [list-style-type:none] list-outside">
                        <li className="list-item">
                          <a className="flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#how-to-apply-for-standard-access">
                            <span className="block overflow-x-clip">
                              How to apply for Standard Access level
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item leading-4">
                      <a className="flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#api-quotas-and-system-rate-limits">
                        <span className="block overflow-x-clip">
                          API quotas and system rate limits
                        </span>
                      </a>
                    </li>
                    <li className="list-item leading-4">
                      <a className="h-6 flex py-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#permissible-use">
                        <span className="block overflow-x-clip">
                          Permissible use
                        </span>
                      </a>
                      <ul className="block pl-3 [list-style-type:none] list-outside">
                        <li className="list-item">
                          <a className="flex pt-1 [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="#how-to-change-permissible-use">
                            <span className="block overflow-x-clip">
                              How to change permissible use
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </devsite-toc>
                {" "}
                <devsite-recommendations-sidebar class="block relative text-[0.8125rem]" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <devsite-content class="block relative min-w-0 max-w-234 my-6 [align-self:start] col-start-2 row-start-1 max-lg:my-0">
              <article className="block p-10 rounded-xs bg-surface-3 shadow-[var(--clr-1)_0px_1px_2px_0px,var(--clr-2)_0px_1px_3px_1px] max-md:p-4 max-lg:rounded-[initial] max-lg:shadow-[initial] md:max-lg:p-6">
                <HeroSection />
                {" "}
                <devsite-feedback class="block float-right mt-[0.4375rem] ml-6 max-md:mb-3 max-md:[float:initial] max-md:mt-0 max-md:ml-0">
                  <button className="h-9 border border-solid border-border inline-block min-w-9 px-6 rounded-sm overflow-hidden align-middle text-primary [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-8.5 text-center whitespace-nowrap text-nowrap bg-surface-3 cursor-pointer hover:bg-surface-4 hover:border-clr-12 focus:bg-surface-4 focus:border-clr-12" data-component="button">
                    {" Send feedback "}
                  </button>
                  {" "}
                </devsite-feedback>
                {" "}
                <div className="inline mb-6 align-middle [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-[2rem] leading-10 max-md:text-2xl max-md:leading-8" data-component="heading">
                  {" Access Levels and Permissible Use"}
                  <devsite-actions class="inline-flex px-2 gap-2">
                    <devsite-feature-tooltip class="block relative" id="devsite-collections-dropdown">
                      <devsite-bookmark class="box-content inline-flex justify-center items-center align-middle [background-position:0px_50%] cursor-pointer">
                        <devsite-dropdown-list class="box-content flex relative align-middle" data-component="select" aria-label="Bookmark collections drop down" role="listbox">
                          <button className="w-13 h-9 border border-solid border-border flex px-[0.1875rem] rounded-sm justify-center items-center overflow-hidden align-middle text-muted-foreground text-sm font-medium leading-8.5 text-center whitespace-nowrap text-nowrap [background-position:0px_50%] after:content-['arrow\_drop\_down'] after:block after:w-5 after:h-5 after:text-muted-foreground after:text-xl after:leading-5 after:text-center" data-component="button" aria-controls="dropdown-list-0-dropdown" aria-expanded="false" aria-haspopup="menu" aria-label="Open dropdown" id="dropdown-list-0-toggle">
                            <span className="box-content block align-bottom [font-family:'Material_Icons'] text-2xl font-normal leading-6 [font-feature-settings:'liga'] before:content-['bookmark\_border'] before:text-muted-foreground before:text-2xl before:leading-6 before:text-center hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" />
                            {" "}
                          </button>
                          {" "}
                        </devsite-dropdown-list>
                      </devsite-bookmark>
                      {" "}
                    </devsite-feature-tooltip>
                    {" "}
                    <devsite-llm-tools class="block">
                      <div className="border border-solid border-border inline-flex rounded-sm justify-center items-center align-middle" aria-label="LLM Tools" role="group">
                        {" "}
                        <div className="flex rounded-tl-[3px] rounded-bl-[3px]">
                          <button className="w-9 h-8.5 border-r border-solid border-r-border flex min-w-9 rounded-tl-[3px] rounded-bl-[3px] justify-center items-center overflow-hidden align-middle text-muted-foreground text-sm font-medium leading-9 text-center whitespace-nowrap text-nowrap [background-position:0px_50%] cursor-pointer hover:bg-surface-2 hover:[background-position:0%_0%] hover:border-b-foreground hover:border-l-foreground hover:border-t-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:bg-surface-2 focus:[background-position:0%_0%] focus:border-b-foreground focus:border-l-foreground focus:border-t-foreground focus:text-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" data-component="button" aria-label="Copy page as markdown" type="button">
                            <span className="w-4.5 h-4.5 block relative align-middle [font-family:'Material_Icons'] text-lg font-normal leading-4.5 [font-feature-settings:'liga'] before:content-['content\_copy'] before:text-muted-foreground before:text-lg before:leading-4.5 before:text-center focus:border-foreground focus:text-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" aria-hidden="true" />
                            {" "}
                          </button>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex">
                          <devsite-dropdown-list class="flex relative align-middle font-medium">
                            <button className="w-6.5 h-8.5 flex px-[0.1875rem] rounded-tr-[3px] rounded-br-[3px] justify-center items-center overflow-hidden align-middle text-muted-foreground text-sm leading-8.5 text-center whitespace-nowrap text-nowrap [background-position:0px_50%] cursor-pointer after:content-['arrow\_drop\_down'] after:block after:w-5 after:h-5 after:text-muted-foreground after:text-xl after:leading-5 after:text-center" data-component="button" aria-controls="dropdown-list-1-dropdown" aria-expanded="false" aria-haspopup="menu" aria-label="More LLM Tools options" id="dropdown-list-1-toggle" />
                            {" "}
                          </devsite-dropdown-list>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </devsite-llm-tools>
                  </devsite-actions>
                  {" "}
                </div>
                {" "}
                <div className="flex mt-1 items-center" />
                {" "}
                <devsite-toc class="hidden text-[0.8125rem] max-lg:block max-lg:mt-7 max-lg:mb-6">
                  <ul className="border-l-4 border-solid border-l-color-005 block pl-3 [list-style-type:none] list-outside">
                    <li className="flex leading-4">
                      <span className="flex min-w-0 pb-1 text-color-002 font-bold" aria-level="2" role="heading">
                        <span className="block min-w-0 overflow-x-clip whitespace-nowrap">
                          On this page
                        </span>
                      </span>
                      <button className="h-6 block min-w-5 -mt-1 ml-1 rounded-sm overflow-hidden align-bottom text-muted-foreground [font-family:'Material_Icons'] text-2xl leading-6 text-center whitespace-nowrap text-nowrap [font-feature-settings:'liga'] cursor-pointer max-lg:w-6 before:content-['expand\_more'] before:text-muted-foreground before:text-2xl before:leading-6 before:text-center" title="Expand/collapse contents" type="button" />
                    </li>
                    <li className="block leading-4">
                      <a className="flex py-1 [word-break:break-word] cursor-pointer max-lg:h-6" href="#access-levels">
                        <span className="block min-w-0 overflow-x-clip">
                          Access levels
                        </span>
                      </a>
                    </li>
                    <li className="block leading-4">
                      <a className="flex py-1 [word-break:break-word] cursor-pointer max-lg:h-6" href="#test-account-access">
                        <span className="block min-w-0 overflow-x-clip">
                          Test Account Access level
                        </span>
                      </a>
                      <ul className="block pl-3 [list-style-type:none] list-outside">
                        <li className="block">
                          <a className="flex py-1 [word-break:break-word] cursor-pointer max-lg:h-6" href="#how-to-apply-for-test-account-access">
                            <span className="block min-w-0 overflow-x-clip">
                              How to apply for Test Account Access level
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="block leading-4">
                      <a className="flex py-1 [word-break:break-word] cursor-pointer max-lg:h-6" href="#explorer-access">
                        <span className="block min-w-0 overflow-x-clip">
                          Explorer Access level
                        </span>
                      </a>
                      <ul className="block pl-3 [list-style-type:none] list-outside">
                        <li className="block">
                          <a className="flex py-1 [word-break:break-word] cursor-pointer max-lg:h-6" href="#how_to_apply_for_explorer_access_level">
                            <span className="block min-w-0 overflow-x-clip">
                              How to apply for Explorer Access level
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="block leading-4">
                      <a className="flex py-1 [word-break:break-word] cursor-pointer max-lg:h-6" href="#basic-access">
                        <span className="block min-w-0 overflow-x-clip">
                          Basic Access level
                        </span>
                      </a>
                      <ul className="block pl-3 [list-style-type:none] list-outside">
                        <li className="block">
                          <a className="flex py-1 [word-break:break-word] cursor-pointer max-lg:h-6" href="#how-to-apply-for-basic-access">
                            <span className="block min-w-0 overflow-x-clip">
                              How to apply for Basic Access level
                            </span>
                          </a>
                        </li>
                        <li className="block">
                          <a className="flex py-1 [word-break:break-word] cursor-pointer" href="#brand-verification">
                            <span className="block min-w-0 overflow-x-clip">
                              Complete the brand verification of Google Cloud projects
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="flex">
                      <button className="h-6 block min-w-0 -mb-2 rounded-sm overflow-hidden align-bottom text-muted-foreground [font-family:'Material_Icons'] text-2xl leading-9 text-center whitespace-nowrap text-nowrap [font-feature-settings:'liga'] [background-position:0px_50%] cursor-pointer max-lg:w-6 before:content-['more\_horiz'] before:text-muted-foreground before:text-2xl before:leading-9 before:text-center" title="Expand/collapse contents" type="button" />
                    </li>
                  </ul>
                </devsite-toc>
                {" "}
                <devsite-recommendations-dropdown class="block flex-1" />
                <PageSummarySection />
                <PreviousArrowBackSection />
                {" "}
                <devsite-thumb-rating class="block text-center">
                  <div className="block mt-6 rounded-sm gap-x-2 grid-cols-[auto_1fr] [grid-template-areas:'label_thumbs'] max-md:mb-6" aria-labelledby="devsite-thumb-label-footer" role="form">
                    <div className="block [grid-column-start:label] [grid-column-end:label] [grid-row-start:label] [grid-row-end:label] text-[0.8125rem]" id="devsite-thumb-label-footer">
                      Was this helpful?
                    </div>
                    <div className="block [grid-column-start:thumbs] [grid-column-end:thumbs] [grid-row-start:thumbs] [grid-row-end:thumbs]">
                      <button className="w-7.5 h-7.5 inline-flex min-w-7.5 rounded-[50%] justify-center items-center overflow-hidden align-middle text-primary [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-8.5 whitespace-nowrap text-nowrap [background-position:0px_50%] cursor-pointer hover:bg-surface-2 hover:[background-position:0%_0%] focus:bg-surface-2 focus:[background-position:0%_0%]" data-component="button" aria-label="Helpful">
                        <Icon4 />
                      </button>
                      <button className="w-7.5 h-7.5 inline-flex min-w-7.5 rounded-[50%] justify-center items-center overflow-hidden align-middle text-primary [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-8.5 whitespace-nowrap text-nowrap [background-position:0px_50%] cursor-pointer hover:bg-surface-2 hover:[background-position:0%_0%] focus:bg-surface-2 focus:[background-position:0%_0%]" data-component="button" aria-label="Not helpful">
                        <Icon5 />
                      </button>
                    </div>
                  </div>
                </devsite-thumb-rating>
                {" "}
                <devsite-feedback class="block mt-2 text-center">
                  <button className="h-9 border border-solid border-border inline-block min-w-9 px-6 rounded-sm overflow-hidden align-middle text-primary [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-8.5 whitespace-nowrap text-nowrap bg-surface-3 cursor-pointer hover:bg-surface-4 hover:border-clr-12 focus:bg-surface-4 focus:border-clr-12" data-component="button">
                    {" Send feedback "}
                  </button>
                  {" "}
                </devsite-feedback>
                {" "}
              </article>
              <ExceptAsOtherwiseSection />
              {" "}
              <div className="block" />
              {" "}
            </devsite-content>
            {" "}
          </main>
          <BlogVisitOurSection />
          <Section7 />
          <AndroidChromeFirebaseSection />
          {" "}
        </section>
        {" "}
      </section>
      {" "}
      <DropdownMenu menus={[{"trigger":"menu-trigger-hide-side-navigation","hoverOpen":false,"gap":0,"align":"left","html":"<devsite-dropdown-list style=\"position:absolute;margin:0;display:flex;box-sizing:content-box;width:52px;height:36px;min-width:auto;max-width:none;min-height:auto;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(32, 33, 36);border-right-color:rgb(32, 33, 36);border-bottom-color:rgb(32, 33, 36);border-left-color:rgb(32, 33, 36);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(32, 33, 36);box-shadow:none;opacity:1;font-family:&quot;Google Sans&quot;, &quot;Noto Sans&quot;, &quot;Noto Sans JP&quot;, &quot;Noto Sans KR&quot;, &quot;Noto Naskh Arabic&quot;, &quot;Noto Sans Thai&quot;, &quot;Noto Sans Hebrew&quot;, &quot;Noto Sans Bengali&quot;, sans-serif;font-size:32px;font-weight:400;font-style:normal;line-height:40px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:middle;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Bookmark collections drop down\"><span style=\"display:block;position:static;box-sizing:content-box;width:24px;height:24px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(95, 99, 104);border-right-color:rgb(95, 99, 104);border-bottom-color:rgb(95, 99, 104);border-left-color:rgb(95, 99, 104);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(95, 99, 104);box-shadow:none;opacity:1;font-family:&quot;Material Icons&quot;;font-size:24px;font-weight:400;font-style:normal;line-height:24px;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:nowrap;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:bottom;object-fit:fill;cursor:pointer;overflow:visible\"></span></devsite-dropdown-list>"}]} />
    </>
  );
}
