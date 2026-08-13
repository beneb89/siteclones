import TextLink from "../components/text-link";
import { textLinkData as textLinkDataContent } from "../content";
/** Guide section. */
export default function GuideSection({ textLinkData = textLinkDataContent } = {}) {
  return (
    <div className="border border-solid border-border block p-6 rounded-xl overflow-hidden [overflow-wrap:break-word] bg-color-004">
      <h3 className="block mt-8 mb-3 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-[1.25rem] font-semibold" data-component="heading">
        In This Guide
      </h3>
      <div className="block">
        <div className="grid gap-2 text-sm leading-5 grid-cols-[repeat(auto-fit,_minmax(276px,_1fr))] grid-rows-4 max-md:grid-rows-7">
          {textLinkData.map((d, i) => <TextLink key={i} d={d} />)}
        </div>
      </div>
    </div>
  );
}
