import ListRow, { type ListRowData } from "../components/list-row";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
const ListRow_data: ListRowData[] = [
    { ariacontrols: "sm-1767225600706918-2", href: "/about-us/", id: "sm-1767225600706918-1", label: "About Us" },
    { ariacontrols: "sm-1767225600706918-4", href: "/services/", id: "sm-1767225600706918-3", label: "Services" },
    { ariacontrols: "sm-1767225600706918-6", href: "/packages/", id: "sm-1767225600706918-5", label: "Resources" }
];
const ListRow2_data: ListRow2Data[] = [
    { id: "e-n-menu-title-2291", href: "/about-us/", label: "\n\t\t\t\t\t\t\tAbout Us\t\t\t\t\t\t", ariacontrols: "e-n-menu-content-2291", id2: "e-n-menu-dropdown-icon-2291", label2: "Open About Us" },
    { id: "e-n-menu-title-2292", href: "/services/", label: "\n\t\t\t\t\t\t\tServices\t\t\t\t\t\t", ariacontrols: "e-n-menu-content-2292", id2: "e-n-menu-dropdown-icon-2292", label2: "Open Services" },
    { id: "e-n-menu-title-2293", href: "#", ariacurrent: "page", label: "\n\t\t\t\t\t\t\tResources\t\t\t\t\t\t", ariacontrols: "e-n-menu-content-2293", id2: "e-n-menu-dropdown-icon-2293", label2: "Open Resources" }
];
/** Top navigation bar. */
export default function Navbar({ listRowData = ListRow_data, listRow2Data = ListRow2_data } = {}) {
  return (
    <header className="block before:content-[''] before:table before:w-0 before:h-0">
      <div className="h-[3.5625rem] flex fixed inset-x-0 z-99 max-w-full flex-col bg-primary max-md:h-[6.8875rem]">
        <div className="w-full h-full flex max-w-[min(100%,_1200px)] mx-10 py-1.5 justify-center items-center grow gap-5 max-md:max-w-[min(100%,_767px)] max-md:flex-wrap max-md:gap-2.5 max-lg:mx-0 md:max-lg:max-w-[min(100%,_1024px)] 2xl:mx-90">
          <div className="w-full max-w-[37.4375rem] block relative min-w-0 gap-5 text-background font-medium text-center max-md:gap-2.5 max-md:leading-[1.375rem]">
            <div className="block [overflow-wrap:break-word]">
              {" Now offering AI SEO services! Speak to one of our AI SEO experts today. "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="block relative min-w-0 max-w-full gap-5 max-md:gap-2.5">
            <div className="block [overflow-wrap:break-word]">
              <div className="block">
                <a className="h-[2.8125rem] inline-block py-2.5 px-6 rounded-4xl font-bold leading-[1.5625rem] text-center bg-background cursor-pointer" data-ditto-id="motion-link" data-component="link" href="tel:1-877-736-1112">
                  {" "}
                  <span className="flex justify-center gap-[0.3125rem]">
                    {" "}
                    <span className="block whitespace-nowrap">
                      Call Us
                    </span>
                    {" "}
                  </span>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="h-[3.5625rem] flex relative invisible max-w-full flex-col bg-primary max-md:h-[6.8875rem]">
        <div className="w-full h-[3.5625rem] flex max-w-[min(100%,_1200px)] mx-10 py-1.5 justify-center items-center grow gap-5 max-md:h-[6.8875rem] max-md:max-w-[min(100%,_767px)] max-md:flex-wrap max-md:gap-2.5 max-lg:mx-0 md:max-lg:max-w-[min(100%,_1024px)] 2xl:mx-90">
          <div className="h-[31.5px] block relative min-w-0 max-w-full gap-5 text-background font-medium text-center max-md:h-[2.7rem] max-md:gap-2.5 max-md:leading-[1.375rem]">
            <div className="block [overflow-wrap:break-word]">
              {" Now offering AI SEO services! Speak to one of our AI SEO experts today. "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="h-[2.8125rem] block relative min-w-0 max-w-full gap-5 max-md:gap-2.5">
            <div className="h-[2.8125rem] block [overflow-wrap:break-word]">
              <div className="h-[2.8125rem] block">
                <a className="h-[2.8125rem] inline-block py-2.5 px-6 rounded-4xl font-bold leading-[1.5625rem] text-center bg-background cursor-pointer" href="tel:1-877-736-1112">
                  {" "}
                  <span className="h-[1.5625rem] flex justify-center gap-[0.3125rem]">
                    {" "}
                    <span className="block">
                      Call Us
                    </span>
                    {" "}
                  </span>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="flex relative z-99 max-w-full px-7.5 flex-col bg-background max-md:px-[0.9375rem] md:max-lg:px-5 2xl:px-0">
        <div className="w-full flex max-w-[min(100%,_1200px)] mx-2.5 justify-between grow gap-2.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:items-center max-md:gap-[0.9375rem] max-lg:mx-0 md:max-lg:max-w-[min(100%,_1024px)] 2xl:mx-90">
          <div className="w-0 h-[62.5px] block relative min-w-0 max-w-full gap-2.5">
            <div className="w-0 h-[62.5px] block [overflow-wrap:break-word]">
              <a className="h-[58.5px] block fixed top-120 right-0.5 left-274.5 z-10000 pt-3 pb-[0.9375rem] px-5 rounded-[30px] text-background font-bold [background-size:200%] transform-[matrix(0,1,-1,0,0,0)] origin-[180px_0px] cursor-pointer max-md:top-[749.5px] max-md:right-1 max-md:left-[11.9375rem] max-md:transform-[none] max-md:origin-[initial] md:max-lg:top-[38.4rem] md:max-lg:left-146.5 2xl:top-162 2xl:left-434.5 hover:[background-position:25.7551%_12.8776%] hover:transform-[matrix(0,1.02576,-1.02576,0,0,0)] focus:[background-position:4.14446%_2.07223%] focus:transform-[matrix(0,1.00414,-1.00414,0,0,0)]" style={{ backgroundImage: "linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)" }} data-component="link" href="/contact-us/" id="requestquote">
                Request a Quote
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="w-full border-b border-solid border-b-muted flex relative z-99 min-w-0 py-[0.9375rem] justify-between gap-5 max-md:flex-wrap max-md:justify-center max-md:gap-2.5 max-md:pt-0">
            <div className="block relative min-w-0 max-w-full gap-5 text-muted-foreground max-md:gap-2.5 max-md:text-[0.9375rem] max-md:text-center md:max-lg:text-[1rem]">
              <div className="block [overflow-wrap:break-word]">
                <p className="block">
                  {"Revenue Driven For Our Clients: "}
                  <strong className="inline font-bold">
                    {"$22 Million + "}
                  </strong>
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="block relative min-w-0 max-w-full gap-5 text-muted-foreground max-md:gap-2.5 max-md:text-[0.9375rem] max-md:text-center md:max-lg:text-[1rem]">
              <div className="block [overflow-wrap:break-word]">
                <span className="inline max-md:hidden">
                  {"Call for a "}
                </span>
                {"Free SEO Consultation: "}
                <span className="inline font-bold">
                  <a className="inline text-foreground cursor-pointer hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)]" data-component="link" href="tel:1-877-736-1112">
                    <span className="inline-block [font-family:'Font_Awesome_6_Free'] font-black leading-4.5 max-md:leading-[0.9375rem] md:max-lg:leading-4 before:content-[''] before:text-foreground before:text-lg before:font-black before:leading-4.5 max-md:before:text-[0.9375rem] max-md:before:leading-[0.9375rem] max-md:before:text-center md:max-lg:before:text-base md:max-lg:before:leading-4" aria-hidden="true" />
                    {" (877) 736-1112"}
                  </a>
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="min-h-27.5 flex relative z-999 max-w-full px-7.5 flex-col bg-background shadow-[var(--clr-0)_0px_5px_10px_0px] max-md:min-h-12.5 max-md:px-[0.9375rem] md:max-lg:min-h-22.5 md:max-lg:px-5 2xl:px-0" id="header">
        <div className="w-full flex max-w-[min(100%,_1200px)] mx-2.5 py-[0.9375rem] items-center grow max-md:max-w-[min(100%,_767px)] max-lg:py-2.5 max-md:flex-wrap max-lg:mx-0 md:max-lg:max-w-[min(100%,_1024px)] 2xl:mx-90 2xl:py-5">
          <div className="w-[27%] flex relative z-999 min-w-0 flex-col gap-5 max-md:w-[65%] max-md:flex-wrap md:max-lg:w-1/3">
            <div className="block relative z-1 min-w-0 max-w-full gap-5">
              <div className="block [overflow-wrap:break-word]">
                <a className="inline-block text-accent cursor-pointer hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)]" data-component="link" href="/">
                  {" "}
                  <img className="w-62.5 h-[3.8125rem] inline-block max-w-full overflow-clip aspect-[auto_294/72] align-middle max-md:w-45 max-md:h-11 md:max-lg:w-55 md:max-lg:h-13.5 2xl:w-[18.4375rem] 2xl:h-18 hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)] focus:border-accent focus:text-accent focus:outline-accent focus:[text-decoration-color:var(--accent)]" data-component="image" alt="seoTuners Logo (Black)" height="72" src="/assets/cloned/svg/56e5bd5f7ff0.svg" width="294" />
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="w-[73%] flex relative z-999 min-w-0 justify-end items-center gap-[2.1875rem] max-md:w-[35%] max-lg:flex-row-reverse max-md:flex-wrap-reverse max-lg:justify-start max-md:gap-2.5 md:max-lg:w-2/3 md:max-lg:gap-[1.5625rem] 2xl:gap-[3.4375rem]">
            <div className="hidden relative min-w-0 max-w-full gap-[2.1875rem] max-lg:block max-md:gap-2.5 md:max-lg:gap-[1.5625rem]">
              <div className="flex flex-col [overflow-wrap:break-word]">
                {" "}
                <div className="hidden min-w-0 p-[5.5px] rounded-[3px] justify-center items-center text-background text-[1.375rem] bg-foreground cursor-pointer max-lg:flex max-lg:p-[0.425rem] max-lg:text-[1.6875rem] max-lg:rounded-[initial]" aria-expanded="false" aria-label="Menu Toggle" role="button">
                  <i className="inline-block [font-family:eicons] leading-5.5 max-lg:block max-lg:leading-[1.6875rem] before:content-[''] before:text-background before:text-[1.375rem] before:leading-5.5 max-lg:before:text-[1.6875rem] max-lg:before:leading-[1.6875rem]" aria-hidden="true" role="presentation" />
                  {" "}
                </div>
                {" "}
                <nav className="hidden absolute top-0 left-0 z-9997 min-w-0 max-h-0 mt-2.5 overflow-hidden text-[0.8125rem] bg-background transform-[none] max-lg:h-0 max-lg:block max-lg:top-[40.5px] max-md:-right-[0.5625rem] max-md:left-[-325.5px] max-lg:transform-[matrix(1,0,0,0,0,0)] max-md:origin-[187.5px_0px] md:max-lg:-right-5 md:max-lg:left-[-707.5px] md:max-lg:mt-5.5 md:max-lg:origin-[384px_0px]" aria-hidden="true">
                  <ul className="block relative z-2 mb-6 leading-[0.9375rem] [list-style-type:disc] list-outside after:content-[' '] after:block after:h-0 after:text-foreground after:text-[0rem] after:leading-0 after:[overflow:hidden] after:w-full" id="menu-2-72f1927">
                    {listRowData.map((d, i) => <ListRow key={i} d={d} />)}
                    <li className="block relative [list-style-type:none]">
                      <a className="flex relative py-2.5 px-5 items-center text-clr-1 font-medium leading-5 cursor-pointer max-md:text-[0.9375rem]" href="/contact-us/">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  {" "}
                </nav>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="w-[77.5%] block relative min-w-0 max-w-full grow gap-[2.1875rem] max-lg:hidden 2xl:w-3/4 2xl:gap-[3.4375rem]">
              <div className="block [overflow-wrap:break-word]">
                <nav className="flex relative flex-col" data-component="nav" aria-label="Menu">
                  {" "}
                  <div className="flex flex-col max-lg:hidden" aria-labelledby="menu-toggle-229" id="menubar-229">
                    <ul className="flex flex-wrap justify-end [list-style-type:disc] list-outside">
                      {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
                      <li className="w-0 h-11.5 flex [list-style-type:none]">
                        {" "}
                      </li>
                    </ul>
                    {" "}
                  </div>
                  {" "}
                </nav>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="block relative z-1 min-w-0 max-w-full gap-[2.1875rem] text-right max-md:hidden md:max-lg:gap-[1.5625rem] 2xl:gap-[3.4375rem]">
              <div className="block [overflow-wrap:break-word]">
                <div className="block">
                  <a className="h-[3.1875rem] inline-block py-[0.8125rem] px-9 rounded-4xl text-background font-bold leading-[1.5625rem] text-center bg-primary [background-size:200%] cursor-pointer hover:bg-clr-5 hover:[background-position:25.7482%_12.8741%] focus:bg-clr-8 focus:[background-position:4.14035%_2.07018%]" style={{ backgroundImage: "linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)" }} data-component="link" href="/contact-us/">
                    {" "}
                    <span className="flex justify-center gap-[0.3125rem]">
                      {" "}
                      <span className="block whitespace-nowrap">
                        Contact Us
                      </span>
                      {" "}
                    </span>
                    {" "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </header>
  );
}
