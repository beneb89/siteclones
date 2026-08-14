export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="border border-solid border-border flex p-[0.4rem] justify-center items-center aspect-square 2xl:hidden">
      <img className="w-full h-[2.5625rem] block overflow-clip object-contain aspect-[auto_100/100] align-middle max-h-full max-w-full md:max-lg:h-[0.9375rem] 2xl:hidden" data-component="image" alt={d.alt} height="100" src={d.imgSrc} width="100" />
      {" "}
    </div>
  );
}
