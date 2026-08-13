export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="h-[25.5px] border border-solid border-clr-0 flex py-0.5 px-3 rounded-full text-primary text-xs font-semibold leading-[1.25rem] whitespace-nowrap text-nowrap bg-color-007 cursor-pointer hover:bg-primary hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-component="button" href={d.href}>
      {d.label}
    </a>
  );
}
