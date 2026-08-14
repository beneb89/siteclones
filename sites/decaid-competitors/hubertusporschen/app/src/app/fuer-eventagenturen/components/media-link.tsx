import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaLinkData = {
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A linked media tile. */
export default function MediaLink({ d, styles }: { d: MediaLinkData; styles: MediaLinkStyles }) {
  return (
    <a className="border border-solid border-border block relative overflow-hidden cursor-pointer aspect-[3/4] 2xl:hidden" data-component="link" download="" href={d.href}>
      {" "}
      <img className={cn("w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle h-full 2xl:hidden", styles.className)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
      {" "}
      <span className="w-[328.7px] h-[2.0625rem] block absolute top-[405.9px] left-0 opacity-0 py-2 px-3 text-color-002 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1.4px] text-center uppercase bg-clr-13 2xl:hidden">
        Download →
      </span>
      {" "}
    </a>
  );
}
