export type LogoData = {
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="flex justify-center items-center">
      <picture className="w-17.5 h-17.5 block">
        <img className="w-17.5 h-17.5 block max-w-full max-h-17.5 rounded-[10px] overflow-clip align-bottom" data-component="image" src={d.imgSrc} />
      </picture>
    </div>
  );
}
