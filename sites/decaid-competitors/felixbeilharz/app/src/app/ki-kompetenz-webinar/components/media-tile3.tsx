import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile3Data = {
  description: string;
  text: string;
  text2: string;
  text3: string;
  height: string;
  sizes: string;
  imgSrc: string;
  srcSet: string;
  label?: string;
  width: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <div className="block my-2.5">
      <div className="flex -ml-[0.9375rem] py-[0.9375rem] justify-between items-stretch max-md:flex-wrap">
        <div className={cn("block pl-[0.9375rem] grow max-md:max-w-full max-md:shrink-0 max-md:basis-[390px]", styles.className)}>
          <div className="h-full flex relative flex-col">
            <div className="block max-w-full mb-2.5 p-px">
              <p className="block text-lg leading-[2rem] text-left">
                <strong className="inline font-bold">
                  {d.description}
                </strong>
              </p>
            </div>
            <div className="block mb-5 py-2.5 px-px">
              <ul className="block text-color-001 [font-family:'Open_Sans'] text-lg leading-[1.6875rem] [list-style-type:none] list-outside">
                <li className="flex justify-start items-start content-start text-foreground text-base leading-7 [word-break:break-word]">
                  <div className="block relative z-1">
                    <div className="box-content block p-2.5 leading-0 text-center">
                      <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
                        <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
                      </svg>
                    </div>
                  </div>
                  <span className="block z-0 leading-[2.3125rem]">
                    {d.text}
                  </span>
                </li>
                <li className="flex justify-start items-start content-start text-foreground text-base leading-7 [word-break:break-word]">
                  <div className="block relative z-1">
                    <div className="box-content block p-2.5 leading-0 text-center">
                      <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
                        <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
                      </svg>
                    </div>
                  </div>
                  <span className="block z-0 leading-[2.3125rem]">
                    {d.text2}
                  </span>
                </li>
                <li className="flex justify-start items-start content-start text-foreground text-base leading-7 [word-break:break-word]">
                  <div className="block relative z-1">
                    <div className="box-content block p-2.5 leading-0 text-center">
                      <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
                        <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
                      </svg>
                    </div>
                  </div>
                  <span className="block z-0 leading-[2.3125rem]">
                    {d.text3}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cn("block pl-[0.9375rem] grow max-md:max-w-full max-md:shrink-0 max-md:basis-[390px]", styles.className2)}>
          <div className="h-full flex relative flex-col">
            <div className={cn("w-full block relative my-5", styles.className3)}>
              <span className="block relative max-w-full overflow-hidden">
                <img className={cn("block max-w-full overflow-clip align-middle", styles.className4)} data-component="image" alt="" height={d.height} sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} title={d.label} width={d.width} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
