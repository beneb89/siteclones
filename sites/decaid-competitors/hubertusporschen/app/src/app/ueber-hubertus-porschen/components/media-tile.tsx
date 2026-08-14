import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  ariaLabel: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("flex flex-col", styles.className)}>
      <button className="block relative overflow-hidden text-center bg-color-009 cursor-pointer aspect-[9/16] 2xl:hidden" data-component="button" aria-label={d.ariaLabel} type="button">
        <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_540/960] align-middle h-full 2xl:hidden" data-component="image" alt={d.alt} height="960" src={d.imgSrc} width="540" />
        {" "}
        <div className="h-full block absolute top-0 inset-x-0 bg-color-041 2xl:hidden" />
        {" "}
        <div className="h-full flex absolute top-0 inset-x-0 justify-center items-center 2xl:hidden">
          <span className="border border-solid border-primary flex py-[0.6625rem] px-4 items-center gap-[0.6625rem] text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.4px] uppercase bg-surface-6 max-md:py-2.5 max-md:gap-2.5 max-md:leading-4 2xl:hidden">
            {" "}
            <svg className="w-auto h-2.5 block overflow-hidden align-middle 2xl:hidden" data-component="icon" aria-hidden="true" fill="currentColor" height="10" viewBox="0 0 14 14" width="10">
              <path d="M2 1l11 6-11 6V1z" />
            </svg>
            {"\nAbspielen\n"}
          </span>
          {" "}
        </div>
        {" "}
        <div className="h-[4.05rem] block absolute bottom-0 inset-x-0 p-3 text-left max-md:h-[63.7px] 2xl:hidden" style={{ backgroundImage: "linear-gradient(to top, var(--clr-23) 0%, var(--clr-1) 100%)" }}>
          <div className="block mb-0.5 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1rem] tracking-[1.71px] uppercase max-md:leading-[0.9375rem] 2xl:hidden">
            Keynote-Track
          </div>
          {" "}
          <div className="block text-color-002 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg leading-[1.4375rem] 2xl:hidden">
            {d.label}
          </div>
          {" "}
        </div>
        {" "}
      </button>
      {" "}
      <button className="border-b border-dotted border-b-primary block mt-3 pb-0.5 self-center text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.1875rem] tracking-[1.54px] text-center uppercase cursor-pointer max-md:leading-[1.125rem] 2xl:hidden" data-component="button" type="button">
        {"\nKomplette Keynote sehen →\n"}
      </button>
      {" "}
    </div>
  );
}
