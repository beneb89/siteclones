import HeroSection from "./sections/hero-section";
import GalleryShowcaseSection from "./sections/gallery-showcase-section";
import CtaSection from "./sections/cta-section";
import LogoCloudSection from "./sections/logo-cloud-section";
import Footer from "./sections/footer";
import Tile, { type TileData } from "./components/tile";
import Tile2, { type Tile2Data } from "./components/tile2";
import Tile3, { type Tile3Data } from "./components/tile3";
import Icon from "./svgs/svg-icon";
import ListRow, { type ListRowData } from "./components/list-row";
import ListRow2, { type ListRow2Data } from "./components/list-row2";
import ListRow3, { type ListRow3Data } from "./components/list-row3";
import { Tile3_styles, ListRow_styles, ListRow_styles2, ListRow_styles3, ListRow_styles4, ListRow2_styles } from "./_styles";

const Tile_data: TileData[] = [
    { href: "/categories", label: "Categories" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/designers/search", label: "Find a designer" },
    { href: "/discover", label: "Inspiration" },
    { href: "/pro/studio", label: "Studio" }
];
const Tile2_data: Tile2Data[] = [
    { href: "/inspiration/websites/analytics", label: "\n            Analytics websites        " },
    { href: "/inspiration/websites/real-estate", label: "\n            Real estate websites        " },
    { href: "/inspiration/websites/business", label: "\n            Business websites        " },
    { href: "/inspiration/websites/marketing", label: "\n            Marketing websites        " },
    { href: "/inspiration/websites/advertising", label: "\n            Advertising websites        " },
    { href: "/inspiration/websites/rental", label: "\n            Rental websites        " },
    { href: "/inspiration/websites/architecture", label: "\n            Architecture websites        " },
    { href: "/inspiration/websites/management", label: "\n            Management websites        " },
    { href: "/inspiration/websites/bootstrap", label: "\n            Bootstrap websites        " },
    { href: "/inspiration/websites/b2b", label: "\n            B2B websites        " },
    { href: "/inspiration/websites/corporate", label: "\n            Corporate websites        " },
    { href: "/inspiration/websites/digital-marketing", label: "\n            Digital websites        " },
    { href: "/inspiration/websites/development", label: "\n            Development websites        " },
    { href: "/inspiration/websites/dark", label: "\n            Dark websites        " },
    { href: "/inspiration/websites/clothing", label: "\n            Clothing websites        " },
    { href: "/inspiration/websites/school", label: "\n            School websites        " },
    { href: "/inspiration/websites/personal", label: "\n            Personal websites        " },
    { href: "/inspiration/websites/education", label: "\n            Education websites        " },
    { href: "/inspiration/websites/responsive", label: "\n            Responsive websites        " }
];
const Tile3_data: Tile3Data[] = [
    { text: "Types of websites", description: "There are 8 different types of websites. Find out what they are, so you can decide which will meet your needs… ", href: "/blog/web-digital/types-of-websites/" },
    { text: "How to create a website", description: "Creating a website can be complicated. This guide will walk you through the process of getting a website step-by-step… ", href: "/blog/web-digital/web-design-how-to/" },
    { text: "Web design colors", description: "Choosing the right website colors can highlight your business’ strengths and help you attract the right customers… ", href: "/blog/web-digital/web-design-colors/" }
];
const ListRow_data: ListRowData[] = [
    { href: "/about", label: "About" },
    { href: "/about/contact", label: "Contact" },
    { href: "/about/press-releases", label: "Press releases" },
    { href: "/about/media", label: "In the media" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/nonprofits", label: "99nonprofits" }
];
const ListRow_data2: ListRowData[] = [
    { href: "/contests", label: "Design contests" },
    { href: "/projects", label: "1-to-1 Projects" },
    { href: "/designers/search", label: "Find a designer" },
    { href: "/discover", label: "Discover inspiration" },
    { href: "/pricing", label: "Pricing" },
    { href: "/pro/studio", label: "99designs Studio" },
    { href: "/pro", label: "99designs Pro" }
];
const ListRow_data3: ListRowData[] = [
    { href: "/logo-design", label: "Logo design" },
    { href: "/business-card-design", label: "Business card" },
    { href: "/web-design", label: "Web page design" },
    { href: "/brand-guide", label: "Brand guide" },
    { href: "/product-packaging-design", label: "Packaging design" },
    { href: "/t-shirt-design", label: "T-shirt design" },
    { href: "/book-cover-design", label: "Book cover design" },
    { href: "/categories", label: "Browse all categories" }
];
const ListRow_data4: ListRowData[] = [
    { href: "/designers", label: "Become a designer" },
    { href: "/blog/", label: "Blog" },
    { href: "/design-without-borders", label: "Design without borders" },
    { href: "/best-design-awards", label: "99awards" },
    { href: "/affiliates", label: "Affiliates" },
    { href: "/inspiration/logos", label: "Logo ideas" },
    { href: "/inspiration/t-shirt-designs", label: "T-shirt ideas" },
    { href: "/designer-resource-center", label: "Designer resources" },
    { href: "/featured-partners", label: "Featured partners" },
    { href: "/help", label: "Help" }
];
const ListRow2_data: ListRow2Data[] = [
    { href: "/categories", label: "Browse categories" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/designers/search", label: "Find a designer" },
    { href: "/discover", label: "Inspiration" },
    { href: "/pro", label: "99designs Pro" }
];
const ListRow3_data: ListRow3Data[] = [
    { href: "/contests", label: "Design contests" },
    { href: "/projects", label: "1-to-1 Projects" },
    { href: "/designers/search", label: "Find a designer" },
    { href: "/discover", label: "Discover inspiration" },
    { href: "/pro/studio", label: "99designs Studio" },
    { href: "/pro", label: "99designs Pro" }
];
const ListRow3_data2: ListRow3Data[] = [
    { href: "/logo-design", label: "Logo design" },
    { href: "/business-card-design", label: "Business card" },
    { href: "/web-design", label: "Web page design" },
    { href: "/brand-guide", label: "Brand guide" },
    { href: "/categories", label: "Browse all categories" }
];
const ListRow3_data3: ListRow3Data[] = [
    { href: "/pricing", label: "Pricing" },
    { href: "/designers", label: "Become a designer" },
    { href: "/blog/", label: "Blog" }
];

export default function Page() {
  return (
    <>
      <div className="min-h-187.5 flex relative flex-col flex-1 overflow-hidden max-md:min-h-190.5 md:max-lg:min-h-243.5 2xl:min-h-257.5">
        <div className="flex relative z-3 flex-col flex-1 bg-background">
          {" "}
          <div className="block">
            <div className="block">
              <header className="block">
                <div className="block relative z-4 max-w-325 py-5 px-[0.9375rem] mx-auto max-md:px-[7.5px]">
                  <div className="flex relative px-[0.9375rem] items-center max-md:px-[7.5px]">
                    <div className="hidden min-w-0 max-lg:block">
                      <button className="inline-block text-[1.5625rem] leading-10 text-left cursor-pointer max-lg:h-10 before:content-[''] before:inline-block before:text-foreground before:text-[1.5625rem] before:leading-10 before:text-left max-lg:before:w-[1.5625rem] max-lg:before:h-10" aria-label="Menu" type="button" />
                    </div>
                    <div className="w-30 block max-md:w-[17.0625rem] max-lg:flex max-lg:flex-col max-lg:text-center md:max-lg:w-159">
                      <a className="block cursor-pointer max-lg:h-10 hover:underline focus:border-primary focus:text-primary focus:outline-clr-10 focus:[outline-style:dotted] focus:outline-1 focus:[text-decoration-color:var(--primary)]" data-component="link" href="/" title="99designs by Vista">
                        <div className="h-10 inline-block align-middle text-center indent-[-9999px] [background-size:100%] [background-position:50%_50%] bg-no-repeat max-lg:[text-align:inherit]" style={{ backgroundImage: "url(\"/assets/cloned/svg/fd5b7d482318.svg\")" }} aria-label="99designs by Vista" />
                      </a>
                    </div>
                    <div className="block pl-5 max-lg:hidden 2xl:pl-[2.1875rem]">
                      <div className="flex justify-end items-center">
                        {Tile_data.map((d, i) => <Tile key={i} d={d} />)}
                      </div>
                    </div>
                    <div className="block ml-[22.7rem] text-right max-lg:hidden 2xl:ml-[20.825rem]">
                      <div className="flex justify-end items-center">
                        <div className="block ml-[0.9375rem] 2xl:ml-5">
                          <a className="h-[1.6rem] flex items-center [font-family:'Graphik_Medium',_sans-serif] whitespace-nowrap text-nowrap cursor-pointer focus:outline-clr-10 focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/help">
                            <span className="block before:content-[''] before:mr-[0.3rem] before:text-foreground before:text-base before:leading-[1.625rem] before:text-right" />
                            1 800 513 1678
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block ml-[0.9375rem] max-lg:hidden 2xl:ml-5">
                      <div className="flex justify-end items-center">
                        <div className="block">
                          <a className="h-[1.6rem] flex items-center [font-family:'Graphik_Medium',_sans-serif] whitespace-nowrap text-nowrap cursor-pointer focus:outline-clr-10 focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/login">
                            Log in
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="hidden min-w-0 max-lg:block">
                      <div className="flex justify-end items-center">
                        <div className="block min-w-0">
                          <a className="flex items-center [font-family:'Graphik_Medium',_sans-serif] whitespace-nowrap text-nowrap cursor-pointer max-lg:h-[1.6rem]" href="/login">
                            Log in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              {" "}
            </div>
            {" "}
            <div className="block">
              <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                <div className="w-full block relative float-left px-[0.9375rem] max-md:px-[7.5px]">
                  <div className="flex mt-[0.9375rem] mb-7.5 justify-between items-end max-lg:flex-col max-lg:justify-center max-lg:items-start max-lg:mb-0">
                    <div className="block max-w-325 -mx-[0.9375rem] max-md:mx-[-7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                      <div className="block relative float-left px-[0.9375rem] max-md:px-[7.5px]">
                        <ul className="block [list-style-type:none] list-outside">
                          <li className="inline-block max-w-50 overflow-hidden text-color-005 text-sm leading-[1.375rem] whitespace-nowrap text-nowrap after:content-['/'] after:mx-0.5 after:text-border after:text-sm after:leading-[1.375rem]">
                            {" "}
                            <a className="inline cursor-pointer hover:underline focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/">
                              {" Home "}
                            </a>
                            {" "}
                          </li>
                          <li className="inline-block max-w-50 overflow-hidden text-color-005 text-sm leading-[1.375rem] whitespace-nowrap text-nowrap after:content-['/'] after:mx-0.5 after:text-border after:text-sm after:leading-[1.375rem]">
                            {" "}
                            <a className="inline cursor-pointer hover:underline focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/inspiration">
                              {" Inspiration "}
                            </a>
                            {" "}
                          </li>
                          <li className="inline-block max-w-50 overflow-hidden text-color-005 text-sm leading-[1.375rem] whitespace-nowrap text-nowrap after:content-['/'] after:mx-0.5 after:text-border after:text-sm after:leading-[1.375rem]">
                            {" "}
                            <a className="inline cursor-pointer hover:underline focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/inspiration/websites">
                              {" Websites "}
                            </a>
                            {" "}
                          </li>
                          <li className="inline-block max-w-50 overflow-hidden text-color-005 text-sm leading-[1.375rem] whitespace-nowrap text-nowrap">
                            {" "}
                            <span className="inline font-bold">
                              {" Consultant "}
                              <span className="inline">
                                {" "}
                              </span>
                            </span>
                          </li>
                        </ul>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="w-full max-w-112.5 block relative self-center max-lg:mt-7.5">
                      <div className="block">
                        <div className="block relative">
                          <label className="w-4 h-[1.3625rem] block absolute top-5.5 left-3 text-border [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem] transform-[matrix(1,0,0,1,0,-10.8984)] cursor-default">
                            {" "}
                            <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.3rem] before:text-border before:text-base before:leading-[1.3125rem]" />
                            {" "}
                          </label>
                          {" "}
                          <input className="w-full h-11 border border-solid border-color-004 block max-w-140 py-1.5 pr-3 pl-9 rounded-lg overflow-clip leading-[1.8125rem] bg-background cursor-text focus:border-color-002" data-ditto-id="style-input" data-component="input" placeholder="Search keywords eg. retro, minimal, bear, mystery" type="text" value="" />
                          {" "}
                        </div>
                        {" "}
                        <div className="h-0 block absolute inset-x-0 z-1">
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
              <HeroSection />
              {" "}
              <section className="block pt-15 pb-7.5 bg-background max-md:pt-7.5">
                <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                  <div className="block relative float-left px-[0.9375rem] max-md:px-[7.5px]">
                    <GalleryShowcaseSection />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </section>
              {" "}
              <section className="block bg-background">
                <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                  <div className="w-full block relative float-left px-[0.9375rem] max-md:px-[7.5px]">
                    <div className="block text-center">
                      <button className="h-14 border border-solid border-color-002 inline-block rounded-[999px] align-middle text-background [font-family:'Graphik_Medium',_sans-serif] text-[1.1875rem] leading-[1.5625rem] bg-color-002 cursor-pointer hover:bg-muted-foreground hover:border-muted-foreground focus:bg-muted-foreground focus:border-muted-foreground" data-component="button" type="button">
                        {" "}
                        <span className="min-h-13.5 flex py-3 px-7.5 justify-center items-center">
                          {" "}
                          <span className="block">
                            {" More consultant websites "}
                          </span>
                          {" "}
                        </span>
                        {" "}
                      </button>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </section>
              {" "}
              <section className="block pb-15 bg-background max-md:pb-7.5">
                <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                  <div className="flex mt-[2.8125rem] mb-7.5 flex-col justify-center items-center">
                    <h2 className="block mb-5 [font-family:'Graphik_Medium',_sans-serif] text-2xl font-bold leading-7.5 tracking-[-0.12px]" data-component="heading">
                      {" Consultant websites not a good fit? Try something else: "}
                    </h2>
                    {" "}
                    <div className="w-full max-w-112.5 block relative">
                      <div className="block">
                        <div className="block relative">
                          <label className="w-4 h-[1.3625rem] block absolute top-5.5 left-3 text-border [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem] transform-[matrix(1,0,0,1,0,-10.8984)] cursor-default">
                            {" "}
                            <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.3rem] before:text-border before:text-base before:leading-[1.3125rem]" />
                            {" "}
                          </label>
                          {" "}
                          <input className="w-full h-11 border border-solid border-color-004 block max-w-140 py-1.5 pr-3 pl-9 rounded-lg overflow-clip leading-[1.8125rem] bg-background cursor-text focus:border-color-002" data-ditto-id="style-input-2" data-component="input" placeholder="Search keywords eg. retro, minimal, bear, mystery" type="text" value="" />
                          {" "}
                        </div>
                        {" "}
                        <div className="h-0 block absolute inset-x-0 z-1">
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
                <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                  {Tile2_data.map((d, i) => <Tile2 key={i} d={d} />)}
                  {" "}
                </div>
                {" "}
              </section>
              {" "}
              <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                <div className="w-full block relative float-left px-[0.9375rem] max-md:px-[7.5px]">
                  <div className="border-b border-solid border-b-color-003 block" />
                  {" "}
                </div>
                {" "}
              </div>
              <CtaSection />
              {" "}
              <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                <div className="w-full block relative float-left px-[0.9375rem] max-md:px-[7.5px]">
                  <div className="border-b border-solid border-b-color-003 block" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <section className="block py-15 bg-background max-md:py-7.5">
                <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                  <div className="block relative float-left px-[0.9375rem] max-md:px-[7.5px]">
                    <div className="grid justify-center [align-content:end] gap-x-7.5 grid-cols-[610px_610px] [grid-template-areas:'side-container_top-container'_'side-container_top-container'_'side-container_bottom-container'_'side-container_bottom-container'] max-lg:flex max-lg:flex-col max-lg:[justify-content:initial] max-lg:[align-content:initial] max-lg:gap-x-[initial] max-lg:grid-cols-[initial] max-lg:[grid-template-areas:initial] 2xl:grid-cols-[620px_620px]">
                      <div className="flex pb-[0.9375rem] px-[0.9375rem] flex-col justify-end [grid-column-start:top-container] [grid-column-end:top-container] [grid-row-start:top-container] [grid-row-end:top-container] max-lg:order-[1] max-md:px-0">
                        <div className="block">
                          <h2 className="block max-w-120 mb-[0.9375rem] [font-family:'Graphik_Medium',_sans-serif] text-[2.5rem] leading-11 tracking-[-1px] max-lg:max-w-96 max-lg:text-[2rem] max-lg:leading-[2.1875rem] max-lg:tracking-[-0.8px] after:content-['—'] after:block after:w-120 after:h-11 after:text-foreground after:text-[2.5rem] after:leading-11 after:tracking-[-1px] max-md:after:w-[21.5625rem] max-lg:after:h-[2.2rem] max-lg:after:text-[2rem] max-lg:after:leading-[2.1875rem] max-lg:after:tracking-[-0.8px] md:max-lg:after:w-96" data-component="heading">
                            What makes a good consulting and consultant website?
                          </h2>
                          {" "}
                          <p className="block max-w-120 mb-[1.6rem] ml-7.5">
                            A great website shows the world who you are, makes people remember you, and helps potential customers understand if they found what they were looking for. Websites communicate all of that through color, shape and other design elements. Learn how to make your consultant website tell your brand’s story.
                          </p>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div className="flex relative pb-[0.9375rem] px-[0.9375rem] items-center [grid-column-start:side-container] [grid-column-end:side-container] [grid-row-start:side-container] [grid-row-end:side-container] max-lg:order-[2] max-md:px-0">
                        <div className="flex justify-end">
                          <div className="flex max-md:flex-col">
                            <div className="w-[49.5%] block max-md:w-full">
                              <div className="block relative mb-[0.3125rem] shadow-[var(--clr-0)_0px_7px_21px_0px]">
                                <img className="w-72 h-72 inline max-w-full overflow-clip align-middle max-md:w-[21.5625rem] max-md:h-[21.5625rem] md:max-lg:w-[21.0625rem] md:max-lg:h-[21.0625rem] 2xl:w-[18.3125rem] 2xl:h-[18.3125rem]" data-component="image" alt="Consultant website with the title 'Original Website Design'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                                {" "}
                              </div>
                              {" "}
                              <div className="block text-muted-foreground [font-family:Georgia,_serif] text-sm italic leading-[1.375rem]">
                                <div className="block">
                                  <span className="inline">
                                    {" by "}
                                    <button className="border-b-2 border-solid border-b-muted inline-block text-left cursor-pointer hover:border-clr-5 focus:border-clr-5" data-component="button">
                                      Arthean
                                    </button>
                                    {" "}
                                    <span className="inline">
                                      <div className="h-0 flex fixed -right-7.5 bottom-8 left-7.5 z-9999 justify-center items-center pointer-events-none max-md:-right-[0.9375rem] max-md:left-[0.9375rem] md:max-lg:-right-[2.8125rem] md:max-lg:left-[2.8125rem] 2xl:-right-85 2xl:left-85" width="100%" />
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </div>
                            {" "}
                            <div className="w-[287.5px] block mt-14.5 ml-[0.3125rem] max-md:w-[21.5625rem] max-md:mt-[0.9375rem] max-md:ml-0 md:max-lg:w-[336.5px] md:max-lg:mt-[4.2375rem] 2xl:w-[292.5px] 2xl:mt-[3.6875rem]">
                              <div className="block relative mb-[0.3125rem] shadow-[var(--clr-0)_0px_7px_21px_0px]">
                                <img className="w-72 h-72 inline max-w-full overflow-clip align-middle max-md:w-[21.5625rem] max-md:h-[21.5625rem] md:max-lg:w-[21.0625rem] md:max-lg:h-[21.0625rem] 2xl:w-[18.3125rem] 2xl:h-[18.3125rem]" data-component="image" alt="Consultant website with the title 'B2B Block Chain Company Website design'" src="/assets/cloned/images/3119807983fd.jpg" />
                                {" "}
                              </div>
                              {" "}
                              <div className="block text-muted-foreground [font-family:Georgia,_serif] text-sm italic leading-[1.375rem]">
                                <div className="block">
                                  <span className="inline">
                                    {" by "}
                                    <button className="border-b-2 border-solid border-b-muted inline-block text-left cursor-pointer hover:border-clr-5 focus:border-clr-5" data-component="button">
                                      OMGuys™
                                    </button>
                                    {" "}
                                    <span className="inline">
                                      <div className="h-0 flex fixed right-[-322.5px] bottom-8 left-[322.5px] z-9999 justify-center items-center pointer-events-none max-md:-right-[0.9375rem] max-md:left-[0.9375rem] md:max-lg:right-[-386.5px] md:max-lg:left-[386.5px] 2xl:right-[-637.5px] 2xl:left-[637.5px]" width="100%" />
                                    </span>
                                    {" "}
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
                      </div>
                      {" "}
                      <div className="block pb-[0.9375rem] px-[0.9375rem] [grid-column-start:bottom-container] [grid-column-end:bottom-container] [grid-row-start:bottom-container] [grid-row-end:bottom-container] max-lg:order-[3] max-md:px-0">
                        <div className="block" />
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <section className="block py-7.5 bg-background">
                      <div className="block after:content-[''] after:table after:w-0 after:h-0">
                        {Tile3_data.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles[i]} />)}
                        {" "}
                      </div>
                      {" "}
                    </section>
                    {" "}
                    <div className="block text-center">
                      <a className="h-14 border border-solid border-color-002 inline-block rounded-[999px] align-middle text-background [font-family:'Graphik_Medium',_sans-serif] text-[1.1875rem] leading-[1.5625rem] bg-color-002 cursor-pointer hover:bg-muted-foreground hover:border-muted-foreground focus:bg-muted-foreground focus:border-muted-foreground" data-component="link" href="/blog/web-digital/">
                        {" "}
                        <span className="min-h-13.5 flex py-3 px-7.5 justify-center items-center">
                          {" "}
                          <span className="block">
                            {" More web design tips "}
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
              </section>
              {" "}
            </div>
            {" "}
            <div className="block" id="inspiration-collector">
              <div className="h-0 flex fixed bottom-8 inset-x-0 z-9999 justify-center items-center pointer-events-none" width="100%" />
              <div className="h-[8.6875rem] block fixed bottom-0 inset-x-0 z-11 py-3.5 px-8 rounded-tl-lg rounded-tr-lg bg-background shadow-[var(--clr-0)_0px_-7px_21px_0px] max-md:h-38.5 max-md:pb-3 max-md:px-3 md:max-lg:h-39 md:max-lg:px-6">
                <div className="h-full grid max-w-310 [grid-template-areas:'title_minimize-icon-container'_'design-container_tooltip-wrapper'] mx-auto grid-cols-[4fr_1fr] max-md:grid-cols-[157.938px_193.062px] max-lg:[grid-template-areas:'._minimize-icon-container'_'title_tooltip-wrapper'_'design-container_design-container'] md:max-lg:grid-cols-[504px_216px] 2xl:[grid-template-areas:'title_.'_'design-container_tooltip-wrapper']">
                  <h3 className="block [grid-column-start:title] [grid-column-end:title] [grid-row-start:title] [grid-row-end:title] text-sm font-bold leading-[1.1875rem]" data-component="heading">
                    Your liked designs
                  </h3>
                  <div className="w-[15.2rem] h-[1.1875rem] block [grid-column-start:minimize-icon-container] [grid-column-end:minimize-icon-container] [grid-row-start:minimize-icon-container] [grid-row-end:minimize-icon-container] leading-0 text-right max-md:w-[12.0625rem] max-lg:h-4 md:max-lg:w-54 2xl:w-4 2xl:h-4 2xl:absolute 2xl:top-3.5 2xl:left-472 2xl:min-w-0">
                    <Icon />
                  </div>
                  <div className="block mt-3 [grid-column-start:design-container] [grid-column-end:design-container] [grid-row-start:design-container] [grid-row-end:design-container] max-lg:mt-0">
                    <LogoCloudSection />
                  </div>
                  <div className="flex relative [grid-column-start:tooltip-wrapper] [grid-column-end:tooltip-wrapper] [grid-row-start:tooltip-wrapper] [grid-row-end:tooltip-wrapper]">
                    <button className="w-39.5 min-h-11 border border-solid border-surface-2 grid relative min-w-11 my-6 ml-[5.325rem] py-[0.5625rem] px-6 rounded-[999px] justify-center items-center [grid-auto-flow:column] align-middle text-color-004 font-bold leading-[1.3125rem] text-center bg-surface-2 cursor-not-allowed grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[3.591] max-lg:w-30.5 max-lg:min-h-7 max-lg:min-w-7 max-lg:my-3 max-md:ml-[4.4375rem] max-lg:py-0.5 max-lg:px-3 max-lg:text-sm max-lg:leading-[1.125rem] max-lg:aspect-[4.357] md:max-lg:ml-23.5 2xl:ml-22.5" data-component="button" aria-disabled="true" type="button">
                      <span className="grid justify-center items-center [grid-auto-flow:column] align-middle grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[5.192] max-lg:aspect-[5.278]">
                        <span className="block whitespace-nowrap">
                          Save favorites
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="block">
              <Footer />
              {" "}
              <section className="block bg-surface">
                <div className="block max-w-325 px-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                  <div className="w-full block relative float-left px-[0.9375rem] max-md:px-[7.5px]">
                    <div className="border-b border-solid border-b-color-003 block" />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </section>
              {" "}
              <footer className="block" role="contentinfo">
                <div className="block bg-surface">
                  <div className="block pt-15 max-lg:hidden before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem] max-lg:after:w-auto max-lg:after:h-auto">
                    <div className="border-b-2 border-solid border-b-color-003 block max-w-325 pb-15 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem] max-lg:after:w-auto max-lg:after:h-auto">
                      <div className="w-[312.5px] block relative float-left px-[0.9375rem] 2xl:w-[317.5px]">
                        <h5 className="block mb-[0.8rem] [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem]" data-component="heading">
                          Company
                        </h5>
                        <div className="block">
                          <ul className="block [list-style-type:none] list-outside">
                            {ListRow_data.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                          </ul>
                        </div>
                      </div>
                      <div className="w-[312.5px] block relative float-left px-[0.9375rem] 2xl:w-[317.5px]">
                        <h5 className="block mb-[0.8rem] [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem]" data-component="heading">
                          Design services
                        </h5>
                        <div className="block">
                          <ul className="block [list-style-type:none] list-outside">
                            {ListRow_data2.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles2[i]} />)}
                          </ul>
                        </div>
                      </div>
                      <div className="w-[312.5px] block relative float-left px-[0.9375rem] 2xl:w-[317.5px]">
                        <h5 className="block mb-[0.8rem] [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem]" data-component="heading">
                          Get a design
                        </h5>
                        <div className="block">
                          <ul className="block [list-style-type:none] list-outside">
                            {ListRow_data3.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles3[i]} />)}
                          </ul>
                        </div>
                      </div>
                      <div className="w-[312.5px] block relative float-left px-[0.9375rem] 2xl:w-[317.5px]">
                        <h5 className="block mb-[0.8rem] [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem]" data-component="heading">
                          Resources
                        </h5>
                        <div className="block">
                          <ul className="block [list-style-type:none] list-outside">
                            {ListRow_data4.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles4[i]} />)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block max-w-325 p-[0.9375rem] mx-auto max-md:px-[7.5px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-[1.625rem] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-[1.625rem]">
                    <div className="w-full block relative float-left p-[0.9375rem] max-md:px-[7.5px]">
                      <div className="block float-left text-left max-lg:text-center max-lg:[float:initial]">
                        <span className="inline text-sm leading-[1.375rem]">
                          © 99designs
                        </span>
                        <span className="inline text-sm leading-[1.375rem] before:content-['|'] before:mx-2.5 before:text-foreground before:text-sm before:leading-[1.375rem] before:text-left max-lg:before:text-center">
                          by Vista
                        </span>
                        <div className="inline-block text-sm leading-[1.375rem] max-lg:block">
                          <ul className="inline-block [list-style-type:none] list-outside">
                            <li className="inline-block before:content-['|'] before:mx-2.5 before:text-muted-foreground before:text-sm before:leading-[1.375rem] before:text-left max-lg:before:content-[''] max-lg:before:text-[color:inherit] max-lg:before:[font-size:inherit] max-lg:before:leading-[inherit] max-lg:before:[text-align:inherit]">
                              <a className="border-b-2 border-solid border-b-clr-3 inline text-muted-foreground cursor-pointer hover:border-clr-8 focus:border-clr-8 focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/legal/terms-and-conditions">
                                Terms and Conditions
                              </a>
                            </li>
                            <li className="inline-block before:content-['|'] before:mx-2.5 before:text-muted-foreground before:text-sm before:leading-[1.375rem] before:text-left max-lg:before:text-center">
                              <a className="border-b-2 border-solid border-b-clr-3 inline text-muted-foreground cursor-pointer hover:border-clr-8 focus:border-clr-8 focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/legal/privacy">
                                Privacy
                              </a>
                            </li>
                            <li className="inline-block before:content-['|'] before:mx-2.5 before:text-muted-foreground before:text-sm before:leading-[1.375rem] before:text-left max-lg:before:text-center">
                              <a className="border-b-2 border-solid border-b-clr-3 inline text-muted-foreground cursor-pointer hover:border-clr-8 focus:border-clr-8 focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/sitemap">
                                Sitemap
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="block float-left ml-2.5 max-lg:mt-[0.9375rem] max-lg:text-center max-lg:[float:initial] max-lg:ml-0">
                        <div className="inline-block">
                          <span className="inline-block mr-2.5">
                            <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:text-foreground before:text-base before:leading-[1.625rem] max-lg:before:text-center" />
                          </span>
                          <div className="inline-block">
                            <ul className="inline-block text-sm leading-[1.375rem] [list-style-type:none] list-outside">
                              <li className="inline-block">
                                English
                              </li>
                              <li className="inline-block ml-2.5">
                                <a className="border-b-2 border-solid border-b-clr-3 inline text-muted-foreground cursor-pointer hover:border-clr-8 focus:border-clr-8 focus:[outline-style:dotted] focus:outline-1" data-component="link" href="/user/switch-language/es-US">
                                  español
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="block float-right text-right max-lg:mt-[0.9375rem] max-lg:text-center max-lg:[float:initial]">
                        <ul className="inline-block text-sm leading-[1.375rem] [list-style-type:none] list-outside">
                          <li className="inline-block">
                            <a className="inline relative z-0 text-base leading-[1.625rem] text-center cursor-pointer max-lg:[text-align:inherit] hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" aria-label="Facebook" href="https://www.facebook.com/99designs">
                              <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:text-foreground before:text-base before:leading-[1.625rem] before:text-center" />
                            </a>
                          </li>
                          <li className="inline-block ml-2.5">
                            <a className="inline relative z-0 text-base leading-[1.625rem] text-center cursor-pointer max-lg:[text-align:inherit] hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" aria-label="Twitter" href="https://www.twitter.com/99designs">
                              <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:text-foreground before:text-base before:leading-[1.625rem] before:text-center" />
                            </a>
                          </li>
                          <li className="inline-block ml-2.5">
                            <a className="inline relative z-0 text-base leading-[1.625rem] text-center cursor-pointer max-lg:[text-align:inherit] hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" aria-label="LinkedIn" href="https://www.linkedin.com/company/99designs">
                              <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:text-foreground before:text-base before:leading-[1.625rem] before:text-center" />
                            </a>
                          </li>
                          <li className="inline-block ml-2.5">
                            <a className="inline relative z-0 text-base leading-[1.625rem] text-center cursor-pointer max-lg:[text-align:inherit] hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" aria-label="Pinterest" href="https://pinterest.com/99designs">
                              <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:text-foreground before:text-base before:leading-[1.625rem] before:text-center" />
                            </a>
                          </li>
                          <li className="inline-block ml-2.5">
                            <a className="inline relative z-0 text-base leading-[1.625rem] text-center cursor-pointer max-lg:[text-align:inherit] hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" aria-label="Instagram" href="https://www.instagram.com/99designs/">
                              <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:text-foreground before:text-base before:leading-[1.625rem] before:text-center" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="w-0 h-[473.7875rem] block absolute top-0 left-0 z-1 min-w-0 overflow-hidden bg-background before:content-[''] before:block before:absolute before:inset-y-0 before:right-0 before:-left-7.5 before:z-1 before:w-7.5 before:shadow-[var(--clr-4)_-15px_0px_15px_-10px_inset]">
          <div className="w-0 block">
            <div className="block px-4 text-left bg-background">
              <div className="w-0 block py-[0.8rem]">
                <ul className="block relative -mx-4 [list-style-type:none] list-outside">
                  <li className="block">
                    <a className="h-[3.2rem] flex relative py-[0.8rem] px-4 items-center overflow-hidden whitespace-nowrap text-nowrap cursor-pointer hover:bg-[linear-gradient(to_right,_var(--background)_0px,_var(--clr-9)_35%,_var(--clr-9)_65%,_var(--background)_100%)] hover:[background-position:0%_0%]" data-component="link" href="/">
                      <span className="block left-4 min-w-[1.8rem]">
                        <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:text-foreground before:text-base before:leading-[1.625rem] before:text-left" />
                      </span>
                      <span className="w-0 h-[1.6rem] block flex-1 overflow-hidden">
                        Home
                      </span>
                    </a>
                  </li>
                </ul>
                <ul className="block relative -mx-4 [list-style-type:none] list-outside">
                  {ListRow2_data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
                </ul>
                <div className="w-0 block relative mt-7.5 mb-[0.8rem] pt-7.5 pb-[0.2rem] [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem] before:content-[''] before:block before:absolute before:top-0 before:bottom-[4.6125rem] before:inset-x-0 before:w-0 before:h-px before:bg-color-003">
                  Design services
                </div>
                <ul className="block relative -mx-4 [list-style-type:none] list-outside">
                  {ListRow3_data.map((d, i) => <ListRow3 key={i} d={d} />)}
                </ul>
                <div className="w-0 block relative mt-7.5 mb-[0.8rem] pt-7.5 pb-[0.2rem] [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem] before:content-[''] before:block before:absolute before:top-0 before:bottom-[5.9125rem] before:inset-x-0 before:w-0 before:h-px before:bg-color-003">
                  Get a design
                </div>
                <ul className="block relative -mx-4 [list-style-type:none] list-outside">
                  {ListRow3_data2.map((d, i) => <ListRow3 key={i} d={d} />)}
                </ul>
                <div className="w-0 block relative mt-7.5 mb-[0.8rem] pt-7.5 pb-[0.2rem] [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem] before:content-[''] before:block before:absolute before:top-0 before:bottom-[3.3125rem] before:inset-x-0 before:w-0 before:h-px before:bg-color-003">
                  Support
                </div>
                <ul className="block relative -mx-4 [list-style-type:none] list-outside">
                  <li className="block">
                    <a className="h-[3.2rem] flex relative py-[0.8rem] px-4 items-center overflow-hidden whitespace-nowrap text-nowrap cursor-pointer hover:bg-[linear-gradient(to_right,_var(--background)_0px,_var(--clr-9)_35%,_var(--clr-9)_65%,_var(--background)_100%)] hover:[background-position:0%_0%]" data-component="link" href="tel:1 800 513 1678" rel="nofollow">
                      <span className="block left-4 min-w-[1.8rem]">
                        <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:text-foreground before:text-base before:leading-[1.625rem] before:text-left" />
                      </span>
                      <span className="w-0 h-[1.6rem] block flex-1 overflow-hidden">
                        1 800 513 1678
                      </span>
                    </a>
                  </li>
                  <li className="block">
                    <a className="h-[3.2rem] flex relative py-[0.8rem] px-4 items-center overflow-hidden whitespace-nowrap text-nowrap cursor-pointer hover:bg-[linear-gradient(to_right,_var(--background)_0px,_var(--clr-9)_35%,_var(--clr-9)_65%,_var(--background)_100%)] hover:[background-position:0%_0%]" data-component="link" href="/help" target="_blank">
                      <span className="block left-4 min-w-[1.8rem]">
                        <span className="inline before:content-[''] before:inline-block before:w-4 before:h-[1.6rem] before:text-foreground before:text-base before:leading-[1.625rem] before:text-left" />
                      </span>
                      <span className="w-0 h-[1.6rem] block flex-1 overflow-hidden">
                        Help Center
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="w-0 block relative mt-7.5 mb-[0.8rem] pt-7.5 pb-[0.2rem] [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem] before:content-[''] before:block before:absolute before:top-0 before:bottom-[3.3125rem] before:inset-x-0 before:w-0 before:h-px before:bg-color-003">
                  Resources
                </div>
                <ul className="block relative -mx-4 [list-style-type:none] list-outside">
                  {ListRow3_data3.map((d, i) => <ListRow3 key={i} d={d} />)}
                </ul>
              </div>
            </div>
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </>
  );
}
