import type { ProductCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ProductCardData = {
  title: string;
  alt: string;
  imgSrc: string;
  label: string;
  href: string;
  target: string;
};
/** A product card. */
export default function ProductCard({ d, styles }: { d: ProductCardData; styles: ProductCardStyles }) {
  return (
    <div className="w-[262.5px] h-[200.1px] min-h-px block relative float-left m-2.5 py-[0.3125rem] rounded-md bg-background shadow-[var(--clr-6)_0px_0px_10px_0px] max-md:w-75 max-lg:h-[197.5px] md:max-lg:w-[18.4375rem]">
      <div className="block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
        <div className="box-content block">
          <div className="box-content block">
            <div className="box-content block">
              <h2 className="box-content block mt-[0.9375rem] text-color-001 text-lg font-bold leading-[1.4375rem] text-center max-lg:text-base max-lg:leading-[1.3125rem]" data-component="heading">
                {d.title}
              </h2>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="box-content h-5 block" />
          {" "}
          <div className="box-content block text-center">
            <figure className="box-content inline-block max-w-full align-top">
              {" "}
              <div className="box-content inline-block max-w-full align-top">
                <img className="box-content w-15 h-15 inline max-w-full overflow-clip aspect-[auto_60/60] align-top" data-component="image" alt={d.alt} height="60" src={d.imgSrc} title={d.label} width="60" />
              </div>
              {" "}
            </figure>
            {" "}
          </div>
          {" "}
          <a className={cn("box-content h-13 block relative my-2.5 px-[2.1875rem] rounded-[3px] align-middle text-background text-[0.8125rem] font-extrabold leading-13 tracking-[1px] text-center uppercase bg-primary cursor-pointer hover:bg-clr-31 hover:border-clr-32", styles.className)} data-component="link" href={d.href} target={d.target}>
            {" "}
            <span className="box-content inline">
              Learn more
            </span>
            {" "}
            <span className="box-content inline" />
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
}
