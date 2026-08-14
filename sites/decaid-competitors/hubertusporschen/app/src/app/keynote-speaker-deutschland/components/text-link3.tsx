export type TextLink3Data = {
  label: string;
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="border border-solid border-surface-7 block p-6 bg-color-005 cursor-pointer 2xl:hidden" data-component="link" href="/referenzen/commerzbank-unternehmerperspektiven-gamechanger-ki">
      {" "}
      <div className="block mb-2 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] font-semibold leading-[0.9375rem] tracking-[1.8px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
        {d.label}
      </div>
      {" "}
      <h3 className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] font-medium italic leading-[1.3125rem] tracking-[-0.17px] max-md:text-[1.0625rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-color-018 text-[0.8125rem] leading-[1.25rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </a>
  );
}
