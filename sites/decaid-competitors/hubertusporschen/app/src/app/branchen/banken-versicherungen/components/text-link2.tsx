export type TextLink2Data = {
  label: string;
  label2: string;
  label3: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border-l-2 border-solid border-l-color-003 block bg-color-002 cursor-pointer 2xl:border-l-primary 2xl:p-[1.8625rem] 2xl:bg-surface-2" data-component="link" href="/branchen/banken-versicherungen">
      <span className="block mb-[0.6625rem] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.8px] uppercase max-md:mb-2.5 max-md:leading-4 2xl:text-primary 2xl:font-semibold">
        {d.label}
      </span>
      <div className="block mb-[0.4rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-semibold leading-[1.5625rem] max-md:mb-1.5 max-md:text-lg max-md:leading-[1.4375rem] 2xl:mb-2 2xl:font-medium 2xl:leading-[1.5rem] 2xl:text-[color:inherit]">
        {d.label2}
      </div>
      <div className="block text-muted-foreground text-sm leading-[1.25rem] 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem]">
        {d.label3}
      </div>
    </a>
  );
}
