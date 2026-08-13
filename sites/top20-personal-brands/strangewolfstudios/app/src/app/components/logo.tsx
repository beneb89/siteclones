import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  imgSrc: string;
  srcSet: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="contents min-w-0">
      <a className={cn("w-full block relative rounded-[45px] [align-self:start] shrink-0 overflow-hidden text-primary cursor-pointer", styles.className)} data-component="link" href={d.href} name="CARD 01">
        <div className="h-full block absolute top-0 inset-x-0 rounded-[45px]">
          <img className={cn("w-full block rounded-[45px] overflow-clip object-cover", styles.className2)} data-component="image" alt="" sizes="max((95vw - 70px) / 2, 50px)" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
      </a>
    </div>
  );
}
