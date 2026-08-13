import type { DittoNodeMetaMap } from "../ditto-meta";
import type { MediaLink2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaLink2Data = {
  ariacontrols: string;
  ariaselected: string;
  id: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A linked media tile. */
export default function MediaLink2({ d, meta, styles }: { d: MediaLink2Data; meta: DittoNodeMetaMap; styles: MediaLink2Styles }) {
  return (
    <button className={cn("h-8 flex relative min-w-0 py-1.5 px-3 rounded-md justify-center items-center grow gap-1.5 text-sm font-medium leading-5 text-center cursor-pointer", styles.className)} data-component="button" aria-controls={d.ariacontrols} aria-selected={d.ariaselected} id={d.id} role="tab" type="button">
      <img className="w-4 h-4 block max-w-full shrink-0 overflow-clip aspect-[auto_16/16] align-middle" data-component="image" alt={d.alt} height="16" src={d.imgSrc} width="16" />
      <span data-ditto-id={meta[2]?.anchor} className="block overflow-hidden whitespace-nowrap text-nowrap">
        {d.label}
      </span>
    </button>
  );
}
