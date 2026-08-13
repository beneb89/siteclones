import ListRow, { type ListRowData } from "../components/list-row";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import { ListRow_styles } from "../_styles";
const ListRow_data: ListRowData[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/speaking", label: "Speaking" },
    { href: "/insights", ariacurrent: "page", label: "Insights" },
    { href: "/courses", label: "Courses" },
    { href: "mailto:mail@amjid.au", label: "\nContact Me\n" }
];
/** Top navigation bar. */
export default function Navbar({ listRowData = ListRow_data } = {}) {
  return (
    <nav className="h-[83.7px] border-b border-solid border-b-border flex fixed inset-x-0 z-100 py-4 px-12 justify-between items-center gap-4 bg-clr-2 [backdrop-filter:blur(16px)_saturate(1.4)] max-md:h-[4.4625rem] max-lg:py-3 max-md:px-4 md:max-lg:h-[4.575rem] md:max-lg:px-[30.7px] 2xl:h-[5.2625rem]" data-component="nav" aria-label="Main navigation">
      <a className="h-full flex flex-col cursor-pointer" data-component="link" aria-label="Amjid Ali, home" href="/">
        {" "}
        <span className="block [font-family:'DM_Serif_Display',_Georgia,_serif] text-xl leading-[2rem] tracking-[-0.2px] max-md:text-lg max-md:leading-[1.8125rem] max-md:tracking-[-0.18px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.19px] 2xl:leading-8">
          Amjid Ali
        </span>
        {" "}
        <span className="block text-muted-foreground [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[1.78px] uppercase whitespace-nowrap max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[1.65px] md:max-lg:tracking-[1.7px] 2xl:tracking-[1.8px]">
          Melbourne, Australia
        </span>
        {" "}
      </a>
      {" "}
      <ul className="flex items-center gap-8 [list-style-type:none] list-outside max-lg:hidden" id="navLinks">
        {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
      </ul>
      {" "}
      <button className="w-10 h-10 border border-solid border-border flex rounded-[50%] justify-center items-center shrink-0 text-muted text-center bg-border cursor-pointer hover:bg-color-002 hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="button" aria-label="Toggle light/dark theme" id="themeToggle" type="button">
        <Icon />
        {" "}
        <Icon2 />
        {" "}
      </button>
      {" "}
      <button className="hidden min-w-0 p-2.5 flex-col gap-1.5 text-center cursor-pointer max-lg:h-9.5 max-lg:flex" aria-expanded="false" aria-label="Toggle navigation menu" id="mobileToggle" type="button">
        <span className="w-5.5 inline rounded-[1px] bg-foreground max-lg:h-0.5 max-lg:block" />
        {" "}
        <span className="w-5.5 inline rounded-[1px] bg-foreground max-lg:h-0.5 max-lg:block" />
        {" "}
        <span className="w-5.5 inline rounded-[1px] bg-foreground max-lg:h-0.5 max-lg:block" />
        {" "}
      </button>
      {" "}
    </nav>
  );
}
