import TextLink from "../components/text-link";
import Icon from "../svgs/svg-icon";
import { textLinkData as textLinkDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ textLinkData = textLinkDataContent } = {}) {
  return (
    <nav className="w-full h-[4.3125rem] border-b border-solid border-b-surface-4 block sticky top-0 z-40 bg-color-007 [backdrop-filter:blur(12px)]" data-component="nav">
      <div className="block px-8 mx-auto max-w-7xl max-md:px-4">
        <div className="flex justify-between items-center h-[4.25rem]">
          <a className="h-6 flex items-center cursor-pointer" data-component="link" aria-label="Digital Applied" href="/">
            <img className="w-[8.3125rem] block max-w-full overflow-clip aspect-[auto_1556/280] align-middle text-clr-0 h-6 md:max-lg:w-33" data-component="image" alt="Digital Applied" height="280" src="/assets/cloned/svg/2df115000080.svg" width="1556" />
          </a>
          <div className="flex items-center gap-1 max-md:hidden">
            {textLinkData.map((d, i) => <TextLink key={i} d={d} />)}
          </div>
          <div className="flex items-center gap-2.5 max-md:hidden">
            <a className="block py-2 px-3.5 rounded-[10px] text-color-003 text-sm font-medium leading-[1.25rem] cursor-pointer hover:bg-surface-2" data-component="link" href="/auth/login">
              Log in
            </a>
            <a className="border border-solid border-clr-0 flex px-4 rounded-[10px] justify-center items-center shrink-0 gap-1 text-clr-1 text-sm font-medium leading-5 whitespace-nowrap text-nowrap bg-color-010 [background-clip:padding-box] [-webkit-background-clip:padding-box] cursor-pointer h-[2.375rem] hover:bg-clr-12" data-component="button" href="/get-started">
              Start engines
            </a>
          </div>
          <button className="w-9 h-9 border border-solid border-clr-0 hidden min-w-0 rounded-lg justify-center items-center shrink-0 text-sm font-medium leading-5 text-center whitespace-nowrap text-nowrap [background-clip:padding-box] [-webkit-background-clip:padding-box] cursor-default max-md:flex" aria-controls="radix-_R_habvb_" aria-expanded="false" aria-haspopup="dialog" aria-label="Open menu" type="button">
            <Icon />
          </button>
        </div>
      </div>
    </nav>
  );
}
