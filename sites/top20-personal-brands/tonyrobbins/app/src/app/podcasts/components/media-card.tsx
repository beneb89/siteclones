export type MediaCardData = {
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
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <li className="list-item">
      <a className="block mb-4 cursor-pointer" data-component="link" href={d.href}>
        <div className="block relative rounded-2xl overflow-hidden aspect-square w-full">
          <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_300/300] align-middle text-clr-0 h-full" data-component="image" alt={d.alt} height="300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={d.imgSrc} srcSet={d.srcSet} width="300" />
        </div>
      </a>
      <span className="flex opacity-60 mb-2 items-center [font-family:mono,_'mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-[1.3125rem] tracking-[-0.35px] uppercase max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[-0.32px] md:max-lg:leading-[1.25rem] md:max-lg:tracking-[-0.34px]">
        {d.text}
        <div className="block opacity-60 mx-2 rounded-full bg-foreground h-1 w-1" />
        {d.text2}
      </span>
      <a className="inline-block mb-2 cursor-pointer" data-component="link" href={d.href2}>
        <h3 className="block text-[1.1875rem] font-medium leading-[1.5rem] max-md:leading-5 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.375rem] 2xl:text-xl 2xl:leading-[1.5625rem]" data-component="heading">
          {d.title}
        </h3>
      </a>
      <div className="block mt-5">
        <button className="border border-solid border-foreground inline-flex py-1.5 px-3 rounded-full justify-center items-center gap-2 text-sm font-medium leading-[1.3125rem] tracking-[0.35px] text-center cursor-pointer w-auto max-md:py-1 max-md:px-2 max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[0.32px] md:max-lg:leading-[1.25rem] md:max-lg:tracking-[0.34px]" data-component="button">
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
