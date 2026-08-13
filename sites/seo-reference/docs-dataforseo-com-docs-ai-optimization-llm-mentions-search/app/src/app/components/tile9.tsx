import type { Tile9Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile9Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile9({ d, styles }: { d: Tile9Data; styles: Tile9Styles }) {
  return (
    <div className={cn("w-[1e+06px] h-3.5 block absolute left-0 pointer-events-none max-lg:invisible", styles.className)}>
      <span className="inline [background-position:100%_50%] bg-repeat-y pointer-events-none max-lg:invisible" style={{ backgroundImage: "url(data:image/png" }}>
        {"    "}
      </span>
      {"  "}
      <span className="inline text-color-002 pointer-events-none max-lg:invisible">
        {d.text}
      </span>
      {": "}
      <span className={cn("inline pointer-events-none max-lg:invisible", styles.className2)}>
        {d.text2}
      </span>
      <span className="inline pointer-events-none max-lg:invisible">
        ,
      </span>
    </div>
  );
}
