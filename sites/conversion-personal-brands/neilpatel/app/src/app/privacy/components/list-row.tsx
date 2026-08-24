export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item ml-4 py-[0.1875rem]">
      <a className="inline max-w-full cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
