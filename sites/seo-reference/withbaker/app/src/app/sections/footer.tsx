import NavLink from "../components/nav-link";
import { navLinkData as navLinkDataContent } from "../content";
/** Site footer. */
export default function Footer({ navLinkData = navLinkDataContent } = {}) {
  return (
    <footer className="border-t border-solid border-t-border block mt-20 py-14 max-md:mt-12 max-md:py-10">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center gap-6 max-md:flex-col max-md:items-start">
          <a className="h-6.5 flex rounded-xl items-center gap-2 text-color-001 text-xl font-extrabold leading-6.5 tracking-[-0.2px] cursor-pointer" data-component="link" href="/">
            {" "}
            <img className="w-10 h-4 block max-w-full overflow-clip aspect-[auto_40/40] align-middle" data-component="image" alt="Baker logo" height="40" src="/assets/cloned/images/d2fb094a4186.webp" width="40" />
            {" BAKER "}
          </a>
          {" "}
          <astro-island class="contents min-w-0">
            <div className="flex gap-1">
              <button className="block py-1.5 px-2.5 rounded-xl text-clr-0 text-sm font-medium leading-[1.3125rem] text-center bg-primary cursor-default" data-component="button" aria-current="true" disabled>
                EN
              </button>
              <button className="block py-1.5 px-2.5 rounded-xl text-muted-foreground text-sm font-medium leading-[1.3125rem] text-center cursor-default hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="button" aria-label="Switch to ES">
                ES
              </button>
            </div>
          </astro-island>
          {" "}
        </div>
        {" "}
        <nav className="flex flex-wrap gap-y-2 gap-x-5 text-muted-foreground text-sm leading-[1.3125rem]" data-component="nav" aria-label="Footer">
          {navLinkData.map((d, i) => <NavLink key={i} d={d} />)}
          {" "}
        </nav>
        {" "}
        <p className="block text-muted-foreground text-sm leading-[1.3125rem]">
          {" © 2026 Baker. All rights reserved. "}
        </p>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
