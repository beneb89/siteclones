import NavLink from "../components/nav-link";
import NavLink2 from "../components/nav-link2";
import Logo from "../components/logo";
import { NavLink_styles, Logo_styles } from "../_styles";
import { navLinkData as navLinkDataContent, navLink2Data as navLink2DataContent, navLink2Data2 as navLink2Data2Content, logos as logosContent } from "../content";
/** Site footer. */
export default function Footer({ navLinkData = navLinkDataContent, navLink2Data = navLink2DataContent, navLink2Data2 = navLink2Data2Content, logos = logosContent } = {}) {
  return (
    <footer className="block">
      <div className="border-t border-solid border-t-border block py-12 bg-background">
        <div className="block px-8 mx-auto max-w-7xl max-md:px-4 md:max-lg:px-6">
          <div className="grid gap-12 grid-cols-4 max-lg:gap-8 max-md:grid-cols-1 md:max-lg:grid-cols-2">
            <div className="block">
              <a className="h-[3.075rem] inline-block mb-4 cursor-pointer" data-component="link" href="/">
                <img className="w-full h-[3.0625rem] block max-w-full overflow-clip object-contain aspect-[auto_180/60] align-middle text-clr-3" data-component="image" alt="That Marketing Buddy" height="60" src="/assets/cloned/images/868110bead60.jpg" srcSet="/assets/cloned/images/155dde0f9b72.webp 1x, /assets/cloned/images/868110bead60.jpg 2x" width="180" />
              </a>
              <p className="block text-muted text-sm leading-[1.4375rem]">
                Marketing software, scored for AI-stack fit. MCP, APIs, and agent-readiness, plus straight talk on pricing.
              </p>
            </div>
            <div className="block">
              <p className="block mb-4 text-color-001 text-xs font-semibold leading-4 tracking-[0.6px] uppercase">
                RESOURCES
              </p>
              <nav className="flex flex-col gap-2.5" data-component="nav">
                {navLinkData.map((d, i) => <NavLink key={i} d={d} styles={NavLink_styles[i]} />)}
              </nav>
            </div>
            <div className="block">
              <p className="block mb-4 text-color-001 text-xs font-semibold leading-4 tracking-[0.6px] uppercase">
                COMPANY
              </p>
              <nav className="flex flex-col gap-2.5" data-component="nav">
                {navLink2Data.map((d, i) => <NavLink2 key={i} d={d} />)}
              </nav>
            </div>
            <div className="block">
              <p className="block mb-4 text-color-001 text-xs font-semibold leading-4 tracking-[0.6px] uppercase">
                LEGAL
              </p>
              <nav className="flex flex-col gap-2.5" data-component="nav">
                {navLink2Data2.map((d, i) => <NavLink2 key={i} d={d} />)}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-t-border block py-4 bg-surface-2">
        <div className="block px-8 mx-auto max-w-7xl max-md:px-4 md:max-lg:px-6">
          <div className="flex justify-between items-center gap-y-4 gap-x-8 max-lg:flex-col max-lg:[justify-content:initial] max-lg:[align-items:initial]">
            <p className="block shrink-0 text-muted-foreground text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.32px] uppercase">
              {"Part of the "}
              <a className="inline text-muted cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="link" href="https://rjdigital.fi/">
                RJ Digital
              </a>
              {" network"}
            </p>
            <div className="flex flex-wrap items-center gap-y-3 gap-x-5">
              {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-t-border block py-4 bg-surface-2">
        <div className="flex px-8 justify-between items-center gap-2 mx-auto max-w-7xl max-md:px-4 max-md:flex-col md:max-lg:px-6">
          <p className="block text-color-003 text-sm leading-5">
            © 2026 That Marketing Buddy. All rights reserved.
          </p>
          <p className="block text-color-003 text-sm leading-5">
            Made in Helsinki, Finland
          </p>
        </div>
      </div>
    </footer>
  );
}
