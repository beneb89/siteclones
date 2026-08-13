/** Dataforseo Mcp Server section. */
export default function DataforseoMcpServerSection() {
  return (
    <section className="block py-20 max-md:py-12">
      <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <div className="grid items-center gap-16 text-lg font-medium leading-[1.8125rem] grid-cols-2 max-lg:gap-10 max-lg:grid-cols-1">
          <div className="flex flex-col gap-4">
            <h2 className="border-l-4 border-solid border-l-primary block mb-6 pl-8 text-color-001 text-[2.125rem] font-bold leading-[2.5625rem] max-md:text-xl max-md:leading-6" data-component="heading">
              DataForSEO MCP server is made for every application
            </h2>
            {" "}
            <p className="block">
              The DataForSEO MCP server is designed to support AI-driven applications across different industries and use cases. It enables seamless access to structured SEO and marketing data, making it a reliable foundation for training language models, powering search intelligence tools, and enriching large-scale datasets.
            </p>
            {" "}
            <p className="block">
              You can install DataForSEO MCP locally or easily connect through the Docker container.
            </p>
            {" "}
            <div className="flex flex-wrap gap-4">
              <a className="h-[3.15rem] flex relative z-1 py-3.5 px-[2.1875rem] rounded-[3px] justify-center items-center gap-[0.4375rem] overflow-hidden text-color-009 text-sm font-extrabold leading-[1.375rem] uppercase bg-primary cursor-pointer hover:bg-clr-20 hover:shadow-[var(--clr-21)_0px_6.6975px_16.7438px_0px] hover:transform-[matrix(1,0,0,1,0,-1.67438)] focus:bg-clr-33 focus:shadow-[var(--clr-34)_0px_0.730936px_1.82734px_0px] focus:transform-[matrix(1,0,0,1,0,-0.182707)]" data-ditto-id="style-button-3" data-component="button" href="https://hub.docker.com/r/dataforseo/mcp" rel="nofollow noopener" target="_blank">
                Connect Now
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="flex flex-col gap-5">
            <div className="block p-7 rounded-[14px] bg-background shadow-[var(--clr-3)_0px_4px_24px_0px]">
              <div className="flex mb-4 items-center gap-4">
                <h3 className="block text-color-001 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
                  AI-powered SEO tools
                </h3>
                {" "}
              </div>
              {" "}
              <p className="block">
                The DataForSEO MCP server delivers structured, real-time SEO data optimized for use in AI-powered tools, enabling accurate insights and intelligent automation at scale.
              </p>
              {" "}
            </div>
            {" "}
            <div className="block p-7 rounded-[14px] bg-background shadow-[var(--clr-3)_0px_4px_24px_0px]">
              <div className="flex mb-4 items-center gap-4">
                <h3 className="block text-color-001 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
                  {"In-house SEO & marketing analysis"}
                </h3>
                {" "}
              </div>
              {" "}
              <p className="block">
                You get reliable, high-volume access to SEO and marketing data without any coding, making it easy to power up in-house analysis and reporting.
              </p>
              {" "}
            </div>
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
