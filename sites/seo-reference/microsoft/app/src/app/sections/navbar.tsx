import Tile, { type TileData } from "../components/tile";
import TextLink, { type TextLinkData } from "../components/text-link";
import { Tile_meta } from "../ditto-meta";
const Tile_data: TileData[] = [
    { id: "primary-nav-item-1378", label: "Get started " },
    { id: "C2_Solutions", label: "Solutions " },
    { id: "primary-nav-item-137", label: "Tools " },
    { id: "C1_LearningAndResources", label: "Resources " }
];
const TextLink_data: TextLinkData[] = [
    { href: "/en/blog/", id: "primary-nav-item-6", label: "Blog" },
    { href: "/en/support/", id: "primary-nav-item-6", label: "Support" },
    { href: "/en/sign-in", label: "Sign In" }
];
/** Top navigation bar. */
export default function Navbar({ tileData = Tile_data, textLinkData = TextLink_data } = {}) {
  return (
    <div className="h-24.5 block sticky top-0 float-left z-100 max-md:h-34.5 md:max-lg:h-29.5">
      <div className="h-full block" id="experiencefragment-6495d24af2">
        <div className="h-full flex max-w-full flex-col" id="container-ac31516f2f">
          <div className="h-full block before:content-['_'] before:table before:w-0 before:h-0 before:text-color-001 before:text-base before:leading-[1.3125rem] max-lg:before:text-sm max-lg:before:leading-[1.125rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-001 after:text-base after:leading-[1.3125rem] max-lg:after:text-sm max-lg:after:leading-[1.125rem]">
            <div className="w-full block float-left">
              <div className="block bg-background">
                <uhf-header class="inline">
                  {" "}
                  <a className="w-px h-px block absolute top-0 left-0 -z-100 -m-px overflow-hidden text-primary underline whitespace-nowrap text-nowrap cursor-pointer hover:border-clr-7 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)] focus:bg-clr-8 focus:border-foreground focus:border focus:text-clr-9 focus:outline-clr-9 focus:[text-decoration-color:var(--clr-9)]" href="#main-content">
                    Skip to main content
                  </a>
                  {" "}
                  <uhf-cookie-banner class="inline">
                    {" "}
                    <div className="block" id="msccBannerV2" />
                    {" "}
                  </uhf-cookie-banner>
                  {" "}
                  <header className="block mb-0.5 px-16 text-foreground bg-background max-lg:flex max-lg:flex-col max-lg:mb-0 max-lg:px-0 2xl:px-24">
                    <div className="h-13.5 flex max-w-360 items-center gap-3 text-color-001 max-lg:border-b max-lg:border-solid max-lg:border-b-clr-0 max-lg:px-[1.5625rem] max-lg:max-w-none max-lg:gap-[initial] 2xl:mx-36">
                      <div className="hidden max-lg:flex max-lg:items-center max-lg:flex-1 max-lg:gap-2.5">
                        <uhf-search class="hidden" placeholder="Search">
                          {" "}
                          <button className="hidden max-lg:h-13.5 max-lg:flex max-lg:px-2.5 max-lg:justify-center max-lg:items-center max-lg:gap-1 max-lg:text-foreground max-lg:text-[0.8125rem] max-lg:leading-[1.3125rem] max-lg:text-center max-lg:whitespace-nowrap max-lg:text-nowrap max-lg:cursor-pointer" aria-label="Search" title="Search">
                            <span className="hidden">
                              Search
                            </span>
                            {" "}
                            <uhf-icon class="hidden max-lg:block">
                              <i className="hidden max-lg:inline-block max-lg:[font-family:FabricMDL2Icons] max-lg:text-[1rem] before:content-[''] before:text-foreground before:text-base before:leading-[1.3125rem] before:text-center 2xl:before:hidden" />
                              {" "}
                            </uhf-icon>
                            {" "}
                          </button>
                          {" "}
                        </uhf-search>
                        {" "}
                      </div>
                      <uhf-brand class="flex max-lg:justify-center max-lg:items-center max-lg:flex-1">
                        <div className="contents min-w-0">
                          <div className="contents" itemProp="logo">
                            <a className="w-48 h-13.5 flex justify-center items-center text-primary underline cursor-pointer max-md:w-[112.5px] hover:border-clr-7 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)]" data-ditto-id="style-microsoft-advertising" data-component="link" aria-label="Microsoft Advertising" href="/en">
                              {" "}
                            </a>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </uhf-brand>
                      <div className="hidden max-lg:flex max-lg:justify-end max-lg:items-center max-lg:flex-1 max-lg:gap-2.5">
                        <a className="hidden max-lg:h-8 max-lg:flex max-lg:max-h-8.5 max-lg:p-[0.5625rem] max-lg:rounded-xs max-lg:justify-center max-lg:items-center max-lg:text-background max-lg:text-[0.8125rem] max-lg:font-semibold max-lg:leading-3.5 max-lg:bg-foreground max-lg:cursor-pointer" href="/en/sign-up" id="primary-nav-item-cta-signup">
                          {" Sign up "}
                        </a>
                      </div>
                      {" "}
                      <uhf-contextual-nav class="block flex-1 max-lg:hidden">
                        <uhf-contextual-nav-desktop class="inline max-lg:hidden">
                          {" "}
                          <nav className="flex items-center max-lg:hidden" data-component="nav" aria-label="Contextual menu" role="navigation">
                            <uhf-overflow-menu class="contents min-w-0 max-lg:hidden">
                              <div className="contents max-lg:hidden">
                                {" "}
                                <div className="contents max-lg:hidden">
                                  {tileData.map((d, i) => <Tile key={i} d={d} meta={Tile_meta[i]} />)}
                                  {textLinkData.map((d, i) => <TextLink key={i} d={d} />)}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </uhf-overflow-menu>
                            {" "}
                          </nav>
                          {" "}
                        </uhf-contextual-nav-desktop>
                        {" "}
                      </uhf-contextual-nav>
                      {" "}
                      <uhf-actions class="flex items-center gap-2.5 max-lg:hidden">
                        <uhf-search class="contents min-w-0 max-lg:hidden" placeholder="Search">
                          {" "}
                          <button className="h-13.5 flex px-3 justify-center items-center gap-1 text-foreground text-[0.8125rem] leading-[1.3125rem] text-center whitespace-nowrap text-nowrap cursor-pointer max-lg:hidden hover:underline" data-component="button" aria-label="Search" title="Search">
                            <span className="hidden min-w-0 text-color-001 leading-[1.0625rem] 2xl:block">
                              Search
                            </span>
                            {" "}
                            <uhf-icon class="block ml-0.5 max-lg:hidden">
                              <i className="inline-block [font-family:FabricMDL2Icons] text-[1rem] max-lg:hidden before:content-[''] before:text-foreground before:text-base before:leading-[1.3125rem] before:text-center max-lg:before:hidden" />
                              {" "}
                            </uhf-icon>
                            {" "}
                          </button>
                          {" "}
                        </uhf-search>
                        {" "}
                        <a className="h-8.5 border border-solid border-foreground flex max-h-8.5 my-px mx-2.5 p-[0.5625rem] rounded-xs justify-center items-center overflow-x-hidden overflow-y-auto text-background text-[0.8125rem] font-semibold leading-3.5 bg-foreground cursor-pointer max-lg:hidden hover:underline focus:[outline-style:dashed] focus:outline-1 focus:underline" data-component="button" href="/en/sign-up" id="primary-nav-item-cta-signup">
                          {" Sign up "}
                        </a>
                      </uhf-actions>
                      {" "}
                    </div>
                    <div className="hidden max-lg:h-8.5 max-lg:border-b max-lg:border-solid max-lg:border-b-clr-0 max-lg:flex max-lg:px-[1.5625rem] max-lg:items-center max-lg:text-color-001">
                      <uhf-contextual-nav class="hidden max-lg:block max-lg:flex-1">
                        <uhf-contextual-nav-mobile class="hidden max-lg:inline">
                          {" "}
                          <button className="hidden max-lg:h-8.5 max-lg:flex max-lg:px-1 max-lg:justify-center max-lg:items-center max-lg:gap-2 max-lg:text-foreground max-lg:text-[0.9375rem] max-lg:font-semibold max-lg:leading-4.5 max-lg:text-center max-lg:underline max-lg:cursor-pointer">
                            {"Advertising "}
                            <uhf-icon class="hidden max-lg:block max-lg:relative max-lg:top-0.5 max-lg:-bottom-0.5">
                              <i className="hidden max-lg:inline-block max-lg:[font-family:FabricMDL2Icons] max-lg:text-xs max-lg:font-normal max-lg:leading-[0.875rem] before:content-[''] before:text-foreground before:text-xs before:leading-[0.875rem] before:text-center 2xl:before:hidden" />
                              {" "}
                            </uhf-icon>
                            {" "}
                          </button>
                          {" "}
                          <nav className="hidden max-lg:flex max-lg:items-center" aria-label="Contextual menu" role="navigation">
                            {" "}
                          </nav>
                          {" "}
                        </uhf-contextual-nav-mobile>
                        {" "}
                      </uhf-contextual-nav>
                      {" "}
                    </div>
                    {" "}
                  </header>
                  {" "}
                  <uhf-site-promo-banner class="block">
                    <div className="h-10.5 min-h-10.5 flex justify-center items-center text-background [font-family:'Segoe_UI',_SegoeUI,_'Helvetica_Neue',_Helvetica,_Arial,_sans-serif] text-[0.9375rem] leading-5 text-center bg-primary max-md:h-12.5 max-lg:min-h-7 md:max-lg:h-7.5" aria-label="Site promotional banner" role="region">
                      <a className="w-full h-full block py-2.5 px-[0.3125rem] cursor-pointer max-lg:py-[0.3125rem] hover:underline focus:[outline-style:dashed] focus:outline-1 focus:underline" data-component="link" aria-label="Experience new growth possibilities with Microsoft Advertising today" href="/en/sign-up">
                        {"Experience new growth possibilities with Microsoft Advertising today >"}
                      </a>
                      {" "}
                    </div>
                    {" "}
                  </uhf-site-promo-banner>
                  {" "}
                </uhf-header>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
