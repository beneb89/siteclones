import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
  text2: string;
  description: string;
  ariaLabel: string;
  href: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="block relative py-[0.3125rem]">
      <div className="flex relative rounded-lg overflow-hidden bg-background">
        <div className={cn("w-20 h-20 min-h-20 flex min-w-20 mr-4.5 pt-[0.4375rem] pb-2 px-3 flex-col justify-end text-background [font-family:Korb,_sans-serif] text-sm leading-3.5 uppercase bg-foreground max-md:mr-3 max-md:pt-2.5 max-md:justify-start", styles.className)}>
          <span className="block whitespace-nowrap text-nowrap">
            {d.text}
          </span>
          {" "}
          <span className="block -ml-0.5 text-4xl leading-9 whitespace-nowrap text-nowrap">
            {d.text2}
          </span>
          {" "}
          <span className="block whitespace-nowrap text-nowrap">
            Sep 2026
          </span>
          {" "}
        </div>
        {" "}
        <div className="block py-2.5 pr-4.5 self-center leading-6 max-md:text-base max-md:leading-[1.1875rem] md:max-lg:leading-[1.375rem] 2xl:leading-[1.625rem]">
          <p className="block mb-0.5 mx-1 underline">
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
        <a className="h-full block absolute top-0 inset-x-0 z-10 min-w-0 underline cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} />
        {" "}
      </div>
      {" "}
    </li>
  );
}
