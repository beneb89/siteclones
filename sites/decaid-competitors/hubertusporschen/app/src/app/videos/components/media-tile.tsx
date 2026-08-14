import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <button className={cn("border border-solid border-border block relative overflow-hidden aspect-[9/16] text-center bg-color-009 cursor-pointer 2xl:py-[0.6625rem] 2xl:px-4 2xl:[font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] 2xl:text-[0.6875rem] 2xl:font-semibold 2xl:leading-[1.1875rem] 2xl:tracking-[1.54px] 2xl:uppercase 2xl:static 2xl:inset-auto 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] 2xl:aspect-[initial]", styles.className)} data-component="button" aria-label="Short abspielen: Short — KI-Insight" type="button">
      <img className="w-full block max-w-full overflow-clip object-cover aspect-[auto_270/480] align-middle h-full 2xl:hidden" data-component="image" alt="Short — KI-Insight" height="480" src={d.imgSrc} width="270" />
      {" "}
      <span className="h-full flex absolute top-0 inset-x-0 justify-center items-center bg-color-043 2xl:hidden">
        {" "}
        <span className="border border-solid border-primary flex py-2 px-4 items-center gap-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.4px] uppercase bg-surface-6 max-md:leading-4 2xl:hidden">
          {" "}
          <svg className="w-auto h-2.5 block overflow-hidden align-middle 2xl:hidden" data-component="icon" aria-hidden="true" fill="currentColor" height="10" viewBox="0 0 14 14" width="10">
            <path d="M2 1l11 6-11 6V1z" />
          </svg>
          {"\nShort\n"}
        </span>
        {" "}
      </span>
      {" "}
    </button>
  );
}
