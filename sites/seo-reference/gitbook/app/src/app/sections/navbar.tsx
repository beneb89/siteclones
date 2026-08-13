import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
/** Top navigation bar. */
export default function Navbar() {
  return (
    <div className="block pt-4 pb-2 2xl:hidden">
      <div className="block 2xl:hidden">
        <div className="block relative max-w-360 px-8 mx-auto max-md:px-4 2xl:hidden">
          <a className="flex py-3 pr-12 pl-4 rounded-xl justify-center items-start overflow-hidden text-sm leading-5 bg-surface-2 cursor-pointer w-full 2xl:hidden hover:bg-clr-7" data-component="link" href="/docs/docs-as-code/gitbook-mcp">
            <Icon />
            <div className="block 2xl:hidden">
              New: The GitBook MCP server is here.
              <div className="inline ml-1 underline 2xl:hidden">
                <span className="inline mr-1 2xl:hidden">
                  Connect your AI agent
                </span>
                <Icon2 />
              </div>
            </div>
          </a>
          <button className="w-[2.0625rem] h-[2.0625rem] flex absolute top-0 right-8 mt-1.5 mr-1.5 p-1.5 rounded-lg items-center shrink-0 gap-2 overflow-hidden align-middle text-muted-foreground text-sm leading-[1.3125rem] text-center whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-w-full max-md:right-4 2xl:hidden hover:bg-clr-7 hover:border-clr-8 hover:shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--border)_0px_0px_0px_1px,var(--clr-1)_0px_0px_0px_0px] hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="button" aria-label="Close" type="button">
            <Icon3 />
          </button>
        </div>
      </div>
    </div>
  );
}
