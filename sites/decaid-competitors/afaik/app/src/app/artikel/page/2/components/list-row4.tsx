export type ListRow4Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="box-content list-item mt-2">
      {"Ein "}
      <strong className="box-content inline font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
