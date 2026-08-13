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
    <header className="box-content border-b border-solid border-b-clr-0 block relative z-1000 bg-background">
      <div className="box-content block text-background text-[0.75rem] bg-color-003">
        <div className="box-content block max-w-320 px-[2.4rem] max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:mx-68 2xl:px-12">
          <div className="box-content h-10 min-h-10 flex justify-between items-center max-lg:justify-center">
            <div className="box-content block">
              <a className="box-content inline-block py-1 px-5 rounded-[20px] text-color-003 text-[0.8125rem] bg-accent cursor-pointer whitespace-nowrap max-md:px-2.5 hover:transform-[matrix(1.01967,0,0,1.01967,0,0)] focus:transform-[matrix(1.00032,0,0,1.00032,0,0)]" data-component="link" href="/apis/ai-optimization-api/llm-mentions-api">
                {"Your API for data-powered LLM Brand Monitoring >>"}
              </a>
            </div>
            <nav className="box-content flex items-center gap-5 max-lg:hidden" data-component="nav">
              {tileData.map((d, i) => <Tile key={i} d={d} meta={Tile_meta[i]} styles={Tile_styles[i]} />)}
            </nav>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="box-content block">
        <div className="box-content flex relative max-w-320 py-4 px-[2.4rem] justify-between items-center max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:mx-68 2xl:px-12">
          <div className="box-content flex items-center">
            <a className="box-content h-[2.4375rem] block text-accent cursor-pointer" data-component="link" href="/">
              {" "}
              <img className="box-content w-54.5 h-8 inline max-w-full overflow-clip aspect-[auto_429/63]" data-component="image" alt="DataForSEO" height="63" src="/assets/cloned/images/5fa9c05c43af.png" width="429" />
              {" "}
            </a>
            {" "}
          </div>
          {" "}
          <nav className="box-content w-[36.1875rem] block mr-8 ml-[251.3px] transform-[none] max-md:w-[20.4375rem] max-lg:fixed max-lg:top-25.5 max-lg:bottom-0 max-lg:left-0 max-lg:z-1 max-lg:invisible max-lg:min-w-0 max-lg:p-6 max-lg:shrink-0 max-lg:overflow-x-hidden max-lg:overflow-y-auto max-lg:bg-background max-md:transform-[matrix(1,0,0,1,-375,0)] max-lg:mx-0 md:max-lg:w-180 md:max-lg:transform-[matrix(1,0,0,1,-768,0)] 2xl:ml-[328.1px]" data-component="nav">
            <ul className="box-content flex justify-center items-center [list-style-type:none] list-outside max-lg:invisible" id="menu-main-dfs-gutenberg">
              {listRowData.map((d, i) => <ListRow key={i} d={d} meta={ListRow_meta[i]} styles={ListRow_styles[i]} />)}
            </ul>
            {" "}
            <div className="box-content hidden max-lg:h-90.5 max-lg:border-t max-lg:border-solid max-lg:border-t-clr-0 max-lg:block max-lg:mt-8 max-lg:pt-8">
              <div className="box-content flex mb-6 flex-col gap-3 max-lg:h-[3.1875rem]">
                <a className="box-content flex relative z-1 min-w-0 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-color-007 font-extrabold uppercase bg-accent cursor-pointer max-lg:h-[1.4375rem]" href="https://app.dataforseo.com/register">
                  Try for free
                </a>
                {" "}
              </div>
              {" "}
              <ul className="box-content block [list-style-type:none] list-outside max-lg:h-[17.9375rem]" id="menu-top-bar-menu-1">
                <li className="box-content border-b border-solid border-b-clr-0 list-item max-lg:h-[2.9375rem]" id="menu-item-96745">
                  <a className="box-content block py-3 text-clr-1 text-[0.9375rem] cursor-pointer" href="https://docs.dataforseo.com/v3">
                    API Docs
                  </a>
                </li>
                <li className="box-content border-b border-solid border-b-clr-0 grid max-lg:h-[2.9375rem] max-lg:grid-cols-1" id="menu-item-96746">
                  <a className="box-content flex min-w-0 py-3 justify-between items-center text-clr-1 text-[0.9375rem] cursor-pointer max-lg:h-[1.4375rem] after:content-[''] after:block after:w-[0.4375rem] after:h-[0.4375rem] after:-mt-[0.1875rem] after:ml-2 max-lg:after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] max-lg:after:origin-[4.5px_4.5px]" href="/free-seo-stats">
                    Free Tools
                  </a>
                  {" "}
                </li>
                <li className="box-content border-b border-solid border-b-clr-0 grid max-lg:h-[2.9375rem] max-lg:grid-cols-1" id="menu-item-96752">
                  <a className="box-content flex min-w-0 py-3 justify-between items-center text-clr-1 text-[0.9375rem] cursor-pointer max-lg:h-[1.4375rem] after:content-[''] after:block after:w-[0.4375rem] after:h-[0.4375rem] after:-mt-[0.1875rem] after:ml-2 max-lg:after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] max-lg:after:origin-[4.5px_4.5px]" href="/about-us">
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
          <div className="box-content flex items-center gap-4 max-lg:hidden">
            <a className="box-content h-[1.4375rem] border-2 border-solid border-accent block relative z-1 py-3 px-6 rounded-sm overflow-hidden text-accent font-bold cursor-pointer whitespace-nowrap before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-[59.5px] before:-z-1 before:w-0 before:h-[2.9375rem] before:bg-accent before: before:origin-[0px_23.5px] max-lg:before:left-1/2 max-lg:before:h-full max-lg:before:right-auto max-lg:before:bottom-auto max-lg:before:transform-[none] max-lg:before:origin-[initial] hover:text-clr-9 hover:outline-clr-9 hover:[text-decoration-color:var(--clr-9)] focus:text-clr-13 focus:outline-clr-13 focus:[text-decoration-color:var(--clr-13)]" data-component="link" href="https://app.dataforseo.com/register">
              Try for free
            </a>
          </div>
          {" "}
          <button className="w-10 h-10 hidden relative z-2 min-w-0 flex-col justify-center items-center shrink-0 text-color-003 [font-family:Arial] text-[0.8125rem] font-normal leading-[0.9375rem] text-center cursor-pointer max-lg:flex max-md:ml-[85.1px] md:max-lg:ml-[29rem]">
            <span className="box-content w-6 h-0.5 block absolute top-3 bg-color-007 max-lg:min-w-0" />
            {" "}
            <span className="box-content w-6 h-0.5 block absolute bg-color-007 max-lg:min-w-0" />
            {" "}
            <span className="box-content w-6 h-0.5 block absolute top-6.5 bg-color-007 max-lg:min-w-0" />
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
