import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  kind?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="w-320 h-112 min-h-px block relative float-left max-md:w-[23.4375rem] max-md:h-32 md:max-lg:w-192 2xl:w-432 2xl:h-[33.6rem]">
      <div className={cn("block relative overflow-hidden text-center", styles.className)}>
        <figure className="block relative overflow-hidden leading-0">
          <picture className="inline">
            {"  "}
            <source className="inline" media="(max-width: 1440px)" srcSet="/assets/cloned/images/6f2f1cb3a22a.jpg" />
            {" "}
            <source className="inline" media="(max-width: 960px)" srcSet="/assets/cloned/images/b5218e968b87.jpg" />
            {" "}
            <source className="inline" media="(max-width: 640px)" srcSet="/assets/cloned/images/230f01fa427e.jpg" />
            {" "}
            <source className="inline" media="(max-width: 320px)" srcSet="/assets/cloned/images/62096041ab25.jpg" />
            {"  "}
            <img className="w-full h-112 block max-w-full overflow-clip object-cover max-md:h-32 2xl:h-134.5" src="/assets/cloned/images/8b42e5db9c8b.jpg" data-component={d.kind} />
            {" "}
          </picture>
          {" "}
          <figcaption className="block pt-3 max-md:hidden 2xl:pt-[0.9rem]">
            <div className="block text-xs leading-[0.9375rem] tracking-[0.3px] 2xl:text-sm 2xl:leading-4.5 2xl:tracking-[0.36px]" />
          </figcaption>
          {" "}
        </figure>
        {" "}
      </div>
    </div>
  );
}
