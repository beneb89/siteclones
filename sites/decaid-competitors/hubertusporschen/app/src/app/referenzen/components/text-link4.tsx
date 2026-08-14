export type TextLink4Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink4({ d }: { d: TextLink4Data }) {
  return (
    <a className="block [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.1875rem] tracking-[0.88px] cursor-pointer max-md:leading-[1.125rem] 2xl:hidden" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
