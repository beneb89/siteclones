import type { MediaCard3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCard3Data = {
  ariaLabel: string;
  href: string;
  alt: string;
  imgSrc: string;
  href2: string;
  text: string;
  href3: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard3({ d, styles }: { d: MediaCard3Data; styles: MediaCard3Styles }) {
  return (
    <div className={cn("flex max-w-[calc(33.3333%_-_20px)] flex-col gap-2.5", styles.className)}>
      <a className={cn("w-full block rounded-sm overflow-hidden aspect-video text-accent cursor-pointer hover:border-clr-21 hover:text-clr-21 hover:outline-clr-21 hover:[text-decoration-color:var(--clr-21)]", styles.className2)} data-component="link" aria-label={d.ariaLabel} href={d.href} target="_blank">
        <img className={cn("w-full h-30.5 block max-w-full overflow-clip object-cover aspect-[auto_258/145] align-top text-clr-1 2xl:h-36", styles.className3)} data-component="image" alt={d.alt} height="145" src={d.imgSrc} width="258" />
      </a>
      <div className={cn("block relative", styles.className4)}>
        <a className={cn("inline-flex mb-[0.3125rem] items-center text-accent text-sm leading-[1.125rem] uppercase cursor-pointer hover:border-clr-21 hover:text-clr-21 hover:outline-clr-21 hover:[text-decoration-color:var(--clr-21)]", styles.className5)} data-component="link" href={d.href2}>
          <strong className="block font-medium">
            {d.text}
          </strong>
        </a>
        <a className={cn("overflow-hidden font-medium leading-5.5 cursor-pointer line-clamp-2 hover:border-clr-29 hover:text-clr-29 hover:outline-clr-29 hover:[text-decoration-color:var(--clr-29)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]", styles.className6)} data-component="link" href={d.href3} target="_blank">
          <h3 className="block hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="heading">
            {d.title}
          </h3>
        </a>
      </div>
    </div>
  );
}
