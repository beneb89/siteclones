/** How Does It section. */
export default function HowDoesItSection() {
  return (
    <section className="block py-20 max-md:py-12">
      <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <div className="flex mb-10 flex-col gap-8">
          <h2 className="block text-color-001 text-[2.125rem] font-bold leading-[2.3125rem] text-center max-md:mb-8 max-md:text-2xl max-md:leading-[1.625rem]" data-component="heading">
            How does it work?
          </h2>
          {" "}
        </div>
        {" "}
        <div className="grid mt-10 items-center gap-8 grid-cols-2 max-lg:grid-cols-1">
          <div className="flex flex-col gap-4">
            <div className="block py-5.5 px-6 rounded-xl bg-background shadow-[var(--clr-3)_0px_4px_24px_0px]">
              <h3 className="block mb-1.5 text-color-001 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
                MCP Clients
              </h3>
              {" "}
              <p className="block text-lg font-medium leading-[1.8125rem]">
                AI applications that communicate with MCP servers.
              </p>
              {" "}
              <p className="block text-lg font-medium leading-[1.8125rem]">
                <a className="inline-block mt-2 text-primary font-semibold cursor-pointer hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] hover:underline" data-component="link" href="/help-center/connect-claude-to-dataforseo-mcp-very-simple-guide" target="_blank">
                  {"Manual for Claude AI >>"}
                </a>
              </p>
              {" "}
            </div>
            {" "}
            <div className="block py-5.5 px-6 rounded-xl bg-background shadow-[var(--clr-3)_0px_4px_24px_0px]">
              <h3 className="block mb-1.5 text-color-001 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
                MCP Server
              </h3>
              {" "}
              <p className="block text-lg font-medium leading-[1.8125rem]">
                A bridge between your AI model and DataForSEO APIs, managing requests and responses.
              </p>
              {" "}
              <p className="block text-lg font-medium leading-[1.8125rem]">
                <a className="inline-block mt-2 text-primary font-semibold cursor-pointer hover:border-clr-18 hover:text-clr-18 hover:outline-clr-18 hover:[text-decoration-color:var(--clr-18)] hover:underline" data-component="link" href="https://github.com/dataforseo/mcp-server-typescript" rel="nofollow noopener" target="_blank">
                  {"DataForSEO MCP Server >>"}
                </a>
              </p>
              {" "}
            </div>
            {" "}
            <div className="block py-5.5 px-6 rounded-xl bg-background shadow-[var(--clr-3)_0px_4px_24px_0px]">
              <h3 className="block mb-1.5 text-color-001 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
                MCP Host
              </h3>
              {" "}
              <p className="block text-lg font-medium leading-[1.8125rem]">
                The application managing MCP clients and controlling permissions and security polices.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="flex rounded-[14px] justify-center items-center overflow-hidden max-lg:order-[-1]">
            <img className="w-146.5 h-105.5 block max-w-full overflow-clip aspect-[auto_895/645] align-middle max-md:w-[21.4375rem] max-md:h-[15.4375rem] md:max-lg:w-180.5 md:max-lg:h-130 2xl:w-144 2xl:h-[25.9375rem]" data-component="image" alt="mcp img" height="645" sizes="(max-width: 895px) 100vw, 895px" src="/assets/cloned/images/f2eb9833ee05.webp" srcSet="/assets/cloned/images/f2eb9833ee05.webp 895w, /assets/cloned/images/e52c181cde88.webp 300w, /assets/cloned/images/90a96339619c.webp 768w" title="DataForSEO Model Context Protocol 2" width="895" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
