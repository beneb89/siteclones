import Icon2 from "../svgs/svg-icon2";
/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <div className="block mx-auto max-w-3xl">
      <a className="inline-flex mb-6 items-center gap-1.5 text-muted-foreground text-sm leading-5 cursor-pointer hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" href="/blog">
        <Icon2 />
        All blog posts
      </a>
      <h1 className="block [font-family:editorialNew,_'editorialNew_Fallback'] text-4xl font-medium leading-10 tracking-[-0.9px] max-md:text-3xl max-md:leading-9 max-md:tracking-[-0.75px]" data-component="heading">
        Meta Ads MCP: The Complete Guide (2026)
      </h1>
      <p className="block mt-3 text-muted-foreground text-sm leading-5">
        June 8, 2026 · 19 min read
      </p>
      <div className="flex mt-4 items-center gap-3">
        <img className="w-10 h-10 block max-w-full rounded-full overflow-clip aspect-[auto_40/40] align-middle text-clr-2" data-component="image" alt="Soku Team" height="40" src="/assets/cloned/images/49e6ee3cb94d.png" srcSet="/assets/cloned/images/1b26ec4d8d7a.webp 1x, /assets/cloned/images/49e6ee3cb94d.png 2x" width="40" />
        <div className="block">
          <p className="block text-sm font-medium leading-5 whitespace-nowrap">
            Soku Team
          </p>
        </div>
      </div>
      <img className="w-full h-[26.8125rem] block max-w-full mt-8 overflow-clip align-middle max-md:h-[11.4375rem] md:max-lg:h-100.5" data-component="image" alt="Meta Ads MCP: The Complete Guide (2026)" src="/assets/cloned/images/d8fcbd5975af.png" />
    </div>
  );
}
