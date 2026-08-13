export type TextLinkData = {
  href: string;
  label: string;
  label2: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="h-[3.3125rem] border-b border-solid border-b-border flex py-4 justify-between items-baseline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <span className="block text-muted-foreground text-sm leading-5">
        {d.label}
      </span>
      <span className="block text-color-001 text-sm leading-5">
        {d.label2}
      </span>
    </a>
  );
}
