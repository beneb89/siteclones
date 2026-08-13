import TextLink from "../components/text-link";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import { TextLink_styles } from "../_styles";
import { textLinkData as textLinkDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ textLinkData = textLinkDataContent } = {}) {
  return (
    <header className="block">
      <nav className="block" data-component="nav">
        <div className="flex justify-between items-center">
          <a className="w-[10.0875rem] h-16 flex rounded-xl items-center gap-2 text-color-001 text-[1.625rem] font-extrabold leading-[2.0625rem] tracking-[-0.52px] cursor-pointer" data-component="link" href="/">
            {" "}
            <span className="flex justify-center items-center h-16 w-16">
              {" "}
              <img className="w-16 h-[1.5625rem] block max-w-full overflow-clip aspect-[auto_64/64] align-middle" data-component="image" alt="Baker logo" height="64" src="/assets/cloned/images/d2fb094a4186.webp" width="64" />
              {" "}
            </span>
            {" BAKER "}
          </a>
          {" "}
          <div className="flex items-center gap-6 max-md:hidden">
            {textLinkData.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
            {" "}
          </div>
          {" "}
          <button className="hidden min-w-0 rounded-xl justify-center items-center text-primary text-center cursor-default w-10 h-10 max-md:flex" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">
            <Icon />
            {" "}
            <Icon2 />
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
    </header>
  );
}
