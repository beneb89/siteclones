import Icon5 from "../svgs/svg-icon5";
import ListRow, { type ListRowData } from "../components/list-row";
import { ListRow_styles } from "../_styles";
const ListRow_data: ListRowData[] = [
    { href: "/best-designs", text: "All" },
    { href: "/best-designs/websites", text: "Website Design" },
    { href: "/best-designs/logo", text: "Logo Design" },
    { href: "/best-designs/print", text: "Print Design" },
    { href: "/best-designs/apps", text: "App Design" },
    { href: "/best-designs/packaging", text: "Packaging Design" },
    { href: "/best-designs/video", text: "Video Design" }
];
/** Bd Nav section. */
export default function BdNavSection({ listRowData = ListRow_data } = {}) {
  return (
    <div className="block text-center shadow-[var(--clr-6)_0px_0px_80px_0px] max-md:[text-align:inherit]">
      <div className="block max-w-370 px-[2.1875rem] mx-auto max-md:px-5 md:max-lg:px-[1.5625rem]">
        <div className="flex pt-[2.8125rem] pb-[1.5625rem] flex-col max-md:pt-7.5 max-md:pb-3 md:max-lg:pt-[2.1125rem] md:max-lg:pb-[1.175rem]">
          <h1 className="block mb-4.5 text-[3.4375rem] font-bold leading-[3.9375rem] max-md:text-4xl max-md:leading-[2.5625rem] md:max-lg:text-[2.5625rem] md:max-lg:leading-[2.9375rem]" data-component="heading">
            Best AI Website Designs of 2026
          </h1>
          <div className="block max-w-220 mx-auto text-lg font-medium leading-[1.6875rem] tracking-[1px] uppercase max-lg:leading-6 max-lg:[font-size:inherit]">
            View the Top AI Website Designs Below
          </div>
          <div className="flex mt-[2.1875rem] justify-center items-center gap-6 text-lg leading-[1.4375rem] whitespace-nowrap text-nowrap max-lg:mt-7.5 max-md:gap-[0.9375rem] max-md:text-xs max-md:leading-[0.9375rem] md:max-lg:gap-4.5 md:max-lg:text-sm md:max-lg:leading-[1.125rem]">
            <a className="w-[22.5%] h-12 min-h-12 flex relative min-w-67.5 py-0.5 px-7.5 justify-center items-center gap-3 text-background font-medium uppercase cursor-pointer max-md:w-[52%] max-lg:h-10 max-lg:min-h-10 max-md:px-4 max-md:min-w-0 md:max-lg:w-[37.5%] md:max-lg:px-[22.5px] 2xl:w-[19%] before:content-[''] before:block before:absolute before:inset-0 before:h-12 before:bg-background before:opacity-0 before:transform-[matrix(1,0,-0.700208,1,0,0)] before:origin-[135px_24px] before:rounded-tl-[5.4px] max-lg:before:h-10 max-md:before:origin-[87.5px_20px] max-lg:before:rounded-tl-sm md:max-lg:before:origin-[135px_20px] hover:border-clr-24 hover:text-clr-24 hover:outline-clr-24 hover:[text-decoration-color:var(--clr-24)] focus:border-clr-32 focus:text-clr-32 focus:outline-clr-32 focus:[text-decoration-color:var(--clr-32)]" data-ditto-id="style-link-3" data-component="link" href="/best-designs/submit">
              <strong className="block relative z-1 hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]">
                Submit Your Design
              </strong>
              <Icon5 />
            </a>
            <a className="w-[22.5%] h-12 min-h-12 flex relative min-w-67.5 py-0.5 px-7.5 justify-center items-center gap-3 text-color-001 font-medium uppercase cursor-pointer max-md:w-[41.5%] max-lg:h-10 max-lg:min-h-10 max-md:px-4 max-md:min-w-0 md:max-lg:w-[37.5%] md:max-lg:px-[22.5px] 2xl:w-[19%] before:content-[''] before:block before:absolute before:inset-0 before:h-12 before:bg-background before:transform-[matrix(1,0,-0.700208,1,0,0)] before:origin-[135px_24px] before:rounded-tl-[5.4px] max-lg:before:h-10 max-md:before:origin-[69.5px_20px] max-lg:before:rounded-tl-sm md:max-lg:before:origin-[135px_20px] after:content-[''] after:block after:absolute after:inset-0 after:h-12 after:[background-size:calc(100%_+_100px)_100%] after:[background-position:0px_0%] after:transform-[matrix(1,0,-0.700208,1,0,0)] after:origin-[135px_24px] after:rounded-tl-[5.4px] max-lg:after:h-10 max-md:after:origin-[69.5px_20px] max-lg:after:rounded-tl-sm md:max-lg:after:origin-[135px_20px] hover:border-clr-25 hover:text-clr-25 hover:outline-clr-25 hover:[text-decoration-color:var(--clr-25)] focus:border-color-001 focus:outline-color-001 focus:[text-decoration-color:var(--color-001)]" data-component="link" href="/best-designs/how-it-works">
              <strong className="block relative z-1">
                How It Works
              </strong>
              <Icon5 />
            </a>
          </div>
        </div>
      </div>
      <nav className="block" data-component="nav">
        <div className="block max-w-370 px-[2.1875rem] mx-auto max-md:px-5 md:max-lg:px-[1.5625rem]">
          <div className="flex justify-center items-center gap-[0.9375rem] max-lg:relative max-lg:-mx-5 max-lg:px-5 max-lg:flex-wrap max-lg:justify-between" data-ditto-id="style-div-3">
            <ul className="flex justify-center items-center gap-10 [list-style-type:none] list-outside max-lg:mt-2.5 max-lg:-mx-5 max-lg:py-2 max-lg:px-5 max-lg:order-[1] max-lg:gap-8.5 max-lg:overflow-auto max-lg:[justify-content:initial]">
              {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
