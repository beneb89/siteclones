export type LogoData = {
  ariaLabel: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="basis-full shrink-0 block relative" aria-label={d.ariaLabel} role="group">
      <img className="w-95 h-95 block max-w-full overflow-clip align-middle pointer-events-none max-md:w-[12.6875rem] max-md:h-[12.6875rem] md:max-lg:w-127 md:max-lg:h-127 2xl:w-142.5 2xl:h-142.5" data-component="image" alt="I Will Teach You To Be Rich by Ramit Sethi" src={d.imgSrc} />
      {" "}
    </div>
  );
}
