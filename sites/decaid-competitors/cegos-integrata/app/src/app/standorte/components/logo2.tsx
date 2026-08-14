export type Logo2Data = {
  srcSet: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <figure className="box-content w-[22.5625rem] h-[16.9375rem] block text-sm leading-[1.3125rem] max-md:w-[20.9375rem] max-md:h-[15.7125rem] max-lg:[font-size:inherit] max-lg:leading-[inherit] md:max-lg:w-182 md:max-lg:h-[546.3px] 2xl:w-[23.4375rem] 2xl:h-[281.3px] 2xl:text-[0.9375rem] 2xl:leading-[1.375rem]">
      <picture className="box-content inline">
        <source className="box-content inline" srcSet={d.srcSet} type="image/webp" />
        <img className="box-content w-[22.5625rem] h-[16.9375rem] inline max-w-full rounded-[10px] overflow-clip align-bottom max-md:w-[20.9375rem] max-md:h-[15.6875rem] md:max-lg:w-182 md:max-lg:h-136.5 2xl:w-[23.4375rem] 2xl:h-[17.5625rem]" data-component="image" src={d.imgSrc} />
      </picture>
    </figure>
  );
}
