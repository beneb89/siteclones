import { ctaSection2Content } from "../content";
/** Cta section. */
export default function CtaSection2({ content = ctaSection2Content } = {}) {
  return (
    <div className="border border-solid border-border block mt-12 p-8 rounded-xl text-center bg-color-004">
      <p className="block mb-3 text-accent text-xs font-semibold leading-4 tracking-[0.6px] uppercase">
        Synter
      </p>
      <h3 className="block mb-3 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-xl font-bold leading-7" data-component="heading">
        {content.title}
      </h3>
      <p className="block mb-6 mx-auto text-color-001 leading-5 max-w-md">
        Direct API connections to Meta, Google, LinkedIn, TikTok, and 12 more platforms. One interface. No tab hell.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-3">
        <a className="h-[2.8125rem] flex py-3 px-6 rounded-sm items-center gap-2 text-color-007 font-medium bg-accent cursor-pointer hover:opacity-90" data-component="button" href={content.actions[0].href}>
          {content.actions[0].label}
        </a>
        <a className="h-[2.9375rem] border border-solid border-border flex py-3 px-6 rounded-sm items-center gap-2 font-medium cursor-pointer hover:opacity-80" data-component="button" href={content.actions[1].href}>
          {content.actions[1].label}
        </a>
      </div>
    </div>
  );
}
