import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import WhatTheMetaSection from "./sections/what-the-meta-section";
import RelatedToolsSection from "./sections/related-tools-section";
import ProductGridSection from "./sections/product-grid-section";
import FeatureGridSection from "./sections/feature-grid-section";
import Footer from "./sections/footer";
import UseEssentialCookiesSection from "./sections/use-essential-cookies-section";

export default function Page() {
  return (
    <>
      <div className="block">
        <Navbar />
        <main className="min-h-[calc(100vh_-_64px)] block">
          <div className="block py-16 px-6 mx-auto max-w-7xl">
            <HeroSection />
            <WhatTheMetaSection />
          </div>
          <RelatedToolsSection />
          <ProductGridSection />
          <FeatureGridSection />
        </main>
        <Footer />
      </div>
      <UseEssentialCookiesSection />
      {" "}
    </>
  );
}
