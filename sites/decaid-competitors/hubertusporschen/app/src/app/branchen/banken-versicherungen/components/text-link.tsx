export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="border-b border-solid border-b-border block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg leading-[1.9375rem] cursor-pointer pointer-events-none max-md:leading-[1.8125rem] 2xl:py-3 2xl:pl-5" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
