import Tile6, { type Tile6Data } from "../components/tile6";
import { Tile6_styles } from "../_styles";
const Tile6_data: Tile6Data[] = [
    { text: "Network type", text2: "API / managed scraping" },
    { text: "IP refresh rate", text2: "—" },
    { text: "Avg uptime", text2: "—" },
    { text: "Countries", text2: "0" },
    { text: "Cities", text2: "—" },
    { text: "ASNs", text2: "—" },
    { text: "Sticky session duration", text2: "—" },
    { text: "Min rotation interval", text2: "—" },
    { text: "Max concurrent sessions", text2: "—" },
    { text: "Concurrent connections", text2: "—" },
    { text: "Bandwidth limit", text2: "—" },
    { text: "IP source transparency", text2: "—" }
];
/** Network Infrastructure section. */
export default function NetworkInfrastructureSection({ tile6Data = Tile6_data } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-network" id="network">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        {"Network & infrastructure"}
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        How the pool is built, refreshed and addressed.
      </p>
      {" "}
      <div className="grid gap-2.5 grid-cols-[repeat(auto-fit,_minmax(292px,_1fr))] grid-rows-6 max-md:gap-2 max-md:grid-rows-12">
        {tile6Data.map((d, i) => <Tile6 key={i} d={d} styles={Tile6_styles[i]} />)}
        {" "}
      </div>
      {" "}
    </section>
  );
}
