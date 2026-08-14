export type TextLink3Data = {
  label: string;
  title: string;
  description: string;
  label2: string;
  label3: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="border-r border-solid border-r-border border-b border-b-border flex flex-col bg-color-002 cursor-pointer 2xl:hidden" data-component="link" href="/blog/7-teure-fehler-von-matthias-schranner">
      {" "}
      <div className="block overflow-hidden aspect-video 2xl:hidden">
        <div className="border border-solid border-surface-3 flex relative p-4 justify-center items-center overflow-hidden text-color-013 text-xs font-medium leading-[1rem] tracking-[0.96px] text-center uppercase bg-color-005 w-full h-full max-md:bg-[none] 2xl:hidden">
          Cover
        </div>
        {" "}
      </div>
      {" "}
      <div className="flex p-[1.8625rem] flex-col gap-3 max-md:p-7 2xl:hidden">
        <span className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
          {d.label}
        </span>
        {" "}
        <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.3125rem] font-semibold leading-[1.625rem] tracking-[-0.31px] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="overflow-hidden text-muted-foreground text-sm leading-[1.375rem] line-clamp-3 2xl:hidden">
          {d.description}
        </p>
        {" "}
        <div className="border-t border-solid border-t-border flex pt-[14.9px] justify-between text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.4px] uppercase max-md:pt-3.5 max-md:leading-4 2xl:hidden">
          <span className="block 2xl:hidden">
            {d.label2}
          </span>
          {" "}
          <span className="block 2xl:hidden">
            {d.label3}
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
