import CardGridItem from "../components/card-grid-item";
import { CardGridItem_styles } from "../_styles";
import { cards as cardsContent } from "../content";
/** Jump Start Your section. */
export default function JumpStartYourSection({ cards = cardsContent } = {}) {
  return (
    <div className="box-content block relative my-20 -mx-[0.9375rem] text-center bg-no-repeat max-lg:bg-cover before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
      <div className="box-content w-275 block relative z-20 mx-[6.5625rem] max-md:w-75 max-md:mx-[52.5px] md:max-lg:w-150 md:max-lg:mx-[6.1875rem] 2xl:mx-[26.5625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
        <div className="box-content block -mx-[0.9375rem] max-md:mx-0 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center grid-cols-1 lg:grid-cols-2">
          <div className="w-full h-[93.7px] min-h-px block relative float-left max-md:h-[7.3rem] max-md:[float:initial] md:max-lg:h-[5.375rem]">
            <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
              <div className="box-content h-full block">
                <div className="box-content block">
                  <div className="box-content block">
                    <h2 className="box-content block text-color-001 text-[2.125rem] font-bold leading-[2.75rem] max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:text-left md:max-lg:text-[1.75rem] md:max-lg:leading-9" data-component="heading">
                      Jump-start your journey with SERP API
                    </h2>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="box-content h-12.5 block" />
              </div>
            </div>
          </div>
          {cards.map((d, i) => <CardGridItem key={d.variant} d={d} styles={CardGridItem_styles[i]} />)}
        </div>
      </div>
    </div>
  );
}
