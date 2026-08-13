export type CardLinkData = {
  alt: string;
  imgSrc: string;
  title: string;
  description: string;
};
/** A linked card. */
export default function CardLink({ d }: { d: CardLinkData }) {
  return (
    <a className="grid relative mt-6 rounded-lg cursor-pointer w-full grid-cols-2 max-md:mb-6 max-md:mt-0 max-md:grid-cols-1" data-component="link" href="/p/2023-ai-year-in-review-and-predictions">
      <div className="border border-solid border-border block z-10 rounded-lg col-start-[span_1] col-end-[span_1] overflow-hidden bg-surface-2 w-full">
        <figure className="block relative overflow-hidden aspect-[1.9/1] h-full w-full">
          <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_800/421] align-middle h-full" data-component="image" alt={d.alt} height="421" src={d.imgSrc} width="800" />
        </figure>
      </div>
      <div className="block z-10 p-4 col-start-[span_1] col-end-[span_1]">
        <h2 className="overflow-hidden [font-family:'Roboto_Condensed',_ui-sans-serif,_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_'Helvetica_Neue',_Arial,_'Noto_Sans',_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] font-bold line-clamp-2" data-component="heading">
          {d.title}
        </h2>
        <p className="opacity-75 mb-2 overflow-hidden [font-family:'Roboto_Condensed',_ui-sans-serif,_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_'Helvetica_Neue',_Arial,_'Noto_Sans',_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] text-sm leading-5 line-clamp-4">
          {d.description}
        </p>
        <p className="block opacity-75 mb-4 [font-family:'Roboto_Condensed',_ui-sans-serif,_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_'Helvetica_Neue',_Arial,_'Noto_Sans',_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] text-sm leading-5 max-md:text-xs max-md:leading-4" />
      </div>
    </a>
  );
}
