import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type MediaTileData = {
  href: string;
  srcSet: string;
  srcSet2: string;
  srcSet3: string;
  srcSet4: string;
  srcSet5: string;
  imgSrc: string;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <figure className={cn("block relative pr-[1.5625rem] overflow-hidden leading-0 max-md:pr-0 2xl:pr-7.5", styles.className)}>
      <a className={cn("inline-block relative z-10 max-w-full text-primary underline cursor-pointer after:content-[''] after:block after:absolute after:right-0 after:bottom-0 after:left-[239.3px] after:w-2.5 after:h-2.5 after:p-[2.5px] after:text-background after:text-[0.625rem] after:leading-2.5 after:text-center after:bg-primary max-md:after:left-77 md:max-lg:after:left-79.5 2xl:after:left-[335.3px] 2xl:after:w-3 2xl:after:h-3 2xl:after:p-[0.1875rem] 2xl:after:text-xs 2xl:after:leading-3", styles.className2)} data-component="link" href={d.href}>
        {" "}
        <picture className="inline">
          {"  "}
          <source className="inline" media="(min-width: 2560px)" srcSet={d.srcSet} />
          {" "}
          <source className="inline" media="(min-width: 1440px)" srcSet={d.srcSet2} />
          {" "}
          <source className="inline" media="(min-width: 769px)" srcSet={d.srcSet3} />
          {" "}
          <source className="inline" media="(min-width: 480px)" srcSet={d.srcSet4} />
          {" "}
          <source className="inline" media="(min-width: 320px)" srcSet={d.srcSet5} />
          {"  "}
          <img className={cn("w-63.5 inline max-w-full pl-[1.5625rem] overflow-clip text-[0.75rem] max-md:w-[20.1875rem] md:max-lg:w-[20.8125rem] 2xl:w-[22.0625rem] 2xl:pl-7.5 2xl:text-[0.875rem]", styles.className3)} data-component="image" src={d.imgSrc} />
          {" "}
        </picture>
        {" "}
      </a>
      {" "}
      <figcaption className="block pt-3 pl-[1.5625rem] 2xl:pt-[0.9rem] 2xl:pl-7.5">
        <span className="block -mt-[0.4375rem] mb-1.5 text-muted-foreground text-xs leading-[0.9375rem] tracking-[0.3px] 2xl:-mt-[0.525rem] 2xl:mb-[0.45rem] 2xl:text-sm 2xl:leading-4.5 2xl:tracking-[0.36px]">
          © Fraunhofer IWU
        </span>
        <div className="block text-xs leading-[0.9375rem] tracking-[0.3px] 2xl:text-sm 2xl:leading-4.5 2xl:tracking-[0.36px]">
          {d.text}
        </div>
      </figcaption>
      {" "}
    </figure>
  );
}
