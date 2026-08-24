export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item ml-4 py-[0.1875rem]">
      <strong className="inline font-semibold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
