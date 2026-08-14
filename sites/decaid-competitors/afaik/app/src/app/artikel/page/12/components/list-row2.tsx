export type ListRow2Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item mt-2">
      {d.text}
      <strong className="box-content inline font-bold">
        {d.text2}
      </strong>
      {d.text3}
      <strong className="box-content inline font-bold">
        {d.text4}
      </strong>
      {d.text5}
    </li>
  );
}
