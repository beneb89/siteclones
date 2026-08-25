export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item">
      <a className="min-h-12 flex p-3.5 items-center gap-2.5 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase cursor-pointer w-full" href={d.href} rel="noopener noreferrer" target="_blank">
        {d.label}
      </a>
      {" "}
    </li>
  );
}
