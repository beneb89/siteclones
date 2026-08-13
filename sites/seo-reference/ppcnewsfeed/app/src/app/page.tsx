import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import GalleryShowcaseSection from "./sections/gallery-showcase-section";
import Footer from "./sections/footer";
import Icon from "./svgs/svg-icon";

export default function Page() {
  return (
    <>
      <div className="block relative z-9999999">
        <Icon />
        <div className="h-12 flex relative justify-center items-center bg-color-001 shadow-[var(--clr-0)_0px_0px_0px_0px] max-md:h-[4.3125rem] md:max-lg:h-[3.3125rem] 2xl:h-[3.3125rem]" id="mnpwdsha002b2rsotm1n">
          <div className="w-full h-full block relative max-w-275 max-md:max-w-[23.4375rem] md:max-lg:max-w-170 2xl:max-w-170">
            <div className="w-[63.6875rem] h-10 block absolute top-[0.8125rem] left-[17.0625rem] z-0 tracking-[2px] text-center transform-[matrix(0.4375,0,0,0.4375,0,0)] origin-[0px_0px] max-md:top-1.5 max-md:left-0 max-md:transform-[matrix(0.412124,0,0,0.412124,0,0)] max-md:[scale:0.874126] md:max-lg:top-4.5 md:max-lg:left-[4.1875rem] md:max-lg:transform-[matrix(0.430323,0,0,0.430323,0,0)] 2xl:top-4.5 2xl:left-[4.1875rem]" id="mnpwdsha00n16e90vet9">
              <p className="block text-[2rem] leading-10 [overflow-wrap:break-word]">
                <span className="inline text-border">
                  Get PPC updates your way: daily, weekly, or monthly
                </span>
              </p>
            </div>
            <div className="w-[6.7375rem] h-[40.5px] block absolute top-1 left-[44.9375rem] z-0 max-md:top-[1.6375rem] max-md:left-[140.7px] max-md:[scale:0.874126] md:max-lg:top-1.5 md:max-lg:left-[31.5625rem] 2xl:top-1.5 2xl:left-[31.5625rem]" id="mnpwdshb00wwt6czotje">
              <a className="h-full border border-solid border-color-001 flex rounded-[999px] justify-center items-center gap-2.5 bg-border shadow-[var(--border)_0px_0px_0px_0px] cursor-pointer" data-component="link" href="/newsletter/" target="_self">
                <div className="block font-medium">
                  <p className="block text-color-001 text-sm leading-5 text-center">
                    Subscribe
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="min-h-screen block" id="page">
        <div className="h-full min-h-screen flex flex-col">
          <div className="block shrink-0" />
          <Navbar />
          {" "}
          <main className="block grow shrink-0" id="main">
            <div className="block my-12">
              <div className="block max-w-305 mx-7.5 px-5 max-md:max-w-none max-md:mx-0 md:max-lg:max-w-180 md:max-lg:mx-6 2xl:max-w-430 2xl:mx-25">
                <HeroSection />
                <GalleryShowcaseSection />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      {" "}
      <div className="block z-99996" />
      {" "}
      <div className="w-0.5 h-[1.9375rem] block fixed top-0 overflow-hidden">
        <label className="inline-block mb-2 text-xs font-semibold leading-4.5 cursor-default" htmlFor="focus_retriever">
          {" "}
        </label>
      </div>
      <iframe className="w-1 h-1 border-2 border-inset border-foreground block absolute -top-[624.9375rem] overflow-clip" aria-hidden="true" role="presentation" title="Blank" />
      <div className="block" />
      <div className="block" />
      <div className="block" />
      <div className="block" />
      <div className="block" />
    </>
  );
}
