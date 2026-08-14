export type MediaTile7Data = {
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile7({ d }: { d: MediaTile7Data }) {
  return (
    <div className="block">
      <div className="w-116 h-px block shrink-0 bg-color-008 max-md:w-[21.9375rem] md:max-lg:w-[19.7875rem]" role="none" />
      <div className="flex py-3.5 items-start gap-3">
        <div className="w-[14%] h-16 block relative mt-1 shrink-0 max-md:w-[9%] max-md:h-8 max-md:mt-0.5 md:max-lg:w-1/5">
          <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-2" data-component="image" alt="" sizes="(min-width: 640px) 64px, 32px" src="/assets/cloned/images/2828a1e2c107.jpg" srcSet="/assets/cloned/images/970c1c98906d.jpg 32w, /assets/cloned/images/864888e40129.jpg 48w, /assets/cloned/images/36e81b27d057.avif 64w, /assets/cloned/images/57476be76cf8.jpg 96w, /assets/cloned/images/62425e851ebd.jpg 128w, /assets/cloned/images/76ad5cde4919.jpg 256w, /assets/cloned/images/632699230f26.jpg 384w, /assets/cloned/images/c8b56fe65d17.jpg 640w, /assets/cloned/images/3c8f0918329d.jpg 750w, /assets/cloned/images/ba97face20fe.jpg 828w, /assets/cloned/images/88cc575f43ae.jpg 1080w, /assets/cloned/images/369530f13dfb.jpg 1200w, /assets/cloned/images/8447cc980abd.jpg 1920w, /assets/cloned/images/6154a3786b76.jpg 2048w, /assets/cloned/images/2828a1e2c107.jpg 3840w" />
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
