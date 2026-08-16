import type { Tile16Styles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type Tile16Data = {
  id: string;
  text: string;
  text2: string;
  text3: string;
  description: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  ariaLabel: string;
  href: string;
};
/** A content tile. */
export default function Tile16({ d, styles }: { d: Tile16Data; styles: Tile16Styles }) {
  return (
    <div className="block relative my-2.5 max-md:overflow-hidden">
      <div className="flex relative rounded-lg overflow-hidden bg-background" id={d.id}>
        <div className={cn("w-20 min-h-20 flex min-w-20 mr-4.5 pt-[0.4375rem] pb-2 px-3 flex-col justify-end text-background [font-family:Korb,_sans-serif] text-sm leading-3.5 uppercase bg-foreground max-md:mr-3 max-md:pt-2.5 max-md:justify-start", styles.className)}>
          <span className="block whitespace-nowrap text-nowrap">
            {d.text}
          </span>
          {" "}
          <span className="block -ml-0.5 text-4xl leading-9 whitespace-nowrap text-nowrap">
            {d.text2}
          </span>
          {" "}
          <span className="block whitespace-nowrap text-nowrap">
            {d.text3}
          </span>
          {" "}
        </div>
        {" "}
        <div className="block py-2.5 pr-4.5 self-center text-lg leading-[1.4375rem] max-lg:[font-size:inherit]">
          <p className="block mt-3 mb-1.5 text-[1.375rem] font-semibold leading-[1.625rem] underline">
            {d.description}
          </p>
          {" "}
          <div className={cn("inline-block mr-[0.9375rem] mb-0.5 leading-5.5 max-md:block max-md:relative max-md:pl-6 before:content-[''] before:inline-block before:relative before:-top-px before:bottom-px before:inset-x-0 before:w-[0.9375rem] before:h-5 before:mr-[0.3125rem] before:text-foreground before:text-base before:leading-5 max-md:before:block max-md:before:absolute max-md:before:bottom-[0.1875rem]", styles.className2)}>
            {d.text4}
          </div>
          {" "}
          <div className={cn("inline-block mr-[0.9375rem] mb-0.5 leading-5.5 max-md:block max-md:relative max-md:pl-6 before:content-[''] before:inline-block before:relative before:-top-px before:bottom-px before:inset-x-0 before:w-[0.9375rem] before:h-5 before:mr-[0.3125rem] before:text-foreground before:text-base before:leading-5 max-md:before:block max-md:before:absolute max-md:before:bottom-[0.1875rem]", styles.className3)}>
            {d.text5}
          </div>
          {" "}
          <div className={cn("inline-block mr-[0.9375rem] mb-0.5 leading-5.5 max-md:block max-md:relative max-md:pl-6 before:content-[''] before:inline-block before:relative before:-top-px before:bottom-px before:inset-x-0 before:w-[0.9375rem] before:h-5 before:mr-[0.3125rem] before:text-foreground before:text-base before:leading-5 max-md:before:block max-md:before:absolute max-md:before:bottom-[0.1875rem]", styles.className4)}>
            {d.text6}
          </div>
          {" "}
          <div className={cn("inline-block mr-[0.9375rem] mb-0.5 leading-5.5 max-md:block max-md:relative max-md:pl-6 before:content-[''] before:inline-block before:relative before:-top-px before:bottom-px before:inset-x-0 before:w-[0.9375rem] before:h-5 before:mr-[0.3125rem] before:text-foreground before:text-base before:leading-5 max-md:before:block max-md:before:absolute max-md:before:bottom-[0.1875rem]", styles.className5)}>
            {d.text7}
          </div>
          {" "}
          <div className={cn("inline-block mr-[0.9375rem] mb-2 leading-5.5 max-md:block max-md:relative max-md:pl-6 before:content-[''] before:inline-block before:relative before:-top-px before:bottom-px before:inset-x-0 before:w-[0.9375rem] before:h-5 before:mr-[0.3125rem] before:text-color-005 before:text-base before:leading-5 max-md:before:block max-md:before:absolute max-md:before:bottom-[0.1875rem]", styles.className6)} title="Freie Plätze">
            Freie Plätze
          </div>
          {" "}
        </div>
        {" "}
        <a className="h-full block absolute top-0 inset-x-0 z-10 min-w-0 underline cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} />
        {" "}
      </div>
      {" "}
    </div>
  );
}
