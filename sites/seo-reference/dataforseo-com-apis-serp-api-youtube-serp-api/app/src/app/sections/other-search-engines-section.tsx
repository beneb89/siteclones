import MediaCard from "../components/media-card";
import MediaCard2 from "../components/media-card2";
import { MediaCard_styles, MediaCard2_styles, MediaCard2_styles2 } from "../_styles";
import { cards as cardsContent, cards2 as cards2Content, cards3 as cards3Content } from "../content";
/** Other Search Engines section. */
export default function OtherSearchEnginesSection({ cards = cardsContent, cards2 = cards2Content, cards3 = cards3Content } = {}) {
  return (
    <div className="box-content block relative my-20 -mx-[0.9375rem] py-20 text-center bg-surface-3 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
      <div className="box-content w-275 block relative z-20 mx-[6.5625rem] max-md:w-75 max-md:mx-[52.5px] md:max-lg:w-150 md:max-lg:mx-[6.1875rem] 2xl:mx-[26.5625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
        <div className="box-content block -mx-[0.9375rem] max-md:mx-0 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
          <div className="w-full h-[53.775rem] min-h-px block relative float-left max-md:h-[2797.3px] max-md:[float:initial] md:max-lg:h-[1519.5px]">
            <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
              <div className="box-content h-full block">
                <div className="box-content block">
                  <div className="box-content block">
                    <h2 className="box-content block text-color-001 text-[2.125rem] font-bold leading-[2.75rem] max-md:text-[1.625rem] max-md:leading-[2.0625rem] md:max-lg:text-[1.75rem] md:max-lg:leading-9" data-component="heading">
                      Other Search Engines available in SERP API
                    </h2>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="box-content h-12.5 block" />
                <div className="box-content block relative -mx-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
                  <div className="box-content flex flex-wrap justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {cards.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
                  </div>
                </div>
                <div className="box-content h-7.5 block" />
                <div className="box-content block relative -mx-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
                  <div className="box-content flex flex-wrap justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {cards2.map((d, i) => <MediaCard2 key={i} d={d} styles={MediaCard2_styles[i]} />)}
                  </div>
                </div>
                <div className="box-content h-7.5 block" />
                <div className="box-content block relative -mx-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
                  <div className="box-content flex flex-wrap justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {cards3.map((d, i) => <MediaCard2 key={i} d={d} styles={MediaCard2_styles2[i]} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
