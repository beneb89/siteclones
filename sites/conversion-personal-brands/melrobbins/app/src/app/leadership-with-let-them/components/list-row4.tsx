export type ListRow4Data = {
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item text-muted">
      <a className="min-h-12 flex p-3.5 items-center gap-2.5 text-xs font-semibold leading-4 tracking-[0.3px] text-left uppercase cursor-pointer w-full" href="#" rel="noopener noreferrer" target="_blank">
        {d.label}
      </a>
      {" "}
    </li>
  );
}
