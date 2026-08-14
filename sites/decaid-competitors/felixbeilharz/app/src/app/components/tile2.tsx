import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className="block max-w-[20%] pl-[1.5625rem] grow max-lg:max-w-full max-lg:shrink-0 max-md:basis-[390px] md:max-lg:basis-[250px]">
      <div className="h-full flex relative flex-col">
        <div className={cn("block p-px [overflow-wrap:break-word]", styles.className)}>
          <p className={cn("block pt-[0.3125rem] pb-2.5 text-background text-lg leading-[2rem] text-center max-md:text-sm max-md:leading-[1.5625rem]", styles.className2)}>
            <a className="border-b border-dashed border-b-primary inline [font-family:'Open_Sans'] [background-size:1px_0px] [background-position:0px_100%] bg-repeat-x cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--clr-1) 0%, var(--clr-1) 100%)" }} data-component="link" href={d.href} target="_blank">
              <strong className="inline font-semibold">
                {d.description}
              </strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
