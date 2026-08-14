export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item mb-2.5 text-base leading-6">
      {d.text}
    </li>
  );
}
