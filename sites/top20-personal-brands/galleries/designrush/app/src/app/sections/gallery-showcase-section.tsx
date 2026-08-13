import ListRow2 from "../components/list-row2";
import ListRow3 from "../components/list-row3";
import ListRow4 from "../components/list-row4";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Icon8 from "../svgs/svg-icon8";
import Icon9 from "../svgs/svg-icon9";
import Icon10 from "../svgs/svg-icon10";
import MediaCard, { type MediaCardData } from "../components/media-card";
import Icon11 from "../svgs/svg-icon11";
import Icon12 from "../svgs/svg-icon12";
import { ListRow2_meta, ListRow3_meta, MediaCard_meta } from "../ditto-meta";
import { ListRow2_styles, ListRow4_styles, MediaCard_styles } from "../_styles";
import { listRow2Data as listRow2DataContent, listRow3Data as listRow3DataContent, listRow4Data as listRow4DataContent } from "../content";
const MediaCard_data: MediaCardData[] = [
    { alt: "Autonomys Website Design", imgSrc: "/assets/cloned/images/9828a6cdb713.webp", href: "/best-designs/websites/autonomys-website-design", href2: "/best-designs/websites/technology", label: "Technology", text: "1,453", title: "Autonomys", href3: "/agency/profile/koncepted-inc", text2: "Koncepted, Inc" },
    { alt: "AI Capts website design by Elux Space.", imgSrc: "/assets/cloned/images/60a928387c22.webp", href: "/best-designs/websites/ai-capts-website-design", href2: "/best-designs/websites/ai", label: "AI", text: "1,367", title: "AI Capts", href3: "/agency/profile/elux-space", text2: "Elux Space" },
    { alt: "Algoworks Website Design", imgSrc: "/assets/cloned/images/200e7c3435c2.webp", href: "/best-designs/websites/algoworks-website-design", href2: "/best-designs/websites/ai", label: "AI", text: "1,525", title: "Algoworks", href3: "/agency/profile/algoworks", text2: "Algoworks" },
    { alt: "Real Estate Developers Automate Website Design", imgSrc: "/assets/cloned/images/e2f5022e7250.webp", href: "/best-designs/websites/real-estate-developers-automate-website-design", href2: "/best-designs/websites/ai", label: "AI", text: "1,868", title: "Real Estate Developers Automate", href3: "/agency/profile/zapta-technologies", text2: "ZAPTA Technologies" },
    { alt: "Viewshape Website Design", imgSrc: "/assets/cloned/images/680dff7a3db3.webp", href: "/best-designs/websites/viewshape-website-design", href2: "/best-designs/websites/technology", label: "Technology", text: "1,650", title: "Viewshape", href3: "/agency/profile/notamedia", text2: "Notamedia" },
    { alt: "Sistema for GUK AI Website Design", imgSrc: "/assets/cloned/images/75baa4fcd7ee.webp", href: "/best-designs/websites/sistema-for-guk-ai-website-design", href2: "/best-designs/websites/technology", label: "Technology", text: "1,932", title: "Sistema for GUK AI", href3: "/agency/profile/kovdra-design-bureau", text2: "Kovdra Design Bureau" },
    { alt: "FuturAI Website Design", imgSrc: "/assets/cloned/images/33bfd037499d.webp", href: "/best-designs/websites/futurai-website-design", href2: "/best-designs/websites/technology", label: "Technology", text: "2,667", title: "FuturAI", href3: "/agency/profile/carlos-lastres", text2: "Carlos Lastres" }
];
/** Gallery Showcase section. */
export default function GalleryShowcaseSection({ listRow2Data = listRow2DataContent, listRow3Data = listRow3DataContent, listRow4Data = listRow4DataContent, mediaCardData = MediaCard_data } = {}) {
  return (
    <div className="block pt-12.5 pb-[103.5px] max-md:pt-8 max-md:pb-12.5 md:max-lg:pt-[37.5px] md:max-lg:pb-[62.1px] 2xl:pb-27.5">
      <div className="block max-w-370 px-[2.1875rem] mx-auto max-md:px-5 md:max-lg:px-[1.5625rem]">
        <div className="flex mb-7.5 flex-wrap justify-between gap-y-[1.5625rem] gap-x-10 max-lg:flex-col max-lg:items-start max-lg:mb-0">
          <section className="flex items-center grow text-4xl leading-[3.0625rem] max-md:flex-col max-lg:text-[1.75rem] max-lg:leading-9.5">
            <h2 className="block text-color-001 font-medium leading-[2.5625rem] max-lg:leading-[2rem]" data-component="heading">
              Best AI Website Designs
            </h2>
            <time className="flex items-center font-normal max-md:self-start before:content-[''] before:block before:w-[0.1875rem] before:h-8.5 before:mx-[0.9375rem] before:bg-primary max-md:before:hidden md:max-lg:before:w-[0.175rem]">
              August 2026
            </time>
            <strong className="block ml-75 pl-7.5 text-lg font-medium leading-[1.5rem] tracking-[1px] uppercase max-lg:mt-[1.5625rem] max-lg:ml-0 max-lg:pl-0 2xl:ml-125">
              {" 4,200+ Submitted Designs "}
            </strong>
          </section>
          <div className="w-full flex flex-col max-lg:mb-7.5">
            <div className="block max-lg:border max-lg:border-solid max-lg:border-clr-8 max-lg:rounded-lg max-lg:bg-background max-lg:shadow-[var(--clr-9)_0px_0px_50px_0px]">
              <label className="hidden relative py-[0.3125rem] px-5 items-center text-color-001 text-xl leading-[1.5625rem] cursor-default max-lg:h-13 max-lg:flex after:content-[''] after:block after:absolute after:inset-y-0 after:right-5 after:w-0 after:h-0 after:m-auto max-md:after:left-[18.8125rem] max-lg:after:w-3 max-lg:after:h-1.5 max-lg:after:my-[1.4375rem] max-lg:after:mx-0 md:max-lg:after:left-171">
                <strong className="inline font-medium max-lg:block">
                  Filters
                </strong>
              </label>
              <div className="flex items-start gap-4.5 max-lg:hidden">
                <div className="flex relative flex-wrap items-baseline gap-4.5">
                  <div className="block">
                    <div className="block relative">
                      <label className="hidden absolute -top-7.5 left-0 text-muted-foreground font-normal cursor-default pointer-events-none">
                        Industries
                      </label>
                      <button className="w-65 h-12.5 border border-solid border-border inline-flex relative py-[0.3125rem] px-4.5 rounded-lg items-center text-muted-foreground text-lg font-normal leading-[1.4375rem] text-center bg-background cursor-pointer after:content-[''] after:block after:absolute after:inset-y-0 after:right-3.5 after:left-58 after:w-3 after:h-1.5 after:my-[1.3125rem] max-lg:after:w-0 max-lg:after:h-0 max-lg:after:m-auto max-lg:after:left-auto" data-component="button" type="button">
                        <span className="block">
                          AI
                        </span>
                      </button>
                    </div>
                    <div className="w-302.5 h-115 block absolute top-[3.4375rem] left-0 z-1 opacity-0 min-w-full py-7.5 pr-7.5 pl-10 rounded-lg bg-background shadow-[var(--clr-10)_0px_8px_24px_0px] transform-[matrix(1,0,0,1,0,-4)] pointer-events-none">
                      <div className="block max-h-100 overflow-auto pointer-events-none">
                        <ul className="block gap-x-5 [list-style-type:none] list-outside pointer-events-none">
                          {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} meta={ListRow2_meta[i]} styles={ListRow2_styles[i]} />)}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="block relative">
                      <label className="hidden absolute -top-7.5 left-0 text-muted-foreground font-normal cursor-default pointer-events-none">
                        Tags
                      </label>
                      <button className="w-65 h-12.5 border border-solid border-border inline-flex relative py-[0.3125rem] px-4.5 rounded-lg items-center text-muted-foreground text-lg font-normal leading-[1.4375rem] text-center bg-background cursor-pointer after:content-[''] after:block after:absolute after:inset-y-0 after:right-3.5 after:left-58 after:w-3 after:h-1.5 after:my-[1.3125rem] max-lg:after:w-0 max-lg:after:h-0 max-lg:after:m-auto max-lg:after:left-auto" data-component="button" type="button">
                        <span className="block">
                          Tags
                        </span>
                      </button>
                    </div>
                    <div className="w-302.5 h-115 block absolute top-[3.4375rem] left-0 z-1 opacity-0 min-w-full py-7.5 pr-7.5 pl-10 rounded-lg bg-background shadow-[var(--clr-10)_0px_8px_24px_0px] transform-[matrix(1,0,0,1,0,-4)] pointer-events-none">
                      <div className="block max-h-100 overflow-auto pointer-events-none">
                        <ul className="block gap-x-5 [list-style-type:none] list-outside pointer-events-none">
                          {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} meta={ListRow3_meta[i]} />)}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="block relative">
                    <div className="block relative">
                      <label className="hidden absolute -top-7.5 left-0 text-muted-foreground font-normal cursor-default pointer-events-none">
                        Sort By
                      </label>
                      <button className="w-65 h-12.5 border border-solid border-border inline-flex relative py-[0.3125rem] px-4.5 rounded-lg items-center text-muted-foreground text-lg font-normal leading-[1.4375rem] text-center bg-background cursor-pointer after:content-[''] after:block after:absolute after:inset-y-0 after:right-3.5 after:left-58 after:w-3 after:h-1.5 after:my-[1.3125rem] max-lg:after:w-0 max-lg:after:h-0 max-lg:after:m-auto max-lg:after:left-auto" data-component="button" type="button">
                        <span className="block">
                          Sort By
                        </span>
                      </button>
                    </div>
                    <ul className="w-65 h-49 block absolute top-[3.4375rem] left-0 z-1 opacity-0 min-w-full py-[0.3125rem] rounded-lg [list-style-type:none] list-outside bg-background shadow-[var(--clr-10)_0px_8px_24px_0px] transform-[matrix(1,0,0,1,0,-4)] pointer-events-none">
                      {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} styles={ListRow4_styles[i]} />)}
                    </ul>
                  </div>
                </div>
                <form className="w-65 block relative ml-29 shrink-0 2xl:ml-79">
                  <input className="w-full h-12.5 border border-solid border-border inline-block py-[0.3125rem] pr-10 pl-4.5 rounded-lg overflow-clip text-muted-foreground text-lg font-normal leading-[1.4375rem] bg-background cursor-text" data-ditto-id="style-input" data-component="input" name="query" placeholder="Search by Keyword" type="text" value="" />
                  <button className="w-10 h-12.5 flex absolute top-0 right-0 justify-center items-center text-color-001 text-[0.8125rem] font-normal leading-4 text-center cursor-pointer" data-ditto-id="motion-button" data-component="button" type="submit">
                    <Icon6 />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="flex flex-wrap gap-15 max-lg:gap-[2.8125rem]">
            <div className="block max-w-[calc(33.3333%_-_40px)] max-md:max-w-none md:max-lg:max-w-[calc(50%_-_22.5px)]">
              <div className="h-full flex flex-col">
                <figure className="block relative rounded-lg overflow-hidden aspect-[4/3]">
                  <img className="w-full h-68 block max-w-full overflow-clip object-cover aspect-[auto_430/324] align-top text-clr-1 max-md:h-[15.6875rem] md:max-lg:h-63 2xl:h-[20.1875rem]" data-component="image" alt="ReadSpeaker AI website design by GoingClear." height="324" src="/assets/cloned/images/31ec3ac98b2a.webp" width="430" />
                  <figcaption className="w-[363.3px] h-[272.5px] flex absolute top-0 left-0 opacity-0 rounded-lg flex-col justify-center items-center gap-7.5 bg-clr-11 pointer-events-none">
                    <a className="w-[9.6875rem] h-13 min-h-13 flex py-[0.3125rem] px-3.5 rounded-lg justify-center items-center text-foreground text-xl font-normal leading-[1.5625rem] bg-background cursor-pointer pointer-events-none max-md:w-[20.9375rem] max-md:h-[251.3px] max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:min-w-0 max-lg:min-h-0 max-lg:p-0 max-lg:rounded-[initial] max-lg:[font-size:inherit] max-lg:[font-weight:inherit] max-lg:leading-[inherit] max-lg:[pointer-events:initial] md:max-lg:w-[336.5px] md:max-lg:h-[15.775rem]" data-component="link" href="/best-designs/websites/readspeaker-ai-website-design">
                      <div className="flex items-baseline gap-2 pointer-events-none max-lg:gap-[initial] max-lg:[pointer-events:initial]">
                        <span className="block pointer-events-none max-lg:[pointer-events:initial]">
                          View Design
                        </span>
                        <Icon7 />
                      </div>
                    </a>
                  </figcaption>
                </figure>
                <div className="flex pt-6 flex-col grow max-lg:pt-5.5">
                  <div className="h-[1.5625rem] min-h-[1.5625rem] flex mb-3 items-center gap-5">
                    <a className="h-[1.5625rem] min-h-[1.5625rem] flex py-[0.3125rem] px-3 rounded-[20px] items-center text-foreground text-[0.6875rem] font-medium leading-[0.875rem] uppercase bg-color-003 cursor-pointer hover:border-clr-27 hover:text-clr-27 hover:outline-clr-27 hover:[text-decoration-color:var(--clr-27)] focus:border-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" data-component="button" href="/best-designs/websites/ai">
                      AI
                    </a>
                    <div className="flex ml-[279.3px] items-center gap-[1.5625rem] text-sm font-medium leading-[1.125rem] max-md:ml-[15.6875rem] md:max-lg:ml-[252.5px] 2xl:ml-86.5">
                      <dl className="flex items-center gap-2">
                        <dt className="flex items-center">
                          <Icon8 />
                        </dt>
                        <dd className="block">
                          1
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <h3 className="block mb-2.5 text-2xl font-medium leading-[1.75rem]" data-component="heading">
                    ReadSpeaker AI
                  </h3>
                  <div className="h-8.5 min-h-8.5 flex items-center gap-[0.3125rem] font-normal md:max-lg:flex-wrap">
                    <span className="block shrink-0">
                      by
                    </span>
                    <a className="flex items-center gap-2 overflow-hidden text-accent text-lg leading-[1.4375rem] cursor-pointer hover:border-clr-21 hover:text-clr-21 hover:outline-clr-21 hover:[text-decoration-color:var(--clr-21)]" data-ditto-id="motion-link" data-component="link" href={"https://goingclear.com/?utm_source=designrush&utm_medium=campaign&utm_campaign=sponsorship"} rel="nofollow" target="_blank">
                      <strong className="block overflow-hidden font-medium whitespace-nowrap text-nowrap">
                        GoingClear
                      </strong>
                    </a>
                    <span className="w-8.5 h-8.5 flex ml-[0.3125rem] rounded-[20px] justify-center items-center shrink-0 bg-clr-12">
                      <Icon9 />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="block max-w-[calc(33.3333%_-_40px)] max-md:max-w-none md:max-lg:max-w-[calc(50%_-_22.5px)]">
              <div className="h-full flex flex-col">
                <figure className="block relative rounded-lg overflow-hidden aspect-[4/3]">
                  <img className="w-full h-68 block max-w-full overflow-clip object-cover aspect-[auto_430/324] align-top text-clr-1 max-md:h-[15.6875rem] md:max-lg:h-63 2xl:h-[20.1875rem]" data-component="image" alt="databahn website design" height="324" src="/assets/cloned/images/eb4d46324dff.webp" width="430" />
                  <figcaption className="w-[363.3px] h-[272.5px] flex absolute top-0 left-0 opacity-0 rounded-lg flex-col justify-center items-center gap-7.5 bg-clr-11 pointer-events-none">
                    <a className="w-[9.6875rem] h-13 min-h-13 flex py-[0.3125rem] px-3.5 rounded-lg justify-center items-center text-foreground text-xl font-normal leading-[1.5625rem] bg-background cursor-pointer pointer-events-none max-md:w-[20.9375rem] max-md:h-[251.3px] max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:min-w-0 max-lg:min-h-0 max-lg:p-0 max-lg:rounded-[initial] max-lg:[font-size:inherit] max-lg:[font-weight:inherit] max-lg:leading-[inherit] max-lg:[pointer-events:initial] md:max-lg:w-[336.5px] md:max-lg:h-[15.775rem]" data-component="link" href="/best-designs/websites/databahn-website-design">
                      <div className="flex items-baseline gap-2 pointer-events-none max-lg:gap-[initial] max-lg:[pointer-events:initial]">
                        <span className="block pointer-events-none max-lg:[pointer-events:initial]">
                          View Design
                        </span>
                        <Icon7 />
                      </div>
                    </a>
                  </figcaption>
                </figure>
                <div className="flex pt-6 flex-col grow max-lg:pt-5.5">
                  <div className="h-[1.5625rem] min-h-[1.5625rem] flex mb-3 items-center gap-5">
                    <a className="h-[1.5625rem] min-h-[1.5625rem] flex py-[0.3125rem] px-3 rounded-[20px] items-center text-foreground text-[0.6875rem] font-medium leading-[0.875rem] uppercase bg-color-003 cursor-pointer hover:border-clr-27 hover:text-clr-27 hover:outline-clr-27 hover:[text-decoration-color:var(--clr-27)] focus:border-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" data-component="button" href="/best-designs/websites/ai">
                      AI
                    </a>
                    <div className="flex ml-[191.3px] items-center gap-[1.5625rem] text-sm font-medium leading-[1.125rem] max-md:ml-[10.1875rem] md:max-lg:ml-[164.5px] 2xl:ml-64.5">
                      <dl className="flex items-center gap-2">
                        <dt className="flex items-center">
                          <Icon10 />
                        </dt>
                        <dd className="block">
                          1,336
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-2">
                        <dt className="flex items-center">
                          <Icon8 />
                        </dt>
                        <dd className="block">
                          1
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <h3 className="block mb-2.5 text-2xl font-medium leading-[1.75rem]" data-ditto-id="motion-heading" data-component="heading">
                    DataBahn
                  </h3>
                  <div className="h-8.5 min-h-8.5 flex items-center gap-[0.3125rem] font-normal md:max-lg:flex-wrap">
                    <span className="block shrink-0">
                      by
                    </span>
                    <a className="flex items-center gap-2 overflow-hidden text-accent text-lg leading-[1.4375rem] cursor-pointer hover:border-clr-21 hover:text-clr-21 hover:outline-clr-21 hover:[text-decoration-color:var(--clr-21)]" data-component="link" href="/agency/profile/flowtrix">
                      <strong className="block overflow-hidden font-medium whitespace-nowrap text-nowrap">
                        Flowtrix
                      </strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {mediaCardData.map((d, i) => <MediaCard key={i} d={d} meta={MediaCard_meta[i]} styles={MediaCard_styles[i]} />)}
          </div>
        </div>
        <div className="block my-20 max-md:my-12 max-md:text-center md:max-lg:my-[3.2rem]">
          <div className="flex py-6.5 pr-14 pl-10.5 rounded-lg items-center gap-y-5 gap-x-17.5 bg-background [background-size:cover,_940px] [background-position:0px_0px,_-75px_45%] [background-repeat:no-repeat,_no-repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] shadow-[var(--clr-6)_0px_4px_40px_0px] [-webkit-background-clip:border-box,_border-box] max-md:pt-9.5 max-md:pb-10.5 max-md:px-7.5 max-md:flex-col max-md:[background-size:cover,_558px] max-md:[background-position:0px_0px,_150px_115%] md:max-lg:flex-wrap" style={{ backgroundImage: "linear-gradient(var(--clr-13) 40%, var(--clr-14) 100%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 89.89 138.67' opacity='0.1'%3E%3Cpath d='M89.62,86.07A32.94,32.94,0,0,1,69,114.83s-1.64.48-2.09.59l-.12,0c-8.48,2.07-26.51,4.74-26.51-9.3h0c0-6,3.22-10.53,7.69-14.44C54.5,86,63.69,81.61,69.39,76.16c3.12-3,5.19-6.29,5.19-10.35A57,57,0,0,0,66.52,36c0,42.15-44.37,45.22-44.37,76.39V113c0,14.06,11.25,25.69,26.24,25.69C95.86,138.67,89.62,86.68,89.62,86.07Z' fill='%23aa8cff'/%3E%3Cpath d='M66.55,36l0-.05h0a57,57,0,0,1,8.06,29.83c0,4.06-2.07,7.37-5.19,10.35C63.69,81.61,54.5,86,48,91.68c-4.47,3.91-7.69,8.46-7.69,14.44h0c0,14,18,11.37,26.51,9.3l.12,0-.47,0-.43,0-.45,0c-.31,0-.61-.08-.91-.12-4.28-.73-5.66-3.49-5.66-7.14V108c0-8.79,14.79-14.09,19.29-28.52a29,29,0,0,0,1.29-8.72C79.57,53.89,68.16,38.27,66.55,36Z' fill='%237c4dff'/%3E%3Cpath d='M45.28,0l0,0,0,0a53.49,53.49,0,0,0-8.13,24.88h0c0,7.53,3.09,11.36,6,15.09a27.09,27.09,0,0,1,3.45,5.36,15.08,15.08,0,0,1,1.31,6.34h0c0,13.29-15.31,14.06-20.09,13.64H28l-.25,0h-.15a3.56,3.56,0,0,1-.57-.08l-.34-.06c-4.7-.9-9.14-4.87-9.14-16.36C17.57,48.82,0,76.33,0,94.66s18.2,35.47,18.2,35.47c-3.14-6.08-5-12.82-4.39-19.56,0-28.76,47.7-42.81,47.7-69.71C61.51,26.23,55.89,12.21,45.28,0Z' fill='%23aa8cff'/%3E%3Cpath d='M47.86,51.69a15.08,15.08,0,0,0-1.31-6.34A27.09,27.09,0,0,0,43.1,40c-2.86-3.73-6-7.56-6-15.09h0A53.49,53.49,0,0,1,45.28,0l0,0c-1.26,1.58-15,19.29-15,30.34,0,12.19,6.93,18.28,6.93,24.37a12.82,12.82,0,0,1-1.38,6.11,8,8,0,0,1-7.53,4.48h-.47c4.78.42,20.09-.35,20.09-13.64Z' fill='%237c4dff'/%3E%3C/svg%3E\")" }}>
            <div className="flex flex-col grow gap-2.5 max-md:gap-10.5">
              <h3 className="block text-2xl leading-9" data-component="heading">
                <span className="inline">
                  {"Get Connected "}
                  <br className="hidden max-md:inline" />
                  {"With The Right Agency Partner "}
                  <br className="inline" />
                  <strong className="inline font-medium">
                    {"& Receive Proposals For FREE"}
                  </strong>
                </span>
              </h3>
            </div>
            <div className="flex items-center shrink-0 gap-y-5 gap-x-10 max-md:flex-col">
              <a className="h-10.5 min-h-10.5 flex relative py-0.5 px-7.5 justify-center items-center gap-2 text-background font-medium uppercase cursor-pointer before:content-[''] before:block before:absolute before:inset-0 before:w-[12.8125rem] before:h-10.5 before:bg-background before:opacity-0 before:transform-[matrix(1,0,-0.700208,1,0,0)] before:origin-[102.5px_21px] before:rounded-tl-[4.8px] hover:border-clr-28 hover:text-clr-28 hover:outline-clr-28 hover:[text-decoration-color:var(--clr-28)] focus:border-clr-34 focus:text-clr-34 focus:outline-clr-34 focus:[text-decoration-color:var(--clr-34)]" data-ditto-id="style-link-4" data-component="link" href="/marketplace/project-brief">
                <span className="block relative z-1 hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]">
                  Get Proposals
                </span>
                <Icon11 />
              </a>
              <a className="h-10.5 min-h-10.5 flex relative py-0.5 px-7.5 justify-center items-center gap-2 text-color-001 font-medium uppercase cursor-pointer before:content-[''] before:block before:absolute before:inset-0 before:w-[14.3125rem] before:h-10.5 before:bg-background before:transform-[matrix(1,0,-0.700208,1,0,0)] before:origin-[114.5px_21px] before:rounded-tl-[4.8px] after:content-[''] after:block after:absolute after:inset-0 after:w-[14.3125rem] after:h-10.5 after:[background-size:calc(100%_+_100px)_100%] after:[background-position:0px_0%] after:transform-[matrix(1,0,-0.700208,1,0,0)] after:origin-[114.5px_21px] after:rounded-tl-[4.8px] hover:border-clr-25 hover:text-clr-25 hover:outline-clr-25 hover:[text-decoration-color:var(--clr-25)] focus:border-clr-35 focus:text-clr-35 focus:outline-clr-35 focus:[text-decoration-color:var(--clr-35)]" data-component="link" href="/marketplace/membership">
                <span className="block relative z-1 whitespace-nowrap hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-color-001 focus:text-color-001 focus:outline-color-001 focus:[text-decoration-color:var(--color-001)]">
                  Are You an Agency?
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="flex flex-wrap gap-15 max-lg:gap-[2.8125rem]">
            <div className="block max-w-[calc(33.3333%_-_40px)] max-md:max-w-none md:max-lg:max-w-[calc(50%_-_22.5px)]">
              <div className="h-full flex flex-col">
                <figure className="block relative rounded-lg overflow-hidden aspect-[4/3]">
                  <img className="w-full h-68 block max-w-full overflow-clip object-cover aspect-[auto_430/324] align-top text-clr-1 max-md:h-[15.6875rem] md:max-lg:h-63 2xl:h-[20.1875rem]" data-component="image" alt="Future Works Website Design" height="324" src="/assets/cloned/images/202adf26b7b4.webp" width="430" />
                  <figcaption className="w-[363.3px] h-[272.5px] flex absolute top-0 left-0 opacity-0 rounded-lg flex-col justify-center items-center gap-7.5 bg-clr-11 pointer-events-none">
                    <a className="w-[9.6875rem] h-13 min-h-13 flex py-[0.3125rem] px-3.5 rounded-lg justify-center items-center text-foreground text-xl font-normal leading-[1.5625rem] bg-background cursor-pointer pointer-events-none max-md:w-[20.9375rem] max-md:h-[251.3px] max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:min-w-0 max-lg:min-h-0 max-lg:p-0 max-lg:rounded-[initial] max-lg:[font-size:inherit] max-lg:[font-weight:inherit] max-lg:leading-[inherit] max-lg:[pointer-events:initial] md:max-lg:w-[336.5px] md:max-lg:h-[15.775rem]" data-component="link" href="/best-designs/websites/future-works-website-design">
                      <div className="flex items-baseline gap-2 pointer-events-none max-lg:gap-[initial] max-lg:[pointer-events:initial]">
                        <span className="block pointer-events-none max-lg:[pointer-events:initial]">
                          View Design
                        </span>
                        <Icon7 />
                      </div>
                    </a>
                  </figcaption>
                </figure>
                <div className="flex pt-6 flex-col grow max-lg:pt-5.5">
                  <div className="h-[1.5625rem] min-h-[1.5625rem] flex mb-3 items-center gap-5">
                    <a className="h-[1.5625rem] min-h-[1.5625rem] flex py-[0.3125rem] px-3 rounded-[20px] items-center text-foreground text-[0.6875rem] font-medium leading-[0.875rem] uppercase bg-color-003 cursor-pointer hover:border-clr-27 hover:text-clr-27 hover:outline-clr-27 hover:[text-decoration-color:var(--clr-27)] focus:border-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" data-component="button" href="/best-designs/websites/technology">
                      Technology
                    </a>
                    <div className="flex ml-[176.3px] items-center gap-[1.5625rem] text-sm font-medium leading-[1.125rem] max-md:ml-37 md:max-lg:ml-[149.5px] 2xl:ml-[15.1875rem]">
                      <dl className="flex items-center gap-2">
                        <dt className="flex items-center">
                          <Icon10 />
                        </dt>
                        <dd className="block">
                          2,344
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <h3 className="block mb-2.5 text-2xl font-medium leading-[1.75rem]" data-component="heading">
                    Future Works
                  </h3>
                  <div className="h-8.5 min-h-8.5 flex items-center gap-[0.3125rem] font-normal md:max-lg:flex-wrap">
                    <span className="block shrink-0">
                      by
                    </span>
                    <a className="flex items-center gap-2 overflow-hidden text-accent text-lg leading-[1.4375rem] cursor-pointer hover:border-clr-21 hover:text-clr-21 hover:outline-clr-21 hover:[text-decoration-color:var(--clr-21)]" data-component="link" href="/agency/profile/future-works">
                      <strong className="block overflow-hidden font-medium whitespace-nowrap text-nowrap">
                        Future Works
                      </strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block max-w-260 mt-18.5 mb-13 mx-auto max-md:mt-10.5 md:max-lg:mt-[2.9625rem]">
          <div className="flex py-7 pr-13 pl-9.5 rounded-lg justify-between items-center gap-x-[2.1875rem] text-background font-normal [background-size:430px,_cover] [background-position:15%_58%,_0px_0px] [background-repeat:no-repeat,_no-repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] max-md:pt-10 max-md:pb-13 max-lg:flex-col max-md:gap-8.5 max-lg:text-center max-md:[background-position:23%_53%,_0px_0px] max-md:px-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 89.89 138.67' opacity='0.5'%3E%3Cpath d='M89.62,86.07A32.94,32.94,0,0,1,69,114.83s-1.64.48-2.09.59l-.12,0c-8.48,2.07-26.51,4.74-26.51-9.3h0c0-6,3.22-10.53,7.69-14.44C54.5,86,63.69,81.61,69.39,76.16c3.12-3,5.19-6.29,5.19-10.35A57,57,0,0,0,66.52,36c0,42.15-44.37,45.22-44.37,76.39V113c0,14.06,11.25,25.69,26.24,25.69C95.86,138.67,89.62,86.68,89.62,86.07Z' fill='%237748ff'/%3E%3Cpath d='M66.55,36l0-.05h0a57,57,0,0,1,8.06,29.83c0,4.06-2.07,7.37-5.19,10.35C63.69,81.61,54.5,86,48,91.68c-4.47,3.91-7.69,8.46-7.69,14.44h0c0,14,18,11.37,26.51,9.3l.12,0-.47,0-.43,0-.45,0c-.31,0-.61-.08-.91-.12-4.28-.73-5.66-3.49-5.66-7.14V108c0-8.79,14.79-14.09,19.29-28.52a29,29,0,0,0,1.29-8.72C79.57,53.89,68.16,38.27,66.55,36Z' fill='%23652fff'/%3E%3Cpath d='M45.28,0l0,0,0,0a53.49,53.49,0,0,0-8.13,24.88h0c0,7.53,3.09,11.36,6,15.09a27.09,27.09,0,0,1,3.45,5.36,15.08,15.08,0,0,1,1.31,6.34h0c0,13.29-15.31,14.06-20.09,13.64H28l-.25,0h-.15a3.56,3.56,0,0,1-.57-.08l-.34-.06c-4.7-.9-9.14-4.87-9.14-16.36C17.57,48.82,0,76.33,0,94.66s18.2,35.47,18.2,35.47c-3.14-6.08-5-12.82-4.39-19.56,0-28.76,47.7-42.81,47.7-69.71C61.51,26.23,55.89,12.21,45.28,0Z' fill='%237748ff'/%3E%3Cpath d='M47.86,51.69a15.08,15.08,0,0,0-1.31-6.34A27.09,27.09,0,0,0,43.1,40c-2.86-3.73-6-7.56-6-15.09h0A53.49,53.49,0,0,1,45.28,0l0,0c-1.26,1.58-15,19.29-15,30.34,0,12.19,6.93,18.28,6.93,24.37a12.82,12.82,0,0,1-1.38,6.11,8,8,0,0,1-7.53,4.48h-.47c4.78.42,20.09-.35,20.09-13.64Z' fill='%23652fff'/%3E%3C/svg%3E\"), linear-gradient(135deg, var(--clr-15) 0%, var(--color-001) 18%, var(--color-001) 55%, var(--clr-16) 100%)" }}>
            <div className="block text-[1.75rem] leading-[2.125rem] max-md:text-3xl max-md:leading-9">
              Ready to elevate your designs?
            </div>
            <div className="flex justify-center items-center gap-y-3.5 gap-x-7.5 whitespace-nowrap text-nowrap max-md:flex-col">
              <a className="h-10.5 min-h-10.5 flex relative py-0.5 px-7.5 justify-center items-center gap-3 font-medium uppercase cursor-pointer before:content-[''] before:block before:absolute before:inset-0 before:w-61 before:h-10.5 before:bg-background before:opacity-0 before:transform-[matrix(1,0,-0.700208,1,0,0)] before:origin-[122px_21px] before:rounded-tl-[4.8px] hover:border-clr-28 hover:text-clr-28 hover:outline-clr-28 hover:[text-decoration-color:var(--clr-28)] focus:border-clr-34 focus:text-clr-34 focus:outline-clr-34 focus:[text-decoration-color:var(--clr-34)]" data-ditto-id="style-link-5" data-component="link" href="/best-designs/submit" target="_blank">
                <strong className="block relative z-1 hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]">
                  Submit Your Design
                </strong>
                <Icon12 />
              </a>
              <a className="h-10.5 min-h-10.5 flex relative py-0.5 px-7.5 justify-center items-center gap-3 font-medium uppercase cursor-pointer before:content-[''] before:block before:absolute before:inset-0 before:w-57 before:h-10.5 before:bg-clr-13 before:transform-[matrix(1,0,-0.700208,1,0,0)] before:origin-[114px_21px] before:rounded-tl-[4.8px] after:content-[''] after:block after:absolute after:inset-0 after:w-57 after:h-10.5 after:[background-size:calc(100%_+_100px)_100%] after:[background-position:0px_0%] after:transform-[matrix(1,0,-0.700208,1,0,0)] after:origin-[114px_21px] after:rounded-tl-[4.8px]" data-component="link" href="/best-designs/how-it-works">
                <strong className="block relative z-1">
                  See How It Works
                </strong>
                <Icon12 />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
