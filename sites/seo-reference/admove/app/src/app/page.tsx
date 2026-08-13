import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import KeyTakeawaysSection from "./sections/key-takeaways-section";
import LogoCloudSection from "./sections/logo-cloud-section";
import Icon2 from "./svgs/svg-icon2";
import Illustration3 from "./svgs/svg-illustration3";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import Icon6 from "./svgs/svg-icon6";
import Icon7 from "./svgs/svg-icon7";
import Icon8 from "./svgs/svg-icon8";
import Icon9 from "./svgs/svg-icon9";
import Icon10 from "./svgs/svg-icon10";
import Icon11 from "./svgs/svg-icon11";

export default function Page() {
  return (
    <>
      <div className="block" id="main">
        <div className="h-[12622.9px] min-h-screen flex relative flex-col justify-start items-center content-center gap-6 bg-background max-md:h-[1145.0125rem] max-lg:gap-5 md:max-lg:h-[12367.5px] 2xl:h-[903.6875rem]">
          <Navbar />
          <div className="w-0 h-0 block relative z-3 shrink-0">
            <div className="w-320 h-1.5 block fixed top-0 left-0 z-9999 pointer-events-none max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-480" />
          </div>
          <div className="w-full max-w-330 flex relative px-8 flex-col justify-start items-center content-center shrink-0 gap-14 max-lg:px-5 max-lg:gap-8 2xl:pb-12 2xl:px-0">
            <HeroSection />
            <KeyTakeawaysSection />
          </div>
          <LogoCloudSection />
        </div>
        <div className="block" id="overlay" />
      </div>
      {" "}
      <div className="w-0 h-0 block absolute top-200 left-0 z-0 overflow-hidden" aria-hidden="true" id="svg-templates">
        <Icon2 />
        {" "}
        <Illustration3 />
        {" "}
        <Icon3 />
        {" "}
        <Icon4 />
        {" "}
        <Icon5 />
        {" "}
        <Icon6 />
        {" "}
        <Icon7 />
        {" "}
        <Icon8 />
        {" "}
        <Icon9 />
        {" "}
        <Icon10 />
        {" "}
        <Icon11 />
        {" "}
      </div>
      {" "}
    </>
  );
}
