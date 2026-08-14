export type FeatureCard4Data = {
  text: string;
  title: string;
  description: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard4({ d }: { d: FeatureCard4Data }) {
  return (
    <div className="hidden 2xl:border-t-[3px] 2xl:border-solid 2xl:border-t-accent 2xl:block 2xl:p-8 2xl:bg-surface-2">
      <div className="hidden 2xl:block 2xl:mb-2 2xl:text-accent 2xl:[font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] 2xl:text-[0.6875rem] 2xl:font-semibold 2xl:leading-[1.1875rem] 2xl:tracking-[1.98px]">
        {d.text}
      </div>
      {" "}
      <h3 className="hidden 2xl:block 2xl:mb-3 2xl:text-primary 2xl:[font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] 2xl:text-[1.375rem] 2xl:font-medium 2xl:leading-[1.625rem] 2xl:tracking-[-0.22px]">
        {d.title}
      </h3>
      {" "}
      <p className="hidden 2xl:block 2xl:mb-4 2xl:text-muted-foreground 2xl:[font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] 2xl:text-[0.625rem] 2xl:font-medium 2xl:leading-[1.0625rem] 2xl:tracking-[1.4px] 2xl:uppercase">
        {d.description}
      </p>
      {" "}
      <p className="hidden 2xl:block 2xl:text-muted-foreground 2xl:text-[0.9375rem] 2xl:leading-[1.5625rem]">
        {d.description2}
      </p>
      {" "}
    </div>
  );
}
