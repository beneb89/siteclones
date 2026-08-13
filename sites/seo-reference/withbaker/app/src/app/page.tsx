import Navbar from "./sections/navbar";
import Header from "./sections/header";
import HeroSection from "./sections/hero-section";
import WhyTheMetaSection from "./sections/why-the-meta-section";
import WhatTheMetaSection from "./sections/what-the-meta-section";
import HowMcpConnectsSection from "./sections/how-mcp-connects-section";
import FiveCliMcpSection from "./sections/five-cli-mcp-section";
import FailureModesToSection from "./sections/failure-modes-to-section";
import DayCliAdoptionSection from "./sections/day-cli-adoption-section";
import WhatThisMeansSection from "./sections/what-this-means-section";
import FrequentlyAskedQuestionsSection from "./sections/frequently-asked-questions-section";
import HolsteinMayberryKutsySection from "./sections/holstein-mayberry-kutsy-section";
import FaqSection from "./sections/faq-section";
import RelatedPostsSection from "./sections/related-posts-section";
import Footer from "./sections/footer";

export default function Page() {
  return (
    <>
      <div className="flex pt-6 px-6 flex-col mx-auto w-full max-w-[var(--container-wide)] max-md:pt-4 max-md:px-4">
        <Navbar />
        {" "}
        <main className="block mt-12 mx-auto w-full max-w-[var(--container-content)] max-md:mt-8">
          <nav className="block mb-6" data-component="nav" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-muted-foreground text-sm leading-[1.3125rem] [list-style-type:none] list-outside">
              <li className="list-item">
                <a className="inline cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="link" href="/">
                  Home
                </a>
                {" "}
              </li>
              <li className="list-item" aria-hidden="true">
                /
              </li>
              <li className="list-item">
                <a className="inline cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="link" href="/blog">
                  Blog
                </a>
                {" "}
              </li>
              <li className="list-item" aria-hidden="true">
                /
              </li>
              <li className="list-item overflow-hidden text-color-001 whitespace-nowrap text-nowrap">
                Meta Ads CLI and MCP Explained: How It Changes Your Campaign Strategy in 2026
              </li>
            </ol>
            {" "}
          </nav>
          {" "}
          <article className="block">
            <Header />
            {" "}
            <div className="block leading-[1.625rem]">
              <HeroSection />
              <WhyTheMetaSection />
              <WhatTheMetaSection />
              <HowMcpConnectsSection />
              <FiveCliMcpSection />
              <FailureModesToSection />
              <DayCliAdoptionSection />
              <WhatThisMeansSection />
              <FrequentlyAskedQuestionsSection />
              {" "}
              <hr className="w-256 h-px border-t border-solid border-t-border block my-8 overflow-hidden max-md:w-[21.4375rem] md:max-lg:w-180" />
              {" "}
              <h2 className="block mt-22.5 mb-[1.6875rem] text-4xl font-bold leading-[2.6875rem] tracking-[-0.72px] max-md:mt-[4.0625rem] max-md:mb-[19.5px] max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:tracking-[-0.52px] md:max-lg:mt-[4.6875rem] md:max-lg:mb-[22.5px] md:max-lg:text-3xl md:max-lg:leading-9 md:max-lg:tracking-[-0.6px]" data-component="heading" id="sources">
                Sources
              </h2>
              <HolsteinMayberryKutsySection />
              {" "}
            </div>
            <FaqSection />
            {" "}
          </article>
          <RelatedPostsSection />
          {" "}
        </main>
        <Footer />
        {" "}
      </div>
      {" "}
    </>
  );
}
