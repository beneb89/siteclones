import Icon from "../svgs/svg-icon";
import TextLink7 from "../components/text-link7";
import NavLink2 from "../components/nav-link2";
import { textLink7Data as textLink7DataContent, textLink7Data2 as textLink7Data2Content, textLink7Data3 as textLink7Data3Content, textLink7Data4 as textLink7Data4Content, navLink2Data as navLink2DataContent } from "../content";
/** Site footer. */
export default function Footer({ textLink7Data = textLink7DataContent, textLink7Data2 = textLink7Data2Content, textLink7Data3 = textLink7Data3Content, textLink7Data4 = textLink7Data4Content, navLink2Data = navLink2DataContent } = {}) {
  return (
    <footer className="block pt-14 pb-6 text-color-004 bg-foreground">
      <div className="block max-w-330 px-6 mx-auto max-md:px-3.5 md:max-lg:px-4">
        <div className="border-b border-solid border-b-surface-9 grid pb-8 gap-8 grid-cols-[auto_1fr_1fr_1fr_1fr] max-md:grid-cols-1 md:max-lg:grid-cols-3">
          <div className="block max-lg:col-span-full">
            <div className="inline-flex items-center gap-2 text-surface text-[1.0625rem] font-bold leading-7 tracking-[-0.17px]">
              {" "}
              <Icon />
              {" "}
              <span className="block">
                <span className="inline">
                  Proxy
                </span>
                <span className="inline text-primary">
                  Look
                </span>
              </span>
              {" "}
            </div>
            {" "}
            <p className="block max-w-72 mt-3 text-color-001 text-[0.8125rem] leading-[1.3125rem]">
              The independent directory of proxy networks and antidetect browsers. Tested by humans, paid for by us, updated weekly.
            </p>
            {" "}
            <form className="block mt-3.5" id="pl-newsletter-form">
              <div className="block mb-2 text-[0.6875rem] font-bold leading-[1.125rem] tracking-[0.66px] uppercase">
                <i className="h-[0.6875rem] inline-block mr-1.5 [vertical-align:-1.375px] bg-color-004" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'/%3E%3C/svg%3E\")" }} />
                Weekly digest
              </div>
              {" "}
              <p className="block max-w-72 mb-2.5 text-color-001 text-xs leading-4.5">
                New benchmarks, deals, and awards — once a week. No spam.
              </p>
              {" "}
              <div className="flex gap-1.5">
                <input className="w-53.5 h-[2.4375rem] border border-solid border-surface-6 block min-w-0 py-2 px-3 rounded-md flex-1 overflow-clip text-surface text-[0.8125rem] leading-[1.375rem] bg-surface-9 cursor-text max-md:w-[15.6875rem] md:max-lg:w-160 2xl:w-54" data-ditto-id="style-email-address" data-component="input" aria-label="Email address" name="email" placeholder="you@example.com" type="email" />
                {" "}
                <button className="block py-2 px-3.5 rounded-md text-surface text-[0.8125rem] font-semibold leading-[1.375rem] text-center whitespace-nowrap text-nowrap bg-primary cursor-pointer" data-component="button" type="submit">
                  Subscribe
                </button>
                {" "}
              </div>
              {" "}
              <div className="h-4.5 min-h-4.5 block mt-2 text-xs leading-[1.25rem]" id="pl-newsletter-msg" />
              {" "}
            </form>
            {" "}
          </div>
          {" "}
          <div className="block">
            <div className="block mb-3 text-surface text-xs font-bold leading-[1.25rem] tracking-[0.72px] uppercase">
              Directory
            </div>
            {textLink7Data.map((d, i) => <TextLink7 key={i} d={d} />)}
            {" "}
          </div>
          {" "}
          <div className="block">
            <div className="block mb-3 text-surface text-xs font-bold leading-[1.25rem] tracking-[0.72px] uppercase">
              Tools
            </div>
            {textLink7Data2.map((d, i) => <TextLink7 key={i} d={d} />)}
            {" "}
          </div>
          {" "}
          <div className="block">
            <div className="block mb-3 text-surface text-xs font-bold leading-[1.25rem] tracking-[0.72px] uppercase">
              Resources
            </div>
            {textLink7Data3.map((d, i) => <TextLink7 key={i} d={d} />)}
            {" "}
          </div>
          {" "}
          <div className="block">
            <div className="block mb-3 text-surface text-xs font-bold leading-[1.25rem] tracking-[0.72px] uppercase">
              Company
            </div>
            {textLink7Data4.map((d, i) => <TextLink7 key={i} d={d} />)}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="flex pt-6 flex-wrap justify-between items-center gap-3 text-color-013 text-xs leading-[1.25rem]">
          <div className="block mb-2 text-muted text-xs leading-[1.1875rem]">
            {"Some links are affiliate links — we may earn a commission at no extra cost to you. We only recommend networks we've tested. "}
            <a className="inline text-clr-10 text-[0.8125rem] leading-[1.375rem] cursor-pointer hover:opacity-80" data-component="link" href="/about">
              Our methodology →
            </a>
          </div>
          {" "}
          <div className="block grow">
            © 2026 ProxyLook · Independent proxy research.
          </div>
          {" "}
          <nav className="flex flex-wrap items-center gap-y-2 gap-x-4.5" data-component="nav" aria-label="Legal">
            {navLink2Data.map((d, i) => <NavLink2 key={i} d={d} />)}
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
