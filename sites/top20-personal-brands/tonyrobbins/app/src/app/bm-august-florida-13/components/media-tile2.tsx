import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaTile2Data = {
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  description: string;
  description2: string;
  kind?: string;
  style?: string;
};
/** A media tile. */
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className={cn("block", styles.className)}>
      <div className={cn("flex relative mr-4 p-6 rounded-2xl items-end overflow-hidden bg-border", styles.className2)}>
        <img className={cn("w-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-cover align-middle text-clr-0 h-full", styles.className3)} alt={d.alt} height={d.height} src={d.imgSrc} srcSet={d.srcSet} width={d.width} data-component={d.kind} style={d.style} />
        <div className={cn("h-50 block absolute top-50 left-0 opacity-50 min-w-0", styles.className4)} style={{ backgroundImage: "linear-gradient(to top in oklab, var(--foreground) 0%, var(--clr-0) 100%)" }} />
        <p className="block relative z-10 text-background">
          <span className={cn("hidden text-sm leading-[1.375rem] max-md:block max-md:leading-[1.3125rem]", styles.className5)}>
            {d.description}
          </span>
          <span className={cn("block text-2xl leading-7.5 tracking-[-1.2px] max-md:hidden md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-1.15px]", styles.className6)}>
            {d.description2}
          </span>
        </p>
      </div>
    </div>
  );
}
