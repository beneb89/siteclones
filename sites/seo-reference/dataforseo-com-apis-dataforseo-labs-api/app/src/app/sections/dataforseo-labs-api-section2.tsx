import ListRow3, { type ListRow3Data } from "../components/list-row3";
import { ListRow3_styles } from "../_styles";
const ListRow3_data: ListRow3Data[] = [
    { ariacontrols: "tab-app-metrics", ariaexpanded: "true", arialabelledby: "ui-id-2", ariaselected: "true", href: "#tab-app-metrics", id: "ui-id-2", label: "\n\t\t\t\t\t\tApp Metrics\t\t\t\t\t" },
    { ariacontrols: "tab-keywords", ariaexpanded: "false", arialabelledby: "ui-id-3", ariaselected: "false", href: "#tab-keywords", id: "ui-id-3", label: "\n\t\t\t\t\t\tKeywords\t\t\t\t\t" },
    { ariacontrols: "tab-competitors", ariaexpanded: "false", arialabelledby: "ui-id-4", ariaselected: "false", href: "#tab-competitors", id: "ui-id-4", label: "\n\t\t\t\t\t\tCompetitors\t\t\t\t\t" },
    { ariacontrols: "tab-intersections", ariaexpanded: "false", arialabelledby: "ui-id-5", ariaselected: "false", href: "#tab-intersections", id: "ui-id-5", label: "\n\t\t\t\t\t\tIntersections\t\t\t\t\t" }
];
/** Dataforseo Labs Api section. */
export default function DataforseoLabsApiSection2({ listRow3Data = ListRow3_data } = {}) {
  return (
    <div className="box-content block relative my-20 -mx-[0.9375rem] text-left max-lg:hidden before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto" id="mobile-tab-disable">
      <div className="box-content w-275 block relative z-20 mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
        <div className="box-content block -mx-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
          <div className="h-[646.3px] min-h-px block relative float-left" id="app-store-optimization">
            <div className="block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
              <div className="box-content block">
                <h2 className="box-content block text-color-001 text-[2.125rem] font-semibold leading-[2.75rem]" data-component="heading">
                  {" DataForSEO Labs API for App Store Optimization"}
                </h2>
                <div className="box-content h-5 block" />
                <div className="box-content block mb-10 p-5 rounded-md bg-background shadow-[var(--clr-7)_4px_4px_18px_0px] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
                  <ul className="box-content block relative overflow-hidden align-middle [list-style-type:none] list-outside" role="tablist">
                    {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
                  </ul>
                  {" "}
                  <div className="box-content block py-[1.5625rem] leading-[1.5625rem]" aria-hidden="false" aria-labelledby="ui-id-2" id="tab-app-metrics" role="tabpanel">
                    <div className="box-content block">
                      <div className="box-content block">
                        <div className="box-content block">
                          <div className="box-content w-106 block float-left">
                            <h3 className="box-content block text-color-001 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
                              {" Bulk App Metrics "}
                            </h3>
                            {" "}
                            <div className="box-content block mb-[2.1875rem]">
                              <p className="box-content block my-2.5">
                                {"Available for both Apple App Store and Google Play, the Bulk App metrics endpoint is designed to help you measure app store optimization efforts by providing ranking distribution across search results pages and search volume metrics for up to 1000 apps with a single API call. "}
                              </p>
                              {" "}
                            </div>
                            {" "}
                            <div className="box-content block">
                              <strong className="box-content inline font-semibold">
                                Supported Search Engines
                              </strong>
                            </div>
                            {" "}
                            <div className="box-content block">
                              <img className="box-content w-12.5 h-12.5 inline max-w-full my-2.5 ml-2.5 p-[0.9375rem] rounded-[20px] overflow-clip bg-background shadow-[var(--clr-2)_0px_6px_19px_0px]" data-component="image" alt="google play" src="/assets/cloned/images/f1b4f7f8b82b.png" title="Google Play" />
                              {" "}
                              <img className="box-content w-12.5 h-12.5 inline max-w-full my-2.5 ml-2.5 p-[0.9375rem] rounded-[20px] overflow-clip bg-background shadow-[var(--clr-2)_0px_6px_19px_0px]" data-component="image" alt="app store" src="/assets/cloned/images/cf84de571495.png" title="App Store" />
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="box-content w-159 block float-left">
                            <img className="box-content w-159 h-102 inline max-w-full overflow-clip" data-component="image" alt="Bulk App Metrics" src="/assets/cloned/images/15eceeabb71d.webp" title="DataForSEO Labs API 4" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
