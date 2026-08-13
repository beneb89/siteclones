import DittoMotion from "./ditto/DittoMotion";
import HeroSection from "./sections/hero-section";
import Navbar from "./sections/navbar";
import MicrosoftAdsMcpSection from "./sections/microsoft-ads-mcp-section";
import WhatAnMcpSection from "./sections/what-an-mcp-section";
import FrequentlyAskedSection from "./sections/frequently-asked-section";
import FeatureGridSection from "./sections/feature-grid-section";
import ReadAnotherSection from "./sections/read-another-section";
import Footer from "./sections/footer";
import ListRow6, { type ListRow6Data } from "./components/list-row6";

const ListRow6_data: ListRow6Data[] = [
    { href: "https://www.linkedin.com/in/amjidali", rel: "noopener", target: "_blank", label: "Connect on LinkedIn" },
    { href: "https://www.skool.com/syncbricks-9813", rel: "noopener", target: "_blank", label: "Join the free community" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "More about Amjid" }
];

export default function Page() {
  return (
    <>
      <a className="h-[3.1rem] block absolute -top-200 right-108.5 left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] z-10000 py-3 px-6 rounded-br-lg rounded-bl-lg text-background font-semibold bg-primary transform-[matrix(1,0,0,1,-103,0)] cursor-pointer max-md:h-[4.7rem] max-md:-top-203 max-md:right-0 max-md:transform-[matrix(1,0,0,1,-93.75,0)] md:max-lg:-top-256 md:max-lg:right-44.5 2xl:-top-270 2xl:right-188.5" data-component="link" href="#main-content">
        Skip to main content
      </a>
      <HeroSection />
      {" "}
      <div className="h-full block fixed top-0 inset-x-0 -z-1 [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] pointer-events-none" style={{ backgroundImage: "radial-gradient(at 0% 0%, var(--color-002) 0%, var(--clr-0) 50%), radial-gradient(at 100% 100%, var(--clr-1) 0%, var(--clr-0) 50%)" }} aria-hidden="true" />
      <Navbar />
      {" "}
      <main className="block" id="main-content">
        <nav className="h-5 border-b border-solid border-b-border flex fixed inset-x-0 z-100 max-w-210 mt-6 mx-55 px-6 justify-between items-center gap-4 bg-clr-2 [backdrop-filter:blur(16px)_saturate(1.4)] max-md:h-11 max-lg:mx-0 md:max-lg:h-[19.1px] 2xl:mx-135" data-component="nav" aria-label="Breadcrumb">
          <ol className="h-full flex flex-wrap gap-2 [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[1.18px] uppercase [list-style-type:none] list-outside max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[1.1px] md:max-lg:tracking-[1.13px] 2xl:tracking-[1.2px]">
            <li className="flex items-center gap-2">
              <a className="block text-muted cursor-pointer hover:border-clr-4 hover:text-clr-4 hover:outline-clr-4 hover:[text-decoration-color:var(--clr-4)] focus:border-clr-7 focus:text-clr-7 focus:outline-clr-7 focus:[text-decoration-color:var(--clr-7)]" data-component="link" href="/">
                Home
              </a>
              {" "}
              <span className="block text-color-003" aria-hidden="true">
                /
              </span>
              {" "}
            </li>
            <li className="flex items-center gap-2">
              <a className="block text-muted cursor-pointer hover:border-clr-4 hover:text-clr-4 hover:outline-clr-4 hover:[text-decoration-color:var(--clr-4)] focus:border-clr-7 focus:text-clr-7 focus:outline-clr-7 focus:[text-decoration-color:var(--clr-7)]" data-component="link" href="/insights">
                Insights
              </a>
              {" "}
              <span className="block text-color-003" aria-hidden="true">
                /
              </span>
              {" "}
            </li>
            <li className="flex items-center gap-2">
              <span className="block max-w-52.5 overflow-hidden text-color-001 whitespace-nowrap text-nowrap" aria-current="page">
                Microsoft Ads MCP Server: How to Build, Run, and Use It (2026)
              </span>
              {" "}
            </li>
          </ol>
          {" "}
        </nav>
        <MicrosoftAdsMcpSection />
        {" "}
        <figure className="block max-w-170 mt-8 mx-auto px-6">
          <img className="w-full h-83 border border-solid border-border block max-w-full rounded-2xl overflow-clip object-cover aspect-[1200/630] max-md:h-43" data-component="image" alt="Microsoft Ads MCP Server: How to Build, Run, and Use It (2026), MCP, Microsoft Ads analysis by Amjid Ali." height="630" src="/assets/cloned/images/d3898cf9424d.png" width="1200" />
          {" "}
        </figure>
        <WhatAnMcpSection />
        <FrequentlyAskedSection />
        <aside className="block max-w-170 mt-12 mx-auto px-6" aria-labelledby="author-bio-title">
          <div className="border border-solid border-border grid p-8 rounded-2xl items-start gap-6 grid-cols-[120px_422px] bg-border max-md:gap-4 max-md:grid-cols-1">
            <img className="w-30 h-30 border-2 border-solid border-primary block max-w-full rounded-[50%] shrink-0 overflow-clip object-cover aspect-[auto_120/120] max-md:w-24 max-md:h-24" data-component="avatar" alt={"Amjid Ali, AI & Digital Transformation Leader, Melbourne"} height="120" src="/assets/cloned/images/2c2d304ac311.jpg" width="120" />
            {" "}
            <div className="flex flex-col gap-2">
              <p className="block text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[1.18px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[1.1px] md:max-lg:tracking-[1.13px] 2xl:tracking-[1.2px]">
                About the author
              </p>
              {" "}
              <h2 className="block [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[1.75rem] tracking-[-0.44px] max-md:text-xl max-md:leading-[1.5625rem] max-md:tracking-[-0.4px] md:max-lg:text-[1.3125rem] md:max-lg:leading-[1.6875rem] md:max-lg:tracking-[-0.42px]" data-component="heading" id="author-bio-title">
                Amjid Ali
              </h2>
              {" "}
              <p className="block text-muted [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[1.18px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[1.1px] md:max-lg:tracking-[1.13px] 2xl:tracking-[1.2px]">
                {"AI & Automation Lead, Dexterous Group Australia · n8n Ambassador · Melbourne"}
              </p>
              {" "}
              <p className="block mt-2 text-color-001 text-lg leading-[1.9375rem] max-md:text-base max-md:leading-[1.75rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.875rem] 2xl:leading-[2rem]">
                {" AI & Automation Lead at Dexterous Group Australia and an n8n Ambassador. Former Global CIO Champion (CIO 200) and Global CIO Finalist, now pursuing a doctorate in AI, automation and agentic workflows. 25+ years leading technology, business process management and data science. Executive coach and IT trainer with more than 200,000 students taught globally across IT, AI, ERP and BI. Speaks about practical use cases, not hype. "}
              </p>
              {" "}
              <ul className="flex mt-3 flex-wrap gap-y-3 gap-x-4 [list-style-type:none] list-outside" role="list">
                {ListRow6_data.map((d, i) => <ListRow6 key={i} d={d} />)}
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </aside>
        <FeatureGridSection />
        <ReadAnotherSection />
        {" "}
      </main>
      <Footer />
      {" "}
      <DittoMotion spec={{"waapi":[],"rotators":[],"reveals":[{"anchor":"motion-1","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 12)","transition":"transform 0.2s, border-color 0.2s"},{"anchor":"motion-2","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 12)","transition":"transform 0.2s, border-color 0.2s"},{"anchor":"motion-3","opacity":"0","transform":"matrix(1, 0, 0, 1, 0, 12)","transition":"transform 0.2s, border-color 0.2s"}],"marquees":[]}} />
    </>
  );
}
