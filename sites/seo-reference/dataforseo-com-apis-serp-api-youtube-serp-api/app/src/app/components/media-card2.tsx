import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCard2Data = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
  alt2: string;
  imgSrc2: string;
  label2: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className={cn("w-[282.5px] h-[14.725rem] min-h-px block relative float-left max-md:w-75 max-md:[float:initial] md:max-lg:w-[19.6875rem]", styles.className)}>
      <div className={cn("block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center", styles.className2)}>
        <div className="box-content block">
          <div className="box-content block">
            <div className="box-content block">
              <a className="box-content inline text-primary cursor-pointer group" data-component="link" href={d.href}>
                {" "}
                <span className="box-content h-37.5 inline-block relative rounded-[50%] bg-background shadow-[var(--border)_15px_15px_60px_0px,var(--background)_-10px_-10px_40px_0px]">
                  {" "}
                  <span className="box-content inline">
                    {" "}
                    <img className="box-content w-37.5 h-37.5 inline max-w-full overflow-clip" data-component="image" alt={d.alt} src={d.imgSrc} title={d.label} />
                    {" "}
                  </span>
                  {" "}
                  <span className={cn("box-content w-37.5 h-[9.8125rem] block absolute top-0 left-0 opacity-0 group-hover:opacity-100", styles.className3)}>
                    {" "}
                    <img className="box-content w-37.5 h-37.5 inline max-w-full overflow-clip" data-component="image" alt={d.alt2} src={d.imgSrc2} title={d.label2} />
                    {" "}
                  </span>
                  {" "}
                </span>
                {" "}
                <h5 className="box-content block pt-3 text-color-001 text-[1.1875rem] font-semibold leading-[1.6875rem]" data-component="heading">
                  <span className={cn("box-content inline relative ml-[1.5625rem] before:content-[''] before:block before:absolute before:inset-y-[0.3125rem] before:-left-[1.5625rem] before:w-3 before:h-3 before:bg-primary before:rounded-tl-[50%]", styles.className4)}>
                    {d.title}
                  </span>
                </h5>
                {" "}
              </a>
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
