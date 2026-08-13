import FeatureCard, { type FeatureCardData } from "../components/feature-card";
import { FeatureCard_styles } from "../_styles";
const FeatureCard_data: FeatureCardData[] = [
    { text: "1", title: "Create an account and confirm email", description: "Create a DataForSEO account at https://dataforseo.com. Self-serve access is usually available immediately." },
    { text: "2", title: "Choose your proxy mix", description: "Use the dashboard to choose between residential / datacenter / mobile. Start with the smallest plan to validate your workload before scaling." },
    { text: "3", title: "Set up your proxy auth", description: "Set up either an IP-whitelist auth or username:password pair from the dashboard. Save the proxy hostname + port into your scraper or browser config." },
    { text: "4", title: "Tune rotation policy for your target", description: "Decide between rotating-on-every-request (best for SERP scraping) or sticky sessions (best for account-based workflows). " },
    { text: "5", title: "Validate against your real target", description: "Run 100-500 test requests against your real target before paying for volume. Compare success rate to DataForSEO's claimed rate before committing to an annual plan." }
];
/** How To Get section. */
export default function HowToGetSection({ featureCardData = FeatureCard_data } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-setup" id="setup">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-surface text-[1.0625rem] leading-[1.25rem] bg-color-008" />
        How to get started with DataForSEO
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        A 5-minute walkthrough from sign-up to your first successful request. Total setup time: ~10 minutes.
      </p>
      {" "}
      <ol className="block [list-style-type:none] list-outside">
        {featureCardData.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
      </ol>
      {" "}
      <p className="w-full max-w-136 block mt-3.5 text-muted-foreground text-xs leading-[1.25rem]">
        {"Stuck? Check "}
        <a className="inline-flex items-center gap-1 text-primary text-[0.8125rem] font-semibold leading-[1.375rem] cursor-pointer hover:text-color-002 hover:outline-color-002 hover:underline" data-component="link" href="https://dataforseo.com/" rel="noopener" target="_blank">
          DataForSEO's documentation
        </a>
        {" or "}
        <a className="inline-flex items-center gap-1 text-primary text-[0.8125rem] font-semibold leading-[1.375rem] cursor-pointer hover:text-color-002 hover:outline-color-002 hover:underline" data-component="link" href="/contact">
          email us
        </a>
        .
      </p>
      {" "}
    </section>
  );
}
