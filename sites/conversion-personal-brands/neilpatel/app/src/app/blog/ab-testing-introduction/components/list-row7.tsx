export type ListRow7Data = {
  text: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="list-item relative mb-2.5 pl-[1.4375rem] text-sm leading-[1.25rem]">
      {d.text}
    </li>
  );
}
