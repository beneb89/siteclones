import type { MediaLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaLink2Data = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A linked media tile. */
export default function MediaLink2({ d, styles }: { d: MediaLink2Data; styles: MediaLink2Styles }) {
  return (
    <a className={cn("flex relative p-6 flex-col justify-center items-center bg-background cursor-pointer", styles.className)} data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <div className="flex items-center h-10">
        <img className={cn("w-full block max-w-30 max-h-10 overflow-clip object-contain align-middle", styles.className2)} data-component="image" alt={d.alt} src={d.imgSrc} />
      </div>
      <span className="block mt-3 text-muted-foreground text-xs leading-4 text-center">
        {d.label}
      </span>
    </a>
  );
}
