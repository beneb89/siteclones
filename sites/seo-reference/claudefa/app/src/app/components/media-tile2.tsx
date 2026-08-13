import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <li className={cn("hidden 2xl:flex 2xl:items-center", styles.className)}>
      <svg className="hidden 2xl:w-4 2xl:h-4 2xl:block 2xl:mr-3 2xl:shrink-0 2xl:overflow-hidden 2xl:align-middle 2xl:text-clr-19" fill="none" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 14.752s1.5 0 3.5 3.5c0 0 5.559-9.166 10.5-11" />
      </svg>
      <span className="hidden 2xl:block 2xl:text-sm 2xl:leading-5">
        {d.text}
      </span>
    </li>
  );
}
