import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  id: string;
  id2: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  label: string;
  id3: string;
  id4: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("w-[379.5px] min-h-px flex float-left flex-col justify-start max-md:w-[20.9375rem] max-md:block max-md:[float:initial] max-md:[flex-direction:initial] max-md:[justify-content:initial] md:max-lg:w-[229.3px]", styles.className)}>
      <div className="block shrink-0 max-md:shrink-[initial]">
        <div className="block before:content-[''] before:table before:w-0 before:h-0 after:content-[''] after:table after:w-0 after:h-0">
          <div className="w-full min-h-px flex float-left flex-col justify-start items-center max-md:[float:initial]">
            <div className="block max-w-full shrink-0" id={d.id}>
              <span className="inline" id={d.id2}>
                <img className="w-37.5 h-37.5 inline max-w-full overflow-clip aspect-[auto_150/150]" data-component="image" alt={d.alt} height="150" sizes="(max-width: 150px) 100vw, 150px" src={d.imgSrc} srcSet={d.srcSet} title={d.label} width="150" />
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="block shrink-0 max-md:shrink-[initial]">
        <div className="block before:content-[''] before:table before:w-0 before:h-0 after:content-[''] after:table after:w-0 after:h-0">
          <div className="min-h-px block float-left max-md:[float:initial]">
            <div className="block" id={d.id3}>
              <span className="inline" id={d.id4}>
                <h4 className={cn("block mb-[1.4rem] font-medium text-center max-lg:text-xl max-lg:leading-7 max-lg:tracking-[-0.8px]", styles.className2)} data-component="heading">
                  {d.title}
                </h4>
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
