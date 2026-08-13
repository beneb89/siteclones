import { ctaSection2Content } from "../content";
/** Cta section. */
export default function CtaSection2({ content = ctaSection2Content } = {}) {
  return (
    <section className="block py-18 bg-background [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] max-md:py-12" style={{ backgroundImage: "linear-gradient(132.92deg, var(--clr-11) 9.56%, var(--clr-12) 55.33%, var(--clr-13) 101.11%), none" }}>
      <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <div className="grid items-center gap-12 grid-cols-2 max-lg:text-center max-lg:grid-cols-1">
          <div className="block">
            <h2 className="block mb-6 text-color-001 text-3xl font-extrabold leading-[2.4375rem] tracking-[-0.6px] max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.4px] md:max-lg:text-[1.6875rem] md:max-lg:leading-[2.1875rem] md:max-lg:tracking-[-0.54px]" data-component="heading">
              {content.title}
            </h2>
            {" "}
            <a className="h-[3.15rem] inline-flex relative z-1 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-background text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer hover:bg-clr-20 hover:shadow-[var(--clr-21)_0px_6.69848px_16.7462px_0px] hover:transform-[matrix(1,0,0,1,0,-1.67462)] focus:bg-clr-33 focus:shadow-[var(--clr-34)_0px_0.731998px_1.83px_0px] focus:transform-[matrix(1,0,0,1,0,-0.183)]" data-ditto-id="style-button-8" data-component="button" href={content.actions[0].href} rel="nofollow noopener" target="_blank">
              {content.actions[0].label}
            </a>
            {" "}
          </div>
          {" "}
          <div className="flex justify-end items-center max-lg:order-[-1]">
            <img className="w-56 h-47 block max-w-56 overflow-clip aspect-[auto_401/337] align-middle max-md:w-40 max-md:h-33.5 max-md:max-w-40" data-component="image" alt="dfs discord" height="337" sizes="auto, (max-width: 401px) 100vw, 401px" src="/assets/cloned/images/d3db94e35fdf.webp" srcSet="/assets/cloned/images/d3db94e35fdf.webp 401w, /assets/cloned/images/a3829a35c63d.webp 300w" title="DataForSEO Model Context Protocol 22" width="401" />
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
