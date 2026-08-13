import { ctaSection3Content } from "../content";
/** Cta section. */
export default function CtaSection3({ content = ctaSection3Content } = {}) {
  return (
    <section className="border-t border-solid border-t-color-009 block bg-color-001">
      <div className="block mx-auto py-20 px-4 text-center max-w-3xl max-md:py-16">
        <span className="border border-solid border-color-004 inline-block mb-5 py-1.5 px-3 rounded-full text-color-002 text-xs font-medium leading-4 bg-color-009">
          WEEKLY NEWSLETTER
        </span>
        <h2 className="block mb-4 text-background text-4xl font-bold leading-[2.8125rem] max-md:text-2xl max-md:leading-7.5" data-component="heading">
          {content.title}
        </h2>
        <p className="block mb-8 mx-auto text-muted-foreground leading-6.5 max-w-xl">
          Every week I score the tools for MCP, API, and agent-readiness, then email you the ones that actually deliver, what plugs into Claude and Cursor, the pricing changes, and what to skip. No fluff, no daily spam.
        </p>
        <form className="flex relative mx-auto gap-3 max-w-md max-md:flex-col">
          <input className="w-78 h-12.5 border border-solid border-color-004 block py-3 px-4 rounded-xl flex-1 overflow-clip text-background text-start bg-color-009 cursor-text max-md:w-[21.4375rem] focus:border-muted focus:shadow-[var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--clr-3)_0px_0px_0px_0px,var(--surface)_0px_0px_0px_2px,var(--clr-3)_0px_0px_0px_0px]" data-ditto-id="style-input" data-component="input" placeholder="you@company.com" type="email" value="" />
          <button className="block py-3 px-6 rounded-xl text-color-001 font-medium whitespace-nowrap text-nowrap bg-background cursor-default hover:bg-color-005" data-component="button" type="submit">
            Subscribe
          </button>
        </form>
        <p className="block mt-4 text-color-003 text-xs leading-4">
          Join for free. One email a week, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
