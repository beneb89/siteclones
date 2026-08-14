export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="hidden 2xl:h-[119.5px] 2xl:min-h-25 2xl:flex 2xl:py-[1.8625rem] 2xl:px-4 2xl:justify-center 2xl:items-center 2xl:bg-background">
      <img className="hidden h-auto 2xl:w-15 2xl:block 2xl:opacity-70 2xl:max-w-full 2xl:max-h-15 2xl:overflow-clip 2xl:object-contain 2xl:aspect-[auto_100/100] 2xl:align-middle" alt={d.alt} height="100" src={d.imgSrc} width="100" />
      {" "}
    </div>
  );
}
