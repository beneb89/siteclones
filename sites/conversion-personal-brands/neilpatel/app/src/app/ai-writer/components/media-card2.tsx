import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  text: string;
  description: string;
  title: string;
  description2: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className={cn("flex justify-between items-center gap-x-30 text-start max-md:flex-col max-lg:gap-x-15 max-md:[text-align:inherit]", styles.className)}>
      <div className="w-[44%] flex flex-col gap-y-2 max-md:w-full md:max-lg:w-[45.5%]">
        <span className="block rounded-[50%] text-background text-2xl font-bold leading-10 text-center max-md:mx-auto max-md:[text-align:inherit]" style={{ backgroundImage: "linear-gradient(to right, var(--primary), var(--clr-17))" }}>
          {d.text}
        </span>
        {" "}
        <p className="block text-color-018 [font-family:'Geomanist_Book',_Arial,_sans-serif] text-base leading-[1.6875rem] uppercase">
          {d.description}
        </p>
        {" "}
        <h2 className="block text-color-011 text-2xl font-medium leading-[1.8125rem] max-md:text-xl max-md:leading-6" data-component="heading">
          {d.title}
        </h2>
        {" "}
        <p className="block">
          {d.description2}
        </p>
        {" "}
      </div>
      {" "}
      <div className="w-[44%] block max-md:w-full md:max-lg:w-[45.5%]">
        <img className={cn("w-107.5 block max-w-full overflow-clip max-md:w-[20.9375rem] md:max-lg:w-76", styles.className2)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} />
        {" "}
      </div>
      {" "}
    </div>
  );
}
