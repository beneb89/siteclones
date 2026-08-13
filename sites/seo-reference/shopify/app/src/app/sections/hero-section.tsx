import Icon25 from "../svgs/svg-icon25";
import Card from "../components/card";
import { Card_styles } from "../_styles";
import { cards as cardsContent } from "../content";
/** Hero section — the page's lead block. */
export default function HeroSection({ cards = cardsContent } = {}) {
  return (
    <div className="h-full flex relative mx-22.5 py-12 px-52.5 flex-col items-center text-center max-md:mx-4 max-lg:pt-16 max-lg:px-10 md:max-lg:mx-7.5 2xl:max-w-355 2xl:mx-62.5">
      <p className="block max-w-170 mb-2 [font-family:aktiv-grotesk-extended,_Inter-Variable,_sans-serif] text-3xl [font-weight:450] leading-9 uppercase max-md:text-2xl max-md:leading-8">
        Start selling with Shopify today
      </p>
      <p className="w-full max-w-170 block text-sm leading-5">
        Start your free trial with Shopify today—then use these resources to guide you through every step of the process.
      </p>
      <div className="flex mt-6 justify-center items-center gap-6 w-full max-lg:mt-4 max-md:flex-col max-lg:gap-4">
        <a className="h-11 border-2 border-solid border-clr-0 block py-2 px-5 rounded-full self-center overflow-hidden text-background [font-weight:550] bg-foreground cursor-pointer max-w-full w-auto max-md:w-full hover:bg-clr-23" data-component="link" href={"https://admin.shopify.com/signup?locale=en-IN&language=en&signup_page=https%3A%2F%2Fwww.shopify.com%2Fin%2Fblog%2Fad-library-facebook&signup_types%5B%5D=paid_trial_experience"}>
          Start for free
        </a>
        <button className="h-11 border-2 border-solid border-foreground flex py-2 px-5 rounded-full justify-center items-center self-center gap-x-2 overflow-hidden [font-weight:550] cursor-pointer max-w-full w-auto max-md:w-full hover:border-clr-23 hover:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-23)_0px_0px_0px_1px_inset,var(--clr-0)_0px_0px_0px_0px]" data-component="button">
          <Icon25 />
          <span className="block">
            How does Shopify work
          </span>
        </button>
      </div>
      {cards.map((d, i) => <Card key={i} d={d} styles={Card_styles[i]} />)}
    </div>
  );
}
