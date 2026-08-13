import type { DittoNodeMetaMap } from "../ditto-meta";
export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d, meta }: { d: ListRow7Data; meta: DittoNodeMetaMap }) {
  return (
    <li data-ditto-id={meta[0]?.anchor} className="box-content list-item">
      <a className="box-content inline text-background cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
