import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import DataforseoApiGuideSection from "./sections/dataforseo-api-guide-section";
import ProductGridSection from "./sections/product-grid-section";
import NguyenTheNguyenSection from "./sections/nguyen-the-nguyen-section";
import RelatedPostsSection from "./sections/related-posts-section";
import Footer from "./sections/footer";
import AffiliateDisclosureNextgrowthSection from "./sections/affiliate-disclosure-nextgrowth-section";

export default function Page() {
  return (
    <>
      <div className="h-[2196.1875rem] min-h-screen flex flex-col overflow-clip max-md:h-[64807.5px] md:max-lg:h-[2637.975rem] 2xl:h-[2194.5rem]" id="wrapper">
        <a className="w-px h-px block absolute top-0 left-0 min-w-0 -m-px overflow-hidden text-primary underline [clip-path:inset(50%)] cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:bg-clr-26 focus:border-clr-27 focus:shadow-[var(--clr-28)_0px_0px_2px_2px] focus:text-clr-27 focus:outline-clr-27 focus:[text-decoration-color:var(--clr-27)] focus:no-underline" href="#main">
          Skip to content
        </a>
        <Navbar />
        {" "}
        <div className="h-full block grow shrink-0 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-[1.0625rem] before:leading-[1.6875rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-[1.0625rem] after:leading-[1.6875rem]" id="inner-wrap">
          <div className="h-full block my-20 max-md:my-8 md:max-lg:my-12" id="primary">
            <div className="h-full block max-w-322.5 px-6 mx-auto">
              <main className="h-full block" id="main" role="main">
                <div className="h-full block relative">
                  <HeroSection />
                  {" "}
                  <article className="block relative z-1 rounded-tl-lg rounded-tr-lg bg-surface shadow-[var(--clr-1)_0px_15px_15px_-10px] max-md:-mx-4" id="post-4574">
                    <div className="block p-8 max-md:p-4">
                      <DataforseoApiGuideSection />
                      <ProductGridSection />
                      {" "}
                      <footer className="block clear-both" />
                      {" "}
                    </div>
                    {" "}
                  </article>
                  <NguyenTheNguyenSection />
                  <RelatedPostsSection />
                  {" "}
                </div>
                {" "}
              </main>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        <Footer />
        {" "}
      </div>
      <AffiliateDisclosureNextgrowthSection />
      <div className="border-t border-solid border-t-clr-19 block py-3.5 px-2.5 text-[0.8125rem] leading-[1.3125rem] text-center">
        <a className="inline text-primary underline cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href="/privacy-policy/">
          Privacy Policy
        </a>
        {" · "}
        <a className="inline text-primary underline cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href="/terms-of-service/">
          Terms of Service
        </a>
        {" · "}
        <a className="inline text-primary underline cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href="/contacts/">
          Contact
        </a>
        {" · "}
        <a className="inline text-primary underline cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href="mailto:contact@nextgrowth.ai">
          contact@nextgrowth.ai
        </a>
        {" "}
      </div>
      {" "}
    </>
  );
}
