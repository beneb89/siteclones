import CardLink from "../components/card-link";
import { cards as cardsContent } from "../content";
/** Related Tools section. */
export default function RelatedToolsSection({ cards = cardsContent } = {}) {
  return (
    <section className="block pb-8 px-6 mx-auto max-w-7xl">
      <h2 className="block mb-6 [font-family:editorialNew,_'editorialNew_Fallback'] text-2xl font-medium leading-8 tracking-[-0.6px]" data-component="heading">
        Related Tools
      </h2>
      <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((d, i) => <CardLink key={i} d={d} />)}
      </div>
    </section>
  );
}
