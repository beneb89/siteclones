import type { Tile7Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile7Data = {
  id: string;
  text: string;
};
/** A content tile. */
export default function Tile7({ d, styles }: { d: Tile7Data; styles: Tile7Styles }) {
  return (
    <blockquote className={cn("border-l-2 border-solid border-l-color-008 block relative py-[0.7rem] px-4 text-color-005 text-[0.8125rem] italic leading-[1.3125rem] bg-surface-3", styles.className)} id={d.id}>
      {d.text}
      <cite className="block mt-[0.4rem] text-color-003 [font-family:ui-monospace,_Menlo,_'Courier_New',_monospace] text-[0.6875rem] not-italic leading-[1.125rem]">
        <a className="border-b border-dotted border-b-accent inline cursor-pointer" data-component="link" href="https://sparktoro.com/resources/videos/get-a-competitive-advantage-in-seo-with-sparktoro">
          Get a Competitive Advantage in SEO with SparkToro | Case Studies | SparkToro
        </a>
        {" — published by SparkToro"}
      </cite>
      {" "}
      <span className="inline mt-[0.2rem] text-color-003 [font-family:ui-monospace,_Menlo,_'Courier_New',_monospace] text-[0.625rem] not-italic leading-4">
        retrieved 22 Jun 2026
      </span>
      {" "}
    </blockquote>
  );
}
