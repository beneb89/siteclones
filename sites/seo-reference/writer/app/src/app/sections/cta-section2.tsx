import ListRow4, { type ListRow4Data } from "../components/list-row4";
import ListRow5, { type ListRow5Data } from "../components/list-row5";
import ListRow6, { type ListRow6Data } from "../components/list-row6";
import ListRow7, { type ListRow7Data } from "../components/list-row7";
import Logo3 from "../components/logo3";
import { ListRow4_styles, ListRow5_styles, ListRow7_styles, Logo3_styles } from "../_styles";
import { logos as logosContent, ctaSection2Content } from "../content";
const ListRow4_data: ListRow4Data[] = [
    { id: "menu-item-38", href: "/trust/", label: "Trust" },
    { id: "menu-item-41", href: "/product/ai-studio/", label: "AI Studio" },
    { id: "menu-item-36891", href: "/product/graph-based-rag/", label: "Graph RAG" },
    { id: "menu-item-34375", href: "/llms/", label: "Palmyra LLMs" },
    { id: "menu-item-55232", href: "/product/writer-agent/", label: "WRITER Agent" },
    { id: "menu-item-44", href: "https://app.writer.com/register?", label: "Try for free" },
    { id: "menu-item-43", href: "https://go.writer.com/demo?", label: "Request a demo" },
    { id: "menu-item-62709", href: "/", label: "Enterprise AI platform" }
];
const ListRow5_data: ListRow5Data[] = [
    { id: "menu-item-49", href: "/guides/", label: "Guides" },
    { id: "menu-item-47", href: "/blog/", label: "AI blog" },
    { id: "menu-item-34376", href: "/agents/", label: "AI Agent Library" },
    { id: "menu-item-47814", href: "/engineering/", label: "Engineering blog" },
    { id: "menu-item-27642", href: "/blog/ai-agents/", label: "Enterprise AI agents" },
    { id: "menu-item-34377", href: "/blog/geo-aeo-optimization/", ariacurrent: "page", label: "SEO AEO GEO" },
    { id: "menu-item-34379", href: "/agents/blog-title/", label: "Blog title generator" },
    { id: "menu-item-36927", href: "/ai-roi-calculator/", label: "Marketing AI ROI calculator" }
];
const ListRow6_data: ListRow6Data[] = [
    { id: "menu-item-39526", href: "/company/about/", label: "About" },
    { id: "menu-item-57", href: "/company/careers/", label: "Careers" },
    { id: "menu-item-3604", href: "/partners/", label: "Partners" },
    { id: "menu-item-40628", href: "/legal/", label: "Legal hub" },
    { id: "menu-item-34378", href: "/newsroom/", label: "Newsroom" },
    { id: "menu-item-58", href: "/company/contact/", label: "Contact us" }
];
const ListRow7_data: ListRow7Data[] = [
    { id: "menu-item-62", href: "https://status.writer.com/?", label: "Status" },
    { id: "menu-item-60", href: "https://support.writer.com/?", label: "Help center" },
    { id: "menu-item-66188", href: "https://trustcenter.writer.com/?", label: "Trust center" },
    { id: "menu-item-47647", href: "https://academy.writer.com/?", label: "AI Academy" },
    { id: "menu-item-61", href: "https://dev.writer.com/?", label: "Developer docs" }
];
/** Cta section. */
export default function CtaSection2({ listRow4Data = ListRow4_data, listRow5Data = ListRow5_data, listRow6Data = ListRow6_data, listRow7Data = ListRow7_data, logos = logosContent, content = ctaSection2Content } = {}) {
  return (
    <div className="block max-w-270 mx-25 px-[0.9375rem] max-md:px-[1.95rem] max-md:max-w-none max-md:mx-0 md:max-lg:max-w-162.5 md:max-lg:mx-[3.6875rem] 2xl:mx-105">
      <div className="flex py-20 justify-start items-stretch max-md:py-[46.9px] max-lg:flex-col md:max-lg:py-[3.8125rem]">
        <div className="w-47.5 block shrink-0 max-md:w-[312.5px] max-md:mb-[1.4625rem] md:max-lg:w-155 md:max-lg:mb-7.5">
          <div className="block">
            <img className="w-20.5 h-[5.1875rem] inline max-w-full overflow-clip" data-component="image" alt="WRITER" src="/assets/cloned/svg/67f7f4ceae55.svg" />
          </div>
          {" "}
        </div>
        {" "}
        <ul className="w-full flex justify-between items-stretch [list-style-type:disc] list-outside max-md:-mb-7.5 max-md:flex-wrap" id="menu-menu-footer">
          <li className="w-44 list-item [list-style-type:none] max-md:w-[156.3px] max-md:mb-7.5 md:max-lg:w-32" id="menu-item-36">
            <a className="inline text-background [font-family:Poppins,_sans-serif] text-xl font-semibold leading-[1.9375rem] cursor-pointer pointer-events-none max-md:leading-[1.1875rem] max-md:[font-size:inherit] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]" data-component="link" href={content.actions[0].href}>
              {content.actions[0].label}
            </a>
            {" "}
            <ul className="block pt-5 [list-style-type:circle] list-outside max-md:pt-[0.975rem]">
              {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
            </ul>
            {" "}
          </li>
          <li className="w-[13.4375rem] list-item [list-style-type:none] max-md:w-[156.3px] max-md:mb-7.5 md:max-lg:w-41" id="menu-item-45">
            <a className="inline text-background [font-family:Poppins,_sans-serif] text-xl font-semibold leading-[1.9375rem] cursor-pointer pointer-events-none max-md:leading-[1.1875rem] max-md:[font-size:inherit] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]" data-component="link" href={content.actions[1].href}>
              {content.actions[1].label}
            </a>
            {" "}
            <ul className="block pt-5 [list-style-type:circle] list-outside max-md:pt-[0.975rem]">
              {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles[i]} />)}
            </ul>
            {" "}
          </li>
          <li className="w-[6.4375rem] list-item [list-style-type:none] max-md:w-[156.3px] max-md:mb-7.5 md:max-lg:w-[4.9375rem]" id="menu-item-54">
            <a className="inline text-background [font-family:Poppins,_sans-serif] text-xl font-semibold leading-[1.9375rem] cursor-pointer pointer-events-none max-md:leading-[1.1875rem] max-md:[font-size:inherit] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]" data-component="link" href={content.actions[2].href}>
              {content.actions[2].label}
            </a>
            {" "}
            <ul className="block pt-5 [list-style-type:circle] list-outside max-md:pt-[0.975rem]">
              {listRow6Data.map((d, i) => <ListRow6 key={i} d={d} />)}
            </ul>
            {" "}
          </li>
          <li className="w-[7.8125rem] list-item [list-style-type:none] max-md:w-[156.3px] max-md:mb-7.5 md:max-lg:w-23.5" id="menu-item-59">
            <a className="inline text-background [font-family:Poppins,_sans-serif] text-xl font-semibold leading-[1.9375rem] cursor-pointer pointer-events-none max-md:leading-[1.1875rem] max-md:[font-size:inherit] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]" data-component="link" href={content.actions[3].href}>
              {content.actions[3].label}
            </a>
            {" "}
            <ul className="block pt-5 [list-style-type:circle] list-outside max-md:pt-[0.975rem]">
              {listRow7Data.map((d, i) => <ListRow7 key={i} d={d} styles={ListRow7_styles[i]} />)}
            </ul>
            {" "}
          </li>
        </ul>
        {" "}
      </div>
      {" "}
      <aside className="block" id="blog-above-footer-wr">
        <section className="block" id="block-18">
          <div className="border-t border-solid border-t-color-002 border-b border-b-color-002 block py-[2.1875rem] max-md:py-[1.4625rem]">
            <div className="flex -mx-1 flex-wrap items-center max-lg:-mx-[0.9375rem]">
              <div className="w-[33.0625rem] block relative max-w-[50%] px-1 shrink-0 basis-1/2 max-md:w-[342.5px] max-lg:max-w-full max-md:mb-[0.975rem] max-lg:px-[0.9375rem] max-lg:basis-full md:max-lg:w-162.5 md:max-lg:mb-5">
                <div className="block mb-[0.3125rem] text-background [font-family:Poppins,_sans-serif] text-xl font-semibold leading-[1.9375rem] max-md:leading-[1.1875rem] max-md:[font-size:inherit] md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.4375rem]">
                  Get the latest updates about enterprise AI
                </div>
                {" "}
                <div className="block text-background [font-family:Poppins,_sans-serif] leading-7 max-md:leading-[1.375rem]">
                  Subscribe to Writer’s Brief
                </div>
                {" "}
              </div>
              {" "}
              <div className="w-[33.0625rem] block relative max-w-[50%] px-1 shrink-0 basis-1/2 max-md:w-[342.5px] max-lg:max-w-full max-lg:px-[0.9375rem] max-lg:basis-full md:max-lg:w-162.5">
                <div className="block relative">
                  <div className="block">
                    <div className="block" id="hbspt-form-1786580341000-5435819881">
                      <form className="flex rounded-[72px] justify-start items-stretch" id="hsForm_e71e8765-d60a-4fd2-a179-0a7fee071f34" target="target_iframe_e71e8765-d60a-4fd2-a179-0a7fee071f34">
                        <div className="block relative -mr-10 grow max-md:-mr-[1.95rem]">
                          <div className="h-full block">
                            <input className="w-full h-[3.4375rem] block py-px pr-12.5 pl-[1.6875rem] rounded-tl-[72px] rounded-bl-[72px] overflow-clip text-background [font-family:Poppins,_sans-serif] leading-[1.125rem] bg-clr-4 cursor-text max-md:pr-[2.4375rem] max-md:pl-[1.3125rem] max-md:leading-[0.875rem]" data-ditto-id="style-email-e71e8765-d60a-4fd2-a179-0a7fee071f34" data-component="input" id="email-e71e8765-d60a-4fd2-a179-0a7fee071f34" name="email" placeholder="Add your email*" type="email" value="" />
                          </div>
                        </div>
                        <div className="w-37.5 block max-w-[50%] shrink-0 max-md:w-[5.075rem]">
                          <div className="block">
                            <input className="w-full h-[3.4375rem] border-2 border-solid border-border flex relative max-w-full py-3 px-2.5 rounded-[82px] justify-center items-center overflow-clip align-middle text-background [font-family:Poppins,_sans-serif] text-lg font-semibold leading-[1.6875rem] text-center whitespace-nowrap text-nowrap bg-border cursor-pointer hover:bg-clr-9 hover:border-clr-9" data-component="button" type="submit" value="→" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
        </section>
        <section className="block" id="block-17" />
      </aside>
      {" "}
      <div className="block py-10 text-left max-md:py-[1.95rem] max-lg:text-center">
        <div className="flex -mx-[0.9375rem] flex-wrap items-center">
          <div className="w-112.5 block relative max-w-[41.6667%] px-[0.9375rem] shrink-0 basis-[41.6667%] order-[1] max-md:w-[342.5px] max-lg:max-w-full max-lg:basis-full md:max-lg:w-162.5">
            <div className="block text-background [font-family:Poppins,_sans-serif] text-sm font-semibold leading-[1.3125rem] tracking-[4.2px] uppercase whitespace-nowrap text-nowrap max-md:text-[0.6875rem] max-md:leading-4 max-md:tracking-[3.28px]">
              {" © 2026 WRITER"}
            </div>
            {" "}
          </div>
          {" "}
          <div className="w-45 block relative max-w-[16.6667%] px-[0.9375rem] shrink-0 basis-1/6 order-[2] text-center max-md:w-[342.5px] max-lg:max-w-full max-lg:basis-full max-lg:order-[-1] max-lg:[text-align:inherit] md:max-lg:w-162.5">
            <ul className="flex justify-center items-stretch [list-style-type:disc] list-outside">
              {logos.map((d, i) => <Logo3 key={i} d={d} styles={Logo3_styles[i]} />)}
            </ul>
          </div>
          {" "}
          <div className="block relative max-w-[41.6667%] px-[0.9375rem] shrink-0 basis-[41.6667%] order-[3] text-right max-lg:max-w-full max-md:my-[0.975rem] max-lg:basis-full max-lg:order-[initial] max-lg:[text-align:inherit] md:max-lg:my-5">
            <ul className="w-full max-w-93.5 inline-flex justify-start items-stretch [list-style-type:disc] list-outside max-md:flex-wrap max-md:justify-center">
              <li className="list-item relative mr-1.5 pr-2.5 whitespace-nowrap text-nowrap [list-style-type:none] after:content-['|'] after:block after:absolute after:top-px after:right-0 after:bottom-[0.2rem] after:left-[13.5625rem] after:w-[0.1875rem] after:h-[1.05rem] after:text-background after:text-sm after:font-semibold after:leading-[1.0625rem] after:text-right max-md:after:bottom-[2.9px] max-md:after:left-[209.3px] max-md:after:w-[5.3px] max-md:after:h-[13.1px] max-md:after:text-[0.6875rem] max-md:after:leading-[0.8125rem] max-md:after:tracking-[3.28px] max-lg:after:text-center" />
              <li className="list-item relative mr-1.5 pr-2.5 whitespace-nowrap text-nowrap [list-style-type:none] after:content-['|'] after:block after:absolute after:top-px after:right-0 after:bottom-[0.2rem] after:left-16 after:w-[0.1875rem] after:h-[1.05rem] after:text-background after:text-sm after:font-semibold after:leading-[1.0625rem] after:text-right max-md:after:bottom-[2.9px] max-md:after:left-[52.7px] max-md:after:w-[5.3px] max-md:after:h-[13.1px] max-md:after:text-[0.6875rem] max-md:after:leading-[0.8125rem] max-md:after:tracking-[3.28px] max-lg:after:text-center">
                <a className="h-full inline text-background [font-family:Poppins,_sans-serif] text-sm font-semibold leading-[1.3125rem] tracking-[2px] uppercase cursor-pointer max-md:text-[0.6875rem] max-md:leading-4 hover:opacity-[0.803298] focus:opacity-[0.99683]" data-component="link" href={content.actions[4].href} rel="nofollow">
                  {content.actions[4].label}
                </a>
              </li>
              <li className="list-item [list-style-type:none]">
                <a className="h-full inline text-background [font-family:Poppins,_sans-serif] text-sm font-semibold leading-[1.3125rem] tracking-[2px] uppercase whitespace-nowrap text-nowrap cursor-pointer max-md:text-[0.6875rem] max-md:leading-4 hover:opacity-[0.803305] focus:opacity-[0.996821]" data-component="link" href={content.actions[5].href} rel="nofollow">
                  {content.actions[5].label}
                </a>
              </li>
            </ul>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
