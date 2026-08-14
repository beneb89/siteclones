export type ListRow3Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item mb-2">
      <strong className="inline font-medium">
        {d.text}
      </strong>
      {" oder "}
      <strong className="inline font-medium">
        {d.text2}
      </strong>
      {d.text3}
    </li>
  );
}
