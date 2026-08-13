import MediaTile, { type MediaTileData } from "../components/media-tile";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import { MediaTile_meta } from "../ditto-meta";
const MediaTile_data: MediaTileData[] = [
    { ariacontrols: "marketing-nav-developers-links", label: "Developers" },
    { ariacontrols: "marketing-nav-platform-links", label: "Platform" },
    { ariacontrols: "marketing-nav-solutions-links", label: "Solutions" },
    { ariacontrols: "marketing-nav-company-links", label: "Company" }
];
/** Top navigation bar. */
export default function Navbar({ mediaTileData = MediaTile_data } = {}) {
  return (
    <header className="h-[3.5625rem] block fixed inset-x-0 z-50 min-w-0">
      <nav className="border-b border-solid border-b-clr-0 block bg-color-006 [backdrop-filter:blur(12px)]" data-component="nav">
        <div className="block mx-auto px-6 max-w-6xl max-md:px-4">
          <div className="flex relative justify-between items-center h-14">
            <a className="h-[40.5px] flex items-center cursor-pointer" data-component="link" href="/">
              <div className="flex items-center gap-3">
                <img className="w-[2.1875rem] h-10 block max-w-full overflow-clip aspect-[auto_35/40] align-middle text-clr-1 hover:transform-[none] focus:transform-[none]" data-component="image" alt="Synter" height="40" src="/assets/cloned/images/a40fecfdbdc2.svg" srcSet="/assets/cloned/svg/ae0a42381e98.svg 1x, /assets/cloned/images/a40fecfdbdc2.svg 2x" width="35" />
                <span className="block text-background text-2xl font-bold leading-8 tracking-[-0.6px]">
                  Synter
                </span>
              </div>
            </a>
            <div className="flex items-center gap-1 max-md:hidden">
              <a className="block py-2 px-3 text-clr-2 font-medium leading-5 cursor-pointer" data-component="link" href="/for/agencies">
                Agencies
              </a>
              <a className="block py-2 px-3 text-clr-2 font-medium leading-5 cursor-pointer" data-component="link" href="/for/brands">
                Brands
              </a>
              {mediaTileData.map((d, i) => <MediaTile key={i} d={d} meta={MediaTile_meta[i]} />)}
              <a className="block py-2 px-3 text-color-005 leading-5 cursor-pointer" data-component="link" href="/pricing">
                Pricing
              </a>
            </div>
            <div className="flex items-center gap-2 max-md:hidden">
              <button className="h-8 block p-2 rounded-md text-color-005 text-center cursor-pointer" data-component="button" title="Switch to light mode">
                <Icon />
              </button>
              <button className="block py-1.5 px-2.5 text-color-005 leading-5 text-center cursor-pointer" data-component="button">
                Log in
              </button>
              <a className="h-9 flex py-2 px-4 items-center text-color-006 font-bold leading-5 text-center bg-clr-3 cursor-pointer md:max-lg:h-14" data-component="button" href="/get-started?placement=nav_get_started">
                Get started
              </a>
            </div>
            <div className="hidden min-w-0 items-center gap-1 max-md:flex">
              <a className="inline-flex py-1.5 px-2.5 items-center text-color-006 text-xs font-bold leading-4 bg-clr-3 cursor-pointer max-md:flex" href="/get-started?placement=mobile_nav_inline_get_started">
                Get started
              </a>
              <button className="inline-block p-2 text-color-005 text-center cursor-pointer max-md:block" aria-label="Open menu">
                <Icon2 />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
