import { ctaSectionContent } from "../content";
/** Cta section. */
export default function CtaSection({ content = ctaSectionContent } = {}) {
  return (
    <section className="block py-12 bg-background [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] max-lg:py-8" style={{ backgroundImage: "linear-gradient(132.92deg, var(--clr-11) 9.56%, var(--clr-12) 55.33%, var(--clr-13) 101.11%), none" }}>
      <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <div className="flex justify-between items-center gap-8 max-md:flex-col max-md:text-center">
          <div className="flex max-w-140 flex-col gap-1 max-md:items-center">
            <h2 className="block text-color-001 text-2xl font-bold leading-[1.8125rem] whitespace-nowrap max-md:text-lg max-md:leading-[1.375rem] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.75rem]" data-component="heading">
              {content.title}
            </h2>
            {" "}
          </div>
          {" "}
          <div className="flex max-w-140 flex-col gap-1 max-md:items-center">
            <a className="h-[3.15rem] flex relative z-1 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-color-009 text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer whitespace-nowrap hover:bg-clr-20 hover:shadow-[var(--clr-21)_0px_6.699px_16.7475px_0px] hover:transform-[matrix(1,0,0,1,0,-1.67475)] focus:bg-clr-33 focus:shadow-[var(--clr-34)_0px_0.732284px_1.83071px_0px] focus:transform-[matrix(1,0,0,1,0,-0.183071)]" data-ditto-id="style-button-7" data-component="button" href={content.actions[0].href}>
              {content.actions[0].label}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
