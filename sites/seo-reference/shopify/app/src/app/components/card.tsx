import type { CardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type CardData = {
  imgSrc: string;
};
/** A card. */
export default function Card({ d, styles }: { d: CardData; styles: CardStyles }) {
  return (
    <div className={cn("block absolute z-10 min-w-0 rounded-2xl overflow-hidden w-40 max-md:hidden max-lg:w-24 md:max-lg:rounded-lg", styles.className)}>
      <picture className="inline">
        <img className="w-40 h-[12.8125rem] block max-w-full overflow-clip align-middle md:max-lg:w-24 md:max-lg:h-[7.6875rem]" data-component="image" alt="" src={d.imgSrc} />
      </picture>
    </div>
  );
}
