export type TextLink2Data = {
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="border-t-[3px] border-solid border-t-accent block p-6 bg-surface-2 cursor-pointer 2xl:hidden" data-component="link" href="/referenzen/commerzbank-unternehmerperspektiven-gamechanger-ki">
      {" "}
      <h3 className="block mb-2 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] font-medium leading-[1.3125rem] tracking-[-0.17px] max-md:text-[1.0625rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </a>
  );
}
