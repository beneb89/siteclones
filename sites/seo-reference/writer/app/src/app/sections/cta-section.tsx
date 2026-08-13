import { ctaSectionContent } from "../content";
/** Cta section. */
export default function CtaSection({ content = ctaSectionContent } = {}) {
  return (
    <section className="block" id="block-15">
      <div className="block py-45 bg-clr-3 max-md:py-[55.5px] md:max-lg:py-27">
        <div className="block max-w-270 mx-25 px-[0.9375rem] text-center max-md:px-5 max-md:max-w-none max-md:mx-0 md:max-lg:max-w-162.5 md:max-lg:mx-[3.6875rem] 2xl:mx-105">
          <h2 className="block [font-family:'Formula_Condensed'] text-[3.375rem] font-light leading-15 max-md:text-[2.4375rem] max-md:leading-[2.75rem] md:max-lg:text-[3.125rem] md:max-lg:leading-14" data-component="heading">
            {"Monthly dispatches on the AI revolution. "}
            <br className="inline max-lg:hidden" />
            {content.title}
          </h2>
          {" "}
          <div className="block">
            <div className="block" id="hbspt-form-1786580341000-7618663360">
              <form className="w-[32.1875rem] flex max-w-full mt-7.5 mx-auto flex-wrap justify-between items-stretch text-left max-md:w-[20.9375rem] max-md:mx-0" id="hsForm_8ea19a99-72a4-493d-929e-7423326f4acd" target="target_iframe_8ea19a99-72a4-493d-929e-7423326f4acd">
                <div className="w-[25.4375rem] block relative mb-[0.8125rem] order-[1] max-md:w-[20.9375rem] max-md:mb-0">
                  <label className="block mb-1 [font-family:Poppins,_sans-serif] text-[0.625rem] leading-[0.9375rem] tracking-[1.3px] uppercase cursor-default" htmlFor="email-8ea19a99-72a4-493d-929e-7423326f4acd" id="label-email-8ea19a99-72a4-493d-929e-7423326f4acd" />
                  <div className="block">
                    <input className="w-full h-15 border-b border-solid border-b-foreground block py-[0.3125rem] overflow-clip text-muted [font-family:Poppins,_sans-serif] text-xl leading-[1.4375rem] text-start cursor-text max-md:py-1 max-md:text-base max-md:leading-[1.125rem]" data-ditto-id="style-email-8ea19a99-72a4-493d-929e-7423326f4acd" data-component="input" id="email-8ea19a99-72a4-493d-929e-7423326f4acd" name="email" placeholder="Add your email*" type="email" value="" />
                  </div>
                </div>
                <div className="block pt-[0.4375rem] order-[3]">
                  <div className="block [word-break:break-word]">
                    <p className="block relative my-[0.6875rem] text-color-002 [font-family:Poppins,_sans-serif] text-[0.6875rem] leading-4.5">
                      <em className="inline text-muted-foreground text-[0.8125rem] italic">
                        {"By completing and submitting this form, you agree that WRITER may email or call you with product updates, educational resources, and other promotional information. To learn more about how WRITER uses your information, see our "}
                        <u className="inline underline">
                          <a className="inline cursor-pointer" data-component="link" href={content.actions[0].href} rel="nofollow noopener noreferrer" target="_blank">
                            {content.actions[0].label}
                          </a>
                        </u>
                        .
                      </em>
                    </p>
                  </div>
                </div>
                <div className="w-25 block order-[2] max-md:w-[20.9375rem]">
                  <div className="block">
                    <input className="w-full h-15 border-2 border-solid border-foreground flex relative max-w-full py-3 px-2.5 rounded-[82px] justify-center items-center overflow-clip align-middle text-background [font-family:Poppins,_sans-serif] text-lg font-semibold leading-4.5 text-center whitespace-nowrap text-nowrap bg-foreground cursor-pointer max-md:mt-5 hover:bg-clr-7 hover:border-clr-7" data-component="button" type="submit" value="→" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {" "}
        </div>
        {" "}
      </div>
    </section>
  );
}
