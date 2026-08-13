import ProductCard from "../components/product-card";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block pb-16 px-6 mx-auto max-w-7xl">
      <h2 className="block mb-8 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading">
        Relevant Reads
      </h2>
      <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((d, i) => <ProductCard key={i} d={d} />)}
      </div>
    </section>
  );
}
