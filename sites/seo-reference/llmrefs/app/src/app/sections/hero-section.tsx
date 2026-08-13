/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <header className="block pt-24 pb-14 text-background w-full" style={{ backgroundImage: "linear-gradient(to right bottom, var(--clr-0) 0%, var(--foreground) 100%)" }}>
      <div className="flex mx-auto px-6 flex-col items-center text-center max-w-4xl">
        <h1 className="w-full block mt-4 text-5xl font-extrabold leading-12 text-pretty max-w-3xl max-md:text-3xl max-md:leading-9 md:max-lg:text-4xl md:max-lg:leading-10" data-component="heading">
          Generative Engine Optimization (GEO): The 2026 Guide
        </h1>
        <p className="w-full block mt-6 text-lg leading-7 text-pretty max-w-2xl">
          How to get your content cited by AI search engines like ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.
        </p>
      </div>
    </header>
  );
}
