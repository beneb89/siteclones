import type { DittoNodeMetaMap } from "../ditto-meta";
import type { Tile6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile6Data = {
  htmlFor: string;
  text: string;
  id: string;
  name: string;
  placeholder: string;
  type: string;
};
/** A content tile. */
export default function Tile6({ d, meta, styles }: { d: Tile6Data; meta: DittoNodeMetaMap; styles: Tile6Styles }) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-2 text-left", styles.className)}>
      <label className="block min-w-0 text-sm font-semibold leading-[1.5rem] cursor-default" htmlFor={d.htmlFor}>
        {d.text}
      </label>
      <input data-ditto-id={meta[2]?.anchor} className="w-full min-h-12 border-2 border-solid border-border block min-w-0 py-4 px-6 rounded-md overflow-clip font-normal leading-5.5 text-start bg-background cursor-default 2xl:h-14.5 2xl:cursor-text" disabled id={d.id} name={d.name} placeholder={d.placeholder} type={d.type} />
    </div>
  );
}
