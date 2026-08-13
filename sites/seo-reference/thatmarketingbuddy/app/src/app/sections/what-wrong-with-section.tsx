import Tile2, { type Tile2Data } from "../components/tile2";
import { Tile2_styles } from "../_styles";
const Tile2_data: Tile2Data[] = [
    { description: "$50 Minimum Payment", description2: "High barrier to entry for testing or small projects, making it impractical for casual users" },
    { description: "Technical Expertise Required", description2: "APIs require development knowledge and resources to implement, not suitable for non-technical teams" },
    { description: "No Ready-Made Interface", description2: "Provides raw data only, requires building custom dashboards and reporting tools" },
    { description: "Variable Costs", description2: "Pay-per-request pricing can be unpredictable for high-volume usage without careful monitoring" },
    { description: "Complex Pricing Structure", description2: "Different APIs have different costs, making budget planning challenging without usage history" },
    { description: "Learning Curve", description2: "Multiple API endpoints and data structures require time to understand and implement effectively" }
];
/** What Wrong With section. */
export default function WhatWrongWithSection({ tile2Data = Tile2_data } = {}) {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10" id="downsides">
      <p className="block mb-2 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
        Downsides
      </p>
      <h2 className="block mb-6 text-color-001 text-2xl font-black leading-8 tracking-[-0.6px]" data-component="heading">
        What's wrong with DataForSEO
      </h2>
      <div className="block mb-6">
        {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
      </div>
      <div className="block p-5 rounded-2xl text-background bg-foreground">
        <p className="block mb-2 text-color-003 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
          Buddy's Take
        </p>
        <p className="block text-color-002 text-sm leading-[1.4375rem]">
          These limitations are fundamental to DataForSEO's API-first approach. The platform excels at providing comprehensive data infrastructure but requires significant technical resources and financial commitment to use effectively. For teams with the right expertise and budget, these trade-offs enable powerful custom solutions that aren't possible with traditional SEO tools.
        </p>
      </div>
    </section>
  );
}
