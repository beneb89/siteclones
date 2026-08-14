export type MediaCardData = {
  ariaLabel: string;
  alt: string;
  imgSrc: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <article className="border border-solid border-border flex flex-col bg-background 2xl:hidden">
      <button className="border-b border-solid border-b-border block relative overflow-hidden text-center bg-surface-2 cursor-pointer w-full aspect-video 2xl:hidden" data-component="button" aria-label={d.ariaLabel} type="button">
        <img className="w-full block max-w-full overflow-clip object-cover aspect-[auto_480/270] align-middle h-full 2xl:hidden" data-component="image" alt={d.alt} height="270" src={d.imgSrc} width="480" />
        {" "}
        <span className="h-full flex absolute top-0 inset-x-0 justify-center items-center bg-clr-1 2xl:hidden">
          {" "}
          <span className="border border-solid border-primary flex py-2 px-4 items-center gap-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.4px] uppercase bg-surface-6 max-md:leading-4 2xl:hidden">
            {" "}
            <svg className="w-auto h-2.5 block overflow-hidden align-middle 2xl:hidden" data-component="icon" aria-hidden="true" fill="currentColor" height="10" viewBox="0 0 14 14" width="10">
              <path d="M2 1l11 6-11 6V1z" />
            </svg>
            {"\nAbspielen\n"}
          </span>
          {" "}
        </span>
        {" "}
      </button>
      {" "}
      <div className="block py-5 px-6 2xl:hidden">
        <h3 className="block mb-1 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-base font-medium leading-[1.3125rem] tracking-[-0.16px] max-md:[font-size:inherit] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.125rem] tracking-[1.47px] uppercase max-md:leading-[1.0625rem] 2xl:hidden">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </article>
  );
}
