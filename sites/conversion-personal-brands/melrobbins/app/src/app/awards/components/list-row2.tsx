export type ListRow2Data = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item min-w-0">
      <a className="block text-sm font-semibold leading-[1.1875rem] cursor-pointer" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
