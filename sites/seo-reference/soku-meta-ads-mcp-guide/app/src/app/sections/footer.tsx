import Icon3 from "../svgs/svg-icon3";
import ListRow5 from "../components/list-row5";
import ListRow6 from "../components/list-row6";
import Icon4 from "../svgs/svg-icon4";
import { ListRow5_styles, ListRow5_styles2, ListRow5_styles3 } from "../_styles";
import { listRow5Data as listRow5DataContent, listRow5Data2 as listRow5Data2Content, listRow5Data3 as listRow5Data3Content, listRow6Data as listRow6DataContent } from "../content";
/** Site footer. */
export default function Footer({ listRow5Data = listRow5DataContent, listRow5Data2 = listRow5Data2Content, listRow5Data3 = listRow5Data3Content, listRow6Data = listRow6DataContent } = {}) {
  return (
    <footer className="block text-background bg-clr-3">
      <div className="block mx-auto pt-16 pb-12 px-6 max-w-6xl max-md:pt-12 max-md:pb-10 max-md:px-5">
        <div className="grid gap-12 grid-cols-[1.333fr_1.111fr_1.222fr_1.111fr_1fr] max-md:gap-10 max-md:grid-cols-1">
          <div className="block">
            <a className="inline [font-family:editorialNew,_'editorialNew_Fallback'] text-xl font-bold italic leading-7 tracking-[-0.5px] cursor-pointer" data-component="link" href="/">
              Soku AI
            </a>
            <p className="block mt-4 text-color-004 leading-6.5">
              Your always-on AI marketing agent.
            </p>
            <div className="flex mt-5 items-center gap-3">
              <a className="flex rounded-[10px] justify-center items-center text-color-004 bg-clr-4 cursor-pointer h-9 w-9 hover:bg-clr-5 hover:text-background hover:[text-decoration-color:var(--background)]" data-component="link" aria-label="Slack" href="https://join.slack.com/t/soku-talk/shared_invite/zt-3s9i1a4w7-AWlkU3GAiar3wJM4ToYLEg" rel="noopener noreferrer" target="_blank">
                <Icon3 />
              </a>
            </div>
          </div>
          <div className="block">
            <h3 className="block text-color-002 [font-family:editorialNew,_'editorialNew_Fallback'] text-sm font-medium leading-5 tracking-[1.4px] uppercase" data-component="heading">
              Product
            </h3>
            <ul className="block mt-4 [list-style-type:none] list-outside">
              {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h3 className="block text-color-002 [font-family:editorialNew,_'editorialNew_Fallback'] text-sm font-medium leading-5 tracking-[1.4px] uppercase" data-component="heading">
              Solutions
            </h3>
            <ul className="block mt-4 [list-style-type:none] list-outside">
              {listRow5Data2.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles2[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h3 className="block text-color-002 [font-family:editorialNew,_'editorialNew_Fallback'] text-sm font-medium leading-5 tracking-[1.4px] uppercase" data-component="heading">
              Resources
            </h3>
            <ul className="block mt-4 [list-style-type:none] list-outside">
              {listRow5Data3.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles3[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h3 className="block text-color-002 [font-family:editorialNew,_'editorialNew_Fallback'] text-sm font-medium leading-5 tracking-[1.4px] uppercase" data-component="heading">
              Legal
            </h3>
            <ul className="block mt-4 [list-style-type:none] list-outside">
              {listRow6Data.map((d, i) => <ListRow6 key={i} d={d} />)}
              <li className="list-item">
                <button className="inline-block text-color-001 text-center cursor-pointer hover:text-background hover:[text-decoration-color:var(--background)]" data-component="button" type="button">
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-solid border-t-clr-5 flex mt-16 pt-6 flex-wrap items-center gap-2 text-color-002 max-md:mt-12 max-md:text-sm max-md:leading-5">
          <span className="block">
            © 2026 About Intelligence Inc. Soku is a product of About Intelligence Inc.
          </span>
          <span className="block text-clr-6" aria-hidden="true">
            ·
          </span>
          <a className="flex items-center gap-1.5 cursor-pointer hover:text-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="link" href="https://nex.ad/" rel="noopener noreferrer" target="_blank">
            <Icon4 />
            <span className="block">
              A Nexad company
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
