export type ListRow8Data = {
  text: string;
};
/** A list row. */
export default function ListRow8({ d }: { d: ListRow8Data }) {
  return (
    <li className="list-item relative mb-2.5 pl-[1.4375rem] text-sm leading-[1.25rem]">
      {d.text}
    </li>
  );
}
