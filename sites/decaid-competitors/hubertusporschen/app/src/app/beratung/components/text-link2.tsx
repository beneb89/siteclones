export type TextLink2Data = {
  href: string;
  label: string;
  label2: string;
  label3: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border-l-2 border-solid border-l-primary block p-[1.8625rem] bg-surface-2 cursor-pointer max-md:p-7" data-component="link" href={d.href}>
      {" "}
      <span className="block mb-[0.6625rem] text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:mb-2.5 max-md:leading-4">
        {d.label}
      </span>
      {" "}
      <div className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-medium leading-[1.5rem]">
        {d.label2}
      </div>
      {" "}
      <div className="block text-muted-foreground text-[0.9375rem] leading-[1.4375rem] max-md:text-sm max-md:leading-[1.375rem]">
        {d.label3}
      </div>
      {" "}
    </a>
  );
}
