import Icon from "../svgs/svg-icon";
import Logo from "../components/logo";
import Logo2, { type Logo2Data } from "../components/logo2";
import MediaTile from "../components/media-tile";
import Icon2 from "../svgs/svg-icon2";
import Logo3 from "../components/logo3";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import { Logo_styles, Logo2_styles, Logo3_styles } from "../_styles";
import { logos as logosContent, mediaTileData as mediaTileDataContent, logos2 as logos3Content } from "../content";
const Logo2_data: Logo2Data[] = [
    { style: { backgroundImage: "linear-gradient(135deg, var(--clr-4) 0%, var(--color-001) 60%, var(--clr-5) 100%)" }, icon: <>
        <use xlinkHref="#icon-agency-type-featured" />
        </>, text: " Featured " },
    { icon: <>
        <use xlinkHref="#icon-agency-type-category-branding-creative" />
        </>, text: " Branding & Creative " },
    { icon: <>
        <use xlinkHref="#icon-agency-type-dashboard-design" />
        </>, text: " Website & Interface " },
    { icon: <>
        <use xlinkHref="#icon-agency-type-category-marketing" />
        </>, text: " Marketing " },
    { icon: <>
        <use xlinkHref="#icon-agency-type-digital-design-agencies" />
        </>, text: " Software & App " },
    { icon: <>
        <use xlinkHref="#icon-agency-type-category-technology" />
        </>, text: " IT Services " }
];
/** Top navigation bar. */
export default function Navbar({ logos = logosContent, logos2 = Logo2_data, mediaTileData = mediaTileDataContent, logos3 = logos3Content } = {}) {
  return (
    <header className="h-18.5 block fixed inset-x-0 z-100 min-w-0 bg-background shadow-[var(--clr-0)_0px_0px_90px_0px] max-lg:h-15.5" id="site-header">
      <div className="h-full block max-w-370 px-[2.1875rem] mx-auto max-md:px-5 md:max-lg:px-[1.5625rem]">
        <div className="h-full flex justify-between items-center gap-7.5 pointer-events-none max-md:gap-5 md:max-lg:gap-[22.5px]" id="headerMenu">
          <div className="w-48 block mr-[5.9375rem] shrink-0 max-lg:w-43 max-md:mr-[3.3125rem] md:max-lg:mr-[26.9375rem] 2xl:mr-51">
            <a className="block text-accent cursor-pointer max-lg:max-w-43 hover:border-clr-21 hover:text-clr-21 hover:outline-clr-21 hover:[text-decoration-color:var(--clr-21)]" data-component="link" href="/">
              <img className="w-48 h-[2.8125rem] block max-w-full overflow-clip aspect-[auto_192/48] align-top text-clr-1 max-lg:w-43 max-lg:h-10" data-component="image" alt="DesignRush" height="48" src="/assets/cloned/svg/161c76a27435.svg" width="192" />
            </a>
          </div>
          <div className="flex items-center gap-7.5" data-ditto-id="motion-div">
            <nav className="w-[93%] h-9.5 flex items-center gap-[1.5625rem] transform-[none] max-lg:opacity-0 2xl:w-[93.5%]" data-component="nav">
              <ul className="flex items-center gap-10 [list-style-type:none] list-outside max-lg:flex-col max-lg:gap-5 max-lg:pointer-events-none">
                <li className="w-[27%] list-item relative max-lg:flex max-lg:flex-col max-lg:pointer-events-none max-lg:w-auto max-lg:static max-lg:inset-auto 2xl:w-[27.5%]">
                  <a className="h-[16.3px] inline-flex items-center gap-2.5 text-primary text-[0.8125rem] leading-[1rem] uppercase cursor-pointer max-lg:h-12 max-lg:border max-lg:border-solid max-lg:border-clr-2 max-lg:flex max-lg:px-4 max-lg:rounded-lg max-lg:justify-between max-lg:font-medium max-lg:bg-background max-lg:pointer-events-none max-lg:gap-[initial] max-lg:[font-size:inherit] max-lg:leading-[inherit] 2xl:h-[1.175rem] 2xl:text-[0.9375rem] 2xl:leading-[1.1875rem] hover:border-clr-22 hover:text-clr-22 hover:outline-clr-22 hover:[text-decoration-color:var(--clr-22)] focus:border-clr-30 focus:text-clr-30 focus:outline-clr-30 focus:[text-decoration-color:var(--clr-30)]" data-ditto-id="menu-trigger-link" data-component="link" href="https://news.designrush.com/">
                    <strong className="block font-medium max-lg:pointer-events-none max-lg:[font-weight:inherit] hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]">
                      Trending Brand News
                    </strong>
                    <i className="w-3 h-3 flex justify-center items-center italic transform-[matrix(0,1,-1,0,0,0)] origin-[6px_6px] max-lg:w-[0.6875rem] max-lg:h-4.5 max-lg:transform-[none] max-lg:pointer-events-none max-lg:origin-[initial]">
                      <Icon />
                    </i>
                  </a>
                  <div className="w-75 h-[22.4375rem] border-t-[3px] border-solid border-t-color-001 block absolute top-5 left-[5.4375rem] opacity-0 rounded-[10px] bg-background shadow-[var(--clr-3)_0px_0px_20px_0px] transform-[matrix(1,0,0,1,-150,6)] pointer-events-none max-lg:hidden before:content-[''] before:block before:absolute before:-top-2.5 before:bottom-89.5 before:inset-x-0 before:w-4 before:h-2 before:mx-35.5 max-lg:before:hidden after:content-[''] after:block after:absolute after:-top-[0.9375rem] after:bottom-89 after:inset-x-0 after:w-75 after:h-[0.9375rem] max-lg:after:hidden">
                    <ul className="flex flex-col [list-style-type:none] list-outside pointer-events-none">
                      {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                    </ul>
                  </div>
                </li>
                <li className="w-37.5 list-item relative max-md:w-[19.6875rem] max-lg:flex max-lg:flex-col max-lg:pointer-events-none max-lg:static max-lg:inset-auto md:max-lg:w-177 2xl:w-42.5">
                  <a className="h-[16.3px] inline-flex items-center gap-2.5 text-primary text-[0.8125rem] leading-[1rem] uppercase cursor-pointer max-lg:h-12 max-lg:border max-lg:border-solid max-lg:border-clr-2 max-lg:flex max-lg:px-4 max-lg:rounded-lg max-lg:justify-between max-lg:font-medium max-lg:bg-background max-lg:pointer-events-none max-lg:gap-[initial] max-lg:[font-size:inherit] max-lg:leading-[inherit] 2xl:h-[1.175rem] 2xl:text-[0.9375rem] 2xl:leading-[1.1875rem] hover:border-clr-22 hover:text-clr-22 hover:outline-clr-22 hover:[text-decoration-color:var(--clr-22)] focus:border-clr-30 focus:text-clr-30 focus:outline-clr-30 focus:[text-decoration-color:var(--clr-30)]" data-ditto-id="menu-trigger-link-2" data-component="link" href="/agency">
                    <strong className="block font-medium max-lg:pointer-events-none max-lg:[font-weight:inherit] hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]">
                      Agency Directory
                    </strong>
                    <i className="w-3 h-3 flex justify-center items-center italic transform-[matrix(0,1,-1,0,0,0)] origin-[6px_6px] max-lg:w-[0.6875rem] max-lg:h-4.5 max-lg:transform-[none] max-lg:pointer-events-none max-lg:origin-[initial]">
                      <Icon />
                    </i>
                  </a>
                  <div className="w-307.5 h-133 block absolute top-5 left-[4.6875rem] opacity-0 max-w-[79.2rem] pt-7 pb-6 px-5 rounded-br-[10px] rounded-bl-[10px] bg-background shadow-[var(--clr-3)_0px_0px_20px_0px] transform-[matrix(1,0,0,1,-615,6)] pointer-events-none max-lg:hidden before:content-[''] before:block before:absolute before:-top-[0.4375rem] before:bottom-[33.1875rem] before:inset-x-0 before:w-4 before:h-2 before:mx-[37.9375rem] max-lg:before:hidden" data-ditto-id="style-div">
                    <div className="flex gap-7.5 pointer-events-none grid-cols-2">
                      <div className="w-71.5 flex flex-col shrink-0 gap-3 pointer-events-none max-lg:hidden">
                        {logos2.map((d, i) => <Logo2 key={i} d={d} styles={Logo2_styles[i]} />)}
                      </div>
                      <div className="block relative px-10 grow bg-background [background-size:245px] [background-position:96%_22px] bg-no-repeat shadow-[var(--clr-6)_0px_4px_40px_0px] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 89.89 138.67' opacity='0.08'%3E%3Cpath d='M89.62,86.07A32.94,32.94,0,0,1,69,114.83s-1.64.48-2.09.59l-.12,0c-8.48,2.07-26.51,4.74-26.51-9.3h0c0-6,3.22-10.53,7.69-14.44C54.5,86,63.69,81.61,69.39,76.16c3.12-3,5.19-6.29,5.19-10.35A57,57,0,0,0,66.52,36c0,42.15-44.37,45.22-44.37,76.39V113c0,14.06,11.25,25.69,26.24,25.69C95.86,138.67,89.62,86.68,89.62,86.07Z' fill='%23ddd1ff'/%3E%3Cpath d='M66.55,36l0-.05h0a57,57,0,0,1,8.06,29.83c0,4.06-2.07,7.37-5.19,10.35C63.69,81.61,54.5,86,48,91.68c-4.47,3.91-7.69,8.46-7.69,14.44h0c0,14,18,11.37,26.51,9.3l.12,0-.47,0-.43,0-.45,0c-.31,0-.61-.08-.91-.12-4.28-.73-5.66-3.49-5.66-7.14V108c0-8.79,14.79-14.09,19.29-28.52a29,29,0,0,0,1.29-8.72C79.57,53.89,68.16,38.27,66.55,36Z' fill='%23cbb8ff'/%3E%3Cpath d='M45.28,0l0,0,0,0a53.49,53.49,0,0,0-8.13,24.88h0c0,7.53,3.09,11.36,6,15.09a27.09,27.09,0,0,1,3.45,5.36,15.08,15.08,0,0,1,1.31,6.34h0c0,13.29-15.31,14.06-20.09,13.64H28l-.25,0h-.15a3.56,3.56,0,0,1-.57-.08l-.34-.06c-4.7-.9-9.14-4.87-9.14-16.36C17.57,48.82,0,76.33,0,94.66s18.2,35.47,18.2,35.47c-3.14-6.08-5-12.82-4.39-19.56,0-28.76,47.7-42.81,47.7-69.71C61.51,26.23,55.89,12.21,45.28,0Z' fill='%23ddd1ff'/%3E%3Cpath d='M47.86,51.69a15.08,15.08,0,0,0-1.31-6.34A27.09,27.09,0,0,0,43.1,40c-2.86-3.73-6-7.56-6-15.09h0A53.49,53.49,0,0,1,45.28,0l0,0c-1.26,1.58-15,19.29-15,30.34,0,12.19,6.93,18.28,6.93,24.37a12.82,12.82,0,0,1-1.38,6.11,8,8,0,0,1-7.53,4.48h-.47c4.78.42,20.09-.35,20.09-13.64Z' fill='%23cbb8ff'/%3E%3C/svg%3E\")" }}>
                        <div className="w-198.5 h-16 flex absolute left-10 z-1 gap-[2.8125rem] pointer-events-none max-lg:hidden" data-ditto-id="style-div-2">
                          <label className="h-16 flex relative justify-center items-center gap-3 text-color-001 text-sm font-medium leading-[1.125rem] uppercase cursor-pointer pointer-events-none before:content-[''] before:block before:absolute before:top-15.5 before:-bottom-px before:inset-x-0 before:w-29.5 before:h-[0.1875rem] before:bg-color-001 max-lg:before:top-[calc(100%_-_2px)] max-lg:before:bottom-auto max-lg:before:w-auto max-lg:before:h-auto max-lg:before:bg-[initial] after:content-[''] after:block after:absolute after:top-15.5 after:-bottom-1.5 after:inset-x-0 after:w-3 after:h-[0.3125rem] after:mt-[0.1875rem] after:mx-[3.3125rem] max-lg:after:top-[calc(100%_-_2px)] max-lg:after:w-0 max-lg:after:h-0 max-lg:after:m-auto max-lg:after:bottom-auto">
                            <img className="w-4.5 h-4.5 block max-w-full rounded-[50%] overflow-clip aspect-[auto_18/18] align-top text-clr-1 pointer-events-none" data-component="avatar" alt="" height="18" src="/assets/cloned/svg/dd74790ac796.svg" width="18" />
                            <span className="block pointer-events-none">
                              US Agencies
                            </span>
                          </label>
                          <label className="h-16 flex relative justify-center items-center gap-3 text-sm font-medium leading-[1.125rem] uppercase cursor-pointer pointer-events-none before:content-[''] before:block before:absolute before:top-15.5 before:-bottom-px before:inset-x-0 before:w-31.5 before:h-[0.1875rem] before:bg-color-001 before:opacity-0 max-lg:before:top-[calc(100%_-_2px)] max-lg:before:bottom-auto max-lg:before:w-auto max-lg:before:h-auto max-lg:before:bg-[initial] after:content-[''] after:block after:absolute after:top-15.5 after:-bottom-1.5 after:inset-x-0 after:w-3 after:h-[0.3125rem] after:mt-[0.1875rem] after:mx-[3.5625rem] after:opacity-0 max-lg:after:top-[calc(100%_-_2px)] max-lg:after:w-0 max-lg:after:h-0 max-lg:after:m-auto max-lg:after:bottom-auto">
                            <span className="block pointer-events-none whitespace-nowrap">
                              Global Agencies
                            </span>
                          </label>
                        </div>
                        <div className="block overflow-hidden pointer-events-none">
                          <div className="flex relative pt-[5.3125rem] pb-5 pointer-events-none">
                            <ul className="w-full h-[23.4375rem] block gap-x-[0.9375rem] overflow-hidden [list-style-type:none] list-outside pointer-events-none max-lg:hidden">
                              {mediaTileData.map((d, i) => <MediaTile key={i} d={d} />)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="w-22.5 list-item relative max-md:w-[19.6875rem] max-lg:flex max-lg:flex-col max-lg:pointer-events-none max-lg:static max-lg:inset-auto md:max-lg:w-177 2xl:w-26.5" data-ditto-id="motion-li">
                  <a className="h-[16.3px] inline-flex items-center gap-2.5 text-primary text-[0.8125rem] leading-[1rem] uppercase cursor-pointer max-lg:h-12 max-lg:border max-lg:border-solid max-lg:border-clr-2 max-lg:flex max-lg:px-4 max-lg:rounded-lg max-lg:justify-between max-lg:font-medium max-lg:bg-background max-lg:pointer-events-none max-lg:gap-[initial] max-lg:[font-size:inherit] max-lg:leading-[inherit] 2xl:h-[1.175rem] 2xl:text-[0.9375rem] 2xl:leading-[1.1875rem] hover:border-clr-22 hover:text-clr-22 hover:outline-clr-22 hover:[text-decoration-color:var(--clr-22)] focus:border-clr-30 focus:text-clr-30 focus:outline-clr-30 focus:[text-decoration-color:var(--clr-30)]" data-component="link" href="/marketplace">
                    <strong className="block font-medium max-lg:pointer-events-none max-lg:[font-weight:inherit] hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]">
                      Marketplace
                    </strong>
                  </a>
                </li>
                <li className="w-27.5 list-item relative max-md:w-[19.6875rem] max-lg:flex max-lg:flex-col max-lg:pointer-events-none max-lg:static max-lg:inset-auto md:max-lg:w-177 2xl:w-31">
                  <a className="h-[16.3px] inline-flex items-center gap-2.5 text-color-001 text-[0.8125rem] leading-[1rem] uppercase cursor-pointer max-lg:h-12 max-lg:border max-lg:border-solid max-lg:border-background max-lg:flex max-lg:px-4 max-lg:rounded-lg max-lg:justify-between max-lg:text-background max-lg:font-medium max-lg:pointer-events-none max-lg:gap-[initial] max-lg:[font-size:inherit] max-lg:leading-[inherit] 2xl:h-[1.175rem] 2xl:text-[0.9375rem] 2xl:leading-[1.1875rem]" data-ditto-id="style-link" data-component="link" href="/best-designs">
                    <strong className="block font-medium max-lg:pointer-events-none max-lg:[font-weight:inherit]">
                      Best Designs
                    </strong>
                    <i className="w-3 h-3 flex justify-center items-center italic transform-[matrix(0,1,-1,0,0,0)] origin-[6px_6px] max-lg:w-[0.6875rem] max-lg:h-4.5 max-lg:transform-[none] max-lg:pointer-events-none max-lg:origin-[initial]">
                      <Icon2 />
                    </i>
                  </a>
                  <div className="w-75 h-77 border-t-[3px] border-solid border-t-color-001 block absolute top-5 left-[3.4375rem] opacity-0 rounded-[10px] bg-background shadow-[var(--clr-3)_0px_0px_20px_0px] transform-[matrix(1,0,0,1,-150,6)] pointer-events-none max-md:w-[19.6875rem] max-lg:h-114 max-lg:mt-5 max-lg:pl-7.5 max-lg:transform-[none] max-lg:border-t-[0] max-lg:border-initial max-lg:border-t-[initial] max-lg:static max-lg:top-auto max-lg:left-auto max-lg:opacity-[initial] max-lg:rounded-[initial] max-lg:bg-[initial] max-lg:shadow-[initial] md:max-lg:w-177 before:content-[''] before:block before:absolute before:-top-2.5 before:bottom-[19.1875rem] before:inset-x-0 before:w-4 before:h-2 before:mx-35.5 max-lg:before:hidden after:content-[''] after:block after:absolute after:-top-[0.9375rem] after:bottom-[19.0625rem] after:inset-x-0 after:w-75 after:h-[0.9375rem] max-lg:after:hidden">
                    <ul className="flex flex-col [list-style-type:none] list-outside pointer-events-none max-lg:gap-5">
                      {logos3.map((d, i) => <Logo3 key={i} d={d} styles={Logo3_styles[i]} />)}
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="block shrink-0 uppercase whitespace-nowrap text-nowrap max-lg:flex max-lg:my-7.5 max-lg:px-[0.9375rem] max-md:flex-col-reverse max-lg:justify-center max-lg:items-center max-lg:gap-5 max-lg:text-xl max-lg:leading-[1.5625rem] max-lg:pointer-events-none">
                <a className="h-9.5 min-h-9.5 inline-flex relative px-4.5 justify-center items-center gap-2.5 text-background text-[0.8125rem] leading-[1rem] cursor-pointer max-lg:hidden 2xl:text-[0.9375rem] 2xl:leading-[1.1875rem] before:content-[''] before:block before:absolute before:inset-0 before:w-39.5 before:h-9.5 before:bg-background before:opacity-0 before:transform-[matrix(1,0,-0.700208,1,0,0)] before:origin-[79px_19px] before:rounded-tl-sm max-lg:before:w-full max-lg:before:h-full max-lg:before:rounded-tl-[5px] max-lg:before:transform-[none] max-lg:before:origin-[initial] 2xl:before:w-44 2xl:before:origin-[88px_19px] 2xl:before:rounded-tl-[4.5px] hover:border-clr-23 hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] focus:border-clr-31 focus:text-clr-31 focus:outline-clr-31 focus:[text-decoration-color:var(--clr-31)]" data-ditto-id="style-link-2" data-component="link" href="/marketplace/project-brief">
                  <strong className="block relative z-1 font-medium hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]">
                    Find An Agency
                  </strong>
                  <Icon3 />
                </a>
              </div>
            </nav>
            <div className="w-9 flex items-center shrink-0 gap-7.5 uppercase max-lg:w-10 max-md:gap-5 md:max-lg:gap-[22.5px]">
              <a className="flex items-center gap-3.5 text-primary cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" aria-label="Login" href="/account/login">
                <i className="w-9 h-9 flex rounded-[50%] justify-center items-center italic bg-clr-7 max-lg:w-10 max-lg:h-10 max-lg:bg-clr-3 hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]">
                  <Icon4 />
                </i>
              </a>
            </div>
          </div>
          <button className="w-7.5 h-7.5 hidden relative min-w-0 py-px px-1.5 text-[0.8125rem] font-normal leading-4 text-center cursor-pointer max-lg:block" aria-label="Burger Navigation" id="burger" type="button">
            <span className="w-6.5 h-0.5 block absolute top-0 left-0 z-1 my-auto bg-color-001 max-lg:my-3.5 max-lg:mx-0.5 before:content-[''] before:block before:absolute before:inset-0 before:w-6.5 before:h-0.5 before:m-auto before:bg-color-001 max-lg:before:transform-[matrix(1,0,0,1,0,-8)] max-lg:before:origin-[13px_1px] max-lg:before:m-0 after:content-[''] after:block after:absolute after:inset-0 after:w-6.5 after:h-0.5 after:m-auto after:bg-color-001 max-lg:after:transform-[matrix(1,0,0,1,0,8)] max-lg:after:origin-[13px_1px] max-lg:after:m-0" />
          </button>
        </div>
      </div>
    </header>
  );
}
