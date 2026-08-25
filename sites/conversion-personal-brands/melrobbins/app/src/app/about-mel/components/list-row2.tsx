export type ListRow2Data = {
  ariacurrent?: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item min-w-0">
      <a className="block text-sm font-semibold leading-[1.1875rem] cursor-pointer" aria-current={d.ariacurrent} href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
