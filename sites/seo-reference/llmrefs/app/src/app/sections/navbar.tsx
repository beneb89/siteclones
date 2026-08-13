import Illustration from "../svgs/svg-illustration";
import NavLink from "../components/nav-link";
import Icon from "../svgs/svg-icon";
import { navLinkData as navLinkDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ navLinkData = navLinkDataContent } = {}) {
  return (
    <div className="h-18 flex fixed inset-x-0 z-40 flex-col">
      <header className="flex text-background [backdrop-filter:blur(12px)] h-[4.5rem] w-full">
        <div className="w-full flex px-6 items-center gap-4 2xl:max-w-350 2xl:mx-65">
          <div className="flex shrink-0">
            <a className="h-7 block -m-1 p-1 cursor-pointer" data-component="link" href="/">
              <Illustration />
              <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                LLMrefs
              </span>
            </a>
          </div>
          <div className="flex justify-between w-full">
            <nav className="flex ml-1 items-center gap-0.5 max-lg:hidden" data-component="nav">
              {navLinkData.map((d, i) => <NavLink key={i} d={d} />)}
            </nav>
            <div className="flex ml-[32.625rem] items-center gap-2 max-md:ml-0 md:max-lg:ml-[18.875rem] 2xl:ml-[40.125rem]">
              <a className="flex relative py-2 px-3 rounded-lg justify-center items-center gap-1.5 overflow-hidden [font-weight:521] text-center whitespace-nowrap text-nowrap cursor-pointer h-9 max-md:hidden hover:underline" data-component="link" href="/login">
                Sign in
              </a>
              <a className="flex relative py-2 px-4 rounded-lg justify-center items-center gap-1.5 overflow-hidden font-semibold text-center whitespace-nowrap text-nowrap bg-accent cursor-pointer h-9 hover:bg-clr-7" data-component="button" href="/signup">
                Create Free Account
              </a>
              <div className="hidden min-w-0 max-lg:block">
                <button className="inline-flex relative rounded-lg justify-center items-center gap-1.5 overflow-hidden [font-weight:521] text-center whitespace-nowrap text-nowrap cursor-pointer h-9 w-9" aria-label="Open menu" type="button">
                  <Icon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
