import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="w-75 block relative max-w-75 mr-2.5 shrink-0">
      <figure className="block">
        <a className="w-75 h-112.5 flex relative rounded-2xl items-end overflow-hidden aspect-[2/3] bg-surface-2 cursor-pointer" data-component="link" href={d.href}>
          <video className="w-full block absolute top-0 left-0 min-w-0 max-w-full overflow-clip object-cover align-middle bg-foreground h-full" playsInline preload="none" />
          <div className="w-75 h-full block absolute top-0 left-0 min-w-0" style={{ backgroundImage: "linear-gradient(to top, var(--clr-2) 0%, var(--clr-0) 100%)" }} />
          <div className="flex relative py-6 px-10 flex-col items-center text-center w-full">
            <div className="flex max-w-40 py-5 items-end overflow-hidden w-full">
              <img className={cn("w-full block max-w-full overflow-clip align-middle text-clr-0", styles.className)} data-component="image" alt={d.alt} height={d.height} sizes="160px" src={d.imgSrc} srcSet={d.srcSet} width="160" />
            </div>
            <h3 className="block opacity-70 mb-5" data-component="heading">
              {d.title}
            </h3>
          </div>
        </a>
      </figure>
    </div>
  );
}
