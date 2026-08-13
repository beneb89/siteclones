import ProductCard from "../components/product-card";
import { ProductCard_styles } from "../_styles";
import { products as productsContent } from "../content";
/** Product Grid section. */
export default function ProductGridSection({ products = productsContent } = {}) {
  return (
    <div className="box-content block relative mt-10 -mx-[0.9375rem] text-left before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
      <div className="box-content block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
        <div className="w-full h-[21.175rem] min-h-px block relative float-left max-md:h-[65.3375rem] max-md:[float:initial] md:max-lg:h-[34.125rem]">
          <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
            <div className="box-content h-full block">
              <div className="box-content h-full block relative -mx-[0.9375rem] py-7.5 px-[0.9375rem] bg-clr-5 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
                <div className="box-content w-275 h-full block relative z-20 mx-22.5 max-md:w-75 max-md:mx-[37.5px] md:max-lg:w-150 md:max-lg:mx-21 2xl:mx-102.5">
                  <div className="box-content h-full block -mx-[0.9375rem] max-md:mx-0 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="w-full h-[58.7px] min-h-px block relative float-left max-md:h-[7.2rem] max-md:[float:initial] md:max-lg:h-[3.1875rem]">
                      <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
                        <div className="box-content h-full block">
                          <div className="box-content block">
                            <div className="box-content block">
                              <h2 className="box-content block text-background text-[2.125rem] font-bold leading-[2.75rem] text-center max-md:text-[1.625rem] max-md:leading-[2.0625rem] md:max-lg:text-[1.75rem] md:max-lg:leading-9" data-component="heading">
                                Versatile solution for challenging use cases
                              </h2>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="box-content h-[0.9375rem] block" />
                        </div>
                      </div>
                    </div>
                    {products.map((d, i) => <ProductCard key={i} d={d} styles={ProductCard_styles[i]} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
