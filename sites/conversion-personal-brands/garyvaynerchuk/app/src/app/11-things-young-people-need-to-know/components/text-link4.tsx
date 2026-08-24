import type { TextLink4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink4Data = {
  text: string;
};
/** A text link. */
export default function TextLink4({ d, styles }: { d: TextLink4Data; styles: TextLink4Styles }) {
  return (
    <a className={cn("box-content h-6 flex items-center text-color-002 text-[0.6875rem] cursor-pointer", styles.className)} data-component="link" href={"https://www.instagram.com/reel/CmAziAygjGY/?utm_source=ig_embed&ig_rid=AypErnd7_2jIMBlMJPg8suy"} target="_blank">
      <i className={cn("box-content w-6 h-6 block overflow-hidden italic indent-[-1.11999e+06px] bg-no-repeat", styles.className2)} style={{ backgroundImage: "url(\"/assets/cloned/images/5de20771a30a.png\")" }}>
        <u className={cn("box-content w-px h-px block absolute top-[779.5px] overflow-hidden underline whitespace-nowrap text-nowrap", styles.className3)}>
          {d.text}
        </u>
      </i>
    </a>
  );
}
