import ProductCard from "../components/product-card";
import { products as productsContent } from "../content";
/** Product Grid section. */
export default function ProductGridSection({ products = productsContent } = {}) {
  return (
    <section className="block pb-8 px-6 mx-auto max-w-7xl">
      <h2 className="block mb-6 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading">
        Related Use Cases
      </h2>
      <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((d, i) => <ProductCard key={i} d={d} />)}
      </div>
    </section>
  );
}
