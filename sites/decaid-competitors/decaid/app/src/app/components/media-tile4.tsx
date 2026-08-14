import type { MediaTile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile4Data = {
  id: string;
  description: string;
  imgSrc: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile4({ d, styles }: { d: MediaTile4Data; styles: MediaTile4Styles }) {
  return (
    <div className="border border-solid border-surface flex py-10 px-6 rounded-3xl flex-col justify-center items-start self-stretch bg-background shadow-[var(--clr-21)_0px_40px_20px_-16px]" id={d.id}>
      <img className="w-35 h-6 block max-w-35 mb-4 overflow-clip align-middle" data-component="image" alt="" src="/assets/cloned/images/9c3d0a6d19bc.png" />
      <p className="block mb-8 [font-family:Satoshi,_Arial,_sans-serif] text-lg leading-[1.6875rem] md:max-lg:mb-6 md:max-lg:text-base md:max-lg:leading-6">
        {d.description}
        <br className="inline" />
      </p>
      <div className={cn("flex justify-between items-center gap-4", styles.className)}>
        <div className="w-20 h-20 flex max-w-20 max-h-20 rounded-[50%]">
          <img className="w-20 h-20 block mr-5 rounded-full overflow-clip align-middle" data-component="avatar" alt="" src={d.imgSrc} />
        </div>
        <div className="block">
          <div className="block text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-[1rem] font-bold">
            <strong className="inline">
              {d.text}
            </strong>
            <br className="inline" />
          </div>
          <div className="block mt-1 [font-family:Satoshi,_Arial,_sans-serif]">
            <em className="inline italic">
              {d.text2}
            </em>
            <br className="inline" />
          </div>
        </div>
      </div>
    </div>
  );
}
