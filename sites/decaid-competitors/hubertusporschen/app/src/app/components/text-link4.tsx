export type TextLink4Data = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
/** A text link. */
export default function TextLink4({ d }: { d: TextLink4Data }) {
  return (
    <a className="border border-solid border-color-002 flex py-[1.0625rem] px-6.5 justify-between items-center gap-[14.9px] text-[0.8125rem] font-semibold leading-[1.375rem] tracking-[0.52px] uppercase whitespace-nowrap text-nowrap cursor-pointer max-md:gap-3.5 max-md:leading-[1.3125rem] 2xl:hidden" data-component="button" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
