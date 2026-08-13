import { ctaSectionContent } from "../content";
/** Cta section. */
export default function CtaSection({ content = ctaSectionContent } = {}) {
  return (
    <div className="border border-solid border-border block mt-16 p-8 rounded-xl bg-color-004">
      <h3 className="block mb-1 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] font-semibold" data-component="heading">
        {content.title}
      </h3>
      <p className="block mb-4 text-color-001 leading-5">
        Technical deep-dives on AI agents, attribution, and ads infrastructure. No spam.
      </p>
      <form className="flex gap-3 max-md:flex-col">
        <input className="w-133 h-10.5 border border-solid border-border block py-2.5 px-4 rounded-lg flex-1 overflow-clip leading-5 bg-color-006 cursor-text max-md:w-[16.3125rem] focus:shadow-[var(--background)_0px_0px_0px_0px,var(--clr-7)_0px_0px_0px_2px,var(--clr-1)_0px_0px_0px_0px]" data-ditto-id="style-input" data-component="input" placeholder="your@email.com" type="email" value="" />
        <button className="block py-2.5 px-5 rounded-lg text-color-007 font-medium leading-5 text-center whitespace-nowrap text-nowrap bg-accent cursor-pointer hover:opacity-90" data-component="button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
}
