import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  kind?: string;
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className={cn("w-201 block relative rounded-[17.2px] shrink-0 overflow-hidden text-muted max-md:w-[23.4375rem] max-md:rounded-[initial] max-md:[overflow-x:initial] max-md:[overflow-y:initial] md:max-lg:w-149.5 md:max-lg:rounded-[14.4px] 2xl:w-[70.8125rem] 2xl:rounded-[20px]", styles.className)}>
      <figure className={cn("block overflow-hidden", styles.className2)}>
        <img className="w-full h-[37.6875rem] block max-w-full overflow-clip align-middle max-md:h-[17.5625rem] md:max-lg:h-[28.0625rem] 2xl:h-212.5" data-component={d.kind} alt={d.alt} src={d.imgSrc} />
        {" "}
      </figure>
      {" "}
    </li>
  );
}
