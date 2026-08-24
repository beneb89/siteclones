import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  height: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  width: string;
  text: string;
  text2: string;
  text3: string;
  description: string;
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className="box-content block">
      <div className="box-content border-b border-solid border-b-color-008 grid mb-7.5 pb-7.5 items-center gap-5 grid-cols-[242.969px_689.562px_184.469px] max-md:flex max-md:flex-col max-md:items-start max-md:gap-2.5 max-md:grid-cols-[21%_59.6%_1fr]">
        <div className="box-content block">
          <div className="box-content block">
            <img className={cn("box-content inline max-w-full overflow-clip max-md:w-22.5", styles.className)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
          </div>
        </div>
        <div className="box-content block max-w-157.5">
          <div className="box-content block mb-5">
            <span className="box-content inline-block py-1.5 px-7.5 text-base font-semibold leading-[1.625rem] tracking-[1.6px] uppercase bg-color-008 max-md:text-[0.8125rem] max-md:leading-[1rem] max-md:tracking-[1.3px] max-md:text-center">
              {d.text}
            </span>
            <span className="box-content hidden py-1.5 px-7.5 text-base font-semibold leading-[1.625rem] tracking-[1.6px] uppercase bg-color-008">
              {d.text2}
            </span>
          </div>
          <div className="box-content block mb-5 [font-family:'Ivy_Presto'] text-[2.5625rem] leading-[3.0625rem] max-md:text-[2rem] max-md:leading-[2.375rem]">
            {d.text3}
          </div>
          <div className="box-content block text-[0.9375rem] leading-6 max-md:[font-size:inherit] max-md:leading-[inherit]">
            <p className="box-content block mb-4">
              {d.description}
            </p>
            {" "}
          </div>
        </div>
        <div className="box-content w-full flex items-center">
          <div className="box-content w-full block py-2.5 text-center bg-color-004">
            <a className="box-content inline text-foreground text-[0.8125rem] font-semibold leading-[1.3125rem] tracking-[0.65px] uppercase cursor-pointer max-md:leading-[1.4375rem]" data-component="link" href={d.href}>
              {d.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
