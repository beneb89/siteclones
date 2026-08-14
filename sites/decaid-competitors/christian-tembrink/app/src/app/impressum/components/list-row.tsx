export type ListRowData = {
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item">
      <a className="h-11 block absolute -top-12.5 inset-x-0 py-[0.8125rem] rounded-lg text-color-005 [font-family:'Open_Sans',_sans-serif] font-bold text-center cursor-pointer" data-component="link" href="/impressum">
        {d.label}
      </a>
    </li>
  );
}
