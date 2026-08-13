import ListRow5, { type ListRow5Data } from "../components/list-row5";
import { ListRow5_styles } from "../_styles";
const ListRow5_data: ListRow5Data[] = [
    { ariacontrols: "tab-dataforseo-labs-google-api", ariaexpanded: "true", arialabelledby: "ui-id-10", ariaselected: "true", href: "#tab-dataforseo-labs-google-api", id: "ui-id-10", label: "\n\t\t\t\t\tDataForSEO Labs Google API\t\t\t\t" },
    { ariacontrols: "tab-dataforseo-labs-amazon-api", ariaexpanded: "false", arialabelledby: "ui-id-11", ariaselected: "false", href: "#tab-dataforseo-labs-amazon-api", id: "ui-id-11", label: "\n\t\t\t\t\tDataForSEO Labs Amazon API\t\t\t\t" },
    { ariacontrols: "tab-dataforseo-labs-app-store-api", ariaexpanded: "false", arialabelledby: "ui-id-12", ariaselected: "false", href: "#tab-dataforseo-labs-app-store-api", id: "ui-id-12", label: "\n\t\t\t\t\tDataForSEO Labs App Store API\t\t\t\t" },
    { ariacontrols: "tab-dataforseo-labs-google-play-api", ariaexpanded: "false", arialabelledby: "ui-id-13", ariaselected: "false", href: "#tab-dataforseo-labs-google-play-api", id: "ui-id-13", label: "\n\t\t\t\t\tDataForSEO Labs Google Play API\t\t\t\t" }
];
/** Dataforseo Labs Google section. */
export default function DataforseoLabsGoogleSection({ listRow5Data = ListRow5_data } = {}) {
  return (
    <div className="box-content block relative my-20 -mx-[0.9375rem] text-left max-lg:hidden before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto" id="pricing-tabs">
      <div className="box-content w-275 block relative z-20 mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
        <div className="box-content block -mx-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
          <div className="h-260 min-h-px block relative float-left">
            <div className="block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
              <div className="box-content block">
                <div className="box-content block before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                  <ul className="box-content block relative overflow-hidden align-middle [list-style-type:none] list-outside" role="tablist">
                    {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} styles={ListRow5_styles[i]} />)}
                  </ul>
                  {" "}
                  <div className="box-content h-209.5 block mt-2.5 p-7.5 leading-[1.5625rem]" aria-hidden="false" aria-labelledby="ui-id-10" id="tab-dataforseo-labs-google-api" role="tabpanel">
                    <div className="box-content block">
                      <div className="box-content block">
                        <div className="box-content w-[326.7px] block float-left m-2.5">
                          <div className="box-content block mb-2.5 text-color-001 text-[1.125rem] font-semibold uppercase">
                            HISTORICAL RANK
                          </div>
                          {" "}
                          <div className="box-content block">
                            <div className="box-content h-83.5 min-h-83.5 block my-2.5 p-[0.9375rem] rounded-md bg-background shadow-[var(--clr-2)_0px_5px_15px_0px]">
                              <div className="box-content block text-color-001 text-[1rem] font-semibold uppercase">
                                Live mode
                              </div>
                              {" "}
                              <div className="box-content block mb-2 text-[1rem]">
                                Real-time results with a single POST request
                              </div>
                              {" "}
                              <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                                Turnaround time
                              </div>
                              {" "}
                              <div className="box-content block text-[1rem] font-semibold">
                                {"up to "}
                                <strong className="box-content inline">
                                  2 seconds
                                </strong>
                                {" on average"}
                              </div>
                              {" "}
                              <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                                Price per task
                              </div>
                              {" "}
                              <div className="box-content block text-accent text-[1rem] font-semibold">
                                $0.12
                              </div>
                              {" "}
                              <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                                Price per item
                              </div>
                              {" "}
                              <div className="box-content block text-accent text-[1rem] font-semibold">
                                $0.0012
                              </div>
                              {" "}
                              <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                                <span className="box-content inline text-accent text-[1rem]">
                                  $127.2 for 1K domains*
                                </span>
                              </div>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="box-content w-[326.7px] block float-left m-2.5">
                          <div className="box-content block mb-2.5 text-color-001 text-[1.125rem] font-semibold uppercase">
                            HISTORICAL SERPS
                          </div>
                          {" "}
                          <div className="box-content h-83.5 min-h-83.5 block my-2.5 p-[0.9375rem] rounded-md bg-background shadow-[var(--clr-2)_0px_5px_15px_0px]">
                            <div className="box-content block text-color-001 text-[1rem] font-semibold uppercase">
                              Live mode
                            </div>
                            {" "}
                            <div className="box-content block mb-2 text-[1rem]">
                              Real-time results with a single POST request
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              Turnaround time
                            </div>
                            {" "}
                            <div className="box-content block text-[1rem] font-semibold">
                              {"up to "}
                              <strong className="box-content inline">
                                2 seconds
                              </strong>
                              {" on average"}
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              Price per SERP
                            </div>
                            {" "}
                            <div className="box-content block text-accent text-[1rem] font-semibold">
                              $0.00012
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              <span className="box-content inline text-accent text-[1rem]">
                                $0.12 for 1K SERPs**
                              </span>
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="box-content w-[326.7px] block float-left m-2.5">
                          <div className="box-content block mb-2.5 text-color-001 text-[1.125rem] font-semibold uppercase">
                            SEARCH INTENT
                          </div>
                          {" "}
                          <div className="box-content h-83.5 min-h-83.5 block my-2.5 p-[0.9375rem] rounded-md bg-background shadow-[var(--clr-2)_0px_5px_15px_0px]">
                            <div className="box-content block text-color-001 text-[1rem] font-semibold uppercase">
                              Live mode
                            </div>
                            {" "}
                            <div className="box-content block mb-2 text-[1rem]">
                              Real-time results with a single POST request
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              Turnaround time
                            </div>
                            {" "}
                            <div className="box-content block text-[1rem] font-semibold">
                              {"up to "}
                              <strong className="box-content inline">
                                2 seconds
                              </strong>
                              {" on average"}
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              Price per task
                            </div>
                            {" "}
                            <div className="box-content block text-accent text-[1rem] font-semibold">
                              $0.012
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              Price per keyword
                            </div>
                            {" "}
                            <div className="box-content block text-accent text-[1rem] font-semibold">
                              $0.00012
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              <span className="box-content inline text-accent text-[1rem]">
                                $132 for 1M keywords***
                              </span>
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="box-content block">
                      <div className="box-content block">
                        <div className="box-content w-[326.7px] block mx-[356.7px]">
                          <div className="box-content block mb-2.5 text-color-001 text-[1.125rem] font-semibold uppercase">
                            ALL OTHER ENDPOINTS
                          </div>
                          {" "}
                          <div className="box-content h-83.5 min-h-83.5 block my-2.5 p-[0.9375rem] rounded-md bg-background shadow-[var(--clr-2)_0px_5px_15px_0px]">
                            <div className="box-content block text-color-001 text-[1rem] font-semibold uppercase">
                              Live mode
                            </div>
                            {" "}
                            <div className="box-content block mb-2 text-[1rem]">
                              Real-time results with a single POST request
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              Turnaround time
                            </div>
                            {" "}
                            <div className="box-content block text-[1rem] font-semibold">
                              {"up to "}
                              <strong className="box-content inline">
                                2 seconds
                              </strong>
                              {" on average"}
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              Price per task
                            </div>
                            {" "}
                            <div className="box-content block text-accent text-[1rem] font-semibold">
                              $0.012
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              Price per item
                            </div>
                            {" "}
                            <div className="box-content block text-accent text-[1rem] font-semibold">
                              $0.00012
                            </div>
                            {" "}
                            <div className="box-content block mt-2.5 mb-0.5 py-px px-1.5 font-semibold bg-surface">
                              <span className="box-content inline text-accent text-[1rem]">
                                $132 for 1M keywords/domains*****
                              </span>
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="box-content block relative -mx-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                  <div className="box-content block">
                    <div className="w-full h-18 min-h-px block relative float-left">
                      <div className="block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                        <div className="box-content block">
                          <div className="box-content h-5 block" />
                          <a className="box-content w-[65.5625rem] h-12 border-2 border-solid border-primary inline-block relative px-[2.1875rem] rounded-[3px] text-primary text-[0.8125rem] font-extrabold leading-12 tracking-[1px] text-center uppercase cursor-pointer hover:bg-clr-33 hover:text-clr-34 hover:outline-clr-34 hover:[text-decoration-color:var(--clr-34)] focus:bg-clr-30 focus:text-clr-39 focus:outline-clr-39 focus:[text-decoration-color:var(--clr-39)]" data-component="link" href="/pricing/dataforseo-labs" target="_blank">
                            {" "}
                            <span className="box-content inline hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]">
                              View pricing
                            </span>
                            {" "}
                            <span className="box-content inline" />
                            {" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
