import TextLink from "../components/text-link";
import { textLinkData as textLinkDataContent } from "../content";
/** Site Builder Report section. */
export default function SiteBuilderReportSection({ textLinkData = textLinkDataContent } = {}) {
  return (
    <div className="box-content w-288 block clear-both max-w-400 mx-16 text-left max-md:w-[337.5px] max-md:mx-[1.175rem] md:max-lg:w-[43.2rem] md:max-lg:mx-[2.4rem] 2xl:w-400 2xl:mx-40">
      <br className="box-content inline clear-both" />
      {" "}
      <p className="box-content block mt-5 mb-7.5 text-[0.9375rem] leading-6 max-lg:mt-12.5 max-lg:text-center">
        {" © 2026 Site Builder Report "}
        {textLinkData.map((d, i) => <TextLink key={i} d={d} />)}
        {" "}
      </p>
      {" "}
    </div>
  );
}
