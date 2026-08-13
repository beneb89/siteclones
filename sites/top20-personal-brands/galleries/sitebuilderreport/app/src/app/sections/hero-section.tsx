import Icon2 from "../svgs/svg-icon2";
/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <div className="box-content w-288 block max-w-400 mx-16 text-left max-md:w-[337.5px] max-md:mx-[1.175rem] md:max-lg:w-[43.2rem] md:max-lg:mx-[2.4rem] 2xl:w-400 2xl:mx-40">
      <div className="box-content h-[2.8125rem] min-h-[2.8125rem] flex relative pt-[0.3125rem] pb-[0.9375rem] justify-between items-center bg-background">
        <a className="box-content flex items-center text-[0.8125rem] leading-[0.9375rem] cursor-pointer max-lg:hidden" data-component="link" href="/inspiration">
          {" "}
          <Icon2 />
          {" Website Examples "}
        </a>
        {" "}
        <p className="box-content w-102.5 block text-[0.8125rem] leading-[1.3125rem] max-md:w-[337.5px] max-lg:text-center md:max-lg:w-[43.2rem]">
          {" Our work is supported by affiliate commissions. "}
          <a className="box-content border-b border-dotted border-b-color-001 inline pb-0.5 text-color-001 cursor-pointer" data-component="link" href="/about">
            Learn More
          </a>
          {" "}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
