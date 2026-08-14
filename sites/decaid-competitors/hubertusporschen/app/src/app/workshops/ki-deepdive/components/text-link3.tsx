export type TextLink3Data = {
  ariaLabel: string;
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="border border-solid border-surface flex justify-center items-center text-[0.8125rem] leading-[1.0625rem] cursor-pointer w-[2.125rem] h-[2.125rem] max-md:text-xs max-md:leading-4" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noopener" target="_blank">
      {d.label}
    </a>
  );
}
