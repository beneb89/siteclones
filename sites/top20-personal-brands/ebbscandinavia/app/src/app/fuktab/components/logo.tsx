export type LogoData = {
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="contents min-w-0">
      <div className="w-[405.3px] block relative grow shrink-0 basis-0 aspect-[1.41648/1] max-md:w-[22.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-188 2xl:w-[618.7px]">
        <div className="h-full block absolute top-0 inset-x-0">
          <img className="w-full h-71.5 block overflow-clip object-cover aspect-[auto_1238/874] max-md:h-[15.8125rem] md:max-lg:h-[33.1875rem] 2xl:h-[27.3125rem]" data-component="image" alt="" height="874" sizes="max((max((100vw - 208px) / 12, 50px) * 12 + 144px) / 3, 1px)" src={d.imgSrc} srcSet={d.srcSet} width="1238" />
        </div>
      </div>
    </div>
  );
}
