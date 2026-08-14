import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  ariaLabel: string;
  id: string;
  style: string;
  alt: string;
  label: string;
  text: string;
  kind?: string;
  description: string;
  ariahidden?: string;
};
/** A media tile. */
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <li className={cn("w-[159.5px] list-item relative mr-2.5 shrink-0 [list-style-type:none] max-md:w-[106.5px] md:max-lg:w-[180.3px]", styles.className)} aria-label={d.ariaLabel} aria-roledescription="slide" id={d.id} role="tabpanel" aria-hidden={d.ariahidden}>
      <div className={cn("h-[249.3px] block bg-cover bg-no-repeat max-md:h-[111.5px] md:max-lg:h-[185.3px]", styles.className2)} style={d.style}>
        <img className={cn("w-full h-full hidden max-w-full overflow-clip align-bottom", styles.className3)} alt={d.alt} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" title={d.label} />
      </div>
      <div className="min-h-[2.7rem] flex py-1 justify-center items-start text-background [font-family:Roboto] text-lg leading-[1.3125rem] [overflow-wrap:break-word]">
        <span className={cn("block mt-1 overflow-hidden leading-[1.5625rem] text-center whitespace-nowrap text-nowrap", styles.className4)}>
          {d.text}
        </span>
      </div>
      <a className={cn("block absolute top-0 text-color-002 underline cursor-pointer", styles.className5)} data-component={d.kind} href="/r-/res/2eff7021-b41e-4941-b3a0-098a98704384/images/files/2eff7021-b41e-4941-b3a0-098a98704384/163bd2fc-3d99-438d-9424-828648eb858e/908-304/9f371eca5c64484a76a58b9373b0535b299216be" />
      <div className="hidden">
        <p className="block my-4">
          {d.description}
        </p>
      </div>
    </li>
  );
}
