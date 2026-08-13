import FeatureCard from "../components/feature-card";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="border-t border-solid border-t-border block py-10 bg-background" aria-label="Keep Reading">
      <div className="block max-w-300 mx-auto px-10 max-md:px-4 md:max-lg:px-5">
        <h2 className="block mb-8 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-[2.8125rem] [font-weight:1000] leading-[2.8125rem] tracking-[-1.12px] text-center uppercase [overflow-wrap:break-word] max-md:text-[1.4375rem] max-md:leading-[1.4375rem] max-md:tracking-[-0.56px] max-md:[word-break:break-word] md:max-lg:text-[2.375rem] md:max-lg:leading-[2.375rem] md:max-lg:tracking-[-0.96px]" data-component="heading">
          Keep Reading
        </h2>
        <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-3">
          {features.map((d, i) => <FeatureCard key={i} d={d} />)}
        </div>
        <p className="block mt-8 mb-4 text-center">
          <a className="inline text-primary font-semibold cursor-pointer hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] hover:underline" data-component="link" href="/blog">
            View all posts →
          </a>
        </p>
      </div>
    </section>
  );
}
