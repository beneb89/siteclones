export type LogoData = {
  id: string;
  imgSrc: string;
  srcSet: string;
  id2: string;
  imgSrc2: string;
  srcSet2: string;
  id3: string;
  imgSrc3: string;
  srcSet3: string;
  id4: string;
  imgSrc4: string;
  srcSet4: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-1 overflow-hidden aspect-[3.03158/1] max-lg:flex-col max-lg:aspect-[0.748/1]">
      <div className="hidden 2xl:w-235.5 2xl:h-[38.925rem] 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-hidden" id={d.id}>
        <div className="hidden 2xl:w-235.5 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:rounded-2xl">
          <img className="hidden 2xl:w-full 2xl:h-[38.9375rem] 2xl:block 2xl:rounded-2xl 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_3840/2560]" alt="" height="2560" sizes="max((100vw - 36px) / 2, 1px)" src={d.imgSrc} srcSet={d.srcSet} width="3840" />
        </div>
      </div>
      <div className="hidden 2xl:w-235.5 2xl:h-[38.925rem] 2xl:block 2xl:relative 2xl:rounded-2xl 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-hidden" id={d.id2}>
        <div className="hidden 2xl:w-235.5 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:rounded-2xl">
          <img className="hidden 2xl:w-full 2xl:h-[38.9375rem] 2xl:block 2xl:rounded-2xl 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_3840/2560]" alt="" height="2560" sizes="max((100vw - 36px) / 2, 1px)" src={d.imgSrc2} srcSet={d.srcSet2} width="3840" />
        </div>
      </div>
      <div className="contents min-w-0 2xl:hidden">
        <div className="w-155.5 h-[411.7px] block relative rounded-2xl grow shrink-0 basis-0 overflow-hidden max-md:w-[21.4375rem] max-md:h-[227.3px] md:max-lg:w-184 md:max-lg:h-[30.625rem] 2xl:hidden" id={d.id3}>
          <div className="h-full block absolute top-0 inset-x-0 rounded-2xl 2xl:hidden">
            <img className="w-full h-103 block rounded-2xl overflow-clip object-cover aspect-[auto_3840/2560] max-md:h-[14.1875rem] md:max-lg:h-122.5 2xl:hidden" data-component="image" alt="" height="2560" sizes="max((100vw - 36px) / 2, 1px)" src={d.imgSrc3} srcSet={d.srcSet3} width="3840" />
          </div>
        </div>
      </div>
      <div className="contents min-w-0 2xl:hidden">
        <div className="w-155.5 h-[411.7px] block relative rounded-2xl grow shrink-0 basis-0 overflow-hidden max-md:w-[21.4375rem] max-md:h-[227.3px] md:max-lg:w-184 md:max-lg:h-[30.625rem] 2xl:hidden" id={d.id4}>
          <div className="h-full block absolute top-0 inset-x-0 rounded-2xl 2xl:hidden">
            <img className="w-full h-103 block rounded-2xl overflow-clip object-cover aspect-[auto_3840/2560] max-md:h-[14.1875rem] md:max-lg:h-122.5 2xl:hidden" data-component="image" alt="" height="2560" sizes="max((100vw - 36px) / 2, 1px)" src={d.imgSrc4} srcSet={d.srcSet4} width="3840" />
          </div>
        </div>
      </div>
    </div>
  );
}
