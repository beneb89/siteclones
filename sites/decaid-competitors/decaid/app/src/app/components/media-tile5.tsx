import type { MediaTile5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile5Data = {
  id: string;
  style: string;
  id2: string;
  text: string;
  description: string;
};
/** A media tile. */
export default function MediaTile5({ d, styles }: { d: MediaTile5Data; styles: MediaTile5Styles }) {
  return (
    <div className="border border-solid border-surface-4 block rounded-[20px] flex-col justify-around overflow-hidden shadow-[var(--clr-21)_0px_2px_7px_0px]">
      <div className="w-full h-50 flex relative justify-center items-center self-center col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] overflow-hidden" id={d.id}>
        <div className={cn("w-[379.3px] h-full block absolute top-0 left-0 min-w-0 rounded-tl-[20px] rounded-tr-[20px] col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] [background-size:auto,_contain] [background-position:0px_0px,_50%_50%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] transform-[matrix(1.01,0,0,1.01,0,0)] [-webkit-background-clip:border-box,_border-box] max-md:w-[21.3125rem] max-md:flex max-md:justify-center max-md:items-center max-md:origin-[170.5px_100px] md:max-lg:w-88 md:max-lg:origin-[176px_100px]", styles.className)} style={d.style} id={d.id2} />
        <a className="w-17.5 h-17.5 flex relative z-2 max-w-full my-[4.0625rem] rounded-full justify-center items-center text-primary underline bg-accent cursor-pointer" data-component="link" aria-haspopup="dialog" aria-label="open lightbox" href="#">
          <img className="w-8.5 h-8.5 block max-w-8.5 overflow-clip align-middle text-color-001 max-lg:w-7 max-lg:h-7 max-lg:max-w-7" data-component="image" alt="" src="/assets/cloned/images/f31ab4308dc0.png" />
        </a>
      </div>
      <div className={cn("flex py-7.5 px-5 flex-col justify-between items-start text-center bg-background", styles.className2)}>
        <div className="block text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-lg font-semibold leading-[1.5rem] text-left">
          {d.text}
        </div>
        <p className={cn("flex sticky mt-4 mb-8 flex-col flex-1 [font-family:Satoshi,_Arial,_sans-serif] text-lg leading-[1.6875rem] text-left max-lg:mb-6 max-md:justify-start max-md:items-center max-lg:text-base max-lg:leading-6 max-lg:static", styles.className3)}>
          {d.description}
          <br className="block" />
        </p>
        <div className="hidden min-w-0">
          This is some text inside of a div block.
        </div>
        <div className="hidden min-w-0 mb-[0.3125rem] text-clr-33 text-[0.9375rem] font-medium tracking-[1px] uppercase">
          This is some text inside of a div block.
        </div>
        <div className="hidden min-w-0 items-center text-background leading-3.5">
          This is some text inside of a div block.
        </div>
      </div>
    </div>
  );
}
