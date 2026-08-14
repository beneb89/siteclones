import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  style: string;
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className="flex relative flex-col-reverse justify-between text-primary text-left bg-background shadow-[var(--clr-2)_0px_3px_6px_0px] cursor-pointer" data-component="link" href={d.href}>
      {" "}
      <div className={cn("h-82.5 min-h-82.5 block bg-cover bg-no-repeat max-lg:h-43 max-lg:min-h-43", styles.className)} style={d.style} />
      {" "}
      <div className="block pt-10 pb-16 px-10 bg-background">
        <div className="block">
          <h3 className="block -mt-[0.575rem] -mb-3 text-border text-[2.5rem] font-bold leading-12 uppercase [word-break:break-word] max-md:-mt-[0.4rem] max-md:-mb-[0.525rem] max-md:text-[1.75rem] max-md:leading-[2.125rem] md:max-lg:-mt-[0.4375rem] md:max-lg:-mb-[0.575rem] md:max-lg:text-[1.9375rem] md:max-lg:leading-[2.3125rem]" data-component="heading">
            {d.title}
          </h3>
          {" "}
        </div>
        {" "}
        <div className="block mt-[1.65rem] text-foreground">
          <p className="block -mt-[0.2875rem] -mb-1.5 [word-break:break-word] max-md:mt-[-4.1px] max-md:-mb-[0.3375rem]">
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
        <div className="h-[3.575rem] block absolute right-[7.7rem] bottom-82.5 left-10 transform-[matrix(1,0,0,1,0,28.6172)] max-md:h-[3.3875rem] max-md:right-[5.8375rem] max-lg:bottom-43 max-md:transform-[matrix(1,0,0,1,0,27.0781)] md:max-lg:h-[55.5px] md:max-lg:right-[5.9rem] md:max-lg:transform-[matrix(1,0,0,1,0,27.75)] 2xl:h-[3.7125rem] 2xl:right-[20.5625rem] 2xl:transform-[matrix(1,0,0,1,0,29.6953)]">
          <span className="h-full inline-flex relative py-[1.1875rem] pr-[1.1875rem] pl-6 rounded-full items-center text-background text-[1.1875rem] leading-[1.1875rem] bg-accent whitespace-nowrap max-md:py-[1.125rem] max-md:pr-[1.125rem] max-md:pl-[1.4125rem] max-md:text-lg max-md:leading-[1.125rem] md:max-lg:py-[18.5px] md:max-lg:pr-[18.5px] md:max-lg:pl-[23.1px] 2xl:py-5 2xl:pr-5 2xl:pl-[24.7px] 2xl:text-xl 2xl:leading-[1.25rem] after:content-[''] after:hidden after:relative after:w-[1.1875rem] after:h-[1.1875rem] after:ml-[9.5px] after:bg-background max-md:after:w-[1.125rem] max-md:after:h-[1.125rem] max-md:after:ml-[0.5625rem] md:max-lg:after:w-[18.5px] md:max-lg:after:h-[18.5px] md:max-lg:after:ml-[9.3px] 2xl:after:w-5 2xl:after:h-5 2xl:after:ml-2.5">
            Mehr erfahren
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
