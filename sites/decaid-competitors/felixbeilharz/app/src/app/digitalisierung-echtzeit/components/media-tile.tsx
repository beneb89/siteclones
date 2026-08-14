import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  alt: string;
  label: string;
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="w-full block relative max-w-[16.6667%] p-[0.3125rem] shrink-0 basis-1/6 max-md:max-w-none max-md:shrink-[initial] max-md:basis-[initial] md:max-lg:max-w-[25%] md:max-lg:basis-1/4">
      <div className={cn("box-content h-47.5 min-h-47.5 block p-2.5 rounded-[5px] text-color-001 text-center", styles.className)}>
        <span className="inline" aria-hidden="true" />
        {" "}
        <span className="inline">
          <img className="w-10.5 h-10.5 inline max-w-full overflow-clip align-middle" data-component="image" alt={d.alt} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" title={d.label} />
        </span>
        {" "}
        <div className="box-content min-h-12.5 block mt-[0.3125rem] mb-2.5 text-sm font-bold leading-[1.3125rem] max-md:h-12.5">
          {d.text}
        </div>
        <div className="box-content block text-xs leading-4.5" />
        {" "}
        <div className="box-content hidden">
          {d.text2}
        </div>
        {"   "}
        <div className="box-content hidden">
          {d.text3}
        </div>
        {"   "}
        <div className="box-content block text-lg font-bold leading-[1.6875rem] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem]">
          {d.text4}
        </div>
        {" "}
        <div className="box-content block text-xs leading-4.5" />
        {" "}
        <div className="box-content hidden text-lg font-bold leading-[1.6875rem]">
          {"0 "}
        </div>
        {" "}
        <div className="box-content block" />
        {" "}
        <div className="box-content hidden text-lg font-bold leading-[1.6875rem]">
          {"0 "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
