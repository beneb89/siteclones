import Tile from "../components/tile";
import ListRow from "../components/list-row";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
import { Tile_meta, ListRow_meta } from "../ditto-meta";
import { Tile_styles, ListRow_styles, ListRow2_styles } from "../_styles";
import { tileData as tileDataContent, listRowData as listRowDataContent } from "../content";
const ListRow2_data: ListRow2Data[] = [
    { id: "menu-item-96757", href: "https://chat.dataforseo.com/", label: "AI Assistant" },
    { id: "menu-item-6211", href: "/contact", label: "Contact us" },
    { id: "menu-item-96758", href: "https://app.dataforseo.com/signin", label: "Login" }
];
/** Top navigation bar. */
export default function Navbar({ tileData = tileDataContent, listRowData = listRowDataContent, listRow2Data = ListRow2_data } = {}) {
  return (
    <header className="border-b border-solid border-b-surface-2 block relative z-1000 bg-background">
      <div className="block text-background text-xs leading-[1.1875rem] bg-clr-0">
        <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="h-10 min-h-10 flex justify-between items-center max-md:h-[3.1rem] max-lg:justify-center">
            <div className="block">
              <a className="inline-block py-1 px-5 rounded-[20px] text-clr-0 text-[0.8125rem] font-medium leading-[1.3125rem] bg-color-003 cursor-pointer hover:transform-[matrix(1.01921,0,0,1.01921,0,0)] focus:transform-[matrix(1.00032,0,0,1.00032,0,0)]" data-component="link" href="/apis/ai-optimization-api/llm-mentions-api">
                {"Your API for data-powered LLM Brand Monitoring >>"}
              </a>
            </div>
            <nav className="flex items-center gap-5 max-lg:hidden" data-component="nav">
              {tileData.map((d, i) => <Tile key={i} d={d} meta={Tile_meta[i]} styles={Tile_styles[i]} />)}
            </nav>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="block">
        <div className="flex relative max-w-320 py-4 px-[2.4rem] justify-between items-center mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
          <div className="flex items-center">
            <a className="h-8 block text-color-003 font-semibold cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/">
              {" "}
              <img className="w-54.5 h-8 block max-w-full overflow-clip aspect-[auto_429/63] align-middle" data-component="image" alt="DataForSEO" height="63" src="/assets/cloned/images/5fa9c05c43af.png" width="429" />
              {" "}
            </a>
            {" "}
          </div>
          {" "}
          <nav className="w-[36.1875rem] block mr-8 ml-[251.3px] transform-[none] max-md:w-[23.4375rem] max-lg:fixed max-lg:top-25.5 max-lg:bottom-0 max-lg:left-0 max-lg:z-1 max-lg:invisible max-lg:min-w-0 max-lg:p-6 max-lg:shrink-0 max-lg:overflow-x-hidden max-lg:overflow-y-auto max-lg:bg-background max-md:transform-[matrix(1,0,0,1,-375,0)] max-lg:mx-0 md:max-lg:w-192 md:max-lg:transform-[matrix(1,0,0,1,-768,0)] 2xl:ml-[232.1px]" data-component="nav">
            <ul className="flex justify-center items-center [list-style-type:none] list-outside max-lg:invisible" id="menu-main-dfs-gutenberg">
              {listRowData.map((d, i) => <ListRow key={i} d={d} meta={ListRow_meta[i]} styles={ListRow_styles[i]} />)}
            </ul>
            {" "}
            <div className="hidden max-lg:h-[25.025rem] max-lg:border-t max-lg:border-solid max-lg:border-t-surface-2 max-lg:block max-lg:mt-8 max-lg:pt-8">
              <div className="flex mb-6 flex-col gap-3 max-lg:h-[3.15rem]">
                <a className="flex relative z-1 min-w-0 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-color-001 text-sm font-extrabold leading-[1.375rem] uppercase bg-color-003 cursor-pointer max-lg:h-[3.15rem] before:content-[''] before:block before:absolute before:top-1/2 before:left-1/2 before:-z-1 before:w-75 before:h-75 before:bg-clr-1 before:rounded-tl-[50%] max-lg:before:top-[1.575rem] max-md:before:right-[-136.5px] max-lg:before:-bottom-[17.175rem] max-md:before:left-[163.5px] max-lg:before:transform-[matrix(0,0,0,0,-150,-150)] max-lg:before:origin-[150px_150px] md:max-lg:before:right-15 md:max-lg:before:left-90" data-ditto-id="style-a" href="https://app.dataforseo.com/register">
                  Try for free
                </a>
                {" "}
              </div>
              {" "}
              <ul className="block [list-style-type:none] list-outside max-lg:h-[18.3125rem]" id="menu-top-bar-menu-1">
                <li className="border-b border-solid border-b-surface-2 list-item max-lg:h-[3.0625rem]" id="menu-item-96745">
                  <a className="block py-3 text-muted-foreground text-[0.9375rem] font-semibold leading-6 cursor-pointer" href="https://docs.dataforseo.com/v3">
                    API Docs
                  </a>
                </li>
                <li className="border-b border-solid border-b-surface-2 grid max-lg:h-[3.0625rem] max-lg:grid-cols-1" id="menu-item-96746">
                  <a className="flex min-w-0 py-3 justify-between items-center text-muted-foreground text-[0.9375rem] font-semibold leading-6 cursor-pointer max-lg:h-12 after:content-[''] after:block after:w-[0.4375rem] after:h-[0.4375rem] after:-mt-[0.1875rem] after:ml-2 max-lg:after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] max-lg:after:origin-[3.5px_3.5px]" href="/free-seo-stats">
                    Free Tools
                  </a>
                  {" "}
                </li>
                <li className="border-b border-solid border-b-surface-2 grid max-lg:h-[3.0625rem] max-lg:grid-cols-1" id="menu-item-96752">
                  <a className="flex min-w-0 py-3 justify-between items-center text-muted-foreground text-[0.9375rem] font-semibold leading-6 cursor-pointer max-lg:h-12 after:content-[''] after:block after:w-[0.4375rem] after:h-[0.4375rem] after:-mt-[0.1875rem] after:ml-2 max-lg:after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] max-lg:after:origin-[3.5px_3.5px]" href="/about-us">
                    About us
                  </a>
                  {" "}
                </li>
                {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
              </ul>
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
          <div className="flex items-center gap-4 max-lg:hidden">
            <a className="h-[3.15rem] border-2 border-solid border-color-003 flex relative z-1 py-3 px-6 rounded-sm justify-center items-center gap-[0.4375rem] overflow-hidden text-color-003 text-sm font-bold leading-[1.375rem] cursor-pointer whitespace-nowrap before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-[59.5px] before:-z-1 before:w-0 before:h-[2.9rem] before:bg-color-003 before:opacity-0 before: before:origin-[0px_23.1953px] max-lg:before:left-1/2 max-lg:before:h-full max-lg:before:right-auto max-lg:before:bottom-auto max-lg:before:transform-[none] max-lg:before:origin-[initial] hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)] focus:text-clr-22 focus:outline-clr-22 focus:[text-decoration-color:var(--clr-22)]" data-ditto-id="style-button" data-component="button" href="https://app.dataforseo.com/register">
              Try for free
            </a>
          </div>
          {" "}
          <button className="w-10 h-10 hidden relative z-2 min-w-0 rounded-[7px] flex-col justify-center items-center shrink-0 gap-[0.4375rem] text-sm font-medium leading-[1.375rem] text-center cursor-pointer max-lg:flex max-md:ml-[85.1px] md:max-lg:ml-[29rem]">
            <span className="w-6 h-0.5 block absolute top-3 bg-color-001 max-lg:min-w-0" />
            {" "}
            <span className="w-6 h-0.5 block absolute bg-color-001 max-lg:min-w-0" />
            {" "}
            <span className="w-6 h-0.5 block absolute top-6.5 bg-color-001 max-lg:min-w-0" />
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
