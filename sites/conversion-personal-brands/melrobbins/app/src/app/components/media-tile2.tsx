import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  href: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <li className={cn("list-item text-muted max-md:shrink-0", styles.className)}>
      <a className={cn("inline cursor-pointer w-full", styles.className2)} data-component="link" href={d.href}>
        {" "}
        <div className={cn("block text-left", styles.className3)}>
          <div className="block relative">
            <div className="block mb-3 rounded-[17.2px] overflow-hidden max-md:rounded-xl md:max-lg:rounded-[14.4px] 2xl:rounded-[20px]">
              <div className="block relative">
                <span className={cn("block pt-[6.5125rem] w-full max-md:pt-20 md:max-lg:pt-[72.9px]", styles.className4)} />
                {" "}
                <img className={cn("w-[11.5625rem] h-26 block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle md:max-lg:w-32.5 md:max-lg:h-[4.5625rem] 2xl:w-[16.5625rem] 2xl:h-[9.3125rem]", styles.className5)} data-component="image" alt="" sizes="(max-width: 1200px) 100vw, 1200px" src={d.imgSrc} srcSet={d.srcSet} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <p className="block my-[6.7px] text-foreground text-xs leading-4 tracking-[0.3px] uppercase max-md:my-1 md:max-lg:my-[5.3px] 2xl:my-2">
            {d.description}
          </p>
          {" "}
          <p className="block text-foreground text-[0.9375rem] font-semibold leading-[1.125rem] max-md:text-sm max-md:leading-[1.0625rem] 2xl:leading-[1.1875rem] 2xl:[font-size:inherit]">
            {d.description2}
          </p>
          {" "}
        </div>
        {" "}
      </a>
      {" "}
    </li>
  );
}
