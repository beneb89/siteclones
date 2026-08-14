export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="h-[119.5px] min-h-25 flex py-[1.8625rem] px-4 justify-center items-center bg-background max-md:h-29 max-md:py-7">
      <img className="w-15 block opacity-70 max-w-full max-h-15 overflow-clip object-contain aspect-[auto_100/100] align-middle h-auto" data-component="image" alt={d.alt} height="100" src={d.imgSrc} width="100" />
      {" "}
    </div>
  );
}
