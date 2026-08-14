import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  label: string;
  label2: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className="list-item">
      <button className="w-full flex opacity-80 py-1.5 px-5 items-center text-[0.625rem] tracking-[normal] text-center cursor-pointer" data-component="button" name="button" type="button">
        <img className="w-auto h-5 block opacity-[0.625] overflow-clip max-md:h-4" data-component="image" alt="Play" src="/assets/cloned/svg/c1a2ec48ba71.svg" />
        {"  "}
        <span className="block min-w-0 mx-2.5 overflow-hidden text-xs font-bold leading-3.5 whitespace-nowrap text-nowrap max-md:text-[0.6875rem] max-md:leading-[0.8125rem]">
          {d.label}
        </span>
        {" "}
        <span className={cn("block whitespace-nowrap text-nowrap", styles.className)}>
          {d.label2}
        </span>
        {" "}
      </button>
      {" "}
    </li>
  );
}
