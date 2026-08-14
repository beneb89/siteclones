export type TextLink2Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border border-solid border-border block py-2 px-[14.9px] [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.1875rem] tracking-[0.88px] bg-surface-2 cursor-pointer max-md:px-3.5 max-md:leading-[1.125rem] 2xl:hidden" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
