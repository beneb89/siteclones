export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item 2xl:hidden before:content-['→'] before:mr-2 before:text-accent before:text-xs before:font-bold before:leading-[1.25rem] before:tracking-[0.72px] max-md:before:leading-[1.1875rem] 2xl:before:hidden">
      {d.text}
    </li>
  );
}
