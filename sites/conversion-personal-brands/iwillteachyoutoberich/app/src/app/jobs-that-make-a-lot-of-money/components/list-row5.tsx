export type ListRow5Data = {
  text: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item relative pl-6 list-outside 2xl:pl-9">
      {d.text}
    </li>
  );
}
