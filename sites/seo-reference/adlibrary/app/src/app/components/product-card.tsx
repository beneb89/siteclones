export type ProductCardData = {
  variant: string;
  eyebrow: string;
  title: string;
  description?: string;
  label?: string;
};
/** A product card. */
export default function ProductCard({ d }: { d: ProductCardData }) {
  switch (d.variant) {
    case "claude-code-adlibrary-api-building-agentic":
      return (
        <article className="border border-solid border-color-001 flex rounded-[3.2px] flex-col h-full">
          <div className="block relative overflow-hidden w-full aspect-video">
            <div className="flex rounded-[3.2px] justify-center items-center bg-background w-full h-full">
              <img className="w-24 h-22.5 block opacity-30 max-w-full overflow-clip aspect-[auto_96/96] align-middle text-clr-0" data-component="image" alt="AdLibrary" height="96" src="/assets/cloned/svg/4f3cf379e434.svg" width="96" />
            </div>
          </div>
          <div className="flex p-6 flex-col grow">
            <div className="block mb-4 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 tracking-[0.35px] uppercase">
              {d.eyebrow}
            </div>
            <h3 className="block mb-4 font-light max-md:text-xl max-md:leading-[1.5625rem] md:max-lg:text-2xl md:max-lg:leading-8" data-component="heading">
              <a className="inline cursor-pointer" data-component="link" href="/posts/claude-code-agentic-marketing-adlibrary-api">
                {d.title}
              </a>
            </h3>
            <p className="block mb-6 text-color-002 font-light leading-[2.4375rem] max-lg:leading-6.5">
              {d.description}
            </p>
            <div className="flex justify-between items-center md:max-lg:mt-13" />
          </div>
        </article>
      );
    case "agentic-marketing-workflows-with-claude-co":
      return (
        <article className="border border-solid border-color-001 flex rounded-[3.2px] flex-col h-full">
          <div className="block relative overflow-hidden w-full aspect-video">
            <div className="block relative w-full h-full">
              <div className="w-[387.3px] h-[217.9px] block absolute top-0 left-0 opacity-0 pointer-events-none">
                <div className="block object-cover pointer-events-none">
                  <picture className="inline pointer-events-none">
                    <img className="w-[24.1875rem] h-[24.1875rem] block max-w-full overflow-clip aspect-[auto_600/600] align-middle text-clr-0 pointer-events-none max-md:w-[21.3125rem] max-md:h-[21.3125rem] md:max-lg:w-85.5 md:max-lg:h-85.5" data-component="image" alt="Diagram showing the evolution from a simple prompt to a full agentic marketing workflow with branching logic, flat vector illustration" height="600" src="/assets/cloned/images/5385ff90cc51.png" width="600" />
                  </picture>
                </div>
              </div>
              <img className="w-full block overflow-clip object-cover aspect-[auto_300/300] align-middle h-full" height="300" src="/assets/cloned/images/d60ceca5ddc4.png" width="300" alt="" />
            </div>
          </div>
          <div className="flex p-6 flex-col grow">
            <div className="block mb-4 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 tracking-[0.35px] uppercase">
              {"Guides & Tutorials, Platforms & Tools"}
            </div>
            <h3 className="block mb-4 font-light max-md:text-xl max-md:leading-[1.5625rem] md:max-lg:text-2xl md:max-lg:leading-8" data-component="heading">
              <a className="inline cursor-pointer" data-component="link" href="/posts/agentic-marketing-workflows-with-claude-code">
                {d.title}
              </a>
            </h3>
            <p className="block mb-6 text-color-002 font-light leading-[2.4375rem] max-lg:leading-6.5">
              {d.description}
            </p>
            <div className="flex mt-[0.4375rem] justify-between items-center max-lg:mt-0" />
          </div>
        </article>
      );
    case "claude-code-for-marketers-a-beginner-s-int":
      return (
        <article className="border border-solid border-color-001 flex rounded-[3.2px] flex-col h-full">
          <div className="block relative overflow-hidden w-full aspect-video">
            <div className="block relative w-full h-full">
              <div className="w-[387.3px] h-[217.9px] block absolute top-0 left-0 opacity-0 pointer-events-none">
                <div className="block object-cover pointer-events-none">
                  <picture className="inline pointer-events-none">
                    <img className="w-[24.1875rem] h-[24.1875rem] block max-w-full overflow-clip aspect-[auto_600/600] align-middle text-clr-0 pointer-events-none max-md:w-[21.3125rem] max-md:h-[21.3125rem] md:max-lg:w-85.5 md:max-lg:h-85.5" data-component="image" alt="Claude Code terminal showing AI-assisted marketing workflow with ad variant spreadsheet generation" height="600" src="/assets/cloned/images/86d311be34a1.png" width="600" />
                  </picture>
                </div>
              </div>
              <img className="w-full block overflow-clip object-cover aspect-[auto_300/300] align-middle h-full" height="300" src="/assets/cloned/images/3cdd0e80d76e.png" width="300" alt="" />
            </div>
          </div>
          <div className="flex p-6 flex-col grow">
            <div className="block mb-4 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 tracking-[0.35px] uppercase">
              {"Platforms & Tools, Guides & Tutorials"}
            </div>
            <h3 className="block mb-4 font-light max-md:text-xl max-md:leading-[1.5625rem] md:max-lg:text-2xl md:max-lg:leading-8" data-component="heading">
              <a className="inline cursor-pointer" data-component="link" href="/posts/claude-code-for-marketers-intro">
                {d.title}
              </a>
            </h3>
            <p className="block mb-6 text-color-002 font-light leading-[2.4375rem] max-lg:leading-6.5">
              {d.label}
            </p>
            <div className="flex mt-[4.875rem] justify-between items-center max-lg:mt-0" />
          </div>
        </article>
      );
    case "claude-code-prompts-for-marketing-workflow":
      return (
        <article className="border border-solid border-color-001 flex rounded-[3.2px] flex-col h-full">
          <div className="block relative overflow-hidden w-full aspect-video">
            <div className="block relative w-full h-full">
              <div className="w-[387.3px] h-[217.9px] block absolute top-0 left-0 opacity-0 pointer-events-none">
                <div className="block object-cover pointer-events-none">
                  <picture className="inline pointer-events-none">
                    <img className="w-[24.1875rem] h-[24.1875rem] block max-w-full overflow-clip aspect-[auto_600/600] align-middle text-clr-0 pointer-events-none max-md:w-[21.3125rem] max-md:h-[21.3125rem] md:max-lg:w-85.5 md:max-lg:h-85.5" data-component="image" alt="Claude Code prompt library organized in terminal folders showing research SEO ad-ops and reporting categories for marketing workflows" height="600" src="/assets/cloned/images/d1c7b8516e1d.png" width="600" />
                  </picture>
                </div>
              </div>
              <img className="w-full block overflow-clip object-cover aspect-[auto_300/300] align-middle h-full" height="300" src="/assets/cloned/images/a40ad2516360.png" width="300" alt="" />
            </div>
          </div>
          <div className="flex p-6 flex-col grow">
            <div className="block mb-4 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 tracking-[0.35px] uppercase">
              {"Guides & Tutorials, Platforms & Tools"}
            </div>
            <h3 className="block mb-4 font-light max-md:text-xl max-md:leading-[1.5625rem] md:max-lg:text-2xl md:max-lg:leading-8" data-component="heading">
              <a className="inline cursor-pointer" data-component="link" href="/posts/claude-code-prompts-for-marketing">
                {d.title}
              </a>
            </h3>
            <p className="block mb-6 text-color-002 font-light leading-[2.4375rem] max-lg:leading-6.5">
              {d.description}
            </p>
            <div className="flex justify-between items-center md:max-lg:mt-1.5" />
          </div>
        </article>
      );
    case "claude-code-vs-cursor-for-marketers-which-":
      return (
        <article className="border border-solid border-color-001 flex rounded-[3.2px] flex-col h-full">
          <div className="block relative overflow-hidden w-full aspect-video">
            <div className="block relative w-full h-full">
              <div className="w-[387.3px] h-[217.9px] block absolute top-0 left-0 opacity-0 pointer-events-none">
                <div className="block object-cover pointer-events-none">
                  <picture className="inline pointer-events-none">
                    <img className="w-[24.1875rem] h-[24.1875rem] block max-w-full overflow-clip aspect-[auto_600/600] align-middle text-clr-0 pointer-events-none max-md:w-[21.3125rem] max-md:h-[21.3125rem] md:max-lg:w-85.5 md:max-lg:h-85.5" data-component="image" alt="Split workstation illustration showing CLI terminal on left and code editor IDE on right, flat vector comparison of Claude Code vs Cursor for marketers" height="600" src="/assets/cloned/images/9bd7640b0e35.png" width="600" />
                  </picture>
                </div>
              </div>
              <img className="w-full block overflow-clip object-cover aspect-[auto_300/300] align-middle h-full" height="300" src="/assets/cloned/images/1dbdacf04452.png" width="300" alt="" />
            </div>
          </div>
          <div className="flex p-6 flex-col grow">
            <div className="block mb-4 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 tracking-[0.35px] uppercase">
              {d.eyebrow}
            </div>
            <h3 className="block mb-4 font-light max-md:text-xl max-md:leading-[1.5625rem] md:max-lg:text-2xl md:max-lg:leading-8" data-component="heading">
              <a className="inline cursor-pointer" data-component="link" href="/posts/claude-code-vs-cursor-for-marketers">
                {d.title}
              </a>
            </h3>
            <p className="block mb-6 text-color-002 font-light leading-[2.4375rem] max-lg:leading-6.5">
              {d.description}
            </p>
            <div className="flex mt-[2.4375rem] justify-between items-center max-lg:mt-0" />
          </div>
        </article>
      );
    case "meta-marketing-api-integration-software-wh":
      return (
        <article className="border border-solid border-color-001 flex rounded-[3.2px] flex-col h-full">
          <div className="block relative overflow-hidden w-full aspect-video">
            <div className="block relative w-full h-full">
              <div className="w-[387.3px] h-[217.9px] block absolute top-0 left-0 opacity-0 pointer-events-none">
                <div className="block object-cover pointer-events-none">
                  <picture className="inline pointer-events-none">
                    <img className="w-[24.1875rem] h-[13.1875rem] block max-w-full overflow-clip aspect-[auto_600/327] align-middle text-clr-0 pointer-events-none max-md:w-[21.3125rem] max-lg:h-46.5 md:max-lg:w-85.5" data-component="image" alt="Meta Marketing API integration software: build vs buy decision framework — split diagram showing raw SDK and code on one side versus managed SaaS dashboard on the other" height="327" src="/assets/cloned/images/22049a4d0b89.png" width="600" />
                  </picture>
                </div>
              </div>
              <img className="w-full block overflow-clip object-cover aspect-[auto_300/163] align-middle h-full" height="163" src="/assets/cloned/images/6ca94eea352a.png" width="300" alt="" />
            </div>
          </div>
          <div className="flex p-6 flex-col grow">
            <div className="block mb-4 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 tracking-[0.35px] uppercase">
              {"Platforms & Tools, Advertising Strategy"}
            </div>
            <h3 className="block mb-4 font-light max-md:text-xl max-md:leading-[1.5625rem] md:max-lg:text-2xl md:max-lg:leading-8" data-component="heading">
              <a className="inline cursor-pointer" data-component="link" href="/posts/meta-api-integration-software">
                {d.title}
              </a>
            </h3>
            <p className="block mb-6 text-color-002 font-light leading-[2.4375rem] max-lg:leading-6.5">
              {d.description}
            </p>
            <div className="flex mt-[2.4375rem] justify-between items-center max-md:mt-0 md:max-lg:mt-3" />
          </div>
        </article>
      );
    case "facebook-campaign-setup-a-2026-tutorial-th":
      return (
        <article className="border border-solid border-color-001 flex rounded-[3.2px] flex-col h-full">
          <div className="block relative overflow-hidden w-full aspect-video">
            <div className="block relative w-full h-full">
              <div className="w-[387.3px] h-[217.9px] block absolute top-0 left-0 opacity-0 pointer-events-none">
                <div className="block object-cover pointer-events-none">
                  <picture className="inline pointer-events-none">
                    <img className="w-[24.1875rem] h-[24.1875rem] block max-w-full overflow-clip aspect-[auto_600/600] align-middle text-clr-0 pointer-events-none max-md:w-[21.3125rem] max-md:h-[21.3125rem] md:max-lg:w-85.5 md:max-lg:h-85.5" data-component="image" alt="AdLibrary image" height="600" src="/assets/cloned/images/d1ccc9755ab2.png" width="600" />
                  </picture>
                </div>
              </div>
              <img className="w-full block overflow-clip object-cover aspect-[auto_300/300] align-middle h-full" height="300" src="/assets/cloned/images/61f6db2b3884.png" width="300" alt="" />
            </div>
          </div>
          <div className="flex p-6 flex-col grow">
            <div className="block mb-4 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5 tracking-[0.35px] uppercase">
              {"Guides & Tutorials, Advertising Strategy"}
            </div>
            <h3 className="block mb-4 font-light max-md:text-xl max-md:leading-[1.5625rem] md:max-lg:text-2xl md:max-lg:leading-8" data-component="heading">
              <a className="inline cursor-pointer" data-component="link" href="/posts/facebook-campaign-setup-2026">
                {d.title}
              </a>
            </h3>
            <p className="block mb-6 text-color-002 font-light leading-[2.4375rem] max-lg:leading-6.5">
              {d.description}
            </p>
            <div className="flex justify-between items-center" />
          </div>
        </article>
      );
    default:
      return null;
  }
}
