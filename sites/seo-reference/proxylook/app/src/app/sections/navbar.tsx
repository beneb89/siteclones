import Icon from "../svgs/svg-icon";
import NavLink from "../components/nav-link";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import { NavLink_styles } from "../_styles";
import { navLinkData as navLinkDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ navLinkData = navLinkDataContent } = {}) {
  return (
    <header className="h-[3.775rem] border-b border-solid border-b-border block sticky top-0 z-60 bg-clr-0 [backdrop-filter:blur(14px)] max-md:h-[3.5625rem] md:max-lg:h-[3.8125rem]">
      <div className="grid max-w-330 py-3 px-6 items-center gap-8 mx-auto grid-cols-[auto_1fr_auto] max-md:py-2.5 max-md:px-3.5 max-md:gap-2 max-lg:grid-cols-[auto_1fr]">
        <a className="h-7 flex items-center gap-2 text-[1.0625rem] font-bold leading-7 tracking-[-0.17px] cursor-pointer" data-component="link" href="/">
          {" "}
          <Icon />
          {" "}
          <span className="block">
            <span className="inline">
              Proxy
            </span>
            <span className="inline text-primary">
              Look
            </span>
          </span>
          {" "}
        </a>
        {" "}
        <nav className="flex justify-center gap-0.5 max-lg:hidden" data-component="nav">
          {navLinkData.map((d, i) => <NavLink key={i} d={d} styles={NavLink_styles[i]} />)}
          {" "}
        </nav>
        {" "}
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 border border-solid border-border flex rounded-md justify-center items-center text-accent text-center bg-surface cursor-pointer hover:border-clr-18" data-component="button" aria-label="Search" id="pl-search-open" title="Search">
            <Icon2 />
            {" "}
          </button>
          {" "}
          <button className="w-8 h-8 border border-solid border-border flex rounded-md justify-center items-center text-accent text-center bg-surface cursor-pointer hover:border-clr-18" data-component="button" aria-label="Toggle theme" id="pl-theme-toggle" title="Toggle theme">
            <Icon3 />
            {" "}
          </button>
          {" "}
          <a className="h-[1.9625rem] border border-solid border-border flex py-1.5 px-2.5 rounded-lg justify-center items-center gap-1.5 text-xs font-semibold leading-[1.0625rem] whitespace-nowrap text-nowrap bg-surface cursor-pointer max-md:hidden hover:bg-surface-2 hover:border-clr-18 hover:shadow-[var(--clr-5)_0px_0.999937px_1.99987px_0px,var(--clr-2)_0px_0.999937px_1.99987px_0px] hover:transform-[matrix(1,0,0,1,0,-0.999937)] focus:shadow-[var(--clr-21)_0px_0.000808757px_0.00161751px_0px,var(--clr-21)_0px_0.000808757px_0.00161751px_0px] focus:transform-[matrix(1,0,0,1,0,-0.000808757)]" data-component="button" href="/compare" id="pl-compare-open">
            Compare (
            <span className="block" id="pl-compare-count">
              0
            </span>
            )
          </a>
          {" "}
          <a className="h-[1.9625rem] border border-solid border-clr-1 flex py-1.5 px-2.5 rounded-lg justify-center items-center gap-1.5 text-surface text-xs font-semibold leading-[1.0625rem] whitespace-nowrap text-nowrap bg-primary cursor-pointer max-md:hidden hover:bg-color-002 hover:shadow-[var(--clr-19)_0px_3.99975px_13.9991px_0px] hover:transform-[matrix(1,0,0,1,0,-0.999937)] focus:shadow-[var(--clr-22)_0px_0.00323573px_0.0113251px_0px] focus:transform-[matrix(1,0,0,1,0,-0.000808932)]" data-component="button" href="/assistant">
            AI finder
          </a>
          {" "}
          <button className="w-9 h-9 border border-solid border-border hidden min-w-0 rounded-md justify-center items-center text-center cursor-pointer max-lg:flex" aria-controls="pl-nav-drawer" aria-expanded="false" aria-label="Open menu" id="pl-nav-burger" type="button">
            <Icon4 />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </header>
  );
}
