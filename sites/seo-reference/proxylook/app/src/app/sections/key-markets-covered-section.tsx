import Tile8, { type Tile8Data } from "../components/tile8";
const Tile8_data: Tile8Data[] = [
    { text: "US", text2: "United States" },
    { text: "UK", text2: "United Kingdom" },
    { text: "G", text2: "Germany" },
    { text: "F", text2: "France" },
    { text: "B", text2: "Brazil" },
    { text: "I", text2: "India" },
    { text: "J", text2: "Japan" },
    { text: "A", text2: "Australia" },
    { text: "C", text2: "Canada" },
    { text: "S", text2: "Singapore" },
    { text: "N", text2: "Netherlands" },
    { text: "S", text2: "Spain" }
];
/** Key Markets Covered section. */
export default function KeyMarketsCoveredSection({ tile8Data = Tile8_data } = {}) {
  return (
    <section className="border-r border-solid border-r-border border-b border-b-border border-l border-l-border block relative mb-4 p-6.5 rounded-xl [overflow-wrap:anywhere] bg-surface" data-ditto-id="style-locations" id="locations">
      <h2 className="flex mb-2 items-center gap-3 text-[1.375rem] font-bold leading-[1.625rem] tracking-[-0.22px]" data-component="heading">
        <span className="w-[0.5625rem] h-[0.5625rem] flex min-w-[0.5625rem] rounded-[3px] justify-center items-center shrink-0 text-primary text-[1.0625rem] leading-[1.25rem]" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--clr-10))" }} />
        Key markets covered
      </h2>
      {" "}
      <p className="w-full max-w-136 block mb-5 text-muted-foreground text-[0.8125rem] leading-[1.375rem] max-md:text-xs max-md:leading-[1.25rem]">
        {"Global coverage. "}
      </p>
      {" "}
      <div className="grid gap-2 grid-cols-4 grid-rows-3 max-md:gap-1.5 max-md:grid-cols-1 max-md:grid-rows-12 md:max-lg:grid-cols-2 md:max-lg:grid-rows-6">
        {tile8Data.map((d, i) => <Tile8 key={i} d={d} />)}
        {" "}
      </div>
      {" "}
    </section>
  );
}
