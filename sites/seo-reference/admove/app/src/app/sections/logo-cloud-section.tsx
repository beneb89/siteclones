import Tile4 from "../components/tile4";
import Tile5 from "../components/tile5";
import Tile6 from "../components/tile6";
import Illustration2 from "../svgs/svg-illustration2";
import Icon from "../svgs/svg-icon";
import Logo, { type LogoData } from "../components/logo";
import { Tile4_styles, Tile5_styles, Tile6_styles, Tile6_styles2, Logo_styles } from "../_styles";
import { tile4Data as tile4DataContent, tile5Data as tile5DataContent, tile6Data as tile6DataContent, tile6Data2 as tile6Data2Content } from "../content";
const Logo_data: LogoData[] = [
    { ariaLabel: "LinkedIn", href: "https://www.linkedin.com/company/admove-ai/", icon: <>
              <use href="#svg12160305887" />
              </> },
    { ariaLabel: "X", href: "https://x.com/AdMove_AI", icon: <>
              <use href="#svg11814964187" />
              </> },
    { ariaLabel: "Instagram", href: "https://www.instagram.com/admove.ai/", icon: <>
              <use href="#svg10799547905" />
              </> },
    { ariaLabel: "YouTube", href: "https://www.youtube.com/@AdMoveAI", icon: <>
              <use href="#svg8775859752" />
              </> }
];
/** Logo Cloud section. */
export default function LogoCloudSection({ tile4Data = tile4DataContent, tile5Data = tile5DataContent, tile6Data = tile6DataContent, tile6Data2 = tile6Data2Content, logos = Logo_data } = {}) {
  return (
    <div className="w-full flex relative flex-col justify-center items-center content-center shrink-0 gap-2 overflow-hidden">
      <div className="contents min-w-0">
        <div className="w-full block relative shrink-0">
          <div className="flex relative flex-col justify-start items-center content-center overflow-hidden bg-color-004">
            <div className="w-full flex relative z-2 pt-10 pb-12 flex-col justify-end items-center content-center shrink-0 gap-25 overflow-hidden max-lg:pt-16 max-lg:pb-4 2xl:pb-4">
              <div className="w-full h-177 flex relative px-8 flex-col flex-wrap justify-start items-start content-start shrink-0 gap-y-8 max-md:h-[52.5375rem] max-lg:px-6 max-lg:gap-y-10 md:max-lg:h-[932.7px] 2xl:w-[73%] 2xl:h-178 2xl:px-0">
                <div className="w-full flex relative justify-start items-start content-start shrink-0 max-lg:grid max-lg:justify-center max-lg:gap-y-6 max-lg:gap-x-12 max-lg:[grid-auto-rows:minmax(0px,_1fr)] max-lg:grid-cols-2 max-lg:[align-items:initial] max-lg:[align-content:initial]">
                  <div className="w-76 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-21.5 max-md:w-[139.5px] max-lg:[align-self:start] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-84 2xl:w-87.5">
                    <div className="w-76 flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-lg:w-[9.3875rem] max-lg:gap-4 2xl:w-87.5">
                      <div className="w-78 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-[70.3px] max-lg:whitespace-pre max-lg:text-nowrap">
                        <h6 className="block text-background [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-xl leading-7 tracking-[-0.1px] [font-feature-settings:'salt',_'ss01']" data-component="heading" dir="auto">
                          Product
                        </h6>
                      </div>
                      <div className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-2.5">
                        {tile4Data.map((d, i) => <Tile4 key={i} d={d} styles={Tile4_styles[i]} />)}
                      </div>
                    </div>
                  </div>
                  <div className="w-76 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-2 max-md:w-[139.5px] max-lg:[align-self:start] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-84 2xl:w-87.5">
                    <div className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-md:w-[93.5%] max-lg:gap-4 md:max-lg:w-[39%]">
                      <div className="w-[91.1px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                        <h6 className="block text-background [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-xl leading-7 tracking-[-0.1px] [font-feature-settings:'salt',_'ss01']" data-component="heading" dir="auto">
                          Resources
                        </h6>
                      </div>
                      <div className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-2.5 max-lg:self-stretch">
                        {tile5Data.map((d, i) => <Tile5 key={i} d={d} styles={Tile5_styles[i]} />)}
                        <div className="w-[7.1875rem] block relative shrink-0">
                          <button className="h-6 flex text-muted-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base leading-6 text-center cursor-pointer focus:outline-clr-6" data-component="button" aria-label="Cookie Trigger">
                            <span className="block whitespace-nowrap text-nowrap">
                              Cookie Settings
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-76 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-2 max-md:w-[139.5px] max-lg:[align-self:start] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-84 2xl:w-87.5">
                    <div className="w-76 flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-lg:w-[179.5px] max-lg:gap-4 2xl:w-87.5">
                      <div className="w-[47.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                        <h6 className="block text-background [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-xl leading-7 tracking-[-0.1px] [font-feature-settings:'salt',_'ss01']" data-component="heading" dir="auto">
                          Tools
                        </h6>
                      </div>
                      <div className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-2.5">
                        {tile6Data.map((d, i) => <Tile6 key={i} d={d} styles={Tile6_styles[i]} />)}
                      </div>
                    </div>
                  </div>
                  <div className="w-76 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-6 max-md:w-[139.5px] max-lg:[align-self:start] max-lg:gap-4 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-84 2xl:w-87.5">
                    <div className="w-[85.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <h6 className="block text-background [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-xl leading-7 tracking-[-0.1px] [font-feature-settings:'salt',_'ss01']" data-component="heading" dir="auto">
                        Company
                      </h6>
                    </div>
                    <div className="flex relative flex-col justify-start items-start content-start shrink-0 gap-2.5">
                      {tile6Data2.map((d, i) => <Tile6 key={i} d={d} styles={Tile6_styles2[i]} />)}
                    </div>
                  </div>
                </div>
                <div className="w-full block relative opacity-20 shrink-0 aspect-[4.32762/1] max-lg:aspect-[4.26829/1] 2xl:aspect-[4.26829/1]">
                  <div className="h-[17.5625rem] block relative max-md:h-[4.7875rem] md:max-lg:h-[168.7px] 2xl:h-82">
                    <div className="h-full block absolute top-0 inset-x-0 shrink-0" aria-hidden="true">
                      <div className="h-full block">
                        <Illustration2 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex relative justify-between items-end content-end shrink-0 max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:gap-6 2xl:w-[94.5%]">
                  <div className="w-[32.7125rem] flex relative flex-col justify-end items-start content-start self-stretch shrink-0 gap-3 max-md:w-[20.4375rem] max-lg:order-[1] max-lg:[align-self:initial] max-lg:gap-[initial] md:max-lg:w-180">
                    <div className="w-[32.7125rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-md:w-[20.4375rem] max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] max-lg:[text-wrap:initial] md:max-lg:w-180">
                      <p className="block text-muted-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-base font-light leading-8 tracking-[0.16px] max-lg:leading-6.5" dir="auto">
                        Built with care in Transylvania ©️ 2026 - AdMove AI. All rights reserved
                        <br className="hidden max-lg:inline" />
                      </p>
                    </div>
                  </div>
                  <div className="w-[381.5px] flex relative flex-col justify-start items-end content-end shrink-0 gap-2 max-lg:w-[357.5px] max-lg:items-start max-lg:content-start">
                    <div className="flex relative justify-start items-center content-center shrink-0 gap-2 max-lg:items-start max-lg:content-start max-lg:gap-1">
                      <a className="h-10 flex relative py-2 px-3 rounded-lg justify-start items-center content-center shrink-0 gap-2 text-accent cursor-pointer max-lg:px-2 after:content-[''] after:block after:absolute after:inset-0 after:w-[189.5px] after:h-10 after:rounded-tl-lg max-lg:after:w-[181.5px]" data-component="link" href="https://join.slack.com/t/admove-ai/shared_invite/zt-33sfbx5ie-JVqUIVxgGC93kLjFsPtTBg" target="_blank">
                        <div className="w-[132.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                          <p className="block text-muted-foreground [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-sm font-medium leading-6 tracking-[0.14px] 2xl:text-background" dir="auto">
                            Join our community
                          </p>
                        </div>
                        <div className="w-[1.5625rem] h-6 block relative shrink-0" aria-hidden="true">
                          <div className="h-full block">
                            <Icon />
                          </div>
                        </div>
                      </a>
                      {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
