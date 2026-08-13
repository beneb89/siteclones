import Logo from "../components/logo";
import Icon3 from "../svgs/svg-icon3";
import Logo2 from "../components/logo2";
import { Logo_styles, Logo2_styles } from "../_styles";
import { logos as logosContent, logos2 as logos2Content } from "../content";
/** Logo Cloud section. */
export default function LogoCloudSection({ logos = logosContent, logos2 = logos2Content } = {}) {
  return (
    <div className="box-content w-288 block max-w-400 mx-16 text-left max-md:w-[337.5px] max-md:mx-[1.175rem] md:max-lg:w-[43.2rem] md:max-lg:mx-[2.4rem] 2xl:w-400 2xl:mx-40">
      <div className="box-content border border-solid border-border grid mb-7.5 p-[1.8rem] rounded-[3px] gap-15 text-center grid-cols-[1fr_1.5fr_1fr] max-lg:block max-md:py-[16.9px] max-md:px-[0.525rem] max-lg:grid-cols-[1fr_1.3fr_1fr] md:max-lg:py-[34.5px] md:max-lg:px-[17.3px] 2xl:p-10">
        <div className="box-content flex flex-wrap justify-between content-center gap-[0.3125rem] max-lg:max-w-50 max-lg:mb-5 max-md:mx-[59.3px] md:max-lg:mx-[227.3px]">
          {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
          {" "}
        </div>
        {" "}
        <div className="box-content block max-lg:max-w-150 md:max-lg:mx-[27.3px]">
          <a className="box-content block text-color-001 cursor-pointer" data-component="link" href="/">
            {" "}
            <h3 className="box-content block text-[1.625rem] font-bold leading-[1.9375rem] max-lg:text-[1.3125rem] max-lg:leading-[1.5625rem]" data-component="heading">
              Best Website Builder
            </h3>
            {" "}
            <p className="box-content block my-[0.9375rem] font-light leading-[1.4375rem] text-balance max-lg:text-[0.9375rem] max-lg:leading-[1.25rem]">
              I test every website builder so you don’t have to. These are my rankings of the best website builders for 2026.
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
        <div className="box-content flex flex-wrap justify-between content-center gap-[0.3125rem] max-lg:hidden">
          {logos2.map((d, i) => <Logo2 key={i} d={d} styles={Logo2_styles[i]} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
