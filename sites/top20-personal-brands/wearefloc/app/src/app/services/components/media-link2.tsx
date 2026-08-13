import type { MediaLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaLink2Data = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  description: string;
  description2: string;
};
/** A linked media tile. */
export default function MediaLink2({ d, styles }: { d: MediaLink2Data; styles: MediaLink2Styles }) {
  return (
    <a className={cn("w-full flex relative pb-4 justify-start items-start content-start shrink-0 gap-2.5 text-primary cursor-pointer 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 2xl:after:hidden", styles.className)} data-component="link" href="/work/alchemain">
      <div className="w-29 block relative shrink-0 aspect-square 2xl:hidden">
        <div className="w-29 h-full block absolute top-0 2xl:hidden">
          <img className={cn("w-full h-29 block overflow-clip object-cover 2xl:hidden", styles.className2)} data-component="image" alt="" height={d.height} sizes="116px" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        </div>
      </div>
      <div className="w-268.5 flex relative flex-col justify-start items-center content-center grow shrink-0 basis-0 gap-1 max-md:w-[14.0625rem] md:max-lg:w-154.5 2xl:hidden">
        <div className="w-full flex relative justify-center items-center content-center shrink-0 2xl:hidden">
          <div className="w-268.5 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.0625rem] md:max-lg:w-154.5 2xl:hidden">
            <p className="block text-color-001 [font-family:'Druk_Text_Wide_Heavy',_'Druk_Text_Wide_Heavy_Placeholder',_sans-serif] text-[2.5rem] leading-10 uppercase max-lg:text-[1.3125rem] max-lg:leading-[1.3125rem] 2xl:hidden">
              {d.description}
            </p>
          </div>
        </div>
        <div className="w-268.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[14.0625rem] md:max-lg:w-154.5 2xl:hidden">
          <p className="block text-color-001 [font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] text-[1.3125rem] leading-[1.625rem] max-lg:text-base max-lg:leading-5 2xl:hidden">
            {d.description2}
          </p>
        </div>
      </div>
    </a>
  );
}
