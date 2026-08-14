import type { MediaTile7Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile7Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile7({ d, styles }: { d: MediaTile7Data; styles: MediaTile7Styles }) {
  return (
    <li className={cn("flex items-start gap-3", styles.className)}>
      <span className="flex mt-0.5 rounded-full justify-center items-center shrink-0 bg-color-001 h-4 w-4">
        <svg className="block overflow-hidden align-middle text-foreground h-2.5 w-2.5" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M378-232.43 140.43-470l57.14-57.13L378-346.7l383.43-383.43L818.57-673 378-232.43Z" fill="currentColor" />
        </svg>
      </span>
      <span className="block text-color-018 text-base leading-[1.375rem] max-md:text-sm max-md:leading-[1.25rem] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]">
        {d.text}
      </span>
    </li>
  );
}
