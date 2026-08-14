export type ListRowData = {
  href: string;
  label2: string;
  label?: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="box-content flex relative items-center">
      <a className="box-content h-[1.8375rem] block z-1 cursor-pointer md:max-lg:h-[1.775rem]" data-component="link" href={d.href} title={d.label}>
        <span className="box-content inline [overflow-wrap:break-word]">
          {d.label2}
        </span>
      </a>
    </li>
  );
}
