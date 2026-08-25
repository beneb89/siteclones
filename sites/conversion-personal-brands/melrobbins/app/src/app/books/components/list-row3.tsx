export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item min-w-0">
      <a className="block text-sm font-semibold leading-[1.1875rem] cursor-pointer" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
