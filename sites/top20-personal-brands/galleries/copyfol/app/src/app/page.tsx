import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import MoreArticlesLikeSection from "./sections/more-articles-like-section";
import Footer from "./sections/footer";
import Icon from "./svgs/svg-icon";
import Icon2 from "./svgs/svg-icon2";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";

export default function Page() {
  return (
    <>
      <main className="block" id="mobileNavMain">
        <button className="flex fixed right-8 bottom-8 z-20 rounded-full justify-center items-center text-center bg-color-004 shadow-[var(--color-004)_0px_0px_0px_0px,var(--border)_0px_0px_0px_1px,var(--clr-0)_0px_0px_0px_0px] transform-[matrix(1,0,0,1,0,100)] cursor-pointer h-11 w-11 max-md:right-4 max-lg:bottom-18 hover:shadow-[var(--color-004)_0px_0px_0px_0px,var(--color-001)_0px_0px_0px_2px,var(--clr-0)_0px_0px_0px_0px]" type="button">
          <Icon />
        </button>
        <div className="border-t border-solid border-t-border hidden fixed bottom-0 z-30 bg-color-004 max-lg:h-[3.5625rem] max-lg:block max-lg:inset-x-0">
          <div className="grid max-w-360 mx-auto w-full grid-cols-8">
            <div className="block min-w-0 col-start-[span_10] col-end-[span_10] max-md:col-span-full md:max-lg:col-start-2 md:max-lg:col-end-[span_6]">
              <div className="block">
                <div className="flex py-4 px-6 justify-between items-center cursor-pointer max-md:px-4" aria-hidden="true">
                  <h4 className="block min-w-0 text-color-001 [font-weight:650]">
                    Table of contents
                  </h4>
                  <Icon2 />
                </div>
                <div className="h-0 block overflow-hidden">
                  <div className="block py-4 px-6 max-md:px-4">
                    <div className="flex mb-4 text-muted-foreground text-sm leading-[1.3125rem]">
                      <div className="block min-w-0 mr-2">
                        <div className="block mt-2 max-lg:w-1.5 max-lg:mt-0">
                          <Icon3 />
                        </div>
                      </div>
                      <div className="block min-w-0 text-color-001 cursor-pointer max-lg:text-[color:inherit]" aria-hidden="true">
                        Our hand-picked personal website examples to give you inspiration
                      </div>
                    </div>
                    <div className="flex mb-4 text-muted-foreground text-sm leading-[1.3125rem]">
                      <div className="block min-w-0 mr-2">
                        <div className="block w-1.5" />
                      </div>
                      <div className="block min-w-0 cursor-pointer" aria-hidden="true">
                        The best website builder for your personal brand website
                      </div>
                    </div>
                    <div className="flex mb-4 text-muted-foreground text-sm leading-[1.3125rem]">
                      <div className="block min-w-0 mr-2">
                        <div className="block w-1.5 md:max-lg:mt-2">
                          <Icon4 />
                        </div>
                      </div>
                      <div className="block min-w-0 cursor-pointer md:max-lg:text-color-001" aria-hidden="true">
                        How to build your personal brand website
                      </div>
                    </div>
                    <div className="flex text-muted-foreground text-sm leading-[1.3125rem]">
                      <div className="block min-w-0 mr-2">
                        <div className="block w-1.5 max-md:mt-2">
                          <Icon5 />
                        </div>
                      </div>
                      <div className="block min-w-0 cursor-pointer max-md:text-color-001" aria-hidden="true">
                        All your personal branding website questions answered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <article className="block relative" id="article">
          <Navbar />
          <HeroSection />
          <MoreArticlesLikeSection />
        </article>
      </main>
      <Footer />
      {" "}
    </>
  );
}
