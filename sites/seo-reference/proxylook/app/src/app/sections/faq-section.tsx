import Tile13, { type Tile13Data } from "../components/tile13";
import { Tile13_meta } from "../ditto-meta";
import { Tile13_styles } from "../_styles";
const Tile13_data: Tile13Data[] = [
    { text: "How much does DataForSEO cost?", text2: "Entry pricing for DataForSEO starts at $50.00 per request or month, verified Aug 13, 2026. Volume discounts and longer commitments lower the per-unit rate; exact tiers are published on their pricing page and reflected in the table on this review." },
    { text: "What kinds of proxies does DataForSEO offer?", text2: "DataForSEO focuses on a single proxy category across a pool advertised as 1.98T live backlinks, 8B+ Google keywords, 577M Google SERPs. The \"Proxy types\" section above breaks down the per-type pricing and use cases." },
    { text: "Is DataForSEO the right choice for my workload?", text2: "DataForSEO serves the broad mid-market. Benchmarked performance is detailed in the Performance section above — the right way to validate is to run 100-500 requests through their cheapest tier against your actual targets before committing." },
    { text: "Who is behind DataForSEO?", text2: "DataForSEO has been operating since 2016, headquartered in Tallinn, Estonia. Support is reachable via 24/7. Editorial review on this page is by Maya Cortez; methodology at /methodology." }
];
/** Faq section. */
export default function FaqSection({ tile13Data = Tile13_data } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-faq" id="faq">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        FAQ
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        The questions buyers actually ask.
      </p>
      {tile13Data.map((d, i) => <Tile13 key={i} d={d} meta={Tile13_meta[i]} styles={Tile13_styles[i]} />)}
      {" "}
    </section>
  );
}
