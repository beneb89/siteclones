export type Logo2Data = {
  name: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <div className="w-310 block relative shrink-0 max-md:w-[20.9375rem] md:max-lg:w-182 2xl:w-350" name={d.name}>
      <div className="flex justify-center items-center content-center justify-items-center">
        <img className="w-auto h-174.5 block max-w-full max-h-full overflow-clip max-md:h-47 md:max-lg:h-102.5 2xl:h-197" data-component="image" alt="" src={d.imgSrc} srcSet={d.srcSet} />
        <div className="h-[697.5px] block absolute top-0 inset-x-0 min-w-0 pointer-events-none max-md:h-[11.775rem] md:max-lg:h-[409.5px] 2xl:h-[787.5px]" />
      </div>
    </div>
  );
}
