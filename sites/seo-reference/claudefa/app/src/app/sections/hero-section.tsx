import Icon4 from "../svgs/svg-icon4";
import CardGridItem from "../components/card-grid-item";
import { cards as cardsContent } from "../content";
/** Hero section — the page's lead block. */
export default function HeroSection({ cards = cardsContent } = {}) {
  return (
    <main className="flex flex-1 2xl:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="nd-docs-layout">
      <button className="w-8 h-8 flex fixed top-189 left-2 z-40 opacity-0 min-w-0 p-1.5 rounded-md justify-center items-center text-sm font-medium leading-5 text-center cursor-pointer pointer-events-none max-md:hidden 2xl:hidden hover:bg-clr-63 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)]" aria-label="Collapse Sidebar" type="button">
        <Icon4 />
      </button>
      {cards.map((d) => <CardGridItem key={d.variant} d={d} />)}
    </main>
  );
}
