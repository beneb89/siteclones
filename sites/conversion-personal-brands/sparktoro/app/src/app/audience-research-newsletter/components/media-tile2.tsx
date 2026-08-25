import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  alt: string;
  height: string;
  imgSrc: string;
  width: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="border-2 border-solid border-border block py-7 px-6.5 rounded-[18px] text-center bg-background">
      <div className="w-14 h-14 border-2 border-solid border-border inline-flex mb-3.5 rounded-[50%] justify-center items-center bg-surface-11">
        <img className={cn("w-6.5 h-6.5 block overflow-clip align-middle", styles.className)} data-component="image" alt={d.alt} height={d.height} src={d.imgSrc} width={d.width} />
      </div>
      {" "}
      <div className="block mb-1.5 [font-family:'League_Spartan',_sans-serif] text-xl font-extrabold leading-7.5 uppercase">
        {d.text}
      </div>
      {" "}
      <div className="block text-color-014 text-[0.9375rem] leading-[1.4375rem]">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
