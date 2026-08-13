import TextLink from "../components/text-link";
import { TextLink_styles } from "../_styles";
import { textLinkData as textLinkDataContent } from "../content";
/** Navbar2 section. */
export default function Navbar2({ textLinkData = textLinkDataContent } = {}) {
  return (
    <nav className="h-[3.65rem] border-b border-solid border-b-border block sticky top-16 z-30 bg-clr-8 [backdrop-filter:saturate(1.8)_blur(8px)] max-md:h-[3.5625rem] max-md:top-14" data-component="nav" aria-label="Section navigation" id="pp-tabnav">
      <div className="block max-w-330 px-6 mx-auto max-md:px-3.5 md:max-lg:px-4">
        <div className="flex py-2 gap-1 overflow-auto max-md:py-1.5" data-ditto-id="style-div">
          {textLinkData.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </nav>
  );
}
