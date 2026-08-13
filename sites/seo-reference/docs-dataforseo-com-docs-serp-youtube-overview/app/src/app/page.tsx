import Icon from "./svgs/svg-icon";
import Icon2 from "./svgs/svg-icon2";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import Icon6 from "./svgs/svg-icon6";
import Icon7 from "./svgs/svg-icon7";
import MediaLink, { type MediaLinkData } from "./components/media-link";
import ListRow, { type ListRowData } from "./components/list-row";
import TextLink, { type TextLinkData } from "./components/text-link";
import Icon8 from "./svgs/svg-icon8";
import Icon9 from "./svgs/svg-icon9";
import { MediaLink_styles, ListRow_styles, TextLink_styles } from "./_styles";

const MediaTile_data: MediaTileData[] = [
    { id: "menu-serp-api-generated-submenu", id2: "menu-item-25845", label: "SERP API" },
    { id: "menu-ai-optimization-api-generated-submenu", id2: "menu-item-25296", label: "AI Optimization API" },
    { id: "menu-keywords-data-api-generated-submenu", id2: "menu-item-25654", label: "Keywords Data API" },
    { id: "menu-domain-analytics-api-generated-submenu", id2: "menu-item-25636", label: "Domain Analytics API" },
    { id: "menu-dataforseo-labs-api-generated-submenu", id2: "menu-item-25578", label: "DataForSEO Labs API" },
    { id: "menu-backlinks-api-generated-submenu", id2: "menu-item-25441", label: "Backlinks API" },
    { id: "menu-onpage-api-generated-submenu", id2: "menu-item-25813", label: "OnPage API" },
    { id: "menu-content-analysis-api-generated-submenu", id2: "menu-item-25541", label: "Content Analysis API" },
    { id: "menu-merchant-api-generated-submenu", id2: "menu-item-25751", label: "Merchant API" },
    { id: "menu-app-data-api-generated-submenu", id2: "menu-item-25375", label: "App Data API" },
    { id: "menu-business-data-api-generated-submenu", id2: "menu-item-25465", label: "Business Data API" },
    { id: "menu-databases-generated-submenu", id2: "menu-item-25553", label: "Databases" },
    { id: "menu-appendix-generated-submenu", id2: "menu-item-25431", label: "Appendix" }
];
const MediaLink_data: MediaLinkData[] = [
    { label: "Copy URL", icon: <>
        <path d="M13 7H7C5.89543 7 5 7.89543 5 9V15C5 16.1046 5.89543 17 7 17H13C14.1046 17 15 16.1046 15 15V9C15 7.89543 14.1046 7 13 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V11C16 12.1046 15.1046 13 14 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>, label2: "Copy URL" },
    { label: "Send via Email", icon: <>
        <path d="M3 6L10 11L17 6M3 6V14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V6M3 6C3 5.44772 3.44772 5 4 5H16C16.5523 5 17 5.44772 17 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>, label2: "Email" },
    { label: "Share", icon: <>
        <path d="M14 7C15.1046 7 16 6.10457 16 5C16 3.89543 15.1046 3 14 3C12.8954 3 12 3.89543 12 5C12 6.10457 12.8954 7 14 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 17C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 11L12.5 14M12.5 6L7.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>, label2: "Share" }
];
const ListRow_data: ListRowData[] = [
    { href: "/v3/serp/youtube/organic/overview/", label: "YouTube Organic" },
    { href: "/v3/serp/youtube/video_info/overview/", label: "YouTube Video Info" },
    { href: "/v3/serp/youtube/video_subtitles/overview/", label: "YouTube Subtitles" },
    { href: "/v3/serp/youtube/video_comments/overview/", label: "YouTube Comments" }
];
const TextLink_data: TextLinkData[] = [
    { label: "\n                cURL\n            " },
    { label: "\n                php\n            " },
    { label: "\n                Node.js\n            " },
    { label: "\n                Python\n            " },
    { label: "\n                cSharp\n            " }
];

export default function Page() {
  return (
    <>
      <header className="w-full h-[89.9px] block sticky top-0 z-100 shrink-0 bg-background max-md:h-[92.3px] md:max-lg:h-[5.8rem] 2xl:h-[3.3rem]" id="header">
        <div className="block max-w-384 px-[1.2rem] mx-auto max-md:px-3 md:max-lg:px-[0.9375rem]">
          <div className="flex py-[0.6rem] justify-between items-center">
            {" "}
            <a className="block flex-1 text-primary cursor-pointer hover:border-clr-6 hover:text-clr-6 hover:outline-clr-6 hover:[text-decoration-color:var(--clr-6)] focus:border-clr-14 focus:text-clr-14 focus:outline-clr-14 focus:[text-decoration-color:var(--clr-14)]" data-component="link" aria-current="page" href="/v3/" rel="home">
              <img className="w-39 h-[1.4375rem] block max-w-39 overflow-clip aspect-[auto_250/62] max-md:w-35 max-md:h-[1.3125rem] max-md:max-w-35 md:max-lg:w-[9.5625rem] md:max-lg:max-w-[153.5px] hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="image" alt="DataForSeo Logo" height="62" src="/assets/cloned/images/056e08e8f762.png" width="250" />
            </a>
            {" "}
            <div className="flex justify-center items-center flex-1 gap-x-[0.8rem] max-lg:justify-end max-lg:gap-x-2">
              <button className="w-[13.4rem] h-[2.1rem] border border-solid border-color-001 block relative max-w-[13.4rem] rounded-md shrink-0 leading-[1rem] text-left cursor-pointer max-lg:w-9 max-lg:h-9 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:leading-0 max-lg:border-[0] max-lg:border-initial max-lg:border-[initial] hover:border-clr-7 focus:border-clr-15" data-component="button" title="Search documentation (Ctrl+K)">
                <Icon />
                {" "}
                <span className="inline pl-[1.9rem] text-muted-foreground text-[0.6875rem] leading-[0.8125rem] max-lg:hidden">
                  {" Search "}
                </span>
                {" "}
                <kbd className="w-[2.775rem] h-[1.275rem] border border-solid border-color-001 flex absolute top-2 right-2 py-[0.2rem] px-[0.4rem] rounded-[4.8px] items-center gap-[0.1rem] text-muted-foreground text-[0.625rem] font-medium leading-[0.625rem] bg-border transform-[matrix(1,0,0,1,0,-10.1875)] max-lg:hidden">
                  <span className="block text-xs leading-3">
                    Ctrl
                  </span>
                  {"K "}
                </kbd>
                {" "}
              </button>
              {" "}
              <button className="w-[23%] h-[2.1rem] min-h-[2.1rem] border border-solid border-border flex px-[1.2rem] rounded-md justify-center items-center gap-x-1 text-[0.8125rem] leading-[1.1875rem] text-center whitespace-nowrap text-nowrap bg-color-001 cursor-pointer max-lg:h-9 max-lg:rounded-lg max-md:leading-[1.3125rem] max-lg:min-h-0 max-lg:border-[0] max-lg:border-initial max-lg:border-[initial] max-lg:px-0 max-lg:[font-size:inherit] max-lg:bg-[initial] md:max-lg:w-[10%] md:max-lg:leading-[1.375rem] 2xl:w-[19.5%] hover:bg-clr-8 hover:border-clr-8" data-component="button" type="button">
                <span className="block max-lg:hidden">
                  Ask AI
                </span>
                {" "}
                <Icon2 />
                {" "}
              </button>
              {" "}
            </div>
            {" "}
            <div className="w-1/3 h-[2.1rem] block flex-1 max-md:h-203 max-lg:fixed max-lg:top-0 max-lg:inset-x-0 max-lg:z-100 max-lg:invisible max-lg:opacity-0 max-lg:min-w-0 max-md:max-h-203 max-lg:bg-clr-0 max-lg:w-auto md:max-lg:h-256 md:max-lg:max-h-256">
              <div className="flex justify-end items-center flex-1 transform-[none] max-lg:invisible">
                <nav className="block max-lg:invisible" data-component="nav">
                  <ul className="flex items-center [list-style-type:none] list-outside max-lg:invisible">
                    <li className="w-full list-item max-lg:invisible">
                      <a className="h-[2.1rem] min-h-[2.1rem] border border-solid border-clr-1 flex px-[1.2rem] rounded-md justify-center items-center gap-x-2 text-primary text-[0.8125rem] leading-[1.1875rem] text-center whitespace-nowrap text-nowrap cursor-pointer max-lg:invisible hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:text-clr-17 focus:outline-clr-17 focus:[text-decoration-color:var(--clr-17)]" data-component="button" href="https://dataforseo.com/pricing" target="_blank">
                        Pricing
                        <Icon3 />
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="block max-lg:invisible" data-component="nav">
                  <ul className="flex items-center gap-x-[0.8rem] [list-style-type:none] list-outside max-lg:invisible">
                    <li className="w-full list-item max-lg:invisible">
                      <a className="h-[2.1rem] min-h-[2.1rem] border border-solid border-border flex px-[1.2rem] rounded-md justify-center items-center text-[0.8125rem] leading-[1.1875rem] text-center whitespace-nowrap text-nowrap bg-color-001 cursor-pointer max-lg:invisible hover:bg-clr-8 hover:border-color-001" data-component="button" href="https://app.dataforseo.com/signin/" target="_blank">
                        Sign In
                      </a>
                    </li>
                    <li className="w-full list-item max-lg:invisible">
                      <a className="h-[2.1rem] min-h-[2.1rem] border border-solid border-clr-1 flex px-[1.2rem] rounded-md justify-center items-center text-background text-[0.8125rem] font-semibold leading-[1.1875rem] text-center whitespace-nowrap text-nowrap bg-clr-2 cursor-pointer max-lg:invisible hover:bg-clr-10 hover:border-clr-11 focus:bg-clr-18 focus:border-clr-19" data-component="button" href="https://app.dataforseo.com/register/" target="_blank">
                        Sign Up
                      </a>
                    </li>
                    <li className="w-full list-item max-lg:invisible">
                      <button className="h-[2.1rem] min-h-[2.1rem] border border-solid border-border flex relative px-[0.8rem] rounded-md justify-center items-center text-[0.8125rem] leading-[1.1875rem] text-center whitespace-nowrap text-nowrap bg-color-001 cursor-pointer max-lg:invisible hover:bg-clr-8 hover:border-clr-12" data-component="button" aria-label="Toggle theme" id="theme-toggle" title="Switch to dark theme">
                        {" "}
                        <span className="w-4 h-4 block justify-center items-center max-lg:invisible hover:transform-[none] focus:transform-[none]">
                          <Icon4 />
                        </span>
                        {" "}
                      </button>
                    </li>
                  </ul>
                </nav>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <button className="w-4 h-[1.8rem] hidden min-w-0 ml-3 flex-col justify-center items-center gap-y-1 overflow-hidden leading-[1rem] text-left cursor-pointer max-lg:w-5 max-lg:h-9 max-lg:flex max-lg:ml-[0.9375rem] max-lg:gap-y-[0.3125rem] md:max-lg:leading-[1.0625rem]">
              <span className="w-full h-[0.1rem] block bg-foreground max-lg:h-0.5" />
              {" "}
              <span className="w-full h-[0.1rem] block bg-foreground transform-[none] max-lg:h-0.5 max-lg:transform-[matrix(1,0,0,1,8,0)]" />
              {" "}
              <span className="w-full h-[0.1rem] block bg-foreground max-lg:h-0.5" />
              {" "}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="border-t border-solid border-t-border block py-2.5 bg-border 2xl:hidden">
          <div className="block max-w-384 px-[1.2rem] max-md:px-3 md:max-lg:px-[0.9375rem]">
            <div className="flex justify-between items-center">
              <button className="flex items-center gap-x-2.5 leading-[1rem] text-left cursor-pointer md:max-lg:leading-[1.0625rem]" data-component="button">
                <div className="w-3.5 flex flex-col justify-center items-center gap-y-[0.1875rem]">
                  <span className="w-full h-0.5 block relative bg-foreground" />
                  {" "}
                  <span className="w-full h-0.5 block relative bg-foreground" />
                  {" "}
                  <span className="w-full h-0.5 block relative bg-foreground" />
                  {" "}
                </div>
                {" "}
                <span className="block">
                  {" Menu "}
                </span>
                {" "}
              </button>
              {" "}
              <button className="hidden min-w-0 items-center gap-x-2.5 leading-[1rem] text-left cursor-pointer max-lg:flex md:max-lg:leading-[1.0625rem]">
                <span className="inline max-lg:block">
                  {" Example "}
                </span>
                {" "}
                <Icon5 />
                {" "}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main className="block grow shrink-0" id="content">
        <div className="block mt-2.5 2xl:mt-2">
          <div className="block max-w-384 px-[1.2rem] mx-auto max-md:px-3 md:max-lg:px-[0.9375rem]">
            <div className="grid items-start gap-x-2.5 grid-cols-1 grid-rows-1 aspect-[0.694] max-md:aspect-[0.125] md:max-lg:aspect-[0.382] 2xl:gap-x-2 2xl:grid-cols-[208px_1281.62px] 2xl:aspect-[0.837]">
              <aside className="w-320 h-200 block fixed top-0 left-0 z-100 invisible opacity-0 min-w-0 max-h-200 pr-2 overflow-auto text-[0.9375rem] bg-clr-0 max-md:w-[23.4375rem] max-md:h-203 max-md:max-h-203 max-lg:[font-size:inherit] md:max-lg:w-192 md:max-lg:h-256 md:max-lg:max-h-256 2xl:w-52 2xl:h-243 2xl:sticky 2xl:top-[4.5625rem] 2xl:max-h-243 2xl:text-[0.8125rem] 2xl:left-auto 2xl:z-[initial] 2xl:[visibility:inherit] 2xl:opacity-[initial] 2xl:bg-[initial]">
                <button className="w-10 h-10 flex fixed top-5 right-5 z-102 rounded-[50%] justify-center items-center leading-[1.0625rem] text-left bg-color-001 cursor-pointer max-md:w-7.5 max-md:h-7.5 max-md:leading-[1rem] md:max-lg:w-[2.1375rem] md:max-lg:h-[2.1375rem] 2xl:w-[2.1rem] 2xl:h-[2.1rem] 2xl:top-4 2xl:right-4 2xl:leading-[0.9375rem] 2xl:z-[initial]">
                  <span className="w-5 h-0.5 block absolute min-w-0 bg-foreground transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[10.0312px_1px] max-md:w-[0.9375rem] max-md:origin-[7.5px_1px] md:max-lg:w-[17.1px] md:max-lg:origin-[8.55469px_1px] 2xl:w-[1.05rem] 2xl:h-[0.1rem] 2xl:origin-[8.39844px_0.796875px]" />
                  {" "}
                  <span className="w-5 h-0.5 block absolute min-w-0 bg-foreground transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[10.0312px_1px] max-md:w-[0.9375rem] max-md:origin-[7.5px_1px] md:max-lg:w-[17.1px] md:max-lg:origin-[8.55469px_1px] 2xl:w-[1.05rem] 2xl:h-[0.1rem] 2xl:origin-[8.39844px_0.796875px]" />
                  {" "}
                </button>
                {" "}
                <div className="w-75 h-200 block fixed top-0 left-0 z-101 max-w-75 py-7.5 overflow-auto bg-background transform-[matrix(1,0,0,1,-300,0)] max-md:w-[57.6rem] max-md:h-203 max-md:min-w-62.5 max-md:transform-[matrix(1,0,0,1,-921.594,0)] max-md:max-w-none md:max-lg:h-256 2xl:w-50 2xl:h-[28.575rem] 2xl:transform-[none] 2xl:static 2xl:top-auto 2xl:left-auto 2xl:z-[initial] 2xl:max-w-none 2xl:py-0 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] 2xl:bg-[initial]">
                  <nav className="block" id="menu-menu">
                    <ul className="block [list-style-type:none] list-outside" id="menu-main-menu-1">
                      <li className="list-item" id="menu-item-25749">
                        <a className="block py-[0.5625rem] px-4 text-muted-foreground cursor-pointer 2xl:py-[0.45rem] 2xl:px-[0.8rem]" href="/v3/">
                          Introduction
                        </a>
                      </li>
                      <li className="list-item" id="menu-item-25750">
                        <a className="block py-[0.5625rem] px-4 text-muted-foreground cursor-pointer 2xl:py-[0.45rem] 2xl:px-[0.8rem]" href="/v3/auth/">
                          Authentication
                        </a>
                      </li>
                    </ul>
                    {MediaTile_data.map((d, i) => <MediaTile key={i} d={d} />)}
                  </nav>
                  {" "}
                </div>
                {" "}
              </aside>
              {" "}
              <div className="border border-solid border-border block p-[1.2rem] rounded-[12.8px] bg-border max-md:p-3 max-md:rounded-lg md:max-lg:p-[0.9375rem] md:max-lg:rounded-[10px]">
                <div className="w-full grid items-start gap-x-8 grid-cols-[1fr_480px] max-lg:gap-x-10 max-lg:grid-cols-1">
                  <div className="block overflow-hidden">
                    <div className="block">
                      <div className="block -mx-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:leading-[1.0625rem] md:max-lg:before:text-[0.9375rem] md:max-lg:before:leading-[1.0625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:leading-[1.0625rem] md:max-lg:after:text-[0.9375rem] md:max-lg:after:leading-[1.0625rem]">
                        <div className="h-[109.3rem] min-h-px block relative float-left max-md:h-[2791.9px] max-md:[float:initial] md:max-lg:h-[118.7875rem]">
                          <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:leading-[1.0625rem] md:max-lg:before:text-[0.9375rem] md:max-lg:before:leading-[1.0625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:leading-[1.0625rem] md:max-lg:after:text-[0.9375rem] md:max-lg:after:leading-[1.0625rem]">
                            <div className="block">
                              <div className="block mb-[2.1875rem]">
                                <div className="block">
                                  <h1 className="block text-[1.3125rem] font-medium leading-[1.9375rem] max-md:text-2xl max-md:leading-9 md:max-lg:text-[1.625rem] md:max-lg:leading-[2.375rem]" data-component="heading" id="introduction">
                                    YouTube SERP API: Overview
                                  </h1>
                                  <div className="border-b border-solid border-b-border flex mt-6 mb-8 pb-6 flex-wrap gap-3 max-lg:mt-4 max-lg:mb-6 max-lg:pb-4 max-md:gap-1.5 md:max-lg:gap-2">
                                    <button className="border border-solid border-border flex relative p-2 rounded-md items-center gap-2 text-muted-foreground font-medium leading-[1.3125rem] text-center whitespace-nowrap text-nowrap bg-border cursor-pointer max-md:p-1.5 max-lg:text-[0.8125rem] max-lg:leading-[1.25rem] md:max-lg:p-[0.4rem] after:content-['Add_to_Favorites'] after:block after:absolute after:-top-9.5 after:-right-[5.0625rem] after:bottom-11 after:left-0 after:z-10 after:w-[7.3125rem] after:h-7.5 after:py-1.5 after:px-3 after:text-background after:text-xs after:font-medium after:leading-4.5 after:text-center after:bg-foreground after:opacity-0 after:rounded-tl-sm max-lg:after:hidden max-lg:after:bottom-[calc(100%_+_8px)] max-lg:after:top-auto max-lg:after:right-auto max-lg:after:w-auto max-lg:after:h-auto hover:border-color-001 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" title="Add to Favorites">
                                      <Icon6 />
                                      {" "}
                                      <Icon7 />
                                      {" "}
                                      <span className="hidden min-w-0">
                                        Add to Favorites
                                      </span>
                                      {" "}
                                    </button>
                                    {MediaLink_data.map((d, i) => <MediaLink key={i} d={d} styles={MediaLink_styles[i]} />)}
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="flex my-3 py-2 px-[0.8rem] rounded-md flex-wrap items-center gap-y-2 gap-x-1 text-[0.6875rem] font-semibold bg-clr-3 max-lg:my-[0.9375rem] max-md:p-2.5 max-lg:rounded-lg max-lg:gap-y-2.5 max-lg:gap-x-[0.3125rem] max-md:[font-size:inherit] md:max-lg:py-2.5 md:max-lg:px-[11.5px] md:max-lg:text-[0.875rem]">
                                    <img className="w-[0.8125rem] h-[0.8125rem] block max-w-full overflow-clip max-lg:w-4 max-lg:h-4" data-component="image" alt="checked" src="/assets/cloned/svg/9a93a8726b27.svg" />
                                    {" YouTube SERP API provides search results for the specified keyword or video id, search engine, location, language, and device OS "}
                                  </div>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    YouTube SERP API provides search results based on the selected search engine type. The following is the list of available search engine types:
                                  </p>
                                  {" "}
                                  <div className="block">
                                    <ul className="flex mt-3.5 mb-3 pl-4 flex-col gap-y-[0.15rem] [list-style-type:disc] list-outside max-lg:mb-[0.9375rem] md:max-lg:mt-[14.5px]">
                                      {ListRow_data.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                                    </ul>
                                    {" "}
                                  </div>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    {"The returned results are specific to the indicated keyword, search engine, "}
                                    <a className="inline text-primary cursor-pointer hover:border-clr-9 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:border-clr-17 focus:text-clr-17 focus:outline-clr-17 focus:[text-decoration-color:var(--clr-17)]" data-component="link" href="/v3/serp/youtube/languages/" rel="noopener noreferrer" target="_blank">
                                      language
                                    </a>
                                    {" and "}
                                    <a className="inline text-primary cursor-pointer hover:border-clr-9 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:border-clr-17 focus:text-clr-17 focus:outline-clr-17 focus:[text-decoration-color:var(--clr-17)]" data-component="link" href="/v3/serp/youtube/locations/" rel="noopener noreferrer" target="_blank">
                                      location
                                    </a>
                                    {" parameters. We emulate set location and search engine with the highest accuracy so that the results you receive will match the actual search results for the specified parameters at the time of task setting. You can always check the returned results accessing the "}
                                    <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      check_url
                                    </code>
                                    {" in the Incognito mode to make sure the received data is entirely relevant. Note that user preferences, search history, and other personalized search factors are ignored by our system and thus would not be reflected in the returned SERP results."}
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    <strong className="inline font-bold">
                                      Note:
                                    </strong>
                                    {" All YouTube SERP API endpoints, except YouTube Organic, provide results for "}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      desktop
                                    </code>
                                    {" only. You can indicate the following OS that you would like to receive SERP results for when setting a task: Windows, macOS. In YouTube Organic, you can get results for both "}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      desktop
                                    </code>
                                    {" and "}
                                    <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      mobile
                                    </code>
                                    .
                                  </p>
                                  {" "}
                                  <h3 className="block text-base font-bold leading-[1.5625rem] md:max-lg:text-[1.0625rem]" data-component="heading">
                                    YouTube SERP API functions
                                  </h3>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    <strong className="inline font-bold">
                                      The Advanced function
                                    </strong>
                                    {" is supported across all YouTube API search engine types and provides a complete overview of search results and video data."}
                                  </p>
                                  {" "}
                                  <h3 className="block text-base font-bold leading-[1.5625rem] md:max-lg:text-[1.0625rem]" data-component="heading">
                                    Methods
                                  </h3>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    The cost of using YouTube SERP API endpoints depends on the selected method and priority of task execution. Available methods and priorities are described below.
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    DataForSEO has two main methods to deliver SERP results: Standard and Live.
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    {"If your system requires delivering instant results, "}
                                    <strong className="inline font-bold">
                                      the Live method
                                    </strong>
                                    {" is the best solution for you. Unlike the Standard method, this method doesn’t require making separate POST and GET requests to the corresponding endpoints."}
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    {"If you don’t need to receive data in real-time, you can use "}
                                    <strong className="inline font-bold">
                                      the Standard method
                                    </strong>
                                    {" of data retrieval. This method requires making separate POST and GET requests, but it’s more affordable. Using this method, you can retrieve the results after our system collects them."}
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    {"‌Alternatively, you can specify "}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      pingback_url
                                    </code>
                                    {" or "}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      postback_url
                                    </code>
                                    {" when setting a task, and we will notify you on completion of tasks or send the results to you respectively. Note that if you use the "}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      postback_url
                                    </code>
                                    {" field, the only function that will be applied for data retrieval is "}
                                    <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      advanced
                                    </code>
                                    .
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    {"If you use the Standard method without specifying "}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      pingback_url
                                    </code>
                                    {" or "}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      postback_url
                                    </code>
                                    {", you can receive the list of id for all completed tasks using the "}
                                    <strong className="inline font-bold">
                                      ‘Tasks Ready’
                                    </strong>
                                    {" endpoint. It is designed to provide you with the list of completed tasks, which haven’t been collected yet. Then, you can retrieve the results using the "}
                                    <strong className="inline font-bold">
                                      ‘Task GET’
                                    </strong>
                                    {" endpoint."}
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    {"You can send up to 2000 POST and GET API calls per minute in total, with each POST call containing no more than 100 tasks. Contact us if you would like to raise the limit. ‌Visit "}
                                    <a className="inline text-primary cursor-pointer hover:border-clr-9 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:border-clr-20 focus:text-clr-20 focus:outline-clr-20 focus:[text-decoration-color:var(--clr-20)]" data-component="link" href="https://dataforseo.com/help-center/best-practices-low-volume-serp-api-payload" rel="noopener noreferrer" target="_blank">
                                      DataForSEO Help Center
                                    </a>
                                    {" to get practical tips for request handling depending on your SERP API payload volume."}
                                  </p>
                                  {" "}
                                  <h3 className="block text-base font-bold leading-[1.5625rem] md:max-lg:text-[1.0625rem]" data-component="heading">
                                    Priorities and cost
                                  </h3>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    The Live method delivers results in real-time, and accordingly, the cost of requests made using this method will be the highest.
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    The Standard method has two different priorities that stand for the relative speed of task execution and have different prices:
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    1. Normal priority;
                                    <br className="inline" />
                                    {" 2. High priority."}
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    If you use YouTube Organic or YouTube comments you will be billed per each SERP containing 20 results.
                                    <br className="inline" />
                                    {" "}
                                    <strong className="inline font-bold">
                                      Note:
                                    </strong>
                                    {" setting "}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      depth
                                    </code>
                                    {" above the default value will increase the cost of the task. For example, if the default value is 20, you will be billed for every 20 results. So, if you specify "}
                                    <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      "depth": 30
                                    </code>
                                    , the price for the task will be multiplied by 2 and you will be billed as for 40 results.
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    For each API call to YouTube Video Info and YouTube Subtitles you will be charged x3 SEPR price regardless of the result.
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    {"The cost can be calculated on the "}
                                    <a className="inline text-primary cursor-pointer hover:border-clr-9 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:border-clr-17 focus:text-clr-17 focus:outline-clr-17 focus:[text-decoration-color:var(--clr-17)]" data-component="link" href="https://dataforseo.com/pricing/serp/youtube-serp-api" rel="noopener noreferrer" target="_blank" title="Pricing">
                                      Pricing
                                    </a>
                                    {" page. To learn more about the cost of all SERP API methods, priorities, and additional parameters, please refer to "}
                                    <a className="inline text-primary cursor-pointer hover:border-clr-9 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:border-clr-17 focus:text-clr-17 focus:outline-clr-17 focus:[text-decoration-color:var(--clr-17)]" data-component="link" href="https://dataforseo.com/help-center/serp-api-cost-explained" rel="noopener noreferrer" target="_blank">
                                      this help article
                                    </a>
                                    .
                                  </p>
                                  {" "}
                                  <p className="block mt-3 leading-[1.25rem] max-lg:mt-[0.9375rem]">
                                    {"You can test YouTube SERP API for free using DataForSEO "}
                                    <a className="inline text-primary cursor-pointer hover:border-clr-9 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:border-clr-14 focus:text-clr-14 focus:outline-clr-14 focus:[text-decoration-color:var(--clr-14)]" data-component="link" href="/v3/appendix/sandbox/">
                                      Sandbox.
                                    </a>
                                  </p>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="w-120 h-176 flex sticky top-[7.4375rem] flex-col gap-y-2 overflow-hidden transform-[none] max-md:w-[23.4375rem] max-md:h-203 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-999 max-lg:invisible max-lg:opacity-0 max-lg:min-w-0 max-lg:gap-y-2.5 max-lg:overflow-auto max-lg:bg-background max-md:transform-[matrix(1,0,0,1,0,812)] md:max-lg:w-192 md:max-lg:h-256 md:max-lg:transform-[matrix(1,0,0,1,0,1024)] 2xl:h-[59.4rem] 2xl:top-[4.5625rem]">
                    <div className="w-120 h-[225.7px] border border-solid border-border flex absolute left-0 min-w-0 p-[1.2rem] rounded-[12.8px] flex-col flex-1 gap-y-[0.8rem] bg-border max-lg:invisible" id="example-code">
                      <div className="w-[422.9px] flex rounded-md items-center shrink-0 gap-2 overflow-auto bg-border max-lg:invisible">
                        {TextLink_data.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
                        {" "}
                        <button className="h-[2.1rem] border border-solid border-clr-1 hidden min-w-0 px-[1.2rem] rounded-md justify-center items-center text-muted-foreground text-[0.8125rem] leading-[0.9375rem] text-center cursor-pointer max-lg:h-10.5 max-lg:flex max-md:px-3 max-md:text-xs max-md:leading-[0.875rem] max-lg:rounded-[initial] md:max-lg:px-[0.9375rem]" type="button">
                          <Icon8 />
                          {" "}
                        </button>
                        {" "}
                      </div>
                      {" "}
                      <div className="flex py-[0.8rem] flex-col justify-center items-center gap-y-[1.2rem] text-center max-lg:invisible">
                        <img className="w-8.5 h-[1.9375rem] block max-w-full overflow-clip max-lg:invisible" data-component="image" alt="" src="/assets/cloned/svg/9a7cc6c19f3d.svg" />
                        {" "}
                        <div className="flex flex-col gap-y-[0.8rem] max-lg:invisible">
                          <div className="block font-medium max-lg:invisible">
                            Looking for an example?
                          </div>
                          {" "}
                          <div className="block max-w-96 text-muted-foreground text-[0.6875rem] max-lg:invisible">
                            {" Choose a specific API endpoint from the sidebar to see ready-to-use code samples in your preferred programming language. "}
                          </div>
                          {" "}
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
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </main>
      {" "}
      <div className="h-[3.6rem] flex fixed right-[1.8rem] bottom-[30.7px] left-[74.6rem] z-99 min-w-0 flex-col gap-y-[1.2rem] max-md:h-10.5 max-md:right-[0.9375rem] max-md:bottom-[0.9375rem] max-md:left-79.5 max-md:gap-y-[0.3125rem] md:max-lg:h-[3.0875rem] md:max-lg:right-5 md:max-lg:bottom-[1.4125rem] md:max-lg:left-[698.5px] md:max-lg:gap-y-[9.7px] 2xl:bottom-11.5 2xl:left-[114.6rem]">
        {" "}
      </div>
      {" "}
      <div className="w-15 h-15 block fixed right-7.5 bottom-[7.1875rem] z-999999 min-w-0 [font-family:-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif]" id="ai-chat-widget">
        <button className="w-15 h-15 flex py-px px-1.5 rounded-[50%] justify-center items-center text-accent leading-[1rem] text-center bg-clr-4 shadow-[var(--clr-5)_0px_3.2px_12.8px_0px] cursor-pointer md:max-lg:leading-[1.0625rem]" data-component="button" id="ai-chat-launcher">
          <Icon9 />
        </button>
      </div>
      {" "}
    </>
  );
}
