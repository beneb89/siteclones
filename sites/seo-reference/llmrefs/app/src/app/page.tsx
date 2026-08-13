import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import LogoCloudSection from "./sections/logo-cloud-section";
import Footer from "./sections/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="block">
        <HeroSection />
        <LogoCloudSection />
      </main>
      <Footer />
      <section className="block" aria-atomic="false" aria-label="Notifications alt+T" aria-live="polite" aria-relevant="additions text" />
    </>
  );
}
