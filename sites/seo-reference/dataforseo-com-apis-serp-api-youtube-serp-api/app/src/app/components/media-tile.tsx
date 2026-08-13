import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  alt: string;
  imgSrc: string;
  label: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("w-[353.3px] h-38.5 min-h-px block relative float-left max-md:w-62.5 max-md:h-48 max-md:[float:initial] md:max-lg:w-[193.3px]", styles.className)}>
      <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
        <div className="box-content h-full block">
          <div className="box-content block">
            <figure className="box-content inline-block max-w-full align-top">
              {" "}
              <div className="box-content inline-block max-w-full align-top">
                <img className="box-content w-22.5 h-22.5 inline max-w-full -mt-15 pb-[1.5625rem] overflow-clip aspect-[auto_90/90] align-top max-md:w-12.5 max-md:h-12.5 max-lg:mt-2.5 max-lg:pb-2.5 md:max-lg:w-[4.0625rem] md:max-lg:h-[4.0625rem]" data-component="image" alt={d.alt} height="90" src={d.imgSrc} title={d.label} width="90" />
              </div>
              {" "}
            </figure>
            {" "}
          </div>
          {" "}
          <div className="box-content block">
            <div className="box-content block">
              <div className="box-content block relative text-color-001 text-[1.5rem] font-semibold max-lg:text-[1.25rem]">
                {d.text}
              </div>
              {" "}
              <div className="box-content block p-[0.9375rem] text-[1rem] max-lg:text-[0.9375rem]">
                {d.text2}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </div>
    </div>
  );
}
