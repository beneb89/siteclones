import MediaCard3 from "../components/media-card3";
import { MediaCard3_styles } from "../_styles";
import { cards as cardsContent } from "../content";
/** Latest Design News section. */
export default function LatestDesignNewsSection({ cards = cardsContent } = {}) {
  return (
    <div className="block pt-16 max-md:pt-7 md:max-lg:pt-12">
      <div className="block max-w-370 px-[2.1875rem] mx-auto max-md:px-5 md:max-lg:px-[1.5625rem]">
        <div className="border-b border-solid border-b-clr-20 block mb-12.5 pb-[0.9375rem] max-md:mb-6 max-md:border-b-[0] max-md:border-initial max-md:border-b-[initial] max-md:pb-0 md:max-lg:mb-[37.5px]">
          <h2 className="block text-[1.75rem] font-medium leading-[2rem] max-lg:text-[1.625rem] max-lg:leading-[1.875rem]" data-component="heading">
            {"Latest Design News & Trends"}
          </h2>
        </div>
      </div>
      <section className="block">
        <div className="block max-w-370 px-[2.1875rem] mx-auto max-md:px-5 md:max-lg:px-[1.5625rem]">
          <div className="flex flex-wrap gap-x-7.5 max-lg:gap-6.5 grid-cols-1 lg:grid-cols-2">
            <aside className="w-[471.9px] flex pb-4.5 flex-col max-md:w-[20.9375rem] max-lg:border-b max-lg:border-solid max-lg:border-b-color-002 max-lg:pb-4 md:max-lg:w-179.5 2xl:w-[549.9px]">
              <div className="flex flex-col gap-2.5 max-lg:gap-4.5">
                <a className="block rounded-sm overflow-hidden aspect-video text-accent cursor-pointer hover:border-clr-21 hover:text-clr-21 hover:outline-clr-21 hover:[text-decoration-color:var(--clr-21)]" data-component="link" aria-label="Rare Beauty's giant rollerball OOH in New York" href="https://news.designrush.com/rare-beauty-beginnings-giant-rollerball-new-york" target="_blank">
                  <img className="w-full h-[16.5625rem] block max-w-full overflow-clip object-cover aspect-[auto_544/306] align-top text-clr-1 max-md:h-47 md:max-lg:h-101 2xl:h-[19.3125rem]" data-component="image" alt="Rare Beauty's giant rollerball OOH in New York" height="306" src="/assets/cloned/images/610b571242a6.webp" width="544" />
                </a>
                <div className="block relative">
                  <a className="inline-flex items-center text-accent uppercase cursor-pointer max-lg:mb-[0.3125rem] hover:border-clr-21 hover:text-clr-21 hover:outline-clr-21 hover:[text-decoration-color:var(--clr-21)]" data-component="link" href="https://news.designrush.com/design">
                    <strong className="block font-medium">
                      Design
                    </strong>
                  </a>
                  <a className="inline text-[1.75rem] font-medium leading-10.5 cursor-pointer max-lg:text-[1.625rem] max-lg:leading-8.5 hover:border-clr-29 hover:text-clr-29 hover:outline-clr-29 hover:[text-decoration-color:var(--clr-29)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="https://news.designrush.com/rare-beauty-beginnings-giant-rollerball-new-york" target="_blank">
                    <h3 className="block hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="heading">
                      Rare Beauty Takes Its Accessible Bottle Design to a NY Sidewalk
                    </h3>
                  </a>
                </div>
              </div>
            </aside>
            <section className="w-[44.25rem] flex flex-wrap content-start gap-7.5 max-md:w-[20.9375rem] max-lg:gap-6.5 md:max-lg:w-179.5 2xl:w-[51.875rem] grid-cols-1 lg:grid-cols-3">
              {cards.map((d, i) => <MediaCard3 key={i} d={d} styles={MediaCard3_styles[i]} />)}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
