import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaLinkData = {
  href: string;
  alt: string;
  imgSrc: string;
  description: string;
};
/** A linked media tile. */
export default function MediaLink({ d, styles }: { d: MediaLinkData; styles: MediaLinkStyles }) {
  return (
    <a className={cn("block cursor-pointer", styles.className)} data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <div className="flex items-center h-10">
        <img className={cn("block max-w-full overflow-clip object-contain align-middle", styles.className2)} data-component="image" alt={d.alt} src={d.imgSrc} />
      </div>
      <p className="block mt-4 leading-[1.75rem]">
        {d.description}
      </p>
    </a>
  );
}
