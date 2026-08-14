export type MediaCardData = {
  ariaLabel: string;
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
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <article className="border border-solid border-border flex min-w-0 p-7.5 rounded-[28px] flex-col gap-5.5 overflow-hidden bg-background max-lg:p-6.5 max-md:gap-4.5 md:max-lg:min-h-80 md:max-lg:grid md:max-lg:gap-y-4.5 md:max-lg:gap-x-7 md:max-lg:grid-cols-[290.688px_355.312px]">
      <a className="block -mt-7.5 -mx-7.5 self-stretch shrink-0 overflow-hidden aspect-video font-semibold underline bg-surface-4 cursor-pointer max-md:-mt-6.5 max-md:-mx-6.5 md:max-lg:min-h-full md:max-lg:-my-6.5 md:max-lg:-ml-6.5 md:max-lg:col-start-1 md:max-lg:row-span-full md:max-lg:mr-0 md:max-lg:aspect-[initial]" data-component="link" aria-label={d.ariaLabel} href={d.href}>
        {" "}
        <img className="w-full h-55 block overflow-clip object-cover aspect-[auto_1024/576] max-md:h-[11.6875rem] md:max-lg:h-79.5 2xl:h-56.5" data-component="image" alt={d.alt} height="576" sizes="auto, (max-width: 620px) calc(100vw - 32px), (max-width: 980px) 50vw, 33vw" src={d.imgSrc} srcSet={d.srcSet} width="1024" />
        {" "}
      </a>
      {" "}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-muted-foreground text-[0.8125rem] [font-weight:520] leading-[1.125rem] md:max-lg:col-start-2">
        <span className="flex flex-wrap gap-1.5">
          <a className="h-7 border border-solid border-primary flex py-1 px-[0.5625rem] rounded-[999px] items-center text-color-007 font-semibold bg-surface-7 cursor-pointer" data-component="button" href="/artikel">
            Artikel
          </a>
        </span>
        {" "}
        <time className="block" dateTime={d.dateTime}>
          {d.date}
        </time>
        {" "}
      </div>
      {" "}
      <h2 className="block text-[1.625rem] font-bold leading-[1.875rem] [overflow-wrap:break-word] text-balance max-lg:text-[1.375rem] max-lg:leading-[1.5625rem] md:max-lg:col-start-2" data-component="heading">
        <a className="inline cursor-pointer" data-component="link" href={d.href2}>
          {d.title}
        </a>
        {" "}
      </h2>
      {" "}
      <div className="block grow overflow-clip text-muted-foreground text-[1.0625rem] leading-[1.625rem] text-pretty md:max-lg:col-start-2">
        <p className="overflow-clip line-clamp-4">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-muted-foreground text-[0.8125rem] [font-weight:520] leading-[1.125rem] md:max-lg:col-start-2">
        <a className="block text-color-006 text-[0.9375rem] font-semibold leading-[1.3125rem] cursor-pointer" data-component="link" href={d.href3}>
          Weiterlesen
        </a>
        {" "}
      </div>
      {" "}
    </article>
  );
}
