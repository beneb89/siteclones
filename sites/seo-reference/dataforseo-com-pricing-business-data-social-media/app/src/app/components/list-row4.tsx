import type { DittoNodeMetaMap } from "../ditto-meta";
export type ListRow4Data = {
  id: string;
  href: string;
  label: string;
  id2: string;
  href2: string;
  label2: string;
  id3: string;
  href3: string;
  label3: string;
};
/** A list row. */
export default function ListRow4({ d, meta }: { d: ListRow4Data; meta: DittoNodeMetaMap }) {
  return (
    <li data-ditto-id={meta[0]?.anchor} className="box-content border-b border-dotted border-b-border list-item relative py-1.5 [list-style-type:none] list-outside after:content-[''] after:block after:absolute after:top-2 after:right-0 after:bottom-[0.5625rem] after:left-[10.6875rem] after:w-[0.5625rem] after:h-3.5 after:p-0.5 after:text-color-001 after:text-sm after:leading-3.5 max-md:after:bottom-auto max-md:after:left-auto max-md:after:w-auto max-md:after:h-auto md:max-lg:after:left-124" id={d.id}>
      <a className="box-content inline text-color-001 font-semibold cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
      <ul data-ditto-id={meta[2]?.anchor} className="box-content hidden pl-[0.9375rem] [list-style-type:square] list-inside">
        <li className="box-content border-b border-dotted border-b-border list-item py-1.5 [list-style-type:none] list-outside" id={d.id2}>
          <a className="box-content inline text-color-001 font-semibold cursor-pointer" href={d.href2}>
            {d.label2}
          </a>
        </li>
        <li className="box-content list-item py-1.5 [list-style-type:none] list-outside" id={d.id3}>
          <a className="box-content inline text-color-001 font-semibold cursor-pointer" href={d.href3}>
            {d.label3}
          </a>
        </li>
      </ul>
      {" "}
    </li>
  );
}
