export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="block py-6 px-[1.8625rem] bg-background max-md:px-7 2xl:border-t-[3px] 2xl:border-solid 2xl:border-t-accent 2xl:p-8 2xl:bg-surface-2">
      <div className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:text-accent 2xl:text-[0.6875rem] 2xl:leading-[1.1875rem] 2xl:tracking-[1.98px] 2xl:[text-transform:inherit]">
        {d.text}
      </div>
      <h3 className="block mb-[0.4rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] font-medium leading-[1.375rem] max-md:mb-1.5 max-md:text-[1.0625rem] 2xl:mb-3 2xl:text-primary 2xl:text-[1.375rem] 2xl:leading-[1.625rem] 2xl:tracking-[-0.22px]" data-component="heading">
        {d.title}
      </h3>
      <p className="block text-muted-foreground text-sm leading-[1.3125rem] 2xl:mb-4 2xl:[font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] 2xl:text-[0.625rem] 2xl:font-medium 2xl:leading-[1.0625rem] 2xl:tracking-[1.4px] 2xl:uppercase">
        {d.description}
      </p>
      <p className="hidden 2xl:block 2xl:text-muted-foreground 2xl:text-[0.9375rem] 2xl:leading-[1.5625rem]">
        {d.description2}
      </p>
    </div>
  );
}
