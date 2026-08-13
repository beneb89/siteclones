import FeatureCard4 from "../components/feature-card4";
import { FeatureCard4_styles } from "../_styles";
import { featureCard4Data as featureCard4DataContent } from "../content";
/** Faq section. */
export default function FaqSection({ featureCard4Data = featureCard4DataContent } = {}) {
  return (
    <section className="block mb-10">
      <h2 className="block mt-10 mb-4 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-2xl font-semibold leading-8 tracking-[-0.24px]" data-component="heading">
        FAQ
      </h2>
      <div className="block leading-6.5">
        <div className="block" id="faq">
          {featureCard4Data.map((d, i) => <FeatureCard4 key={i} d={d} styles={FeatureCard4_styles[i]} />)}
        </div>
      </div>
    </section>
  );
}
