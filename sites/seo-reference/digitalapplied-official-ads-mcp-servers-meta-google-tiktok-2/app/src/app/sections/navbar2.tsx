import ListRow from "../components/list-row";
import { listRowData as listRowDataContent } from "../content";
/** Navbar2 section. */
export default function Navbar2({ listRowData = listRowDataContent } = {}) {
  return (
    <nav className="border-b border-solid border-b-surface-5 block text-color-004 bg-foreground" data-component="nav" aria-label="Breadcrumb">
      <ol className="flex max-w-330 py-3.5 px-8 items-center gap-2 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.1px] uppercase [list-style-type:none] list-outside mx-auto max-md:px-4">
        {listRowData.map((d, i) => <ListRow key={i} d={d} />)}
        <li className="flex items-center gap-2">
          <span className="block text-background">
            Official Ads MCP Servers
          </span>
        </li>
      </ol>
    </nav>
  );
}
