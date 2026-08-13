import Icon8 from "../svgs/svg-icon8";
import Icon9 from "../svgs/svg-icon9";
import Icon10 from "../svgs/svg-icon10";
import Icon11 from "../svgs/svg-icon11";
import Icon12 from "../svgs/svg-icon12";
import Icon13 from "../svgs/svg-icon13";
import Icon14 from "../svgs/svg-icon14";
import Icon15 from "../svgs/svg-icon15";
import Icon16 from "../svgs/svg-icon16";
export type CardGridItem2Data = {
  variant: string;
  eyebrow?: string;
  title: string;
  description?: string;
  label?: string;
};
/** card grid item component. */
export default function CardGridItem2({ d }: { d: CardGridItem2Data }) {
  switch (d.variant) {
    case "events-webinars":
      return (
        <div className="flex pt-4 pb-5 px-4 flex-col justify-start items-start gap-4 col-start-[span_9] col-end-[span_9] row-start-[span_1] row-end-[span_1] pointer-events-none" id="w-node-c8c18c55-fdeb-d4c6-6b4c-990677db8f7c-77db8ed6">
          <div className="w-full flex mb-2 p-2 rounded-md justify-start items-center text-color-003 pointer-events-none">
            <div className="block text-xs [font-weight:550] leading-4 tracking-[2px] uppercase pointer-events-none">
              Learn
            </div>
          </div>
          <ul className="grid self-stretch gap-3 grid-cols-[163.688px_163.703px_163.703px_163.703px_163.688px] [grid-auto-columns:1fr] [list-style-type:disc] list-outside pointer-events-none 2xl:grid-cols-[187.688px_187.703px_187.688px_187.703px_187.688px]" role="list">
            <li className="flex justify-start items-start flex-1 gap-3 [list-style-type:none] pointer-events-none">
              <a className="h-15 flex max-w-full p-2 flex-col justify-center items-start gap-1 cursor-pointer pointer-events-none hover:opacity-[0.80329] focus:opacity-[0.996829]" data-component="link" href="/university">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                    <div className="w-5 h-5 block pointer-events-none">
                      <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                        <Icon8 />
                      </div>
                    </div>
                    <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                      University
                    </div>
                  </div>
                </div>
                <div className="block flex-1 pointer-events-none">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none whitespace-nowrap">
                    {d.eyebrow}
                  </div>
                </div>
              </a>
            </li>
            <li className="flex justify-start items-start flex-1 gap-3 [list-style-type:none] pointer-events-none">
              <a className="h-15 flex max-w-full p-2 flex-col justify-center items-start gap-1 cursor-pointer pointer-events-none hover:opacity-[0.803307] focus:opacity-[0.996829]" data-component="link" href="/fireside">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                    <div className="w-5 h-5 block pointer-events-none">
                      <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                        <Icon9 />
                      </div>
                    </div>
                    <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                      {d.title}
                    </div>
                  </div>
                </div>
                <div className="block flex-1 pointer-events-none">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none whitespace-nowrap">
                    {"Live workshops + Q&A"}
                  </div>
                </div>
              </a>
            </li>
            <li className="flex justify-start items-start flex-1 gap-3 [list-style-type:none] pointer-events-none">
              <a className="h-15 flex max-w-full p-2 flex-col justify-center items-start gap-1 cursor-pointer pointer-events-none hover:opacity-[0.803307] focus:opacity-[0.99236]" data-component="link" href="https://help.foreplay.co/" target="_blank">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                    <div className="w-5 h-5 block pointer-events-none">
                      <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                        <Icon10 />
                      </div>
                    </div>
                    <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                      Knowledge Base
                    </div>
                  </div>
                </div>
                <div className="block flex-1 pointer-events-none">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none whitespace-nowrap">
                    Guides and tutorials
                  </div>
                </div>
              </a>
            </li>
            <li className="flex justify-start items-start flex-1 gap-3 [list-style-type:none] pointer-events-none">
              <a className="h-15 flex max-w-full p-2 flex-col justify-center items-start gap-1 cursor-pointer pointer-events-none hover:opacity-[0.803311] focus:opacity-[0.9995]" data-component="link" href="/experts">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                    <div className="w-5 h-5 block pointer-events-none">
                      <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                        <Icon11 />
                      </div>
                    </div>
                    <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                      Experts
                    </div>
                  </div>
                </div>
                <div className="block flex-1 pointer-events-none">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none whitespace-nowrap">
                    Free Swipe Files
                  </div>
                </div>
              </a>
            </li>
            <li className="flex justify-start items-start flex-1 gap-3 [list-style-type:none] pointer-events-none">
              <a className="h-15 flex max-w-full p-2 flex-col justify-center items-start gap-1 cursor-pointer pointer-events-none hover:opacity-[0.803307] focus:opacity-[0.996849]" data-component="link" href="/blog">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                    <div className="w-5 h-5 block pointer-events-none">
                      <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                        <Icon12 />
                      </div>
                    </div>
                    <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                      Blog
                    </div>
                  </div>
                </div>
                <div className="block flex-1 pointer-events-none">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none whitespace-nowrap">
                    {d.description}
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      );
    case "merch":
      return (
        <a className="h-[19.0625rem] border-l border-solid border-l-color-008 flex relative max-w-[17.1875rem] m-2.5 pt-[1.5625rem] pb-9 rounded-[18px] justify-center items-start col-start-[span_3] col-end-[span_3] row-start-[span_2] row-end-[span_2] overflow-hidden text-primary cursor-pointer pointer-events-none max-lg:hidden hover:opacity-[0.8033] focus:opacity-[0.99685]" data-component="link" href="https://shop.foreplay.co/" id="w-node-c8c18c55-fdeb-d4c6-6b4c-990677db8fb8-77db8ed6" target="_blank">
          <div className="flex relative z-2 max-w-50 flex-col justify-start items-center gap-1 text-color-001 text-center pointer-events-none">
            <div className="block text-color-005 pointer-events-none">
              <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                <div className="w-5 h-5 block pointer-events-none">
                  <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-005 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-center max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-005 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-center max-lg:after:w-auto max-lg:after:h-auto">
                    <Icon13 />
                  </div>
                </div>
                <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                  {d.title}
                </div>
              </div>
            </div>
            <div className="block flex-1 text-color-005 pointer-events-none">
              <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none whitespace-nowrap">
                {d.label}
              </div>
            </div>
          </div>
          <div className="w-[306.9px] h-[21.925rem] flex absolute -top-[0.1875rem] -left-[1.2rem] min-w-0 justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-primary before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-primary after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
            <video className="w-full h-[21.9375rem] block overflow-clip object-contain pointer-events-none" autoPlay height="100%" loop muted playsInline width="100%">
              <source className="inline text-clr-2 [font-family:'Times_New_Roman'] leading-4.5 tracking-[normal] text-start" src="/assets/cloned/videos/7f64eb29b825.webm" type="video/webm" />
              {" "}
            </video>
          </div>
        </a>
      );
    case "make-over-10k-mo-reffering-foreplay":
      return (
        <div className="border-t border-solid border-t-color-008 flex pt-4 pb-5 px-4 flex-col justify-start items-start gap-4 col-start-[span_9] col-end-[span_9] row-start-[span_1] row-end-[span_1] pointer-events-none" id="w-node-c8c18c55-fdeb-d4c6-6b4c-990677db8fc4-77db8ed6">
          <div className="w-full flex mb-2 p-2 rounded-md justify-start items-center text-color-003 pointer-events-none">
            <div className="block text-xs [font-weight:550] leading-4 tracking-[2px] uppercase pointer-events-none">
              earn
            </div>
          </div>
          <ul className="grid self-stretch gap-3 grid-cols-[163.688px_163.703px_163.703px_163.703px_163.688px] [grid-auto-columns:1fr] [list-style-type:disc] list-outside pointer-events-none 2xl:grid-cols-[187.688px_187.703px_187.688px_187.703px_187.688px]" role="list">
            <li className="flex justify-start items-start flex-1 gap-3 [list-style-type:none] pointer-events-none">
              <a className="h-20 flex max-w-full p-2 flex-col justify-center items-start gap-1 cursor-pointer pointer-events-none hover:opacity-[0.803311] focus:opacity-[0.996829]" data-component="link" href="/affiliates">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                    <div className="w-5 h-5 block pointer-events-none">
                      <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                        <Icon14 />
                      </div>
                    </div>
                    <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                      {d.eyebrow}
                    </div>
                  </div>
                </div>
                <div className="block flex-1 pointer-events-none">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none">
                    {d.title}
                  </div>
                </div>
              </a>
            </li>
            <li className="flex justify-start items-start flex-1 gap-3 [list-style-type:none] pointer-events-none">
              <a className="h-20 flex max-w-full p-2 flex-col justify-center items-start gap-1 cursor-pointer pointer-events-none hover:opacity-[0.803318] focus:opacity-[0.996828]" data-component="link" href="/work-with-brands">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                    <div className="w-5 h-5 block pointer-events-none">
                      <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                        <Icon15 />
                      </div>
                    </div>
                    <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                      Work with Brands
                    </div>
                  </div>
                </div>
                <div className="block flex-1 pointer-events-none">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none">
                    {d.description}
                  </div>
                </div>
              </a>
            </li>
            <li className="flex justify-start items-start flex-1 gap-3 [list-style-type:none] pointer-events-none">
              <a className="h-20 flex max-w-full p-2 flex-col justify-center items-start gap-1 cursor-pointer pointer-events-none hover:opacity-[0.803311] focus:opacity-[0.996849]" data-component="link" href="/agency-directory">
                <div className="block items-center text-color-002 pointer-events-none">
                  <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
                    <div className="w-5 h-5 block pointer-events-none">
                      <div className="flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                        <Icon16 />
                      </div>
                    </div>
                    <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
                      Agency Directory
                    </div>
                  </div>
                </div>
                <div className="block flex-1 pointer-events-none">
                  <div className="block text-sm leading-5 tracking-[-0.09px] pointer-events-none">
                    Discover the worlds best agencies.
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}
