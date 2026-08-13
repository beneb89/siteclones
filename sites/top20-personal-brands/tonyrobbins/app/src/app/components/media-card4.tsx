export type MediaCard4Data = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  text: string;
  text2: string;
  href2: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard4({ d }: { d: MediaCard4Data }) {
  return (
    <li className="border-b border-solid border-b-surface-3 flex py-4 items-center gap-4 w-full max-md:[align-items:initial]">
      <a className="block cursor-pointer" data-component="link" href={d.href}>
        <div className="block relative rounded-lg overflow-hidden h-20 w-20">
          <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_80/80] align-middle text-clr-0 h-full" data-component="image" alt={d.alt} height="80" sizes="80px" src={d.imgSrc} srcSet={d.srcSet} width="80" />
        </div>
      </a>
      <div className="flex items-start w-full max-md:flex-col">
        <div className="block grow max-md:mb-3">
          <span className="flex opacity-60 mb-2 flex-wrap items-center [font-family:mono,_'mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-[1.3125rem] tracking-[-0.35px] uppercase w-full max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[-0.32px] md:max-lg:leading-[1.25rem] md:max-lg:tracking-[-0.34px]">
            <span className="block mr-1">
              {d.text}
            </span>
            <span className="block opacity-60 mx-2 rounded-full bg-foreground h-1 w-1" />
            <span className="block">
              {d.text2}
            </span>
          </span>
          <a className="block cursor-pointer" data-component="link" href={d.href2}>
            <h3 className="block text-[1.1875rem] leading-[1.1875rem] tracking-[-0.95px] max-md:leading-4 max-md:tracking-[-0.8px] max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.0625rem] md:max-lg:tracking-[-0.86px] 2xl:text-xl 2xl:leading-5 2xl:tracking-[-1px]" data-component="heading">
              {d.title}
            </h3>
          </a>
        </div>
        <button className="border border-solid border-border flex py-2.5 px-4 rounded-full justify-center items-center gap-2 text-sm font-medium leading-[1.3125rem] tracking-[0.35px] text-center bg-border cursor-pointer w-auto max-md:py-1.5 max-md:px-3 max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[0.32px] md:max-lg:leading-[1.25rem] md:max-lg:tracking-[0.34px]" data-component="button">
          <svg className="flex overflow-hidden align-middle h-6 w-6" data-component="icon" fill="transparent" viewBox="0 0 24 24">
            <title>
              {"Play"}
            </title>
            <path d="M17.2335 11.1362C17.895 11.5221 17.895 12.4779 17.2335 12.8638L6.50387 19.1227C5.83721 19.5116 5 19.0308 5 18.259L5 5.74104C5 4.96925 5.83721 4.48838 6.50387 4.87726L17.2335 11.1362Z" />
          </svg>
          <span className="block">
            <span className="inline leading-3.5 whitespace-nowrap text-nowrap max-md:leading-[0.8125rem] md:max-lg:leading-[0.875rem]">
              Listen
            </span>
          </span>
        </button>
      </div>
    </li>
  );
}
