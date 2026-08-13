import type { DittoNodeMetaMap } from "../ditto-meta";
export type Tile12Data = {
  text: string;
  name: string;
  placeholder: string;
  type?: string;
};
/** A content tile. */
export default function Tile12({ d, meta }: { d: Tile12Data; meta: DittoNodeMetaMap }) {
  return (
    <div className="block">
      <label className="block mb-1.5 text-muted-foreground text-[0.6875rem] font-bold leading-4 tracking-[0.66px] uppercase cursor-default">
        {d.text}
      </label>
      <input data-ditto-id={meta[2]?.anchor} className="w-full h-[2.5625rem] border border-solid border-border inline-block py-[0.5625rem] px-3 rounded-md overflow-clip text-[0.8125rem] leading-[1.375rem] bg-surface cursor-text" data-component="input" name={d.name} placeholder={d.placeholder} type={d.type} />
    </div>
  );
}
