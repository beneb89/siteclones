import { ctaSection2Content } from "../content";
/** Cta section. */
export default function CtaSection2({ content = ctaSection2Content } = {}) {
  return (
    <section className="h-120 grid relative z-1 -my-px rounded-tl-[48px] rounded-tr-[48px] gap-y-16 overflow-hidden text-background bg-clr-17 grid-cols-1 max-md:h-[43.4375rem] max-lg:pb-8 max-lg:gap-y-10 md:max-lg:h-[889.9px] 2xl:h-150">
      <div className="flex flex-row-reverse gap-y-16 max-lg:flex-col-reverse max-lg:gap-y-10">
        <div className="w-160 h-120 min-h-120 flex py-20 gap-x-6 grid-cols-8 mx-auto max-md:w-[21.4375rem] max-md:h-[21.775rem] max-lg:grid max-lg:gap-x-4 max-lg:grid-cols-[repeat(auto-fit,_minmax(73px,_1fr))] max-lg:min-h-0 max-lg:py-0 md:max-lg:w-177 md:max-lg:h-[15.9625rem] 2xl:w-240 2xl:h-150 2xl:min-h-150 2xl:max-w-355">
          <div className="box-content flex max-w-150 px-22.5 flex-col self-center gap-y-6 col-start-[span_8] col-end-[span_8] mx-auto max-lg:gap-y-4 max-md:col-start-1 max-md:col-end-[span_4] max-lg:px-0">
            <div className="flex flex-col">
              <div className="block">
                <h2 className="block text-[2.75rem] [font-weight:330] leading-[3rem] tracking-[-0.44px] text-balance max-lg:text-3xl max-lg:leading-[2.125rem] max-lg:tracking-[inherit]" data-component="heading">
                  {content.title}
                </h2>
                <div className="block pt-2 text-color-005 text-lg leading-[1.5625rem] max-lg:[font-weight:420] max-lg:leading-[1.375rem] max-lg:tracking-[-0.1px] max-lg:[font-size:inherit]">
                  Join millions of self-starters in getting business resources, tips, and inspiring stories in your inbox.
                </div>
              </div>
              <div className="block max-w-full pt-6 max-lg:pt-4">
                <div className="flex flex-col gap-6 max-lg:gap-4">
                  <form className="block" id=":R9h5n5H1:">
                    <div className="flex flex-col">
                      <div className="flex relative rounded-full justify-between items-start bg-clr-18 shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-18)_0px_0px_0px_1px_inset,var(--clr-0)_0px_0px_0px_0px] w-full max-lg:rounded-lg">
                        <input className="w-full h-14 block min-w-0 pt-6 pb-2 px-6 flex-1 overflow-clip cursor-text max-lg:px-4" data-component="input" id=":R9h5n5:" name="email" placeholder=" " type="email" />
                        <label className="w-[4.9375rem] h-6 absolute top-8 left-6 z-10 min-w-0 overflow-hidden [translate:0px_-16px] cursor-default pointer-events-none line-clamp-1 max-lg:left-4 hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" htmlFor=":R9h5n5:">
                          Enter email
                        </label>
                        <div className="contents min-w-0 max-lg:hidden">
                          <button className="w-31 h-12 border-2 border-solid border-primary block my-1 mr-1 py-2.5 px-5 rounded-full self-center overflow-hidden text-foreground [font-weight:550] text-center whitespace-nowrap text-nowrap bg-primary cursor-pointer max-w-full" data-component="button" aria-disabled="false" type="submit">
                            Subscribe
                          </button>
                        </div>
                      </div>
                      <div className="hidden min-w-0">
                        <button className="border-2 border-solid border-primary block my-1 mr-1 py-2.5 px-5 rounded-full self-center overflow-hidden text-foreground [font-weight:550] text-center whitespace-nowrap text-nowrap bg-primary cursor-pointer max-w-full w-full max-lg:h-11 max-lg:mt-2 max-lg:py-2 max-lg:mr-0 max-lg:mb-0" aria-disabled="false" type="submit">
                          Subscribe
                        </button>
                      </div>
                    </div>
                    <input className="w-px h-px block absolute -m-px overflow-clip whitespace-nowrap text-nowrap [clip-path:inset(50%)] cursor-text" data-component="input" aria-hidden="true" id=":R7ph5n5:" name="address" />
                    <p className="block max-w-full pt-4 text-color-005 text-sm [font-weight:420] leading-[1.125rem] max-lg:pt-2">
                      {"Unsubscribe anytime. By entering your email, you agree to receive marketing emails from Shopify. By proceeding, you agree to the "}
                      <a className="inline [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href={content.actions[0].href} target="_blank">
                        {content.actions[0].label}
                      </a>
                      {" and "}
                      <a className="inline [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href={content.actions[1].href} target="_blank">
                        {content.actions[1].label}
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-160 h-120 min-h-full block overflow-hidden max-md:w-[23.4375rem] max-md:h-[17.1625rem] max-lg:min-h-0 max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] md:max-lg:w-192 md:max-lg:h-[562.5px] 2xl:w-240 2xl:h-150">
          <picture className="inline">
            <img className="w-full block max-w-full overflow-clip object-cover align-middle h-full" data-component="image" alt="Subscription banner" src="/assets/cloned/images/09e978ab06d2.png" />
          </picture>
        </div>
      </div>
    </section>
  );
}
