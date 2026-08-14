export type MediaTile8Data = {
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile8({ d }: { d: MediaTile8Data }) {
  return (
    <div className="block">
      <div className="w-116 h-px block shrink-0 bg-color-008 max-md:w-[21.9375rem] md:max-lg:w-[19.7875rem]" role="none" />
      <div className="flex py-3.5 items-start gap-3">
        <div className="w-[14%] h-16 block relative mt-1 shrink-0 max-md:w-[9%] max-md:h-8 max-md:mt-0.5 md:max-lg:w-1/5">
          <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="(min-width: 640px) 64px, 32px" src="/assets/cloned/images/480f27c2d14c.jpg" srcSet="/assets/cloned/images/53fa29da6167.jpg 32w, /assets/cloned/images/c27d7f8e1a4f.jpg 48w, /assets/cloned/images/09e29d8ad955.avif 64w, /assets/cloned/images/6cae66806556.jpg 96w, /assets/cloned/images/ade90c9c0b1a.jpg 128w, /assets/cloned/images/e59109745af8.jpg 256w, /assets/cloned/images/ae315cab31ee.jpg 384w, /assets/cloned/images/36a06edad95e.jpg 640w, /assets/cloned/images/31533d2c93c3.jpg 750w, /assets/cloned/images/74532250160b.jpg 828w, /assets/cloned/images/7e8429218b38.jpg 1080w, /assets/cloned/images/658462d6fe04.jpg 1200w, /assets/cloned/images/43610de4ffb5.jpg 1920w, /assets/cloned/images/acafd005159a.jpg 2048w, /assets/cloned/images/480f27c2d14c.jpg 3840w" />
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
