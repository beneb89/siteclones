export type FeatureCard3Data = {
  text: string;
  title: string;
  description: string;
  title2: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
};
/** A feature card. */
export default function FeatureCard3({ d }: { d: FeatureCard3Data }) {
  return (
    <div className="block p-[1.8625rem] bg-background max-md:p-7 2xl:border-b 2xl:border-solid 2xl:border-b-border 2xl:grid 2xl:py-6 2xl:items-baseline 2xl:gap-8 2xl:grid-cols-[38.25px_809.75px] 2xl:px-0 2xl:bg-[initial]">
      <div className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:leading-4 2xl:mb-0 2xl:text-[color:inherit] 2xl:[font-family:inherit] 2xl:[font-size:inherit] 2xl:[font-weight:inherit] 2xl:leading-[inherit] 2xl:tracking-[inherit] 2xl:[text-transform:inherit]">
        {d.text}
        <h3 className="hidden 2xl:block 2xl:mb-[0.4rem] 2xl:[font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] 2xl:text-[1.375rem] 2xl:font-medium 2xl:leading-[1.75rem] 2xl:tracking-[-0.22px]">
          {d.title}
        </h3>
        <p className="hidden 2xl:block 2xl:max-w-144 2xl:text-muted-foreground 2xl:text-[0.9375rem] 2xl:leading-[1.5625rem]">
          {d.description}
        </p>
      </div>
      {" "}
      <h3 className="block mb-[0.6625rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.4375rem] tracking-[-0.18px] max-md:mb-2.5 2xl:hidden" data-component="heading">
        {d.title2}
      </h3>
      {" "}
      <ul className="block text-muted-foreground text-sm leading-[1.4375rem] [list-style-type:none] list-outside 2xl:hidden">
        <li className="list-item 2xl:hidden">
          {d.text2}
        </li>
        <li className="list-item 2xl:hidden">
          {d.text3}
        </li>
        <li className="list-item 2xl:hidden">
          {d.text4}
        </li>
        <li className="list-item 2xl:hidden">
          {d.text5}
        </li>
        <li className="list-item 2xl:hidden">
          {d.text6}
        </li>
        <li className="list-item 2xl:hidden">
          {d.text7}
        </li>
      </ul>
      {" "}
    </div>
  );
}
