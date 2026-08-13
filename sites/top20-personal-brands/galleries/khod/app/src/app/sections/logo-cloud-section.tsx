import CardGridItem from "../components/card-grid-item";
import Logo3 from "../components/logo3";
import Tile2, { type Tile2Data } from "../components/tile2";
import Tile3 from "../components/tile3";
import ListRow4 from "../components/list-row4";
import { Logo3_styles, Tile2_styles, Tile3_styles } from "../_styles";
import { cards as cardsContent, logos as logosContent, tile3Data as tile3DataContent, listRow4Data as listRow4DataContent } from "../content";
const Tile2_data: Tile2Data[] = [
    { kind: "image", imgSrc: "/assets/cloned/images/48a1a13768cd.avif" },
    { kind: "image", imgSrc: "/assets/cloned/images/a0e3e882759b.avif" },
    { kind: "image", imgSrc: "/assets/cloned/images/58d3a33d6875.avif" },
    { imgSrc: "/assets/cloned/images/03a4dbf7f13e.avif" }
];
/** Logo Cloud section. */
export default function LogoCloudSection({ cards = cardsContent, logos = logosContent, tile2Data = Tile2_data, tile3Data = tile3DataContent, listRow4Data = listRow4DataContent } = {}) {
  return (
    <div className="grid max-w-316 mx-auto px-8 [grid-auto-columns:1fr] text-background grid-cols-5 max-md:px-4 max-md:grid-cols-1 md:max-lg:px-6">
      <div className="border-r border-solid border-r-surface-2 flex relative pt-13.5 pr-8 pb-10 flex-col gap-52.5 col-start-[span_2] col-end-[span_2] row-start-[span_1] row-end-[span_1] max-md:col-start-[span_1] max-md:col-end-[span_1] max-md:border-r-[0] max-md:border-initial max-md:border-r-[initial]" id="w-node-e038b077-fc9f-e506-f03f-2adbd7f1ccc8-d7f1ccc6">
        <a className="h-[2.4375rem] flex max-w-53 justify-start items-center cursor-pointer" data-component="link" href="/">
          <img className="w-[7.9375rem] h-[2.4375rem] block max-w-full overflow-clip align-middle" data-component="image" alt="Khod Logo" src="/assets/cloned/svg/da15cbaa889f.svg" />
        </a>
        <div className="flex flex-col justify-start items-start gap-3 text-[0.8125rem] max-md:text-[0.25rem] md:max-lg:text-[0.5rem] 2xl:text-[1.1875rem]">
          <p className="block text-xs leading-4.5">
            Contact us:
          </p>
          <a className="block [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-[3.0625rem] leading-[3.625rem] tracking-[-1.08px] cursor-pointer max-md:text-xl max-md:leading-[inherit] md:max-lg:text-[1.75rem] md:max-lg:leading-[2.125rem] 2xl:text-[3.25rem] 2xl:leading-[3.875rem]" data-component="link" href="mailto:hello@khod.io">
            hello@khod.io
          </a>
        </div>
        <div className="w-320 h-full border-b border-solid border-b-surface-2 block absolute top-0 right-0 min-w-0 pointer-events-none max-md:w-[23.4375rem] max-md:-right-4 md:max-lg:w-192 2xl:w-480">
          <div className="w-5 h-px flex absolute -top-px -right-px z-3 flex-col justify-start items-end bg-background pointer-events-none">
            <div className="w-px h-2.5 block shrink-0 bg-background pointer-events-none" />
          </div>
          <div className="w-5 h-px flex absolute -right-px -bottom-px z-3 flex-col justify-end items-end bg-background pointer-events-none">
            <div className="w-px h-2.5 block shrink-0 bg-background pointer-events-none" />
          </div>
          <div className="w-5 h-px flex absolute -top-px -left-px z-3 flex-col justify-start items-start bg-background pointer-events-none" />
          <div className="w-5 h-px flex absolute -bottom-px -left-px z-3 flex-col justify-end items-start bg-background pointer-events-none" />
        </div>
      </div>
      <div className="flex relative pt-18 pb-10 pl-16 flex-wrap justify-start items-start gap-14 col-start-[span_3] col-end-[span_3] row-start-[span_1] row-end-[span_1] max-md:pl-8 max-md:col-start-[span_1] max-md:col-end-[span_1] grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="w-node-e038b077-fc9f-e506-f03f-2adbd7f1ccd1-d7f1ccc6">
        {cards.map((d) => <CardGridItem key={d.variant} d={d} />)}
        <div className="h-full border-b border-solid border-b-surface-2 block absolute top-0 -right-140 left-0 min-w-0 pointer-events-none max-md:-right-4.5 max-md:-left-4 md:max-lg:-right-[21.075rem] 2xl:-right-300">
          <div className="w-5 h-px flex absolute -top-px -right-px z-3 flex-col justify-start items-end bg-background pointer-events-none" />
          <div className="w-5 h-px flex absolute -right-px -bottom-px z-3 flex-col justify-end items-end bg-background pointer-events-none" />
          <div className="w-5 h-px flex absolute -top-px -left-px z-3 flex-col justify-start items-start bg-background pointer-events-none">
            <div className="w-px h-2.5 block shrink-0 bg-background pointer-events-none" />
          </div>
          <div className="w-5 h-px flex absolute -bottom-px -left-px z-3 flex-col justify-end items-start bg-background pointer-events-none">
            <div className="w-px h-2.5 block shrink-0 bg-background pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex relative -ml-16 py-12 justify-start items-center col-start-[span_5] col-end-[span_5] row-start-[span_1] row-end-[span_1] overflow-hidden max-md:col-start-[span_1] max-md:col-end-[span_1]" data-ditto-id="style-w-node-e038b077-fc9f-e506-f03f-2adbd7f1cd05-d7f1cc" id="w-node-e038b077-fc9f-e506-f03f-2adbd7f1cd05-d7f1ccc6">
        <div className="w-218 h-[3.5625rem] flex pr-12.5 justify-start items-center shrink-0 gap-12.5 [animation-name:marquee] [animation-duration:30s] [animation-timing-function:linear] [animation-iteration-count:infinite] [animation-fill-mode:forwards] hover:transform-[matrix(1,0,0,1,-183.977,0)] focus:transform-[matrix(1,0,0,1,-189.305,0)]">
          {logos.map((d, i) => <Logo3 key={i} d={d} styles={Logo3_styles[i]} />)}
        </div>
        <div className="h-[3.5625rem] flex pr-12.5 justify-start items-center shrink-0 gap-12.5 [animation-name:marquee] [animation-duration:30s] [animation-timing-function:linear] [animation-iteration-count:infinite] [animation-fill-mode:forwards] hover:transform-[matrix(1,0,0,1,-195.119,0)] focus:transform-[matrix(1,0,0,1,-200.447,0)]">
          {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
        </div>
        <div className="w-218 h-[3.5625rem] flex pr-12.5 justify-start items-center shrink-0 gap-12.5 [animation-name:marquee] [animation-duration:30s] [animation-timing-function:linear] [animation-iteration-count:infinite] [animation-fill-mode:forwards]">
          {tile3Data.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles[i]} />)}
        </div>
      </div>
      <div className="flex relative py-10 justify-start items-center gap-5 col-start-[span_2] col-end-[span_2] row-start-[span_1] row-end-[span_1] max-md:justify-center max-md:col-start-[span_1] max-md:col-end-[span_1]" id="w-node-e038b077-fc9f-e506-f03f-2adbd7f1cd0c-d7f1ccc6">
        <p className="block text-xs leading-4.5">
          ©PR Tilipman Digital 2026. All rights reserved.
        </p>
        <div className="w-[80.8rem] h-full border-t border-solid border-t-surface-2 block absolute top-0 -left-[50.8rem] min-w-0 pointer-events-none max-md:w-[23.4375rem] max-md:-left-5 md:max-lg:w-[775.7px] md:max-lg:left-[-488.5px] 2xl:w-[121.2rem] 2xl:-left-[91.2rem]" />
      </div>
      <div className="flex relative py-10 justify-end items-center col-start-[span_3] col-end-[span_3] row-start-[span_1] row-end-[span_1] max-md:justify-center max-md:col-start-[span_1] max-md:col-end-[span_1]" id="w-node-e038b077-fc9f-e506-f03f-2adbd7f1cd10-d7f1ccc6">
        <div className="h-full border-t border-solid border-t-surface-2 block absolute top-0 -right-140 left-0 min-w-0 pointer-events-none max-md:-right-5 max-md:-left-3.5 md:max-lg:-right-[21.075rem] 2xl:-right-300" />
        <ul className="flex flex-wrap gap-5 [list-style-type:none] list-outside" role="list">
          {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} />)}
          <li className="w-0 h-4.5 flex" />
        </ul>
      </div>
    </div>
  );
}
