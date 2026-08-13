import Icon10 from "../svgs/svg-icon10";
import NavLink from "../components/nav-link";
import ListRow5 from "../components/list-row5";
import Icon11 from "../svgs/svg-icon11";
import { ListRow5_styles, ListRow5_styles2, ListRow5_styles3, ListRow5_styles4 } from "../_styles";
import { navLinkData as navLinkDataContent, listRow5Data as listRow5DataContent, listRow5Data2 as listRow5Data2Content, listRow5Data3 as listRow5Data3Content, listRow5Data4 as listRow5Data4Content } from "../content";
/** Site footer. */
export default function Footer({ navLinkData = navLinkDataContent, listRow5Data = listRow5DataContent, listRow5Data2 = listRow5Data2Content, listRow5Data3 = listRow5Data3Content, listRow5Data4 = listRow5Data4Content } = {}) {
  return (
    <footer className="block overflow-hidden text-base leading-6 max-lg:[font-size:inherit] max-lg:leading-[inherit]">
      <div className="border-t border-solid border-t-border block max-w-320 p-8 max-md:px-4 max-md:max-w-none md:max-lg:max-w-192 2xl:max-w-344 2xl:mx-68">
        <div className="border border-solid border-border block p-6 rounded-xl bg-surface">
          <div className="flex justify-between items-center gap-4 max-md:flex-col max-md:[justify-content:initial] max-md:[align-items:initial]">
            <div className="block">
              <h3 className="block mb-1 text-color-003 text-lg font-medium leading-7" data-component="heading">
                Get weekly ad insights
              </h3>
              <p className="block text-muted-foreground text-sm leading-5">
                Top-performing ads and creative strategies, delivered weekly.
              </p>
            </div>
            <form className="w-87.5 flex min-w-85 gap-2 max-md:w-[18.3125rem] max-md:min-w-0 max-md:flex-col md:max-lg:w-85">
              <input className="w-[14.0625rem] h-10.5 border border-solid border-color-004 block min-w-0 py-2.5 px-4 rounded-[3.2px] flex-1 overflow-clip text-sm leading-5 bg-surface-2 cursor-text max-md:w-[18.3125rem] md:max-lg:w-[13.4375rem] focus:border-primary focus:shadow-[var(--surface-2)_0px_0px_0px_0px,var(--clr-9)_0px_0px_0px_2px,var(--clr-0)_0px_0px_0px_0px] focus:outline-clr-0 focus:[outline-style:solid] focus:outline-2" data-ditto-id="style-input" data-component="input" placeholder="your@email.com" type="email" value="" />
              <button className="block py-2.5 px-6 rounded-[3.2px] text-surface-2 text-sm font-medium leading-5 text-center whitespace-nowrap text-nowrap bg-color-003 cursor-pointer hover:bg-accent" data-component="button" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-t-border block max-w-320 p-8 max-md:px-4 max-md:max-w-none md:max-lg:max-w-192 2xl:max-w-344 2xl:mx-68">
        <div className="flex justify-between items-center">
          <a className="flex items-center cursor-pointer" data-component="link" href="/">
            <div className="flex items-center gap-4 justify-items-center [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace]">
              <img className="w-auto block max-w-full overflow-clip aspect-[auto_193/34] align-middle [filter:invert(1)] h-20 max-md:h-12" data-component="image" alt="adlibrary.com Logo" height="34" src="/assets/cloned/images/5163bf618313.png" width="193" />
              <span className="block whitespace-nowrap text-nowrap max-md:text-sm max-md:leading-5">
                adlibrary.com
              </span>
            </div>
          </a>
          <button className="flex py-2 px-3 rounded-sm justify-between items-center gap-2 text-center cursor-pointer h-10 w-auto max-md:pl-0 2xl:shadow-[var(--surface-2)_0px_0px_0px_2px,var(--clr-4)_0px_0px_0px_4px,var(--clr-0)_0px_0px_0px_0px] focus:shadow-[var(--surface-2)_0px_0px_0px_2px,var(--clr-4)_0px_0px_0px_4px,var(--clr-0)_0px_0px_0px_0px] focus:outline-clr-0 focus:[outline-style:solid] focus:outline-2" data-ditto-id="menu-trigger-select-a-theme" data-component="select" aria-autocomplete="none" aria-controls="radix-_R_15b9fivb_" aria-expanded="false" aria-label="Select a theme" dir="ltr" role="combobox" type="button">
            <span className="overflow-hidden pointer-events-none line-clamp-1">
              Auto
            </span>
            <Icon10 />
          </button>
        </div>
        <nav className="grid mt-8 gap-y-3 gap-x-8 grid-cols-4 max-md:grid-cols-2" data-component="nav">
          {navLinkData.map((d, i) => <NavLink key={i} d={d} />)}
        </nav>
        <div className="border-t border-solid border-t-border grid mt-8 pt-6 gap-8 grid-cols-4 max-md:grid-cols-2">
          <div className="block">
            <h4 className="block mb-3 text-muted-foreground text-sm font-semibold leading-5 tracking-[0.7px] uppercase" data-component="heading">
              Ad Platforms
            </h4>
            <ul className="block text-sm leading-5 [list-style-type:none] list-outside">
              {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h4 className="block mb-3 text-muted-foreground text-sm font-semibold leading-5 tracking-[0.7px] uppercase" data-component="heading">
              Browse Ads
            </h4>
            <ul className="block text-sm leading-5 [list-style-type:none] list-outside">
              {listRow5Data2.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles2[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h4 className="block mb-3 text-muted-foreground text-sm font-semibold leading-5 tracking-[0.7px] uppercase" data-component="heading">
              Ads by Country
            </h4>
            <ul className="block text-sm leading-5 [list-style-type:none] list-outside">
              {listRow5Data3.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles3[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h4 className="block mb-3 text-muted-foreground text-sm font-semibold leading-5 tracking-[0.7px] uppercase" data-component="heading">
              Industries
            </h4>
            <ul className="block text-sm leading-5 [list-style-type:none] list-outside">
              {listRow5Data4.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles4[i]} />)}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-t-border block max-w-320 py-6 px-8 max-md:px-4 max-md:max-w-none md:max-lg:max-w-192 2xl:max-w-344 2xl:mx-68">
        <div className="w-full block max-w-md">
          <p className="block mb-2 text-muted-foreground text-sm leading-5">
            Search pages, articles, and resources on this site
          </p>
          <form className="flex gap-2">
            <div className="block relative flex-1">
              <Icon11 />
              <input className="w-full h-9.5 border border-solid border-border inline-block py-2 pr-3 pl-9 rounded-[1.2px] overflow-clip text-sm leading-5 cursor-text focus:border-primary focus:shadow-[var(--surface-2)_0px_0px_0px_0px,var(--primary)_0px_0px_0px_1px,var(--clr-0)_0px_0px_0px_0px] focus:outline-clr-0 focus:[outline-style:solid] focus:outline-2" data-ditto-id="style-input-2" data-component="input" placeholder="Search this site..." type="search" value="" />
            </div>
            <button className="border border-solid border-foreground block py-2 px-4 rounded-[1.2px] text-sm leading-5 text-center cursor-pointer hover:bg-primary hover:border-primary hover:text-surface hover:outline-surface hover:[text-decoration-color:var(--surface)]" data-component="button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-solid border-t-border block max-w-320 py-4 px-8 max-md:px-4 max-md:max-w-none md:max-lg:max-w-192 2xl:max-w-344 2xl:mx-68">
        <p className="block text-muted-foreground text-sm leading-5">
          © 2026 AdLibrary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
