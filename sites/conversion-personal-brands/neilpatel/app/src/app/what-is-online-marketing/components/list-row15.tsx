export type ListRow15Data = {
  text: string;
};
/** A list row. */
export default function ListRow15({ d }: { d: ListRow15Data }) {
  return (
    <li className="list-item relative mb-2.5 pl-[1.4375rem] text-sm leading-[1.25rem]">
      {d.text}
    </li>
  );
}
