export type FeatureCard3Data = {
  title: string;
};
/** A feature card. */
export default function FeatureCard3({ d }: { d: FeatureCard3Data }) {
  return (
    <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-1 overflow-clip">
      <div className="w-3.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
        <h6 className="block text-background [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem]" data-component="heading">
          —
        </h6>
      </div>
      <div className="w-[452.7px] flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[18.8125rem] md:max-lg:w-173.5 2xl:w-[719.3px]">
        <h6 className="block text-background [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem]" data-component="heading">
          {d.title}
        </h6>
      </div>
    </div>
  );
}
