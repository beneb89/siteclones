/** Pricing section. */
export default function PricingSection() {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-pricing" id="pricing">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        Pricing
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        From $50.00/GB. Detailed plan breakdown not yet published.
      </p>
      {" "}
      <a className="h-[2.3rem] border border-solid border-clr-1 inline-flex py-2 px-3.5 rounded-lg justify-center items-center gap-1.5 text-surface text-[0.8125rem] font-semibold leading-[1.1875rem] whitespace-nowrap text-nowrap bg-primary cursor-pointer max-md:h-11 max-md:min-h-11 hover:bg-color-002 hover:shadow-[var(--clr-19)_0px_3.99974px_13.9991px_0px] hover:transform-[matrix(1,0,0,1,0,-0.999936)] focus:shadow-[var(--clr-22)_0px_0.00025114px_0.00087899px_0px] focus:transform-[matrix(1,0,0,1,0,-6.2785e-05)]" data-component="button" href="https://dataforseo.com/" rel="noopener sponsored" target="_blank">
        View plans on DataForSEO →
      </a>
      {" "}
    </section>
  );
}
