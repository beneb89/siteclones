export type TextLink2Data = {
  href: string;
  label: string;
  label2: string;
  label3: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="hidden 2xl:border-l-2 2xl:border-solid 2xl:border-l-primary 2xl:block 2xl:p-[1.8625rem] 2xl:bg-surface-2 2xl:cursor-pointer" href={d.href}>
      {" "}
      <span className="hidden 2xl:block 2xl:mb-[0.6625rem] 2xl:text-primary 2xl:[font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] 2xl:text-[0.625rem] 2xl:font-semibold 2xl:leading-[1.0625rem] 2xl:tracking-[1.8px] 2xl:uppercase">
        {d.label}
      </span>
      {" "}
      <div className="hidden 2xl:block 2xl:mb-2 2xl:[font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] 2xl:text-[1.1875rem] 2xl:font-medium 2xl:leading-[1.5rem]">
        {d.label2}
      </div>
      {" "}
      <div className="hidden 2xl:block 2xl:text-muted-foreground 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem]">
        {d.label3}
      </div>
      {" "}
    </a>
  );
}
