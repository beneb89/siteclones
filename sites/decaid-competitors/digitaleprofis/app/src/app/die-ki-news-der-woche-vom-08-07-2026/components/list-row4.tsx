export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item min-w-0">
      <a className="block text-muted text-sm [font-weight:520] leading-[1.1875rem] cursor-pointer" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
