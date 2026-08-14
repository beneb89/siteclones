export type ListRow2Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item mt-[0.725rem] max-lg:mt-2.5 2xl:mt-3">
      <em className="box-content inline italic">
        {d.text}
      </em>
      {d.text2}
      <strong className="box-content inline font-bold">
        {d.text3}
      </strong>
      {d.text4}
    </li>
  );
}
