export type ListRow6Data = {
  text: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item relative pl-6 list-outside 2xl:pl-9" aria-level="1">
      {d.text}
    </li>
  );
}
