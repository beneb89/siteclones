import Icon8 from "../svgs/svg-icon8";
import Icon20 from "../svgs/svg-icon20";
import { ctaSectionContent } from "../content";
/** Cta section. */
export default function CtaSection({ content = ctaSectionContent } = {}) {
  return (
    <section className="block py-16 max-md:py-12">
      <div className="border border-solid border-surface-3 block p-12 rounded-2xl text-center max-md:p-8" style={{ backgroundImage: "linear-gradient(to right bottom, var(--surface-2) 0%, var(--clr-11) 50%, var(--clr-2) 100%)" }}>
        <div className="inline-flex mb-6 py-2 px-4 rounded-full items-center gap-2 text-color-002 text-sm font-medium leading-5 bg-surface-2">
          <Icon8 />
          Context Studios
        </div>
        <h2 className="block mb-4 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] text-3xl font-bold leading-[2.0625rem] tracking-[-0.75px] max-md:text-2xl max-md:leading-[1.625rem] max-md:tracking-[-0.6px]" data-component="heading">
          {content.title}
        </h2>
        <p className="block mb-8 mx-auto text-muted-foreground max-w-xl">
          Book a free 30-minute consultation to discuss your requirements and find the right approach.
        </p>
        <a className="h-12 inline-flex py-3 px-6 rounded-[10px] items-center gap-2 text-color-004 font-medium bg-color-002 cursor-pointer hover:bg-clr-30" data-component="button" href={content.actions[0].href} rel="noopener noreferrer" target="_blank">
          {content.actions[0].label}
          <Icon20 />
        </a>
      </div>
    </section>
  );
}
