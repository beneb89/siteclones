import Tile4, { type Tile4Data } from "../components/tile4";
import { Tile4_styles } from "../_styles";
const Tile4_data: Tile4Data[] = [
    { text: "Pricing", style: { backgroundImage: "linear-gradient(90deg, var(--color-009), var(--clr-13))" }, text2: "C+" },
    { text: "Performance", style: { backgroundImage: "linear-gradient(90deg, var(--primary), var(--clr-10))" }, text2: "B" },
    { text: "Pool quality", style: { backgroundImage: "linear-gradient(90deg, var(--primary), var(--clr-10))" }, text2: "B" },
    { text: "Support", style: { backgroundImage: "linear-gradient(90deg, var(--primary), var(--clr-10))" }, text2: "B+" },
    { text: "Ethics", style: { backgroundImage: "linear-gradient(90deg, var(--primary), var(--clr-10))" }, text2: "B" }
];
/** Editorial Score Breakdown section. */
export default function EditorialScoreBreakdownSection({ tile4Data = Tile4_data } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-score-breakdown" id="score-breakdown">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        Editorial score breakdown
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        How DataForSEO scores across the five dimensions our reviewers weigh — pricing, performance, pool quality, support and ethics.
      </p>
      {" "}
      <div className="grid mt-1 gap-2.5 grid-cols-1">
        {tile4Data.map((d, i) => <Tile4 key={i} d={d} styles={Tile4_styles[i]} />)}
      </div>
      {" "}
    </section>
  );
}
