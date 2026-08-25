import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
  href2: string;
  href3: string;
  imgSrc2: string;
  title2: string;
  description2: string;
  href4: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("flex max-w-300 mt-20 mx-10 justify-around [background-size:1px_100%] [background-position:50%_50%] bg-no-repeat max-md:block max-lg:max-w-none max-lg:mx-0 max-md:[justify-content:initial] max-md:bg-[none] max-md:[background-size:initial] max-md:[background-position:initial] max-md:[background-repeat:initial] md:max-lg:px-10 md:max-lg:justify-between 2xl:mx-90", styles.className)}>
      <div className="block max-w-92 basis-1/2 text-center max-md:max-w-155 max-md:mb-12 max-md:px-6 max-md:basis-[initial] md:max-lg:pr-6">
        <div className="block">
          <a className="inline cursor-pointer" data-component="link" href={d.href}>
            <img className="w-92 h-119 inline max-w-100 overflow-clip max-md:w-77.5 max-md:h-[25.0625rem] max-md:max-w-77.5 md:max-lg:w-80 md:max-lg:h-103.5" data-component="image" src={d.imgSrc} />
          </a>
        </div>
        {" "}
        <div className="block">
          <h4 className="border-t border-solid border-t-foreground block my-5 pt-7.5 [font-family:Montserrat,_sans-serif] text-xl font-extrabold leading-7 uppercase [word-break:break-word] max-md:mb-4 max-md:pt-8 max-md:leading-[1.375rem] max-md:[font-size:inherit]" data-component="heading">
            {d.title}
          </h4>
          {" "}
          <p className="block mb-7.5 max-md:mb-6">
            {d.description}
          </p>
          {" "}
          <a className="inline cursor-pointer" data-component="link" href={d.href2}>
            <div className="w-55 border border-solid border-foreground inline-block min-w-55 max-w-95 mr-2.5 mb-2.5 py-[1.0625rem] px-7.5 rounded-[25px] text-color-001 [font-family:Montserrat,_sans-serif] text-[0.8125rem] font-semibold leading-3.5 uppercase bg-foreground max-md:mr-0" data-component="button">
              GET THE EBOOK
            </div>
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="block max-w-92 basis-1/2 text-center max-md:max-w-155 max-md:mb-12 max-md:px-6 max-md:basis-[initial] md:max-lg:pl-6">
        <div className="block">
          <a className="inline cursor-pointer" data-component="link" href={d.href3}>
            <img className="w-92 h-119 inline max-w-100 overflow-clip max-md:w-77.5 max-md:h-[25.0625rem] max-md:max-w-77.5 md:max-lg:w-80 md:max-lg:h-103.5" data-component="image" src={d.imgSrc2} />
          </a>
        </div>
        {" "}
        <div className="block">
          <h4 className="border-t border-solid border-t-foreground block my-5 pt-7.5 [font-family:Montserrat,_sans-serif] text-xl font-extrabold leading-7 uppercase [word-break:break-word] max-md:mb-4 max-md:pt-8 max-md:leading-[1.375rem] max-md:[font-size:inherit]" data-component="heading">
            {d.title2}
          </h4>
          {" "}
          <p className="block mb-7.5 max-md:mb-6">
            {d.description2}
          </p>
          {" "}
          <a className="inline cursor-pointer" data-component="link" href={d.href4}>
            <div className="w-55 border border-solid border-foreground inline-block min-w-55 max-w-95 mr-2.5 mb-2.5 py-[1.0625rem] px-7.5 rounded-[25px] text-color-001 [font-family:Montserrat,_sans-serif] text-[0.8125rem] font-semibold leading-3.5 uppercase bg-foreground max-md:mr-0" data-component="button">
              GET THE EBOOK
            </div>
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
