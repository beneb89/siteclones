import Tile6, { type Tile6Data } from "../components/tile6";
import { Tile6_styles4 } from "../_styles";
const Tile6_data4: Tile6Data[] = [
    { text: "24/7 support", text2: "✓ Yes" },
    { text: "Avg. response time", text2: "—" },
    { text: "Dedicated account manager", text2: "—" },
    { text: "Onboarding included", text2: "—" },
    { text: "Custom solutions", text2: "—" }
];
/** Support Account section. */
export default function SupportAccountSection({ tile6Data4 = Tile6_data4 } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-support" id="support">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        {"Support & account"}
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        How they pick up the phone — and who answers.
      </p>
      {" "}
      <div className="grid gap-2.5 grid-cols-[repeat(auto-fit,_minmax(292px,_1fr))] max-md:gap-2">
        {tile6Data4.map((d, i) => <Tile6 key={i} d={d} styles={Tile6_styles4[i]} />)}
        {" "}
      </div>
      {" "}
    </section>
  );
}
