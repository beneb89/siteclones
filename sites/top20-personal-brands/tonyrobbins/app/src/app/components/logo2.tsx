export type Logo2Data = {
  alt: string;
  imgSrc: string;
  srcSet?: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <div className="flex justify-center items-center">
      <img className="w-auto h-12.5 block max-w-full overflow-clip aspect-[auto_220/60] align-middle text-clr-0 max-md:h-[2.8125rem] md:max-lg:h-[1.8125rem] 2xl:h-15" data-component="image" alt={d.alt} height="60" src={d.imgSrc} width="220" srcSet={d.srcSet} />
    </div>
  );
}
