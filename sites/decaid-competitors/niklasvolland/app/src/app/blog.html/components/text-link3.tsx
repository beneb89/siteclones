import type { TextLink3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink3Data = {
  href: string;
  label: string;
  label2: string;
  title: string;
  description: string;
  label3: string;
};
/** A text link. */
export default function TextLink3({ d, styles }: { d: TextLink3Data; styles: TextLink3Styles }) {
  return (
    <a className={cn("h-[429.5px] min-h-70 border border-solid border-border flex relative py-8 px-7.5 rounded-3xl flex-col overflow-hidden bg-border cursor-pointer max-lg:py-6.5 max-lg:px-5.5 max-lg:min-h-0 md:max-lg:h-[17.8625rem]", styles.className)} data-component="link" href={d.href}>
      {" "}
      <div className="flex mb-4.5 items-center gap-2.5 text-primary text-xs font-bold leading-[1.1875rem] tracking-[1.5px] uppercase">
        <span className="block">
          {d.label}
        </span>
        {" "}
        <span className="w-[0.1875rem] h-[0.1875rem] block rounded-[50%] bg-muted" />
        {" "}
        <span className="block text-muted font-medium tracking-[0.6px] normal-case">
          {d.label2}
        </span>
        {" "}
      </div>
      {" "}
      <h3 className="block mb-3.5 text-[1.375rem] font-bold leading-[1.75rem] tracking-[-0.22px] max-lg:text-[1.1875rem] max-lg:leading-[1.5rem] max-lg:tracking-[-0.19px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-6 flex-1 text-muted-foreground text-sm leading-[1.4375rem]">
        {d.description}
      </p>
      {" "}
      <div className="border-t border-solid border-t-border flex pt-4.5 justify-between items-center text-muted text-xs leading-[1.1875rem]">
        <span className="block">
          {d.label3}
        </span>
        {" "}
        <span className="flex items-center gap-1.5 text-muted-foreground text-[0.8125rem] font-medium leading-[1.3125rem]">
          Artikel lesen →
        </span>
        {" "}
      </div>
      {" "}
    </a>
  );
}
