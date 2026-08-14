export type TextLink3Data = {
  label: string;
  title: string;
  description: string;
  label2: string;
  label3: string;
  label4: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="border-t-[3px] border-solid border-t-accent block p-[1.8625rem] bg-surface-2 cursor-pointer max-md:p-7 2xl:hidden" data-component="link" href="/referenzen/commerzbank-unternehmerperspektiven-gamechanger-ki">
      {" "}
      <div className="block mb-3 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
        {d.label}
      </div>
      {" "}
      <h3 className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-medium leading-[1.5625rem] tracking-[-0.2px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-4 text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className="flex mb-5 flex-wrap gap-3 2xl:hidden">
        <span className="border border-solid border-border block py-1 px-[0.6625rem] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.9375rem] tracking-[1.08px] uppercase bg-background max-md:px-2.5 max-md:leading-[0.875rem] 2xl:hidden">
          {d.label2}
        </span>
        {" "}
        <span className="border border-solid border-border block py-1 px-[0.6625rem] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.9375rem] tracking-[1.08px] uppercase bg-background max-md:px-2.5 max-md:leading-[0.875rem] 2xl:hidden">
          {d.label3}
        </span>
        {" "}
        <span className="border border-solid border-border block py-1 px-[0.6625rem] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.9375rem] tracking-[1.08px] uppercase bg-background max-md:px-2.5 max-md:leading-[0.875rem] 2xl:hidden">
          {d.label4}
        </span>
        {" "}
      </div>
      {" "}
      <div className="block text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.1875rem] tracking-[0.88px] max-md:leading-[1.125rem] 2xl:hidden">
        Case lesen →
      </div>
      {" "}
    </a>
  );
}
