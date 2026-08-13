import ListRow2 from "../components/list-row2";
import ListRow3 from "../components/list-row3";
import ListRow4 from "../components/list-row4";
import TextLink2 from "../components/text-link2";
import { ListRow2_styles, ListRow2_styles2, ListRow3_styles, ListRow2_styles3, ListRow4_styles } from "../_styles";
import { listRow2Data as listRow2DataContent, listRow2Data2 as listRow2Data2Content, listRow3Data as listRow3DataContent, listRow2Data3 as listRow2Data3Content, listRow4Data as listRow4DataContent, textLink2Data as textLink2DataContent } from "../content";
/** Site footer. */
export default function Footer({ listRow2Data = listRow2DataContent, listRow2Data2 = listRow2Data2Content, listRow3Data = listRow3DataContent, listRow2Data3 = listRow2Data3Content, listRow4Data = listRow4DataContent, textLink2Data = textLink2DataContent } = {}) {
  return (
    <footer className="block text-color-002 [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_'JetBrains_Mono',_ui-monospace,_monospace,_ui-monospace,_SFMono-Regular,_monospace] bg-color-006">
      <div className="block mx-auto py-12 px-6 max-w-5xl">
        <div className="grid mb-8 mx-auto gap-8 grid-cols-5 max-w-4xl max-md:grid-cols-2">
          <div className="block">
            <h3 className="block mb-4 text-foreground [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] font-semibold leading-5 tracking-[0.7px] uppercase" data-component="heading">
              Product
            </h3>
            <ul className="block leading-5 [list-style-type:none] list-outside">
              {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h3 className="block mb-4 text-foreground [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] font-semibold leading-5 tracking-[0.7px] uppercase" data-component="heading">
              Platforms
            </h3>
            <ul className="block leading-5 [list-style-type:none] list-outside">
              {listRow2Data2.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles2[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h3 className="block mb-4 text-foreground [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] font-semibold leading-5 tracking-[0.7px] uppercase" data-component="heading">
              Guides
            </h3>
            <ul className="block leading-5 [list-style-type:none] list-outside">
              {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h3 className="block mb-4 text-foreground [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] font-semibold leading-5 tracking-[0.7px] uppercase" data-component="heading">
              Compare
            </h3>
            <ul className="block leading-5 [list-style-type:none] list-outside">
              {listRow2Data3.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles3[i]} />)}
            </ul>
          </div>
          <div className="block">
            <h3 className="block mb-4 text-foreground [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] font-semibold leading-5 tracking-[0.7px] uppercase" data-component="heading">
              Resources
            </h3>
            <ul className="block leading-5 [list-style-type:none] list-outside">
              {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
            </ul>
          </div>
        </div>
        <div className="border-t border-solid border-t-clr-0 flex pt-8 justify-between items-center leading-5 max-md:flex-col">
          <p className="block text-muted-foreground">
            © 2026 Synter. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 max-md:mt-4">
            {textLink2Data.map((d, i) => <TextLink2 key={i} d={d} />)}
          </div>
        </div>
      </div>
    </footer>
  );
}
