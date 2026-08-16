import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className={cn("flex mb-3 items-start gap-2", styles.className)}>
      <svg className="flex mt-[0.175rem] shrink-0 overflow-hidden w-3 h-3 max-md:mt-[0.1625rem] md:max-lg:mt-[2.7px]" data-component="icon" aria-hidden="true" fill="none" viewBox="0 0 12 12">
        <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {" "}
      <a className="block leading-5 cursor-pointer max-lg:text-[0.875rem]" data-component="link" href="/seminarangebot/agilitaet-scrum">
        {d.label}
      </a>
    </li>
  );
}
