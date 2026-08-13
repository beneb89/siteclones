import MediaTile from "../components/media-tile";
import Icon from "../svgs/svg-icon";
import { mediaTileData as mediaTileDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ mediaTileData = mediaTileDataContent } = {}) {
  return (
    <header className="h-[4.0625rem] border-b border-solid border-b-clr-0 block sticky top-0 z-50 bg-clr-1 [backdrop-filter:blur(12px)]">
      <div className="flex mx-auto px-6 justify-between items-center h-16 max-w-6xl max-md:px-5">
        <a className="h-7 flex items-center gap-2 [font-family:editorialNew,_'editorialNew_Fallback'] text-xl font-bold italic leading-7 tracking-[-0.5px] cursor-pointer" data-component="link" href="/">
          <img className="w-7 h-7 block max-w-full shrink-0 overflow-clip aspect-[auto_28/28] align-middle text-clr-2 [translate:0px_-3px]" data-component="image" alt="" height="28" src="/assets/cloned/svg/a476157f76df.svg" width="28" />
          Soku AI
        </a>
        <nav className="flex items-center gap-8 max-md:hidden" data-component="nav">
          {mediaTileData.map((d, i) => <MediaTile key={i} d={d} />)}
          <a className="block text-muted-foreground font-medium cursor-pointer hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" href="/pricing">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a className="h-10 flex py-2 px-4 rounded-[10px] text-background font-medium bg-primary cursor-pointer whitespace-nowrap max-md:hidden hover:opacity-90" data-component="button" href="/sign-up">
            Get Started
          </a>
          <button className="border border-solid border-border hidden min-w-0 rounded-full justify-center items-center text-center bg-background cursor-default h-10 w-10 max-md:flex" aria-controls="radix-_r_0_" aria-expanded="false" aria-haspopup="dialog" aria-label="Open menu" type="button">
            <Icon />
          </button>
        </div>
      </div>
    </header>
  );
}
