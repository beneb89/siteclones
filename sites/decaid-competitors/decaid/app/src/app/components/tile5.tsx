import type { Tile5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile5Data = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <div className="border-b border-solid border-b-muted block mt-5">
      <div className="block">
        <div className="block -mt-px text-left">
          <a className={cn("border-b border-solid border-b-surface-3 flex max-w-full py-[1.5625rem] justify-start items-center text-background text-[1rem] font-bold cursor-pointer max-md:leading-6", styles.className)} data-component="link" href="#">
            <div className="block">
              <strong className="inline text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-[1.375rem] font-medium leading-6 max-md:text-lg max-md:leading-[inherit]">
                {d.text}
              </strong>
            </div>
            <div className={cn("w-6 h-6 flex relative justify-center items-center max-md:shrink-0", styles.className2)}>
              <div className="w-full h-0.5 block bg-color-001" />
              <div className={cn("w-6 h-0.5 block absolute min-w-0 bg-color-001 transform-[matrix(0,1,-1,0,0,0)] origin-[12px_1px]", styles.className3)} />
            </div>
          </a>
          <div className="h-0 block overflow-hidden">
            <div className="block opacity-0 py-[0.9375rem] transform-[matrix(1,0,0,1,0,5)]">
              <p className="block relative z-4 mb-2.5 text-color-002 [font-family:Satoshi,_Arial,_sans-serif] text-lg leading-[1.5rem] max-md:leading-[1.3125rem] max-md:[font-size:inherit]">
                {d.description}
                <br className="inline" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
