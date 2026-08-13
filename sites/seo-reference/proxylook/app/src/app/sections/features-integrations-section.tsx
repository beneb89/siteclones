import Tile5, { type Tile5Data } from "../components/tile5";
import { Tile5_styles } from "../_styles";
const Tile5_data: Tile5Data[] = [
    { text: "SOCKS5", text2: "—" },
    { text: "HTTP/HTTPS", text2: "✓" },
    { text: "Sticky sessions (up to 30m)", text2: "✓" },
    { text: "Dashboard API", text2: "✓" },
    { text: "IP whitelisting", text2: "✓" },
    { text: "Username:pass auth", text2: "✓" },
    { text: "Crypto payments", text2: "—" },
    { text: "Free trial", text2: "—" },
    { text: "24/7 live chat", text2: "✓" },
    { text: "Dedicated AM (Enterprise)", text2: "✓" },
    { text: "Browser extension", text2: "—" },
    { text: "Custom geo carving", text2: "✓" }
];
/** Features Integrations section. */
export default function FeaturesIntegrationsSection({ tile5Data = Tile5_data } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-features" id="features">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        {"Features & integrations"}
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        What's included out of the box.
      </p>
      {" "}
      <div className="grid gap-2.5 grid-cols-[repeat(auto-fit,_minmax(292px,_1fr))] max-md:gap-2">
        {tile5Data.map((d, i) => <Tile5 key={i} d={d} styles={Tile5_styles[i]} />)}
        {" "}
      </div>
      {" "}
    </section>
  );
}
