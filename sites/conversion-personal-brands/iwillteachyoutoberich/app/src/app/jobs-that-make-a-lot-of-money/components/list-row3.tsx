export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item relative pl-6 list-outside 2xl:pl-9">
      <strong className="inline font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
