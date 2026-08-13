import TextLink from "../components/text-link";
import { TextLink_styles } from "../_styles";
import { textLinkData as textLinkDataContent } from "../content";
/** Use Essential Cookies section. */
export default function UseEssentialCookiesSection({ textLinkData = textLinkDataContent } = {}) {
  return (
    <div className="h-34.5 border border-solid border-border block fixed bottom-3 inset-x-3 z-100 mx-auto p-5 rounded-[14px] bg-background shadow-[var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-2)_0px_0px_0px_0px,var(--clr-7)_0px_25px_50px_-12px] max-w-3xl max-md:h-60.5 max-md:p-4" aria-label="Cookie preferences" role="region">
      <p className="block text-[0.875rem]">
        {"We use essential cookies to operate and secure Soku. With your permission, we also use optional analytics and advertising cookies to measure usage and campaigns. You can change your choice at any time. "}
        <a className="inline underline cursor-pointer hover:no-underline" data-component="link" href="/privacy">
          Privacy Policy
        </a>
      </p>
      <div className="flex mt-4 flex-wrap justify-end gap-2 max-md:[justify-content:initial]">
        {textLinkData.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
      </div>
    </div>
  );
}
