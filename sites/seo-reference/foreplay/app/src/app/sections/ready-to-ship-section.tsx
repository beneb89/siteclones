import Icon17 from "../svgs/svg-icon17";
/** Ready To Ship section. */
export default function ReadyToShipSection() {
  return (
    <div className="block overflow-hidden">
      <div className="block max-w-304 mx-auto px-10 max-md:px-6 md:max-lg:px-8">
        <div className="flex pt-27 flex-col justify-start items-center gap-9 max-md:pt-20 max-md:items-stretch">
          <div className="w-full flex relative z-2 max-w-240 mx-auto flex-col justify-start items-center gap-3 text-center">
            <div className="block text-color-002 text-balance">
              <h2 className="block [font-family:'Inter_Display',_Arial,_sans-serif] text-[2.75rem] font-semibold leading-[3.375rem] tracking-[-0.33px] max-md:text-4xl max-md:leading-12 max-md:tracking-[-0.27px] md:max-lg:text-[2.5rem] md:max-lg:leading-13 md:max-lg:tracking-[-0.3px]" data-component="heading">
                Ready to ship more winning ads?
              </h2>
            </div>
            <div className="block max-w-160 text-balance">
              <div className="block flex-1 text-color-001">
                <p className="block text-lg leading-7 tracking-[-0.26px]">
                  Unlock the power of Foreplay with an unrestricted 7-Day free trial.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative z-2 justify-start items-center gap-3 max-md:grid max-md:self-stretch max-md:grid-cols-[327px] max-md:[grid-auto-columns:1fr]">
            <a className="h-10 flex relative z-5 max-w-full p-2 rounded-[10px] justify-center items-center flex-1 text-color-005 font-semibold bg-color-002 cursor-pointer hover:bg-color-003 focus:shadow-[var(--background)_0px_0px_0px_2px,var(--color-002)_0px_0px_0px_3px]" data-component="link" href="https://app.foreplay.co/sign-up">
              <div className="block relative z-2 px-1.5">
                <div className="block [font-weight:550] whitespace-nowrap">
                  Start free trial
                </div>
              </div>
              <div className="flex relative z-2 -ml-1 justify-center items-center">
                <div className="w-6 h-6 flex justify-center items-center">
                  <div className="flex justify-center items-center before:content-['_'] before:table before:w-0 before:h-0 before:text-color-005 before:text-base before:font-semibold before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-005 after:text-base after:font-semibold after:leading-6 after:tracking-[-0.18px]">
                    <Icon17 />
                  </div>
                </div>
              </div>
            </a>
            <a className="h-10 flex relative z-5 max-w-full p-2 rounded-[10px] justify-center items-center text-color-002 font-semibold bg-surface cursor-pointer hover:bg-border focus:shadow-[var(--background)_0px_0px_0px_2px,var(--color-002)_0px_0px_0px_3px]" data-component="link" href="/pricing">
              <div className="block relative z-2 px-1.5">
                <div className="block [font-weight:550] whitespace-nowrap">
                  View Pricing
                </div>
              </div>
            </a>
          </div>
          <div className="block my-[-90.9px] -mx-10 max-md:-mb-[4.0875rem] max-md:-mx-16 max-md:mt-0 md:max-lg:my-[-56.3px]">
            <img className="w-360 h-231 block overflow-clip aspect-[auto_1440/924] align-middle max-md:w-[28.4375rem] max-md:h-73 md:max-lg:w-192 md:max-lg:h-123" data-component="image" alt="Two people looking at laptop, Foreplay dashboard is displayed." height="924" sizes="(max-width: 1439px) 100vw, 1440px" src="/assets/cloned/images/25aa02d23ca1.webp" srcSet="/assets/cloned/images/743fc5ea249d.webp 500w, /assets/cloned/images/8c8f17cfec25.webp 800w, /assets/cloned/images/baab52c08e55.webp 1080w, /assets/cloned/images/f26bc0bd4685.webp 1600w, /assets/cloned/images/3a9a92a703c9.webp 2000w, /assets/cloned/images/a5dfc2b53d56.webp 2600w, /assets/cloned/images/25aa02d23ca1.webp 2880w" width="1440" />
          </div>
        </div>
      </div>
    </div>
  );
}
