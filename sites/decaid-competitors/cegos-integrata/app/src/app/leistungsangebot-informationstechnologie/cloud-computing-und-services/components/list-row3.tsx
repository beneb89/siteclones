export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content list-item relative ml-5">
      <strong className="box-content inline font-bold">
        <mark className="box-content inline text-color-011">
          {d.text}
        </mark>
      </strong>
    </li>
  );
}
