import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <div className="block relative">
      <div className="block py-4 px-6 mx-auto max-w-7xl max-md:px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5">
            <a className="block text-muted-foreground cursor-pointer hover:text-muted hover:outline-muted hover:[text-decoration-color:var(--muted)]" data-component="link" href="/posts">
              BLOG
            </a>
            <span className="block mx-2 text-color-001">
              /
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="block mr-3 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5">
              Share
            </span>
            <div className="flex items-center gap-2">
              <a className="border border-solid border-border flex rounded-full justify-center items-center bg-surface-2 cursor-pointer w-9 h-9 hover:bg-surface" data-component="link" href={"https://x.com/intent/tweet?url=https%3A%2F%2Fadlibrary.com%2Fposts%2Fmeta-ads-mcp-setup-guide&text=Meta%20Ads%20MCP%20setup%3A%20connect%20Claude%20Code%20to%20Meta%20in%202026"} rel="noopener noreferrer" target="_blank" title="Share on X">
                <Icon3 />
              </a>
              <a className="border border-solid border-border flex rounded-full justify-center items-center bg-surface-2 cursor-pointer w-9 h-9 hover:bg-surface" data-component="link" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fadlibrary.com%2Fposts%2Fmeta-ads-mcp-setup-guide" rel="noopener noreferrer" target="_blank" title="Share on LinkedIn">
                <Icon4 />
              </a>
              <button className="border border-solid border-border flex rounded-full justify-center items-center text-center bg-surface-2 cursor-pointer w-9 h-9 hover:bg-surface" data-component="button" title="Copy link">
                <Icon5 />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="block py-8 px-6 mx-auto max-w-7xl max-md:px-4">
        <div className="w-full flex flex-col max-w-4xl">
          <div className="block mb-6 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 tracking-[0.35px] uppercase">
            {"Guides & Tutorials, Platforms & Tools"}
          </div>
          <h1 className="block mb-8 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-6xl font-light leading-15 tracking-[-1.5px] max-md:text-4xl max-md:leading-[2.8125rem] max-md:tracking-[-0.9px] md:max-lg:text-5xl md:max-lg:leading-12 md:max-lg:tracking-[-1.2px]" data-component="heading">
            Meta Ads MCP setup: connect Claude Code to Meta in 2026
          </h1>
          <p className="block mb-10 text-color-002 font-light max-md:text-xl max-md:leading-[2.0625rem] md:max-lg:text-2xl md:max-lg:leading-8">
            <span className="inline">
              Four commands to wire Claude Code to Meta's official MCP server — and what to do with it once it's running.
            </span>
          </p>
        </div>
        <div className="border-t border-solid border-t-border border-b border-b-border flex p-6 flex-wrap justify-between items-center gap-10 text-color-002 [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-base font-light leading-6 max-lg:[font-size:inherit] max-lg:leading-[inherit]">
          <div className="block max-w-4xl">
            <a className="inline cursor-pointer hover:opacity-80" data-component="link" href="/author/murat-bock">
              <div className="flex items-center">
                <div className="flex rounded-full justify-center items-center bg-border w-12 h-12">
                  M
                </div>
                <div className="block ml-4">
                  <p className="block font-medium">
                    Murat Bock
                  </p>
                  <p className="block text-muted-foreground text-sm leading-5">
                    {"Founder & Fullstack Developer"}
                  </p>
                </div>
              </div>
            </a>
          </div>
          <time className="block text-muted-foreground" dateTime="2026-05-05T11:00:00.000Z">
            May 5, 2026
          </time>
        </div>
      </div>
      <div className="block mb-12 px-6 mx-auto max-w-7xl max-md:px-4">
        <div className="block relative overflow-hidden w-full aspect-video">
          <div className="block relative w-full h-full">
            <div className="w-308 h-[43.3125rem] block absolute top-0 left-0 opacity-0 pointer-events-none">
              <div className="block pointer-events-none">
                <picture className="inline pointer-events-none">
                  <img className="w-225 h-225 block max-w-full overflow-clip object-cover aspect-[auto_900/900] align-middle text-clr-0 pointer-events-none max-md:w-[21.4375rem] max-md:h-[21.4375rem] md:max-lg:w-180 md:max-lg:h-180" data-component="image" alt="Claude Code terminal querying the adlibrary API with ad data streaming in, producing structured competitor intelligence reports" height="900" src="/assets/cloned/images/93408c7cddf3.png" width="900" />
                </picture>
              </div>
            </div>
            <img className="w-full block overflow-clip object-cover aspect-[auto_450/450] align-middle h-full" height="450" src="/assets/cloned/images/9e39d69d112c.png" width="450" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
