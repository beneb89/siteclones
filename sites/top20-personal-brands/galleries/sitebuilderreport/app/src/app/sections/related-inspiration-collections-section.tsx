import MediaCard2 from "../components/media-card2";
import { cards as cardsContent } from "../content";
/** Related Inspiration Collections section. */
export default function RelatedInspirationCollectionsSection({ cards = cardsContent } = {}) {
  return (
    <div className="box-content w-288 block max-w-400 mx-16 text-left max-md:w-[337.5px] max-md:mx-[1.175rem] md:max-lg:w-[43.2rem] md:max-lg:mx-[2.4rem] 2xl:w-400 2xl:mx-40">
      <div className="box-content border border-solid border-border block mb-7.5 p-[1.8rem] rounded-[3px] text-center max-md:py-[16.9px] max-md:px-[0.525rem] md:max-lg:py-[34.5px] md:max-lg:px-[17.3px] 2xl:p-10">
        <h3 className="box-content block text-[1.625rem] font-bold leading-[1.9375rem] max-lg:text-[1.3125rem] max-lg:leading-[1.5625rem]" data-component="heading">
          Related Inspiration Collections
        </h3>
        {" "}
        <ul className="w-full box-content grid mt-7.5 content-center gap-7.5 font-light leading-[1.6875rem] [list-style-type:none] list-outside grid-cols-2 md:grid-cols-3">
          {cards.map((d, i) => <MediaCard2 key={i} d={d} />)}
        </ul>
        {" "}
      </div>
      {" "}
    </div>
  );
}
