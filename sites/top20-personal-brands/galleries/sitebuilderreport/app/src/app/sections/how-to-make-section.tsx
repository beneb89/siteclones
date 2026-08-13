import Icon3 from "../svgs/svg-icon3";
/** How To Make section. */
export default function HowToMakeSection() {
  return (
    <div className="box-content w-288 block max-w-400 mx-16 text-left max-md:w-[337.5px] max-md:mx-[1.175rem] md:max-lg:w-[43.2rem] md:max-lg:mx-[2.4rem] 2xl:w-400 2xl:mx-40">
      <div className="box-content border border-solid border-border grid mb-7.5 pt-7.5 px-22.5 rounded-[3px] gap-7.5 overflow-hidden text-center grid-cols-2 max-lg:flex max-lg:px-7.5 max-lg:flex-col-reverse max-lg:gap-2.5 max-lg:grid-cols-[1fr_1fr]">
        <img className="box-content w-117.5 h-46 block overflow-clip max-md:w-69 max-md:h-27 md:max-lg:w-[39.3125rem] md:max-lg:h-61.5 2xl:w-173.5 2xl:h-68" data-component="image" src="/assets/cloned/images/1ae7f979ad68.png" />
        {" "}
        <div className="box-content block p-3 justify-center self-center max-md:p-[6.9px] md:max-lg:p-[15.7px] 2xl:p-[17.3px]">
          <a className="box-content block text-color-001 cursor-pointer" data-component="link" href="/how-to-make-a-website">
            {" "}
            <h3 className="box-content block text-[1.625rem] font-bold leading-[1.9375rem] max-lg:text-[1.3125rem] max-lg:leading-[1.5625rem]" data-component="heading">
              How to Make a Website
            </h3>
            {" "}
            <p className="box-content block my-[0.9375rem] font-light leading-[1.4375rem] text-balance max-lg:text-[0.9375rem] max-lg:leading-[1.25rem]">
              Anyone can create their own website with this step-by-step article for beginners.
            </p>
            {" "}
            <div className="h-8 inline-flex py-1.5 px-3 rounded-[3px] items-center gap-[0.1875rem] text-primary [font-family:Arial] font-semibold bg-clr-6" data-component="button">
              {" Read Now "}
              <Icon3 />
              {" "}
            </div>
            {" "}
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
