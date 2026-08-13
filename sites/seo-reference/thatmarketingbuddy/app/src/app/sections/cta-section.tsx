import Tile3 from "../components/tile3";
import { tile3Data as tile3DataContent, ctaSectionContent } from "../content";
/** Cta section. */
export default function CtaSection({ tile3Data = tile3DataContent, content = ctaSectionContent } = {}) {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10" id="faq">
      <p className="block mb-2 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
        FAQ
      </p>
      <h2 className="block mb-6 text-color-001 text-2xl font-black leading-8 tracking-[-0.6px]" data-component="heading">
        {content.title}
      </h2>
      <div className="flex flex-col gap-3">
        {tile3Data.map((d, i) => <Tile3 key={i} d={d} />)}
      </div>
    </section>
  );
}
