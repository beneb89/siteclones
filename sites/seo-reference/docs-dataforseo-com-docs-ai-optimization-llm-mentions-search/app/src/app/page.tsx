import Icon from "./svgs/svg-icon";
import Icon2 from "./svgs/svg-icon2";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import Icon6 from "./svgs/svg-icon6";
import Icon7 from "./svgs/svg-icon7";
import MediaLink, { type MediaLinkData } from "./components/media-link";
import Icon8 from "./svgs/svg-icon8";
import Icon9 from "./svgs/svg-icon9";
import Icon10 from "./svgs/svg-icon10";
import Tile, { type TileData } from "./components/tile";
import Tile2, { type Tile2Data } from "./components/tile2";
import Tile3, { type Tile3Data } from "./components/tile3";
import Tile4, { type Tile4Data } from "./components/tile4";
import Tile5, { type Tile5Data } from "./components/tile5";
import TextLink, { type TextLinkData } from "./components/text-link";
import Icon11 from "./svgs/svg-icon11";
import Tile6, { type Tile6Data } from "./components/tile6";
import Tile7, { type Tile7Data } from "./components/tile7";
import Tile8, { type Tile8Data } from "./components/tile8";
import Tile9, { type Tile9Data } from "./components/tile9";
import Icon12 from "./svgs/svg-icon12";
import Icon13 from "./svgs/svg-icon13";
import Icon14 from "./svgs/svg-icon14";
import { MediaLink_styles, Tile_styles, Tile2_styles, Tile3_styles, Tile4_styles, Tile5_styles, TextLink_styles, Tile8_styles, Tile9_styles } from "./_styles";

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
const Tile_data: TileData[] = [
    { id: "tasks-result-items-location_code", text: "location_code", text2: "integer", description: "location code in a POST array" },
    { id: "tasks-result-items-language_code", text: "language_code", text2: "string", description: "language code in a POST array" },
    { id: "tasks-result-items-question", text: "question", text2: "string", description: "relevant question" }
];
const Tile2_data: Tile2Data[] = [
    { id: "tasks-result-items-sources-snippet", text: "snippet", description: "source description" },
    { id: "tasks-result-items-sources-source_name", text: "source_name", description: "source name" },
    { id: "tasks-result-items-sources-thumbnail", text: "thumbnail", description: "source thumbnail" }
];
const Tile3_data: Tile3Data[] = [
    { id: "tasks-result-items-sources-position", text: "position", text2: "integer", description: "position in the results" },
    { id: "tasks-result-items-sources-title", text: "title", text2: "string", description: "source title" },
    { id: "tasks-result-items-sources-domain", text: "domain", text2: "string", description: "source domain" },
    { id: "tasks-result-items-sources-url", text: "url", text2: "string", description: "source URL" }
];
const Tile4_data: Tile4Data[] = [
    { id: "tasks-result-items-search_results-description", text: "description", text2: "string", description: "result description" },
    { id: "tasks-result-items-search_results-breadcrumb", text: "breadcrumb", text2: "string", description: "breadcrumb" },
    { id: "tasks-result-items-search_results-position", text: "position", text2: "integer", description: "position in the results" },
    { id: "tasks-result-items-search_results-title", text: "title", text2: "string", description: "result title" },
    { id: "tasks-result-items-search_results-domain", text: "domain", text2: "string", description: "result domain" },
    { id: "tasks-result-items-search_results-url", text: "url", text2: "string", description: "result URL" }
];
const Tile5_data: Tile5Data[] = [
    { id: "tasks-result-items-brand_entities-position", text: "position", text2: "integer", description: "position in the results" },
    { id: "tasks-result-items-brand_entities-title", text: "title", text2: "string", description: "name of the brand" },
    { id: "tasks-result-items-brand_entities-category", text: "category", text2: "string", description: "category of the brand" }
];
const TextLink_data: TextLinkData[] = [
    { label: "\n                cURL\n            " },
    { label: "\n                php\n            " },
    { label: "\n                Node.js\n            " },
    { label: "\n                Python\n            " },
    { label: "\n                cSharp\n            " }
];
const Tile6_data: Tile6Data[] = [
    { text: "    \"language_name\": \"English\"," },
    { text: "    \"location_code\": 2840," },
    { text: "    \"target\": [" }
];
const Tile6_data2: Tile6Data[] = [
    { text: "    ]," },
    { text: "    \"platform\": \"google\"," },
    { text: "    \"filters\": [" }
];
const Tile7_data: Tile7Data[] = [
    { text: "    \"ai_search_volume\"," },
    { text: "    \">\"," },
    { text: "    1000" }
];
const Tile6_data3: Tile6Data[] = [
    { text: "    ]," },
    { text: "    \"offset\": 0," },
    { text: "    \"limit\": 3" }
];
const Tile8_data: Tile8Data[] = [
    { text: "\"version\"", text2: "\"0.1.20251208\"" },
    { text: "\"status_code\"", text2: "20000" },
    { text: "\"status_message\"", text2: "\"Ok.\"" },
    { text: "\"time\"", text2: "\"0.5640 sec.\"" },
    { text: "\"cost\"", text2: "0.103" },
    { text: "\"tasks_count\"", text2: "1" },
    { text: "\"tasks_error\"", text2: "0" }
];
const Tile9_data: Tile9Data[] = [
    { text: "\"id\"", text2: "\"12111819-1535-0634-0000-c3eb73d37a8b\"" },
    { text: "\"status_code\"", text2: "20000" },
    { text: "\"status_message\"", text2: "\"Ok.\"" },
    { text: "\"time\"", text2: "\"0.4705 sec.\"" },
    { text: "\"cost\"", text2: "0.103" },
    { text: "\"result_count\"", text2: "1" }
];

