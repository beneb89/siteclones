import type { MediaTile6Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile6Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile6({ d, styles }: { d: MediaTile6Data; styles: MediaTile6Styles }) {
  return (
    <li className="flex max-h-[1e+06px] mb-5 justify-start items-start content-start [word-break:break-word] 2xl:hidden">
      <div className="block relative z-1 max-h-[1e+06px] 2xl:hidden">
        <div className={cn("box-content w-[1.1875rem] h-[1.1875rem] max-h-[1e+06px] pt-[0.1875rem] pr-2.5 text-[1.1875rem] leading-0 text-center 2xl:hidden", styles.className)}>
          <svg className="box-content w-[1.1875rem] h-[1.1875rem] inline-block max-h-[1e+06px] overflow-hidden align-middle text-color-007 leading-[1.1875rem] 2xl:hidden" data-component="icon" viewBox="0 0 448 512" data-id="icon-check-double-light" data-name="" fill="currentColor">
            <path d="M444.96 159l-12.16-11c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L131.77 428 31.42 329c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L3.04 340C1.01 342.67 0 345.67 0 349s1.01 6 3.04 8l120.62 119c2.69 2.67 5.57 4 8.62 4s5.92-1.33 8.62-4l304.07-300c2.03-2 3.04-4.67 3.04-8s-1.02-6.33-3.05-9zM127.17 284.03c2.65 2.65 5.48 3.97 8.47 3.97s5.82-1.32 8.47-3.97L365.01 63.8c1.99-2 2.99-4.65 2.99-7.96s-1-6.29-2.99-8.94l-11.96-10.93c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97L135.14 236.34l-72.25-72.03c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97l-11.96 10.93C33 177.89 32 180.87 32 184.18s1 5.96 2.99 7.95l92.18 91.9z" />
          </svg>
        </div>
      </div>
      <span className="block z-0 max-h-[1e+06px] leading-[1.4375rem] 2xl:hidden">
        {d.text}
      </span>
    </li>
  );
}
