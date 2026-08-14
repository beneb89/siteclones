export type TextLink2Data = {
  href: string;
  label: string;
  label2: string;
  text: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border border-solid border-border flex p-6 flex-col gap-[0.6625rem] bg-color-002 cursor-pointer max-md:gap-2.5 2xl:hidden" data-component="link" href={d.href}>
      {" "}
      <span className="block text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
        {d.label}
      </span>
      {" "}
      <div className="block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-4xl italic leading-9 tracking-[-0.72px] 2xl:hidden">
        {d.label2}
        <em className="inline text-primary 2xl:hidden">
          {d.text}
        </em>
      </div>
      {" "}
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.1875rem] tracking-[0.88px] max-md:leading-[1.125rem] 2xl:hidden">
        13:00 Uhr · 60 Min
      </div>
      {" "}
      <span className="border-t border-solid border-t-border block pt-3 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden">
        Kostenfrei anmelden →
      </span>
      {" "}
    </a>
  );
}
