import ListRow, { type ListRowData } from "../components/list-row";
import Icon from "../svgs/svg-icon";
import { ListRow_styles } from "../_styles";
const ListRow_data: ListRowData[] = [
    { id: "menu-item-90", href: "/about/", label: "About" },
    { id: "menu-item-91", href: "/contacts/", label: "Contact" },
    { id: "menu-item-2997", href: "/category/n8n-infrastructure/", label: "n8n Infrastructure" },
    { id: "menu-item-3200", href: "/category/seo-automation/", label: "SEO Automation" },
    { id: "menu-item-4072", href: "/category/seo-fundamentals/", label: "SEO Fundamentals" },
    { id: "menu-item-5371", href: "/category/seo-tools/", label: "SEO Tools" },
    { id: "menu-item-4290", href: "/category/setup-guides/", label: "Setup Guides" }
];
/** Top navigation bar. */
export default function Navbar({ listRowData = ListRow_data } = {}) {
  return (
    <header className="h-20 block absolute inset-x-0 z-100 min-w-0 bg-clr-0" id="masthead" role="banner">
      <div className="block max-lg:hidden" id="main-header">
        <div className="block">
          <div className="block">
            <div className="block">
              <div className="block">
                <div className="block bg-clr-0">
                  <div className="block max-w-322.5 px-6 mx-auto">
                    <div className="h-20 min-h-20 grid grid-cols-[1fr_auto]">
                      <div className="flex">
                        <div className="flex items-center">
                          <div className="block">
                            <a className="h-[2.8rem] flex items-center gap-[1.0625rem] cursor-pointer" data-component="link" href="/" rel="home">
                              <img className="w-35 h-[2.8125rem] block max-w-35 overflow-clip aspect-[auto_791/253]" data-component="image" alt="NextGrowth.ai logo" height="253" sizes="(max-width: 791px) 100vw, 791px" src="/assets/cloned/images/a1e0114e509f.webp" srcSet="/assets/cloned/images/a1e0114e509f.webp 791w, /assets/cloned/images/c4a56630c49b.webp 300w, /assets/cloned/images/9581a1abd2ac.webp 768w" width="791" />
                            </a>
                          </div>
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div className="flex justify-end">
                        <div className="flex items-center">
                          <nav className="flex" data-component="nav" aria-label="Primary Navigation" id="site-navigation" role="navigation">
                            <div className="flex">
                              <ul className="flex flex-wrap justify-center items-center [list-style-type:none] list-outside" id="primary-menu">
                                {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
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
        </div>
        {" "}
      </div>
      {" "}
      <div className="hidden max-lg:block" id="mobile-header">
        <div className="block">
          <div className="block">
            <div className="block">
              <div className="block">
                <div className="block bg-clr-0">
                  <div className="block max-w-322.5 px-6">
                    <div className="min-h-20 grid grid-cols-[auto_auto] max-md:grid-cols-[210.109px_116.891px] max-lg:grid-rows-1 max-md:aspect-[4.088] md:max-lg:grid-cols-[406.609px_313.391px] md:max-lg:aspect-[9]">
                      <div className="flex min-w-0">
                        <div className="flex min-w-0 items-center">
                          <div className="block min-w-0">
                            <a className="flex items-center gap-[1.0625rem] cursor-pointer max-lg:h-[2.8rem]" href="/" rel="home">
                              <img className="w-[49.4375rem] block min-w-0 max-w-35 overflow-clip aspect-[auto_791/253] max-lg:w-35 max-lg:h-[2.8125rem]" alt="NextGrowth.ai logo" height="253" sizes="(max-width: 791px) 100vw, 791px" src="/assets/cloned/images/a1e0114e509f.webp" srcSet="/assets/cloned/images/a1e0114e509f.webp 791w, /assets/cloned/images/c4a56630c49b.webp 300w, /assets/cloned/images/9581a1abd2ac.webp 768w" width="791" />
                            </a>
                          </div>
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div className="flex min-w-0 justify-end">
                        <div className="flex min-w-0 items-center">
                          <div className="block min-w-0">
                            <button className="min-h-11 flex min-w-11 py-[0.35rem] px-[0.525rem] rounded-[50px] justify-center items-center text-color-001 [font-family:Poppins,_sans-serif] text-sm font-semibold leading-[1.375rem] text-center capitalize bg-accent cursor-pointer max-lg:w-[2.925rem] max-lg:h-11" aria-expanded="false" aria-label="Open menu" id="mobile-toggle">
                              <span className="flex min-w-0 text-3xl leading-12">
                                <span className="flex min-w-0 self-center">
                                  <Icon />
                                </span>
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
        </div>
        {" "}
      </div>
      {" "}
    </header>
  );
}
