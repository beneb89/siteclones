import Logo2, { type Logo2Data } from "../components/logo2";
import Icon17 from "../svgs/svg-icon17";
const Logo2_data2: Logo2Data[] = [
    { ariaLabel: "Author Website Link", href: "/", icon: <>
            <path fill="currentColor" d="M3.71 12.83h4.57a14.92 14.92 0 0 0 2.43 7.4 8.34 8.34 0 0 1-7-7.4Zm0-1.66a8.34 8.34 0 0 1 7-7.4 14.92 14.92 0 0 0-2.43 7.4H3.7Zm16.59 0h-4.57a14.92 14.92 0 0 0-2.44-7.4 8.34 8.34 0 0 1 7 7.4Zm0 1.66a8.34 8.34 0 0 1-7 7.4 14.92 14.92 0 0 0 2.43-7.4h4.57Zm-10.35 0h4.11A13.26 13.26 0 0 1 12 19.16c-1.18-1.85-1.91-4-2.05-6.33Zm0-1.66c.14-2.32.87-4.48 2.05-6.33a13.2 13.2 0 0 1 2.06 6.33H9.95Z" />
            </> },
    { ariaLabel: "Author LinkedIn Link", href: "https://www.linkedin.com/in/zachary-murray/", icon: <>
            <path fill="currentColor" d="M17.28 17.28h-2.22V13.8c0-.83-.02-1.9-1.16-1.9-1.16 0-1.33.9-1.33 1.84v3.54h-2.23v-7.16h2.14v.98h.03a2.34 2.34 0 0 1 2.1-1.16c2.25 0 2.67 1.49 2.67 3.41v3.93ZM7.84 9.15a1.29 1.29 0 1 1 0-2.58 1.29 1.29 0 0 1 0 2.58Zm1.1 8.13H6.73v-7.16h2.23v7.16ZM18.4 4.5H5.61c-.62 0-1.11.48-1.11 1.08v12.84c0 .6.5 1.08 1.1 1.08H18.4a1.1 1.1 0 0 0 1.11-1.08V5.58c0-.6-.5-1.08-1.11-1.08Z" />
            </> },
    { ariaLabel: "Author Instagram Link", href: "https://www.instagram.com/foreplayzach/", icon: <>
            <path fill="currentColor" d="M12.85 3.67c.94 0 1.42 0 1.83.02h.16l.6.03c.88.04 1.48.18 2.02.38.54.22 1 .5 1.47.97.46.46.75.92.96 1.47.2.53.35 1.14.39 2.02l.02.6.01.16c.01.41.02.89.02 1.82V12.86c0 .93 0 1.41-.02 1.82v.16l-.03.6c-.04.88-.18 1.49-.39 2.02-.2.55-.5 1.01-.96 1.47a4.1 4.1 0 0 1-1.47.97c-.54.2-1.14.34-2.03.38l-.6.03h-.15c-.41.02-.89.02-1.83.02h-1.71c-.94 0-1.41 0-1.82-.02h-.17l-.59-.03a6.15 6.15 0 0 1-2.02-.38 4.07 4.07 0 0 1-1.48-.96 4.09 4.09 0 0 1-.96-1.48 6.15 6.15 0 0 1-.39-2.02l-.02-.6v-.16c-.02-.41-.02-.89-.03-1.82v-1.72c0-.93.01-1.4.02-1.82v-.16l.03-.6c.04-.88.18-1.49.4-2.02.2-.55.49-1.01.95-1.47.47-.47.93-.75 1.48-.97.53-.2 1.13-.34 2.02-.38l.6-.03h.16c.4-.02.88-.02 1.82-.02h1.71ZM12 7.83a4.17 4.17 0 1 0 0 8.34 4.17 4.17 0 0 0 0-8.34Zm0 1.67a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm4.37-2.92a1.04 1.04 0 1 0 0 2.09 1.04 1.04 0 0 0 0-2.09Z" />
            </> }
];
/** Logo Cloud section. */
export default function LogoCloudSection2({ logos = Logo2_data2 } = {}) {
  return (
    <section className="block">
      <div className="block max-w-200 mx-auto px-10 max-md:px-6 md:max-lg:px-8 2xl:max-w-208">
        <div className="flex py-10 justify-start items-center gap-4 max-md:grid max-md:py-4 max-md:grid-cols-[48px_263px] max-md:[grid-auto-columns:1fr] max-md:justify-items-stretch">
          <div className="block relative rounded-[999px] overflow-hidden">
            <img className="w-12 h-12 block max-w-full rounded-[999px] overflow-clip align-middle" data-component="avatar" alt="" src="/assets/cloned/images/45b47a314d65.webp" />
            <div className="w-12 h-full border border-solid border-border block absolute top-0 left-0 rounded-[999px] pointer-events-none" />
          </div>
          <div className="block flex-1">
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="block text-color-004">
                <div className="block font-medium whitespace-nowrap">
                  Zachary Murray
                </div>
              </div>
              <div className="block text-color-011">
                <div className="block text-sm leading-5 tracking-[-0.09px] whitespace-nowrap">
                  Founder of Foreplay.co
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1 max-md:flex-wrap max-md:gap-2 max-md:col-start-[span_2] max-md:col-end-[span_2] max-md:row-start-[span_1] max-md:row-end-[span_1]" id="w-node-c6336790-edfe-a9d3-ad3b-5c444c9fd3ba-f7a7652f">
            {logos.map((d, i) => <Logo2 key={i} d={d} />)}
            <a className="h-10 flex relative z-5 max-w-full p-2 rounded-[10px] justify-center items-center text-color-002 font-semibold bg-background cursor-pointer hover:bg-surface focus:shadow-[var(--background)_0px_0px_0px_2px,var(--color-002)_0px_0px_0px_3px]" data-component="link" aria-current="page" href="/post/google-ads-transparency-center">
              <div className="block relative z-2 px-1.5">
                <div className="block [font-weight:550] whitespace-nowrap">
                  More Articles
                </div>
              </div>
              <div className="flex relative z-2 opacity-68 -ml-1 justify-center items-center">
                <div className="w-6 h-6 flex justify-center items-center">
                  <div className="flex justify-center items-center before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:font-semibold before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:font-semibold after:leading-6 after:tracking-[-0.18px]">
                    <Icon17 />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
