import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile3Data = {
  imgSrc: string;
  description: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className={cn("w-[18.125rem] h-[15.9rem] min-h-px flex relative max-md:w-[23.4375rem] md:max-lg:w-[222.7px] md:max-lg:h-[247.7px]", styles.className)}>
      <div className={cn("flex relative p-2.5 flex-wrap content-start", styles.className2)}>
        <div className={cn("w-full block relative", styles.className3)}>
          <div className="h-full block">
            <img className="w-67.5 h-38 inline-block max-w-full overflow-clip aspect-[auto_238/134] align-middle max-md:w-[22.1875rem] max-md:h-50 md:max-lg:w-[12.6875rem] md:max-lg:h-28.5" data-component="image" alt="" height="134" src={d.imgSrc} width="238" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className={cn("block relative", styles.className4)}>
          <div className="block">
            <p className="block my-2.5 [font-family:'PP_Mori']">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
