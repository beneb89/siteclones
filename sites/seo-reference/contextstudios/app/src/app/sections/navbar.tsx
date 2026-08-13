import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
/** Top navigation bar. */
export default function Navbar() {
  return (
    <header className="h-25 block fixed inset-x-0 z-50 pt-5 px-6 max-md:hidden" aria-hidden="false">
      <div className="border border-solid border-border block relative max-w-320 rounded-[20px] bg-clr-5 shadow-[var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-6)_0px_4px_20px_0px] [backdrop-filter:blur(16px)_saturate(1.8)] mx-auto h-20">
        <div className="flex px-8 justify-between items-center h-full md:max-lg:px-5">
          <a className="h-[56.3px] flex mr-6 -ml-3 items-center gap-2 cursor-pointer md:max-lg:mr-0 2xl:mr-14 hover:opacity-[0.904062] focus:opacity-[0.998651]" data-component="link" href="/">
            <img className="w-[2.5625rem] block max-w-full overflow-clip object-contain aspect-[auto_38/48] align-middle text-clr-2 h-[3.25rem]" data-component="image" alt="Context Studios Icon" height="48" src="/assets/cloned/svg/83e55d960581.svg" width="38" />
            <div className="block shrink-0 bg-clr-3 h-[3.25rem] w-px" />
            <div className="flex flex-col justify-center text-color-003 leading-4 text-left">
              <span className="block text-lg font-bold leading-[1.4375rem] tracking-[-0.45px]">
                CONTEXT
              </span>
              <span className="block -mt-0.5 text-lg leading-[1.4375rem] tracking-[0.45px]">
                STUDIOS
              </span>
              <span className="block mt-0.5 text-clr-4 text-[0.5625rem] font-medium leading-[0.6875rem] tracking-[0.45px] uppercase whitespace-nowrap text-nowrap">
                AI-NATIVE DEVELOPMENT STUDIO
              </span>
            </div>
          </a>
          <nav className="flex items-center gap-1 max-lg:hidden 2xl:gap-2" data-component="nav">
            <div className="flex relative items-center">
              <div className="flex px-1 rounded-full items-center">
                <a className="block py-2 px-3 text-color-003 text-[0.9375rem] font-medium leading-[1.4375rem] cursor-pointer hover:opacity-80" data-ditto-id="menu-trigger-link" data-component="link" href="/solutions">
                  Solutions
                </a>
                <button className="block py-1 pr-2 pl-1 text-color-003 text-center cursor-default hover:opacity-[0.808138] focus:opacity-[0.99728]" data-component="button" aria-label="Toggle solutions menu">
                  <Icon />
                </button>
              </div>
            </div>
            <div className="flex relative items-center">
              <div className="flex px-1 rounded-full items-center">
                <a className="block p-2 text-color-003 text-sm font-medium leading-[1.3125rem] cursor-pointer 2xl:px-3 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem] hover:opacity-80" data-component="link" href="/services">
                  Services
                </a>
                <button className="block py-1 pr-1.5 pl-1 text-color-003 text-center cursor-default 2xl:pr-2 hover:opacity-[0.808126] focus:opacity-[0.997298]" data-component="button" aria-label="Toggle menu">
                  <Icon />
                </button>
              </div>
            </div>
            <a className="block p-2 rounded-full text-color-003 text-sm font-medium leading-[1.3125rem] cursor-pointer 2xl:px-3 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem] hover:bg-surface hover:opacity-[0.80812] focus:bg-clr-34 focus:opacity-[0.997301]" data-component="link" href="/portfolio">
              Portfolio
            </a>
            <div className="flex relative items-center">
              <div className="flex px-1 rounded-full items-center">
                <a className="block p-2 text-color-003 text-sm font-medium leading-[1.3125rem] cursor-pointer 2xl:px-3 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem] hover:opacity-80" data-component="link" href="/about">
                  About
                </a>
                <button className="block py-1 pr-1.5 pl-1 text-color-003 text-center cursor-default 2xl:pr-2 hover:opacity-[0.808145] focus:opacity-[0.997281]" data-component="button" aria-label="Toggle menu">
                  <Icon />
                </button>
              </div>
            </div>
            <div className="flex relative items-center">
              <div className="flex px-1 rounded-full items-center">
                <span className="block p-2 text-color-003 text-sm font-medium leading-[1.3125rem] 2xl:px-3 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem]">
                  Resources
                </span>
                <button className="block py-1 pr-1.5 pl-1 text-color-003 text-center cursor-default 2xl:pr-2 hover:opacity-[0.808103] focus:opacity-[0.997299]" data-component="button" aria-label="Toggle menu">
                  <Icon />
                </button>
              </div>
            </div>
            <a className="block p-2 rounded-full text-color-003 text-sm font-medium leading-[1.3125rem] cursor-pointer 2xl:px-3 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem] hover:bg-surface hover:opacity-[0.808133] focus:bg-clr-34 focus:opacity-[0.997279]" data-component="link" href="/faq">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2 md:max-lg:gap-3 2xl:gap-4">
            <div className="border border-solid border-surface block rounded-[14px] text-color-003 max-lg:hidden">
              <button className="inline-flex rounded-lg justify-center items-center text-sm font-medium leading-5 text-center whitespace-nowrap text-nowrap cursor-default h-9 w-9 hover:bg-color-005 hover:text-foreground hover:opacity-80 hover:[text-decoration-color:var(--foreground)]" data-component="button" title="Toggle theme">
                <Icon2 />
                <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden [clip-path:inset(50%)]">
                  Toggle theme
                </span>
              </button>
            </div>
            <div className="border border-solid border-surface block rounded-[14px] text-color-003 max-lg:hidden">
              <button className="inline-flex rounded-lg justify-center items-center text-sm font-medium leading-5 text-center whitespace-nowrap text-nowrap cursor-default h-9 w-9 hover:bg-color-005 hover:text-foreground hover:opacity-80 hover:[text-decoration-color:var(--foreground)]" data-component="button" aria-expanded="false" aria-haspopup="menu" aria-label="Switch language" id="radix-_r_2_" type="button">
                <Icon3 />
                <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden [clip-path:inset(50%)]">
                  Switch language
                </span>
              </button>
            </div>
            <button className="block py-2 px-4 rounded-[10px] text-clr-7 text-sm font-semibold leading-[1.3125rem] text-center bg-color-003 shadow-[var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-8)_0px_4px_8px_0px,var(--clr-9)_0px_1px_0px_0px_inset,var(--clr-10)_0px_-2px_0px_0px_inset] cursor-default 2xl:py-2.5 2xl:px-6 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem] hover:bg-clr-28" data-component="button">
              Book Call
            </button>
            <button className="hidden min-w-0 p-2 rounded-[10px] text-color-003 text-center cursor-default md:max-lg:block" aria-label="Open menu">
              <Icon4 />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
