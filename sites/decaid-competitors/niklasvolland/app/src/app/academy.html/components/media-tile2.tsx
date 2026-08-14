export type MediaTile2Data = {
  ariaLabel: string;
  poster: string;
  preload: string;
  videoSrc?: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <div className="border border-solid border-border block relative rounded-3xl overflow-hidden aspect-[9/16] text-left bg-color-010 cursor-pointer" data-component="button" aria-label={d.ariaLabel} role="button">
      <video className="w-full h-full block absolute top-0 left-0 z-0 overflow-clip object-cover bg-color-015" playsInline poster={d.poster} preload={d.preload} src={d.videoSrc} />
      {" "}
      <div className="h-full block absolute top-0 inset-x-0 z-1 pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--clr-0) 0%, var(--clr-20) 30%, var(--clr-21) 65%, var(--clr-22) 100%)" }} />
      {" "}
      <div className="w-17 h-17 border border-solid border-surface-3 flex absolute top-[clamp(296.8px,_50%,_calc(100%_-_296.8px))] left-[clamp(166.5px,_50%,_calc(100%_-_166.5px))] z-2 rounded-[50%] justify-center items-center bg-color-022 shadow-[var(--clr-23)_0px_12px_32px_0px,var(--color-003)_0px_0px_40px_0px] transform-[matrix(1,0,0,1,-34,-34)]" aria-hidden="true">
        <svg className="w-auto h-5.5 block overflow-hidden" data-component="icon" fill="white" height="22" viewBox="0 0 16 16" width="22">
          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
        </svg>
        {" "}
      </div>
      {" "}
      <div className="h-[6.1375rem] block absolute bottom-0 inset-x-0 z-2 py-5.5 px-6 text-color-007">
        <strong className="block mb-[0.1875rem] font-semibold tracking-[-0.08px]">
          {d.text}
        </strong>
        {" "}
        <span className="inline text-color-011 text-[0.8125rem] leading-[1.3125rem]">
          {d.text2}
        </span>
        {" "}
      </div>
      {" "}
    </div>
  );
}
