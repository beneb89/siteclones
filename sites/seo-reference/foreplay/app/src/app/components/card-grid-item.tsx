import type { CardGridItemStyles } from "../_styles";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import { cn } from "../../lib/utils";
export type CardGridItemData = {
  variant: string;
  eyebrow: string;
  title: string;
  id: string;
  text: string;
  description?: string;
};
/** card grid item component. */
export default function CardGridItem({ d, styles }: { d: CardGridItemData; styles: CardGridItemStyles }) {
  return (
    <div className={cn("flex flex-col justify-start items-start row-start-[span_1] row-end-[span_1] pointer-events-none", styles.className)} id={d.id}>
      <div className="w-full flex mb-2 p-2 rounded-md justify-start items-center text-color-003 pointer-events-none">
        <div className="block text-xs [font-weight:550] leading-4 tracking-[2px] uppercase pointer-events-none">
          {d.text}
        </div>
      </div>
      <CardGridItemSlot1 d={d} />
    </div>
  );
}

function CardGridItemSlot1({ d }: { d: CardGridItemData }) {
  switch (d.variant) {
    case "track-and-analyze-competitor-advertising-2":
      return (
        <ul className="flex justify-start items-stretch flex-1 gap-3 [list-style-type:none] list-outside pointer-events-none" role="list">
          <li className="flex flex-col justify-start items-center flex-1 text-color-007 text-center pointer-events-none">
            <a className="h-43 flex relative max-w-full pt-2 px-2 flex-col justify-start items-center flex-1 cursor-pointer pointer-events-none" data-component="link" href="/swipe-file">
              <div className="flex flex-col justify-start items-center flex-1 pointer-events-none">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none whitespace-nowrap">
                    Swipe File
                  </div>
                </div>
                <div className="block flex-1 text-color-001 pointer-events-none" data-ditto-id="motion-div-2">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none">
                    {"Save & share creative inspiration."}
                  </div>
                </div>
              </div>
              <div className="w-22 h-22 block relative z-2 mt-4 -mb-5 [background-size:4752px_100%] bg-no-repeat pointer-events-none" style={{ backgroundImage: "url(\"/assets/cloned/images/e38ac27b9a21.png\")" }} />
            </a>
          </li>
          <li className="flex flex-col justify-start items-center flex-1 text-color-007 text-center pointer-events-none">
            <a className="h-43 flex relative max-w-full pt-2 px-2 flex-col justify-start items-center flex-1 cursor-pointer pointer-events-none" data-component="link" href="/discovery">
              <div className="flex flex-col justify-start items-center flex-1 pointer-events-none">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                    Discovery
                  </div>
                </div>
                <div className="block flex-1 text-color-001 pointer-events-none" data-ditto-id="motion-div-3">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none">
                    Ad search engine with over 100M ads.
                  </div>
                </div>
              </div>
              <div className="w-22 h-22 block relative z-2 mt-4 -mb-5 [background-size:5456px_100%] bg-no-repeat pointer-events-none" style={{ backgroundImage: "url(\"/assets/cloned/images/4d3a5b08197b.png\")" }} />
            </a>
          </li>
          <li className="flex flex-col justify-start items-center flex-1 text-color-007 text-center pointer-events-none">
            <a className="h-43 flex relative max-w-full pt-2 px-2 flex-col justify-start items-center flex-1 cursor-pointer pointer-events-none" data-component="link" href="/spyder-ad-spy">
              <div className="flex flex-col justify-start items-center flex-1 pointer-events-none">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                    {d.eyebrow}
                  </div>
                </div>
                <div className="block flex-1 text-color-001 pointer-events-none" data-ditto-id="motion-div-4">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none">
                    {d.title}
                  </div>
                </div>
              </div>
              <div className="w-22 h-22 block relative z-2 mt-4 -mb-5 [background-size:2728px_100%] bg-no-repeat pointer-events-none" style={{ backgroundImage: "url(\"/assets/cloned/images/159af60f8709.png\")" }} />
            </a>
          </li>
        </ul>
      );
    case "advertising-analytics-for-creative-teams":
      return (
        <ul className="flex justify-start items-stretch flex-1 gap-3 [list-style-type:none] list-outside pointer-events-none" role="list">
          <li className="flex flex-col justify-start items-center flex-1 text-color-007 text-center pointer-events-none">
            <a className="h-43 flex relative max-w-full pt-2 px-2 flex-col justify-start items-center flex-1 cursor-pointer pointer-events-none" data-component="link" href="/lens-creative-analytics">
              <div className="flex flex-col justify-start items-center flex-1 pointer-events-none">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                    {d.eyebrow}
                  </div>
                </div>
                <div className="block flex-1 text-color-001 pointer-events-none" data-ditto-id="motion-div-5">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none">
                    {d.title}
                  </div>
                </div>
              </div>
              <div className="w-22 h-22 block relative z-2 mt-4 -mb-5 [background-size:1848px_100%] bg-no-repeat pointer-events-none" style={{ backgroundImage: "url(\"/assets/cloned/images/14d876061258.png\")" }} />
            </a>
          </li>
          <li className="flex flex-col justify-start items-center flex-1 text-color-007 text-center pointer-events-none">
            <a className="h-43 flex relative max-w-full pt-2 px-2 flex-col justify-start items-center flex-1 cursor-pointer pointer-events-none" data-component="link" href="/briefs">
              <div className="flex flex-col justify-start items-center flex-1 pointer-events-none">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                    Briefs
                  </div>
                </div>
                <div className="block flex-1 text-color-001 pointer-events-none" data-ditto-id="motion-div-6">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none">
                    {d.description}
                  </div>
                </div>
              </div>
              <div className="w-22 h-22 block relative z-2 mt-4 -mb-5 [background-size:4840px_100%] bg-no-repeat pointer-events-none" style={{ backgroundImage: "url(\"/assets/cloned/images/bd165687ddd7.png\")" }} />
            </a>
          </li>
        </ul>
      );
    case "chrome-extension":
      return (
        <ul className="w-full grid justify-start items-center gap-3 grid-cols-[191.5px_191.5px_191.5px_191.5px] [grid-auto-columns:1fr] justify-items-stretch [list-style-type:none] list-outside pointer-events-none 2xl:grid-cols-[231.5px_231.5px_231.5px_231.5px]" role="list">
          <li className="list-item pointer-events-none">
            <a className="h-15 flex max-w-full p-2 justify-start items-center gap-3 text-primary cursor-pointer pointer-events-none hover:opacity-[0.685296] focus:opacity-[0.994926]" data-component="link" href="https://chromewebstore.google.com/detail/ad-library-save-facebook/eaancnanphggbfliooildilcnjocggjm" target="_blank">
              <div className="w-11 h-11 flex relative p-2.5 rounded-xl justify-center items-center gap-4 grid-cols-[1fr_1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] bg-surface pointer-events-none">
                <div className="w-6 h-6 flex justify-center items-center pointer-events-none">
                  <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-primary before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-primary after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                    <Icon2 />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start text-color-001 pointer-events-none">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none whitespace-nowrap">
                    {d.title}
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="list-item pointer-events-none">
            <a className="h-15 flex max-w-full p-2 justify-start items-center gap-3 text-primary cursor-pointer pointer-events-none hover:opacity-[0.685283] focus:opacity-[0.998874]" data-component="link" href="/mcp">
              <div className="w-11 h-11 flex relative p-2.5 rounded-xl justify-center items-center gap-4 grid-cols-[1fr_1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] bg-surface pointer-events-none">
                <div className="w-6 h-6 flex justify-center items-center pointer-events-none">
                  <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-primary before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-primary after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                    <Icon3 />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start text-color-001 pointer-events-none">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                    MCP
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="list-item pointer-events-none">
            <a className="h-15 flex max-w-full p-2 justify-start items-center gap-3 text-primary cursor-pointer pointer-events-none hover:opacity-[0.685294] focus:opacity-[0.994959]" data-component="link" href="/mobile-app">
              <div className="w-11 h-11 flex relative p-2.5 rounded-xl justify-center items-center gap-4 grid-cols-[1fr_1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] bg-surface pointer-events-none">
                <div className="w-6 h-6 flex justify-center items-center pointer-events-none">
                  <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-primary before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-primary after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                    <Icon4 />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start text-color-001 pointer-events-none">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none whitespace-nowrap">
                    Mobile App
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="list-item pointer-events-none">
            <a className="h-15 flex max-w-full p-2 justify-start items-center gap-3 text-primary cursor-pointer pointer-events-none hover:opacity-[0.685316] focus:opacity-[0.994961]" data-component="link" href="/api">
              <div className="w-11 h-11 flex relative p-2.5 rounded-xl justify-center items-center gap-4 grid-cols-[1fr_1fr] grid-rows-[auto_auto] [grid-auto-columns:1fr] bg-surface pointer-events-none">
                <div className="w-6 h-6 flex justify-center items-center pointer-events-none">
                  <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-primary before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-primary after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                    <Icon5 />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start text-color-001 pointer-events-none">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                    API
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      );
    default:
      return null;
  }
}
