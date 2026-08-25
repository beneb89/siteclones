import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  title: string;
  imgSrc: string;
  href: string;
  href2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("block max-w-182 mx-auto text-xl leading-[2rem] max-md:text-[1.0625rem] max-md:leading-7", styles.className)}>
      <h3 className="block mb-12 [font-family:Montserrat,_sans-serif] text-3xl font-extrabold leading-9 text-center max-md:mb-[2.2rem] max-md:text-[1.375rem] max-md:leading-[1.625rem]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <div className={cn("grid clear-both max-w-170 mb-15 mx-auto items-center text-center grid-cols-2 max-lg:flex-col", styles.className2)}>
        <img className={cn("w-85 block max-w-full overflow-clip max-md:w-[10.1875rem]", styles.className3)} data-component="image" src={d.imgSrc} />
        {" "}
        <div className="grid gap-7.5 grid-cols-1">
          <a className="h-12.5 block cursor-pointer" data-component="link" href={d.href}>
            <div className="border border-solid border-foreground inline-block min-w-55 py-[1.0625rem] px-7.5 rounded-[25px] text-color-001 [font-family:Montserrat,_sans-serif] text-[0.8125rem] font-semibold leading-3.5 uppercase bg-foreground max-md:min-w-0 max-md:px-0" data-component="button">
              Commentary
            </div>
          </a>
          {" "}
          <a className="h-12.5 block cursor-pointer" data-component="link" href={d.href2}>
            {" "}
            <div className="border border-solid border-foreground inline-block min-w-55 py-[1.0625rem] px-7.5 rounded-[25px] text-color-001 [font-family:Montserrat,_sans-serif] text-[0.8125rem] font-semibold leading-3.5 uppercase bg-foreground max-md:min-w-0 max-md:px-0" data-component="button">
              Get the Book
            </div>
            {" "}
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
