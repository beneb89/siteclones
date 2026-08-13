import Card from "../components/card";
import { cards as cardsContent } from "../content";
/** Blog Visit Our section. */
export default function BlogVisitOurSection({ cards = cardsContent } = {}) {
  return (
    <devsite-footer-promos class="border-t border-solid border-t-border block ml-[16.8125rem] px-6 text-sm leading-5 bg-surface-3 max-md:px-4 max-lg:ml-0">
      <nav className="block" data-component="nav" aria-label="Promotions">
        <ul className="border-b border-solid border-b-border flex py-4.5 justify-around gap-x-6 [list-style-type:none] list-outside max-md:block max-lg:py-3 max-lg:flex-wrap max-lg:justify-start max-lg:gap-x-[initial] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((d, i) => <Card key={i} d={d} />)}
        </ul>
        {" "}
      </nav>
      {" "}
    </devsite-footer-promos>
  );
}
