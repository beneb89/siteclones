export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item mt-3 mb-2 pl-2 max-md:mt-[10.7px] max-md:pl-[7.1px]">
      <strong className="inline text-color-001 font-semibold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
