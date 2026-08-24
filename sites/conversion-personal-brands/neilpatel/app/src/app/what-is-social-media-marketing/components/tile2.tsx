import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  kind?: string;
  href: string;
  style: string;
  label: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className="box-content w-[13.1875rem] h-70 flex relative flex-wrap justify-between content-between shrink-0 cursor-default">
      <a className={cn("box-content w-full block cursor-pointer", styles.className)} data-component={d.kind} href={d.href} rel="noreferrer" target="_blank">
        <div className="box-content h-full block relative rounded-sm bg-cover [background-position:50%_50%] bg-no-repeat" style={d.style}>
          <span className="box-content w-4 h-4 block absolute bottom-1 left-1 bg-cover" style={{ backgroundImage: "url(\"/assets/cloned/svg/2a3c56db552d.svg\")" }} />
          <span className={cn("box-content h-[1.0625rem] block absolute bottom-[0.1875rem] left-5.5 text-background text-[0.8125rem] leading-[1.0625rem]", styles.className2)}>
            {d.label}
          </span>
        </div>
      </a>
    </div>
  );
}
