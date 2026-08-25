export type TextLinkData = {
  href: string;
  label: string;
  label2: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="border border-solid border-muted block p-5 rounded-[10px] text-primary cursor-pointer" data-component="link" href={d.href}>
      {" "}
      <span className="block mb-1.5 text-color-002 [font-family:'League_Spartan',_sans-serif] text-[1.25rem] font-bold tracking-[-0.2px]">
        {d.label}
      </span>
      {" "}
      <span className="block text-muted-foreground">
        {d.label2}
      </span>
      {" "}
    </a>
  );
}
