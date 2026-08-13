export type TextLink2Data = {
  ariaLabel: string;
  href: string;
  style: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border border-solid border-border flex min-w-0 py-3 rounded-xl flex-col justify-center items-center gap-1.5 bg-background cursor-pointer pointer-events-none" aria-label={d.ariaLabel} href={d.href}>
      <span className="w-5 h-5 block min-w-0 [background-size:100%_100%] bg-no-repeat pointer-events-none" style={d.style} aria-hidden="true" />
      <span className="block min-w-0 text-[0.6875rem] font-medium leading-[1.0625rem] pointer-events-none">
        {d.label}
      </span>
    </a>
  );
}
