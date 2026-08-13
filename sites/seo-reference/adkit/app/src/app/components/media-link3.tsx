import type { MediaLink3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaLink3Data = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A linked media tile. */
export default function MediaLink3({ d, styles }: { d: MediaLink3Data; styles: MediaLink3Styles }) {
  return (
    <a className="h-10.5 border border-solid border-color-004 flex py-2.5 px-3 rounded-lg items-center gap-2.5 bg-surface cursor-pointer hover:bg-border" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <img className="w-5 h-5 block max-w-full shrink-0 overflow-clip object-contain aspect-[auto_20/20] align-middle" data-component="image" alt={d.alt} height="20" src={d.imgSrc} width="20" />
      <span className="block text-color-002 text-sm font-semibold leading-5">
        {d.label}
      </span>
      <span className={cn("w-3 h-3 block shrink-0 text-color-001 text-xs leading-4.5 bg-color-001", styles.className)} style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32z'/%3E%3C/svg%3E\")" }} aria-hidden="true" />
    </a>
  );
}
