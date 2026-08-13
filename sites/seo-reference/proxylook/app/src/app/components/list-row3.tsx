export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="grid items-start gap-2.5 leading-[1.3125rem] grid-cols-[18px_1fr] before:content-['−'] before:block before:w-4.5 before:h-[1.3125rem] before:text-color-010 before:text-sm before:font-bold before:leading-[1.3125rem] before:tracking-[-0.07px]">
      <span className="h-full block">
        {d.text}
      </span>
    </li>
  );
}
