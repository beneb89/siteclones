/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <header className="border-b-4 border-solid border-b-color-005 block relative z-100 pt-8 pb-10 text-background bg-foreground max-lg:pt-6 max-lg:pb-8">
      <div className="block max-w-200 mx-auto px-10 max-md:px-4 md:max-lg:px-5">
        <nav className="block mb-6" data-component="nav" aria-label="Breadcrumb">
          <a className="inline text-color-006 text-sm leading-[1.5rem] cursor-pointer hover:border-color-005 hover:text-color-005 hover:outline-color-005 hover:[text-decoration-color:var(--color-005)]" data-component="link" href="/blog">
            ← Back to Blog
          </a>
        </nav>
        <div className="flex mb-4 flex-wrap items-center gap-4 text-sm leading-[1.5rem] max-lg:gap-2">
          <span className="block text-color-005 font-bold tracking-[0.7px] uppercase">
            AI Visibility
          </span>
          <time className="block text-color-006" dateTime="2026-04-02T00:00:00.000Z">
            April 2, 2026
          </time>
          <span className="w-[6.0625rem] block text-color-006 max-md:w-[21.4375rem] md:max-lg:w-182 before:content-['•'] before:mr-4 before:text-color-006 before:text-sm before:font-medium before:leading-[1.5rem] max-lg:before:hidden">
            22 min read
          </span>
        </div>
        <h1 className="block mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-[2rem] [font-weight:1000] leading-[2.3125rem] tracking-[-0.8px] uppercase [overflow-wrap:break-word] max-lg:text-2xl max-lg:leading-[1.75rem] max-lg:tracking-[-0.6px] max-md:[word-break:break-word]" data-component="heading">
          Answer Engine Optimization: The Complete AEO and GEO Guide for 2026
        </h1>
        <p className="block mb-4 text-color-006 text-lg leading-[1.8125rem]">
          {"Answer Engine Optimization (AEO) & GEO vs SEO: tactics for AI Overviews, Perplexity, Copilot, Claude, Gemini; Princeton/IIT Delhi study; scam red flags."}
        </p>
      </div>
    </header>
  );
}
