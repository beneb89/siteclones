export type LogoData = {
  imgSrc: string;
  label: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="w-17 border-[3px] border-solid border-foreground block relative max-w-full max-h-[1e+06px] -ml-5 rounded-[100px] overflow-hidden 2xl:hidden">
      <span className="block relative max-w-full max-h-[1e+06px] overflow-hidden 2xl:hidden">
        <img className="w-15.5 h-15.5 block max-w-full max-h-[1e+06px] overflow-clip aspect-[auto_62/150] align-top 2xl:hidden" data-component="image" alt="" height="150" src={d.imgSrc} title={d.label} width="62" />
      </span>
    </div>
  );
}
