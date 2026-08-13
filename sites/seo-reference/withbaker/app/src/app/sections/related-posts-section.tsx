import FeatureCard from "../components/feature-card";
import { featureCardData as featureCardDataContent } from "../content";
/** Related Posts section. */
export default function RelatedPostsSection({ featureCardData = featureCardDataContent } = {}) {
  return (
    <section className="border-t border-solid border-t-border block mt-16 pt-8">
      <h2 className="block text-color-001 text-xl font-bold leading-6.5 tracking-[-0.2px]" data-component="heading">
        Related Posts
      </h2>
      {" "}
      <div className="flex mt-4 flex-col gap-2">
        {featureCardData.map((d, i) => <FeatureCard key={i} d={d} />)}
        {" "}
      </div>
      {" "}
    </section>
  );
}
