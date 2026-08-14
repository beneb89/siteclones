import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  style: string;
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className="border border-solid border-color-003 block mb-10 rounded-[10px] overflow-hidden max-md:hidden">
      <div className={cn("block bg-cover", styles.className)} style={d.style} />
      <div className="block pt-5 pb-2.5 px-5 text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-2xl font-light leading-9">
        <span className="inline text-[1.625rem] font-medium">
          {d.text}
        </span>
      </div>
      <p className="block max-w-185 mt-7.5 mb-5 pr-8 pl-5 [font-family:Satoshi,_Arial,_sans-serif] text-lg leading-[1.5625rem] md:max-lg:text-base md:max-lg:leading-[1.375rem]">
        {d.description}
      </p>
    </div>
  );
}
