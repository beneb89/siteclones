import TextLink from "../components/text-link";
import { TextLink_styles } from "../_styles";
import { textLinkData as textLinkDataContent } from "../content";
/** Related Features section. */
export default function RelatedFeaturesSection({ textLinkData = textLinkDataContent } = {}) {
  return (
    <div className="border-t border-solid border-t-border block mt-16 pt-8 w-full">
      <h2 className="block mb-8 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-3xl font-light leading-9 tracking-[-0.75px]" data-component="heading">
        Related Features
      </h2>
      <div className="grid gap-4 grid-cols-2 max-md:grid-cols-1">
        {textLinkData.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
      </div>
    </div>
  );
}
