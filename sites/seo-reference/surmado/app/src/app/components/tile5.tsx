import type { DittoNodeMetaMap } from "../ditto-meta";
import type { Tile5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile5Data = {
  htmlFor: string;
  text: string;
  id: string;
  name: string;
  placeholder: string;
  type: string;
  ariadescribedby?: string;
};
/** A content tile. */
export default function Tile5({ d, meta, styles }: { d: Tile5Data; meta: DittoNodeMetaMap; styles: Tile5Styles }) {
  return (
    <div className={cn("flex flex-col gap-2 text-left", styles.className)}>
      <label className="block text-sm font-semibold leading-[1.5rem] cursor-default" htmlFor={d.htmlFor}>
        {d.text}
      </label>
      <input data-ditto-id={meta[2]?.anchor} className="w-full h-14.5 min-h-12 border-2 border-solid border-border block py-4 px-6 rounded-md overflow-clip font-normal leading-5.5 text-start bg-background cursor-text focus:border-clr-23 focus:shadow-[var(--clr-6)_0px_0px_0px_3px] focus:outline-color-005 focus:[outline-style:solid] focus:outline-[3px]" data-component="input" id={d.id} name={d.name} placeholder={d.placeholder} type={d.type} aria-describedby={d.ariadescribedby} />
    </div>
  );
}
