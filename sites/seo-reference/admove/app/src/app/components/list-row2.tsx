import type { DittoNodeMetaMap } from "../ditto-meta";
export type ListRow2Data = {
  description: string;
};
/** A list row. */
export default function ListRow2({ d, meta }: { d: ListRow2Data; meta: DittoNodeMetaMap }) {
  return (
    <li data-ditto-id={meta[0]?.anchor} className="list-item pl-5.5 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] [list-style-type:none] 2xl:pl-6 2xl:text-lg 2xl:leading-[1.8125rem]">
      <p className="block">
        {d.description}
      </p>
    </li>
  );
}
