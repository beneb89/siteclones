import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  href: string;
  title: string;
  description: string;
  href2: string;
  label: string;
  text: string;
  dateTime: string;
  date: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <article className="border border-solid border-surface flex p-[1.6rem] rounded-lg flex-col gap-3.5 bg-surface-4 max-lg:p-5 2xl:p-7">
      <h3 className="block text-color-001 text-xl font-bold leading-6.5 max-md:leading-[1.3125rem] max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.4375rem]" data-component="heading">
        <a className="inline font-semibold cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)] hover:underline" data-component="link" href={d.href}>
          {d.title}
        </a>
      </h3>
      {" "}
      <p className="overflow-hidden line-clamp-5">
        {d.description}
      </p>
      {" "}
      <div className={cn("flex flex-wrap items-center gap-y-1.5 gap-x-2.5 text-muted-foreground text-sm leading-[1.375rem]", styles.className)}>
        <a className="flex items-center gap-1.5 cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href={d.href2}>
          {d.label}
        </a>
        {" "}
        <span className="flex items-center gap-1.5 before:content-['·'] before:block before:w-[0.1875rem] before:h-[1.4rem] before:text-clr-7 before:text-sm before:leading-[1.375rem]">
          {" "}
          <svg className="w-auto h-4 block shrink-0 overflow-hidden align-middle" data-component="icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.4h19.6v-2.4c0-3.3-6.5-4.9-9.8-4.9z" />
          </svg>
          {d.text}
        </span>
        {" "}
        <time className="flex items-center gap-1.5 before:content-['·'] before:block before:w-[0.1875rem] before:h-[1.4rem] before:text-clr-7 before:text-sm before:leading-[1.375rem]" dateTime={d.dateTime}>
          {" "}
          <svg className="w-auto h-4 block shrink-0 overflow-hidden align-middle" data-component="icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
          </svg>
          {d.date}
        </time>
        {" "}
      </div>
      {" "}
    </article>
  );
}
