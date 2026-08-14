export type TextLinkData = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="block relative py-[0.6875rem] px-4 rounded-lg text-muted-foreground text-sm font-medium leading-[1.375rem] whitespace-nowrap text-nowrap cursor-pointer pointer-events-none max-lg:p-2.5 max-lg:text-lg max-lg:leading-[1.8125rem] max-lg:[pointer-events:initial] after:content-[''] after:hidden after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary" data-component="link" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
