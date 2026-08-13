import type { DittoNodeMetaMap } from "../ditto-meta";
export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, meta }: { d: ListRow3Data; meta: DittoNodeMetaMap }) {
  return (
    <li data-ditto-id={meta[0]?.anchor} className="list-item py-2 pr-[0.9375rem] pointer-events-none">
      <a className="inline-flex gap-5 text-foreground text-lg font-normal leading-[1.4375rem] cursor-pointer pointer-events-none before:content-[''] before:block before:w-2 before:h-2 before:mt-2 before:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] before:origin-[4px_4px] max-lg:before:transform-[none] max-lg:before:origin-[initial]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
