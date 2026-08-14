export type MediaCardData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="block">
      <div className="w-[684.5px] h-px block shrink-0 bg-color-008 max-md:w-[21.9375rem] md:max-lg:w-[364.3px] 2xl:w-180" role="none" />
      <div className="flex py-8 items-start gap-8">
        <div className="block relative shrink-0 h-40 w-40">
          <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt={d.alt} sizes="80px" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
        <div className="block flex-1 max-w-md">
          <h4 className="block mb-2 text-xl font-semibold leading-[1.4375rem] max-md:text-lg max-md:leading-[1.3125rem]" data-component="heading">
            {d.title}
          </h4>
          <p className="block text-muted [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg leading-[1.3125rem] text-pretty [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-base max-md:leading-[1.1875rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.25rem]">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
