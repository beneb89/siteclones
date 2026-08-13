export type FeatureGridItemData = {
  variant: string;
  title: string;
  description: string;
  stat: string;
  label?: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "read-the-set-up-guide":
      return (
        <div className="w-[353.3px] flex float-left mr-7.5 rounded-2xl flex-col flex-1 max-md:w-[19.6875rem] max-md:mr-0 max-lg:basis-[initial] md:max-lg:w-[351.5px] md:max-lg:mr-[0.9375rem] 2xl:w-115">
          <div className="w-[353.3px] h-full flex relative p-6 rounded-2xl flex-col [align-items:self-start] grow shrink-0 basis-0 gap-6 bg-cover [background-position:50%_50%] bg-no-repeat shadow-[var(--clr-5)_0px_5px_15px_0px] max-md:w-[19.6875rem] md:max-lg:w-[351.5px] 2xl:w-115" style={{ backgroundImage: "url(\"\")" }} id="teaser-d445a39793">
            <div className="h-full flex max-w-full flex-col [align-items:self-start] basis-full order-[2] gap-6">
              <p className="block [font-family:'Segoe_UI_Semibold',_SegoeUI-semiBold,_sans-serif] text-5xl leading-[3.625rem] max-lg:text-4xl max-lg:leading-[2.6875rem]">
                {" 01 "}
              </p>
              {" "}
              <h3 className="block [font-family:'Segoe_UI_Semibold',_SegoeUI-semiBold,_sans-serif] text-2xl font-semibold leading-[1.8125rem] text-left max-lg:text-xl max-lg:leading-6" data-component="heading">
                {" Read the set up guide "}
              </h3>
              {" "}
              <div className="block text-muted max-md:text-base max-md:leading-[1.3125rem]">
                <p className="block text-color-001 max-md:text-sm max-md:leading-[1.125rem]">
                  <a className="inline text-primary underline cursor-pointer hover:border-clr-7 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)]" data-component="link" aria-describedby="opens-in-new-window" href={"https://learn.microsoft.com/en-us/advertising/guides/mcp-setup?view=bingads-13&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1"} rel="noopener noreferrer" target="_blank">
                    {d.description}
                  </a>
                  .
                </p>
                {" "}
              </div>
              {" "}
              <div className="w-full flex items-center" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      );
    case "configure-the-mcp-server":
      return (
        <div className="w-[353.3px] flex float-left mr-7.5 rounded-2xl flex-col flex-1 max-md:w-[19.6875rem] max-lg:mr-0 max-lg:basis-[initial] md:max-lg:w-[351.5px] md:max-lg:shrink-0 md:max-lg:grow-[initial] 2xl:w-115">
          <div className="w-[353.3px] h-full flex relative p-6 rounded-2xl flex-col [align-items:self-start] grow shrink-0 basis-0 gap-6 bg-cover [background-position:50%_50%] bg-no-repeat shadow-[var(--clr-5)_0px_5px_15px_0px] max-md:w-[19.6875rem] md:max-lg:w-[351.5px] 2xl:w-115" style={{ backgroundImage: "url(\"\")" }} id="teaser-eaeb07e845">
            <div className="h-full flex max-w-full flex-col [align-items:self-start] basis-full order-[2] gap-6">
              <p className="block [font-family:'Segoe_UI_Semibold',_SegoeUI-semiBold,_sans-serif] text-5xl leading-[3.625rem] max-lg:text-4xl max-lg:leading-[2.6875rem]">
                {" 02 "}
              </p>
              {" "}
              <h3 className="block [font-family:'Segoe_UI_Semibold',_SegoeUI-semiBold,_sans-serif] text-2xl font-semibold leading-[1.8125rem] text-left max-lg:text-xl max-lg:leading-6" data-component="heading">
                {" Configure the MCP server "}
              </h3>
              {" "}
              <div className="block text-muted max-md:text-base max-md:leading-[1.3125rem]">
                <p className="block text-color-001 max-md:text-sm max-md:leading-[1.125rem]">
                  {d.description}
                </p>
                {" "}
              </div>
              {" "}
              <div className="w-full flex items-center" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      );
    case "ask-questions-and-get-insights-through-con":
      return (
        <div className="w-[353.3px] flex float-left rounded-2xl flex-col flex-1 max-md:w-[19.6875rem] max-lg:basis-[initial] md:max-lg:w-[351.5px] md:max-lg:shrink-0 md:max-lg:grow-[initial] 2xl:w-115">
          <div className="w-[353.3px] h-full flex relative p-6 rounded-2xl flex-col [align-items:self-start] grow shrink-0 basis-0 gap-6 bg-cover [background-position:50%_50%] bg-no-repeat shadow-[var(--clr-5)_0px_5px_15px_0px] max-md:w-[19.6875rem] md:max-lg:w-[351.5px] 2xl:w-115" style={{ backgroundImage: "url(\"\")" }} id="teaser-79eec2219f">
            <div className="h-full flex max-w-full flex-col [align-items:self-start] basis-full order-[2] gap-6">
              <p className="block [font-family:'Segoe_UI_Semibold',_SegoeUI-semiBold,_sans-serif] text-5xl leading-[3.625rem] max-lg:text-4xl max-lg:leading-[2.6875rem]">
                {" 03 "}
              </p>
              {" "}
              <h3 className="block [font-family:'Segoe_UI_Semibold',_SegoeUI-semiBold,_sans-serif] text-2xl font-semibold leading-[1.8125rem] text-left max-lg:text-xl max-lg:leading-6" data-component="heading">
                {" Start chatting "}
              </h3>
              {" "}
              <div className="block text-muted max-md:text-base max-md:leading-[1.3125rem]">
                <p className="block text-color-001 max-md:text-sm max-md:leading-[1.125rem]">
                  {d.title}
                </p>
                {" "}
                <p className="block text-color-001 max-md:text-sm max-md:leading-[1.125rem]">
                  <a className="inline text-primary underline cursor-pointer hover:border-clr-7 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)]" data-component="link" aria-describedby="opens-in-new-window" href={"https://learn.microsoft.com/en-us/advertising/guides/mcp-use-cases?view=bingads-13&t_id=d24957f6-f7ee-4aba-9401-1368dd71c3c1"} rel="noopener noreferrer" target="_blank">
                    {d.description}
                  </a>
                  .
                </p>
                {" "}
              </div>
              {" "}
              <div className="w-full flex items-center" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      );
    default:
      return null;
  }
}
