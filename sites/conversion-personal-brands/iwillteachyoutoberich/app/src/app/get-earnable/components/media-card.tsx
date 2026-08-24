import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  title: string;
  description: string;
  title2: string;
  description2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <section className={cn("block relative", styles.className)}>
      <div className="h-full flex relative max-w-285 max-md:max-w-[47.9375rem] max-lg:flex-wrap md:max-lg:max-w-256">
        <div className={cn("w-[29.6875rem] min-h-px flex relative max-md:w-[22.1875rem] md:max-lg:w-93.5", styles.className2)}>
          <div className={cn("flex relative px-15 flex-wrap content-start max-md:px-0", styles.className3)}>
            <div className="block relative max-w-full">
              <div className={cn("block", styles.className4)}>
                <div className={cn("block text-center", styles.className5)}>
                  <figure className="w-full inline-block">
                    <img className="w-[18.6875rem] h-45.5 block max-w-full overflow-clip aspect-[auto_299/182] align-middle leading-0 md:max-lg:w-63.5 md:max-lg:h-[9.6875rem]" data-component="image" alt="" height="182" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="299" />
                  </figure>
                  <div className="block">
                    <h4 className="block mt-[1.5625rem] mb-2.5 text-[1.3125rem] font-semibold leading-7.5 [overflow-wrap:break-word]" data-component="heading">
                      {d.title}
                    </h4>
                    <p className="block [font-family:'PP_Mori']">
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
        <div className={cn("w-[29.6875rem] min-h-px flex relative max-md:w-[22.1875rem] md:max-lg:w-93.5", styles.className6)}>
          <div className="flex relative px-15 flex-wrap content-start max-md:pt-5 max-md:px-0">
            <div className="block relative max-w-full">
              <div className={cn("block", styles.className7)}>
                <div className={cn("block text-center", styles.className8)}>
                  <figure className="w-full inline-block">
                    <img className="w-[18.6875rem] h-45.5 block max-w-full overflow-clip aspect-[auto_299/182] align-middle leading-0 md:max-lg:w-63.5 md:max-lg:h-[9.6875rem]" data-component="image" alt="" height="182" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="299" />
                  </figure>
                  <div className="block">
                    <h4 className="block mt-[1.5625rem] mb-2.5 text-[1.3125rem] font-semibold leading-7.5 [overflow-wrap:break-word]" data-component="heading">
                      {d.title2}
                    </h4>
                    <p className="block [font-family:'PP_Mori']">
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
