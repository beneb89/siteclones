import type { DittoNodeMetaMap } from "../ditto-meta";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, meta }: { d: ListRow2Data; meta: DittoNodeMetaMap }) {
  return (
    <li data-ditto-id={meta[0]?.anchor} className="list-item py-1 px-3">
      <a className="inline font-medium cursor-pointer" data-component="link" aria-current="page" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
