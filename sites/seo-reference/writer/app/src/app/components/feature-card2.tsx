import type { DittoNodeMetaMap } from "../ditto-meta";
import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard2Data = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  href2: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard2({ d, meta, styles }: { d: FeatureCard2Data; meta: DittoNodeMetaMap; styles: FeatureCard2Styles }) {
  return (
    <div className="w-[423.3px] flex relative max-w-[33.3333%] mb-25 px-2.5 shrink-0 basis-1/3 max-md:w-[22.1875rem] max-md:max-w-full max-md:mb-[46.9px] max-md:basis-full md:max-lg:w-80 md:max-lg:max-w-[50%] md:max-lg:mb-20 md:max-lg:basis-1/2 2xl:w-[433.3px]">
      <div className="flex flex-col justify-start items-start">
        <a data-ditto-id={meta[2]?.anchor} className="w-full block relative max-w-full pt-[230.5px] align-top text-primary cursor-pointer max-md:pt-[11.9625rem] md:max-lg:pt-[10.7125rem] 2xl:pt-[14.7625rem]" data-component="link" href={d.href}>
          {" "}
          <img className="w-[25.1875rem] h-[14.1875rem] block absolute top-0 max-w-full overflow-clip object-cover aspect-[auto_640/360] max-md:w-[20.9375rem] max-md:h-47 md:max-lg:w-75 md:max-lg:h-[10.5625rem] 2xl:w-[25.8125rem] 2xl:h-58 hover:transform-[none] focus:transform-[none]" data-component="image" alt={d.alt} height="360" sizes="auto, (max-width: 640px) 100vw, 640px" src={d.imgSrc} srcSet={d.srcSet} width="640" />
          {" "}
        </a>
        {" "}
        <div className="flex mt-[1.5625rem] mb-[0.9375rem] flex-wrap justify-start items-center text-accent max-lg:mt-7.5 max-lg:mb-5">
          <h5 className="block mr-[0.1875rem] [font-family:Poppins,_sans-serif] text-[0.6875rem] font-semibold leading-2.5 tracking-[0.88px] uppercase" data-component="heading">
            <a className="inline-block max-w-full align-top cursor-pointer whitespace-nowrap" data-component="link" href="/blog/category/ai-agents-at-work/">
              AI agents at work
            </a>
            {" "}
          </h5>
          {" "}
          <p className="block text-foreground [font-family:Poppins,_sans-serif] text-[0.625rem] leading-[0.6875rem]">
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
        <h2 className="block grow [font-family:Graphik] text-lg font-medium leading-[1.4375rem] max-md:text-xl md:max-lg:text-[1.5625rem] md:max-lg:leading-7.5" data-component="heading">
          <a className={cn("inline-block max-w-full align-top cursor-pointer", styles.className)} data-component="link" href={d.href2}>
            {d.title}
          </a>
          {" "}
        </h2>
        {" "}
        <div className="flex mt-5 justify-start items-center">
          <figure className="block max-w-[2.5625rem] shrink-0">
            <span className="inline max-md:text-muted max-md:[font-family:Poppins] max-md:text-sm max-md:leading-[1.4375rem]">
              {" "}
              <img className="w-[2.5625rem] h-[2.5625rem] block max-w-full rounded-[50%] overflow-clip aspect-[auto_192/192]" data-component="avatar" alt="Diego Lomanto" height="192" sizes="auto, (max-width: 192px) 100vw, 192px" src="/assets/cloned/images/57184f3e561c.png" srcSet="/assets/cloned/images/57184f3e561c.png 192w, /assets/cloned/images/499cf3795087.png" width="192" />
              {" "}
            </span>
            {" "}
          </figure>
          {" "}
          <p className="block pl-[0.9375rem] [font-family:Poppins,_sans-serif] text-xs leading-[0.875rem] max-md:text-[0.5625rem] max-md:leading-[0.6875rem]">
            <span className="inline max-md:text-muted max-md:[font-family:Poppins] max-md:text-sm max-md:leading-[1.4375rem]">
              <strong className="inline font-semibold tracking-[0.96px] uppercase max-md:tracking-[1.12px]">
                Diego Lomanto, CMO
              </strong>
              {" "}
            </span>
            {" "}
          </p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
