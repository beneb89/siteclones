import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile3Data = {
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <li className={cn("flex items-start gap-3 text-color-014 [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg leading-[1.3125rem] [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-base max-md:leading-[1.1875rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.25rem]", styles.className)}>
      <svg className="w-4 h-4 block opacity-40 mt-1 shrink-0 overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M449.61-276.61h66.78v-166h167v-66.78h-167v-174h-66.78v174h-173v66.78h173v166Zm30.73 210.74q-86.2 0-161.5-32.39-75.3-32.4-131.74-88.84-56.44-56.44-88.84-131.73-32.39-75.3-32.39-161.59t32.39-161.67q32.4-75.37 88.75-131.34t131.69-88.62q75.34-32.65 161.67-32.65 86.34 0 161.78 32.61 75.45 32.6 131.37 88.5 55.93 55.89 88.55 131.45 32.63 75.56 32.63 161.87 0 86.29-32.65 161.58t-88.62 131.48q-55.97 56.18-131.42 88.76-75.46 32.58-161.67 32.58Z" fill="currentColor" />
      </svg>
      <span className={cn("grid text-pretty grid-cols-[minmax(0,_1fr)]", styles.className2)}>
        <span className="block col-start-1 row-start-1" aria-hidden="true">
          <span className="inline px-0.5 text-clr-2 bg-background">
            {d.text}
          </span>
        </span>
        <span className="block col-start-1 row-start-1">
          <span className="inline px-0.5">
            {d.text2}
          </span>
        </span>
      </span>
    </li>
  );
}
