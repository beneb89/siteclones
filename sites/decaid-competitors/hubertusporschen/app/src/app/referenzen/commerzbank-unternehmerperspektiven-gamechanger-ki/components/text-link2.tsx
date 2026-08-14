export type TextLink2Data = {
  href: string;
  label: string;
  label2: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border border-solid border-border block p-5 bg-background cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
      {" "}
      <div className="block mb-1 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1rem] tracking-[1.33px] uppercase max-md:leading-[0.9375rem] 2xl:hidden">
        {d.label}
      </div>
      {" "}
      <div className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[0.9375rem] leading-[1.625rem] max-md:leading-6 2xl:hidden">
        {d.label2}
      </div>
      {" "}
    </a>
  );
}
