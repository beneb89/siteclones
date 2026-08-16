export type ListRow5Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="box-content list-item relative ml-5">
      <strong className="box-content inline font-bold">
        <em className="box-content inline italic">
          {d.text}
        </em>
      </strong>
      <br className="box-content inline" />
      {d.text2}
    </li>
  );
}
