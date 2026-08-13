import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <img className={cn("w-42 block max-w-42 overflow-clip align-middle", styles.className)} data-component="image" alt={d.alt} src={d.imgSrc} />
  );
}
