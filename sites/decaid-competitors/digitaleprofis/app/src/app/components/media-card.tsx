import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  dateTime: string;
  date: string;
  href2: string;
  title: string;
  description: string;
  href3: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className={cn("list-item min-w-0", styles.className)}>
      <div className={cn("h-full border border-solid border-border relative p-7.5 rounded-[28px] flex-col overflow-hidden max-lg:p-6.5", styles.className2)}>
        <figure className={cn("block relative self-stretch shrink-0 overflow-hidden bg-surface-4 max-md:w-[17.9375rem]", styles.className3)}>
          <a className={cn("block font-semibold underline cursor-pointer", styles.className4)} data-component="link" href={d.href} target="_self">
            <img className={cn("block max-w-full overflow-clip object-cover aspect-[auto_1024/576] align-bottom max-md:w-[17.9375rem] max-md:h-[10.0625rem]", styles.className5)} data-component="image" alt={d.alt} height="576" sizes="auto, (max-width: 620px) calc(100vw - 32px), (max-width: 980px) 50vw, 33vw" src={d.imgSrc} srcSet={d.srcSet} width="1024" />
          </a>
        </figure>
        {" "}
        <div className={cn("flex flex-wrap justify-start items-center gap-y-2 gap-x-3 text-muted-foreground text-[0.8125rem] [font-weight:520] leading-[1.125rem]", styles.className6)}>
          <div className="flex flex-wrap gap-1.5">
            <a className="h-7 border border-solid border-primary flex py-1 px-[0.5625rem] rounded-[999px] items-center text-color-007 font-semibold bg-surface-7 cursor-pointer" data-component="button" href="/artikel" rel="tag">
              Artikel
            </a>
          </div>
          <div className="block">
            <time className="inline" dateTime={d.dateTime}>
              {d.date}
            </time>
          </div>
        </div>
        {" "}
        <h2 className={cn("block max-w-240 font-bold [word-break:break-word] [overflow-wrap:break-word] text-balance", styles.className7)} data-component="heading">
          <a className="inline-block cursor-pointer" data-component="link" href={d.href2} target="_self">
            {d.title}
          </a>
        </h2>
        {" "}
        <div className={cn("block max-w-240 grow overflow-clip text-muted-foreground text-[1.0625rem] leading-[1.625rem] text-pretty", styles.className8)}>
          <p className="overflow-clip line-clamp-4">
            {d.description}
          </p>
        </div>
        {" "}
        <div className={cn("flex flex-wrap justify-between items-center gap-y-2 gap-x-3 text-muted-foreground text-[0.8125rem] [font-weight:520] leading-[1.125rem]", styles.className9)}>
          <a className="block text-color-006 text-[0.9375rem] font-semibold leading-[1.3125rem] cursor-pointer" data-component="link" href={d.href3} target="_self">
            Weiterlesen
            <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
              {d.label}
            </span>
          </a>
        </div>
        {" "}
      </div>
      {" "}
    </li>
  );
}
