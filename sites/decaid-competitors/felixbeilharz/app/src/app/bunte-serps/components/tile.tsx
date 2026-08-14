import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("box-content table-row", styles.className)}>
      <div className="box-content border-b border-solid border-b-primary table-cell p-2">
        <form className="box-content block">
          <label className="box-content inline cursor-default">
            {" "}
            <input className="box-content w-[2.1875rem] h-4.5 border border-solid border-color-008 inline-block p-2.5 rounded-[3px] overflow-clip leading-4.5 text-center bg-background cursor-text" data-component="input" id="emoji-copy" readOnly type="text" value={d.value} />
            {" "}
            <button className="box-content border border-solid border-surface inline-block py-2.5 px-5 text-color-027 leading-5 text-center bg-surface cursor-pointer" data-component="button" type="button">
              Kopieren
            </button>
            {" "}
          </label>
          {" "}
        </form>
        {" "}
      </div>
      <div className="box-content border-b border-solid border-b-primary table-cell p-2">
        {d.text}
      </div>
    </div>
  );
}
