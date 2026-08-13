export type ListRow6Data = {
  text: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item my-2 pl-1.5 leading-[1.625rem]">
      {d.text}
    </li>
  );
}
