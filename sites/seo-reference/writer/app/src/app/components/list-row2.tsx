export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item ml-7.5 text-xl leading-8 max-lg:ml-0">
      {d.text}
    </li>
  );
}
