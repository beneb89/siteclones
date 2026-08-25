import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  href: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <li className={cn("w-[322.7px] flex flex-col gap-3 text-muted max-md:w-[9.325rem] max-md:shrink-0 md:max-lg:w-[14.2625rem] 2xl:w-[28.6375rem]", styles.className)}>
      <a className={cn("block cursor-pointer w-full", styles.className2)} data-component="link" href={d.href}>
        {" "}
        <div className="block relative rounded-[17.2px] overflow-hidden max-md:rounded-xl md:max-lg:rounded-[14.4px] 2xl:rounded-[20px]">
          <span className={cn("block w-full", styles.className3)} />
          {" "}
          <img className={cn("w-[20.1875rem] h-[26.8125rem] block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle max-md:w-[9.3125rem] max-md:h-49.5 md:max-lg:w-57 2xl:w-114.5", styles.className4)} data-component="image" alt="" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} />
          {" "}
        </div>
        {" "}
        <div className="block pt-3">
          <h3 className="block text-foreground text-[0.9375rem] font-semibold leading-[1.125rem] max-md:text-sm max-md:leading-[1.0625rem] 2xl:leading-[1.1875rem] 2xl:[font-size:inherit]" data-component="heading">
            {d.title}
          </h3>
          {" "}
          <p className="block pt-1 text-muted-foreground text-[0.9375rem] leading-[1.1875rem] max-lg:text-sm max-md:leading-[1.125rem] 2xl:leading-[1.25rem]">
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
      </a>
      {" "}
    </li>
  );
}
