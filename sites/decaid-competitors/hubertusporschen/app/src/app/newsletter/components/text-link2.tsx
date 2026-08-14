export type TextLink2Data = {
  label: string;
  title: string;
  title2: string;
  description: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border border-solid border-color-003 flex p-[1.8625rem] flex-col gap-[14.9px] bg-color-002 cursor-pointer max-md:p-7 max-md:gap-3.5 2xl:hidden" data-component="link" href="#anmeldung">
      {" "}
      <div className="border-b border-solid border-b-border block pb-[14.9px] text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.125rem] tracking-[1.68px] uppercase max-md:pb-3.5 max-md:leading-[1.0625rem] 2xl:hidden">
        {d.label}
      </div>
      {" "}
      <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-medium leading-[1.75rem] tracking-[-0.33px] 2xl:hidden" data-component="heading">
        {d.title}
        <em className="inline text-accent italic 2xl:hidden">
          {d.title2}
        </em>
        {" "}
      </h3>
      {" "}
      <p className="block grow text-muted-foreground text-[0.9375rem] leading-[1.4375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <span className="border-b border-solid border-b-accent block pb-0.5 self-start text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.54px] uppercase max-md:leading-[1.125rem] 2xl:hidden">
        {"\nIm Archiv lesen →\n"}
      </span>
      {" "}
    </a>
  );
}
