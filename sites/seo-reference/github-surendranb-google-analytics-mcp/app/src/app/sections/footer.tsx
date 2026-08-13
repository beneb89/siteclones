import Icon39 from "../svgs/svg-icon39";
import ListRow2 from "../components/list-row2";
import { listRow2Data as listRow2DataContent } from "../content";
/** Site footer. */
export default function Footer({ listRow2Data = listRow2DataContent } = {}) {
  return (
    <footer className="block pt-12 pb-10 px-4 text-muted-foreground text-xs leading-4.5 md:max-lg:px-10" role="contentinfo">
      <h2 className="w-px h-px block absolute overflow-hidden text-2xl font-semibold leading-9 [overflow-wrap:normal] [clip-path:inset(0px_100%_100%_0px)]" data-component="heading">
        Footer
      </h2>
      {" "}
      <div className="flex justify-center items-center max-lg:flex-col-reverse max-lg:flex-wrap">
        <div className="flex mx-2 items-center shrink-0">
          <a className="h-6.5 block mr-2 cursor-pointer hover:border-clr-16 hover:text-clr-16 hover:outline-clr-16 hover:[text-decoration-color:var(--clr-16)] hover:underline" data-component="link" aria-label="GitHub Homepage" href="/">
            {" "}
            <Icon39 />
            {" "}
          </a>
          {" "}
          <span className="block">
            {" © 2026 GitHub, Inc. "}
          </span>
          {" "}
        </div>
        {" "}
        <nav className="block" data-component="nav" aria-label="Footer">
          <h3 className="w-px h-px block absolute overflow-hidden text-xl font-semibold leading-7.5 [overflow-wrap:normal] [clip-path:inset(0px_100%_100%_0px)]" data-component="heading" id="sr-footer-heading">
            Footer navigation
          </h3>
          {" "}
          <ul className="flex flex-wrap justify-center [list-style-type:none] list-outside max-lg:mb-2" aria-labelledby="sr-footer-heading">
            {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
            <li className="list-item mx-2">
              <cookie-consent-link class="block">
                <button className="inline-block text-center cursor-pointer whitespace-nowrap hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline" data-component="button" type="button">
                  {" Manage cookies "}
                </button>
                {" "}
              </cookie-consent-link>
              {" "}
            </li>
            <li className="list-item mx-2">
              <cookie-consent-link class="block">
                <button className="inline-block text-left cursor-pointer whitespace-nowrap hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline" data-component="button" type="button">
                  {" Do not share my personal information "}
                </button>
                {" "}
              </cookie-consent-link>
              {" "}
            </li>
          </ul>
          {" "}
        </nav>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
