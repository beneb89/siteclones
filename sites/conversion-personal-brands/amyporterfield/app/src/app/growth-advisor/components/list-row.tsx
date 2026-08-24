export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="box-content list-item ml-[0.9375rem] pl-[1.5px]">
      {d.text}
    </li>
  );
}
