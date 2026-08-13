import ListRow3 from "../components/list-row3";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import { listRow3Data as listRow3DataContent } from "../content";
/** Android Chrome Firebase section. */
export default function AndroidChromeFirebaseSection({ listRow3Data = listRow3DataContent } = {}) {
  return (
    <devsite-footer-utility class="block ml-[16.8125rem] px-6 text-sm leading-4 bg-surface-3 max-md:px-4 max-lg:ml-0">
      <div className="block">
        <nav className="border-b border-solid border-b-border flex pt-6 pb-[1.4375rem] items-center gap-x-10 max-lg:flex-col max-lg:items-start max-lg:gap-y-4 max-lg:gap-x-[initial]" data-component="nav" aria-label="Other Google Developers websites">
          <a className="h-[1.9375rem] flex text-primary [word-break:break-word] cursor-pointer focus:underline" data-component="link" href="/">
            {" "}
            <picture className="w-[11.5625rem] h-[1.9375rem] block">
              <img className="w-[11.5625rem] h-8 inline max-w-full -mt-1 overflow-clip" data-component="image" alt="Google Developers" src="/assets/cloned/svg/330f1dd9efa3.svg" />
              {" "}
            </picture>
            {" "}
          </a>
          {" "}
          <ul className="flex flex-wrap gap-x-10 [list-style-type:none] list-outside max-lg:flex-col max-lg:items-start">
            {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
          </ul>
          {" "}
        </nav>
        {" "}
        <nav className="flex py-6 flex-wrap items-center gap-4" data-component="nav" aria-label="Utility links">
          <ul className="min-h-9 flex flex-wrap items-center flex-1 gap-y-4 gap-x-2 [list-style-type:none] list-outside max-lg:basis-full">
            <li className="w-9.5 flex shrink-0 before:content-[''] before:block before:w-0 before:h-4">
              <a className="block [word-break:break-word] cursor-pointer whitespace-nowrap hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)] focus:underline" data-component="link" href="/terms/site-terms">
                {" Terms "}
              </a>
              {" "}
            </li>
            <li className="w-[3.5625rem] flex shrink-0 before:content-['|'] before:block before:w-[0.1875rem] before:h-4 before:mr-2 before:text-foreground before:text-sm before:leading-4">
              <a className="block [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)] focus:underline" data-component="link" href="https://policies.google.com/privacy">
                {" Privacy "}
              </a>
              {" "}
            </li>
          </ul>
          {" "}
          <devsite-language-selector class="block relative self-end" aria-label="Select your language preference.">
            <button className="w-[8.8125rem] h-9 border border-solid border-border flex max-w-38.5 pr-[0.4375rem] pl-[0.6875rem] rounded-sm items-center [font-family:'Google_Sans',_'Noto_Sans',_'Noto_Sans_JP',_'Noto_Sans_KR',_'Noto_Naskh_Arabic',_'Noto_Sans_Thai',_'Noto_Sans_Hebrew',_'Noto_Sans_Bengali',_sans-serif] font-medium leading-9 text-center bg-surface-3 cursor-pointer" data-component="button" aria-controls="language-menu" aria-haspopup="true" type="button">
              <Icon2 />
              {" "}
              <span className="block overflow-hidden whitespace-nowrap text-nowrap">
                Language
              </span>
              {" "}
              <Icon3 />
              {" "}
            </button>
            {" "}
          </devsite-language-selector>
          {" "}
        </nav>
        {" "}
      </div>
      {" "}
    </devsite-footer-utility>
  );
}
