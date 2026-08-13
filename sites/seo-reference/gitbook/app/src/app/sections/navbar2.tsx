import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Icon8 from "../svgs/svg-icon8";
import Icon9 from "../svgs/svg-icon9";
import Icon10 from "../svgs/svg-icon10";
import Icon11 from "../svgs/svg-icon11";
import Icon12 from "../svgs/svg-icon12";
import Icon13 from "../svgs/svg-icon13";
/** Navbar2 section. */
export default function Navbar2() {
  return (
    <header className="flex sticky top-0 z-30 flex-col shrink-0 text-sm leading-5 bg-clr-2 shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-3)_0px_1px_0px_0px] [backdrop-filter:blur(16px)] h-[6.8125rem] 2xl:hidden 2xl:h-16">
      <div className="block 2xl:hidden">
        <div className="block 2xl:hidden">
          <div className="h-16 min-h-16 flex max-w-360 py-3 px-8 justify-between items-center gap-6 mx-auto w-full max-md:px-4 max-lg:gap-4 2xl:hidden">
            <div className="w-72 flex min-w-0 justify-start items-center basis-[288px] gap-4 max-w-full max-lg:w-[181.7px] max-lg:gap-2 max-lg:basis-[initial] 2xl:hidden">
              <button className="hidden min-w-0 -ml-2 p-2 rounded-3xl items-center shrink-0 gap-2 overflow-hidden align-middle leading-[1.3125rem] text-center whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full max-lg:h-[2.3125rem] max-lg:flex" aria-label="Open table of contents" type="button">
                <Icon4 />
              </button>
              <a className="w-[144.7px] h-8 flex min-w-0 items-center cursor-pointer 2xl:hidden" data-component="link" href="https://www.gitbook.com/">
                <img className="w-full block min-w-0 max-w-64 max-h-8 overflow-hidden object-contain object-[0%_50%] align-middle h-full max-lg:max-w-40 2xl:hidden" data-component="image" alt="Logo" src="/assets/cloned/svg/696aee89b61c.svg" />
              </a>
            </div>
            <div className="w-[469.3px] flex max-w-128 ml-6 items-center grow-[0.8] shrink-0 basis-[160px] gap-2 max-md:w-21.5 max-md:order-[9999] max-md:max-w-none max-lg:ml-0 max-md:grow-[initial] max-md:basis-[initial] md:max-lg:w-[21.4rem] md:max-lg:max-w-[50%] md:max-lg:basis-[224px] 2xl:hidden">
              <div className="flex relative grow max-md:hidden 2xl:hidden">
                <div className="w-[23.725rem] min-h-[min-content] border border-solid border-surface flex relative z-30 py-2 px-3 rounded-3xl grow gap-2 overflow-hidden align-middle bg-background max-md:hidden md:max-lg:w-[15.7875rem] 2xl:hidden">
                  <div className="flex items-center grow gap-2 max-md:hidden 2xl:hidden">
                    <div className="flex items-center text-muted-foreground max-md:hidden 2xl:hidden">
                      <Icon5 />
                    </div>
                    <input className="w-69.5 h-[2.3125rem] block max-h-64 -m-2 p-2 grow overflow-clip leading-[1.3125rem] text-left cursor-text max-md:hidden md:max-lg:w-[9.4375rem] 2xl:hidden" data-ditto-id="style-search" data-component="input" aria-activedescendant="search-results-_r_6_-0" aria-autocomplete="list" aria-controls="search-results-_r_6_" aria-expanded="false" aria-haspopup="dialog" aria-label="Search" name="search-input" placeholder="Search…" type="text" value="" />
                    <div className="block max-md:hidden 2xl:hidden">
                      <div className="flex justify-end gap-0.5 text-muted-foreground text-xs leading-4 whitespace-nowrap text-nowrap [font-feature-settings:'calt',_'case'] max-md:hidden 2xl:hidden">
                        <kbd className="w-9.5 border border-solid border-border flex min-w-5 px-1 rounded-md justify-center items-center [font-family:'IBM_Plex_Mono',_monospace] [font-feature-settings:normal] bg-background h-5 max-md:hidden 2xl:hidden">
                          <span className="hidden min-w-0">
                            ⌘
                          </span>
                          <span className="block max-md:hidden 2xl:hidden">
                            Ctrl
                          </span>
                        </kbd>
                        <kbd className="w-5 border border-solid border-border flex min-w-5 px-1 rounded-md justify-center items-center [font-family:'IBM_Plex_Mono',_monospace] uppercase [font-feature-settings:normal] bg-background h-5 max-md:hidden 2xl:hidden">
                          k
                        </kbd>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap max-md:hidden 2xl:hidden" aria-live="assertive" aria-relevant="all" role="alert" />
              </div>
              <button className="h-[2.4375rem] border border-solid border-surface flex py-2 px-4 rounded-3xl items-center shrink-0 gap-2 overflow-hidden align-middle text-muted-foreground leading-[1.3125rem] text-center whitespace-nowrap text-nowrap bg-background cursor-pointer max-w-full max-md:px-2 2xl:hidden" data-component="button" aria-label="Ask GitBook Assistant" type="button">
                <Icon6 />
                <span className="block overflow-hidden max-md:hidden 2xl:hidden">
                  Ask
                </span>
              </button>
              <button className="hidden max-w-full max-md:border max-md:border-solid max-md:border-surface max-md:flex max-md:p-2 max-md:rounded-3xl max-md:items-center max-md:shrink-0 max-md:gap-2 max-md:overflow-hidden max-md:align-middle max-md:text-muted-foreground max-md:leading-[1.3125rem] max-md:text-center max-md:whitespace-nowrap max-md:text-nowrap max-md:bg-background max-md:cursor-pointer hover:bg-clr-5 hover:border-clr-8" aria-label="Ask GitBook Assistant" type="button">
                <Icon7 />
              </button>
            </div>
            <div className="w-[386.7px] flex z-20 min-w-9 justify-end items-center grow gap-x-6 max-md:w-[43.3px] max-lg:gap-x-4 md:max-lg:w-[9.25rem] 2xl:hidden">
              <span className="flex py-0.5 items-center gap-1 overflow-hidden text-muted-foreground whitespace-nowrap text-nowrap cursor-default max-lg:hidden 2xl:hidden" aria-expanded="false" aria-haspopup="menu" id="radix-_r_c_" type="button">
                Product
                <Icon8 />
              </span>
              <a className="flex py-0.5 items-center gap-1 overflow-hidden text-muted-foreground whitespace-nowrap text-nowrap cursor-pointer max-lg:hidden 2xl:hidden hover:underline" data-component="link" href="https://www.gitbook.com/pricing">
                Pricing
              </a>
              <a className="hidden min-w-0 py-0.5 items-center gap-1 overflow-hidden text-muted-foreground whitespace-nowrap text-nowrap cursor-pointer" href="https://www.gitbook.com/enterprise">
                Book a demo
              </a>
              <div className="flex z-20 items-center 2xl:hidden">
                <button className="flex items-center gap-1 text-muted-foreground text-center cursor-pointer 2xl:hidden hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)]" data-component="button" aria-expanded="false" aria-haspopup="menu" id="radix-_r_f_" type="button">
                  <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap 2xl:hidden">
                    More
                  </span>
                  <Icon9 />
                  <Icon10 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block 2xl:hidden">
        <nav className="flex relative z-10 max-w-360 px-8 items-end mx-auto w-full max-md:px-4 2xl:hidden" data-component="nav" aria-label="Main" dir="ltr">
          <div className="w-320 flex relative min-w-0 -mx-8 grow max-md:w-[23.4375rem] max-md:-mx-4 md:max-lg:w-192 2xl:hidden">
            <div className="w-320 flex min-w-0 flex-1 overflow-x-scroll overflow-y-hidden max-md:w-[23.4375rem] md:max-lg:w-192 2xl:hidden" data-ditto-id="style-div">
              <div className="block relative 2xl:hidden">
                <ul className="flex -mx-3 px-8 grow gap-2 [list-style-type:none] list-outside max-md:px-4 2xl:hidden" aria-label="Sections" dir="ltr">
                  <li className="list-item 2xl:hidden" id="sitesc_SsMCE">
                    <a className="w-37 h-[2.0625rem] inline-flex relative my-1.5 py-1.5 px-3 rounded-3xl items-center shrink-0 gap-2 align-middle text-muted-foreground leading-[1.3125rem] whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full 2xl:hidden hover:bg-clr-7 hover:border-clr-8 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" aria-label="Documentation" aria-pressed="false" href="/docs">
                      <Icon11 />
                      <span className="block overflow-hidden 2xl:hidden">
                        Documentation
                      </span>
                    </a>
                  </li>
                  <li className="list-item 2xl:hidden" id="sitesc_ybTYt">
                    <a className="w-[7.5625rem] h-[2.0625rem] inline-flex relative my-1.5 py-1.5 px-3 rounded-3xl items-center shrink-0 gap-2 align-middle text-muted-foreground leading-[1.3125rem] whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full 2xl:hidden hover:bg-clr-7 hover:border-clr-8 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" aria-label="Developers" aria-pressed="false" href="/docs/developers">
                      <Icon12 />
                      <span className="block overflow-hidden 2xl:hidden">
                        Developers
                      </span>
                    </a>
                  </li>
                  <li className="list-item 2xl:hidden" id="sitescg_ya0Yt">
                    <button className="w-[8.4375rem] h-[2.0625rem] inline-flex relative my-1.5 py-1.5 px-3 rounded-3xl items-center shrink-0 gap-2 align-middle text-muted-foreground leading-[1.3125rem] text-center whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full 2xl:hidden hover:bg-clr-10 hover:border-clr-11 hover:text-clr-12 hover:outline-clr-12 hover:[text-decoration-color:var(--clr-12)]" data-component="button" aria-controls="radix-_r_j_-content-sitescg_ya0Yt" aria-expanded="false" aria-label="Resources" aria-pressed="false" id="radix-_r_j_-trigger-sitescg_ya0Yt" type="button">
                      <Icon13 />
                      <span className="block overflow-hidden 2xl:hidden">
                        Resources
                      </span>
                      <span className="block 2xl:hidden">
                        <Icon10 />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-320 h-0 flex absolute left-0 z-20 min-w-0 px-4 max-md:w-[23.4375rem] md:max-lg:w-192 2xl:hidden" />
        </nav>
      </div>
    </header>
  );
}
