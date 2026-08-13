import FeatureCard2 from "../components/feature-card2";
import { features2 as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection2({ features = featuresContent } = {}) {
  return (
    <section className="block mb-10">
      <h2 className="block mt-10 mb-4 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-2xl font-semibold leading-8 tracking-[-0.24px]" data-component="heading">
        Microsoft Ads Agent Tools in Synter MCP
      </h2>
      <div className="block leading-6.5">
        <div className="block" id="microsoft-tools">
          <div className="w-full grid mt-4 gap-4 grid-cols-1 md:grid-cols-2">
            {features.map((d, i) => <FeatureCard2 key={i} d={d} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
