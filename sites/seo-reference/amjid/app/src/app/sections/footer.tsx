import ListRow7 from "../components/list-row7";
import ListRow8 from "../components/list-row8";
import Logo, { type LogoData } from "../components/logo";
import { listRow7Data as listRow7DataContent, listRow8Data as listRow8DataContent, listRow8Data2 as listRow8Data2Content } from "../content";
const Logo_data: LogoData[] = [
    { ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/amjidali", fill: "currentColor", icon: <>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </> },
    { ariaLabel: "YouTube", href: "https://www.youtube.com/channel/UC1ORA3oNGYuQ8yQHrC7MzBg", fill: "currentColor", icon: <>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </> },
    { ariaLabel: "SyncBricks", href: "https://syncbricks.com.au/", fill: "none", stroke: "currentColor", strokeWidth: "2", icon: <>
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </> }
];
/** Site footer. */
export default function Footer({ listRow7Data = listRow7DataContent, listRow8Data = listRow8DataContent, listRow8Data2 = listRow8Data2Content, logos = Logo_data } = {}) {
  return (
    <footer className="border-t border-solid border-t-border block pt-16 pb-8 px-12 max-md:px-4 md:max-lg:px-[30.7px]">
      <div className="block max-w-350 mx-auto">
        <div className="flex mb-12 flex-wrap justify-between items-start gap-8 max-lg:flex-col">
          <div className="w-full max-w-104 block">
            <div className="block mb-2 [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.75rem] leading-[2.8125rem] tracking-[-0.28px] max-md:text-2xl max-md:leading-[2.4375rem] max-md:tracking-[-0.24px] md:max-lg:text-[1.625rem] md:max-lg:leading-[2.625rem] md:max-lg:tracking-[-0.26px]">
              Amjid Ali
            </div>
            {" "}
            <p className="block text-muted-foreground text-sm leading-[1.375rem] max-md:text-[0.8125rem] max-md:leading-[1.3125rem]">
              {" AI & Digital Transformation Leader helping organisations build intelligent, data-driven ecosystems through agentic AI, MCP servers, workflow intelligence, finance & HR automation, and business intelligence. Melbourne, Australia. "}
            </p>
            {" "}
          </div>
          {" "}
          <div className="flex flex-wrap gap-16 max-lg:flex-col max-lg:gap-6">
            <div className="block">
              <h4 className="block mb-4 text-muted [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs font-medium leading-[1.1875rem] tracking-[2.37px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[2.2px] md:max-lg:tracking-[2.27px] 2xl:tracking-[2.4px]" data-component="heading">
                Site
              </h4>
              {" "}
              <ul className="block [list-style-type:none] list-outside">
                {listRow7Data.map((d, i) => <ListRow7 key={i} d={d} />)}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="block">
              <h4 className="block mb-4 text-muted [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs font-medium leading-[1.1875rem] tracking-[2.37px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[2.2px] md:max-lg:tracking-[2.27px] 2xl:tracking-[2.4px]" data-component="heading">
                Resources
              </h4>
              {" "}
              <ul className="block [list-style-type:none] list-outside">
                {listRow8Data.map((d, i) => <ListRow8 key={i} d={d} />)}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="block">
              <h4 className="block mb-4 text-muted [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs font-medium leading-[1.1875rem] tracking-[2.37px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[2.2px] md:max-lg:tracking-[2.27px] 2xl:tracking-[2.4px]" data-component="heading">
                Connect
              </h4>
              {" "}
              <ul className="block [list-style-type:none] list-outside">
                {listRow8Data2.map((d, i) => <ListRow8 key={i} d={d} />)}
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="border-t border-solid border-t-border flex pt-6 flex-wrap justify-between items-center gap-4 max-lg:flex-col max-lg:items-start">
          <div className="block">
            <p className="block text-color-003 text-xs leading-[1.1875rem] max-lg:text-[0.6875rem] max-lg:leading-[1.125rem]">
              {" © 2026 Amjid Ali, AI & Digital Transformation Leader, Melbourne. All rights reserved. "}
            </p>
            {" "}
            <p className="block mt-1 text-color-003 [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem]">
              {" ABN 99 257 759 706 "}
            </p>
            {" "}
            <p className="block mt-2 text-color-003 [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem]">
              {" Designed and developed with "}
              <a className="inline text-primary cursor-pointer" data-component="link" href="https://syncbricks.com.au/" rel="noopener" target="_blank">
                Wendy
              </a>
              {" (AI agent by SyncBricks). "}
            </p>
            {" "}
          </div>
          {" "}
          <div className="flex gap-3">
            {logos.map((d, i) => <Logo key={i} d={d} />)}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
