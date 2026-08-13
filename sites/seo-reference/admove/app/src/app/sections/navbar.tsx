import Illustration from "../svgs/svg-illustration";
import Tile from "../components/tile";
import { Tile_styles } from "../_styles";
import { tileData as tileDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ tileData = tileDataContent } = {}) {
  return (
    <div className="w-full block relative z-8 shrink-0">
      <div className="contents">
        <div className="flex relative flex-col justify-start items-start content-start overflow-hidden bg-color-004 [backdrop-filter:blur(5px)] max-lg:min-w-90 max-lg:items-center max-lg:content-center">
          <div className="w-full flex relative py-2 pr-4 pl-6 justify-center items-center content-center shrink-0 gap-5 overflow-hidden max-lg:pl-4">
            <div className="w-full max-w-350 flex relative px-2 justify-center items-center content-center grow shrink-0 basis-0 gap-6 max-lg:justify-between max-lg:gap-[initial]">
              <div className="flex relative z-1 justify-center items-center content-center shrink-0 gap-[8.3px]">
                <a className="basis-full shrink-0 h-12 block relative text-accent cursor-pointer" data-component="link" href="/">
                  <div className="w-32.5 h-6.5 block absolute top-[0.5625rem] left-px shrink-0" aria-hidden="true">
                    <div className="h-full block">
                      <Illustration />
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex relative justify-start items-center content-center shrink-0 gap-1 max-lg:hidden">
                <div className="w-[112.7px] block relative shrink-0 max-lg:hidden">
                  <a className="h-10 flex relative py-1 px-4 rounded-full justify-start items-center content-center gap-2 bg-clr-0 cursor-pointer max-lg:hidden">
                    <div className="w-[56.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                      <p className="block text-background [font-family:'DM_Mono',_monospace] text-sm leading-6 tracking-[0.1px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'ss01'] max-lg:hidden" dir="auto">
                        Product
                      </p>
                    </div>
                    <div className="w-4 block relative shrink-0 aspect-square bg-background max-lg:hidden" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 6 6 L 12 0\\\" fill=\\\"transparent\\\" height=\\\"6px\\\" id=\\\"YQ5iVcvh8\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(6 9)\\\" width=\\\"12px\\\"/></svg>\"), none" }} />
                  </a>
                </div>
                <div className="w-[8.0625rem] block relative shrink-0 max-lg:hidden">
                  <a className="w-[8.0625rem] h-10 flex relative py-1 px-4 rounded-full justify-start items-center content-center gap-2 bg-clr-0 cursor-pointer max-lg:hidden">
                    <div className="w-[4.5625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                      <p className="block text-background [font-family:'DM_Mono',_monospace] text-sm leading-6 tracking-[0.1px] text-left uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'ss01'] max-lg:hidden" dir="auto">
                        Solutions
                      </p>
                    </div>
                    <div className="w-4 block relative shrink-0 aspect-square bg-background max-lg:hidden" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 0 0 L 6 6 L 12 0\\\" fill=\\\"transparent\\\" height=\\\"6px\\\" id=\\\"YQ5iVcvh8\\\" stroke-dasharray=\\\"\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" stroke=\\\"var(--43q7um, var(--foreground))\\\" transform=\\\"translate(6 9)\\\" width=\\\"12px\\\"/></svg>\"), none" }} />
                  </a>
                </div>
                {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
              </div>
              <div className="w-[43%] h-14 flex relative justify-end items-center content-center grow shrink-0 basis-0 gap-3 max-md:w-[49.5%] max-lg:h-10.5 max-lg:gap-2 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-[22.5%] 2xl:w-1/2">
                <div className="w-18 block relative shrink-0 max-lg:hidden">
                  <a className="h-[2.3125rem] flex relative pt-[0.4375rem] pb-1.5 px-3 rounded-sm justify-center items-center content-center gap-2 text-accent bg-clr-1 cursor-pointer max-lg:hidden" data-component="link" href="https://app.admove.ai/login">
                    <div className="w-12 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                      <p className="block text-background [font-family:'DM_Mono',_monospace] text-sm font-medium leading-6 text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] max-lg:hidden" dir="auto">
                        Log in
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-28 block relative shrink-0 max-lg:order-[1]">
                  <a className="h-[2.3125rem] flex relative pt-[0.4375rem] pb-1.5 px-3 rounded-sm justify-center items-center content-center gap-2 text-accent bg-clr-2 cursor-pointer" data-component="link" href="/early-access">
                    <div className="w-22 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
                      <p className="block text-color-004 [font-family:'DM_Mono',_monospace] text-sm font-medium leading-6 text-center uppercase [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01']" dir="auto">
                        Book a demo
                      </p>
                    </div>
                  </a>
                </div>
                <div className="hidden max-lg:w-10.5 max-lg:h-10.5 max-lg:block max-lg:relative max-lg:shrink-0 max-lg:order-[2] max-lg:overflow-hidden max-lg:cursor-pointer">
                  <div className="hidden max-lg:w-5 max-lg:h-0.5 max-lg:block max-lg:absolute max-lg:top-[25.3px] max-lg:left-[0.6875rem] max-lg:rounded-[10px] max-lg:shrink-0 max-lg:overflow-hidden max-lg:bg-clr-3" />
                  <div className="hidden max-lg:w-5 max-lg:h-0.5 max-lg:block max-lg:absolute max-lg:top-[0.925rem] max-lg:left-[0.6875rem] max-lg:rounded-[10px] max-lg:shrink-0 max-lg:overflow-hidden max-lg:bg-clr-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
