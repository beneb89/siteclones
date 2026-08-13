/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <section className="block">
      <div className="block max-w-200 mx-auto px-10 max-md:px-6 md:max-lg:px-8 2xl:max-w-208">
        <div className="w-full flex -mx-2 py-10 justify-start items-center gap-1 overflow-hidden max-md:hidden">
          <a className="w-[49.3px] h-10 flex max-w-full p-2 justify-start items-center shrink-0 gap-[0.3125rem] overflow-hidden text-color-001 whitespace-nowrap text-nowrap cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/blog">
            <div className="block">
              Blog
            </div>
          </a>
          <div className="block">
            <div className="block text-sm leading-5 tracking-[-0.09px]">
              /
            </div>
          </div>
          <a className="h-10 flex max-w-full p-2 justify-start items-center gap-[0.3125rem] overflow-hidden text-color-001 whitespace-nowrap text-nowrap cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href="#">
            <div className="block overflow-hidden">
              {"Guide to using Google Ads Transparency Center & Ad Library"}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
