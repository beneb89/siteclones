export type ListRowData = {
  href: string;
  label: string;
  type?: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item mb-3.5">
      <a className="inline text-[1.0625rem] leading-[1.625rem] underline cursor-pointer" data-component="link" href={d.href} type={d.type}>
        {d.label}
      </a>
    </li>
  );
}
