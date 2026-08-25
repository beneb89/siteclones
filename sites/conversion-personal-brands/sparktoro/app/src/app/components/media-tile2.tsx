import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  text: string;
  alt: string;
  imgSrc: string;
  text2: string;
  text3: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <figure className={cn("border border-solid border-border flex relative pt-7 pb-7.5 px-6.5 rounded-[18px] flex-col bg-background before:content-[''] before:absolute before:top-23 before:w-8.5", styles.className)}>
      <blockquote className="block mb-6.5 text-border text-[1.0625rem] font-medium leading-[1.625rem]">
        {d.text}
      </blockquote>
      {" "}
      <figcaption className="flex items-center gap-3.5">
        <img className="w-auto h-13 border border-solid border-border block rounded-[50%] shrink-0 overflow-clip object-cover aspect-[auto_52/52] align-middle bg-surface-13" data-component="avatar" alt={d.alt} height="52" src={d.imgSrc} width="52" />
        {" "}
        <span className="flex min-w-0 flex-col gap-1">
          {" "}
          <span className="block text-border [font-family:'League_Spartan',_sans-serif] text-[1.0625rem] font-bold leading-[1.625rem] tracking-[0.34px] uppercase">
            {d.text2}
          </span>
          {" "}
          <span className="block text-border text-[0.9375rem] leading-[1.25rem]">
            {d.text3}
          </span>
          {" "}
        </span>
        {" "}
      </figcaption>
      {" "}
    </figure>
  );
}
