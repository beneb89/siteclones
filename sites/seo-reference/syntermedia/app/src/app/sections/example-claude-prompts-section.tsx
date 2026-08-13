import FeatureCard3 from "../components/feature-card3";
import { featureCard3Data as featureCard3DataContent } from "../content";
/** Example Claude Prompts section. */
export default function ExampleClaudePromptsSection({ featureCard3Data = featureCard3DataContent } = {}) {
  return (
    <section className="block mb-10">
      <h2 className="block mt-10 mb-4 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-2xl font-semibold leading-8 tracking-[-0.24px]" data-component="heading">
        Example Claude Prompts for Microsoft Ads
      </h2>
      <div className="block leading-6.5">
        <div className="block" id="example-prompts">
          <div className="grid mt-4 gap-4 grid-cols-1">
            {featureCard3Data.map((d, i) => <FeatureCard3 key={i} d={d} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
