import type { TextLink2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink2Data = {
  href: string;
  title: string;
  description: string;
  rel?: string;
  target?: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("border border-solid grid min-w-0 p-7 rounded-[28px] content-between overflow-hidden font-semibold text-left cursor-pointer grid-cols-[minmax(0,_1fr)] max-md:rounded-[22px] max-md:col-start-1", styles.className)} data-component="link" href={d.href} rel={d.rel} target={d.target}>
      <div className="block">
        <h3 className="block text-[2.5rem] [font-weight:740] leading-[2.625rem] [overflow-wrap:break-word] text-balance max-lg:text-[2rem] max-lg:leading-[2.0625rem]" data-component="heading">
          {d.title}
        </h3>
        <p className={cn("block mt-3 text-[1.0625rem] leading-[1.5rem]", styles.className2)}>
          {d.description}
        </p>
      </div>
    </a>
  );
}
