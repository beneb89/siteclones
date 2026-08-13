import Illustration from "../svgs/svg-illustration";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Tile from "../components/tile";
import { Tile_styles } from "../_styles";
import { tileData as tileDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ tileData = tileDataContent } = {}) {
  return (
    <devsite-header class="w-320 h-24 block fixed z-1006 min-w-0 pointer-events-none max-md:w-[23.4375rem] max-lg:h-12 max-lg:shadow-[var(--clr-1)_0px_1px_2px_0px,var(--clr-2)_0px_2px_6px_2px] md:max-lg:w-192 2xl:w-480" role="banner">
      <div className="h-full block pointer-events-none">
        <div className="block relative z-1 bg-surface-3 [pointer-events:all] before:content-[''] before:block before:absolute before:top-0 before:-bottom-88 before:inset-x-0 before:h-100 before:bg-surface-3 before:transform-[matrix(1,0,0,1,0,-400)] before:origin-[640px_200px] max-md:before:origin-[187.5px_200px] md:max-lg:before:origin-[384px_200px] 2xl:before:origin-[960px_200px]">
          <div className="block [pointer-events:all]">
            <div className="flex relative pr-4 pl-6 items-center gap-4 bg-surface-3 [pointer-events:all] max-lg:pl-4 max-lg:gap-2">
              <button className="w-6 h-6 hidden min-w-6 rounded-sm shrink-0 overflow-hidden align-middle text-color-002 [font-family:'Material_Icons'] text-2xl leading-9 text-center whitespace-nowrap text-nowrap [font-feature-settings:'liga'] [background-position:0px_50%] cursor-pointer [pointer-events:all] max-lg:w-10 max-lg:h-12 max-lg:block max-lg:relative max-lg:z-20 max-lg:-ml-1 before:content-['menu'] before:p-2 before:text-color-002 before:text-2xl before:leading-9 before:text-center before:rounded-tl-[50%]" aria-label="Open menu" id="devsite-hamburger-menu" type="button" />
              {" "}
              <div className="h-8 flex my-1.5 items-center shrink-0 [pointer-events:all] max-lg:min-w-0 max-lg:shrink-[initial]">
                <a className="h-9 block text-primary [word-break:break-word] cursor-pointer [pointer-events:all] focus:underline" data-component="link" href="/google-ads/api">
                  {" "}
                  <div className="w-full h-9 flex mr-1 rounded-[50%] justify-center items-center text-color-005 [pointer-events:all]">
                    <picture className="w-8 h-8 block [pointer-events:all]">
                      <img className="w-8 h-8 block min-w-8 max-w-8 overflow-hidden text-[2rem] whitespace-nowrap text-nowrap [pointer-events:all]" data-component="image" alt="Google Ads API" sizes="64px" src="/assets/cloned/svg/735c5093dd4d.svg" srcSet="/assets/cloned/svg/735c5093dd4d.svg" />
                      {" "}
                    </picture>
                    {" "}
                  </div>
                  {" "}
                </a>
                {" "}
                <span className="block max-h-8 overflow-hidden [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-[1.375rem] leading-8 whitespace-nowrap text-nowrap [pointer-events:all]">
                  {" "}
                  <ul className="flex flex-wrap items-center [list-style-type:disc] list-outside [pointer-events:all]">
                    <li className="w-full flex items-center [pointer-events:all]">
                      <a className="h-[2.0625rem] block text-color-002 [word-break:break-word] cursor-pointer [pointer-events:all] max-lg:overflow-hidden hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-color-001 focus:text-color-001 focus:outline-color-001 focus:[text-decoration-color:var(--color-001)]" data-component="link" href="/google-ads/api">
                        {" "}
                        <Illustration />
                        {"Ads API "}
                      </a>
                      {" "}
                    </li>
                  </ul>
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <div className="flex relative items-center grow [pointer-events:all]">
                <div className="block relative z-8 ml-8 flex-1 [pointer-events:all] md:max-lg:ml-0" />
                {" "}
                <devsite-search class="w-50 block relative z-10 my-1.5 ml-6 rounded-sm shrink-0 overflow-hidden align-top text-left [pointer-events:all] max-lg:w-6 max-lg:flex max-lg:ml-2 max-lg:items-center max-lg:[overflow-x:initial] max-lg:[overflow-y:initial]">
                  <form className="block [pointer-events:all] max-lg:grow">
                    <div className="flex items-center [pointer-events:all]">
                      <button className="basis-full shrink-0 h-6 hidden min-w-6 rounded-sm overflow-hidden align-middle text-color-002 [font-family:'Material_Icons'] text-2xl leading-9 text-center whitespace-nowrap text-nowrap [font-feature-settings:'liga'] [background-position:0px_50%] cursor-pointer [pointer-events:all] max-lg:flex max-lg:z-1 max-lg:items-center max-lg:text-muted-foreground before:content-['search'] before:block before:w-6 before:h-9 before:text-muted-foreground before:text-2xl before:leading-9 before:text-center 2xl:before:hidden" aria-label="Open search" type="button" />
                      {" "}
                      <div className="h-9 block rounded-xs bg-surface-2 [pointer-events:all] before:content-[''] before:hidden before:absolute before:-top-114.5 before:-left-1.5 before:-z-1 before:w-[calc(100%_+_12px)] before:h-125 before:bg-surface-3 before:opacity-0 max-lg:before:left-0 max-lg:before:w-auto">
                        <input className="w-full h-9 inline-block max-w-full py-2 pr-2 pl-10 overflow-clip align-middle text-muted-foreground leading-5 text-start bg-surface-2 cursor-text [pointer-events:all] max-lg:p-0 hover:bg-clr-5 hover:bg-[linear-gradient(135deg,_var(--clr-6),_var(--clr-7),_var(--clr-8),_var(--clr-9),_var(--clr-6),_var(--clr-6),_var(--clr-7),_var(--clr-8),_var(--clr-9),_var(--clr-6))] hover:[background-position:95.0387%_95.0387%]" data-ditto-id="style-search" data-component="select" aria-activedescendant="" aria-autocomplete="list" aria-controls="devsite-search-popout-container-id-1" aria-expanded="false" aria-haspopup="listbox" aria-label="Search" name="q" placeholder="Search" role="combobox" type="text" value="" />
                        {" "}
                        <div className="w-6 h-6 block absolute top-1.5 left-2 text-muted-foreground [font-family:'Material_Icons'] text-[1.5rem] whitespace-nowrap text-nowrap [font-feature-settings:'liga'] [pointer-events:all] max-lg:hidden before:content-['search'] before:text-muted-foreground before:text-2xl before:leading-6 before:text-left 2xl:before:hidden" aria-hidden="true">
                          <Icon />
                          {" "}
                        </div>
                        {" "}
                        <div className="w-0 h-0 block absolute top-1.5 left-48 [pointer-events:all] max-lg:hidden" aria-hidden="true">
                          <kbd className="w-6 h-6 block absolute right-0 rounded-lg text-muted-foreground [font-family:'Google_Sans',_Roboto,_Arial,_sans-serif] text-[0.875rem] font-medium text-center bg-surface-3 [pointer-events:all]">
                            /
                          </kbd>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </form>
                  {" "}
                </devsite-search>
                {" "}
                <div className="box-content w-0 h-0 flex absolute right-0 z-9 min-w-0 ml-6 py-1.5 justify-stretch items-center bg-surface-3 pointer-events-none max-lg:[background-position:0px_50%] max-lg:bg-[initial] after:content-[''] after:block after:w-0 after:h-0 max-lg:after:[background-position:0px_50%]" />
              </div>
              {" "}
              <devsite-language-selector class="block relative [pointer-events:all] max-md:hidden" aria-label="Select your language preference.">
                <button className="w-[8.8125rem] h-9 border border-solid border-border flex max-w-38.5 pr-[0.4375rem] pl-[0.6875rem] rounded-sm items-center text-muted-foreground [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] text-sm font-medium leading-9 text-center bg-surface-3 cursor-pointer [pointer-events:all]" data-component="button" aria-controls="language-menu" aria-haspopup="true" type="button">
                  <Icon2 />
                  {" "}
                  <span className="block overflow-hidden whitespace-nowrap text-nowrap [pointer-events:all]">
                    Language
                  </span>
                  {" "}
                  <Icon3 />
                  {" "}
                </button>
                {" "}
              </devsite-language-selector>
              {" "}
              <devsite-user class="block shrink-0 [pointer-events:all]" id="devsite-user">
                <div className="flex justify-end items-center gap-2 [pointer-events:all]">
                  <a className="w-[3.6875rem] h-9 flex min-w-9 px-2 rounded-sm items-center overflow-hidden align-middle text-primary text-sm font-medium leading-9 text-center whitespace-nowrap [word-break:break-word] text-nowrap [background-position:0px_50%] cursor-pointer [pointer-events:all] hover:bg-surface-4 hover:[background-position:0%_0.829797%] focus:bg-surface-4 focus:[background-position:0%_0%]" data-component="link" href={"/_d/signin?continue=https%3A%2F%2Fdevelopers.google.com%2Fgoogle-ads%2Fapi%2Fdocs%2Fapi-policy%2Faccess-levels&prompt=select_account"} id="devsite-signin-btn">
                    {" Sign in "}
                  </a>
                </div>
              </devsite-user>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block relative bg-color-005 shadow-[var(--clr-1)_0px_1px_2px_0px,var(--clr-2)_0px_2px_6px_2px] [pointer-events:all]">
          <div className="block [pointer-events:all]">
            <div className="min-h-12 flex pr-6 justify-between items-center [pointer-events:all] max-lg:hidden">
              <devsite-tabs class="h-12 flex relative flex-1 [pointer-events:all] max-lg:hidden">
                <nav className="h-full flex absolute top-0 right-0 left-1.5 min-w-0 overflow-hidden [pointer-events:all]" data-component="nav" aria-label="Lower tabs">
                  {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
                </nav>
                {" "}
              </devsite-tabs>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </devsite-header>
  );
}
