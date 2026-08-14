export type TextLink2Data = {
  href: string;
  label: string;
  label2: string;
  title: string;
  label3: string;
  label4: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border-t border-solid border-t-border grid py-7 items-baseline gap-8 cursor-pointer grid-cols-[100px_1fr_auto] max-md:py-6 max-md:gap-4 max-md:grid-cols-[80px_1fr]" data-component="link" href={d.href}>
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.6875rem] leading-[1.0625rem]">
        {d.label}
      </div>
      <div className="block">
        <div className="block mb-1.5 text-primary [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.98px] uppercase">
          {d.label2}
        </div>
        <h3 className="block text-xl font-medium leading-7 tracking-[-0.2px] max-md:text-[1.125rem] max-md:tracking-[-0.18px]" data-component="heading">
          {d.title}
        </h3>
        <div className="hidden mt-1 text-muted-foreground text-xs leading-4 max-md:block">
          {d.label3}
        </div>
      </div>
      <div className="block text-muted-foreground text-xs leading-4 max-md:hidden">
        {d.label4}
      </div>
    </a>
  );
}
