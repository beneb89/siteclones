import Logo4, { type Logo4Data } from "../components/logo4";
import ListRow7 from "../components/list-row7";
import Logo5, { type Logo5Data } from "../components/logo5";
import { Logo4_styles, Logo5_styles } from "../_styles";
import { listRow7Data as listRow7DataContent, listRow7Data2 as listRow7Data2Content } from "../content";
const Logo4_data: Logo4Data[] = [
    { ariachecked: "true", ariaLabel: "Switch to light theme", ariapressed: "true", viewBox: "0 0 576 512", icon: <>
        <path fill="currentColor" d="M288 432c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16zM140.9 380.4c6.2-6.2 16.4-6.2 22.7 0s6.2 16.4 0 22.7L107 459.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l56.6-56.6zm271.5 0c6.2-6.2 16.4-6.2 22.7 0L491.7 437c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-56.6-56.6c-6.2-6.2-6.2-16.4 0-22.7zM288 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zm0-224a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM96 240c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0zm464 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0zM84.3 52.3c6.2-6.2 16.4-6.2 22.6 0l56.6 56.6c6.2 6.2 6.2 16.4 0 22.7s-16.4 6.2-22.7 0L84.3 75c-6.2-6.2-6.2-16.4 0-22.6zm384.7 0c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-56.6 56.6c-6.2 6.2-16.4 6.2-22.7 0s-6.2-16.4 0-22.7L469 52.3zM288-32c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16z" />
        </> },
    { ariachecked: "false", ariaLabel: "Switch to system theme", ariapressed: "false", viewBox: "0 0 512 512", icon: <>
        <path fill="currentColor" d="M448 64L64 64C46.3 64 32 78.3 32 96l0 192 448 0 0-192c0-17.7-14.3-32-32-32zm32 256l-448 0 0 32c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-32zM64 32l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-117.1 0 10.7 64 58.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-288 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l58.4 0 10.7-64-117.1 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM213.6 416l-10.7 64 106.2 0-10.7-64-84.9 0z" />
        </> },
    { ariachecked: "false", ariaLabel: "Switch to dark theme", ariapressed: "false", viewBox: "0 0 512 512", icon: <>
        <path fill="currentColor" d="M256 32c9.5 0 18.9 .6 28 1.7-60.1 38.3-100 105.6-100 182.3 0 117.2 96.4 212.8 210.7 215.9-38.2 30.1-86.3 48.1-138.7 48.1-123.7 0-224-100.3-224-224S132.3 32 256 32zm0-32C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-105.4 8.4-198.8-77.3-198.8-183.4 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z" />
        </> }
];
const Logo5_data: Logo5Data[] = [
    { ariaLabel: "GitHub", href: "https://github.com/GitBookIO", viewBox: "0 0 512 512", icon: <>
        <path fill="currentColor" d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </> },
    { ariaLabel: "X/Twitter", href: "https://x.com/GitBookIO", icon: <>
        <title>
          {"x-twitter"}
        </title>
        <defs>
          <mask id="_r_62_" style={{ maskType: "alpha" }}>
            <image data-testid="mask-image" href="/assets/cloned/svg/62aec324ca92.svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="currentColor" mask="url(#_r_62_)" />
        </> },
    { ariaLabel: "LinkedIn", href: "https://linkedin.com/company/gitbook", icon: <>
        <title>
          {"linkedin"}
        </title>
        <defs>
          <mask id="_r_64_" style={{ maskType: "alpha" }}>
            <image data-testid="mask-image" href="/assets/cloned/svg/4803ffdb0bee.svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="currentColor" mask="url(#_r_64_)" />
        </> },
    { ariaLabel: "YouTube", href: "https://youtube.com/@GitBookIO", icon: <>
        <title>
          {"youtube"}
        </title>
        <defs>
          <mask id="_r_66_" style={{ maskType: "alpha" }}>
            <image data-testid="mask-image" href="/assets/cloned/svg/43c958c70f82.svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="currentColor" mask="url(#_r_66_)" />
        </> }
];
/** Site footer. */
export default function Footer({ logo4Data = Logo4_data, listRow7Data = listRow7DataContent, listRow7Data2 = listRow7Data2Content, logos = Logo5_data } = {}) {
  return (
    <footer className="border-t border-solid border-t-border block 2xl:hidden">
      <div className="block 2xl:hidden">
        <div className="block max-w-360 p-8 mx-auto max-md:px-4 2xl:hidden">
          <div className="grid flex-col justify-between gap-12 mx-auto max-w-3xl w-full grid-cols-[auto_auto] 2xl:hidden">
            <div className="block col-start-1 row-start-1 2xl:hidden">
              <img className="w-55.5 h-12 block max-w-64 max-h-12 rounded-sm overflow-clip object-contain object-[0%_50%] aspect-[auto_250/54] align-middle max-lg:w-40 max-lg:h-[2.1875rem] max-lg:max-w-40 max-lg:max-h-10 2xl:hidden" data-component="image" alt="Logo" height="54" sizes="320px" src="/assets/cloned/images/1fe9f979255c.png" srcSet="/assets/cloned/images/d0caa29a1a01.png 320w, /assets/cloned/images/93a220311800.png 640w, /assets/cloned/images/1fe9f979255c.png 960w" width="250" />
            </div>
            <div className="hidden min-w-0 justify-end items-start [grid-column-start:-2] row-start-1 max-lg:flex">
              <div className="flex justify-start items-stretch gap-2 overflow-hidden 2xl:hidden" role="radiogroup">
                {logo4Data.map((d, i) => <Logo4 key={i} d={d} styles={Logo4_styles[i]} />)}
              </div>
            </div>
            <div className="block col-start-[span_2] col-end-[span_2] 2xl:hidden">
              <div className="h-full flex gap-6 mx-auto max-md:flex-col max-md:gap-10 2xl:hidden">
                <div className="flex flex-col flex-1 gap-10 2xl:hidden">
                  <nav className="flex flex-col gap-4 text-sm leading-5 2xl:hidden" data-component="nav">
                    <h4 className="block font-semibold tracking-[-0.17px] 2xl:hidden" data-component="heading">
                      Resources
                    </h4>
                    <ul className="flex flex-col items-start gap-4 [list-style-type:none] list-outside 2xl:hidden">
                      {listRow7Data.map((d, i) => <ListRow7 key={i} d={d} />)}
                    </ul>
                  </nav>
                </div>
                <div className="flex flex-col flex-1 gap-10 2xl:hidden">
                  <nav className="flex flex-col gap-4 text-sm leading-5 2xl:hidden" data-component="nav">
                    <h4 className="block font-semibold tracking-[-0.17px] 2xl:hidden" data-component="heading">
                      Company
                    </h4>
                    <ul className="flex flex-col items-start gap-4 [list-style-type:none] list-outside 2xl:hidden">
                      {listRow7Data2.map((d, i) => <ListRow7 key={i} d={d} />)}
                    </ul>
                  </nav>
                </div>
                <div className="flex flex-col flex-1 gap-10 2xl:hidden">
                  <nav className="flex flex-col gap-4 text-sm leading-5 2xl:hidden" data-component="nav">
                    <h4 className="block font-semibold tracking-[-0.17px] 2xl:hidden" data-component="heading">
                      Policies
                    </h4>
                    <ul className="flex flex-col items-start gap-4 [list-style-type:none] list-outside 2xl:hidden">
                      <li className="list-item 2xl:hidden">
                        <a className="inline text-muted-foreground cursor-pointer 2xl:hidden hover:underline" data-component="link" href="https://policies.gitbook.com/privacy-and-security/security/subprocessors">
                          Subprocessors
                        </a>
                      </li>
                      <li className="list-item 2xl:hidden">
                        <a className="inline text-muted-foreground cursor-pointer 2xl:hidden hover:underline" data-component="link" href="https://policies.gitbook.com/terms">
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center grow gap-2 col-span-full w-full 2xl:hidden">
              {logos.map((d, i) => <Logo5 key={i} d={d} styles={Logo5_styles[i]} />)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