export default function Page() {
  return (
    <>
      <header className="w-full h-[89.9px] block sticky top-0 z-100 shrink-0 bg-background max-md:h-[92.3px] md:max-lg:h-[5.8rem] 2xl:h-[3.3rem]" id="header">
        <div className="block max-w-384 px-[1.2rem] mx-auto max-md:px-3 md:max-lg:px-[0.9375rem]">
          <div className="flex py-[0.6rem] justify-between items-center">
            {" "}
            <a className="block flex-1 text-primary cursor-pointer hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:border-clr-37 focus:text-clr-37 focus:outline-clr-37 focus:[text-decoration-color:var(--clr-37)]" data-component="link" aria-current="page" href="/v3/" rel="home">
              <img className="w-39 h-[1.4375rem] block max-w-39 overflow-clip aspect-[auto_250/62] max-md:w-35 max-md:h-[1.3125rem] max-md:max-w-35 md:max-lg:w-[9.5625rem] md:max-lg:max-w-[153.5px] hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="image" alt="DataForSeo Logo" height="62" src="/assets/cloned/images/056e08e8f762.png" width="250" />
            </a>
            {" "}
            <div className="flex justify-center items-center flex-1 gap-x-[0.8rem] max-lg:justify-end max-lg:gap-x-2">
              <button className="w-[13.4rem] h-[2.1rem] border border-solid border-color-004 block relative max-w-[13.4rem] rounded-md shrink-0 leading-[1rem] text-left cursor-pointer max-lg:w-9 max-lg:h-9 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:leading-0 max-lg:border-[0] max-lg:border-initial max-lg:border-[initial] hover:border-clr-16 focus:border-clr-38" data-component="button" title="Search documentation (Ctrl+K)">
                <Icon />
                {" "}
                <span className="inline pl-[1.9rem] text-color-003 text-[0.6875rem] leading-[0.8125rem] max-lg:hidden">
                  {" Search "}
                </span>
                {" "}
                <kbd className="w-[2.775rem] h-[1.275rem] border border-solid border-color-004 flex absolute top-2 right-2 py-[0.2rem] px-[0.4rem] rounded-[4.8px] items-center gap-[0.1rem] text-color-003 text-[0.625rem] font-medium leading-[0.625rem] bg-border transform-[matrix(1,0,0,1,0,-10.1875)] max-lg:hidden">
                  <span className="block text-xs leading-3">
                    Ctrl
                  </span>
                  {"K "}
                </kbd>
                {" "}
              </button>
              {" "}
              <button className="w-[23%] h-[2.1rem] min-h-[2.1rem] border border-solid border-border flex px-[1.2rem] rounded-md justify-center items-center gap-x-1 text-[0.8125rem] leading-[1.1875rem] text-center whitespace-nowrap text-nowrap bg-color-004 cursor-pointer max-lg:h-9 max-lg:rounded-lg max-md:leading-[1.3125rem] max-lg:min-h-0 max-lg:border-[0] max-lg:border-initial max-lg:border-[initial] max-lg:px-0 max-lg:[font-size:inherit] max-lg:bg-[initial] md:max-lg:w-[10%] md:max-lg:leading-[1.375rem] 2xl:w-[19.5%] hover:bg-clr-17 hover:border-clr-17" data-component="button" type="button">
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
                      <a className="h-[2.1rem] min-h-[2.1rem] border border-solid border-clr-1 flex px-[1.2rem] rounded-md justify-center items-center gap-x-2 text-primary text-[0.8125rem] leading-[1.1875rem] text-center whitespace-nowrap text-nowrap cursor-pointer max-lg:invisible hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="button" href="https://dataforseo.com/pricing" target="_blank">
                        Pricing
                        <Icon3 />
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="block max-lg:invisible" data-component="nav">
                  <ul className="flex items-center gap-x-[0.8rem] [list-style-type:none] list-outside max-lg:invisible">
                    <li className="w-full list-item max-lg:invisible">
                      <a className="h-[2.1rem] min-h-[2.1rem] border border-solid border-border flex px-[1.2rem] rounded-md justify-center items-center text-[0.8125rem] leading-[1.1875rem] text-center whitespace-nowrap text-nowrap bg-color-004 cursor-pointer max-lg:invisible hover:bg-clr-19 hover:border-color-004" data-component="button" href="https://app.dataforseo.com/signin/" target="_blank">
                        Sign In
                      </a>
                    </li>
                    <li className="w-full list-item max-lg:invisible">
                      <a className="h-[2.1rem] min-h-[2.1rem] border border-solid border-clr-1 flex px-[1.2rem] rounded-md justify-center items-center text-background text-[0.8125rem] font-semibold leading-[1.1875rem] text-center whitespace-nowrap text-nowrap bg-clr-2 cursor-pointer max-lg:invisible hover:bg-clr-20 hover:border-clr-21 focus:bg-clr-41 focus:border-clr-42" data-component="button" href="https://app.dataforseo.com/register/" target="_blank">
                        Sign Up
                      </a>
                    </li>
                    <li className="w-full list-item max-lg:invisible">
                      <button className="h-[2.1rem] min-h-[2.1rem] border border-solid border-border flex relative px-[0.8rem] rounded-md justify-center items-center text-[0.8125rem] leading-[1.1875rem] text-center whitespace-nowrap text-nowrap bg-color-004 cursor-pointer max-lg:invisible hover:bg-clr-17 hover:border-clr-19" data-component="button" aria-label="Toggle theme" id="theme-toggle" title="Switch to dark theme">
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
            <div className="grid items-start gap-x-2.5 grid-cols-1 2xl:gap-x-2 2xl:grid-cols-[208px_1281.62px]">
              <aside className="w-320 h-200 block fixed top-0 left-0 z-100 invisible opacity-0 min-w-0 max-h-200 pr-2 overflow-auto text-[0.9375rem] bg-clr-0 max-md:w-[23.4375rem] max-md:h-203 max-md:max-h-203 max-lg:[font-size:inherit] md:max-lg:w-192 md:max-lg:h-256 md:max-lg:max-h-256 2xl:w-52 2xl:h-243 2xl:sticky 2xl:top-[4.5625rem] 2xl:max-h-243 2xl:text-[0.8125rem] 2xl:left-auto 2xl:z-[initial] 2xl:[visibility:inherit] 2xl:opacity-[initial] 2xl:bg-[initial]">
                <button className="w-10 h-10 flex fixed top-5 right-5 z-102 rounded-[50%] justify-center items-center leading-[1.0625rem] text-left bg-color-004 cursor-pointer max-md:w-7.5 max-md:h-7.5 max-md:leading-[1rem] md:max-lg:w-[2.1375rem] md:max-lg:h-[2.1375rem] 2xl:w-[2.1rem] 2xl:h-[2.1rem] 2xl:top-4 2xl:right-4 2xl:leading-[0.9375rem] 2xl:z-[initial]">
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
                        <a className="block py-[0.5625rem] px-4 text-color-003 cursor-pointer 2xl:py-[0.45rem] 2xl:px-[0.8rem]" href="/v3/">
                          Introduction
                        </a>
                      </li>
                      <li className="list-item" id="menu-item-25750">
                        <a className="block py-[0.5625rem] px-4 text-color-003 cursor-pointer 2xl:py-[0.45rem] 2xl:px-[0.8rem]" href="/v3/auth/">
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
                        <div className="min-h-px block relative float-left max-md:[float:initial]">
                          <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:leading-[1.0625rem] md:max-lg:before:text-[0.9375rem] md:max-lg:before:leading-[1.0625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:leading-[1.0625rem] md:max-lg:after:text-[0.9375rem] md:max-lg:after:leading-[1.0625rem]">
                            <div className="h-full block">
                              <div className="block mb-[2.1875rem]">
                                <div className="block">
                                  <h2 className="block mb-[0.6rem] text-[1.3125rem] font-semibold leading-[1.9375rem] max-lg:mb-3" data-component="heading">
                                    Live LLM Mentions Search (Legacy)
                                  </h2>
                                  <div className="border-b border-solid border-b-border flex mt-6 mb-8 pb-6 flex-wrap gap-3 max-lg:mt-4 max-lg:mb-6 max-lg:pb-4 max-md:gap-1.5 md:max-lg:gap-2">
                                    <button className="border border-solid border-border flex relative p-2 rounded-md items-center gap-2 text-color-003 font-medium leading-[1.3125rem] text-center whitespace-nowrap text-nowrap bg-border cursor-pointer max-md:p-1.5 max-lg:text-[0.8125rem] max-lg:leading-[1.25rem] md:max-lg:p-[0.4rem] after:content-['Add_to_Favorites'] after:block after:absolute after:-top-9.5 after:-right-[5.0625rem] after:bottom-11 after:left-0 after:z-10 after:w-[7.3125rem] after:h-7.5 after:py-1.5 after:px-3 after:text-background after:text-xs after:font-medium after:leading-4.5 after:text-center after:bg-foreground after:opacity-0 after:rounded-tl-sm max-lg:after:hidden max-lg:after:bottom-[calc(100%_+_8px)] max-lg:after:top-auto max-lg:after:right-auto max-lg:after:w-auto max-lg:after:h-auto hover:border-color-004 hover:text-clr-22 hover:outline-clr-22 hover:[text-decoration-color:var(--clr-22)]" data-component="button" title="Add to Favorites">
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
                                  <p className="block mt-3 leading-[1.25rem] max-lg:mt-[0.9375rem]">
                                    <strong className="inline font-bold">
                                      Endpoint Notice
                                    </strong>
                                    <br className="inline" />
                                    {" This endpoint has been replaced by "}
                                    <a className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2 hover:bg-clr-23">
                                      {" https://api.dataforseo.com/v3/ai_optimization/llm_mentions/search_mentions/live/ "}
                                      <Icon8 />
                                      {" "}
                                    </a>
                                    {" "}
                                    <br className="inline" />
                                    {" "}
                                    <strong className="inline font-bold">
                                      <a className="inline text-primary cursor-pointer hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="/v3/ai_optimization/llm_mentions/search_mentions/live/">
                                        {"See new documentation >>"}
                                      </a>
                                    </strong>
                                    <br className="inline" />
                                    {" The current path ("}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      search/live
                                    </code>
                                    ) will continue to be supported for the foreseeable future (no deprecation date is set), but all new integrations must use the new path.
                                    <br className="inline" />
                                    {" "}
                                    <br className="inline" />
                                    {" "}
                                    <br className="inline" />
                                    {" Live LLM Mentions Search endpoint provides mention data and related metrics from AI searches. The results are specific to the selected platform ("}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      google
                                    </code>
                                    {" for Google’s AI Overview or "}
                                    <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                      chat_gpt
                                    </code>
                                    {" for ChatGPT), as well as location and language parameters (see "}
                                    <a className="inline text-primary cursor-pointer hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="/v3/ai_optimization/llm_mentions/locations_and_languages" rel="noopener noreferrer" target="_blank">
                                      {"the List of Locations & Languages"}
                                    </a>
                                    ).
                                  </p>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                              <div className="flex my-3 py-2 px-[0.8rem] rounded-md flex-wrap items-center gap-y-2 gap-x-1 text-[0.6875rem] font-semibold bg-clr-3 max-lg:my-[0.9375rem] max-md:p-2.5 max-lg:rounded-lg max-lg:gap-y-2.5 max-lg:gap-x-[0.3125rem] max-md:[font-size:inherit] md:max-lg:py-2.5 md:max-lg:px-[11.5px] md:max-lg:text-[0.875rem]">
                                <img className="w-[0.8125rem] h-[0.8125rem] block max-w-full overflow-clip max-lg:w-4 max-lg:h-4" data-component="image" alt="checked" src="/assets/cloned/svg/9a93a8726b27.svg" />
                                {" POST "}
                                <button className="flex p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] font-normal leading-[0.8125rem] text-left [word-break:break-word] bg-border cursor-pointer max-lg:p-1.5 max-lg:gap-x-2 max-lg:leading-[1rem] hover:bg-clr-23" data-component="button">
                                  {" https://api.dataforseo.com/v3/ai_optimization/llm_mentions/search/live "}
                                  <Icon9 />
                                  {" "}
                                </button>
                                {" "}
                              </div>
                              {" "}
                              <article className="border-l border-solid border-l-clr-4 flex my-6 py-[0.4rem] pl-[0.8rem] flex-col gap-y-[0.4rem] max-lg:border-l-2 max-md:my-[0.9375rem] max-lg:py-2 max-lg:pl-4 max-lg:gap-y-2 md:max-lg:my-[18.7px]">
                                <header className="flex items-center gap-x-[0.4rem] max-lg:gap-x-2">
                                  <div className="block relative leading-0">
                                    <Icon10 />
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="block font-semibold">
                                    Pricing
                                  </div>
                                  {" "}
                                </header>
                                {" "}
                                <div className="block">
                                  <p className="block my-[0.15rem] leading-[1.25rem] max-lg:my-[0.1875rem]">
                                    {"The cost of the task can be calculated on the "}
                                    <a className="inline text-primary cursor-pointer hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://dataforseo.com/pricing/ai-optimization/llm-mentions" target="_blank">
                                      Pricing page
                                    </a>
                                    {". "}
                                  </p>
                                  {" "}
                                </div>
                                {" "}
                              </article>
                              {" "}
                              <div className="block mb-[2.1875rem]">
                                <div className="block">
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    {"All POST data should be sent in the "}
                                    <a className="inline text-primary cursor-pointer hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://en.wikipedia.org/wiki/JSON">
                                      JSON
                                    </a>
                                    {" format (UTF-8 encoding). The task setting is done using the POST method. When setting a task, you should send all task parameters in the task array of the generic POST array. You can send up to 2000 API calls per minute, each Live LLM Mentions API call can contain only one task."}
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    <strong className="inline font-bold">
                                      Execution time for tasks set with the Live LLM Mentions endpoint is currently up to 120 seconds.
                                    </strong>
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    Below you will find a detailed description of the fields you can use for setting a task.
                                  </p>
                                  {" "}
                                  <p className="block my-3 leading-[1.25rem] max-lg:my-[0.9375rem]">
                                    <strong className="inline font-bold">
                                      Description of the fields for setting a task:
                                    </strong>
                                    <br className="inline" />
                                    {" "}
                                  </p>
                                  <div className="block">
                                    <div className="border border-solid border-border block rounded-md overflow-x-auto overflow-y-hidden max-lg:rounded-lg">
                                      <table className="w-[687.3px] table min-w-120 text-[0.75rem] [border-collapse:collapse] [border-spacing:2px] max-md:w-150 max-lg:min-w-150 md:max-lg:w-[704.3px] md:max-lg:text-[0.8125rem] 2xl:w-[727.3px]">
                                        <thead className="table-header-group align-middle text-left bg-border [border-collapse:collapse] [border-spacing:2px]">
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]">
                                            <th className="border-r border-solid border-r-color-009 table-cell py-2 px-[0.6rem] align-middle font-semibold [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3">
                                              Field name
                                            </th>
                                            <th className="border-r border-solid border-r-color-009 table-cell py-2 px-[0.6rem] align-middle font-semibold [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3">
                                              Type
                                            </th>
                                            <th className="table-cell py-2 px-[0.6rem] align-middle font-semibold [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3" colSpan="2">
                                              Description
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                  target
                                                </code>
                                              </strong>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              array
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  array of objects containing target entities
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  required field
                                                </strong>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you can specify "}
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  up to 10 entities (objects)
                                                </strong>
                                                {" in the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  target
                                                </code>
                                                {" field"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"one target entity can contain either one "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  domain
                                                </code>
                                                {" or one "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  keyword
                                                </code>
                                                {" and related parameters"}
                                              </p>
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                {"examples: "}
                                              </p>
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                target array with a domain entity
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  {"[{\"domain\": \"en.wikipedia.org\", \"search_filter\": \"exclude\"}]"}
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                target array with a keyword entity
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  {"[{\"keyword\": \"bmw\", \"search_scope\": [\"question\"], \"match_type \": \"partial_match\"}]"}
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                target array with multiple entities
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  {"[{\"domain\": \"en.wikipedia.org\", \"search_filter\": \"exclude\"}, {\"keyword\": \"bmw\", \"match_type \": \"partial_match\", \"search_scope\": [\"answer\"]}]"}
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-domain_entity">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                  domain_entity
                                                </code>
                                              </strong>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              object
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  domain entity in the target array
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                example:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  {"{\"domain\": \"en.wikipedia.org\", \"search_filter\": \"exclude\", \"search_scope\": [\"sources\"]}"}
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-domain_entity-domain">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                domain
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  target domain
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  {"required field if you don't specify "}
                                                  <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    keyword
                                                  </code>
                                                </strong>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you can specify "}
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  up to 63 characters
                                                </strong>
                                                {" in the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  domain
                                                </code>
                                                {" field;"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"a domain should be specified without "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  https://
                                                </code>
                                                {" and "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  www.
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-domain_entity-search_filter">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                search_filter
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  target domain search filter
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                possible values:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  include
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  exclude
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"default value: "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  include
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-domain_entity-search_scope">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                search_scope
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              array
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  target domain search scope
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                possible values:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  any
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  sources
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  search_results
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"default value: "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  any
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-domain_entity-include_subdomains">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                include_subdomains
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              boolean
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  {"indicates if the subdomains of the target "}
                                                  <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    domain
                                                  </code>
                                                  {" will be included in the search"}
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"if set to "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  true
                                                </code>
                                                , the subdomains will be included in the search
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"default value: "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  false
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-keyword_entity">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                  keyword_entity
                                                </code>
                                              </strong>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              object
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  keyword entity in the target array
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                example:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  {"{\"keyword\": \"bmw\", \"search_filter\": \"include\", \"search_scope\": [\"question\"], \"match_type \": \"partial_match\"}"}
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-keyword_entity-keyword">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                keyword
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  target keyword
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  {"required field if you don't specify "}
                                                  <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    domain
                                                  </code>
                                                </strong>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you can specify "}
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  up to 250 characters
                                                </strong>
                                                {" in the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  keyword
                                                </code>
                                                {" field"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                all %## will be decoded (plus character ‘+’ will be decoded to a space character)
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"if you need to use the “%” character for your "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  keyword
                                                </code>
                                                , please specify it as “%25”;
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"if you need to use the “+” character for your "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  keyword
                                                </code>
                                                , please specify it as “%2B”
                                              </p>
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                {"learn more about rules and limitations of "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  keyword
                                                </code>
                                                {" and "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  keywords
                                                </code>
                                                {" fields in DataForSEO APIs in this "}
                                                <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis" rel="noopener noreferrer" target="_blank">
                                                  Help Center article
                                                </a>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-keyword_entity-search_filter">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                search_filter
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  target keyword search filter
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                possible values:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  include
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  exclude
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"default value: "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  include
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-keyword_entity-search_scope">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                search_scope
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              array
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  target keyword search scope
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                possible values:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  any
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  question
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  answer
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  brand_entities
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  fan_out_queries
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"default value: "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  any
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="target-keyword_entity-match_type">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                match_type
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  target keyword match type
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                defines how the specified keyword is matched
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                possible values:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  word_match
                                                </code>
                                                {" - full-text search for terms that match the specified seed keyword with additional words included before, after, or within the key phrase (e.g., search for \"light\" will return results with \"light bulb\", \"light switch\");"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  partial_match
                                                </code>
                                                {" - substring search that finds all instances containing the specified sequence of characters, even if it appears inside a longer word (e.g., search for \"light\" will return results with \"lighting\", \"highlight\");"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"default value: "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  word_match
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="location_name">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                location_name
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  full name of search location
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"if you use this field, you don't need to specify "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  location_code
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"if you don't specify this field, the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  location_code
                                                </code>
                                                {" with "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  2840
                                                </code>
                                                {" value will be used by default;"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you can receive the list of available locations of the search engine with their "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  location_name
                                                </code>
                                                {" by making a separate request to the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  <a className="block text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-24 hover:text-clr-24 hover:outline-clr-24 hover:[text-decoration-color:var(--clr-24)] focus:border-clr-43 focus:text-clr-43 focus:outline-clr-43 focus:[text-decoration-color:var(--clr-43)]" data-component="link" href="https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages">
                                                    https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
                                                  </a>
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  {"Note: "}
                                                  <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    chat_gpt
                                                  </code>
                                                  {" data is available for "}
                                                  <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    United States
                                                  </code>
                                                  {" only"}
                                                </strong>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="location_code">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                location_code
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              integer
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  search location code
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"if you use this field, you don't need to specify "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  location_name
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you can receive the list of available locations of the search engine with their "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  location_code
                                                </code>
                                                {" by making a separate request to the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  <a className="block text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages">
                                                    https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
                                                  </a>
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"default value: "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  2840
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  {"Note: "}
                                                  <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    chat_gpt
                                                  </code>
                                                  {" data is available for "}
                                                  <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    2840
                                                  </code>
                                                  {" only"}
                                                </strong>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="language_name">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                language_name
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  full name of search language
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"if you use this field, you don't need to specify "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  language_code
                                                </code>
                                                ;
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"if you don't specify this field, the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  language_code
                                                </code>
                                                {" with "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  en
                                                </code>
                                                {" value will be used by default;"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you can receive the list of available languages of the search engine with their "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  language_name
                                                </code>
                                                {" by making a separate request to the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  <a className="block text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-44 focus:text-clr-44 focus:outline-clr-44 focus:[text-decoration-color:var(--clr-44)]" data-component="link" href="https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages">
                                                    https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
                                                  </a>
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  {"Note: "}
                                                  <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    chat_gpt
                                                  </code>
                                                  {" data is available for "}
                                                  <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    English
                                                  </code>
                                                  {" only"}
                                                </strong>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="language_code">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                language_code
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  search language code
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"if you use this field, you don't need to specify "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  language_name
                                                </code>
                                                ;
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you can receive the list of available languages of the search engine with their "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  language_code
                                                </code>
                                                {"_by making a separate request to the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  <a className="block text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages">
                                                    https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
                                                  </a>
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"default value: "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  en
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  {"Note: "}
                                                  <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    chat_gpt
                                                  </code>
                                                  {" data is available for "}
                                                  <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                    en
                                                  </code>
                                                  {" onlyn"}
                                                </strong>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="platform">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                platform
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  target platform
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                possible values:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  chat_gpt
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  google
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"default value: "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  google
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  Note:
                                                </strong>
                                                {" the data returned depends on the selected platform"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  Note #2:
                                                </strong>
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  chat_gpt
                                                </code>
                                                {" data is available for the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  United States
                                                </code>
                                                {" and "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  English
                                                </code>
                                                {" only"}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="filters">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                filters
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              array
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  array of results filtering parameters
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  you can add several filters at once (8 filters maximum)
                                                </strong>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you should set a logical operator "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  and
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  or
                                                </code>
                                                {" between the conditions"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                the following operators are supported:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  =
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  {"<>"}
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  in
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  not_in
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  like
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  not_like
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  ilike
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  not_ilike
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  match
                                                </code>
                                                {", "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  not_match
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you can use the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  %
                                                </code>
                                                {" operator with "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  like
                                                </code>
                                                {" and "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  not_like
                                                </code>
                                                {" to match any string of zero or more characters"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                example:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  {"[\"ai_search_volume\",\">\",\"1000\"]"}
                                                </code>
                                              </p>
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                {"The full list of possible filters is available "}
                                                <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="/v3/ai_optimization/llm_mentions/filters/" rel="noopener noreferrer" target="_blank">
                                                  here.
                                                </a>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="order_by">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                order_by
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              array
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  results sorting rules
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you can use the same values as in the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  filters
                                                </code>
                                                {" array to sort the results"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                possible sorting types:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  asc
                                                </code>
                                                {" - results will be sorted in the ascending order"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  desc
                                                </code>
                                                {" - results will be sorted in the descending order"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                you should use a comma to set up a sorting type
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                example:
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2">
                                                  ["ai_search_volume,desc"]
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  note that you can set no more than three sorting rules in a single request
                                                </strong>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                you should use a comma to separate several sorting rules
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="offset">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                offset
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              integer
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  offset in the results array of the returned mentions data
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                              </p>
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                {"default value: "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  0
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"example: if you specify the "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  10
                                                </code>
                                                {" value, the first ten mentions objects in the results array will be omitted and the data will be provided for the successive objects;"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  Note:
                                                </strong>
                                                {" the maximum value is "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  9,000
                                                </code>
                                                {", use the "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  search_after_token
                                                </code>
                                                {" if you would like to offset more results"}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="search_after_token">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                search_after_token
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  token for subsequent requests
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                provided in the identical filed of the response to each request;
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"use this parameter to avoid timeouts while trying to obtain over "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  20,000
                                                </code>
                                                {" results in a single request;"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"by specifying the unique "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  search_after_token
                                                </code>
                                                {" value from the response array, you will get the subsequent results of the initial task;"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  search_after_token
                                                </code>
                                                {" values are unique for each subsequent task ;"}
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                  Note:
                                                </strong>
                                                {" if the "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  search_after_token
                                                </code>
                                                {" is specified in the request, all other parameters should be identical to the previous request"}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="limit">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                limit
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              integer
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  the maximum number of returned objects
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                              </p>
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                {"default value: "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  100
                                                </code>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"maximum value: "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  1000
                                                </code>
                                              </p>
                                            </td>
                                          </tr>
                                          <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tag">
                                            <td className="border-r border-solid border-r-border table-cell relative py-2 px-[0.6rem] leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              <code className="inline py-[0.1rem] px-[0.35rem] rounded-xs bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:py-0.5 max-lg:px-[0.4375rem]">
                                                tag
                                              </code>
                                            </td>
                                            <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                              string
                                            </td>
                                            <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                              <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  user-defined task identifier
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                optional field
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                  the character limit is 255
                                                </em>
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                you can use this parameter to identify the task and match it with the result
                                                <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                {"you will find the specified "}
                                                <code className="inline-flex my-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  tag
                                                </code>
                                                {" value in the "}
                                                <code className="inline-flex mt-[0.3rem] p-[0.3rem] rounded-xs items-center gap-x-[0.4rem] [word-break:break-word] bg-border [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:p-1.5 max-lg:gap-x-2" data-component="badge">
                                                  data
                                                </code>
                                                {" object of the response"}
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <br className="inline" />
                                  {" ‌"}
                                  <br className="inline" />
                                  {" ‌‌As a response of the API server, you will receive "}
                                  <a className="inline text-primary cursor-pointer hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://en.wikipedia.org/wiki/JSON">
                                    JSON
                                  </a>
                                  {"-encoded data containing a "}
                                  <code className="inline [font-family:monospace,_monospace]">
                                    tasks
                                  </code>
                                  {" array with the information specific to the set tasks."}
                                  <br className="inline" />
                                  {" ‌"}
                                  <br className="inline" />
                                  {" "}
                                  <strong className="inline font-bold">
                                    Description of the fields in the results array:
                                  </strong>
                                  <br className="inline" />
                                  {" "}
                                  <div className="block">
                                    <div className="block">
                                      <div className="block">
                                        <div className="border border-solid border-border block rounded-md overflow-x-auto overflow-y-hidden max-lg:rounded-lg">
                                          <table className="w-[687.3px] table min-w-120 text-[0.75rem] [border-collapse:collapse] [border-spacing:2px] max-md:w-155 max-lg:min-w-150 md:max-lg:w-[704.3px] md:max-lg:text-[0.8125rem] 2xl:w-[727.3px]">
                                            <thead className="table-header-group align-middle text-left bg-border [border-collapse:collapse] [border-spacing:2px]">
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]">
                                                <th className="border-r border-solid border-r-color-009 table-cell py-2 px-[0.6rem] align-middle font-semibold [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3">
                                                  Field name
                                                </th>
                                                <th className="border-r border-solid border-r-color-009 table-cell py-2 px-[0.6rem] align-middle font-semibold [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3">
                                                  Type
                                                </th>
                                                <th className="table-cell py-2 px-[0.6rem] align-middle font-semibold [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3" colSpan="2">
                                                  Description
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="version">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-3 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:hidden before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border after:content-[''] after:hidden after:absolute after:top-4.5 after:left-0 after:h-px after:bg-border">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-25 focus:bg-clr-45">
                                                    version
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      the current version of the API
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="status_code">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-3 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:hidden before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border after:content-[''] after:hidden after:absolute after:top-4.5 after:left-0 after:h-px after:bg-border">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    status_code
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <i className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      general status code
                                                    </i>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"you can find the full list of the response codes "}
                                                    <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="/v3/appendix/errors">
                                                      here
                                                    </a>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                      Note:
                                                    </strong>
                                                    {" we strongly recommend designing a necessary system for handling related exceptional or error conditions"}
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="status_message">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-3 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:hidden before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border after:content-[''] after:hidden after:absolute after:top-4.5 after:left-0 after:h-px after:bg-border">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    status_message
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      general informational message
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"you can find the full list of general informational messages "}
                                                    <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-44 focus:text-clr-44 focus:outline-clr-44 focus:[text-decoration-color:var(--clr-44)]" data-component="link" href="/v3/appendix/errors">
                                                      here
                                                    </a>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="time">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-3 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:hidden before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border after:content-[''] after:hidden after:absolute after:top-4.5 after:left-0 after:h-px after:bg-border">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    time
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      execution time, seconds
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="cost">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-3 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:hidden before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border after:content-[''] after:hidden after:absolute after:top-4.5 after:left-0 after:h-px after:bg-border">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    cost
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  float
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      total tasks cost, USD
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks_count">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-3 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:hidden before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border after:content-[''] after:hidden after:absolute after:top-4.5 after:left-0 after:h-px after:bg-border">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-25 focus:bg-clr-45">
                                                    tasks_count
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      {"the number of tasks in the "}
                                                      <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                        <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] whitespace-nowrap max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-48" data-component="badge">
                                                          tasks
                                                        </code>
                                                      </strong>
                                                      {" array"}
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks_error">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-3 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:hidden before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border after:content-[''] after:hidden after:absolute after:top-4.5 after:left-0 after:h-px after:bg-border">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    tasks_error
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      {"the number of tasks in the "}
                                                      <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                        <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] whitespace-nowrap max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-48" data-component="badge">
                                                          tasks
                                                        </code>
                                                      </strong>
                                                      {" array returned with an error"}
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-3 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:hidden before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border after:content-[''] after:hidden after:absolute after:top-4.5 after:left-0 after:h-px after:bg-border">
                                                  <button className="w-4.5 h-4.5 border border-solid border-muted-foreground flex absolute right-0 z-1 mr-1.5 rounded-[3px] justify-center items-center shrink-0 align-middle text-muted-foreground font-bold leading-3 text-center bg-background cursor-pointer [border-collapse:collapse] [border-spacing:2px] md:max-lg:text-[0.75rem] hover:border-clr-27 focus:border-clr-49" data-component="button" title="Collapse children">
                                                    −
                                                  </button>
                                                  <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                    <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-45">
                                                      tasks
                                                    </code>
                                                  </strong>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  array
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      array of tasks
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-id">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-6 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.85rem] before:left-3 before:w-px before:h-[3.2875rem] before:bg-border max-md:before:right-40 max-md:before:h-[3.5375rem] md:max-lg:before:right-41.5 md:max-lg:before:h-[3.5625rem] after:content-[''] after:block after:absolute after:top-4.5 after:right-[9.4125rem] after:bottom-[2.1rem] after:left-3 after:w-2 after:h-px after:bg-border max-md:after:right-[9.5625rem] max-md:after:bottom-[2.35rem] md:max-lg:after:right-[9.9375rem] md:max-lg:after:bottom-[2.375rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    id
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      task identifier
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                      {"unique task identifier in our system in the "}
                                                      <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-24 hover:text-clr-24 hover:outline-clr-24 hover:[text-decoration-color:var(--clr-24)] focus:border-clr-43 focus:text-clr-43 focus:outline-clr-43 focus:[text-decoration-color:var(--clr-43)]" data-component="link" href="https://en.wikipedia.org/wiki/Universally_unique_identifier">
                                                        UUID
                                                      </a>
                                                      {" format"}
                                                    </strong>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-status_code">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-6 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.85rem] before:left-3 before:w-px before:h-[5.3875rem] before:bg-border max-md:before:right-40 max-md:before:h-[5.6375rem] md:max-lg:before:right-41.5 md:max-lg:before:h-[5.75rem] after:content-[''] after:block after:absolute after:top-4.5 after:right-[9.4125rem] after:bottom-[4.2rem] after:left-3 after:w-2 after:h-px after:bg-border max-md:after:right-[9.5625rem] max-md:after:bottom-[4.45rem] md:max-lg:after:right-[9.9375rem] md:max-lg:after:bottom-[4.5625rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-50">
                                                    status_code
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      status code of the task
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    generated by DataForSEO; can be within the following range: 10000-60000
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"you can find the full list of the response codes "}
                                                    <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-44 focus:text-clr-44 focus:outline-clr-44 focus:[text-decoration-color:var(--clr-44)]" data-component="link" href="/v3/appendix/errors">
                                                      here
                                                    </a>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-status_message">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-6 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.85rem] before:left-3 before:w-px before:bg-border max-md:before:right-40 md:max-lg:before:right-41.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[9.4125rem] after:bottom-[2.1rem] after:left-3 after:w-2 after:h-px after:bg-border max-md:after:right-[9.5625rem] max-md:after:bottom-[3.4rem] md:max-lg:after:right-[9.9375rem] md:max-lg:after:bottom-[2.375rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    status_message
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      informational message of the task
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"you can find the full list of general informational messages "}
                                                    <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="/v3/appendix/errors">
                                                      here
                                                    </a>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-time">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-6 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.85rem] before:left-3 before:w-px before:h-[2.3125rem] before:bg-border max-md:before:right-40 max-md:before:h-[2.5625rem] md:max-lg:before:right-41.5 md:max-lg:before:h-[2.6125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[9.4125rem] after:left-3 after:w-2 after:h-px after:bg-border max-md:after:right-[9.5625rem] max-md:after:bottom-5.5 md:max-lg:after:right-[9.9375rem] md:max-lg:after:bottom-[1.425rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    time
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      execution time, seconds
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-cost">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-6 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.85rem] before:left-3 before:w-px before:h-[2.3125rem] before:bg-border max-md:before:right-40 max-md:before:h-[2.5625rem] md:max-lg:before:right-41.5 md:max-lg:before:h-[2.6125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[9.4125rem] after:left-3 after:w-2 after:h-px after:bg-border max-md:after:right-[9.5625rem] max-md:after:bottom-5.5 md:max-lg:after:right-[9.9375rem] md:max-lg:after:bottom-[1.425rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    cost
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  float
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      cost of the task, USD
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result_count">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-6 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.85rem] before:left-3 before:w-px before:h-[2.6rem] before:bg-border max-md:before:right-40 max-md:before:h-[2.925rem] md:max-lg:before:right-41.5 md:max-lg:before:h-12 after:content-[''] after:block after:absolute after:top-4.5 after:right-[9.4125rem] after:bottom-[1.4125rem] after:left-3 after:w-2 after:h-px after:bg-border max-md:after:right-[9.5625rem] max-md:after:bottom-7 md:max-lg:after:right-[9.9375rem] md:max-lg:after:bottom-[1.8rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    result_count
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      {"number of elements in the "}
                                                      <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-28 focus:bg-clr-51" data-component="badge">
                                                        result
                                                      </code>
                                                      {" array"}
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-path">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-6 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.85rem] before:left-3 before:w-px before:h-[2.3125rem] before:bg-border max-md:before:right-40 max-md:before:h-[2.5625rem] md:max-lg:before:right-41.5 md:max-lg:before:h-[2.6125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[9.4125rem] after:left-3 after:w-2 after:h-px after:bg-border max-md:after:right-[9.5625rem] max-md:after:bottom-5.5 md:max-lg:after:right-[9.9375rem] md:max-lg:after:bottom-[1.425rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    path
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  array
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      URL path
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-data">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-6 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.85rem] before:left-3 before:w-px before:bg-border max-md:before:right-40 md:max-lg:before:right-41.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[9.4125rem] after:bottom-[2.1rem] after:left-3 after:w-2 after:h-px after:bg-border max-md:after:right-[9.5625rem] max-md:after:bottom-[2.35rem] md:max-lg:after:right-[9.9375rem] md:max-lg:after:bottom-[2.375rem] 2xl:after:bottom-4.5">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-52">
                                                    data
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  object
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      contains the same parameters that you specified in the POST request
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-6 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:top-0 before:right-[9.85rem] before:bottom-[18.5px] before:left-3 before:w-px before:h-[18.5px] before:bg-border max-md:before:right-40 max-md:before:bottom-[20.5px] max-md:before:h-[20.5px] md:max-lg:before:right-41.5 md:max-lg:before:bottom-[1.3125rem] md:max-lg:before:h-[1.3125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[9.4125rem] after:left-3 after:w-2 after:h-px after:bg-border max-md:after:right-[9.5625rem] max-md:after:bottom-5.5 md:max-lg:after:right-[9.9375rem] md:max-lg:after:bottom-[1.425rem]">
                                                  <button className="w-4.5 h-4.5 border border-solid border-muted-foreground flex absolute left-[0.1875rem] z-1 rounded-[3px] justify-center items-center shrink-0 align-middle text-muted-foreground font-bold leading-3 text-center bg-background cursor-pointer [border-collapse:collapse] [border-spacing:2px] md:max-lg:text-[0.75rem] hover:border-clr-27 focus:border-clr-49" data-component="button" title="Collapse children">
                                                    −
                                                  </button>
                                                  <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                    <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                      result
                                                    </code>
                                                  </strong>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  array
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      array of results
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-total_count">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-9 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.1rem] before:left-6 before:w-px before:h-[2.3125rem] before:bg-border max-md:before:right-37 max-md:before:h-[2.5625rem] md:max-lg:before:right-38.5 md:max-lg:before:h-[2.6125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[8.6625rem] after:left-6 after:w-2 after:h-px after:bg-border max-md:after:right-[8.8125rem] max-md:after:bottom-5.5 md:max-lg:after:right-[9.1875rem] md:max-lg:after:bottom-[1.425rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    total_count
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      total amount of results relevant the request
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-current_offset">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-9 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.1rem] before:left-6 before:w-px before:bg-border max-md:before:right-37 md:max-lg:before:right-38.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[8.6625rem] after:bottom-[1.4125rem] after:left-6 after:w-2 after:h-px after:bg-border max-md:after:right-[8.8125rem] max-md:after:bottom-[2.975rem] md:max-lg:after:right-[9.1875rem] md:max-lg:after:bottom-[2.875rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    current_offset
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      {"the number of mentions objects that are omitted in the "}
                                                      <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-48" data-component="badge">
                                                        items
                                                      </code>
                                                      {" array"}
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-search_after_token">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-9 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.1rem] before:left-6 before:w-px before:bg-border max-md:before:right-37 md:max-lg:before:right-38.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[8.6625rem] after:bottom-[5.6rem] after:left-6 after:w-2 after:h-px after:bg-border max-md:after:right-[8.8125rem] max-md:after:bottom-[8.175rem] md:max-lg:after:right-[9.1875rem] md:max-lg:after:bottom-[6.1875rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-52">
                                                    search_after_token
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      token for subsequent requests
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"by specifying the unique "}
                                                    <code className="inline-flex my-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-48" data-component="badge">
                                                      search_after_token
                                                    </code>
                                                    {" when setting a new task, you will get the subsequent results of the initial task;"}
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-48" data-component="badge">
                                                      search_after_token
                                                    </code>
                                                    {" values are unique for each subsequent task"}
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items_count">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-9 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[9.1rem] before:left-6 before:w-px before:h-[2.6rem] before:bg-border max-md:before:right-37 max-md:before:h-[2.925rem] md:max-lg:before:right-38.5 md:max-lg:before:h-12 after:content-[''] after:block after:absolute after:top-4.5 after:right-[8.6625rem] after:bottom-[1.4125rem] after:left-6 after:w-2 after:h-px after:bg-border max-md:after:right-[8.8125rem] max-md:after:bottom-7 md:max-lg:after:right-[9.1875rem] md:max-lg:after:bottom-[1.8rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-25 focus:bg-clr-52">
                                                    items_count
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      {"the number of results returned in the "}
                                                      <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-28 focus:bg-clr-48" data-component="badge">
                                                        items
                                                      </code>
                                                      {" array"}
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-9 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:top-0 before:right-[9.1rem] before:bottom-[18.5px] before:left-6 before:w-px before:h-[18.5px] before:bg-border max-md:before:right-37 max-md:before:bottom-[20.5px] max-md:before:h-[20.5px] md:max-lg:before:right-38.5 md:max-lg:before:bottom-[1.3125rem] md:max-lg:before:h-[1.3125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[8.6625rem] after:left-6 after:w-2 after:h-px after:bg-border max-md:after:right-[8.8125rem] max-md:after:bottom-5.5 md:max-lg:after:right-[9.1875rem] md:max-lg:after:bottom-[1.425rem]">
                                                  <button className="w-4.5 h-4.5 border border-solid border-muted-foreground flex absolute left-[0.9375rem] z-1 rounded-[3px] justify-center items-center shrink-0 align-middle text-muted-foreground font-bold leading-3 text-center bg-background cursor-pointer [border-collapse:collapse] [border-spacing:2px] md:max-lg:text-[0.75rem] hover:border-clr-27 focus:border-clr-49" data-component="button" title="Collapse children">
                                                    −
                                                  </button>
                                                  <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                    <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-53">
                                                      items
                                                    </code>
                                                  </strong>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  array
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      contains relevant mentions data
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-platform">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:h-[2.3125rem] before:bg-border max-md:before:right-34 max-md:before:h-[2.5625rem] md:max-lg:before:right-35.5 md:max-lg:before:h-[2.6125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[7.9125rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-5.5 md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[1.425rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    platform
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      platform received in a POST array
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-model_name">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:bg-border max-md:before:right-34 md:max-lg:before:right-35.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[4.55rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[6.075rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[81.5px]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    model_name
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      name of the AI model from which the data was retrieved
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                      Note:
                                                    </strong>
                                                    {" for the "}
                                                    <code className="inline-flex my-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:my-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-51" data-component="badge">
                                                      google
                                                    </code>
                                                    {" platform type, the value is always "}
                                                    <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-48" data-component="badge">
                                                      google_ai_overview
                                                    </code>
                                                  </p>
                                                </td>
                                              </tr>
                                              {Tile_data.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-answer">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:bg-border max-md:before:right-34 md:max-lg:before:right-35.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[2.1rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[3.4rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[55.5px]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    answer
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      relevant answer in markdown format
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"content of the result formatted in the "}
                                                    <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://en.wikipedia.org/wiki/Markdown" target="_blank">
                                                      markdown markup language
                                                    </a>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-sources">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:bg-border max-md:before:right-34 md:max-lg:before:right-35.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[4.2rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[5.5rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[4.5625rem]">
                                                  <button className="w-4.5 h-4.5 border border-solid border-muted-foreground flex absolute left-[1.6875rem] z-1 rounded-[3px] justify-center items-center shrink-0 align-middle text-muted-foreground font-bold leading-3 text-center bg-background cursor-pointer [border-collapse:collapse] [border-spacing:2px] md:max-lg:text-[0.75rem] hover:border-clr-29 focus:border-clr-54" data-component="button" title="Collapse children">
                                                    −
                                                  </button>
                                                  <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                    <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-25 focus:bg-clr-45">
                                                      sources
                                                    </code>
                                                  </strong>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  array
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      array of sources
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    the sources the model cited or relied on in its final answer
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"learn more about the sources and how to retrieve LLM citation data at our "}
                                                    <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://dataforseo.com/help-center/how-to-get-llm-citation-data-with-llm-mentions-api" target="_blank">
                                                      Help Center
                                                    </a>
                                                  </p>
                                                </td>
                                              </tr>
                                              {Tile2_data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-sources-markdown">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-15 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[7.6rem] before:left-12 before:w-px before:bg-border max-md:before:right-31 md:max-lg:before:right-32.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.1625rem] after:bottom-[2.1rem] after:left-12 after:w-2 after:h-px after:bg-border max-md:after:right-[7.3125rem] max-md:after:bottom-[3.4rem] md:max-lg:after:right-[7.6875rem] md:max-lg:after:bottom-[55.5px]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    markdown
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      content of the element in markdown format
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"content of the result formatted in the "}
                                                    <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-44 focus:text-clr-44 focus:outline-clr-44 focus:[text-decoration-color:var(--clr-44)]" data-component="link" href="https://en.wikipedia.org/wiki/Markdown" target="_blank">
                                                      markdown markup language
                                                    </a>
                                                  </p>
                                                </td>
                                              </tr>
                                              {Tile3_data.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles[i]} />)}
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-sources-publication_date">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-15 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:top-0 before:right-[7.6rem] before:bottom-14 before:left-12 before:w-px before:h-14 before:bg-border max-md:before:right-31 max-md:before:bottom-[58.5px] max-md:before:h-[58.5px] md:max-lg:before:right-32.5 md:max-lg:before:bottom-[59.7px] md:max-lg:before:h-[59.7px] after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.1625rem] after:bottom-[5.8rem] after:left-12 after:w-2 after:h-px after:bg-border max-md:after:right-[7.3125rem] max-md:after:bottom-[6.125rem] md:max-lg:after:right-[7.6875rem] md:max-lg:after:bottom-[6.275rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-52">
                                                    publication_date
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      date and time when the result was published
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    example:
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-48">
                                                      2019-11-15 12:57:46 +00:00
                                                    </code>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-search_results">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:bg-border max-md:before:right-34 md:max-lg:before:right-35.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[3.15rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[4.45rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[55.5px]">
                                                  <button className="w-4.5 h-4.5 border border-solid border-muted-foreground flex absolute left-[1.6875rem] z-1 rounded-[3px] justify-center items-center shrink-0 align-middle text-muted-foreground font-bold leading-3 text-center bg-background cursor-pointer [border-collapse:collapse] [border-spacing:2px] md:max-lg:text-[0.75rem] hover:border-clr-27 focus:border-clr-49" data-component="button" title="Collapse children">
                                                    −
                                                  </button>
                                                  <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                    <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                      search_results
                                                    </code>
                                                  </strong>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  array
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      array of search results
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    all web search outputs the model retrieved when looking up information, including duplicates and unused entries
                                                  </p>
                                                </td>
                                              </tr>
                                              {Tile4_data.map((d, i) => <Tile4 key={i} d={d} styles={Tile4_styles[i]} />)}
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-search_results-publication_date">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-15 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:top-0 before:right-[7.6rem] before:bottom-14 before:left-12 before:w-px before:h-14 before:bg-border max-md:before:right-31 max-md:before:bottom-[58.5px] max-md:before:h-[58.5px] md:max-lg:before:right-32.5 md:max-lg:before:bottom-[59.7px] md:max-lg:before:h-[59.7px] after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.1625rem] after:bottom-[5.8rem] after:left-12 after:w-2 after:h-px after:bg-border max-md:after:right-[7.3125rem] max-md:after:bottom-[6.125rem] md:max-lg:after:right-[7.6875rem] md:max-lg:after:bottom-[6.275rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    publication_date
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      date and time when the result was published
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    example:
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-48">
                                                      2019-11-15 12:57:46 +00:00
                                                    </code>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-ai_search_volume">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:h-[3.2875rem] before:bg-border max-md:before:right-34 max-md:before:h-[3.5375rem] md:max-lg:before:right-35.5 md:max-lg:before:h-[3.5625rem] after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[2.1rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[2.35rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[2.375rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    ai_search_volume
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      current AI search volume rate of a keyword
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"learn more about this metric "}
                                                    <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://dataforseo.com/help-center/how-the-ai-search-volume-metric-works-in-llm-mentions" rel="noopener noreferrer" target="_blank">
                                                      here
                                                    </a>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-monthly_searches">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:bg-border max-md:before:right-34 md:max-lg:before:right-35.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[3.15rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[3.4rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[55.5px] 2xl:after:bottom-[2.1rem]">
                                                  <button className="w-4.5 h-4.5 border border-solid border-muted-foreground flex absolute left-[1.6875rem] z-1 rounded-[3px] justify-center items-center shrink-0 align-middle text-muted-foreground font-bold leading-3 text-center bg-background cursor-pointer [border-collapse:collapse] [border-spacing:2px] md:max-lg:text-[0.75rem] hover:border-clr-27 focus:border-clr-49" data-component="button" title="Collapse children">
                                                    −
                                                  </button>
                                                  <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                    <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-25 focus:bg-clr-45">
                                                      monthly_searches
                                                    </code>
                                                  </strong>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  array
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      monthly AI search volume rates
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    array of objects with AI search volume rates in a certain month of a year
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-monthly_searches-year">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-15 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[7.6rem] before:left-12 before:w-px before:h-[2.3125rem] before:bg-border max-md:before:right-31 max-md:before:h-[2.5625rem] md:max-lg:before:right-32.5 md:max-lg:before:h-[2.6125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[7.1625rem] after:left-12 after:w-2 after:h-px after:bg-border max-md:after:right-[7.3125rem] max-md:after:bottom-5.5 md:max-lg:after:right-[7.6875rem] md:max-lg:after:bottom-[1.425rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-50">
                                                    year
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      year
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-monthly_searches-month">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-15 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[7.6rem] before:left-12 before:w-px before:h-[2.3125rem] before:bg-border max-md:before:right-31 max-md:before:h-[2.5625rem] md:max-lg:before:right-32.5 md:max-lg:before:h-[2.6125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[7.1625rem] after:left-12 after:w-2 after:h-px after:bg-border max-md:after:right-[7.3125rem] max-md:after:bottom-5.5 md:max-lg:after:right-[7.6875rem] md:max-lg:after:bottom-[1.425rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    month
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      month
                                                    </em>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-monthly_searches-search_volume">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-15 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:top-0 before:right-[7.6rem] before:bottom-[26.3px] before:left-12 before:w-px before:h-[26.3px] before:bg-border max-md:before:right-31 max-md:before:bottom-[28.3px] max-md:before:h-[28.3px] md:max-lg:before:right-32.5 md:max-lg:before:bottom-[28.5px] md:max-lg:before:h-[28.5px] after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.1625rem] after:bottom-[2.1rem] after:left-12 after:w-2 after:h-px after:bg-border max-md:after:right-[7.3125rem] max-md:after:bottom-[2.35rem] md:max-lg:after:right-[7.6875rem] md:max-lg:after:bottom-[2.375rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    search_volume
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  integer
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      AI search volume rate in a certain month of a year
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    {"learn more about this metric "}
                                                    <a className="inline text-primary cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] focus:border-clr-40 focus:text-clr-40 focus:outline-clr-40 focus:[text-decoration-color:var(--clr-40)]" data-component="link" href="https://dataforseo.com/help-center/how-the-ai-search-volume-metric-works-in-llm-mentions" rel="noopener noreferrer" target="_blank">
                                                      here
                                                    </a>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-first_response_at">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:bg-border max-md:before:right-34 md:max-lg:before:right-35.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[4.75rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[6.125rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[5.1875rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                    first_response_at
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      date and time when the response data was first recorded
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    example:
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-51">
                                                      2025-10-21 06:25:30 +00:00
                                                    </code>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-last_response_at">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:h-[5.9375rem] before:bg-border max-md:before:right-34 max-md:before:h-[6.2625rem] md:max-lg:before:right-35.5 md:max-lg:before:h-[6.375rem] after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[4.75rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[5.075rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[5.1875rem]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
                                                    last_response_at
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  string
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      date and time when the response data was last updated
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    example:
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    <code className="inline-flex mt-[0.3rem] py-0.5 px-1 rounded-[3px] items-center gap-x-[0.4rem] [word-break:break-word] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] max-lg:mt-1.5 max-lg:gap-x-2 hover:bg-clr-25 focus:bg-clr-48">
                                                      2025-10-21 06:25:30 +00:00
                                                    </code>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-brand_entities">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[8.35rem] before:left-9 before:w-px before:bg-border max-md:before:right-34 md:max-lg:before:right-35.5 after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[2.1rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[3.4rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[2.375rem]">
                                                  <button className="w-4.5 h-4.5 border border-solid border-muted-foreground flex absolute left-[1.6875rem] z-1 rounded-[3px] justify-center items-center shrink-0 align-middle text-muted-foreground font-bold leading-3 text-center bg-background cursor-pointer [border-collapse:collapse] [border-spacing:2px] md:max-lg:text-[0.75rem] hover:border-clr-27 focus:border-clr-49" data-component="button" title="Collapse children">
                                                    −
                                                  </button>
                                                  <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
                                                    <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-47">
                                                      brand_entities
                                                    </code>
                                                  </strong>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  array
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      array of brand entities
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    contains information on brands mentioned in the response
                                                  </p>
                                                </td>
                                              </tr>
                                              {Tile5_data.map((d, i) => <Tile5 key={i} d={d} styles={Tile5_styles[i]} />)}
                                              <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id="tasks-result-items-fan_out_queries">
                                                <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-12 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:top-0 before:right-[8.35rem] before:bottom-[34.7px] before:left-9 before:w-px before:h-[34.7px] before:bg-border max-md:before:right-34 max-md:before:bottom-[36.7px] max-md:before:h-[36.7px] md:max-lg:before:right-35.5 md:max-lg:before:bottom-[2.325rem] md:max-lg:before:h-[2.325rem] after:content-[''] after:block after:absolute after:top-4.5 after:right-[7.9125rem] after:bottom-[3.15rem] after:left-9 after:w-2 after:h-px after:bg-border max-md:after:right-[8.0625rem] max-md:after:bottom-[3.4rem] md:max-lg:after:right-[8.4375rem] md:max-lg:after:bottom-[55.5px]">
                                                  <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-52">
                                                    fan_out_queries
                                                  </code>
                                                </td>
                                                <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
                                                  array
                                                </td>
                                                <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
                                                  <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
                                                    <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
                                                      array of fan-out queries
                                                    </em>
                                                    <br className="inline [border-collapse:collapse] [border-spacing:2px]" />
                                                    contains related search queries derived from the main query to provide a more comprehensive response
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <br className="inline" />
                                  {" ‌‌"}
                                  <p className="block mt-3 leading-[1.25rem] max-lg:mt-[0.9375rem]" />
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
                    <div className="w-120 h-full border border-solid border-border flex absolute top-0 left-0 min-w-0 p-[1.2rem] rounded-[12.8px] flex-col flex-1 gap-y-[0.8rem] bg-border max-lg:invisible" id="example-code">
                      <div className="w-[422.9px] flex rounded-md items-center shrink-0 gap-2 overflow-auto bg-border max-lg:invisible">
                        {TextLink_data.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
                        {" "}
                        <button className="h-[2.1rem] border border-solid border-clr-1 hidden min-w-0 px-[1.2rem] rounded-md justify-center items-center text-color-003 text-[0.8125rem] leading-[0.9375rem] text-center cursor-pointer max-lg:h-10.5 max-lg:flex max-md:px-3 max-md:text-xs max-md:leading-[0.875rem] max-lg:rounded-[initial] md:max-lg:px-[0.9375rem]" type="button">
                          <Icon11 />
                          {" "}
                        </button>
                        {" "}
                      </div>
                      {" "}
                      <div className="h-[634.1px] flex relative flex-col overflow-auto max-lg:invisible 2xl:h-[880.5px]">
                        <div className="flex items-start gap-x-[0.8rem] max-lg:invisible">
                          <div className="border border-solid border-border block p-[0.55rem] rounded-md text-[0.6875rem] max-lg:invisible">
                            <p className="block pr-15 max-lg:invisible">
                              Instead of ‘login’ and ‘password’ use your credentials from https://app.dataforseo.com/api-access
                            </p>
                          </div>
                        </div>
                        <div className="h-[36.3125rem] flex py-[0.8rem] flex-col overflow-auto max-lg:invisible 2xl:h-[827.3px]" id="curl">
                          <div className="h-full block max-h-full pr-[0.4rem] pb-[0.8rem] overflow-auto max-lg:invisible">
                            <div className="h-full block max-lg:invisible">
                              <pre className="block [font-family:monospace,_monospace] whitespace-pre text-nowrap max-lg:invisible">
                                <code className="inline pb-[0.8rem] text-color-003 [font-family:Inter,_sans-serif] text-[0.6875rem] max-lg:invisible">
                                  <div className="block text-color-001 max-lg:invisible">
                                    <div className="block [font-family:Monaco,_Menlo,_'Ubuntu_Mono',_Consolas,_'Source_Code_Pro',_source-code-pro,_'Droid_Sans_Mono',_monospace] text-[0.75rem] whitespace-pre-wrap max-lg:invisible">
                                      <div className="block relative max-lg:invisible">
                                        <span className="hidden text-clr-5 italic">
                                          {"# Instead of 'login' and 'password' use your credentials from https://app.dataforseo.com/api-access "}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline text-color-002 max-lg:invisible">
                                          login
                                        </span>
                                        <span className="inline text-color-005 max-lg:invisible">
                                          =
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          login
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        {" \n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline text-color-002 max-lg:invisible">
                                          password
                                        </span>
                                        <span className="inline text-color-005 max-lg:invisible">
                                          =
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          password
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        {" \n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline text-color-002 max-lg:invisible">
                                          cred
                                        </span>
                                        <span className="inline text-color-005 max-lg:invisible">
                                          =
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        <span className="inline text-color-002 max-lg:invisible">
                                          $
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          (
                                        </span>
                                        <span className="inline text-clr-6 max-lg:invisible">
                                          printf
                                        </span>
                                        {" "}
                                        <span className="inline text-color-002 max-lg:invisible">
                                          $
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          {"{"}
                                        </span>
                                        <span className="inline text-color-002 max-lg:invisible">
                                          login
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          {"}"}
                                        </span>
                                        :
                                        <span className="inline text-color-002 max-lg:invisible">
                                          $
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          {"{"}
                                        </span>
                                        <span className="inline text-color-002 max-lg:invisible">
                                          password
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          {"}"}
                                        </span>
                                        {" "}
                                        <span className="inline text-color-005 max-lg:invisible">
                                          |
                                        </span>
                                        {" "}
                                        <span className="inline max-lg:invisible">
                                          base64
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          )
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        {" \n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline max-lg:invisible">
                                          curl
                                        </span>
                                        {" "}
                                        <span className="inline text-color-005 max-lg:invisible">
                                          --
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          location
                                        </span>
                                        {" "}
                                        <span className="inline text-color-005 max-lg:invisible">
                                          --
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          request
                                        </span>
                                        {" "}
                                        <span className="inline max-lg:invisible">
                                          POST
                                        </span>
                                        {" "}
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          https://api.dataforseo.com/v3/ai_optimization/llm_mentions/search/live
                                        </span>
                                        <span className="inline text-accent">
                                          "
                                        </span>
                                        {" \n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline text-color-005 max-lg:invisible">
                                          --
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          header
                                        </span>
                                        {" "}
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"Authorization: Basic "}
                                        </span>
                                        <span className="inline text-color-002 max-lg:invisible">
                                          $
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          {"{"}
                                        </span>
                                        <span className="inline text-color-002 max-lg:invisible">
                                          cred
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          {"}"}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        {"  \n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline text-color-005 max-lg:invisible">
                                          --
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          header
                                        </span>
                                        {" "}
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          Content-Type: application/json
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          "
                                        </span>
                                        {" \n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline text-color-005 max-lg:invisible">
                                          --
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          data
                                        </span>
                                        <span className="inline text-color-005 max-lg:invisible">
                                          -
                                        </span>
                                        <span className="inline max-lg:invisible">
                                          raw
                                        </span>
                                        {" "}
                                        <span className="inline text-accent max-lg:invisible">
                                          '
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          [
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    {"}
                                        </span>
                                        {"\n"}
                                      </div>
                                      {Tile6_data.map((d, i) => <Tile6 key={i} d={d} />)}
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    {"}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    \"domain\": \"dataforseo.com\","}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    \"search_filter\": \"exclude\""}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    },"}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    {"}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    \"keyword\": \"bmw\","}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    \"search_scope\": ["}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    \"answer\""}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    ]"}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    }"}
                                        </span>
                                        {"\n"}
                                      </div>
                                      {Tile6_data2.map((d, i) => <Tile6 key={i} d={d} />)}
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    ["}
                                        </span>
                                        {"\n"}
                                      </div>
                                      {Tile7_data.map((d, i) => <Tile7 key={i} d={d} />)}
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    ]"}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    ],"}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    \"order_by\": ["}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline [background-position:100%_50%] bg-repeat-y max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                          {"    "}
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    \"ai_search_volume,desc\""}
                                        </span>
                                        {"\n"}
                                      </div>
                                      {Tile6_data3.map((d, i) => <Tile6 key={i} d={d} />)}
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline text-accent max-lg:invisible">
                                          {"    }"}
                                        </span>
                                        {"\n"}
                                      </div>
                                      <div className="block relative max-lg:invisible">
                                        <span className="inline text-accent max-lg:invisible">
                                          ]
                                        </span>
                                        <span className="inline text-accent max-lg:invisible">
                                          '
                                        </span>
                                        {"\n"}
                                      </div>
                                    </div>
                                  </div>
                                </code>
                              </pre>
                              <button className="w-12.5 h-[1.3625rem] block absolute top-[0.55rem] right-[0.55rem] z-10 opacity-70 py-1 px-2.5 rounded-sm text-background text-xs leading-[0.875rem] text-center bg-clr-7 cursor-pointer max-lg:invisible" data-component="button">
                                Copy
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div className="h-full border border-solid border-border flex relative p-[1.2rem] rounded-[12.8px] flex-col flex-1 gap-y-[0.8rem] bg-border transform-[matrix(1,0,0,1,0,704)] max-lg:invisible 2xl:transform-[matrix(1,0,0,1,0,950.391)]">
                      <div className="h-full flex relative flex-col gap-y-[0.8rem] overflow-auto max-lg:invisible">
                        <div className="flex items-start gap-x-[0.8rem] max-lg:invisible">
                          <div className="w-full border border-solid border-border block p-[0.55rem] rounded-md text-[0.6875rem] max-lg:invisible">
                            <p className="block pr-15 max-lg:invisible">
                              The above command returns JSON structured like this:
                            </p>
                          </div>
                        </div>
                        <div className="block max-h-50 pr-[0.4rem] pb-[0.8rem] overflow-auto max-lg:invisible">
                          <div className="block max-lg:invisible">
                            <div className="block relative rounded-md overflow-hidden text-color-001 [font-family:Monaco,_Menlo,_'Ubuntu_Mono',_Consolas,_'Source_Code_Pro',_source-code-pro,_monospace] text-xs leading-3.5 text-left bg-clr-8 max-lg:invisible" id="ace-json-5">
                              <div className="w-12 h-0 block absolute z-4 overflow-hidden text-muted bg-clr-9 cursor-default max-lg:invisible" aria-hidden="true">
                                <div className="w-12 h-[1e+06px] block relative z-1 overflow-hidden text-right whitespace-pre text-nowrap transform-[matrix(1,0,0,1,0,8)] max-lg:invisible">
                                  <div className="w-12 h-3.5 block absolute left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="false">
                                    1
                                    <span className="h-3.5 border border-solid border-clr-1 inline-block -mr-3 ml-px rounded-[3px] align-top [background-position:50%_50%] bg-no-repeat cursor-pointer max-lg:invisible hover:bg-clr-31 hover:border-clr-32 hover:shadow-[var(--clr-33)_0px_1px_1px_0px]" style={{ backgroundImage: "url(data:image/png" }} data-component="button" aria-expanded="true" aria-label="Toggle code folding, rows 1 through 917" role="button" title="Fold code" />
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-3.5 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    2
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-7 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    3
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-10.5 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    4
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-14 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    5
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-17.5 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    6
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-21 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    7
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-24.5 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    8
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-28 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="false">
                                    9
                                    <span className="h-3.5 border border-solid border-clr-1 inline-block -mr-3 ml-px rounded-[3px] align-top [background-position:50%_50%] bg-no-repeat cursor-pointer max-lg:invisible hover:bg-clr-31 hover:border-clr-32 hover:shadow-[var(--clr-33)_0px_1px_1px_0px]" style={{ backgroundImage: "url(data:image/png" }} data-component="button" aria-expanded="true" aria-label="Toggle code folding, rows 9 through 916" role="button" title="Fold code" />
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-31.5 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="false">
                                    10
                                    <span className="h-3.5 border border-solid border-clr-1 inline-block -mr-3 ml-px rounded-[3px] align-top [background-position:50%_50%] bg-no-repeat cursor-pointer max-lg:invisible hover:bg-clr-31 hover:border-clr-32 hover:shadow-[var(--clr-33)_0px_1px_1px_0px]" style={{ backgroundImage: "url(data:image/png" }} data-component="button" aria-expanded="true" aria-label="Toggle code folding, rows 10 through 915" role="button" title="Fold code" />
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-35 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    11
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-38.5 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    12
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-42 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    13
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-45.5 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    14
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-49 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    15
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-52.5 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    16
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-56 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="false">
                                    17
                                    <span className="h-3.5 border border-solid border-clr-1 inline-block -mr-3 ml-px rounded-[3px] align-top [background-position:50%_50%] bg-no-repeat cursor-pointer max-lg:invisible hover:bg-clr-31 hover:border-clr-32 hover:shadow-[var(--clr-33)_0px_1px_1px_0px]" style={{ backgroundImage: "url(data:image/png" }} data-component="button" aria-expanded="true" aria-label="Toggle code folding, rows 17 through 23" role="button" title="Fold code" />
                                  </div>
                                  <div className="w-12 h-3.5 block absolute top-59.5 left-0 pr-[0.8125rem] pl-[1.1875rem] bg-no-repeat max-lg:invisible" aria-hidden="true">
                                    18
                                  </div>
                                </div>
                              </div>
                              <div className="w-[24.075rem] h-0 block absolute left-12 overflow-hidden bg-clr-8 cursor-text max-lg:invisible">
                                <div className="w-18059 h-65.5 block absolute min-w-full transform-[matrix(1,0,0,1,0,8)] max-lg:invisible">
                                  <div className="w-18059 h-full block absolute top-0 z-1 overflow-hidden whitespace-pre text-nowrap pointer-events-none max-lg:invisible" />
                                  <div className="w-18059 h-full block absolute top-0 z-1 overflow-hidden whitespace-pre text-nowrap pointer-events-none max-lg:invisible">
                                    <div className="w-[0.45rem] h-3.5 border border-solid border-color-008 block absolute left-1 z-6 -mt-px -ml-px rounded-[3px] pointer-events-none max-lg:invisible" />
                                  </div>
                                  <div className="w-[1e+06px] h-[1e+06px] block absolute z-1 mx-1 overflow-hidden whitespace-pre text-nowrap pointer-events-none max-lg:invisible">
                                    <div className="w-[1e+06px] h-3.5 block absolute left-0 pointer-events-none max-lg:invisible">
                                      <span className="inline pointer-events-none max-lg:invisible">
                                        {"{"}
                                      </span>
                                    </div>
                                    {Tile8_data.map((d, i) => <Tile8 key={i} d={d} styles={Tile8_styles[i]} />)}
                                    <div className="w-[1e+06px] h-3.5 block absolute top-28 left-0 pointer-events-none max-lg:invisible">
                                      {"  "}
                                      <span className="inline text-color-002 pointer-events-none max-lg:invisible">
                                        "tasks"
                                      </span>
                                      {": "}
                                      <span className="inline pointer-events-none max-lg:invisible">
                                        [
                                      </span>
                                    </div>
                                    <div className="w-[1e+06px] h-3.5 block absolute top-31.5 left-0 pointer-events-none max-lg:invisible">
                                      {"    "}
                                      <span className="inline pointer-events-none max-lg:invisible">
                                        {"{"}
                                      </span>
                                    </div>
                                    {Tile9_data.map((d, i) => <Tile9 key={i} d={d} styles={Tile9_styles[i]} />)}
                                    <div className="w-[1e+06px] h-3.5 block absolute top-56 left-0 pointer-events-none max-lg:invisible">
                                      <span className="inline [background-position:100%_50%] bg-repeat-y pointer-events-none max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                        {"    "}
                                      </span>
                                      {"  "}
                                      <span className="inline text-color-002 pointer-events-none max-lg:invisible">
                                        "path"
                                      </span>
                                      {": "}
                                      <span className="inline pointer-events-none max-lg:invisible">
                                        [
                                      </span>
                                    </div>
                                    <div className="w-[1e+06px] h-3.5 block absolute top-59.5 left-0 pointer-events-none max-lg:invisible">
                                      <span className="inline [background-position:100%_50%] bg-repeat-y pointer-events-none max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
                                        {"    "}
                                      </span>
                                      {"    "}
                                      <span className="inline text-accent pointer-events-none max-lg:invisible">
                                        "v3"
                                      </span>
                                      <span className="inline pointer-events-none max-lg:invisible">
                                        ,
                                      </span>
                                    </div>
                                  </div>
                                  <div className="w-18059 h-full block absolute top-0 z-1 overflow-hidden whitespace-pre text-nowrap pointer-events-none max-lg:invisible" />
                                  <div className="w-18059 h-full block absolute top-0 z-4 overflow-hidden whitespace-pre text-nowrap pointer-events-none max-lg:invisible">
                                    <div className="w-[0.4375rem] h-3.5 border-l-2 border-solid border-l-clr-10 block absolute z-4 opacity-20 text-clr-10 transform-[matrix(1,0,0,1,4,0)] pointer-events-none max-lg:invisible" />
                                  </div>
                                </div>
                              </div>
                              <div className="w-5 h-58.5 block absolute top-0 right-0 z-6 overflow-x-hidden overflow-y-scroll max-lg:invisible">
                                <div className="w-5 h-3213.5 block absolute cursor-text max-lg:invisible" />
                              </div>
                              <div className="w-[24.0625rem] h-5 block absolute bottom-0 z-6 overflow-x-scroll overflow-y-hidden max-lg:invisible">
                                <div className="w-18059 h-full block absolute top-0 cursor-text max-lg:invisible" />
                              </div>
                            </div>
                            <button className="w-12.5 h-[1.3625rem] block absolute top-[0.55rem] right-[0.55rem] z-10 opacity-70 py-1 px-2.5 rounded-sm text-background text-xs leading-[0.875rem] text-center bg-clr-7 cursor-pointer max-lg:invisible" data-component="button">
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className="w-[1.8rem] h-[1.8rem] flex absolute top-18 right-10 z-10 opacity-70 min-w-0 p-[0.4rem] rounded-[4.8px] justify-center items-center text-color-007 leading-[1rem] text-center bg-clr-11 cursor-pointer max-lg:invisible hover:bg-foreground hover:text-clr-34 hover:opacity-[0.998828] hover:outline-clr-34 hover:[text-decoration-color:var(--clr-34)] focus:bg-clr-58 focus:opacity-[0.704979]" data-component="button" title="Toggle fullscreen (Esc to exit)">
                        <Icon12 />
                        {" "}
                      </button>
                      <button className="w-[1.8rem] h-[1.8rem] flex absolute top-18 right-18 z-10 opacity-70 min-w-0 p-[0.4rem] rounded-[4.8px] justify-center items-center text-color-007 leading-[1rem] text-center bg-clr-11 cursor-pointer max-lg:invisible hover:bg-clr-35 hover:text-clr-36 hover:opacity-[0.998825] hover:outline-clr-36 hover:[text-decoration-color:var(--clr-36)] focus:opacity-[0.704958] focus:outline-color-007 focus:[text-decoration-color:var(--color-007)]" data-component="button" title="Search in JSON (Ctrl+F / Cmd+F)">
                        <Icon13 />
                        {" "}
                      </button>
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
      </main>
      {" "}
      <div className="h-[3.6rem] flex fixed right-[1.8rem] bottom-[30.7px] left-[74.6rem] z-99 min-w-0 flex-col gap-y-[1.2rem] max-md:h-10.5 max-md:right-[0.9375rem] max-md:bottom-[0.9375rem] max-md:left-79.5 max-md:gap-y-[0.3125rem] md:max-lg:h-[3.0875rem] md:max-lg:right-5 md:max-lg:bottom-[1.4125rem] md:max-lg:left-[698.5px] md:max-lg:gap-y-[9.7px] 2xl:bottom-11.5 2xl:left-[114.6rem]">
        {" "}
      </div>
      {" "}
      <div className="w-15 h-15 block fixed right-7.5 bottom-[7.1875rem] z-999999 min-w-0 [font-family:-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif]" id="ai-chat-widget">
        <button className="w-15 h-15 flex py-px px-1.5 rounded-[50%] justify-center items-center text-clr-12 leading-[1rem] text-center bg-clr-13 shadow-[var(--clr-14)_0px_3.2px_12.8px_0px] cursor-pointer md:max-lg:leading-[1.0625rem]" data-component="button" id="ai-chat-launcher">
          <Icon14 />
        </button>
      </div>
      {" "}
    </>
  );
}
