export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <figure className="w-[69.5px] h-[69.5px] flex relative max-w-full flex-col justify-center grow max-md:w-[141.5px] max-md:h-[141.5px] md:max-lg:w-[4.4875rem] md:max-lg:h-[4.4875rem]">
      <img className="w-17.5 h-17.5 block max-w-full rounded-md overflow-clip aspect-[auto_150/150] align-bottom max-md:w-35.5 max-md:h-35.5 md:max-lg:w-18 md:max-lg:h-18" data-component="image" alt={d.alt} height="150" src={d.imgSrc} width="150" />
    </figure>
  );
}
