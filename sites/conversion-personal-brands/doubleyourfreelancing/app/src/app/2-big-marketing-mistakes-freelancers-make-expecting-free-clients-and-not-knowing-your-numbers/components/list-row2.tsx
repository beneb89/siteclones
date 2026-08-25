export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item max-h-[1e+06px] mt-[1.35rem] [list-style-type:disc] 2xl:hidden">
      {d.text}
    </li>
  );
}
