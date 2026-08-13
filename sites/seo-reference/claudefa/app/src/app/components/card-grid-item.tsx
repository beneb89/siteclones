import Icon5 from "../svgs/svg-icon5";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Icon8 from "../svgs/svg-icon8";
import Icon9 from "../svgs/svg-icon9";
import Icon10 from "../svgs/svg-icon10";
import Icon11 from "../svgs/svg-icon11";
import Icon12 from "../svgs/svg-icon12";
import Icon13 from "../svgs/svg-icon13";
import Icon14 from "../svgs/svg-icon14";
import Icon15 from "../svgs/svg-icon15";
import Icon16 from "../svgs/svg-icon16";
import Icon17 from "../svgs/svg-icon17";
import Icon18 from "../svgs/svg-icon18";
import Icon19 from "../svgs/svg-icon19";
import Icon20 from "../svgs/svg-icon20";
import Icon21 from "../svgs/svg-icon21";
import Icon22 from "../svgs/svg-icon22";
import Icon23 from "../svgs/svg-icon23";
import Icon24 from "../svgs/svg-icon24";
import Icon25 from "../svgs/svg-icon25";
import Icon26 from "../svgs/svg-icon26";
import Icon27 from "../svgs/svg-icon27";
export type CardGridItemData = {
  variant: string;
  eyebrow?: string;
  title: string;
  description: string;
  label?: string;
  date?: string;
};
/** card grid item component. */
export default function CardGridItem({ d }: { d: CardGridItemData }) {
  switch (d.variant) {
    case "google-ads-mcp":
      return (
        <aside className="w-85 h-200 block sticky top-0 z-30 flex-1 text-sm leading-5 bg-background max-md:w-[23.4375rem] max-md:h-189 max-md:fixed max-md:top-14 max-md:left-0 max-md:invisible max-md:min-w-0 max-md:text-[0.9375rem] max-md:bg-clr-1 max-md:[backdrop-filter:blur(16px)] max-md:grow-[initial] max-md:basis-[initial] md:max-lg:h-256 2xl:hidden" id="nd-sidebar">
          <div className="w-85 h-200 border-r border-solid border-r-border flex pt-2 flex-col max-w-full max-md:invisible md:max-lg:h-256 2xl:hidden">
            <div className="flex px-3 flex-col gap-2 max-md:invisible 2xl:hidden">
              <div className="flex items-center max-md:hidden 2xl:hidden">
                <a className="h-9 flex py-1 items-center gap-2.5 font-medium cursor-pointer max-md:invisible 2xl:hidden" data-component="link" href="/">
                  <div className="flex items-center gap-2 max-md:invisible 2xl:hidden">
                    <img className="block max-w-full overflow-clip aspect-[auto_32/32] align-middle text-clr-0 w-8 h-7 max-md:invisible 2xl:hidden" data-component="image" alt="Claude Fast" height="32" src="/assets/cloned/svg/179df17cd24b.svg" width="32" />
                    <span className="block text-xl leading-7 tracking-[-0.5px] whitespace-nowrap text-nowrap max-md:invisible 2xl:hidden">
                      Claude Fast
                    </span>
                  </div>
                </a>
              </div>
              <button className="h-12 flex -mx-2 py-1.5 px-2 rounded-lg items-center gap-2 text-center cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)]" data-component="button" aria-controls="radix-_R_3daiulkdb_" aria-expanded="false" aria-haspopup="dialog" type="button">
                <Icon5 />
                <div className="block flex-1 text-start max-md:invisible 2xl:hidden">
                  <p className="block font-medium max-md:invisible 2xl:hidden">
                    Tools
                  </p>
                  <p className="block text-muted-foreground text-xs leading-4 max-md:invisible 2xl:hidden">
                    Supercharge your Claude
                  </p>
                </div>
                <Icon6 />
              </button>
              <button className="h-9 border border-solid border-border flex p-1.5 rounded-lg items-center gap-2 text-muted-foreground text-center bg-surface-2 cursor-pointer max-md:hidden 2xl:hidden hover:bg-clr-63 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)]" data-component="button" type="button">
                <Icon7 />
                Search
                <div className="flex ml-41.5 gap-0.5 max-md:invisible 2xl:hidden">
                  <kbd className="border border-solid border-border block px-1.5 rounded-md [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] bg-background max-md:invisible 2xl:hidden">
                    ⌘
                  </kbd>
                  <kbd className="border border-solid border-border block px-1.5 rounded-md [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] bg-background max-md:invisible 2xl:hidden">
                    K
                  </kbd>
                </div>
              </button>
            </div>
            <div className="block relative overflow-hidden h-full max-md:invisible 2xl:hidden" dir="ltr">
              <div className="w-[21.1875rem] h-[37.4375rem] block overflow-x-hidden overflow-y-scroll max-md:invisible md:max-lg:h-[51.4375rem] 2xl:hidden" style={{ maskImage: "linear-gradient(var(--clr-0) 2px, var(--clr-5) 16px)" }}>
                <div className="table min-w-full max-md:invisible 2xl:hidden">
                  <div className="block py-4 px-3 max-md:invisible 2xl:hidden">
                    <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools">
                      Claude Code Tools
                    </a>
                    <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/keybindings-guide">
                      Keyboard Shortcuts
                    </a>
                    <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/statusline-guide">
                      Status Line Guide
                    </a>
                    <div className="block max-md:invisible 2xl:hidden">
                      <button className="h-8 flex py-1.5 pr-1.5 pl-2 rounded-md items-center gap-2 text-muted-foreground text-center [overflow-wrap:anywhere] cursor-pointer w-full max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-ditto-id="interaction-button" data-component="button" aria-controls="radix-_R_99laiulkdb_" aria-expanded="false" type="button">
                        Hooks
                        <Icon8 />
                      </button>
                      <div className="hidden overflow-hidden [animation-name:fd-collapsible-up] [animation-duration:0.15s] [animation-timing-function:ease-out]" data-ditto-id="interaction-radix-r-99laiulkdb" id="radix-_R_99laiulkdb_" />
                    </div>
                    <div className="block max-md:invisible 2xl:hidden">
                      <button className="h-8 flex py-1.5 pr-1.5 pl-2 rounded-md items-center gap-2 text-muted-foreground text-center [overflow-wrap:anywhere] cursor-pointer w-full max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-ditto-id="interaction-button-2" data-component="button" aria-controls="radix-_R_b9laiulkdb_" aria-expanded="false" type="button">
                        Skills
                        <Icon9 />
                      </button>
                      <div className="hidden overflow-hidden [animation-name:fd-collapsible-up] [animation-duration:0.15s] [animation-timing-function:ease-out]" data-ditto-id="interaction-radix-r-b9laiulkdb" id="radix-_R_b9laiulkdb_" />
                    </div>
                    <div className="block max-md:invisible 2xl:hidden">
                      <button className="h-8 flex py-1.5 pr-1.5 pl-2 rounded-md items-center gap-2 text-muted-foreground text-center [overflow-wrap:anywhere] cursor-pointer w-full max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-ditto-id="interaction-button-3" data-component="button" aria-controls="radix-_R_d9laiulkdb_" aria-expanded="false" type="button">
                        Orchestrators
                        <Icon10 />
                      </button>
                      <div className="hidden overflow-hidden [animation-name:fd-collapsible-up] [animation-duration:0.15s] [animation-timing-function:ease-out]" data-ditto-id="interaction-radix-r-d9laiulkdb" id="radix-_R_d9laiulkdb_" />
                    </div>
                    <div className="block max-md:invisible 2xl:hidden">
                      <button className="h-8 flex py-1.5 pr-1.5 pl-2 rounded-md items-center gap-2 text-muted-foreground text-center [overflow-wrap:anywhere] cursor-pointer w-full max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-ditto-id="interaction-button-4" data-component="button" aria-controls="radix-_R_f9laiulkdb_" aria-expanded="false" type="button">
                        Monitors
                        <Icon11 />
                      </button>
                      <div className="hidden overflow-hidden [animation-name:fd-collapsible-up] [animation-duration:0.15s] [animation-timing-function:ease-out]" data-ditto-id="interaction-radix-r-f9laiulkdb" id="radix-_R_f9laiulkdb_" />
                    </div>
                    <div className="block max-md:invisible 2xl:hidden">
                      <button className="h-8 flex py-1.5 pr-1.5 pl-2 rounded-md items-center gap-2 text-muted-foreground text-center [overflow-wrap:anywhere] cursor-pointer w-full max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-ditto-id="interaction-button-5" data-component="button" aria-controls="radix-_R_h9laiulkdb_" aria-expanded="false" type="button">
                        Customization
                        <Icon12 />
                      </button>
                      <div className="hidden overflow-hidden [animation-name:fd-collapsible-up] [animation-duration:0.15s] [animation-timing-function:ease-out]" data-ditto-id="interaction-radix-r-h9laiulkdb" id="radix-_R_h9laiulkdb_" />
                    </div>
                    <div className="block max-md:invisible 2xl:hidden">
                      <button className="h-8 flex py-1.5 pr-1.5 pl-2 rounded-md items-center gap-2 text-muted-foreground text-center [overflow-wrap:anywhere] cursor-pointer w-full max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-ditto-id="interaction-button-6" data-component="button" aria-controls="radix-_R_j9laiulkdb_" aria-expanded="false" type="button">
                        Resources
                        <Icon13 />
                      </button>
                      <div className="hidden overflow-hidden [animation-name:fd-collapsible-up] [animation-duration:0.15s] [animation-timing-function:ease-out]" data-ditto-id="interaction-radix-r-j9laiulkdb" id="radix-_R_j9laiulkdb_" />
                    </div>
                    <div className="block max-md:invisible 2xl:hidden">
                      <button className="h-8 flex py-1.5 pr-1.5 pl-2 rounded-md items-center gap-2 text-muted-foreground text-center [overflow-wrap:anywhere] cursor-pointer w-full max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-ditto-id="interaction-button-7" data-component="button" aria-controls="radix-_R_l9laiulkdb_" aria-expanded="true" type="button">
                        {"MCP & Extensions"}
                        <Icon14 />
                      </button>
                      <div className="block overflow-hidden max-md:invisible 2xl:hidden" data-ditto-id="interaction-radix-r-l9laiulkdb" id="radix-_R_l9laiulkdb_">
                        <div className="border-l border-solid border-l-border block ml-2 py-1.5 pl-1.5 max-md:invisible 2xl:hidden">
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/mcp-basics">
                            MCP Basics
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/claudefast-blog-mcp">
                            Claude Fast Blog MCP
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/blog-mcp-launch">
                            Blog MCP Launch
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/mcp-tool-search">
                            MCP Tool Search
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/lsp-mcp-server">
                            LSP MCP Server
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/context7-mcp">
                            Context7 MCP
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/best-addons">
                            {"Extensions & Addons"}
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/shopify-ai-toolkit">
                            {"Shopify MCP & AI Toolkit"}
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/shopify-dev-mcp-install">
                            Shopify Dev MCP Install
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/meta-mcp-cli">
                            {"Meta MCP & CLI"}
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/meta-ads-mcp-comparison">
                            Meta MCP Comparison
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/higgsfield-mcp">
                            Higgsfield MCP
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/higgsfield-vs-sora-vs-veo">
                            AI Video Comparison
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/klaviyo-mcp-claude-code">
                            {d.eyebrow}
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-accent font-medium [overflow-wrap:anywhere] bg-clr-6 cursor-pointer max-md:invisible 2xl:hidden" data-component="button" href="/blog/tools/mcp-extensions/google-ads-mcp-claude-code">
                            {d.title}
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/cursor-mcp-setup">
                            Cursor MCP
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/search-tools">
                            Search Tools
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/browser-automation">
                            Browser Automation
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/social-media-mcps">
                            {d.description}
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/custom-integrations">
                            Custom Integrations
                          </a>
                          <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="/blog/tools/mcp-extensions/plugins-distribution">
                            Plugins Distribution
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block max-md:invisible 2xl:hidden">
                      <button className="h-8 flex py-1.5 pr-1.5 pl-2 rounded-md items-center gap-2 text-muted-foreground text-center [overflow-wrap:anywhere] cursor-pointer w-full max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-ditto-id="interaction-button-8" data-component="button" aria-controls="radix-_R_n9laiulkdb_" aria-expanded="false" type="button">
                        Extensions
                        <Icon15 />
                      </button>
                      <div className="hidden overflow-hidden [animation-name:fd-collapsible-up] [animation-duration:0.15s] [animation-timing-function:ease-out]" data-ditto-id="interaction-radix-r-n9laiulkdb" id="radix-_R_n9laiulkdb_" />
                    </div>
                    <p className="block mt-8 mb-2 px-2 font-medium max-md:invisible 2xl:hidden" />
                    <a className="h-8 flex py-1.5 px-2 rounded-md items-center gap-2 text-muted-foreground [overflow-wrap:anywhere] cursor-pointer max-md:invisible 2xl:hidden hover:bg-clr-65 hover:text-clr-66 hover:outline-clr-66 hover:[text-decoration-color:var(--clr-66)]" data-component="link" href="https://seoboo.st/" rel="noreferrer noopener" target="_blank">
                      <Icon16 />
                      SEO Boost
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-solid border-t-border flex py-3 px-4 flex-col max-md:invisible 2xl:hidden">
              <div className="flex items-center max-md:invisible 2xl:hidden">
                <div className="block flex-1 max-md:invisible 2xl:hidden" role="separator" />
                <button className="h-8 flex -mr-1.5 p-1.5 rounded-md justify-center items-center font-medium text-center cursor-pointer max-md:hidden 2xl:hidden hover:bg-clr-63 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)]" data-component="button" aria-label="Collapse Sidebar" type="button">
                  <Icon17 />
                </button>
              </div>
              <div className="h-0 flex absolute top-189 left-4 min-w-0 -mt-0.5 -ml-1 justify-end items-center w-fit max-md:h-11 max-md:-my-1.5 max-md:static max-md:top-auto max-md:left-auto max-md:ml-0 max-md:w-full 2xl:hidden">
                <div className="h-0 block max-md:h-11 2xl:hidden">
                  <button className="hidden my-1 py-2 px-4 rounded-md justify-center items-center text-clr-5 font-medium text-center bg-accent cursor-pointer h-9 max-md:inline-flex max-md:text-[0.875rem]" aria-label="Open Claude Fast checkout (docs sidebar mobile)">
                    Get Claude Fast
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      );
    case "google-ads-mcp-for-claude-code-run-pmax-an":
      return (
        <div className="flex min-w-0 max-w-150 flex-col w-full max-md:max-w-[23.4375rem] md:max-lg:max-w-107 2xl:hidden" id="nd-page">
          <header className="border-b border-solid border-b-color-002 hidden sticky top-0 z-10 min-w-0 items-center text-sm leading-5 [backdrop-filter:blur(12px)] max-md:w-[23.4375rem] max-lg:h-[2.3125rem] max-lg:flex max-md:top-14 md:max-lg:w-107" id="nd-tocnav">
            <button className="w-full h-full inline-flex py-2 px-4 items-center gap-2 whitespace-nowrap text-nowrap cursor-pointer max-md:w-[23.4375rem] max-lg:h-9 max-lg:flex md:max-lg:w-107 2xl:hidden" aria-controls="radix-_R_blfivqiulkdb_" aria-expanded="false" aria-haspopup="dialog" type="button">
              <Icon18 />
              On this page
              <Icon19 />
              <span className="block min-w-0 overflow-hidden text-muted-foreground 2xl:hidden">
                The Google Ads MCP Landscape in 2026
              </span>
            </button>
          </header>
          <article className="h-full flex max-w-215 pt-12 px-8 flex-col flex-1 gap-6 mx-auto w-full max-md:pt-8 max-lg:px-4 2xl:hidden">
            <div className="flex -mb-3 items-center gap-1 text-muted-foreground text-sm font-medium leading-5 2xl:hidden">
              <span className="block overflow-hidden whitespace-nowrap text-nowrap 2xl:hidden">
                {d.eyebrow}
              </span>
            </div>
            <h1 className="block text-3xl font-medium leading-9 tracking-[-0.75px] max-lg:-my-1 2xl:hidden" data-component="heading">
              {d.title}
            </h1>
            <p className="block -mt-3 mb-4 text-muted-foreground 2xl:hidden">
              Connect a Google Ads MCP to Claude Code. Manage PMax, Search, Shopping campaigns, audiences, and conversions from your terminal in 2026.
            </p>
            <div className="hidden min-w-0 mb-6 p-5 rounded-lg flex-col items-start gap-3 bg-accent w-full max-lg:flex">
              <span className="inline text-clr-5 text-[1.0625rem] font-semibold leading-[1.3125rem] max-lg:block 2xl:hidden">
                Stop configuring. Start shipping.
              </span>
              <span className="inline text-clr-7 text-[1.0625rem] leading-[1.4375rem] max-lg:block 2xl:hidden">
                Everything you're reading about and more..
                <br className="inline 2xl:hidden" />
                Agentic Orchestration Kit for Claude Code.
              </span>
              <div className="block 2xl:hidden">
                <button className="inline-flex py-2.5 px-4 rounded-lg items-center font-medium text-center bg-background cursor-pointer whitespace-nowrap max-lg:h-11 2xl:hidden" aria-label="Open Claude Fast checkout (blog body banner)">
                  {"Get Claude Fast "}
                  <Icon20 />
                </button>
              </div>
            </div>
            <div className="block leading-7 2xl:hidden">
              <div className="block max-w-215 mx-auto 2xl:hidden">
                <p className="block mb-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    Problem
                  </strong>
                  : Running Google Ads at scale means living inside the Ads Editor, copy-pasting GAQL into the API explorer, and waiting weeks for a developer token to graduate from Test to Standard access. When a Performance Max campaign misfires, you are five tabs deep before you have pulled the data.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    Quick Win
                  </strong>
                  {": A "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp
                  </code>
                  {" server connects Claude Code to your Google Ads account so the agent can run GAQL, audit campaigns, and (with the right server) edit budgets, swap bidding strategies, and refresh asset groups. As of May 2026 you have four ready-made options plus a DIY path: Google's official read-only MCP shipped April 28, Pipeboard's hosted server with 35 plus tools, Composio's HTTP toolkit, community servers like "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    cohnen/mcp-google-ads
                  </code>
                  , and a custom wrapper for teams with compliance requirements.
                </p>
                {" "}
                <figure className="border border-solid border-border block relative my-6 rounded-lg overflow-hidden text-sm leading-5 bg-surface-2 2xl:hidden group">
                  <button className="w-7.5 h-7.5 flex absolute top-2 left-124 z-2 opacity-0 p-2 rounded-md justify-center items-center font-medium text-center [backdrop-filter:blur(12px)] cursor-pointer 2xl:hidden hover:bg-clr-63 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)] group-hover:opacity-100" aria-label="Copy Text" type="button">
                    <Icon21 />
                    <Icon22 />
                  </button>
                  <div className="block relative overflow-hidden 2xl:hidden" dir="ltr">
                    <div className="h-33 block max-h-150 overflow-scroll 2xl:hidden">
                      <div className="table min-w-full 2xl:hidden">
                        <pre className="block p-4 [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap max-h-full 2xl:hidden">
                          <code className="grid text-[0.8125rem] grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-clr-8 2xl:hidden">
                                # Official Google Ads MCP (read-only)
                              </span>
                            </span>
                            {"\n"}
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-color-004 2xl:hidden">
                                claude
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" mcp"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" add"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" google-ads-mcp"}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" --"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" pipx"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" run"}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" --spec"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" git+https://github.com/googleads/google-ads-mcp.git"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" google-ads-mcp"}
                              </span>
                            </span>
                            {"\n"}
                            <span className="block text-color-001 2xl:hidden">
                              {" "}
                            </span>
                            {"\n"}
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-clr-8 2xl:hidden">
                                # Pipeboard hosted (read + write, OAuth)
                              </span>
                            </span>
                            {"\n"}
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-color-004 2xl:hidden">
                                claude
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" mcp"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" add"}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" --transport"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" http"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" pipeboard-google-ads"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" https://google-ads.mcp.pipeboard.co/"}
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </figure>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"This pillar maps the "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp claude code
                  </code>
                  {" landscape: which server to pick, how to get a developer token past the approval backlog, the eight "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    performance max mcp
                  </code>
                  {" and Search workflows that pay back the install on day one, and how Google Ads slots into the Meta plus Shopify operator stack."}
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="the-google-ads-mcp-landscape-in-2026">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#the-google-ads-mcp-landscape-in-2026">
                    The Google Ads MCP Landscape in 2026
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  {"Unlike the Meta side, where Meta shipped both an official CLI and a hosted MCP in "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829557] hover:no-underline focus:opacity-[0.978935]" data-component="link" href="/blog/tools/mcp-extensions/meta-mcp-cli">
                    late April 2026
                  </a>
                  {", Google's first-party Google Ads MCP is deliberately narrow. The April 28, 2026 release at "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    github.com/googleads/google-ads-mcp
                  </code>
                  {" exposes three tools ("}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    list_accessible_customers
                  </code>
                  {", "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    search
                  </code>
                  {", "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    get_resource_metadata
                  </code>
                  ) and runs read-only. Apache 2.0, Python, 428 stars. There is no first-party path to "let Claude pause my underperforming PMax asset group."
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"That gap is why the third-party Google Ads MCP market is busier than the third-party Meta market. The official Meta connector exposes the full Marketing API, so brokers compete on convenience. The official "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp
                  </code>
                  {" exposes a read-only slice, so brokers compete on capability."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The four "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp
                  </code>
                  {" servers for "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads claude code
                  </code>
                  {" in May 2026:"}
                </p>
                {" "}
                <ol className="block my-5 pl-6.5 [list-style-type:decimal] list-outside 2xl:hidden">
                  <li className="list-item my-1.5 pl-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Official Google Ads MCP
                    </strong>
                    {" ("}
                    <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                      googleads/google-ads-mcp
                    </code>
                    ). Read-only, three tools, stdio transport, your developer token and OAuth credentials. Right for analytics-heavy work where you want first-party trust.
                  </li>
                  <li className="list-item my-1.5 pl-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Pipeboard Google Ads MCP
                    </strong>
                    {" ("}
                    <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                      google-ads.mcp.pipeboard.co
                    </code>
                    ). Hosted HTTP transport, 35 plus tools covering keyword management, bid optimization, GAQL, and campaign creation. OAuth 2.0, no local credentials. Right for full-control PMax and Search operations.
                  </li>
                  <li className="list-item my-1.5 pl-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Composio Google Ads
                    </strong>
                    {" ("}
                    <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                      composio.dev/toolkits/googleads
                    </code>
                    ). HTTP MCP, OAuth managed by Composio, integrated into the Tool Router so Google Ads sits next to Slack, HubSpot, Notion, and the rest of the Composio catalog. Right if Google Ads is one of fifteen toolkits in the same session.
                  </li>
                  <li className="list-item my-1.5 pl-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Community servers
                    </strong>
                    {" like "}
                    <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829547] hover:no-underline focus:opacity-[0.982091]" data-component="link" href="https://github.com/cohnen/mcp-google-ads" rel="nofollow noopener noreferrer" target="_blank">
                      <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] font-normal leading-[1.4375rem] bg-surface 2xl:hidden">
                        cohnen/mcp-google-ads
                      </code>
                    </a>
                    {" (577 stars, MIT, GAQL-focused) and "}
                    <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                      amekala/ads-mcp
                    </code>
                    {" (multi-platform, 100 plus tools across Google, Meta, LinkedIn, TikTok). Read-mostly, self-hostable."}
                  </li>
                </ol>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The decision tree is simple. Read-heavy analytics goes to the official server. Write-heavy "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp claude code
                  </code>
                  {" operations go to Pipeboard. Multi-platform toolkits go to Composio. Compliance needs go to a community server you can fork. If you have not wired an MCP server in Claude Code before, our "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829514] hover:no-underline focus:opacity-[0.982099]" data-component="link" href="/blog/tools/mcp-extensions/mcp-basics">
                    MCP basics guide
                  </a>
                  {" is the protocol primer."}
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="the-official-google-ads-mcp-read-only-and-that-is-fine">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#the-official-google-ads-mcp-read-only-and-that-is-fine">
                    The Official Google Ads MCP: Read-Only and That Is Fine
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  {"Google's "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google-ads-mcp
                  </code>
                  {" is the cleanest place to start, and the read-only constraint is more feature than bug for a first install. You cannot drop a budget by 90 percent on a misread instruction. You cannot mutate an asset group. What you can do is everything analytical: GAQL queries, customer-id discovery, resource-metadata introspection."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  Install in Claude Code:
                </p>
                {" "}
                <figure className="border border-solid border-border block relative my-6 rounded-lg overflow-hidden text-sm leading-5 bg-surface-2 2xl:hidden group">
                  <button className="w-7.5 h-7.5 flex absolute top-2 left-124 z-2 opacity-0 p-2 rounded-md justify-center items-center font-medium text-center [backdrop-filter:blur(12px)] cursor-pointer 2xl:hidden hover:bg-clr-63 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)] group-hover:opacity-100" aria-label="Copy Text" type="button">
                    <Icon21 />
                    <Icon22 />
                  </button>
                  <div className="block relative overflow-hidden 2xl:hidden" dir="ltr">
                    <div className="h-18 block max-h-150 overflow-scroll 2xl:hidden">
                      <div className="table min-w-full 2xl:hidden">
                        <pre className="block p-4 [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap max-h-full 2xl:hidden">
                          <code className="grid text-[0.8125rem] grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-color-004 2xl:hidden">
                                claude
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" mcp"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" add"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" google-ads-mcp"}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" \\"}
                              </span>
                            </span>
                            {"\n"}
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-color-003 2xl:hidden">
                                {"  --"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" pipx"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" run"}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" --spec"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" git+https://github.com/googleads/google-ads-mcp.git"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" google-ads-mcp"}
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </figure>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The server takes three env variables: "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    GOOGLE_APPLICATION_CREDENTIALS
                  </code>
                  {" pointing at your OAuth JSON, "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    GOOGLE_PROJECT_ID
                  </code>
                  {" for the Cloud project, and "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    GOOGLE_ADS_DEVELOPER_TOKEN
                  </code>
                  {" for the 22-character token. Set them in "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    ~/.claude/settings.json
                  </code>
                  {" under the "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    env
                  </code>
                  {" block, restart Claude Code, and you are connected."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The three tools are surgical. "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    list_accessible_customers
                  </code>
                  {" returns every Google Ads customer ID the authenticated user can reach. "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    search
                  </code>
                  {" executes any GAQL query you can write, covering performance metrics, budgets, ad-group structure, keyword data, and conversion fields. "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    get_resource_metadata
                  </code>
                  {" returns metadata about resource types, useful when Claude needs to reason about which fields exist before constructing a query."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"Real workflow: ask Claude to \"list every Performance Max campaign across all accessible accounts that spent more than $500 in the last seven days but had a conversion-value-to-cost ratio below 2.0, sorted by spend.\" Claude calls "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    list_accessible_customers
                  </code>
                  , iterates GAQL queries, aggregates, and returns a Markdown table grounded in live API responses.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The hard limit is that you cannot act on what you found. The natural follow-up (pause the worst, reallocate budget, swap bidding strategies) needs a write-capable server. Most operators end up running the official server for read trust and Pipeboard or Composio for execution. Running both costs context, which is why "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829536] hover:no-underline focus:opacity-[0.982087]" data-component="link" href="/blog/tools/mcp-extensions/mcp-tool-search">
                    MCP Tool Search
                  </a>
                  {" matters once you cross three connected servers."}
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="pipeboard-google-ads-mcp-the-write-surface">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#pipeboard-google-ads-mcp-the-write-surface">
                    Pipeboard Google Ads MCP: The Write Surface
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  {"Pipeboard ships the broadest write surface in the third-party "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp
                  </code>
                  {" market. The hosted HTTP server at "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    https://google-ads.mcp.pipeboard.co/
                  </code>
                  {" exposes 35 plus tools covering keyword management, bid optimization, GAQL, and campaign creation. Skip the developer-app plumbing, hand off OAuth to a hosted broker, trade self-hosting for setup speed."}
                </p>
                {" "}
                <figure className="border border-solid border-border block relative my-6 rounded-lg overflow-hidden text-sm leading-5 bg-surface-2 2xl:hidden group">
                  <button className="w-7.5 h-7.5 flex absolute top-2 left-124 z-2 opacity-0 p-2 rounded-md justify-center items-center font-medium text-center [backdrop-filter:blur(12px)] cursor-pointer 2xl:hidden hover:bg-clr-63 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)] group-hover:opacity-100" aria-label="Copy Text" type="button">
                    <Icon21 />
                    <Icon22 />
                  </button>
                  <div className="block relative overflow-hidden 2xl:hidden" dir="ltr">
                    <div className="h-18 block max-h-150 overflow-scroll 2xl:hidden">
                      <div className="table min-w-full 2xl:hidden">
                        <pre className="block p-4 [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap max-h-full 2xl:hidden">
                          <code className="grid text-[0.8125rem] grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-color-004 2xl:hidden">
                                claude
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" mcp"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" add"}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" --transport"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" http"}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" \\"}
                              </span>
                            </span>
                            {"\n"}
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-primary 2xl:hidden">
                                {"  pipeboard-google-ads"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" https://google-ads.mcp.pipeboard.co/"}
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </figure>
                {" "}
                <p className="block my-5 2xl:hidden">
                  That is the entire setup. The first tool call triggers a browser OAuth handshake against Pipeboard's authorization endpoint, which proxies your Google identity through a token-exchange flow.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The capability list that matters for a real "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    pmax claude code
                  </code>
                  {" workflow:"}
                </p>
                {" "}
                <ul className="block my-5 pl-6 [list-style-type:disc] list-outside 2xl:hidden">
                  <li className="list-item my-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Campaign creation and modification.
                    </strong>
                    {" Spin up a Search or Performance Max campaign, set the bidding strategy, attach the conversion goal, and configure the daily budget from a single prompt. The asset-group-and-asset bulk-mutate that Google's API requires (asset group plus minimum-required assets in one request) is handled by Pipeboard's tool layer, not by you."}
                  </li>
                  <li className="list-item my-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Keyword management.
                    </strong>
                    {" Bulk-add keywords, push negative keywords across Search campaigns, run search-term reports, identify wasted-spend queries."}
                  </li>
                  <li className="list-item my-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Bid optimization.
                    </strong>
                    {" Switch a campaign from Maximize Conversions to Target ROAS. Adjust tCPA targets in batch."}
                  </li>
                  <li className="list-item my-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Budget pacing.
                    </strong>
                    {" Pull month-to-date spend, compare to plan, reallocate across campaigns to hit a monthly cap."}
                  </li>
                  <li className="list-item my-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      GAQL queries.
                    </strong>
                    {" Same surface as the official server, useful when you want one MCP for both read and write."}
                  </li>
                </ul>
                {" "}
                <p className="block my-5 2xl:hidden">
                  The tradeoff is the broker. Your operations move through Pipeboard's infrastructure, a third party in the auth chain. For agencies and in-house teams running their own spend, this is a fine trade. For regulated client data, the calculus shifts. Match Pipeboard's security documentation against your contract obligations.
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="composio-google-ads-when-you-run-twenty-toolkits-at-once">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#composio-google-ads-when-you-run-twenty-toolkits-at-once">
                    Composio Google Ads: When You Run Twenty Toolkits at Once
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  Composio's Google Ads toolkit is a different shape. It is a single MCP entry inside Composio's Tool Router, alongside Slack, HubSpot, Linear, Stripe, and roughly two hundred other apps. The Google Ads surface is narrower than Pipeboard's, with five primary actions at writing time: create customer list, get campaign by ID, get campaign by name, get customer lists, and add or remove members from a customer list. Enough for audience workflows, thinner than Pipeboard for full campaign editing.
                </p>
                {" "}
                <figure className="border border-solid border-border block relative my-6 rounded-lg overflow-hidden text-sm leading-5 bg-surface-2 2xl:hidden group">
                  <button className="w-7.5 h-7.5 flex absolute top-2 left-124 z-2 opacity-0 p-2 rounded-md justify-center items-center font-medium text-center [backdrop-filter:blur(12px)] cursor-pointer 2xl:hidden hover:bg-clr-63 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)] group-hover:opacity-100" aria-label="Copy Text" type="button">
                    <Icon21 />
                    <Icon22 />
                  </button>
                  <div className="block relative overflow-hidden 2xl:hidden" dir="ltr">
                    <div className="h-23 block max-h-150 overflow-scroll 2xl:hidden">
                      <div className="table min-w-full 2xl:hidden">
                        <pre className="block p-4 [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap max-h-full 2xl:hidden">
                          <code className="grid text-[0.8125rem] grid-cols-[minmax(0,_1fr)] 2xl:hidden">
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-color-004 2xl:hidden">
                                claude
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" mcp"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" add"}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" --transport"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" http"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" googleads-composio"}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" \\"}
                              </span>
                            </span>
                            {"\n"}
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-primary 2xl:hidden">
                                {"  \"YOUR_MCP_URL_HERE\""}
                              </span>
                              <span className="inline text-color-003 2xl:hidden">
                                {" \\"}
                              </span>
                            </span>
                            {"\n"}
                            <span className="block text-color-001 2xl:hidden">
                              <span className="inline text-color-003 2xl:hidden">
                                {"  --headers"}
                              </span>
                              <span className="inline text-primary 2xl:hidden">
                                {" \"X-API-Key:YOUR_COMPOSIO_API_KEY\""}
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </figure>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    YOUR_MCP_URL_HERE
                  </code>
                  {" placeholder is generated from your Composio dashboard when you connect the Google Ads integration. Composio handles OAuth, token refresh, and scopes on their side. The only secret you store locally is your Composio API key."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  The strategic case shows up when Google Ads is one tile in a bigger workflow. Example: "Pull yesterday's Google Ads spend by campaign, attribute revenue from Stripe, write a summary to the marketing-daily Slack channel, update the daily-spend row in the Notion ops dashboard." Pipeboard handles step one. Composio runs all four through one Tool Router call with one auth boundary and one billing relationship.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  If your workflow is self-contained, Composio is overkill. If it is the spine of a multi-tool loop touching CRM, billing, comms, and analytics, it earns the install.
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="building-your-own-google-ads-api-plus-a-wrapper">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#building-your-own-google-ads-api-plus-a-wrapper">
                    Building Your Own: Google Ads API Plus a Wrapper
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  This is not a fourth vendor -- it is the path for teams that need to own the entire data perimeter. The MCP spec is small. A Google Ads API client is a few hundred lines. A custom MCP server that wraps it is another few hundred. For a senior engineer this is two days of work, with no third-party trust boundary.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"Why anyone does it: compliance teams need provable data perimeters; custom surfaces let you bake business rules into tool definitions (every "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    pause_campaign
                  </code>
                  {" call can require a manager-approved ticket ID); agencies running 50 client accounts need cleaner per-client token isolation than the brokers expose."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"What you build: a Python server using the "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.821525] hover:no-underline focus:opacity-[0.978871]" data-component="link" href="https://developers.google.com/google-ads/api/docs/get-started/introduction" rel="nofollow noopener noreferrer" target="_blank">
                    Google Ads Python client library
                  </a>
                  {" wrapped in an MCP transport. Claude Code's "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829509] hover:no-underline focus:opacity-[0.982139]" data-component="link" href="/blog/tools/mcp-extensions/custom-integrations">
                    custom integrations guide
                  </a>
                  {" walks the wrapper pattern. Register tools ("}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    run_gaql_query
                  </code>
                  {", "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    pause_campaign
                  </code>
                  {", "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    update_budget
                  </code>
                  {", "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    create_asset_group
                  </code>
                  {"), each a thin layer over the Python client, then "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    claude mcp add
                  </code>
                  {" it like any other server."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  The cost is maintenance. Google updates the Ads API on a roughly twelve-month cycle of breaking changes. The official MCP and third-party servers track those updates. Your custom server tracks them when you remember. For most operators this is the wrong tradeoff. For a few, it is the only one that meets the compliance bar.
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="oauth-developer-tokens-and-the-approval-process">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#oauth-developer-tokens-and-the-approval-process">
                    OAuth, Developer Tokens, and the Approval Process
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  {"Every "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp
                  </code>
                  {" setup post skips this section. We are going to fix that, because the developer token approval is currently the longest pole in any "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp claude code
                  </code>
                  {" install."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  A Google Ads developer token is a 22-character string from the API Center page of your Google Ads manager account. Three access levels:
                </p>
                {" "}
                <ul className="block my-5 pl-6 [list-style-type:disc] list-outside 2xl:hidden">
                  <li className="list-item my-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Test Account Access
                    </strong>
                    : 15,000 operations per day, test accounts only, instant.
                  </li>
                  <li className="list-item my-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Basic Access
                    </strong>
                    : 15,000 operations per day, production accounts, two-business-day review.
                  </li>
                  <li className="list-item my-1.5 2xl:hidden">
                    <strong className="inline font-medium 2xl:hidden">
                      Standard Access
                    </strong>
                    : unlimited operations, production accounts, ten-business-day review.
                  </li>
                </ul>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"Reality in 2026: the "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829618] hover:no-underline focus:opacity-[0.982098]" data-component="link" href="https://ads-developers.googleblog.com/2026/02/an-update-on-google-ads-api-developer.html" rel="nofollow noopener noreferrer" target="_blank">
                    Google Ads Developer Blog posted February 6
                  </a>
                  {" an update acknowledging that both access tiers were running beyond their stated review windows -- Basic Access averaging 14-plus business days against the two-day SLA, Standard Access running four-plus weeks against the ten-day target. Google cited a surge in new developer-token applications driven by AI-agent tooling as the primary cause. Every Claude Code, ChatGPT, and Cursor user wiring up a "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp
                  </code>
                  {" is adding pressure to the same review queue."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  Practical implications. Apply for Basic Access early, even if you only plan to use the official read-only MCP. Be specific in the use case ("internal team analyzing campaigns through Claude Code with the official Google Ads MCP server" beats "AI integration"). Add the Cloud project number if you completed OAuth verification. Use a Test Account while Basic Access sits in queue.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  For Pipeboard and Composio, you skip the developer-token application entirely. Both brokers provision a shared token under their own Google Cloud project and authenticate your specific Google Ads account through the OAuth flow on top. This is the single biggest reason to consider a third-party server while evaluating. Operators who picked Pipeboard were running real campaigns from Claude Code seven minutes after install while their Basic Access application sat in queue for two weeks.
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="eight-pmax-and-search-workflows-from-your-terminal">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#eight-pmax-and-search-workflows-from-your-terminal">
                    Eight PMax and Search Workflows From Your Terminal
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  {"This is the operator-grade "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    performance max mcp
                  </code>
                  {" and Search list -- every workflow run on real accounts, not press-release theater."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    1. Asset group creation for Performance Max.
                  </strong>
                  {" \"Create a new asset group on the Summer Sale 2026 PMax campaign with these five product images, three headlines, two long headlines, four descriptions, and these audience signals.\" Claude builds the bulk-mutate request that Performance Max requires (asset group plus minimum-required assets in one call) and executes through Pipeboard or your custom server."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    2. Audience signals for PMax campaigns.
                  </strong>
                  {" Audience signals are the highest-leverage knob on Performance Max. Claude reads your top-spending customer list, pushes it as a custom audience, and attaches it as an audience signal to the right asset group in one prompt. Pays back the install cost on most accounts."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    3. Conversion uploads via the Conversion Adjustments API.
                  </strong>
                  {" \"Upload these 1,200 offline conversions from the Shopify export, dedupe against existing uploads from the last 30 days, and report any rejections.\" Claude validates the schema, batches the API call, and writes a CSV of rejected rows."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    4. Negative keyword sweeps across Search campaigns.
                  </strong>
                  {" \"Pull every search term from the last 14 days, identify queries with high impressions and zero conversions, add the worst 50 as account-level negative keywords.\" Wasted spend that was sitting in your account for a month gets clipped in 90 seconds."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    5. Search term reports with intent classification.
                  </strong>
                  {" Claude pulls the full search-terms report and classifies each query by intent. High-impression informational queries become content briefs for your blog. Commercial queries with low conversion become candidates for new ad groups. Google Ads becomes the keyword input for your SEO program rather than a separate silo."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    6. Bid strategy switches with dry-run.
                  </strong>
                  {" \"If I switched Brand Search from Manual CPC to Maximize Clicks, what does the historical data suggest the spend curve would look like?\" Claude pulls the data, models the curve, reports a recommendation. You read, then ask Claude to make the switch."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    7. Budget pacing across multi-campaign accounts.
                  </strong>
                  {" \"It is the 22nd of the month, we are 40 percent through our $50,000 budget. Reallocate across the 12 campaigns so we hit $50,000 by month-end without dropping below 80 percent of the historical daily spend on the top three.\" Claude does the linear programming, you approve, Pipeboard executes the budget updates."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    8. Attribution debugging across the conversion path.
                  </strong>
                  {" \"We are seeing a 30 percent drop in reported conversions on the PMax campaign, but Shopify orders are flat.\" Claude pulls the conversion action setup, checks for tag-firing failures, validates the enhanced-conversion-data hashing, and surfaces the most likely cause."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The eight workflows are well within the API surface of any of the four servers covered. The operator question is which playbook you run them inside. The "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.839412] hover:no-underline focus:opacity-[0.982056]" data-component="link" href="/shopify">
                    Shopify Kit
                  </a>
                  {" ships 11 paid-ads files for exactly this stack, including a Google Performance Max playbook, a post-iOS-14 measurement stack, and the cross-channel diagnostic trees that triage workflow eight. The kit is the engagement framework. Claude Code plus the MCP is the execution layer."}
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="google-ads-plus-meta-plus-shopify-the-three-channel-loop">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#google-ads-plus-meta-plus-shopify-the-three-channel-loop">
                    Google Ads Plus Meta Plus Shopify: The Three-Channel Loop
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  Google Ads is the third leg of a three-channel operator stool. Meta on the social side, Shopify on the store side. Claude Code is where they share data and generate the cross-channel artifacts no single-platform UI can produce.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The shape of the loop. Creative generation lives in "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.82951] hover:no-underline focus:opacity-[0.982077]" data-component="link" href="/blog/tools/mcp-extensions/higgsfield-mcp">
                    Higgsfield MCP
                  </a>
                  {" (launched April 30, 2026). Distribution runs across "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829491] hover:no-underline focus:opacity-[0.982077]" data-component="link" href="/blog/tools/mcp-extensions/meta-mcp-cli">
                    Meta CLI and Meta MCP
                  </a>
                  {" (launched April 29) and your Google Ads MCP. Conversion and store control runs through the "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829545] hover:no-underline focus:opacity-[0.982139]" data-component="link" href="/blog/tools/mcp-extensions/shopify-ai-toolkit">
                    Shopify AI Toolkit
                  </a>
                  {" (launched April 9). Retention picks up where paid drops off through "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829509] hover:no-underline focus:opacity-[0.982139]" data-component="link" href="/blog/tools/mcp-extensions/klaviyo-mcp-claude-code">
                    Klaviyo MCP
                  </a>
                  .
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  The cross-channel question Claude can answer that no single-platform UI can: "We spend 40 percent on Meta, 35 percent on Google, 25 percent on TikTok. Native attribution overcounts because of last-click bias. Pull last-touch from Triple Whale, weight by marginal-ROAS curves from each platform's incrementality test, tell me where the next $10,000 should go." One prompt. Without the MCP stack, two days of spreadsheets and a $1,500 contractor invoice.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The diagnostic question Claude can answer when a campaign tanks: \"PMax CPA jumped 40 percent Tuesday. Creative fatigue, audience saturation, a competitor bid spike, a tracking break, or yesterday's theme deploy?\" Claude pulls Meta CAPI signal diagnostics, Google Ads conversion diagnostics, runs "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    git log
                  </code>
                  {" on the Shopify theme, and triangulates. Three weeks of consultant work in one session."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829563] hover:no-underline focus:opacity-[0.98216]" data-component="link" href="/shopify">
                    Shopify Kit's
                  </a>
                  {" cross-channel diagnostic-trees playbook walks this exact triage with the GAQL queries, Meta breakdown calls, Shopify metafield validations, and Klaviyo flow checks pre-built."}
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="connecting-google-ads-to-triple-whale-and-polar-analytics">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#connecting-google-ads-to-triple-whale-and-polar-analytics">
                    Connecting Google Ads to Triple Whale and Polar Analytics
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  Native attribution lies in every direction. Google overcounts conversions Meta drove. Meta overcounts conversions Google drove. Both undercount email and SMS. The DTC attribution layer sits on top of the platforms with cross-channel last-touch and incrementality models. Triple Whale and Polar Analytics are the two leaders as of May 2026, both with MCP-compatible surfaces you can wire next to your Google Ads MCP.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  Triple Whale's MCP exposes the Sonar pixel data and the Lighthouse attribution model directly to Claude. Polar Analytics is similar: cross-channel ROAS by campaign, customer-LTV-by-source, and the marginal-ROAS curves you need to actually decide where the next dollar goes. Northbeam plays the same role with a stronger media-mix-modeling tilt. Pick one. Running two attribution layers simultaneously paralyzes decision-making.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  The workflow that earns the install: the weekly cross-channel reallocation. Every Monday, Claude pulls last week's Google Ads, Meta, TikTok, and email-revenue numbers, normalizes through Triple Whale, computes marginal ROAS by channel, and writes a Markdown report with a recommended reallocation. You read it, push back on what looks wrong, approve. Claude executes. 25 minutes. Same job a $2,500-per-month attribution consultant did, running in your terminal.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  If you are not yet running an attribution layer, native reporting through the MCP is enough to start.
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="limits-quotas-and-the-beta-caveats">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#limits-quotas-and-the-beta-caveats">
                    Limits, Quotas, and the Beta Caveats
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  Things that bite when you start running Google Ads from Claude Code at scale.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    API quotas matter.
                  </strong>
                  {" Basic Access caps you at 15,000 operations per day. A single GAQL query is one operation. A bulk-mutate updating 200 ad-group bids is one operation. Generous until you run a five-account weekly audit that fires 800 GAQL queries, then a daily dashboard refresh of 200 more."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    Performance Max asset-group changes have caveats.
                  </strong>
                  {" Per the Google Ads API docs, asset groups in non-retail PMax campaigns must be created with minimum required assets in a single bulk-mutate, not piecemeal. Pipeboard handles this. Custom servers must implement the ordering correctly."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    The April 2026 PMax asset-disapproval policy is live.
                  </strong>
                  {" As of April 7, 2026, all new Performance Max campaigns are subject to asset-level review from submission. Campaigns ship looking healthy, then get hit with disapprovals two days later. Build a daily disapproval-check workflow into your routine."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    Rate limits are per-developer-token, not per-account.
                  </strong>
                  {" If you operate 30 client accounts under one developer token, all 30 share your 15,000-operation cap. Standard Access removes the daily cap; per-second rate limits still apply."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  <strong className="inline font-medium 2xl:hidden">
                    The official MCP is read-only and likely to stay that way.
                  </strong>
                  {" Google's choice to ship read-only first is consistent with constraining write operations when AI agents are the calling client. Do not plan a workflow around the official server gaining write in the next quarter."}
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="why-googles-own-agent-tools-arent-enough">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#why-googles-own-agent-tools-arent-enough">
                    Why Google's Own Agent Tools Aren't Enough
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  Google has been shipping AI inside the Ads UI for two years: Smart Bidding, asset auto-generation, Recommendations, the PMax suggestion engine. All real, all useful. The mismatch is not capability -- it is shape. These tools live inside Google Ads and only inside Google Ads. Every recommendation comes from inside the box.
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"A "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp claude code
                  </code>
                  {" setup inverts the box. The agent lives in your terminal with every other tool you have wired. \"Is the Smart Bidding recommendation to raise CPA targets defensible given the gross-margin compression on the top three SKUs last week?\" Smart Bidding cannot ask itself. Claude can. The "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp
                  </code>
                  {" supplies the Google-side data. The Shopify MCP supplies the margin data. The Meta MCP supplies the cross-channel ROAS context. Smart Bidding becomes one input, not the whole reasoning loop."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"The right mental model is layered. Smart Bidding handles within-account, second-by-second optimization no human can match. Claude plus the MCPs handles cross-platform, cross-week, cross-portfolio strategic questions Smart Bidding has no inputs for. The PPC consultant and the in-house media buyer are no longer competing against Smart Bidding. They are competing against operators who have wired the "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    performance max mcp
                  </code>
                  {" stack and run it from one session."}
                </p>
                {" "}
                <h2 className="flex mt-12 mb-6 items-center gap-2 text-2xl font-medium leading-8 2xl:hidden" data-component="heading" id="where-to-go-from-here">
                  <a className="block cursor-pointer 2xl:hidden" data-component="link" href="#where-to-go-from-here">
                    Where to Go From Here
                  </a>
                  <Icon23 />
                </h2>
                {" "}
                <p className="block mb-5 2xl:hidden">
                  {"Pick a server today, install your "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    google ads mcp claude code
                  </code>
                  {" setup in 15 minutes, run the eight workflows on a Test Account or your real account, and decide before you commit to the multi-week Basic Access approval."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  {"Read the "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.821496] hover:no-underline focus:opacity-[0.985546]" data-component="link" href="/blog/tools/mcp-extensions/mcp-basics">
                    MCP basics guide
                  </a>
                  {" if you have not wired an MCP yet. Install the official Google Ads MCP for read-only analytics, or "}
                  <code className="border border-solid border-border inline py-[0.1875rem] px-1 rounded-[5px] [font-family:'DM_Mono',_'DM_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.8125rem] leading-[1.4375rem] bg-surface 2xl:hidden">
                    claude mcp add --transport http pipeboard-google-ads https://google-ads.mcp.pipeboard.co/
                  </code>
                  {" for full read-write. Wire the "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829528] hover:no-underline focus:opacity-[0.982139]" data-component="link" href="/blog/tools/mcp-extensions/meta-mcp-cli">
                    Meta MCP
                  </a>
                  {" and "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829509] hover:no-underline focus:opacity-[0.982077]" data-component="link" href="/blog/tools/mcp-extensions/shopify-ai-toolkit">
                    Shopify AI Toolkit
                  </a>
                  {" next. Add "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829509] hover:no-underline focus:opacity-[0.982139]" data-component="link" href="/blog/tools/mcp-extensions/klaviyo-mcp-claude-code">
                    Klaviyo MCP
                  </a>
                  {" for retention and "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829491] hover:no-underline focus:opacity-[0.982077]" data-component="link" href="/blog/tools/mcp-extensions/higgsfield-mcp">
                    Higgsfield MCP
                  </a>
                  {" for creative. Enable "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829545] hover:no-underline focus:opacity-[0.982098]" data-component="link" href="/blog/tools/mcp-extensions/mcp-tool-search">
                    MCP Tool Search
                  </a>
                  {" once you cross three connected servers. Cursor users can follow our "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.839521] hover:no-underline focus:opacity-[0.991138]" data-component="link" href="/blog/tools/mcp-extensions/cursor-mcp-setup">
                    Cursor MCP setup walkthrough
                  </a>
                  {". Browse the "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829528] hover:no-underline focus:opacity-[0.982077]" data-component="link" href="/blog/tools/mcp-extensions/best-addons">
                    curated MCP list
                  </a>
                  {" for adjacent servers (GA4, Slack, Notion)."}
                </p>
                {" "}
                <p className="block my-5 2xl:hidden">
                  Google Ads MCP is the missing leg of the operator stack. Meta runs paid social. Shopify runs the store. Higgsfield generates creative. Klaviyo runs retention. Google Ads runs paid search and Performance Max. With all five wired, one operator in one session executes the work that twelve months ago required a senior media buyer, a PPC analyst, a retention strategist, a CRO consultant, and an attribution contractor.
                </p>
                {" "}
                <p className="block mt-5 2xl:hidden">
                  {"That is what the "}
                  <a className="inline font-medium underline cursor-pointer 2xl:hidden hover:opacity-[0.829545] hover:no-underline focus:opacity-[0.98216]" data-component="link" href="/shopify">
                    Shopify Kit
                  </a>
                  {" closes. Eleven paid-ads playbooks for the Meta-plus-Google-plus-TikTok stack, a dedicated Google PMax framework, the post-iOS-14 measurement stack, the cross-channel diagnostic trees that triage when a campaign tanks. Plus 31 SEO files that turn Google Ads search-term reports into a content roadmap, 10 CRO files for the landing-page side, eight retention flows, and eight named playbooks from Quick Wins Sprint to 90-Day Audit Sequence. Twenty-person Shopify consultancy worth of operator judgment in your Claude Code, paid once, updated forever. The MCPs give Claude hands. The kit tells the hands what to build."}
                </p>
              </div>
            </div>
            <div className="block flex-1 2xl:hidden" role="none" />
            <div className="flex flex-wrap justify-between items-center gap-4 2xl:hidden">
              <p className="block text-muted-foreground text-sm leading-5 2xl:hidden">
                Last updated on 8/10/2026
              </p>
            </div>
            <div className="grid pb-6 gap-4 grid-cols-2 2xl:hidden">
              <a className="h-20.5 border border-solid border-border flex p-4 rounded-lg flex-col gap-2 text-sm leading-5 bg-background cursor-pointer w-full 2xl:hidden hover:bg-clr-67 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)]" data-component="link" href="/blog/tools/mcp-extensions/klaviyo-mcp-claude-code">
                <div className="flex items-center gap-0.5 text-muted-foreground 2xl:hidden">
                  <Icon24 />
                  <p className="block 2xl:hidden">
                    Previous
                  </p>
                </div>
                <p className="block font-medium 2xl:hidden">
                  Klaviyo MCP
                </p>
              </a>
              <a className="h-20.5 border border-solid border-border flex p-4 rounded-lg flex-col gap-2 col-start-2 text-sm leading-5 text-end bg-background cursor-pointer w-full 2xl:hidden hover:bg-clr-67 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)]" data-component="link" href="/blog/tools/mcp-extensions/cursor-mcp-setup">
                <div className="flex flex-row-reverse items-center gap-0.5 text-muted-foreground 2xl:hidden">
                  <Icon25 />
                  <p className="block 2xl:hidden">
                    Next
                  </p>
                </div>
                <p className="block font-medium 2xl:hidden">
                  Cursor MCP
                </p>
              </a>
            </div>
          </article>
        </div>
      );
    case "on-this-page":
      return (
        <div className="w-85 block sticky top-0 pt-12 pb-2 flex-1 h-[var(--fd-toc-height)] max-lg:hidden 2xl:hidden" id="nd-toc">
          <div className="flex pr-2 flex-col gap-3 h-full max-w-full 2xl:hidden">
            <h3 className="flex -ml-0.5 items-center gap-1.5 text-muted-foreground text-sm leading-5 2xl:hidden" data-component="heading">
              <Icon26 />
              {d.title}
            </h3>
            <div className="flex relative flex-col overflow-hidden 2xl:hidden" dir="ltr">
              <div className="w-83 h-128 block relative overflow-x-hidden overflow-y-scroll 2xl:hidden">
                <div className="table min-w-full 2xl:hidden">
                  <div className="w-0.5 h-128 block absolute 2xl:hidden" style={{ maskImage: "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%202%20512%22%3E%3Cpath%20d%3D%22M1%200%20L1%2020%20L1%2032%20L1%2072%20L1%2084%20L1%20104%20L1%20116%20L1%20156%20L1%20168%20L1%20208%20L1%20220%20L1%20260%20L1%20272%20L1%20312%20L1%20324%20L1%20364%20L1%20376%20L1%20416%20L1%20428%20L1%20448%20L1%20460%20L1%20480%20L1%20492%20L1%20512%22%20stroke%3D%22black%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%2F%3E%3C%2Fsvg%3E)" }}>
                    <div className="block bg-accent h-[var(--fd-height)] 2xl:hidden" role="none" />
                  </div>
                  <div className="flex flex-col 2xl:hidden">
                    <a className="block relative pb-1.5 pl-3.5 text-accent text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#the-google-ads-mcp-landscape-in-2026">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      The Google Ads MCP Landscape in 2026
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#the-official-google-ads-mcp-read-only-and-that-is-fine">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      The Official Google Ads MCP: Read-Only and That Is Fine
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#pipeboard-google-ads-mcp-the-write-surface">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      Pipeboard Google Ads MCP: The Write Surface
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#composio-google-ads-when-you-run-twenty-toolkits-at-once">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      {d.description}
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#building-your-own-google-ads-api-plus-a-wrapper">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      Building Your Own: Google Ads API Plus a Wrapper
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#oauth-developer-tokens-and-the-approval-process">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      OAuth, Developer Tokens, and the Approval Process
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#eight-pmax-and-search-workflows-from-your-terminal">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      Eight PMax and Search Workflows From Your Terminal
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#google-ads-plus-meta-plus-shopify-the-three-channel-loop">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      Google Ads Plus Meta Plus Shopify: The Three-Channel Loop
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#connecting-google-ads-to-triple-whale-and-polar-analytics">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      Connecting Google Ads to Triple Whale and Polar Analytics
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#limits-quotas-and-the-beta-caveats">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      Limits, Quotas, and the Beta Caveats
                    </a>
                    <a className="block relative py-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#why-googles-own-agent-tools-arent-enough">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      Why Google's Own Agent Tools Aren't Enough
                    </a>
                    <a className="block relative pt-1.5 pl-3.5 text-muted-foreground text-sm leading-5 [overflow-wrap:anywhere] cursor-pointer 2xl:hidden" data-component="link" href="#where-to-go-from-here">
                      <div className="h-full block absolute top-0 left-0 bg-color-002 w-px 2xl:hidden" />
                      Where to Go From Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-2 mb-4 p-5 rounded-lg flex-col items-start gap-3 bg-accent w-full 2xl:hidden">
              <span className="block text-clr-5 text-[0.9375rem] font-semibold leading-[1.1875rem] 2xl:hidden">
                {d.label}
              </span>
              <span className="block text-clr-7 text-[0.8125rem] leading-[1.125rem] 2xl:hidden">
                Everything you're reading about and more..
                <br className="inline 2xl:hidden" />
                Agentic Orchestration Kit for Claude Code.
              </span>
              <div className="block 2xl:hidden">
                <button className="inline-flex py-2 px-3 rounded-lg items-center text-sm font-medium leading-5 text-center bg-background cursor-pointer whitespace-nowrap 2xl:hidden hover:bg-clr-68" data-component="button" aria-label="Open Claude Fast checkout (blog sidebar)">
                  {"Get Claude Fast "}
                  <Icon27 />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
