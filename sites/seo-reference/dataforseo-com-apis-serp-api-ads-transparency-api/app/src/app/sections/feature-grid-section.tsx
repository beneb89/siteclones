import FeatureGridItem from "../components/feature-grid-item";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <div className="box-content block relative my-20 -mx-[0.9375rem] text-left before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
      <div className="box-content w-275 block relative z-20 mx-[6.5625rem] max-md:w-75 max-md:mx-[52.5px] md:max-lg:w-150 md:max-lg:mx-[6.1875rem] 2xl:mx-[26.5625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
        <div className="box-content block -mx-[0.9375rem] max-md:mx-0 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
          <div className="h-[467.1px] min-h-px block relative float-left max-md:h-[76.4375rem] max-md:[float:initial] md:max-lg:h-[54.3125rem]">
            <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
              <div className="box-content h-full block">
                <div className="box-content block pb-5">
                  <div className="box-content block">
                    <h2 className="box-content block text-color-001 text-[2.125rem] font-bold leading-[2.75rem] max-md:text-[1.625rem] max-md:leading-[2.0625rem] md:max-lg:text-[1.75rem] md:max-lg:leading-9" data-component="heading">
                      Release in days, not weeks
                    </h2>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="box-content block pb-[0.9375rem]">
                  <div className="box-content block">
                    <h4 className="box-content block text-lg leading-[1.6875rem]" data-component="heading">
                      <span className="box-content inline font-normal">
                        Integrating a new data source can take a lot of time and money. We accelerate this process by providing a user-friendly interface for controlling your API usage and spending.
                      </span>
                    </h4>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="box-content block relative -mx-[0.9375rem] pt-8 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
                  <div className="box-content w-275 block relative z-20 mx-[0.9375rem] max-md:w-75 max-md:mx-0 md:max-lg:w-150">
                    <div className="box-content block -mx-[0.9375rem] max-md:mx-0 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left grid-cols-1 lg:grid-cols-3">
                      {features.map((d) => <FeatureGridItem key={d.variant} d={d} />)}
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
