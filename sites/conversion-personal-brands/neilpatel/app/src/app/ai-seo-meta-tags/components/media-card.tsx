import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  height: string;
  imgSrc: string;
  width: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="w-[313.3px] flex p-6 gap-x-3 bg-background shadow-[var(--clr-16)_-20px_54px_25px_0px] max-md:w-[20.9375rem] md:max-lg:w-[209.3px]">
      <div className="block">
        <img className={cn("w-full h-6 block max-w-full overflow-clip object-contain", styles.className)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} />
        {" "}
      </div>
      {" "}
      <div className="block -mt-1">
        <h4 className="block font-medium" data-component="heading">
          {d.title}
        </h4>
        {" "}
        <p className="block mt-2 text-sm leading-5.5">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
