export type TextLink3Data = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="border border-solid border-border block py-[0.5625rem] px-4 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.54px] uppercase bg-color-002 cursor-pointer max-md:leading-[1.125rem] 2xl:hidden" data-component="link" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
