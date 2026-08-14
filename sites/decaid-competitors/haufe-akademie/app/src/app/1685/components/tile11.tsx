import type { Tile11Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile11Data = {
  text: string;
};
/** A content tile. */
export default function Tile11({ d, styles }: { d: Tile11Data; styles: Tile11Styles }) {
  return (
    <div className={cn("flex relative pb-[22.1rem] rounded-xl flex-col overflow-hidden [overflow-wrap:break-word] bg-background max-md:pb-[17.8rem] md:max-lg:pb-[33.7875rem] after:content-[''] after:block after:w-full after:h-0 after:-mb-[10.4125rem] max-md:after:-mb-[8.2625rem]", styles.className)}>
      <div className="block mt-4 mb-1 text-primary text-[3rem] text-center">
        <i className="inline-block [font-family:'Font_Awesome_Pro'] font-black leading-12" />
      </div>
      {" "}
      <div className="block p-4 grow text-center">
        {d.text}
      </div>
      {" "}
    </div>
  );
}
