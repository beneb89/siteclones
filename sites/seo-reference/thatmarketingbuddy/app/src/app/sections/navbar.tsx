import MediaTile from "../components/media-tile";
import Icon2 from "../svgs/svg-icon2";
import { MediaTile_styles } from "../_styles";
import { mediaTileData as mediaTileDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ mediaTileData = mediaTileDataContent } = {}) {
  return (
    <header className="h-[4.575rem] block sticky top-0 z-100 py-3 px-8">
      <div className="grid max-w-300 mx-auto items-center grid-cols-[1fr_auto_1fr]">
        <a className="h-[3.075rem] flex items-center cursor-pointer" data-component="link" href="/">
          <img className="w-45 h-[3.0625rem] block max-w-full overflow-clip object-contain aspect-[auto_180/60] align-middle text-clr-3" data-component="image" alt="That Marketing Buddy" height="60" src="/assets/cloned/images/868110bead60.jpg" srcSet="/assets/cloned/images/155dde0f9b72.webp 1x, /assets/cloned/images/868110bead60.jpg 2x" width="180" />
        </a>
        <nav className="flex items-center gap-8 max-lg:hidden" data-component="nav">
          {mediaTileData.map((d, i) => <MediaTile key={i} d={d} styles={MediaTile_styles[i]} />)}
        </nav>
        <div className="block max-lg:hidden" />
        <button className="border border-solid border-clr-4 hidden min-w-0 py-2 px-3 rounded-lg text-center cursor-pointer max-lg:h-10.5 max-lg:flex max-lg:col-start-3" aria-expanded="false" aria-label="Open menu">
          <Icon2 />
        </button>
      </div>
    </header>
  );
}
