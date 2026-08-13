import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaLinkData = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  description: string;
  description2: string;
};
/** A linked media tile. */
export default function MediaLink({ d, styles }: { d: MediaLinkData; styles: MediaLinkStyles }) {
  return (
    <a className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:pb-4 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-2.5 2xl:text-primary 2xl:cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:w-330 after:h-33 max-lg:after:hidden" href="/work/alchemain">
      <div className="hidden 2xl:w-29 2xl:block 2xl:relative 2xl:shrink-0 2xl:aspect-square">
        <div className="hidden 2xl:w-29 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0">
          <img className={cn("hidden 2xl:w-full 2xl:h-29 2xl:block 2xl:overflow-clip 2xl:object-cover", styles.className)} alt="" height={d.height} sizes="116px" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
        </div>
      </div>
      <div className="hidden 2xl:w-298.5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-1">
        <div className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0">
          <div className="hidden 2xl:w-298.5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
            <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Druk_Text_Wide_Heavy',_'Druk_Text_Wide_Heavy_Placeholder',_sans-serif] 2xl:text-[2.5rem] 2xl:leading-10 2xl:uppercase">
              {d.description}
            </p>
          </div>
        </div>
        <div className="hidden 2xl:w-298.5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
          <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] 2xl:text-[1.3125rem] 2xl:leading-[1.625rem]">
            {d.description2}
          </p>
        </div>
      </div>
    </a>
  );
}
