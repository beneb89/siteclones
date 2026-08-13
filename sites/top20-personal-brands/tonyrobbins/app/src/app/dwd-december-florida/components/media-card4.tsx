export type MediaCard4Data = {
  href: string;
  alt: string;
  imgSrc: string;
  text: string;
  href2: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard4({ d }: { d: MediaCard4Data }) {
  return (
    <div className="w-[386.7px] block relative mr-5 shrink-0 max-md:w-[20.9375rem] md:max-lg:w-88.5 2xl:w-[493.3px]">
      <div className="h-full block">
        <a className="block mb-4 cursor-pointer" data-component="link" href={d.href}>
          <div className="block relative rounded-2xl overflow-hidden aspect-[4/3] bg-color-001 w-full">
            <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_480/350] align-middle text-clr-0 h-full" data-component="image" alt={d.alt} height="350" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={d.imgSrc} width="480" />
          </div>
        </a>
        <div className="block py-2.5">
          <span className="block opacity-60 mb-2 [font-family:mono,_'mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-[1.3125rem] tracking-[-0.35px] uppercase max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[-0.32px] md:max-lg:leading-[1.25rem] md:max-lg:tracking-[-0.34px]">
            {d.text}
          </span>
          <a className="inline-block mb-2 cursor-pointer" data-component="link" href={d.href2}>
            <h3 className="block text-[1.1875rem] font-medium leading-[1.5rem] whitespace-nowrap max-md:leading-5 max-md:[font-size:inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.375rem] 2xl:text-xl 2xl:leading-[1.5625rem]" data-component="heading">
              {d.title}
            </h3>
          </a>
          <p className="opacity-60 overflow-hidden line-clamp-2">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
