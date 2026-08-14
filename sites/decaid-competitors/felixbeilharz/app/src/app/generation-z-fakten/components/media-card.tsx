import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  id: string;
  title: string;
  text: string;
  text2: string;
  text3: string;
  text4: string;
  id2: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
  href: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("min-h-2.5 block relative mt-[1.5625rem] mb-12.5 p-[1.5625rem]", styles.className)}>
      <div className="w-270 h-full block absolute top-0 left-0 overflow-hidden bg-background [background-clip:padding-box] shadow-[var(--color-067)_6px_5px_12px_0px] [-webkit-background-clip:padding-box] max-md:w-[23.3125rem] md:max-lg:w-191.5" />
      {" "}
      <div className="h-full min-h-2.5 inline-block relative clear-both z-1 align-middle">
        <div className="block after:content-[''] after:block after:w-full after:h-0">
          <div className="block relative float-left z-3 mb-[1.5625rem] -ml-[1.5625rem] py-[0.3125rem] pr-[0.9375rem] pl-10 bg-primary">
            <h3 className="block text-color-005 [font-family:Oswald] text-[2.1875rem] leading-[3.0625rem]" data-component="heading" id={d.id}>
              {d.title}
            </h3>
          </div>
        </div>
        <div className="block my-5 py-2.5 px-px">
          <ul className="block text-color-001 [font-family:'Open_Sans'] text-lg leading-[1.6875rem] [list-style-type:none] list-outside">
            <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
              <div className="block relative z-1">
                <div className="box-content block p-2.5 leading-0 text-center">
                  <svg className="box-content w-4 h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 448 512" data-id="icon-angle-double-right-solid" data-name="" fill="currentColor">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                  </svg>
                </div>
              </div>
              <span className="block z-0 leading-[2.3125rem]">
                {d.text}
              </span>
            </li>
            <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
              <div className="block relative z-1">
                <div className="box-content block p-2.5 leading-0 text-center">
                  <svg className="box-content w-4 h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 448 512" data-id="icon-angle-double-right-solid" data-name="" fill="currentColor">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                  </svg>
                </div>
              </div>
              <span className="block z-0 leading-[2.3125rem]">
                {d.text2}
              </span>
            </li>
            <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
              <div className="block relative z-1">
                <div className="box-content block p-2.5 leading-0 text-center">
                  <svg className="box-content w-4 h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 448 512" data-id="icon-angle-double-right-solid" data-name="" fill="currentColor">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                  </svg>
                </div>
              </div>
              <span className="block z-0 leading-[2.3125rem]">
                Jahr: 2019
              </span>
            </li>
            <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
              <div className="block relative z-1">
                <div className="box-content block p-2.5 leading-0 text-center">
                  <svg className="box-content w-4 h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 448 512" data-id="icon-angle-double-right-solid" data-name="" fill="currentColor">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                  </svg>
                </div>
              </div>
              <span className="block z-0 leading-[2.3125rem]">
                {d.text3}
              </span>
            </li>
            <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
              <div className="block relative z-1">
                <div className="box-content block p-2.5 leading-0 text-center">
                  <svg className="box-content w-4 h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 448 512" data-id="icon-angle-double-right-solid" data-name="" fill="currentColor">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                  </svg>
                </div>
              </div>
              <span className="block z-0 leading-[2.3125rem]">
                {d.text4}
              </span>
            </li>
          </ul>
        </div>
        <div className="block p-px">
          <h3 className="block text-color-001 [font-family:Oswald] text-2xl leading-[2.125rem] max-lg:text-[1.375rem] max-lg:leading-[1.9375rem]" data-component="heading" id={d.id2}>
            Ergebnisse der GenZ-Studie:
          </h3>
        </div>
        <div className="block my-2.5">
          <div className="flex -ml-[0.9375rem] py-[0.9375rem] justify-between items-stretch max-lg:flex-wrap">
            <div className="block pl-[0.9375rem] grow max-lg:max-w-full max-lg:shrink-0 max-md:basis-[390px] md:max-lg:basis-[250px]">
              <div className="h-full flex relative max-w-full flex-col">
                <div className="block my-5 py-2.5 px-px">
                  <ul className="block text-color-001 [font-family:'Open_Sans'] text-lg leading-[1.6875rem] [list-style-type:none] list-outside">
                    <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
                      <div className="block relative z-1">
                        <div className="box-content block p-2.5 leading-0 text-center">
                          <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
                            <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
                          </svg>
                        </div>
                      </div>
                      <span className="block z-0 leading-[2.3125rem]">
                        {d.text5}
                      </span>
                    </li>
                    <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
                      <div className="block relative z-1">
                        <div className="box-content block p-2.5 leading-0 text-center">
                          <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
                            <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
                          </svg>
                        </div>
                      </div>
                      <span className="block z-0 leading-[2.3125rem]">
                        {d.text6}
                      </span>
                    </li>
                    <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
                      <div className="block relative z-1">
                        <div className="box-content block p-2.5 leading-0 text-center">
                          <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
                            <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
                          </svg>
                        </div>
                      </div>
                      <span className="block z-0 leading-[2.3125rem]">
                        {d.text7}
                      </span>
                    </li>
                    <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
                      <div className="block relative z-1">
                        <div className="box-content block p-2.5 leading-0 text-center">
                          <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
                            <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
                          </svg>
                        </div>
                      </div>
                      <span className="block z-0 leading-[2.3125rem]">
                        {d.text8}
                      </span>
                    </li>
                    <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
                      <div className="block relative z-1">
                        <div className="box-content block p-2.5 leading-0 text-center">
                          <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
                            <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
                          </svg>
                        </div>
                      </div>
                      <span className="block z-0 leading-[2.3125rem]">
                        {d.text9}
                      </span>
                    </li>
                    <li className="flex justify-start items-start content-start text-color-012 text-base leading-7 [word-break:break-word]">
                      <div className="block relative z-1">
                        <div className="box-content block p-2.5 leading-0 text-center">
                          <svg className="box-content w-auto h-4 inline-block overflow-hidden align-middle text-color-002 leading-4" data-component="icon" viewBox="0 0 32 32" data-id="icon-check" data-name="" fill="currentColor">
                            <path d="M29.333 10.267c0 0.4-0.133 0.8-0.533 1.2l-14.8 14.8c-0.267 0.267-0.667 0.4-1.067 0.4s-0.933-0.133-1.2-0.533l-2.4-2.267-6.267-6.267c-0.267-0.267-0.4-0.667-0.4-1.2s0.133-0.8 0.533-1.2l2.4-2.4c0.267-0.133 0.667-0.4 1.067-0.4s0.8 0.133 1.2 0.533l5.067 5.067 11.2-11.333c0.267-0.267 0.667-0.533 1.2-0.533 0.4 0 0.8 0.133 1.2 0.533l2.4 2.4c0.267 0.267 0.4 0.667 0.4 1.2z" />
                          </svg>
                        </div>
                      </div>
                      <span className="block z-0 leading-[2.3125rem]">
                        {d.text10}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table max-w-full mx-auto max-md:hidden">
          {" "}
          <a className="h-[3.8rem] border-2 border-solid border-color-005 inline-flex py-3.5 px-5.5 items-center overflow-hidden text-background [font-family:'Open_Sans'] text-2xl leading-[1.8125rem] tracking-[2px] text-center bg-color-030 [background-position:50%_50%] bg-no-repeat shadow-[var(--clr-20)_0px_8px_12px_0px] cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--color-005), var(--color-005))" }} data-component="link" href={d.href} target="_blank">
            <span className="block relative text-color-001 leading-0 before:content-[''] before:hidden before:absolute before:-inset-y-25 before:left-2.5 before:w-px before:bg-clr-2">
              {" "}
              <div className="box-content table">
                <svg className="box-content w-6 h-6 inline-block overflow-hidden align-middle leading-6" data-component="icon" viewBox="0 0 576 512" data-id="icon-external-link-alt-solid" data-name="" fill="currentColor">
                  <path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" />
                </svg>
              </div>
              {" "}
            </span>
            {" "}
            <span className="block relative pl-[0.9375rem] flex-1 text-color-001 before:content-[''] before:hidden before:absolute before:-inset-y-25 before:left-2.5 before:w-px before:bg-clr-2">
              <span className="block text-[1.625rem] font-semibold tracking-[normal] whitespace-nowrap">
                {d.label}
              </span>
              <span className="block text-[0.875rem] tracking-[normal]" />
            </span>
            {" "}
          </a>
          {" "}
        </div>
      </div>
      {" "}
    </div>
  );
}
