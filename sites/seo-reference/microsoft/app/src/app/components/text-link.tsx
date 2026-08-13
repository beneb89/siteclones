export type TextLinkData = {
  href: string;
  id?: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="h-13.5 flex px-3 justify-center items-center text-foreground text-[0.8125rem] leading-[1.3125rem] whitespace-nowrap text-nowrap cursor-pointer max-lg:hidden hover:underline focus:bg-surface focus:[outline-style:dashed] focus:outline-1" data-component="link" href={d.href} id={d.id}>
      {d.label}
    </a>
  );
}
