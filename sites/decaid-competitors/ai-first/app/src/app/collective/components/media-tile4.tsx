export type MediaTile4Data = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile4({ d }: { d: MediaTile4Data }) {
  return (
    <div className="flex py-8 flex-col items-center gap-4 text-center max-md:py-4 max-md:gap-3">
      <div className="h-52 block relative max-w-56 aspect-square w-52 max-md:h-32 max-md:max-w-32 max-md:w-full">
        <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt={d.alt} sizes="(min-width: 768px) 208px, 128px" src={d.imgSrc} srcSet={d.srcSet} />
      </div>
      <p className="block [font-family:'Martina_Plantijn',_Georgia,_serif] text-[1.4375rem] leading-[1.6875rem] [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-base max-md:leading-[1.1875rem] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.4375rem] 2xl:text-2xl 2xl:leading-7">
        {d.description}
        <br className="inline" />
        {d.description2}
      </p>
    </div>
  );
}
