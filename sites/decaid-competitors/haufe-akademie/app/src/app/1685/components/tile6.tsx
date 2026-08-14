import type { Tile6Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile6Data = {
  text: string;
  ariaLabel: string;
  ariavaluenow: string;
  text2: string;
};
/** A content tile. */
export default function Tile6({ d, styles }: { d: Tile6Data; styles: Tile6Styles }) {
  return (
    <div className="flex justify-end items-center gap-2">
      <div className="flex grow">
        {d.text}
      </div>
      {" "}
      <div className="w-[24%] flex justify-end items-center font-medium leading-4 max-md:w-[28%] md:max-lg:w-[25.5%]">
        <div className="w-full h-1.5 flex rounded-sm overflow-hidden text-[0.75rem] bg-color-017" aria-label={d.ariaLabel} aria-valuemax="5" aria-valuemin="1" aria-valuenow={d.ariavaluenow} role="progressbar">
          <div className={cn("flex flex-col justify-center overflow-hidden text-center whitespace-nowrap text-nowrap bg-primary", styles.className)} />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="w-8 flex min-w-8 justify-end font-medium leading-4">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
