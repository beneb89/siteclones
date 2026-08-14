import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  text: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("box-content h-6 flex items-center text-color-001 text-[0.6875rem] cursor-pointer", styles.className)} data-component="link" href={"https://www.instagram.com/p/9_Q7WHMB-M/?utm_source=ig_embed&ig_rid=A6aDAEQTakLTZ2GLWpf1H9Y"} target="_blank">
      <i className={cn("box-content w-6 h-6 block overflow-hidden italic indent-[-1.11999e+06px] bg-no-repeat", styles.className2)} style={{ backgroundImage: "url(\"/assets/cloned/images/5de20771a30a.png\")" }}>
        <u className={cn("box-content w-px h-px block absolute top-[44.0625rem] overflow-hidden underline whitespace-nowrap text-nowrap", styles.className3)}>
          {d.text}
        </u>
      </i>
    </a>
  );
}
