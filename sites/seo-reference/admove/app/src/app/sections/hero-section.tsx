/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <div className="w-304 flex relative flex-col justify-start items-center content-center shrink-0 gap-10 overflow-clip max-md:w-[20.9375rem] max-lg:justify-center max-lg:gap-6 md:max-lg:w-182 2xl:w-330 2xl:gap-12">
      <div className="w-full flex relative max-w-full flex-col justify-start items-center content-center shrink-0 gap-[0.9375rem]">
        <div className="contents min-w-0">
          <div className="flex relative max-w-180 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
            <h1 className="block text-color-002 [font-family:'Source_Serif_4',_'Source_Serif_4_Placeholder',_serif] text-5xl font-light leading-[3.4375rem] tracking-[-1px] text-center [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-4xl max-lg:leading-[2.5625rem] max-lg:tracking-[-0.3px] max-lg:text-left 2xl:text-[3.25rem] 2xl:leading-[3.75rem]" data-component="heading" dir="auto">
              Meta’s MCP and CLI: What Advertisers Need to Know in 2026
            </h1>
          </div>
        </div>
        <div className="contents min-w-0">
          <div className="w-full flex relative max-w-180 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
            <p className="block text-clr-4 [font-family:'Geist_Mono',_'Geist_Mono_Placeholder',_monospace] text-sm leading-6 tracking-[0.7px] text-center uppercase max-lg:text-left" dir="auto">
              <time className="inline" dateTime="2026-05-19T00:00:00.000Z">
                May 19, 2026
              </time>
            </p>
          </div>
        </div>
      </div>
      <div className="contents min-w-0">
        <div className="w-200 h-100 block relative rounded-3xl shrink-0 max-md:w-[20.9375rem] max-lg:h-60 max-lg:rounded-[20px] max-lg:order-[1] md:max-lg:w-182 2xl:h-110">
          <div className="h-full block absolute top-0 inset-x-0 rounded-3xl max-lg:rounded-[20px]">
            <img className="w-full h-100 block rounded-3xl overflow-clip object-cover aspect-[auto_2752/1536] max-lg:h-60 max-lg:rounded-[20px] 2xl:h-110" data-component="image" alt="Guide on Meta's MCP and CLI" height="1536" sizes="800px" src="/assets/cloned/images/dbd833f71553.png" srcSet="/assets/cloned/images/8c8fe8adfee2.png 512w, /assets/cloned/images/65c4812b3426.png 1024w, /assets/cloned/images/30ecd18d7076.png 2048w, /assets/cloned/images/dbd833f71553.png 2752w" width="2752" />
          </div>
        </div>
      </div>
    </div>
  );
}
