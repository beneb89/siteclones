export type ListRow3Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content list-item relative ml-5">
      {d.text}
      <strong className="box-content inline font-bold">
        {d.text2}
      </strong>
      {d.text3}
    </li>
  );
}
