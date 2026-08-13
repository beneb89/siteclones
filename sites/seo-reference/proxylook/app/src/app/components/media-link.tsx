import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaLinkData = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
  label2: string;
};
/** A linked media tile. */
export default function MediaLink({ d, styles }: { d: MediaLinkData; styles: MediaLinkStyles }) {
  return (
    <a className={cn("grid items-center gap-2.5 grid-cols-[30px_211.203px_20.7969px] text-[0.8125rem] leading-[1.375rem] cursor-pointer", styles.className)} data-component="link" href={d.href}>
      {" "}
      <img className="w-7.5 h-7.5 border border-solid border-border flex max-w-full p-[0.1875rem] rounded-md justify-center items-center overflow-clip object-contain aspect-[auto_36/36] align-middle text-surface text-xs font-bold leading-[1.25rem] bg-surface" data-component="image" alt={d.alt} height="36" src={d.imgSrc} width="36" />
      {" "}
      <div className="block">
        <div className="block font-semibold">
          {d.label}
        </div>
        {" "}
        <div className="block text-muted-foreground text-[0.6875rem] leading-[1.125rem]">
          {d.label2}
        </div>
        {" "}
      </div>
      {" "}
      <div className="block text-primary [font-family:'JetBrains_Mono',_ui-monospace,_monospace] text-xs font-bold leading-[1.25rem]">
        4.6
      </div>
      {" "}
    </a>
  );
}
