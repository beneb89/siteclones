export type TextLink2Data = {
  href: string;
  label: string;
  description: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border border-solid border-border block p-5 bg-background cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
      {" "}
      <div className="block mb-1 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-base font-medium leading-[1.6875rem] max-md:[font-size:inherit] max-md:leading-[inherit] 2xl:hidden">
        {d.label}
      </div>
      {" "}
      <p className="block text-muted-foreground text-[0.8125rem] leading-[1.25rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </a>
  );
}
