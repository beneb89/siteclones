import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard2Data = {
  imgSrc: string;
  title: string;
  description: string;
  imgSrc2: string;
  title2: string;
  description2: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <section className="w-full block relative [animation-name:fadeInUp] [animation-duration:2s]">
      <div className="h-full flex relative max-w-285 max-md:max-w-[47.9375rem] max-lg:flex-wrap md:max-lg:max-w-256">
        <div className={cn("w-131.5 min-h-px flex relative max-md:w-[21.6875rem] md:max-lg:w-90", styles.className)}>
          <div className="flex relative p-2.5 flex-wrap content-start">
            <div className="flex relative">
              <div className="block py-7.5 px-7 rounded-[14px] bg-background">
                <div className={cn("flex flex-col", styles.className2)}>
                  <figure className="w-10.5 block max-md:mr-[14.3125rem]">
                    <img className="w-10.5 h-10.5 block max-w-full overflow-clip aspect-[auto_50/50] align-middle leading-0" data-component="image" alt="" height="50" src={d.imgSrc} width="50" />
                  </figure>
                  <div className="block">
                    <h3 className="block mt-5 mb-2.5 text-color-007 text-xl font-bold leading-5 [overflow-wrap:break-word] max-md:leading-5.5" data-component="heading">
                      {d.title}
                    </h3>
                    <p className="block text-muted text-base font-medium leading-6 max-md:leading-[1.5625rem]">
                      {d.description}
                    </p>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className={cn("w-131.5 min-h-px flex relative max-md:w-[21.6875rem] md:max-lg:w-90", styles.className3)}>
          <div className="flex relative p-2.5 flex-wrap content-start">
            <div className="flex relative">
              <div className="block py-7.5 px-7 rounded-[14px] bg-background">
                <div className={cn("flex flex-col", styles.className4)}>
                  <figure className="w-10.5 block max-md:mr-[14.3125rem]">
                    <img className="w-10.5 h-10.5 block max-w-full overflow-clip aspect-[auto_50/50] align-middle leading-0" data-component="image" alt="" height="50" src={d.imgSrc2} width="50" />
                  </figure>
                  <div className="block">
                    <h3 className="block mt-5 mb-2.5 text-color-007 text-xl font-bold leading-5 [overflow-wrap:break-word] max-md:leading-5.5" data-component="heading">
                      {d.title2}
                    </h3>
                    <p className="block text-muted text-base font-medium leading-6 max-md:leading-[1.5625rem]">
                      {d.description2}
                    </p>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
