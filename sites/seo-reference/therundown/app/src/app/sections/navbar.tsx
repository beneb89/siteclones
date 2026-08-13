import NavLink, { type NavLinkData } from "../components/nav-link";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import { NavLink_styles } from "../_styles";
const NavLink_data: NavLinkData[] = [
    { href: "/", label: "For You" },
    { href: "/courses", label: "Courses" },
    { href: "/guides", ariacurrent: "page", label: "Guides" },
    { href: "/community", label: "Workflow Hub" },
    { href: "/perks", label: "Perks" }
];
/** Top navigation bar. */
export default function Navbar({ navLinkData = NavLink_data } = {}) {
  return (
    <header className="w-full h-[6.1rem] block sticky top-0 z-50 bg-color-007">
      <div className="border-b border-solid border-b-border block max-lg:hidden">
        <div className="h-16 min-h-16 flex items-stretch">
          <div className="w-16 border-r border-solid border-r-border flex justify-center items-center shrink-0">
            <a className="h-9 flex items-center cursor-pointer" data-component="link" aria-label="The Rundown University" href="/">
              <span className="basis-full shrink-0 h-9 flex rounded-lg justify-center items-center overflow-hidden">
                <img className="w-9 h-9 block overflow-clip object-contain aspect-[auto_36/36] transform-[matrix(1.38,0,0,1.38,0,0)] origin-[18px_18px]" data-component="image" alt="" height="36" src="/assets/cloned/images/3c0de45fed5c.webp" width="36" />
              </span>
              {" "}
            </a>
          </div>
          {" "}
          <nav className="w-[25.9125rem] flex ml-3 items-stretch shrink-0" data-component="nav" aria-label="Primary navigation">
            {navLinkData.map((d, i) => <NavLink key={i} d={d} styles={NavLink_styles[i]} />)}
          </nav>
          {" "}
          <div className="flex min-w-0 px-4 justify-center items-center grow">
            <div className="w-105 block relative">
              <form className="w-full h-9 border border-solid border-border inline-flex px-3 rounded-lg items-center gap-2 text-color-004 bg-clr-0 shadow-[var(--clr-1)_0px_10px_28px_0px]" aria-label="Search courses, guides, and perks" role="search">
                <button className="w-4 h-4 flex justify-center items-center shrink-0 text-center cursor-pointer" data-component="button" aria-label="Search courses, guides, and perks" type="submit">
                  <Icon />
                </button>
                {" "}
                <input className="w-92.5 h-5.5 block min-w-0 py-px px-0.5 overflow-clip text-foreground text-sm leading-[1.25rem] cursor-text" data-ditto-id="style-search-courses-guides-and-perks" data-component="input" aria-controls="site-search-results" aria-label="Search courses, guides, and perks" placeholder={"Search workflows, guides, courses, & more"} type="search" />
                {" "}
              </form>
              {" "}
            </div>
          </div>
          {" "}
          <div className="w-[13.775rem] flex items-stretch shrink-0">
            <div className="flex pr-5 items-center self-center gap-4">
              <a className="w-[5.3125rem] h-8 border border-solid border-border flex min-w-[5.3125rem] px-3 rounded-lg justify-center items-center gap-2 text-[0.625rem] font-medium leading-2.5 tracking-[-0.1px] whitespace-nowrap text-nowrap bg-clr-2 cursor-pointer hover:bg-border hover:transform-[matrix(1,0,0,1,0,-1)]" data-component="link" href="/sign-in">
                {" "}
                <span className="flex items-center gap-1.5">
                  <span className="block">
                    Log in
                  </span>
                  {" "}
                </span>
                {" "}
              </a>
              {" "}
              <a className="w-[6.2125rem] h-8 border border-solid border-clr-3 flex min-w-[5.3125rem] px-3 rounded-lg justify-center items-center gap-2 text-color-002 text-[0.625rem] font-medium leading-2.5 tracking-[-0.1px] whitespace-nowrap text-nowrap bg-primary cursor-pointer hover:bg-clr-13 hover:transform-[matrix(1,0,0,1,0,-1)]" data-component="link" href="/plans?source=nav%3Aget_started%3Atrial">
                {" "}
                <span className="flex items-center gap-1.5">
                  <span className="block">
                    Get started free
                  </span>
                  {" "}
                </span>
                {" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="border-b border-solid border-b-border hidden relative z-6 max-lg:block">
        <div className="min-h-16 flex justify-between items-stretch max-lg:h-16">
          <div className="w-16 border-r border-solid border-r-border flex min-w-0 justify-center items-center shrink-0">
            <a className="flex min-w-0 items-center cursor-pointer max-lg:h-9" aria-label="The Rundown University" href="/">
              <span className="basis-full shrink-0 h-9 flex min-w-0 rounded-lg justify-center items-center overflow-hidden">
                <img className="w-full h-full block min-w-0 overflow-clip object-contain aspect-[auto_36/36] transform-[none] max-lg:w-9 max-lg:h-9 max-lg:transform-[matrix(1.38,0,0,1.38,0,0)] max-lg:origin-[18px_18px]" alt="" height="36" src="/assets/cloned/images/3c0de45fed5c.webp" width="36" />
              </span>
              {" "}
            </a>
          </div>
          {" "}
          <div className="flex min-w-0 items-stretch">
            <div className="w-15 border-l border-solid border-l-border flex min-w-0 justify-center items-center">
              <button className="w-10 h-10 border border-solid border-clr-3 flex min-w-0 rounded-lg justify-center items-center text-center cursor-default" aria-controls="mobile-site-nav" aria-expanded="false" aria-label="Open navigation menu" type="button">
                <Icon2 />
              </button>
            </div>
          </div>
        </div>
      </div>
      {" "}
      <div className="border-b border-solid border-b-border grid relative z-4 py-1.5 px-5 items-center gap-3 bg-clr-0 grid-cols-1 max-lg:px-4">
        <div className="flex min-w-0 justify-center items-center gap-2.5 max-lg:text-xs max-lg:leading-[0.9375rem]">
          <span className="w-[0.5625rem] h-[0.5625rem] block rounded-full shrink-0 bg-clr-4" aria-hidden="true" />
          {" "}
          <div className="flex min-w-0 flex-wrap justify-center items-center gap-2.5 text-sm leading-[1.25rem] tracking-[-0.14px] text-center">
            <span className="block">
              We just launched AI Workflow Hub!
            </span>
            {" "}
            <a className="block font-semibold underline cursor-pointer" data-component="link" href="/community" rel="external noopener noreferrer">
              Check it out
            </a>
          </div>
        </div>
        {" "}
      </div>
      {" "}
    </header>
  );
}
