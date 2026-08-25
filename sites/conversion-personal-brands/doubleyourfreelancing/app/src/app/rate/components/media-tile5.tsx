import type { MediaTile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile5Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile5({ d, styles }: { d: MediaTile5Data; styles: MediaTile5Styles }) {
  return (
    <li className="flex max-h-[1e+06px] mb-5 justify-start items-start content-start [word-break:break-word] 2xl:hidden">
      <div className="block relative z-1 max-h-[1e+06px] 2xl:hidden">
        <div className={cn("box-content w-[1.1875rem] h-[1.1875rem] max-h-[1e+06px] pt-[0.1875rem] pr-2.5 text-[1.1875rem] leading-0 text-center 2xl:hidden", styles.className)}>
          <svg className="box-content w-[1.1875rem] h-[1.1875rem] inline-block max-h-[1e+06px] overflow-hidden align-middle text-color-026 leading-[1.1875rem] 2xl:hidden" data-component="icon" viewBox="0 0 320 512" data-id="icon-times-light" data-name="" fill="currentColor">
            <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
          </svg>
        </div>
      </div>
      <span className="block z-0 max-h-[1e+06px] leading-[1.4375rem] 2xl:hidden">
        {d.text}
      </span>
    </li>
  );
}
