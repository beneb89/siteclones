import Icon19 from "../svgs/svg-icon19";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
const ListRow2_data: ListRow2Data[] = [
    { text: "Google announced the Ads Transparency Center (aka Google Ad Library) on May 29th." },
    { text: "The primary use case is to provide transparency into who and how advertisers are using Google ads." },
    { text: "Marketers can use Transparency Center to spy on their competitors." }
];
/** Second Summary Google section. */
export default function SecondSummaryGoogleSection({ listRow2Data = ListRow2_data } = {}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start items-center gap-2">
        <div className="w-6 h-6 flex justify-center items-center">
          <div className="flex justify-center items-center before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.18px]">
            <Icon19 />
          </div>
        </div>
        <div className="block items-center text-color-002">
          <div className="block text-[1.125rem] font-medium tracking-[-0.26px] whitespace-nowrap max-md:tracking-[-0.23px] max-md:[font-size:inherit]">
            30 Second Summary
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block text-color-003">
          <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-color-003 before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-003 after:text-base after:leading-6 after:tracking-[-0.18px]">
            <ul className="flex my-4 pl-6 flex-col gap-3 overflow-hidden [list-style-type:disc] list-outside" role="list">
              {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
              <li className="list-item">
                {"Ads will only be displayed from companies who complete the "}
                <a className="inline justify-center items-center text-color-002 font-medium cursor-pointer hover:underline" data-component="link" href="https://support.google.com/adspolicy/answer/9703665" target="_blank">
                  Advertiser Verification
                </a>
                .
              </li>
              <li className="list-item">
                {"Google Transparency Center includes Search, Display & YouTube ads. "}
              </li>
              <li className="list-item">
                Find winning competitor ads by filtering the date range to discover the longest-running adverts.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-px block bg-surface" />
    </div>
  );
}
