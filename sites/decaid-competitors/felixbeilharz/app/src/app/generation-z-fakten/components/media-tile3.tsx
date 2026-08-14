import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile3Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile3({ d, styles }: { d: MediaTile3Data; styles: MediaTile3Styles }) {
  return (
    <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
      <div className="block relative z-1">
        <div className={cn("box-content p-2.5 leading-0 text-center", styles.className)}>
          <svg className="box-content w-4 h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 448 512" data-id="icon-angle-double-right-solid" data-name="" fill="currentColor">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
          </svg>
        </div>
      </div>
      <span className="block z-0 leading-[2.3125rem]">
        {d.text}
      </span>
    </li>
  );
}
