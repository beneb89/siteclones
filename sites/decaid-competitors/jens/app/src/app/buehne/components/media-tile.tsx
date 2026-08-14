export type MediaTileData = {
  ariaLabel: string;
  imgSrc: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="border border-solid border-border block relative rounded-2xl overflow-hidden bg-color-005">
      <div className="block relative aspect-video w-full">
        <button className="h-full block absolute top-0 inset-x-0 text-center cursor-pointer" data-component="button" aria-label={d.ariaLabel} type="button">
          <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle text-clr-0" data-component="image" alt="" src={d.imgSrc} />
          <span className="h-full block absolute top-0 inset-x-0" style={{ backgroundImage: "linear-gradient(to top, var(--clr-4) 0%, var(--clr-0) 50%, var(--clr-0) 100%)" }} aria-hidden="true" />
          <span className="flex absolute left-[clamp(101.7px,_50%,_calc(100%_-_101.7px))] rounded-full justify-center items-center bg-surface-3 [translate:-50%_-50%] h-16 w-16" aria-hidden="true">
            <svg className="w-auto h-5.5 block overflow-hidden align-middle text-primary" data-component="icon" fill="currentColor" height="22" viewBox="0 0 22 22" width="22">
              <path d="M5 3v16l14-8z" />
            </svg>
          </span>
        </button>
      </div>
      <div className="block py-3 px-4">
        <div className="block text-color-004 [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1.4px] uppercase">
          {d.text}
        </div>
        <div className="block mt-1 text-sm font-medium leading-[1.1875rem]">
          {d.text2}
        </div>
      </div>
    </div>
  );
}
