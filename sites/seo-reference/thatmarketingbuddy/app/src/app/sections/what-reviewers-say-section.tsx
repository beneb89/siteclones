import Tile from "../components/tile";
import { tileData as tileDataContent } from "../content";
/** What Reviewers Say section. */
export default function WhatReviewersSaySection({ tileData = tileDataContent } = {}) {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10" id="ratings">
      <p className="block mb-2 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
        External Ratings
      </p>
      <h2 className="block mb-2 text-color-001 text-2xl font-black leading-8 tracking-[-0.6px]" data-component="heading">
        What reviewers say about DataForSEO
      </h2>
      0
      <div className="grid gap-3 grid-cols-2 max-md:grid-cols-1">
        {tileData.map((d, i) => <Tile key={i} d={d} />)}
      </div>
    </section>
  );
}
