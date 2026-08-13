import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  id: string;
  label: string;
  arialabelledby: string;
  id2: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("block", styles.className)}>
      <div className="flex">
        <button className="w-[748.1px] flex min-w-0 py-3.5 items-center flex-1 gap-1.5 text-sm font-medium leading-5 text-center cursor-default max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-192" data-component="button" aria-controls="" aria-expanded="false" id={d.id} type="button">
          <span className={cn("block text-start [overflow-wrap:break-word]", styles.className2)}>
            {d.label}
          </span>
          <span className={cn("w-5 h-5 block shrink-0 bg-foreground", styles.className3)} style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/%3E%3C/svg%3E\")" }} aria-hidden="true" />
        </button>
      </div>
      <div className="hidden overflow-hidden [animation-name:accordion-up] [animation-duration:0.2s] [animation-timing-function:ease-out] 2xl:w-192 2xl:h-0 2xl:block" aria-labelledby={d.arialabelledby} id={d.id2} role="region">
        <div className="block pb-3.5 text-sm leading-5">
          <div className="block pb-3 text-clr-15 text-base leading-7">
            <p className="block my-5 text-muted-foreground text-pretty">
              {d.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
