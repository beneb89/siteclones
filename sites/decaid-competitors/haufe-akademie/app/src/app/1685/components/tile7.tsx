import type { Tile7Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile7Data = {
  style?: string;
  defaultChecked?: boolean;
  id: string;
  htmlFor: string;
  text: string;
  id2: string;
  text2: string;
};
/** A content tile. */
export default function Tile7({ d, styles }: { d: Tile7Data; styles: Tile7Styles }) {
  return (
    <div className="block">
      <div className={cn("h-6 min-h-6 inline-block mr-4 pl-6", styles.className)}>
        {" "}
        <input className={cn("w-3.5 h-3.5 border border-solid block float-left mt-[3.5px] -ml-[1.3125rem] rounded-[50%] shrink-0 align-top text-color-004 text-sm font-medium leading-3.5 text-start cursor-default", styles.className2)} style={d.style} data-component="input" defaultChecked={d.defaultChecked} id={d.id} name="typeOfLearning" type="radio" />
        {" "}
        <label className="inline-block font-medium cursor-default" htmlFor={d.htmlFor}>
          {d.text}
          <span className="inline" id={d.id2}>
            {d.text2}
          </span>
        </label>
        {" "}
      </div>
      {" "}
    </div>
  );
}
