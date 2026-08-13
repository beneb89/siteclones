import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import MediaTile, { type MediaTileData } from "../components/media-tile";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import { MediaTile_meta } from "../ditto-meta";
const MediaTile_data: MediaTileData[] = [
    { ariacontrols: "_R_bd_", label: "Platform" },
    { ariacontrols: "_R_jd_", label: "Solutions" },
    { ariacontrols: "_R_rd_", label: "Resources" },
    { ariacontrols: "_R_13d_", label: "Open Source" },
    { ariacontrols: "_R_1bd_", label: "Enterprise" }
];
/** Top navigation bar. */
export default function Navbar({ mediaTileData = MediaTile_data } = {}) {
  return (
    <div className="block relative">
      <a className="w-px h-px block absolute overflow-hidden text-background bg-primary cursor-pointer hover:underline" data-component="link" href="#start-of-content">
        Skip to content
      </a>
      {" "}
      <react-partial class="block">
        <div className="block" />
        {" "}
      </react-partial>
      {" "}
      <react-partial class="block">
        <div className="block">
          <header className="block relative z-32 py-4 text-background text-base leading-6 bg-color-004 before:content-[''] before:block before:absolute before:inset-0 before:h-[4.0625rem] before:bg-color-004 before:opacity-0 2xl:before:hidden" role="banner">
            <h2 className="w-px h-px block absolute overflow-hidden text-2xl font-semibold leading-9 whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-component="heading">
              Navigation Menu
            </h2>
            <div className="flex relative z-1 px-8 items-center max-md:px-4 max-lg:flex-col md:max-lg:px-6">
              <div className="w-12 flex justify-between items-center max-md:w-[21.4375rem] md:max-lg:w-180">
                <div className="block flex-1">
                  <button className="hidden p-1 text-center cursor-pointer max-lg:h-7.5 max-lg:inline-block" aria-expanded="false" aria-label="Toggle navigation" type="button">
                    <span className="w-5.5 h-0.5 block my-1 rounded-lg bg-background" />
                    <span className="w-5.5 h-0.5 block my-1 rounded-lg bg-background" />
                    <span className="w-5.5 h-0.5 block my-1 rounded-lg bg-background" />
                  </button>
                </div>
                <a className="h-8 flex mr-4 order-[2] cursor-pointer max-lg:mr-0 hover:underline" data-component="link" aria-label="Homepage" href="/">
                  <Icon />
                </a>
                <div className="hidden min-w-0 justify-end flex-1 order-[2] gap-2 text-right max-lg:flex">
                  <a className="h-8 border border-solid border-color-006 inline-flex py-1 px-3 rounded-lg justify-center items-center shrink-0 text-sm leading-[1.3125rem] whitespace-nowrap text-nowrap cursor-pointer max-lg:flex max-lg:font-medium" href="/login?return_to=https%3A%2F%2Fgithub.com%2Fsurendranb%2Fgoogle-analytics-mcp">
                    Sign in
                  </a>
                  <button className="w-8 border border-solid border-color-006 inline-grid ml-3 rounded-lg justify-center items-center content-center shrink-0 gap-2 text-center cursor-pointer max-lg:grid max-lg:grid-cols-[16px] max-lg:ml-0" aria-haspopup="dialog" aria-labelledby="_R_1mt_" type="button">
                    <Icon2 />
                  </button>
                  <span className="w-[max-content] h-[fit-content] hidden absolute max-w-62.5 my-auto py-1 px-2 rounded-md text-xs leading-[1.25rem] text-center text-balance bg-color-004 after:content-[''] after:block after:absolute after:bottom-full after:inset-x-0 after:h-1" aria-hidden="true" id="_R_1mt_">
                    Appearance settings
                  </span>
                </div>
              </div>
              <div className="w-[96%] flex relative inset-0 z-100 flex-col grow transform-[none] pointer-events-none max-lg:absolute max-lg:-bottom-[2.1875rem] max-lg:invisible max-lg:opacity-0 max-lg:min-w-0 max-lg:pt-17 max-lg:transform-[matrix(1,0,0,1,-12,0)] max-lg:w-auto 2xl:w-[97.5%]">
                <div className="w-full flex self-start grow max-lg:invisible">
                  <nav className="block [font-family:'Mona_Sans',_MonaSansFallback,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Helvetica,_Arial,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji'] max-lg:invisible" data-component="nav" aria-label="Global">
                    <ul className="flex [list-style-type:none] list-outside max-lg:invisible">
                      {mediaTileData.map((d, i) => <MediaTile key={i} d={d} meta={MediaTile_meta[i]} />)}
                      <li className="list-item max-lg:invisible">
                        <a className="block p-2 font-medium tracking-[0.24px] whitespace-nowrap text-nowrap cursor-pointer max-lg:invisible hover:opacity-75" data-component="link" href="/pricing">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="w-full flex ml-4 justify-end items-center text-left max-lg:invisible">
                    <div className="block max-lg:invisible">
                      <button className="w-52 h-9.5 border border-solid border-color-006 flex min-w-52 py-1.5 px-2 rounded-lg items-center gap-2 cursor-pointer max-lg:invisible hover:border-background" data-component="button" aria-expanded="false" aria-haspopup="dialog" aria-label="Search or jump to, type / to search" type="button">
                        <Icon3 />
                        <span className="block min-w-0 overflow-hidden whitespace-nowrap text-nowrap max-lg:invisible">
                          {"Type "}
                          <kbd className="border border-solid border-background inline-block max-w-full py-0.5 px-1 rounded-sm align-middle [font-family:'Mona_Sans_Mono',_monospace] text-[0.6875rem] leading-2.5 shadow-[var(--color-003)_0px_-1px_0px_0px_inset] max-lg:invisible">
                            /
                          </kbd>
                          {" to search"}
                        </span>
                      </button>
                    </div>
                    <div className="block relative mr-3 max-lg:invisible">
                      <a className="h-8 inline-flex ml-3 py-1 px-3 rounded-lg justify-center items-center shrink-0 text-sm leading-[1.3125rem] whitespace-nowrap text-nowrap cursor-pointer max-lg:hidden hover:opacity-75" data-component="link" href="/login?return_to=https%3A%2F%2Fgithub.com%2Fsurendranb%2Fgoogle-analytics-mcp">
                        Sign in
                      </a>
                    </div>
                    <a className="h-8 border border-solid border-color-006 flex py-1 px-3 rounded-lg justify-center items-center shrink-0 text-sm leading-[1.3125rem] whitespace-nowrap text-nowrap cursor-pointer max-lg:invisible hover:opacity-75" data-component="button" href={"/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=surendranb%2Fgoogle-analytics-mcp"}>
                      Sign up
                    </a>
                    <button className="w-8 h-8 border border-solid border-color-006 grid ml-3 rounded-lg justify-center items-center content-center shrink-0 gap-2 grid-cols-[16px] text-center cursor-pointer max-lg:invisible hover:bg-color-001 hover:opacity-75" data-ditto-id="menu-trigger-button" data-component="button" aria-haspopup="dialog" aria-labelledby="_R_7ld_" type="button">
                      <Icon4 />
                    </button>
                    <span className="w-[max-content] h-[fit-content] hidden absolute min-w-0 max-w-62.5 my-auto py-1 px-2 rounded-md text-xs leading-[1.25rem] text-center text-balance bg-color-004 after:content-[''] after:block after:absolute after:bottom-full after:inset-x-0 after:h-1" aria-hidden="true" id="_R_7ld_">
                      Appearance settings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        {" "}
      </react-partial>
      {" "}
    </div>
  );
}
