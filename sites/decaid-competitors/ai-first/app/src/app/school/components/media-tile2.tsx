import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <li className={cn("flex items-start gap-3 text-color-014 [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg leading-[1.3125rem] [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-base max-md:leading-[1.1875rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.25rem]", styles.className)}>
      <svg className="w-4 h-4 block opacity-40 mt-1 shrink-0 overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="m419.87-289.52 289.22-289.22-57.31-56.87L419.87-403.7 304.96-518.61l-56.31 56.87 171.22 172.22Zm60.21 223.65q-85.47 0-161.01-32.39-75.53-32.4-131.97-88.84-56.44-56.44-88.84-131.89-32.39-75.46-32.39-160.93 0-86.47 32.39-162.01 32.4-75.53 88.75-131.5t131.85-88.62q75.5-32.65 161.01-32.65 86.52 0 162.12 32.61 75.61 32.6 131.53 88.5 55.93 55.89 88.55 131.45Q894.7-566.58 894.7-480q0 85.55-32.65 161.07-32.65 75.53-88.62 131.9-55.97 56.37-131.42 88.77-75.46 32.39-161.93 32.39Z" fill="currentColor" />
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
