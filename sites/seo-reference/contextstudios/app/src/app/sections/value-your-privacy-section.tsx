import Icon25 from "../svgs/svg-icon25";
/** Value Your Privacy section. */
export default function ValueYourPrivacySection() {
  return (
    <div className="h-[6.3125rem] border-t border-solid border-t-surface block fixed bottom-0 inset-x-0 z-80 p-4 overflow-auto bg-clr-26 shadow-[var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-10)_0px_10px_15px_-3px,var(--clr-10)_0px_4px_6px_-4px] [backdrop-filter:blur(16px)] max-h-[85vh] max-md:h-84.5 max-md:border max-md:border-surface max-md:bottom-24 max-md:mx-3 max-md:rounded-2xl max-md:border-t-[0] max-md:border-initial max-md:border-t-[initial] md:max-lg:h-[8.8125rem]" aria-label="🍪 We value your privacy" role="region">
      <div className="h-full block mx-auto max-w-6xl">
        <div className="h-full flex justify-between items-center gap-4 max-md:flex-col max-md:items-start">
          <div className="block flex-1">
            <div className="flex mb-1 flex-wrap items-center gap-2">
              <h3 className="block font-semibold" data-component="heading">
                🍪 We value your privacy
              </h3>
            </div>
            <p className="block text-muted-foreground text-sm leading-5">
              {"We use cookies to enhance your experience, analyze site traffic, and provide essential functionality. You can customize your preferences or accept all cookies. "}
              <a className="inline underline cursor-pointer hover:text-foreground focus:text-muted-foreground" data-component="link" href="/privacy">
                Privacy Policy
              </a>
              {" · "}
              <a className="inline underline cursor-pointer hover:text-foreground focus:text-muted-foreground" data-component="link" href="/cookies">
                Cookie Policy
              </a>
            </p>
          </div>
          <div className="flex flex-wrap shrink-0 gap-2 w-auto max-md:flex-col max-md:[flex-wrap:initial] max-md:shrink-[initial] max-md:w-full">
            <button className="flex py-2 px-4 rounded-lg justify-center items-center gap-1 text-sm font-medium leading-5 text-center whitespace-nowrap text-nowrap cursor-default h-10 w-auto max-md:order-[3] max-md:h-12 max-md:w-full hover:bg-color-005" data-component="button">
              <Icon25 />
              Customize
            </button>
            <button className="flex py-2 px-4 rounded-lg justify-center items-center text-sm font-medium leading-5 text-center whitespace-nowrap text-nowrap bg-color-005 shadow-[var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-10)_0px_1px_3px_0px,var(--clr-10)_0px_1px_2px_-1px] cursor-default h-10 w-auto max-md:order-[2] max-md:h-12 max-md:w-full hover:bg-clr-33" data-component="button">
              Essential Only
            </button>
            <button className="flex py-2 px-4 rounded-lg justify-center items-center text-sm font-medium leading-5 text-center whitespace-nowrap text-nowrap bg-color-005 shadow-[var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-10)_0px_1px_3px_0px,var(--clr-10)_0px_1px_2px_-1px] cursor-default h-10 w-auto max-md:order-[1] max-md:h-12 max-md:w-full hover:bg-clr-33" data-component="button">
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
