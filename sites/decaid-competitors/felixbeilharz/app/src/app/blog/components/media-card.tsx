import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  id: string;
  style: string;
  href: string;
  label: string;
  title: string;
  description: string;
  href2: string;
  href3: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <article className={cn("w-full block relative", styles.className)} id={d.id}>
      <div className="box-content h-full block">
        <div className="box-content h-full flex -ml-10 justify-between items-stretch max-lg:-ml-5 max-md:flex-wrap">
          <div className="block max-w-[50%] pl-10 grow max-md:max-w-full max-lg:pl-5 max-md:shrink-0 max-md:basis-[390px]">
            <div className="h-full flex relative flex-col max-md:min-h-36">
              <div className="w-[2.3125rem] h-7 min-h-2.5 block absolute top-2.5 right-2.5 z-14 min-w-0 ml-2.5 py-0.5 px-1 max-md:top-1.5 max-md:right-1.5 max-md:ml-1.5 md:max-lg:top-2 md:max-lg:right-2 md:max-lg:ml-2">
                <div className="w-[2.3125rem] h-full block absolute top-0 left-0 overflow-hidden bg-color-062 [background-clip:padding-box] [-webkit-background-clip:padding-box]" />
                {" "}
                <div className="h-6 min-h-px flex relative clear-both z-1 flex-col justify-center align-middle text-right">
                  <div className="block p-px [overflow-wrap:break-word]">
                    <p className="block pt-[0.3125rem] text-background text-[0.6875rem] leading-4 tracking-[1px]">
                      <span className="inline">
                        <a className="border-b border-dashed border-b-primary inline [font-family:'Open_Sans'] [background-size:1px_0px] [background-position:0px_100%] bg-repeat-x cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--clr-1) 0%, var(--clr-1) 100%)" }} data-component="link" href="/blog" title="Blog">
                          Blog
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                {" "}
              </div>
              <div className="h-[18.4375rem] min-h-2.5 block relative p-2.5 cursor-pointer max-md:h-45.5 max-md:p-1.5 md:max-lg:h-51.5 md:max-lg:p-2">
                <div className="w-122.5 h-full block absolute top-0 left-0 overflow-hidden bg-contain [background-position:50%_50%] bg-no-repeat [background-clip:padding-box] [-webkit-background-clip:padding-box] max-md:w-[19.0625rem] md:max-lg:w-[19.9375rem]" style={d.style} />
                {" "}
                <div className="h-full min-h-[17.1875rem] flex relative clear-both z-1 flex-col justify-center align-middle max-md:min-h-42.5 md:max-lg:min-h-47.5" />
                {" "}
              </div>
            </div>
          </div>
          <div className="block max-w-[50%] pl-10 grow max-md:max-w-full max-lg:pl-5 max-md:shrink-0 max-md:basis-[390px]">
            <div className="h-full flex relative p-[0.3125rem] flex-col max-md:min-h-36 max-lg:p-0">
              <div className="box-content block mt-5 pb-px px-px [overflow-wrap:break-word] max-lg:pb-0">
                <h2 className="box-content block pb-3.5 text-color-001 [font-family:Oswald] text-3xl leading-[2.4375rem] max-lg:pb-2 max-md:text-xl max-md:leading-6.5 md:max-lg:text-2xl md:max-lg:leading-[1.9375rem]" data-component="heading">
                  <span className="box-content inline">
                    <a className="box-content border-b border-dashed border-b-primary inline text-color-044 [background-size:1px_0px] [background-position:0px_100%] bg-repeat-x cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--clr-1) 0%, var(--clr-1) 100%)" }} data-component="link" href={d.href} title={d.label}>
                      {d.title}
                    </a>
                  </span>
                </h2>
              </div>
              <section className="block [overflow-wrap:break-word]">
                <p className="block pt-[0.3125rem] pb-2.5 leading-7 max-lg:text-sm max-lg:leading-[1.5625rem]">
                  {d.description}
                  <a className="border-b border-dashed border-b-primary inline text-primary [font-family:'Open_Sans'] [background-size:1px_0px] [background-position:0px_100%] bg-repeat-x cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--clr-1) 0%, var(--clr-1) 100%)" }} data-component="link" href={d.href2}>
                    ...
                  </a>
                </p>
              </section>
              <div className="w-59 block relative max-w-full mt-[0.3125rem]">
                <span className="block relative max-w-full overflow-hidden">
                  <img className="w-59 h-[0.4375rem] block max-w-full overflow-clip aspect-[auto_236/7] align-middle" data-component="image" alt="" height="7" sizes="auto, (max-width: 236px) 100vw, 236px" src="/assets/cloned/images/7979403858a7.png" srcSet="/assets/cloned/images/7979403858a7.png 2084w, /assets/cloned/images/449f1d1145be.png 768w, /assets/cloned/images/6c59784ce926.png 1536w, /assets/cloned/images/4d3ef9ef3e52.png 2048w" title="fb-icon-3" width="236" />
                </span>
              </div>
              <div className="h-[5.3125rem] min-h-2.5 block relative p-[0.3125rem] max-md:h-14.5">
                <div className="w-120 h-full block absolute top-0 left-0 overflow-hidden [background-clip:padding-box] [-webkit-background-clip:padding-box] max-md:w-[19.0625rem] md:max-lg:w-[19.9375rem]" />
                {" "}
                <div className="w-full h-full min-h-2.5 inline-block relative clear-both z-1 align-middle">
                  <div className="h-full block">
                    <div className="h-full flex -ml-[0.9375rem] py-[0.3125rem] justify-between items-stretch max-md:flex-wrap">
                      <div className="block max-w-[13.8%] pl-[0.9375rem] grow max-md:max-w-full max-md:shrink-0 max-md:basis-[390px]">
                        <div className="h-[4.0625rem] flex relative flex-col justify-center max-md:h-0">
                          <div className="block after:content-[''] after:block after:w-full after:h-0">
                            <div className="w-[3.25rem] block relative float-right z-3 max-w-full max-md:hidden md:max-lg:w-[29.7px]">
                              <span className="block relative max-w-full overflow-hidden">
                                <img className="w-13 h-[3.1875rem] block max-w-full overflow-clip aspect-[auto_52/51] align-middle md:max-lg:w-7.5 md:max-lg:h-[1.8125rem]" data-component="image" alt="" height="51" src="/assets/cloned/images/6bf43493d816.png" title="fb-icon-7-bblue" width="52" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block max-w-[86.2%] pl-[0.9375rem] grow max-md:max-w-full max-md:shrink-0 max-md:basis-[390px]">
                        <div className="h-full flex relative flex-col justify-center">
                          <div className="h-full block after:content-[''] after:block after:w-full after:h-0">
                            <div className="w-full block relative float-left z-3 max-w-[25%] max-md:max-w-[52%]">
                              <a className="w-full border-t border-solid border-t-color-024 inline-flex py-[0.3125rem] items-center overflow-hidden text-color-052 [font-family:Muli] text-xs leading-[0.875rem] tracking-[3px] text-center cursor-pointer max-lg:text-[0.6875rem] max-lg:leading-[0.8125rem] max-lg:tracking-[2px]" data-component="link" href={d.href3}>
                                {" "}
                                <span className="block relative flex-1 text-color-002 font-extrabold before:content-[''] before:hidden before:absolute before:-inset-y-25 before:left-2.5 before:w-px before:bg-clr-2">
                                  {" "}
                                  <span className="block [font-family:'Loved_by_the_King'] text-xl leading-[1.6875rem] tracking-[1px]">
                                    MEHR LESEN
                                  </span>
                                  {" "}
                                </span>
                                {" "}
                              </a>
                              {" "}
                            </div>
                            {" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {" "}
    </article>
  );
}
