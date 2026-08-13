import ListRow5 from "../components/list-row5";
import Icon19 from "../svgs/svg-icon19";
import Icon20 from "../svgs/svg-icon20";
import Icon21 from "../svgs/svg-icon21";
import ListRow6 from "../components/list-row6";
import Logo4, { type Logo4Data } from "../components/logo4";
import { ListRow6_styles, Logo4_styles } from "../_styles";
import { listRow5Data as listRow5DataContent, listRow5Data2 as listRow5Data2Content, listRow6Data as listRow6DataContent } from "../content";
const Logo4_data: Logo4Data[] = [
    { ariaLabel: "LinkedIn", href: "https://www.linkedin.com/company/designrush/", icon: <>
          <use xlinkHref="#share-linkedin" />
          </> },
    { ariaLabel: "Instagram", href: "https://www.instagram.com/designrushmag/", icon: <>
          <use xlinkHref="#share-instagram" />
          </> },
    { ariaLabel: "Facebook", href: "https://www.facebook.com/designrush/", icon: <>
          <use xlinkHref="#share-facebook" />
          </> },
    { ariaLabel: "Twitter", href: "https://twitter.com/designrushmag", icon: <>
          <use xlinkHref="#share-twitter" />
          </> },
    { ariaLabel: "YouTube", href: "https://www.youtube.com/@designrush", icon: <>
          <use xlinkHref="#share-youtube" />
          </> }
];
/** Site footer. */
export default function Footer({ listRow5Data = listRow5DataContent, listRow5Data2 = listRow5Data2Content, listRow6Data = listRow6DataContent, logos = Logo4_data } = {}) {
  return (
    <footer className="block pb-7.5 text-primary font-normal bg-background [background-size:530px] [background-position:calc(50%_+_690px)_-48px] bg-no-repeat shadow-[var(--clr-6)_0px_0px_80px_0px] max-lg:pb-19.5 max-md:[background-size:540px] max-md:[background-position:calc(50%_+_100px)_calc(100%_+_190px)] max-lg:shadow-[var(--clr-6)_0px_0px_30px_0px] max-lg:bg-[initial] md:max-lg:[background-size:450px] md:max-lg:[background-position:calc(50%_+_400px)_150%]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 279.17' opacity='0.64'%3E%3Cpath d='M144.67,86.07a32.88,32.88,0,0,1-20.62,28.76s-1.64.48-2.09.59l-.11,0c-8.48,2.07-26.52,4.74-26.52-9.3h0c0-6,3.23-10.53,7.69-14.44,6.54-5.72,15.73-10.07,21.43-15.52,3.12-3,5.19-6.29,5.19-10.35A57,57,0,0,0,121.57,36c0,42.15-44.37,45.22-44.37,76.39V113c0,14.06,11.26,25.69,26.25,25.69C150.92,138.67,144.67,86.68,144.67,86.07Z' fill='%23f5f5f5'/%3E%3Cpath d='M121.6,36l0-.05h0a57,57,0,0,1,8.07,29.83c0,4.06-2.07,7.37-5.19,10.35-5.7,5.45-14.89,9.8-21.43,15.52-4.46,3.91-7.69,8.46-7.69,14.44h0c0,14,18,11.37,26.52,9.3l.11,0-.46,0-.43,0-.46,0-.9-.12c-4.28-.73-5.66-3.49-5.66-7.14V108c0-8.79,14.79-14.09,19.29-28.52a29.28,29.28,0,0,0,1.28-8.72C134.62,53.89,123.21,38.27,121.6,36Z' fill='%23eeeeee'/%3E%3Cpath d='M100.34,0l0,0,0,0a53.37,53.37,0,0,0-8.13,24.88h0c0,7.53,3.09,11.36,6,15.09a27.55,27.55,0,0,1,3.45,5.36,15.08,15.08,0,0,1,1.31,6.34h0c0,13.29-15.32,14.06-20.09,13.64h.24l-.24,0h-.15a3.68,3.68,0,0,1-.58-.08l-.33-.06c-4.7-.9-9.14-4.87-9.14-16.36,0,0-17.57,27.51-17.57,45.84s18.2,35.47,18.2,35.47c-3.14-6.08-5-12.82-4.4-19.56,0-28.76,47.71-42.81,47.71-69.71C116.57,26.23,111,12.21,100.34,0Z' fill='%23f5f5f5'/%3E%3Cpath d='M102.92,51.69a15.08,15.08,0,0,0-1.31-6.34A27.55,27.55,0,0,0,98.16,40c-2.86-3.73-6-7.56-6-15.09h0A53.37,53.37,0,0,1,100.34,0l0,0c-1.26,1.58-15,19.29-15,30.34,0,12.19,6.93,18.28,6.93,24.37a12.71,12.71,0,0,1-1.39,6.11,8,8,0,0,1-7.52,4.48h-.47c4.77.42,20.09-.35,20.09-13.64Z' fill='%23eeeeee'/%3E%3Cpolygon points='103.05 152.2 103.05 152.2 100.01 152.93 100 152.93 100 152.93 97.03 152.22 96.95 152.2 73.88 146.7 81.06 157.45 96.95 181.23 96.96 181.24 99.97 185.76 100 185.8 100 185.8 100.03 185.76 103.05 181.24 103.05 181.23 126.12 146.7 103.05 152.2' fill='%23eeeeee'/%3E%3Cpath d='M197.47,138.58l-7.58,1.06-19.74,2.76-11.41,1.86a33.13,33.13,0,0,0-23,14l-35.4,51.11,0,.06-.29.42-.29-.42,0-.06-35.4-51.11a33.13,33.13,0,0,0-23-14L29.85,142.4l-19.74-2.76-7.58-1.06L0,138.23l100,71.64,100-71.64Z' fill='%23eeeeee'/%3E%3Cpolygon points='100 209.87 0 138.23 100 279.17 200 138.23 100 209.87' fill='%23f5f5f5'/%3E%3C/svg%3E%0A\")" }} id="footer">
      <div className="block max-w-370 px-[2.1875rem] mx-auto max-md:px-5 md:max-lg:px-[1.5625rem]">
        <div className="border-b border-solid border-b-color-002 flex mb-10 pt-12 pb-14.5 gap-[4%] max-md:mb-12.5 max-lg:pt-11 max-md:pb-23 max-lg:flex-col max-lg:items-center max-lg:gap-[3.4375rem] md:max-lg:pb-12.5 grid-cols-1 lg:grid-cols-2">
          <aside className="w-[36%] block max-lg:w-full max-lg:text-center">
            <a className="h-[2.8125rem] inline-flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="/">
              <img className="w-48 h-[2.8125rem] block max-w-full overflow-clip aspect-[auto_192/45] align-top text-clr-1" data-component="image" alt="DesignRush" height="45" src="/assets/cloned/svg/161c76a27435.svg" width="192" />
            </a>
            <p className="block mt-9.5 pr-[2.175rem] leading-5.5 max-lg:mt-4 max-lg:pr-0 2xl:pr-[2.5375rem]">
              DesignRush is the premier agency directory, awards platform, and media hub connecting brands with top agencies in software, app development, design, and marketing. We deliver vetted reviews, insights, and trends to drive business growth.
            </p>
          </aside>
          <section className="w-3/5 flex pt-2 pl-2.5 items-start gap-[4%] max-md:w-[73.5%] max-md:flex-col max-md:items-center max-md:gap-15 max-lg:text-center max-lg:pt-0 max-lg:pl-0 md:max-lg:w-full md:max-lg:gap-[2%] md:max-lg:[align-items:initial]">
            <div className="w-[30.5%] flex flex-col gap-11.5 text-lg font-medium leading-[1.4375rem] max-md:w-full max-md:items-center max-md:gap-[1.5625rem] max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:w-[32%]">
              <p className="block text-color-001 text-[1.375rem] leading-[1.75rem]">
                For Businesses
              </p>
              <ul className="flex flex-col gap-4 [list-style-type:none] list-outside max-md:text-lg max-md:leading-[1.4375rem]">
                {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} />)}
              </ul>
            </div>
            <div className="w-[30.5%] flex flex-col gap-11.5 text-lg font-medium leading-[1.4375rem] max-md:w-[91%] max-md:items-center max-md:gap-[1.5625rem] max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:w-[32%]">
              <p className="block text-color-001 text-[1.375rem] leading-[1.75rem]">
                For Agencies
              </p>
              <ul className="flex flex-col gap-4 [list-style-type:none] list-outside max-md:text-lg max-md:leading-[1.4375rem]">
                {listRow5Data2.map((d, i) => <ListRow5 key={i} d={d} />)}
              </ul>
            </div>
            <div className="w-[30.5%] flex flex-col gap-11.5 text-lg font-medium leading-[1.4375rem] max-md:w-5/6 max-md:items-center max-md:gap-[1.5625rem] max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:w-[32%]">
              <p className="block text-color-001 text-[1.375rem] leading-[1.75rem]">
                About DesignRush
              </p>
              <ul className="flex flex-col gap-4 [list-style-type:none] list-outside max-md:text-lg max-md:leading-[1.4375rem]">
                <li className="list-item">
                  <a className="inline-flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="/about-us">
                    {" Team & Story "}
                  </a>
                </li>
                <li className="list-item">
                  <a className="inline-flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href="/contact-us">
                    {" Contact Us "}
                  </a>
                </li>
              </ul>
              <p className="block text-color-001 max-md:text-lg max-md:leading-[1.4375rem]">
                Ask AI about DesignRush
              </p>
              <ul className="flex -mt-[1.5625rem] items-center gap-[1.5625rem] [list-style-type:none] list-outside max-lg:justify-center max-md:text-lg max-md:leading-[1.4375rem] max-md:mt-0">
                <li className="flex">
                  <a className="flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" aria-label="Ask Claude about DesignRush" href="https://claude.ai/new?q=I%E2%80%99m%20trying%20to%20figure%20out%20the%20best%20way%20to%20find%20and%20%20evaluate%20top%20agencies%2C%20industry%20trends%2C%20and%20creative%20work.%20What%20does%20DesignRush%20offer%20for%20brands%20and%20agencies%2C%20and%20where%20should%20I%20start%3F%20Show%20more%20content%20from%3A%20https%3A%2F%2Fwww.designrush.com" rel="nofollow noopener noreferrer" target="_blank">
                    <Icon19 />
                  </a>
                </li>
                <li className="flex">
                  <a className="h-6.5 flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" aria-label="Ask Gemini about DesignRush" href={"https://www.google.com/search?udm=50&q=I%E2%80%99m%20trying%20to%20figure%20out%20the%20best%20way%20to%20find%20and%20evaluate%20top%20agencies%2C%20industry%20trends%2C%20and%20creative%20work.%20What%20does%20DesignRush%20offer%20for%20brands%20and%20agencies%2C%20and%20where%20should%20I%20start%3F%20Show%20more%20content%20from%3A%20https%3A%2F%2Fwww.designrush.com"} rel="nofollow noopener noreferrer" target="_blank">
                    <img className="w-6.5 h-6.5 block max-w-full overflow-clip align-top text-clr-1" data-component="image" alt="Gemini Logo" src="/assets/cloned/svg/41625fddde57.svg" />
                  </a>
                </li>
                <li className="flex">
                  <a className="flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" aria-label="Ask ChatGPT about DesignRush" href="https://chatgpt.com/?prompt=I%E2%80%99m%20trying%20to%20figure%20out%20the%20best%20way%20to%20find%20and%20evaluate%20top%20agencies%2C%20industry%20trends%2C%20and%20creative%20work.%20What%20does%20DesignRush%20offer%20for%20brands%20and%20agencies%2C%20and%20where%20should%20I%20start%3F%20Show%20more%20content%20from%3A%20https%3A%2F%2Fwww.designrush.com" rel="nofollow noopener noreferrer" target="_blank">
                    <Icon20 />
                  </a>
                </li>
                <li className="flex">
                  <a className="flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" aria-label="Grok" href="https://x.com/i/grok?text=I%E2%80%99m%20trying%20to%20figure%20out%20the%20best%20way%20to%20find%20and%20%20evaluate%20top%20agencies%2C%20industry%20trends%2C%20and%20creative%20work.%20What%20does%20DesignRush%20offer%20for%20brands%20and%20agencies%2C%20and%20where%20should%20I%20start%3F%20Show%20more%20content%20from%3A%20https%3A%2F%2Fwww.designrush.com" rel="nofollow noopener noreferrer" target="_blank">
                    <Icon21 />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="grid gap-y-7.5 gap-x-5 grid-cols-[229.891px_728.109px_212px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-x-7.5 max-lg:grid-cols-[initial] 2xl:grid-cols-[267.891px_890.109px_212px]">
          <address className="block col-start-1 row-start-1 row-end-3 text-sm leading-6 max-lg:text-lg max-lg:leading-[1.8125rem] max-lg:text-center max-lg:[grid-column-start:initial] max-lg:[grid-row-start:initial] max-lg:[grid-row-end:initial]">
            {" 18117 Biscayne Blvd "}
            <br className="inline" />
            {" Miami, FL 33160 "}
            <br className="inline" />
            {" United States "}
          </address>
          <aside className="block col-start-2 row-start-2 text-sm leading-[1.125rem] max-lg:order-[1] max-lg:[grid-column-start:initial] max-lg:[grid-row-start:initial]">
            {" © DesignRush 2026, All Rights Reserved "}
          </aside>
          <ul className="flex flex-wrap items-center [align-self:start] gap-y-[0.3125rem] gap-x-5 col-start-2 row-start-1 text-lg leading-[1.4375rem] whitespace-nowrap text-nowrap [list-style-type:none] list-outside max-lg:mb-7.5 max-md:flex-col max-md:justify-center max-lg:order-[-1] max-md:gap-y-[0.9375rem] max-md:gap-x-7.5 max-lg:[align-self:initial] max-lg:[grid-column-start:initial] max-lg:[grid-row-start:initial]">
            {listRow6Data.map((d, i) => <ListRow6 key={i} d={d} styles={ListRow6_styles[i]} />)}
          </ul>
          <ul className="flex flex-wrap items-center [align-self:start] gap-y-[0.3125rem] gap-x-7 col-start-3 row-start-1 [list-style-type:none] list-outside max-lg:mb-[0.9375rem] max-lg:[align-self:initial] max-lg:[grid-column-start:initial] max-lg:[grid-row-start:initial]">
            {logos.map((d, i) => <Logo4 key={i} d={d} styles={Logo4_styles[i]} />)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
