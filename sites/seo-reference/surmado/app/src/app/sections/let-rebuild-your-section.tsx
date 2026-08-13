import Tile4, { type Tile4Data } from "../components/tile4";
import Tile5, { type Tile5Data } from "../components/tile5";
import Tile6, { type Tile6Data } from "../components/tile6";
import { Tile5_meta, Tile6_meta } from "../ditto-meta";
import { Tile5_styles, Tile6_styles } from "../_styles";
const Tile4_data: Tile4Data[] = [
    { htmlFor: "blog-cta-site-feeling-hate", id: "blog-cta-site-feeling-hate", value: "hate-it", text: "Hate It" },
    { htmlFor: "blog-cta-site-feeling-like", id: "blog-cta-site-feeling-like", value: "like-it", text: "Like It" },
    { htmlFor: "blog-cta-site-feeling-love", id: "blog-cta-site-feeling-love", value: "love-it", text: "Love It" }
];
const Tile5_data: Tile5Data[] = [
    { htmlFor: "blog-cta-name", text: "Full name", id: "blog-cta-name", name: "name", placeholder: "Full name (optional)", type: "text" },
    { htmlFor: "blog-cta-email", text: "Your email address", id: "blog-cta-email", name: "email", placeholder: "you@yourbusiness.com", type: "email", ariadescribedby: "blog-cta-micro" },
    { htmlFor: "blog-cta-phone", text: "Phone (optional)", id: "blog-cta-phone", name: "phone", placeholder: "(555) 123-4567", type: "tel" }
];
const Tile6_data: Tile6Data[] = [
    { htmlFor: "blog-cta-story", text: "Where does your story live today?", id: "blog-cta-story", name: "story_lives", placeholder: "Instagram, Yelp, Google, YouTube…", type: "text" },
    { htmlFor: "blog-cta-say", text: "What should the site say? (optional)", id: "blog-cta-say", name: "site_should_say", placeholder: "A sentence or two is plenty", type: "text" },
    { htmlFor: "blog-cta-email-nosite", text: "Your email address", id: "blog-cta-email-nosite", name: "email", placeholder: "you@yourbusiness.com", type: "email" },
    { htmlFor: "blog-cta-name-nosite", text: "Full name", id: "blog-cta-name-nosite", name: "name", placeholder: "Full name (optional)", type: "text" },
    { htmlFor: "blog-cta-phone-nosite", text: "Phone (optional)", id: "blog-cta-phone-nosite", name: "phone", placeholder: "(555) 123-4567", type: "tel" }
];
/** Let Rebuild Your section. */
export default function LetRebuildYourSection({ tile4Data = Tile4_data, tile5Data = Tile5_data, tile6Data = Tile6_data } = {}) {
  return (
    <section className="block py-10 bg-surface-2 max-lg:py-8">
      <div className="block max-w-200 mx-auto px-10 text-center max-md:px-4 md:max-lg:px-5">
        <h2 className="block mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-[2.8125rem] [font-weight:1000] leading-[2.8125rem] tracking-[-1.12px] uppercase [overflow-wrap:break-word] max-md:text-[1.4375rem] max-md:leading-[1.4375rem] max-md:tracking-[-0.56px] max-md:[word-break:break-word] md:max-lg:text-[2.375rem] md:max-lg:leading-[2.375rem] md:max-lg:tracking-[-0.96px]" data-component="heading">
          Let’s Rebuild Your Website
        </h2>
        <p className="block mb-6 text-color-009">
          Get a free rebuild to approve before your domain moves.
        </p>
        <sites-invite-form class="inline">
          <form className="block max-w-160 mx-auto" name="surmado-sites-invite">
            <div className="block 2xl:hidden">
              <div className="grid items-end gap-4 grid-cols-[repeat(auto-fit,_minmax(311px,_1fr))] max-md:[align-items:initial]">
                <div className="flex flex-col gap-2 col-span-full text-left max-md:[grid-column-start:initial] max-md:[grid-column-end:initial]">
                  <div className="flex justify-between items-baseline gap-4">
                    <label className="block text-sm font-semibold leading-[1.5rem] cursor-default" htmlFor="blog-cta-website">
                      Your website
                    </label>
                    <button className="block opacity-90 text-sm leading-[1.5rem] text-center underline cursor-pointer hover:opacity-100" data-ditto-id="interaction-button" data-component="button" aria-controls="blog-cta-no-site-fields" aria-expanded="false" type="button">
                      Don’t have a website yet?
                    </button>
                  </div>
                  <input className="w-full h-14.5 min-h-12 border-2 border-solid border-border block py-4 px-6 rounded-md overflow-clip font-normal leading-5.5 text-start bg-background cursor-text focus:border-clr-23 focus:shadow-[var(--clr-6)_0px_0px_0px_3px] focus:outline-color-005 focus:[outline-style:solid] focus:outline-[3px]" data-ditto-id="style-blog-cta-website" data-component="input" id="blog-cta-website" name="website" pattern="[^ ]+[.][^ ]+" placeholder="yourwebsite.com" title="Enter your website, like yourwebsite.com" type="text" />
                </div>
                <fieldset className="flex min-w-[min-content] flex-col gap-2 col-span-full text-left max-md:[grid-column-start:initial] max-md:[grid-column-end:initial]">
                  <legend className="block text-sm font-semibold leading-[1.5rem]">
                    How do you feel about your current site?
                  </legend>
                  <div className="grid gap-2 grid-cols-3">
                    {tile4Data.map((d, i) => <Tile4 key={i} d={d} />)}
                  </div>
                </fieldset>
                {tile5Data.map((d, i) => <Tile5 key={i} d={d} meta={Tile5_meta[i]} styles={Tile5_styles[i]} />)}
                <button className="h-19 min-h-12 border-[3px] border-solid border-foreground block relative isolate min-w-12 py-6 px-12 rounded-2xl col-span-full overflow-hidden text-clr-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] font-bold leading-5.5 tracking-[1px] uppercase whitespace-nowrap text-nowrap bg-clr-4 shadow-[var(--clr-5)_0px_4px_15px_0px] cursor-pointer max-lg:h-15 max-lg:max-w-full max-lg:py-4 max-lg:px-6 max-lg:[overflow-wrap:break-word] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] hover:bg-clr-14 hover:shadow-[var(--clr-15)_0px_7.10322px_26.6371px_0px] hover:transform-[matrix(1,0,0,1,0,-1.55161)] focus:bg-clr-24 focus:shadow-[var(--clr-5)_0px_4.27078px_16.0154px_0px] focus:transform-[matrix(1,0,0,1,0,-0.135392)]" data-component="button" type="submit">
                  Rebuild My Site (Free)
                </button>
              </div>
            </div>
            <div className="hidden 2xl:block" data-ditto-id="interaction-blog-cta-no-site-fields" id="blog-cta-no-site-fields">
              <div className="grid items-end gap-4 grid-cols-[1fr_1fr] 2xl:grid-cols-[312px_312px]">
                <div className="flex min-w-0 flex-col gap-2 col-span-full text-left">
                  <div className="flex min-w-0 justify-between items-baseline gap-4">
                    <label className="block min-w-0 text-sm font-semibold leading-[1.5rem] cursor-default" htmlFor="blog-cta-business">
                      Business name
                    </label>
                    <button className="block opacity-90 min-w-0 text-sm leading-[1.5rem] text-center underline cursor-pointer" aria-controls="blog-cta-no-site-fields" aria-expanded="false" type="button">
                      I have a website
                    </button>
                  </div>
                  <input className="w-full min-h-12 border-2 border-solid border-border block min-w-0 py-4 px-6 rounded-md overflow-clip font-normal leading-5.5 text-start bg-background cursor-default 2xl:h-14.5 2xl:border-clr-4 2xl:shadow-[var(--clr-6)_0px_0px_0px_3px] 2xl:cursor-text" data-ditto-id="style-blog-cta-business" disabled id="blog-cta-business" name="business_name" placeholder="Your business" type="text" />
                </div>
                {tile6Data.map((d, i) => <Tile6 key={i} d={d} meta={Tile6_meta[i]} styles={Tile6_styles[i]} />)}
                <button className="min-h-12 border-[3px] border-solid border-foreground block relative isolate min-w-12 py-6 px-12 rounded-2xl col-span-full overflow-hidden text-clr-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] font-bold leading-5.5 tracking-[1px] uppercase whitespace-nowrap text-nowrap bg-clr-4 shadow-[var(--clr-5)_0px_4px_15px_0px] cursor-pointer 2xl:h-19" type="submit">
                  Rebuild My Site (Free)
                </button>
              </div>
            </div>
            <p className="block opacity-90 my-4 text-sm leading-[1.3125rem] text-left" id="blog-cta-micro">
              Free preview. Most rebuilds are ready within 24 hours. Pay only after you approve it.
            </p>
          </form>
        </sites-invite-form>
        <p className="block my-6 text-color-009">
          <a className="inline text-color-007 underline cursor-pointer hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" href="/pricing">
            View All Plans
          </a>
        </p>
      </div>
    </section>
  );
}
