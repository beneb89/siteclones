export type TextLinkData = {
  href: string;
  label: string;
  label2: string;
  title: string;
  description: string;
  label3: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="border-t border-solid border-t-border grid py-7 items-baseline gap-8 cursor-pointer grid-cols-[100px_1fr_auto]" data-component="link" href={d.href}>
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.6875rem] leading-[1.0625rem]">
        {d.label}
      </div>
      <div className="block">
        <div className="block mb-1.5 text-primary [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.98px] uppercase">
          {d.label2}
        </div>
        <h2 className="block text-xl font-medium leading-7 tracking-[-0.2px]" data-component="heading">
          {d.title}
        </h2>
        <p className="mt-1.5 overflow-hidden text-muted-foreground text-sm font-light leading-[1.3125rem] line-clamp-2">
          {d.description}
        </p>
      </div>
      <div className="block text-muted-foreground text-xs leading-4">
        {d.label3}
      </div>
    </a>
  );
}
