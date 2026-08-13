import ListRow, { type ListRowData } from "../components/list-row";
import { ListRow_styles } from "../_styles";
const ListRow_data: ListRowData[] = [
    { text: "1", text2: "1.98T live backlinks, 8B+ Google keywords, 577M Google SERPs pool." },
    { text: "2", text2: "Pricing starts at $50.00/mo." },
    { text: "3", text2: "Headquartered in Tallinn, Estonia, founded 2016." }
];
/** Tl Dr Our section. */
export default function TlDrOurSection({ listRowData = ListRow_data } = {}) {
  return (
    <section className="block mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-clr-9" id="key-takeaways">
      <h2 className="flex mb-3.5 items-center gap-2.5 text-lg [font-weight:650] leading-[1.3125rem] tracking-[-0.18px]" data-component="heading">
        <span className="block py-1 px-[0.5625rem] rounded-[5px] text-surface text-[0.6875rem] font-bold leading-[0.8125rem] tracking-[0.66px] bg-primary">
          TL;DR
        </span>
        Our verdict on DataForSEO, in 3 facts
      </h2>
      {" "}
      <ul className="grid gap-2.5 [list-style-type:none] list-outside grid-cols-[repeat(auto-fit,_minmax(294px,_1fr))]">
        {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
      </ul>
      {" "}
    </section>
  );
}
