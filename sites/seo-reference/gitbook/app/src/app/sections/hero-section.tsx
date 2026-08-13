import Icon14 from "../svgs/svg-icon14";
import ListRow from "../components/list-row";
import ListRow2 from "../components/list-row2";
import Icon15 from "../svgs/svg-icon15";
import Icon16 from "../svgs/svg-icon16";
import ListRow3 from "../components/list-row3";
import Logo, { type LogoData } from "../components/logo";
import Logo2, { type Logo2Data } from "../components/logo2";
import Icon17 from "../svgs/svg-icon17";
import Icon18 from "../svgs/svg-icon18";
import Icon19 from "../svgs/svg-icon19";
import Icon20 from "../svgs/svg-icon20";
import Icon21 from "../svgs/svg-icon21";
import Icon22 from "../svgs/svg-icon22";
import Icon23 from "../svgs/svg-icon23";
import Tile from "../components/tile";
import Icon24 from "../svgs/svg-icon24";
import Icon25 from "../svgs/svg-icon25";
import Icon26 from "../svgs/svg-icon26";
import ListRow4, { type ListRow4Data } from "../components/list-row4";
import Icon27 from "../svgs/svg-icon27";
import ListRow5 from "../components/list-row5";
import Icon28 from "../svgs/svg-icon28";
import Icon29 from "../svgs/svg-icon29";
import Icon30 from "../svgs/svg-icon30";
import Icon31 from "../svgs/svg-icon31";
import Icon32 from "../svgs/svg-icon32";
import ListRow6 from "../components/list-row6";
import Logo3, { type Logo3Data } from "../components/logo3";
import { ListRow_styles, ListRow_styles2, ListRow_styles3, ListRow_styles4, ListRow_styles5, ListRow_styles6, ListRow3_styles, Logo_styles, Logo2_styles, ListRow4_styles, ListRow5_styles, ListRow6_styles, Logo3_styles } from "../_styles";
import { listRowData as listRowDataContent, listRowData2 as listRowData2Content, listRowData3 as listRowData3Content, listRowData4 as listRowData4Content, listRowData5 as listRowData5Content, listRowData6 as listRowData6Content, listRow2Data as listRow2DataContent, listRow2Data2 as listRow2Data2Content, listRow3Data as listRow3DataContent, tileData as tileDataContent, tileData2 as tileData2Content, listRow5Data as listRow5DataContent, listRow6Data as listRow6DataContent } from "../content";
const Logo_data: LogoData[] = [
    { ariaLabel: "Yes, it was!", icon: <>
        <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity="0.2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 11.6263C4.87421 11.4428 5.19025 11.4614 5.3737 11.6678C7.30371 13.8391 10.6963 13.8391 12.6263 11.6678C12.8098 11.4614 13.1258 11.4428 13.3322 11.6263C13.5386 11.8098 13.5572 12.1258 13.3737 12.3322C11.0459 14.951 6.9541 14.951 4.6263 12.3322C4.44284 12.1258 4.46143 11.8098 4.66782 11.6263ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z" fill="currentColor" />
        </> },
    { ariaLabel: "Not sure", icon: <>
        <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity="0.2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H13C13.2761 11.5 13.5 11.7239 13.5 12C13.5 12.2761 13.2761 12.5 13 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z" fill="currentColor" />
        </> },
    { ariaLabel: "No", icon: <>
        <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity="0.2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 13.3737C4.87421 13.5572 5.19025 13.5386 5.3737 13.3322C7.30371 11.1609 10.6963 11.1609 12.6263 13.3322C12.8098 13.5386 13.1258 13.5572 13.3322 13.3737C13.5386 13.1902 13.5572 12.8742 13.3737 12.6678C11.0459 10.049 6.9541 10.049 4.6263 12.6678C4.44284 12.8742 4.46143 13.1902 4.66782 13.3737ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z" fill="currentColor" />
        </> }
];
const Logo2_data: Logo2Data[] = [
    { ariachecked: "true", ariaLabel: "Switch to light theme", ariapressed: "true", viewBox: "0 0 576 512", icon: <>
        <path fill="currentColor" d="M288 432c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16zM140.9 380.4c6.2-6.2 16.4-6.2 22.7 0s6.2 16.4 0 22.7L107 459.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l56.6-56.6zm271.5 0c6.2-6.2 16.4-6.2 22.7 0L491.7 437c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-56.6-56.6c-6.2-6.2-6.2-16.4 0-22.7zM288 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zm0-224a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM96 240c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0zm464 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0zM84.3 52.3c6.2-6.2 16.4-6.2 22.6 0l56.6 56.6c6.2 6.2 6.2 16.4 0 22.7s-16.4 6.2-22.7 0L84.3 75c-6.2-6.2-6.2-16.4 0-22.6zm384.7 0c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-56.6 56.6c-6.2 6.2-16.4 6.2-22.7 0s-6.2-16.4 0-22.7L469 52.3zM288-32c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16z" />
        </> },
    { ariachecked: "false", ariaLabel: "Switch to system theme", ariapressed: "false", viewBox: "0 0 512 512", icon: <>
        <path fill="currentColor" d="M448 64L64 64C46.3 64 32 78.3 32 96l0 192 448 0 0-192c0-17.7-14.3-32-32-32zm32 256l-448 0 0 32c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-32zM64 32l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-117.1 0 10.7 64 58.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-288 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l58.4 0 10.7-64-117.1 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM213.6 416l-10.7 64 106.2 0-10.7-64-84.9 0z" />
        </> },
    { ariachecked: "false", ariaLabel: "Switch to dark theme", ariapressed: "false", viewBox: "0 0 512 512", icon: <>
        <path fill="currentColor" d="M256 32c9.5 0 18.9 .6 28 1.7-60.1 38.3-100 105.6-100 182.3 0 117.2 96.4 212.8 210.7 215.9-38.2 30.1-86.3 48.1-138.7 48.1-123.7 0-224-100.3-224-224S132.3 32 256 32zm0-32C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-105.4 8.4-198.8-77.3-198.8-183.4 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z" />
        </> }
];
const ListRow4_data: ListRow4Data[] = [
    { description: "Write atomic pages with one clear intent", description2: " – That means you should keep each page focused on a single concept, task or API area so it chunks cleanly during LLM ingestion." },
    { description: "Use descriptive H1, H2 and H3 headings", description2: " – Predictable anchors improve in‑answer deep links, so the AI tool can point users straight to the relevant part of your docs." },
    { description: "Use plain language, not marketing copy", description2: " – Much like technical users, LLMs look for semantics. So avoid figurative language and focus on writing precise, direct docs." },
    { description: "Add alt text and clear captions", description2: " – Multimodal models parse these fields to add extra context or to understand an image’s content. This is also best practice for accessibility, so you’re probably doing this already." },
    { description: "Place examples close to concepts", description2: " – Include short code blocks and request/response pairs near the explanation to make it easier for LLMs to understand. Again, this is just good docs practice so this is an easy win." },
    { description: "Define terms once and link consistently", description2: " – Consistently linking to relevant pages helps the AI understand common terms and their relationship to the current content." }
];
const Logo3_data: Logo3Data[] = [
    { ariaLabel: "Yes, it was!", icon: <>
        <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity="0.2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 11.6263C4.87421 11.4428 5.19025 11.4614 5.3737 11.6678C7.30371 13.8391 10.6963 13.8391 12.6263 11.6678C12.8098 11.4614 13.1258 11.4428 13.3322 11.6263C13.5386 11.8098 13.5572 12.1258 13.3737 12.3322C11.0459 14.951 6.9541 14.951 4.6263 12.3322C4.44284 12.1258 4.46143 11.8098 4.66782 11.6263ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z" fill="currentColor" />
        </> },
    { ariaLabel: "Not sure", icon: <>
        <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity="0.2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H13C13.2761 11.5 13.5 11.7239 13.5 12C13.5 12.2761 13.2761 12.5 13 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z" fill="currentColor" />
        </> },
    { ariaLabel: "No", icon: <>
        <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity="0.2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 13.3737C4.87421 13.5572 5.19025 13.5386 5.3737 13.3322C7.30371 11.1609 10.6963 11.1609 12.6263 13.3322C12.8098 13.5386 13.1258 13.5572 13.3322 13.3737C13.5386 13.1902 13.5572 12.8742 13.3737 12.6678C11.0459 10.049 6.9541 10.049 4.6263 12.6678C4.44284 12.8742 4.46143 13.1902 4.66782 13.3737ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z" fill="currentColor" />
        </> }
];
/** Hero section — the page's lead block. */
export default function HeroSection({ listRowData = listRowDataContent, listRowData2 = listRowData2Content, listRowData3 = listRowData3Content, listRowData4 = listRowData4Content, listRowData5 = listRowData5Content, listRowData6 = listRowData6Content, listRow2Data = listRow2DataContent, listRow2Data2 = listRow2Data2Content, listRow3Data = listRow3DataContent, logoData = Logo_data, logo2Data = Logo2_data, tileData = tileDataContent, tileData2 = tileData2Content, listRow4Data = ListRow4_data, listRow5Data = listRow5DataContent, listRow6Data = listRow6DataContent, logo3Data = Logo3_data } = {}) {
  return (
    <div className="block 2xl:hidden">
      <div className="min-h-[calc(100vh_-_109px)] flex max-w-360 px-8 justify-center mx-auto max-md:px-4 max-lg:flex-col max-lg:[justify-content:initial] 2xl:hidden">
        <aside className="h-[38.9375rem] flex sticky top-[11.0625rem] bottom-0 left-0 z-0 mr-12 pt-6 pb-4 flex-col shrink-0 gap-4 text-sm leading-5 max-w-[calc(100%-4.5rem)] w-72 max-lg:hidden max-md:w-4/5 md:max-lg:w-1/2 2xl:hidden" aria-expanded="false" aria-modal="false">
          <div className="h-[36.4375rem] flex relative -ml-5 flex-col grow max-lg:hidden 2xl:hidden">
            <div className="h-131 flex relative grow max-lg:hidden 2xl:hidden">
              <div className="h-131 flex p-2 flex-col flex-1 overflow-x-hidden overflow-y-auto max-lg:hidden 2xl:hidden" style={{ maskImage: "linear-gradient(var(--background), var(--background)), linear-gradient(var(--background), var(--background)), linear-gradient(var(--clr-0) calc(100% - 16px), var(--clr-1) 100%), linear-gradient(var(--background), var(--background)), linear-gradient(var(--background), var(--background)), linear-gradient(var(--background), var(--background))" }}>
                <ul className="border-l border-solid border-l-border flex flex-col grow gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <a className="w-[17.5625rem] flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-color-001 text-balance cursor-pointer max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-8 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-7 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" href="/docs/guides">
                      <span className="block max-lg:hidden 2xl:hidden">
                        GitBook guides
                      </span>
                    </a>
                  </li>
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <div className="block max-lg:hidden 2xl:hidden" aria-hidden="true" />
                    <div className="w-[17.5625rem] h-13.5 block sticky -top-4 z-1 mt-1 pt-2.5 bg-background max-lg:hidden 2xl:hidden" data-ditto-id="style-div-2">
                      <button className="h-11 min-h-8 flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase text-balance cursor-pointer w-full max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-11 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-10 group" data-component="button" aria-expanded="true" type="button">
                        <span className="w-[14.9375rem] block min-w-0 flex-1 max-lg:hidden 2xl:hidden">
                          {"Editing & publishing documentation"}
                        </span>
                        <span className="h-3 flex opacity-0 shrink-0 pointer-events-none max-lg:hidden 2xl:hidden group-hover:opacity-100">
                          <Icon14 />
                        </span>
                      </button>
                    </div>
                    <div className="grid mt-px grid-cols-[281px] max-lg:hidden 2xl:hidden">
                      <div className="block overflow-hidden max-lg:hidden 2xl:hidden">
                        <ul className="flex flex-col gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                          {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <div className="block max-lg:hidden 2xl:hidden" aria-hidden="true" />
                    <div className="w-[17.5625rem] h-10.5 block sticky -top-4 z-1 mt-1 pt-2.5 bg-background max-lg:hidden 2xl:hidden" data-ditto-id="style-div-3">
                      <button className="h-8 min-h-8 flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase text-balance cursor-pointer w-full max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-8 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-10 group" data-component="button" aria-expanded="true" type="button">
                        <span className="w-[14.9375rem] block min-w-0 flex-1 max-lg:hidden 2xl:hidden">
                          Customizing your site
                        </span>
                        <span className="h-3 flex opacity-0 shrink-0 pointer-events-none max-lg:hidden 2xl:hidden group-hover:opacity-100">
                          <Icon14 />
                        </span>
                      </button>
                    </div>
                    <div className="grid mt-px grid-cols-[281px] max-lg:hidden 2xl:hidden">
                      <div className="block overflow-hidden max-lg:hidden 2xl:hidden">
                        <ul className="flex flex-col gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                          {listRowData2.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles2[i]} />)}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <div className="block max-lg:hidden 2xl:hidden" aria-hidden="true" />
                    <div className="w-[17.5625rem] h-13.5 block sticky -top-4 z-1 mt-1 pt-2.5 bg-background max-lg:hidden 2xl:hidden" data-ditto-id="style-div-4">
                      <button className="h-11 min-h-8 flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase text-balance cursor-pointer w-full max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-11 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-10 group" data-component="button" aria-expanded="true" type="button">
                        <span className="w-[14.9375rem] block min-w-0 flex-1 max-lg:hidden 2xl:hidden">
                          {"Content organization & localization"}
                        </span>
                        <span className="h-3 flex opacity-0 shrink-0 pointer-events-none max-lg:hidden 2xl:hidden group-hover:opacity-100">
                          <Icon14 />
                        </span>
                      </button>
                    </div>
                    <div className="grid mt-px grid-cols-[281px] max-lg:hidden 2xl:hidden">
                      <div className="block overflow-hidden max-lg:hidden 2xl:hidden">
                        <ul className="flex flex-col gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                          {listRowData3.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles3[i]} />)}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <div className="block max-lg:hidden 2xl:hidden" aria-hidden="true" />
                    <div className="w-[17.5625rem] h-10.5 block sticky -top-4 z-1 mt-1 pt-2.5 bg-background max-lg:hidden 2xl:hidden" data-ditto-id="style-div-5">
                      <button className="h-8 min-h-8 flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase text-balance cursor-pointer w-full max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-8 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-13 group" data-component="button" aria-expanded="true" type="button">
                        <span className="w-[14.9375rem] block min-w-0 flex-1 max-lg:hidden 2xl:hidden">
                          {"SEO & LLM optimization"}
                        </span>
                        <span className="h-3 flex opacity-0 shrink-0 pointer-events-none max-lg:hidden 2xl:hidden group-hover:opacity-100">
                          <Icon14 />
                        </span>
                      </button>
                    </div>
                    <div className="grid mt-px grid-cols-[281px] max-lg:hidden 2xl:hidden">
                      <div className="block overflow-hidden max-lg:hidden 2xl:hidden">
                        <ul className="flex flex-col gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                          <li className="flex flex-col max-lg:hidden 2xl:hidden">
                            <a className="w-[17.5625rem] flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-primary font-semibold text-balance cursor-pointer max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-70 before:-left-px before:w-0.5 before:h-8 before:bg-primary max-lg:before:hidden 2xl:before:hidden hover:bg-clr-14 hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)]" data-component="link" aria-current="page" href="/docs/guides/seo-and-llm-optimization/geo-guide">
                              <span className="block max-lg:hidden 2xl:hidden">
                                How to optimize docs for AI
                              </span>
                            </a>
                          </li>
                          <li className="flex flex-col max-lg:hidden 2xl:hidden">
                            <a className="w-[17.5625rem] flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-color-001 text-balance cursor-pointer max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-8 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-7 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" href="/docs/guides/seo-and-llm-optimization/how-to-use-seo-techniques-to-improve-your-documentation">
                              <span className="block max-lg:hidden 2xl:hidden">
                                How to improve docs SEO
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <div className="block max-lg:hidden 2xl:hidden" aria-hidden="true" />
                    <div className="w-[17.5625rem] h-10.5 block sticky -top-4 z-1 mt-1 pt-2.5 bg-background max-lg:hidden 2xl:hidden" data-ditto-id="style-div-6">
                      <button className="h-8 min-h-8 flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase text-balance cursor-pointer w-full max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-8 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-15 group" data-component="button" aria-expanded="true" type="button">
                        <span className="w-[14.9375rem] block min-w-0 flex-1 max-lg:hidden 2xl:hidden">
                          Docs workflow optimization
                        </span>
                        <span className="h-3 flex opacity-0 shrink-0 pointer-events-none max-lg:hidden 2xl:hidden group-hover:opacity-100">
                          <Icon14 />
                        </span>
                      </button>
                    </div>
                    <div className="grid mt-px grid-cols-[281px] max-lg:hidden 2xl:hidden">
                      <div className="block overflow-hidden max-lg:hidden 2xl:hidden">
                        <ul className="flex flex-col gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                          {listRowData4.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles4[i]} />)}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <div className="block max-lg:hidden 2xl:hidden" aria-hidden="true" />
                    <div className="w-[17.5625rem] h-10.5 block sticky -top-4 z-1 mt-1 pt-2.5 bg-background max-lg:hidden 2xl:hidden" data-ditto-id="style-div-7">
                      <button className="h-8 min-h-8 flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase text-balance cursor-pointer w-full max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-8 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-10 group" data-component="button" aria-expanded="true" type="button">
                        <span className="w-[14.9375rem] block min-w-0 flex-1 max-lg:hidden 2xl:hidden">
                          API documentation
                        </span>
                        <span className="h-3 flex opacity-0 shrink-0 pointer-events-none max-lg:hidden 2xl:hidden group-hover:opacity-100">
                          <Icon14 />
                        </span>
                      </button>
                    </div>
                    <div className="grid mt-px grid-cols-[281px] max-lg:hidden 2xl:hidden">
                      <div className="block overflow-hidden max-lg:hidden 2xl:hidden">
                        <ul className="flex flex-col gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                          {listRowData5.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles5[i]} />)}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <div className="block max-lg:hidden 2xl:hidden" aria-hidden="true" />
                    <div className="w-[17.5625rem] h-10.5 block sticky -top-4 z-1 mt-1 pt-2.5 bg-background max-lg:hidden 2xl:hidden" data-ditto-id="style-div-8">
                      <button className="h-8 min-h-8 flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase text-balance cursor-pointer w-full max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-8 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-15 group" data-component="button" aria-expanded="true" type="button">
                        <span className="w-[14.9375rem] block min-w-0 flex-1 max-lg:hidden 2xl:hidden">
                          Docs analytics
                        </span>
                        <span className="h-3 flex opacity-0 shrink-0 pointer-events-none max-lg:hidden 2xl:hidden group-hover:opacity-100">
                          <Icon14 />
                        </span>
                      </button>
                    </div>
                    <div className="grid mt-px grid-cols-[281px] max-lg:hidden 2xl:hidden">
                      <div className="block overflow-hidden max-lg:hidden 2xl:hidden">
                        <ul className="flex flex-col gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                          {listRowData6.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles6[i]} />)}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <div className="block max-lg:hidden 2xl:hidden" aria-hidden="true" />
                    <div className="w-[17.5625rem] h-13.5 block sticky -top-4 z-1 mt-1 pt-2.5 bg-background max-lg:hidden 2xl:hidden" data-ditto-id="style-div-9">
                      <button className="h-11 min-h-8 flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase text-balance cursor-pointer w-full max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-11 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-15 group" data-component="button" aria-expanded="true" type="button">
                        <span className="w-[14.9375rem] block min-w-0 flex-1 max-lg:hidden 2xl:hidden">
                          {"Docs personalization & authentication"}
                        </span>
                        <span className="h-3 flex opacity-0 shrink-0 pointer-events-none max-lg:hidden 2xl:hidden group-hover:opacity-100">
                          <Icon14 />
                        </span>
                      </button>
                    </div>
                    <div className="grid mt-px grid-cols-[281px] max-lg:hidden 2xl:hidden">
                      <div className="block overflow-hidden max-lg:hidden 2xl:hidden">
                        <ul className="flex flex-col gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                          {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col max-lg:hidden 2xl:hidden">
                    <div className="block max-lg:hidden 2xl:hidden" aria-hidden="true" />
                    <div className="w-[17.5625rem] h-10.5 block sticky -top-4 z-1 mt-1 pt-2.5 bg-background max-lg:hidden 2xl:hidden" data-ditto-id="style-div-10">
                      <button className="h-8 min-h-8 flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase text-balance cursor-pointer w-full max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-8 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-15 group" data-component="button" aria-expanded="true" type="button">
                        <span className="w-[14.9375rem] block min-w-0 flex-1 max-lg:hidden 2xl:hidden">
                          Docs best practices
                        </span>
                        <span className="h-3 flex opacity-0 shrink-0 pointer-events-none max-lg:hidden 2xl:hidden group-hover:opacity-100">
                          <Icon14 />
                        </span>
                      </button>
                    </div>
                    <div className="grid mt-px grid-cols-[281px] max-lg:hidden 2xl:hidden">
                      <div className="block overflow-hidden max-lg:hidden 2xl:hidden">
                        <ul className="flex flex-col gap-y-0.5 [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                          {listRow2Data2.map((d, i) => <ListRow2 key={i} d={d} />)}
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <a className="border border-solid border-border flex mb-2 mx-2 py-3.5 px-4 rounded-3xl items-center shrink-0 gap-3 overflow-hidden align-middle text-muted-foreground font-semibold whitespace-nowrap text-nowrap bg-background cursor-pointer max-w-full max-lg:hidden 2xl:hidden hover:bg-clr-7 hover:border-clr-8" data-component="link" aria-label="Powered by GitBook" href={"https://www.gitbook.com/?utm_source=content&utm_medium=trademark&utm_campaign=LBGJKQic7BQYBXmVSjy0&utm_content=site_p4Xo4"} rel="noopener noreferrer" target="_blank">
              <Icon15 />
              <span className="block whitespace-normal max-lg:hidden 2xl:hidden">
                Powered by GitBook
              </span>
            </a>
          </div>
        </aside>
        <div className="contents min-w-0 2xl:hidden">
          <div className="contents 2xl:hidden">
            <aside className="h-[38.9375rem] flex sticky top-[11.0625rem] right-0 bottom-0 z-10 max-h-[38.9375rem] ml-4 pt-8 pb-4 pl-8 order-[9999] text-muted-foreground [word-break:break-word] [overflow-wrap:anywhere] max-w-[calc(100%-4.5rem)] w-64 max-lg:hidden 2xl:hidden" aria-expanded="false" aria-modal="false">
              <div className="basis-full shrink-0 flex flex-col overflow-hidden h-full w-full max-lg:hidden 2xl:hidden">
                <div className="flex mb-3 ml-3 justify-between items-center max-lg:hidden 2xl:hidden">
                  <button className="flex items-center gap-1 text-xs font-semibold leading-4 text-center uppercase cursor-pointer max-lg:hidden 2xl:hidden" data-component="button" type="button">
                    <Icon16 />
                    {" On this page"}
                  </button>
                </div>
                <div className="flex flex-col overflow-hidden max-lg:hidden 2xl:hidden">
                  <div className="block overflow-auto max-lg:hidden 2xl:hidden">
                    <ul className="border-l border-solid border-l-border flex relative pb-5 flex-col [list-style-type:none] list-outside max-lg:hidden 2xl:hidden">
                      {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
                    </ul>
                  </div>
                  <div className="border-t border-solid border-t-border flex pt-5 flex-col gap-3 max-lg:hidden 2xl:hidden">
                    <div className="flex flex-col gap-3 text-sm leading-5 max-lg:hidden 2xl:hidden">
                      <div className="flex flex-wrap items-center gap-2 max-lg:hidden 2xl:hidden">
                        <p className="block max-lg:hidden 2xl:hidden">
                          Was this helpful?
                        </p>
                        <div className="border border-solid border-surface flex rounded-full justify-start items-stretch overflow-hidden bg-background max-lg:hidden 2xl:hidden">
                          {logoData.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-56 h-[3.0625rem] flex sticky bottom-0 z-10 mt-[8.3125rem] pt-4 flex-col max-lg:hidden 2xl:hidden">
                  <div className="flex justify-end items-center max-lg:hidden 2xl:hidden">
                    <div className="flex justify-start items-stretch gap-2 overflow-hidden max-lg:hidden 2xl:hidden" role="radiogroup">
                      {logo2Data.map((d, i) => <Logo2 key={i} d={d} styles={Logo2_styles[i]} />)}
                    </div>
                  </div>
                  <div className="block max-lg:hidden 2xl:hidden" />
                </div>
              </div>
            </aside>
            <main className="flex relative py-8 flex-col flex-1 [word-break:break-word] [overflow-wrap:anywhere] mx-auto max-w-3xl w-full 2xl:hidden">
              <div className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap 2xl:hidden">
                {"For the complete documentation index, see "}
                <a className="inline cursor-pointer 2xl:hidden" data-component="link" href="/docs/llms.txt">
                  llms.txt
                </a>
                {". This page is also available as "}
                <a className="inline cursor-pointer 2xl:hidden" data-component="link" href="/docs/guides/seo-and-llm-optimization/geo-guide.md">
                  Markdown
                </a>
                .
              </div>
              <div className="w-152 block min-w-0 grow max-md:w-[21.4375rem] md:max-lg:w-176 2xl:hidden">
                <header className="block mb-6 mx-auto max-w-3xl w-full 2xl:hidden after:content-[''] after:block after:w-full after:h-0 2xl:after:hidden">
                  <div className="flex float-right -mt-1.5 -mb-1 ml-4 gap-2 2xl:hidden">
                    <div className="flex justify-start items-stretch overflow-hidden 2xl:hidden">
                      <button className="h-[29.3px] border border-solid border-surface flex relative z-20 py-1 px-2 rounded-tl-3xl rounded-bl-3xl items-center shrink-0 gap-2 overflow-hidden align-middle text-muted-foreground text-sm leading-[1.125rem] text-center whitespace-nowrap text-nowrap bg-background shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full 2xl:hidden hover:bg-clr-7 hover:border-clr-8" data-component="button" aria-label="Ask" type="button">
                        <Icon17 />
                        <span className="block overflow-hidden 2xl:hidden">
                          Ask
                        </span>
                      </button>
                      <button className="h-[29.3px] border-t border-solid border-t-surface border-r border-r-surface border-b border-b-surface flex p-1 rounded-tr-3xl rounded-br-3xl items-center shrink-0 gap-2 overflow-hidden align-middle text-muted-foreground text-sm leading-[1.125rem] text-center whitespace-nowrap text-nowrap bg-background shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full 2xl:hidden hover:bg-clr-7 hover:border-clr-8" data-component="button" aria-expanded="false" aria-haspopup="menu" aria-label="More" id="radix-_r_28_" type="button">
                        <Icon18 />
                      </button>
                    </div>
                    <button className="border border-solid border-surface hidden min-w-0 p-1 rounded-3xl items-center shrink-0 gap-2 overflow-hidden align-middle text-muted-foreground text-sm leading-[1.125rem] text-center whitespace-nowrap text-nowrap bg-background cursor-pointer max-w-full max-lg:h-[29.3px] max-lg:flex" aria-label="On this page" type="button">
                      <Icon19 />
                    </button>
                  </div>
                  <nav className="block mb-3 text-muted-foreground text-xs leading-[1.25rem] 2xl:hidden" data-component="nav" aria-label="Breadcrumb">
                    <ol className="inline [list-style-type:none] list-outside 2xl:hidden">
                      <li className="inline 2xl:hidden">
                        <span className="inline items-center leading-4 cursor-default 2xl:hidden" aria-expanded="false" aria-haspopup="menu" id="radix-_r_2f_" type="button">
                          <Icon20 />
                          Resources
                        </span>
                        <Icon21 />
                      </li>
                      <li className="inline 2xl:hidden">
                        <a className="inline items-center leading-4 cursor-pointer 2xl:hidden hover:underline" data-component="link" aria-expanded="false" aria-haspopup="menu" href="/docs/guides" id="radix-_r_2j_" type="button">
                          <Icon22 />
                          Guides
                        </a>
                        <Icon21 />
                      </li>
                      <li className="inline 2xl:hidden">
                        <a className="inline items-center leading-4 cursor-pointer 2xl:hidden hover:underline" data-component="link" aria-expanded="false" aria-haspopup="menu" href="/docs/guides/seo-and-llm-optimization" id="radix-_r_2n_" type="button">
                          {"SEO & LLM optimization"}
                        </a>
                      </li>
                    </ol>
                  </nav>
                  <h1 className="flex mb-3 items-center grow gap-4.5 text-4xl font-bold leading-[2.8125rem] tracking-[-0.9px] text-pretty max-md:clear-right max-md:gap-[0.9375rem] max-md:text-3xl max-md:leading-[2.375rem] max-md:tracking-[-0.75px] 2xl:hidden" data-component="heading">
                    GEO guide: How to optimize your docs for AI search and LLM ingestion
                  </h1>
                  <p className="block clear-both text-muted-foreground text-lg leading-7 max-w-3xl w-full 2xl:hidden">
                    Learn how to optimize documentation for generative engine optimization (GEO), SEO, and LLM ingestion — all powered by GitBook’s AI-ready docs.
                  </p>
                </header>
                <div className="contents 2xl:hidden">
                  <div className="flex flex-col whitespace-pre-wrap 2xl:hidden">
                    <div className="block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        This guide lays out the best practices to optimize your docs for AI. So your product is mentioned cited and explained by AI assistants with the accuracy you expect.
                      </p>
                    </div>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        Modern teams are looking for ways to make their docs AI‑ready — and the answer is generative engine optimization (GEO).
                      </p>
                    </div>
                    <h3 className="flex relative mt-5 pt-4.5 justify-start items-baseline self-start text-2xl font-semibold leading-8 tracking-[-0.3px] max-w-3xl w-full max-md:pt-[0.9375rem] max-md:text-xl max-md:leading-7 max-md:tracking-[-0.25px] 2xl:hidden" data-component="heading" id="what-is-generative-engine-optimization-geo">
                      <span className="block z-1 justify-start self-start flex-1 leading-[2.0625rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.75rem] 2xl:hidden">
                        What is generative engine optimization (GEO)?
                      </span>
                      <span className="h-6 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[2.0625rem] cursor-pointer max-md:leading-[1.75rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#what-is-generative-engine-optimization-geo">
                          <Icon23 />
                        </a>
                      </span>
                    </h3>
                    {tileData.map((d, i) => <Tile key={i} d={d} />)}
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="generative-engine-optimization-geo-vs.-answer-engine-optimization-aeo-whats-the-difference">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        Generative engine optimization (GEO) vs. answer engine optimization (AEO): what’s the difference?
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#generative-engine-optimization-geo-vs.-answer-engine-optimization-aeo-whats-the-difference">
                          <Icon24 />
                        </a>
                      </span>
                    </h4>
                    {tileData2.map((d, i) => <Tile key={i} d={d} />)}
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        {"In this article, we’ll use "}
                        <strong className="inline font-bold 2xl:hidden">
                          GEO
                        </strong>
                        , simply because it’s the more common term right now — at least according to Google Trends. But until the industry settles on a single definition, expect to see both terms used interchangeably.
                      </p>
                    </div>
                    <h3 className="flex relative mt-5 pt-4.5 justify-start items-baseline self-start text-2xl font-semibold leading-8 tracking-[-0.3px] max-w-3xl w-full max-md:pt-[0.9375rem] max-md:text-xl max-md:leading-7 max-md:tracking-[-0.25px] 2xl:hidden" data-component="heading" id="improve-geo-quick-tips">
                      <span className="block z-1 justify-start self-start flex-1 leading-[2.0625rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.75rem] 2xl:hidden">
                        Improve GEO: Quick tips
                      </span>
                      <span className="h-6 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[2.0625rem] cursor-pointer max-md:leading-[1.75rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#improve-geo-quick-tips">
                          <Icon25 />
                        </a>
                      </span>
                    </h3>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        Like with SEO, there are a few rules to follow when building AI-optimized documentation. Let’s start with some content advice.
                      </p>
                    </div>
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="content-creation-tips">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        Content creation tips
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#content-creation-tips">
                          <Icon26 />
                        </a>
                      </span>
                    </h4>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
                    </ul>
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="page-design-and-site-settings">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        Page design and site settings
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#page-design-and-site-settings">
                          <Icon24 />
                        </a>
                      </span>
                    </h4>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              K
                              <strong className="inline font-bold 2xl:hidden">
                                eep URLs stable and human‑readable
                              </strong>
                              {" – Changing slugs can break embeddings and historical references. Make sure you follow URL best practices!"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              <strong className="inline font-bold 2xl:hidden">
                                {"Enable a site‑wide sitemap and "}
                              </strong>
                              <span className="inline 2xl:hidden">
                                <a className="inline underline cursor-pointer 2xl:hidden" data-component="link" href="https://www.gitbook.com/blog/what-is-llms-txt">
                                  <strong className="inline font-bold 2xl:hidden">
                                    llms.txt/llms-full.txt
                                  </strong>
                                  <Icon27 />
                                </a>
                              </span>
                              {" – These files help LLM crawlers discover canonical sources and allowed paths."}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              <strong className="inline font-bold 2xl:hidden">
                                Use structured metadata
                              </strong>
                              {" – Things like titles, descriptions, "}
                              <code className="inline min-w-6.5 py-px px-1.5 rounded-sm justify-center items-center [font-family:'IBM_Plex_Mono',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-surface-2 shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--surface)_0px_0px_0px_1px_inset,var(--clr-1)_0px_0px_0px_0px] 2xl:hidden">
                                robots
                              </code>
                              {" directives, and Open Graph tags. These signals improve crawl quality."}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              <strong className="inline font-bold 2xl:hidden">
                                Avoid interstitials or gated assets for public docs
                              </strong>
                              {" – Crawlers struggle with paywalls and script‑gated content. If you want your docs cited, make them easy to access for everyone."}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="flex relative mt-5 pt-4.5 justify-start items-baseline self-start text-2xl font-semibold leading-8 tracking-[-0.3px] max-w-3xl w-full max-md:pt-[0.9375rem] max-md:text-xl max-md:leading-7 max-md:tracking-[-0.25px] 2xl:hidden" data-component="heading" id="geo-best-practices">
                      <span className="block z-1 justify-start self-start flex-1 leading-[2.0625rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.75rem] 2xl:hidden">
                        GEO best practices
                      </span>
                      <span className="h-6 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[2.0625rem] cursor-pointer max-md:leading-[1.75rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#geo-best-practices">
                          <Icon24 />
                        </a>
                      </span>
                    </h3>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        There are three essential things to remember when optimization documentation for AI:
                      </p>
                    </div>
                    <ol className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles[i]} />)}
                    </ol>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        {"With that in mind, the best approach to GEO is to treat it as part of your existing documentation workflow, not a one‑time checklist. "}
                      </p>
                    </div>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        Here are a few things to focus on when creating AI-ready docs. And it’s no surprise that they’re also similar to general documentation best practices:
                      </p>
                    </div>
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="audit-your-page-titles-and-descriptions">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        Audit your page titles and descriptions
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#audit-your-page-titles-and-descriptions">
                          <Icon24 />
                        </a>
                      </span>
                    </h4>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Check that every page on your docs site has a title and description. This metadata is extremely important to help LLMs (and traditional search engines) understand the page’s content.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="structure-your-page-effectively">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        Structure your page effectively
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#structure-your-page-effectively">
                          <Icon26 />
                        </a>
                      </span>
                    </h4>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Add descriptive subheads that answer common user questions. It makes them more useful and scannable for both users and LLMs.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Keep sections on your page to a maximum of 200–400 words. This makes it easier for LLMs to chunk your content.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="optimize-code-snippets-and-examples">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        Optimize code snippets and examples
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#optimize-code-snippets-and-examples">
                          <Icon24 />
                        </a>
                      </span>
                    </h4>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              {"Provide minimal, runnable snippets with known inputs and outputs. Include language tags and titles for code blocks. "}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Pair conceptual docs with reference tables and constraints; LLMs use both during tool selection.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="follow-image-best-practices">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        Follow image best practices
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#follow-image-best-practices">
                          <Icon24 />
                        </a>
                      </span>
                    </h4>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Always include alt text and concise captions when you add an image. And make sure they describe the intent, not just the appearance.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              When possible, lean towards text‑based formats (such as Markdown or JSON) rather than screenshots so content is easier to index.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="answer-common-user-questions-directly">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        Answer common user questions directly
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#answer-common-user-questions-directly">
                          <Icon24 />
                        </a>
                      </span>
                    </h4>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Identify the most common questions users ask AI about your product. Then create pages that directly answer each with clear steps and descriptive titles.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              If you can, make the page heading a question — such as “How to rotate an API key” — to align with user prompts and search queries. Bonus: these pages are great for SEO, too.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="be-consistent">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        Be consistent
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#be-consistent">
                          <Icon24 />
                        </a>
                      </span>
                    </h4>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Make sure you keep brand and product names consistent, and avoid variant spellings.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4 className="flex relative mt-5 pt-2.5 justify-start items-baseline self-start text-xl font-semibold leading-7 tracking-[-0.25px] max-w-3xl w-full max-md:pt-[0.5625rem] max-md:text-[1.125rem] max-md:tracking-[-0.22px] 2xl:hidden" data-component="heading" id="include-attribution">
                      <span className="block z-1 justify-start self-start flex-1 leading-[1.75rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.5625rem] 2xl:hidden">
                        {"Include attribution "}
                      </span>
                      <span className="h-5 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[1.75rem] cursor-pointer max-md:leading-[1.5625rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#include-attribution">
                          <Icon24 />
                        </a>
                      </span>
                    </h4>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Add metadata for the page’s author and last‑updated. This signals freshness and ownership, which are valued by LLMs.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="flex relative mt-5 pt-4.5 justify-start items-baseline self-start text-2xl font-semibold leading-8 tracking-[-0.3px] max-w-3xl w-full max-md:pt-[0.9375rem] max-md:text-xl max-md:leading-7 max-md:tracking-[-0.25px] 2xl:hidden" data-component="heading" id="geo-in-gitbook">
                      <span className="block z-1 justify-start self-start flex-1 leading-[2.0625rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.75rem] 2xl:hidden">
                        GEO in GitBook
                      </span>
                      <span className="h-6 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[2.0625rem] cursor-pointer max-md:leading-[1.75rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#geo-in-gitbook">
                          <Icon24 />
                        </a>
                      </span>
                    </h3>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        <span className="inline 2xl:hidden">
                          <a className="inline underline cursor-pointer 2xl:hidden" data-component="link" href="https://www.gitbook.com/">
                            GitBook
                            <Icon27 />
                          </a>
                        </span>
                        {" makes it easy to implement an AI documentation strategy. As well as "}
                        <span className="inline 2xl:hidden">
                          <a className="inline underline cursor-pointer 2xl:hidden" data-component="link" href="https://app.gitbook.com/s/Ua3kTfM3iWAoECzM0u90">
                            automatically optimizing pages for SEO
                            <Icon27 />
                          </a>
                        </span>
                        , GitBook automatically implements GEO to make your docs LLM-friendly with some handy features.
                      </p>
                    </div>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        What GitBook optimizes automatically for LLM ingestion:
                      </p>
                    </div>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              <strong className="inline font-bold 2xl:hidden">
                                Semantic structure
                              </strong>
                              {" – GitBook uses clean HTML, "}
                              <span className="inline 2xl:hidden">
                                <a className="inline underline cursor-pointer 2xl:hidden" data-component="link" href="/docs/create-content/formatting/markdown">
                                  Markdown formatting
                                </a>
                              </span>
                              {" for heading hierarchy, and code block metadata by default."}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              <strong className="inline font-bold 2xl:hidden">
                                LLM-friendly formatting
                              </strong>
                              {" – "}
                              <span className="inline 2xl:hidden">
                                <a className="inline underline cursor-pointer 2xl:hidden" data-component="link" href="/docs/getting-started/llm-ready-docs">
                                  GitBook auto‑generates LLM-friendly elements
                                </a>
                              </span>
                              {" like sitemaps, "}
                              <code className="inline min-w-6.5 py-px px-1.5 rounded-sm justify-center items-center [font-family:'IBM_Plex_Mono',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-surface-2 shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--surface)_0px_0px_0px_1px_inset,var(--clr-1)_0px_0px_0px_0px] 2xl:hidden">
                                llms.txt
                              </code>
                              {" and "}
                              <code className="inline min-w-6.5 py-px px-1.5 rounded-sm justify-center items-center [font-family:'IBM_Plex_Mono',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-surface-2 shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--surface)_0px_0px_0px_1px_inset,var(--clr-1)_0px_0px_0px_0px] 2xl:hidden">
                                llms-full.txt
                              </code>
                              {" files, and MCP servers. Plus, it offers Markdown versions of every page, and creates stable, readable URLs to guide AI crawlers to canonical content."}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              <strong className="inline font-bold 2xl:hidden">
                                Performance and render fidelity
                              </strong>
                              {" – Fast, server‑rendered pages reduce crawl errors and ensure the text LLMs see matches what users see."}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        In other words: if you work with GitBook, you’re building on a foundation designed for AI‑optimized documentation — not just bolting GEO on later. GitBook is built to produce docs designed for humans, and optimized for AI assistants.
                      </p>
                    </div>
                    <h3 className="flex relative mt-5 pt-4.5 justify-start items-baseline self-start text-2xl font-semibold leading-8 tracking-[-0.3px] max-w-3xl w-full max-md:pt-[0.9375rem] max-md:text-xl max-md:leading-7 max-md:tracking-[-0.25px] 2xl:hidden" data-component="heading" id="how-to-test-geo-for-your-docs">
                      <span className="block z-1 justify-start self-start flex-1 leading-[2.0625rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.75rem] 2xl:hidden">
                        How to test GEO for your docs
                      </span>
                      <span className="h-6 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[2.0625rem] cursor-pointer max-md:leading-[1.75rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#how-to-test-geo-for-your-docs">
                          <Icon28 />
                        </a>
                      </span>
                    </h3>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        {"These tips should help you improve your discoverability by AI assistants. But how can you track whether your efforts have been successful? "}
                      </p>
                    </div>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        Here are a few tips to test your documentation GEO:
                      </p>
                    </div>
                    <ul className="block min-w-0 mt-5 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                      <li className="flex mb-2 items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative mb-2 justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Ask multiple AI tools targeted questions about your product’s features and workflows — then look for direct citations of specific pages and anchors.
                            </p>
                          </div>
                          <ul className="min-h-6 block min-w-0 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                            <li className="flex items-start 2xl:hidden">
                              <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                                <div className="block text-[1.5rem] 2xl:hidden before:content-['◦'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                              </div>
                              <div className="w-138 flex min-w-0 flex-col flex-1 max-md:w-[17.9375rem] md:max-lg:w-162 2xl:hidden">
                                <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                                  <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                                    {"Ask specific questions like “How do I create an access token for the API?” or “Give me step-by-step instructions for installing an extension” "}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start leading-6 2xl:hidden">
                        <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                          <div className="block text-[1.5rem] 2xl:hidden before:content-['•'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                        </div>
                        <div className="w-145 flex min-w-0 flex-col flex-1 max-md:w-[19.6875rem] md:max-lg:w-169 2xl:hidden">
                          <div className="min-h-6 block relative mb-2 justify-start self-start max-w-3xl w-full 2xl:hidden">
                            <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                              Track referral traffic from AI tools and monitor which pages are cited most often — then improve any content that doesn’t get citations.
                            </p>
                          </div>
                          <ul className="min-h-6 block min-w-0 [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                            <li className="flex items-start 2xl:hidden">
                              <div className="w-6 min-h-6 flex min-w-6 mr-1 justify-center items-center text-muted-foreground 2xl:hidden">
                                <div className="block text-[1.5rem] 2xl:hidden before:content-['◦'] before:text-muted-foreground before:text-2xl before:leading-6 2xl:before:hidden" />
                              </div>
                              <div className="w-138 flex min-w-0 flex-col flex-1 max-md:w-[17.9375rem] md:max-lg:w-162 2xl:hidden">
                                <div className="min-h-6 block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                                  <p className="min-h-6 block justify-start self-start max-w-3xl w-full 2xl:hidden">
                                    Tip: GitBook includes built-in analytics that help you track this kind of data — and many other insights.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className="border-l-2 border-solid border-l-muted grid mt-5 rounded-tr-xl rounded-br-xl overflow-hidden text-sm leading-5 bg-clr-5 grid-cols-[auto_1fr] grid-rows-[auto_auto] max-w-3xl w-full 2xl:hidden" aria-label="Information" role="note">
                      <div className="block py-4 pl-4 text-muted bg-clr-6 2xl:hidden">
                        <Icon29 />
                      </div>
                      <h2 className="flex relative py-4 pl-3 justify-start items-baseline self-start font-semibold leading-[1.0625rem] tracking-[-0.17px] bg-clr-6 w-full max-md:leading-[1.1875rem] 2xl:hidden" data-component="heading" id="remember-results-may-take-time">
                        <span className="block z-1 justify-start self-start flex-1 leading-[1.125rem] [overflow-wrap:break-word] max-w-full 2xl:hidden">
                          Remember: results may take time
                        </span>
                        <span className="h-3.5 grid relative opacity-0 ml-1 px-2 rounded-sm self-center shrink-0 order-[9999] col-start-1 row-start-1 grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                          <a className="flex items-center leading-[1.125rem] cursor-pointer 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#remember-results-may-take-time">
                            <Icon30 />
                          </a>
                        </span>
                      </h2>
                      <div className="w-[35.825rem] block min-w-0 py-4 pr-4 pl-3 col-end-[-1] row-end-[-1] max-md:w-[19.2625rem] md:max-lg:w-[41.825rem] 2xl:hidden">
                        <div className="h-full block relative justify-start self-start max-w-3xl w-full 2xl:hidden">
                          <p className="h-full block justify-start self-start max-w-3xl w-full 2xl:hidden">
                            Models and search engines need to re-crawl your site before GEO changes show up in answers. This should happen fairly quickly, but don’t despair if you don’t see instant results.
                          </p>
                        </div>
                      </div>
                    </div>
                    <h3 className="flex relative mt-5 pt-4.5 justify-start items-baseline self-start text-2xl font-semibold leading-8 tracking-[-0.3px] max-w-3xl w-full max-md:pt-[0.9375rem] max-md:text-xl max-md:leading-7 max-md:tracking-[-0.25px] 2xl:hidden" data-component="heading" id="wrap-up">
                      <span className="block z-1 justify-start self-start flex-1 leading-[2.0625rem] [overflow-wrap:break-word] max-w-full max-md:leading-[1.75rem] 2xl:hidden">
                        Wrap up
                      </span>
                      <span className="h-6 grid relative opacity-0 -ml-6 pr-2 rounded-sm self-center order-[-9999] col-start-1 row-start-1 bg-background grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                        <a className="flex items-center leading-[2.0625rem] cursor-pointer max-md:leading-[1.75rem] 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#wrap-up">
                          <Icon30 />
                        </a>
                      </span>
                    </h3>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        GEO is still an emerging standard, and while AI platforms haven’t yet shared any official information about how to optimize your content, we already have a good idea about what works well. Most important of all is writing great content. Combine that approach with the tips above and you should see great results in LLMs.
                      </p>
                    </div>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        {"And if you’re looking for AI‑optimized documentation that reads beautifully for humans and performs for LLMs, "}
                        <span className="inline 2xl:hidden">
                          <a className="inline underline cursor-pointer 2xl:hidden" data-component="link" href="https://www.gitbook.com/">
                            GitBook
                            <Icon27 />
                          </a>
                        </span>
                        {" is the best platform to get you there. "}
                      </p>
                    </div>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        {"Want to see why teams like Nvidia, Zoom and Amazon trust GitBook for their documentation? "}
                        <span className="inline 2xl:hidden">
                          <a className="inline underline cursor-pointer 2xl:hidden" data-component="link" href="https://app.gitbook.com/join">
                            Sign up today
                            <Icon27 />
                          </a>
                        </span>
                        {" and start publishing docs that assistants love to cite."}
                      </p>
                    </div>
                    <div className="block relative mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden">
                      <p className="block justify-start self-start max-w-3xl w-full 2xl:hidden">
                        —
                      </p>
                    </div>
                    <details className="border border-solid border-border block my-5 rounded-lg bg-background max-w-3xl w-full 2xl:hidden" id="glossary">
                      <summary className="list-item relative py-4 pr-10 pl-4 text-muted-foreground list-inside cursor-pointer 2xl:hidden">
                        <Icon31 />
                        Glossary
                        <a className="w-3 h-10.5 flex absolute top-2 right-4 items-center 2xl:hidden" data-component="link" aria-label="Direct link to heading" href="#glossary">
                          <Icon32 />
                        </a>
                      </summary>
                      <div className="block pb-5 px-10 2xl:hidden">
                        <ul className="block [list-style-type:none] list-outside max-w-3xl w-full 2xl:hidden">
                          {listRow6Data.map((d, i) => <ListRow6 key={i} d={d} styles={ListRow6_styles[i]} />)}
                        </ul>
                      </div>
                    </details>
                    <p className="block mt-5 justify-start self-start max-w-3xl w-full 2xl:hidden" />
                  </div>
                </div>
              </div>
              <div className="flex mt-6 flex-wrap items-center gap-4 text-muted-foreground mx-auto max-w-3xl w-full 2xl:hidden">
                <p className="block mr-[24.8125rem] text-sm leading-5 max-md:mr-33 md:max-lg:mr-[15.4375rem] 2xl:hidden">
                  {"Last updated "}
                  <time className="inline 2xl:hidden" dateTime="2026-01-19T16:15:46.388Z">
                    in 26,896 minutes
                  </time>
                </p>
                <div className="hidden min-w-0 flex-col gap-3 text-sm leading-5 max-lg:flex">
                  <div className="flex flex-wrap items-center gap-2 2xl:hidden">
                    <p className="block min-w-0 2xl:hidden">
                      Was this helpful?
                    </p>
                    <div className="border border-solid border-surface flex min-w-0 rounded-full justify-start items-stretch overflow-hidden bg-background 2xl:hidden">
                      {logo3Data.map((d, i) => <Logo3 key={i} d={d} styles={Logo3_styles[i]} />)}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
