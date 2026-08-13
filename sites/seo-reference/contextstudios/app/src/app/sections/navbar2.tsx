import ListRow from "../components/list-row";
import { listRowData as listRowDataContent } from "../content";
/** Navbar2 section. */
export default function Navbar2({ listRowData = listRowDataContent } = {}) {
  return (
    <nav className="border border-solid border-surface block mb-10 p-5 rounded-[14px] bg-color-008" data-component="nav" aria-label="On this page">
      <p className="block mb-2 text-sm font-semibold leading-5">
        On this page
      </p>
      <ul className="flex flex-wrap gap-y-1.5 gap-x-5 text-sm leading-5 [list-style-type:none] list-outside">
        {listRowData.map((d, i) => <ListRow key={i} d={d} />)}
      </ul>
    </nav>
  );
}
