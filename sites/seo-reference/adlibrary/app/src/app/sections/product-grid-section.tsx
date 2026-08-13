import ProductCard from "../components/product-card";
import { products as productsContent } from "../content";
/** Product Grid section. */
export default function ProductGridSection({ products = productsContent } = {}) {
  return (
    <div className="border-t border-solid border-t-border block mt-16 pt-8 w-full">
      <h2 className="block mb-8 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-3xl font-light leading-9 tracking-[-0.75px]" data-component="heading">
        Related Articles
      </h2>
      <div className="block w-full">
        <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((d) => <ProductCard key={d.variant} d={d} />)}
        </div>
      </div>
    </div>
  );
}
