import { ctaSection3Content } from "../content";
/** Cta section. */
export default function CtaSection3({ content = ctaSection3Content } = {}) {
  return (
    <div className="border border-solid border-border block mt-16 p-8 rounded-xl text-center bg-color-004">
      <h2 className="block mb-3 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-2xl font-semibold leading-8" data-component="heading">
        {content.title}
      </h2>
      <p className="block mb-6 mx-auto text-color-001 max-w-lg">
        Find out if your tracking is set up correctly, what competitors are spending on, and which campaigns to run first. Takes about 60 seconds. Free.
      </p>
      <form className="flex flex-col items-center gap-3">
        <div className="flex gap-2 w-full max-w-md">
          <input className="w-[19.5625rem] h-11.5 border border-solid border-border block py-3 px-4 rounded-lg flex-1 overflow-clip text-foreground leading-5 text-start bg-color-006 cursor-text max-md:w-61" data-ditto-id="style-input-2" data-component="input" placeholder="yoursite.com" type="text" value="" />
          <button className="block py-3 px-5 rounded-lg text-color-007 font-medium whitespace-nowrap text-nowrap bg-accent cursor-pointer hover:opacity-90" data-component="button" type="submit">
            Get report →
          </button>
        </div>
        <a className="block text-muted leading-5 cursor-pointer hover:opacity-80" data-component="link" href={content.actions[0].href} rel="noopener noreferrer" target="_blank">
          {content.actions[0].label}
        </a>
      </form>
    </div>
  );
}
