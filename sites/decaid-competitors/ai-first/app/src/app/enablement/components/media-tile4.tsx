export type MediaTile4Data = {
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile4({ d }: { d: MediaTile4Data }) {
  return (
    <div className="block">
      <div className="w-116 h-px block shrink-0 bg-color-008 max-md:w-[21.9375rem] md:max-lg:w-[19.7875rem]" role="none" />
      <div className="flex py-5 items-start gap-6 max-md:py-3.5 max-md:gap-3">
        <div className="block relative mt-1 shrink-0 h-16 w-16 max-md:mt-0.5 max-md:h-8 max-md:w-8">
          <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="(min-width: 640px) 64px, 32px" src="/assets/cloned/images/6350ca594775.jpg" srcSet="/assets/cloned/images/ef3ec614dd44.jpg 32w, /assets/cloned/images/06b7d1905c23.jpg 48w, /assets/cloned/images/b6291ef0a382.avif 64w, /assets/cloned/images/6cd476c9e2d2.jpg 96w, /assets/cloned/images/e5c910945a49.jpg 128w, /assets/cloned/images/9ebad7679f7e.jpg 256w, /assets/cloned/images/5fd4aedbe110.jpg 384w, /assets/cloned/images/a03a29fe0628.jpg 640w, /assets/cloned/images/f9e6a7ba81da.jpg 750w, /assets/cloned/images/7c6cf8b9f9a7.jpg 828w, /assets/cloned/images/96faca7b1376.jpg 1080w, /assets/cloned/images/38d23b1f5201.jpg 1200w, /assets/cloned/images/c6bd6ade603d.jpg 1920w, /assets/cloned/images/c623ce2799c6.jpg 2048w, /assets/cloned/images/6350ca594775.jpg 3840w" />
        </div>
        <p className="block [font-family:'Martina_Plantijn',_Georgia,_serif] text-lg leading-[1.3125rem] [font-feature-settings:'calt',_'liga',_'onum'] max-md:text-base max-md:leading-[1.1875rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.25rem]">
          <strong className="inline [font-family:Soehne,_system-ui,_sans-serif] font-semibold">
            {d.description}
          </strong>
          {d.description2}
        </p>
      </div>
    </div>
  );
}
