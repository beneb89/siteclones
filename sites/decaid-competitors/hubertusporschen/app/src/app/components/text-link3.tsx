export type TextLink3Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="block [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.9375rem] tracking-[0.9px] uppercase cursor-pointer max-md:leading-[0.875rem] 2xl:hidden" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
