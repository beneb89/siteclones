import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type MediaTile2Data = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
  label2: string;
  label3: string;
  label4: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="block relative mx-3">
      <a className="block max-w-87.5 rounded-2xl underline bg-foreground cursor-pointer max-md:max-w-57.5" href={d.href}>
        {" "}
        <div className="h-[14.5625rem] block relative rounded-tl-2xl rounded-tr-2xl overflow-hidden max-md:h-[9.5625rem]">
          <img className="w-full h-[14.5625rem] block max-w-full rounded-tl-2xl rounded-tr-2xl overflow-clip object-cover max-md:h-[9.5625rem]" alt={d.alt} src={d.imgSrc} />
          {" "}
          <span className={cn("w-60 h-[1.9rem] block absolute bottom-0 z-2 mb-2 py-2 px-4.5 text-background text-xs leading-[0.875rem] text-left [text-shadow:var(--clr-4)_0px_0px_3px,_var(--clr-4)_0px_0px_8px] transform-[matrix(0,-1,1,0,0,0)] origin-[0px_30.3906px] max-md:w-40 max-md:left-57.5", styles.className)} aria-hidden="true">
            {d.label}
          </span>
          {" "}
          <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap">
            {d.label2}
          </span>
          {" "}
        </div>
        {" "}
        <div className="h-[12.3125rem] block relative px-[1.5625rem] rounded-br-2xl rounded-bl-2xl text-background max-md:h-32.5 before:content-[''] before:block before:absolute before:-top-8.5 before:bottom-[12.3125rem] before:inset-x-0 before:h-8.5 before:bg-foreground max-md:before:bottom-32.5" style={{ backgroundImage: "linear-gradient(162deg, var(--foreground) 50%, var(--clr-15) 98%, var(--clr-16) 100%)" }}>
          <span className="block mb-0.5 text-base leading-6 tracking-[0.3px] max-md:text-sm max-md:leading-[1.3125rem]">
            {d.label3}
          </span>
          {" "}
          <div className="block [font-family:Korb,_sans-serif] text-2xl leading-[1.8125rem] underline max-md:text-xl max-md:leading-6 md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem] 2xl:text-[1.75rem] 2xl:leading-[2.125rem]">
            {d.label4}
          </div>
          {" "}
        </div>
        {" "}
      </a>
      {" "}
    </div>
  );
}
