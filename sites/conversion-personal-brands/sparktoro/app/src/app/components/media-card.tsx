import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  kind?: string;
  title: string;
  description: string;
  kind2?: string;
  kind3?: string;
  alt: string;
  imgSrc: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("border-2 border-solid border-border block rounded-2xl col-start-1 row-start-1 overflow-hidden", styles.className)}>
      <div className={cn("flex flex-wrap items-stretch", styles.className2)}>
        <div className={cn("w-139 border-r-2 border-solid border-r-border flex max-w-full -mt-[0.9375rem] py-[3.4375rem] px-12 flex-col justify-center shrink-0 bg-clr-16 max-md:w-[21.6875rem] max-lg:border-b-2 max-lg:border-b-border max-lg:p-9 max-lg:text-center max-lg:border-r-[0] max-lg:border-initial max-lg:border-r-[initial] md:max-lg:w-173 2xl:w-161.5", styles.className3)}>
          <h3 className="block mb-4.5 text-border [font-family:'League_Spartan',_sans-serif] text-[2rem] font-extrabold leading-[2.125rem] uppercase" data-component={d.kind}>
            {d.title}
          </h3>
          {" "}
          <p className="block max-w-105 mb-4 text-clr-17 text-[1.0625rem] leading-7 max-lg:max-w-full">
            {d.description}
          </p>
          {" "}
          <a className="w-[17.525rem] block mt-6.5 pt-4.5 pb-3.5 px-8 rounded-lg text-background [font-family:'League_Spartan',_sans-serif] font-bold tracking-[0.8px] uppercase bg-color-001 cursor-pointer max-md:w-[17.1875rem]" data-component={d.kind2} href="https://sparktoro.com/start">
            Create your free report
          </a>
          {" "}
        </div>
        {" "}
        <div className={cn("w-139 flex max-w-full shrink-0 max-md:w-[21.6875rem] md:max-lg:w-173 2xl:w-161.5", styles.className4)}>
          <img className={cn("h-100.5 block overflow-clip object-cover object-[0%_0%] align-middle max-lg:object-contain 2xl:h-[29.1875rem]", styles.className5)} data-component={d.kind3} alt={d.alt} src={d.imgSrc} />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
