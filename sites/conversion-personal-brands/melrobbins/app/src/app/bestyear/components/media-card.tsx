export type MediaCardData = {
  srcSet: string;
  imgSrc: string;
  srcSet2: string;
  title: string;
  text: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <li className="flex flex-col gap-3 text-muted">
      <div className="block w-full">
        <div className="block relative rounded-[17.2px] overflow-hidden aspect-[361/480] max-md:rounded-xl max-md:aspect-[9/5] md:max-lg:rounded-[14.4px] 2xl:rounded-[20px]">
          {" "}
          <picture className="w-[20.1875rem] h-[26.8125rem] block absolute top-0 left-0 max-md:w-[21.3125rem] max-md:h-[11.8125rem] max-md:static max-md:top-auto max-md:left-auto md:max-lg:w-57 md:max-lg:h-[18.9375rem] 2xl:w-90 2xl:h-[29.9375rem]">
            <source className="inline" media="(min-width: 768px)" srcSet={d.srcSet} />
            {" "}
            <img className="w-[20.1875rem] block max-w-full overflow-clip object-cover align-middle h-full aspect-[361/480] max-md:w-[21.3125rem] max-md:aspect-[9/5] md:max-lg:w-57 2xl:w-90" data-component="image" alt="" sizes="(max-width: 479px) 468px, (max-width: 767px) 1024px" src={d.imgSrc} srcSet={d.srcSet2} />
            {" "}
          </picture>
          {" "}
        </div>
        {" "}
        <div className="block pt-3">
          <h3 className="block text-foreground text-[1.3125rem] font-semibold leading-[1.75rem] max-md:text-base max-md:leading-[1.3125rem] md:max-lg:text-lg md:max-lg:leading-6 2xl:text-2xl 2xl:leading-[1.9375rem]" data-component="heading">
            {d.title}
          </h3>
          {" "}
          <div className="block mt-0.5 text-muted-foreground text-sm leading-5">
            {d.text}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </li>
  );
}
