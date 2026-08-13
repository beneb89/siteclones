export type MediaCardData = {
  alt: string;
  imgSrc: string;
  dateTime: string;
  date: string;
  label: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="border border-solid border-border flex rounded-lg flex-col overflow-hidden bg-background cursor-pointer h-full">
      <div className="block relative w-full">
        <a className="inline" data-component="link" href="/p/2023-ai-year-in-review-and-predictions">
          <div className="block w-full">
            <figure className="block relative overflow-hidden aspect-[1.9/1] h-full w-full">
              <img className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_800/421] align-middle h-full" data-component="image" alt={d.alt} height="421" src={d.imgSrc} width="800" />
            </figure>
          </div>
        </a>
      </div>
      <div className="block p-3 w-full">
        <div className="block">
          <a className="inline" data-component="link" href="/p/2023-ai-year-in-review-and-predictions">
            <div className="block">
              <div className="flex flex-wrap-reverse justify-between items-center">
                <div className="flex items-center">
                  <span className="block text-muted-foreground [font-family:'Roboto_Condensed',_sans-ui-sans-serif,_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_'Helvetica_Neue',_Arial,_'Noto_Sans',_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] text-xs font-light leading-4">
                    <time className="inline" dateTime={d.dateTime}>
                      {d.date}
                    </time>
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center text-muted-foreground [font-family:Ariel,_sans-serif] text-sm leading-5">
                    <svg className="block overflow-hidden align-middle h-4 w-4" data-component="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-slot="icon">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                    <span className="block ml-0.5 text-xs font-bold leading-4">
                      {d.label}
                    </span>
                  </span>
                </div>
              </div>
              <div className="block mt-2">
                <h2 className="overflow-hidden text-foreground [font-family:'Roboto_Condensed',_sans-ui-sans-serif,_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_'Helvetica_Neue',_Arial,_'Noto_Sans',_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] text-xl font-semibold leading-7 line-clamp-3 max-md:text-[1.125rem] max-md:line-clamp-2" data-component="heading">
                  {d.title}
                </h2>
                <p className="mt-1 overflow-hidden text-foreground [font-family:Roboto,_sans-ui-sans-serif,_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_'Helvetica_Neue',_Arial,_'Noto_Sans',_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] font-light line-clamp-3 max-md:line-clamp-2">
                  {d.description}
                </p>
              </div>
            </div>
          </a>
          <a className="flex mt-3 items-center max-md:flex-col max-md:items-start" data-component="link" href="/authors" />
        </div>
      </div>
    </div>
  );
}
