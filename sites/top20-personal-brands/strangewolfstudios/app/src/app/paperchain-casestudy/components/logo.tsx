export type LogoData = {
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="contents min-w-0">
      <div className="w-full h-full block relative rounded-[45px] self-center shrink-0">
        <div className="h-full block absolute top-0 inset-x-0 rounded-[45px]">
          <img className="w-full h-164.5 block rounded-[45px] overflow-clip object-cover max-lg:h-[20.0625rem]" data-component="image" alt="" sizes="max((95vw - 55px) / 2, 50px)" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
      </div>
    </div>
  );
}
