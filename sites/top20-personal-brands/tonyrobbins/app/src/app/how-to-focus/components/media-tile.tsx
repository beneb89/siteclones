import type { MediaTileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTileData = {
  kind?: string;
  href?: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className="list-item relative text-sm leading-[1.3125rem]">
      <a className={cn("flex relative py-2 px-3 items-center font-medium", styles.className)} data-component={d.kind} href={d.href}>
        <span className="block">
          {d.label}
        </span>
        <svg className="block overflow-hidden align-middle [rotate:90deg] h-5 w-5" data-component="icon" viewBox="0 0 20 20" fill="currentColor">
          <title>
            {"Carat"}
          </title>
          <path d="M10.9724 10.0006L6.84766 5.87577L8.02616 4.69727L13.3295 10.0006L8.02616 15.3038L6.84766 14.1253L10.9724 10.0006Z" />
        </svg>
      </a>
    </li>
  );
}
