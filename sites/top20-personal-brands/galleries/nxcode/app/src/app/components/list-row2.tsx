export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item mt-3 mb-2 pl-2 max-md:mt-[10.7px] max-md:pl-[7.1px]">
      {d.text}
    </li>
  );
}
