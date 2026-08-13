export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item pointer-events-none">
      <a className="h-10 flex py-2 px-3 rounded-sm justify-between items-center font-medium cursor-pointer pointer-events-none" data-component="link" aria-expanded="false" href={d.href}>
        <span className="block pointer-events-none">
          {d.label}
        </span>
      </a>
    </li>
  );
}
