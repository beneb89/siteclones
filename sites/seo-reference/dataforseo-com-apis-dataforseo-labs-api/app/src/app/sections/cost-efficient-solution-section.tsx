import MediaTile2, { type MediaTile2Data } from "../components/media-tile2";
import { MediaTile2_styles } from "../_styles";
const MediaTile2_data: MediaTile2Data[] = [
    { alt: "fastest", imgSrc: "/assets/cloned/images/f89164c245db.webp", label: "fastest", text: "Real-time results", text2: "DataForSEO Labs API features a turnaround time of up to 2 seconds" },
    { alt: "pay-as-you-go", imgSrc: "/assets/cloned/images/b85d58c0b3b8.webp", label: "pay-as-you-go", text: "Pay-as-you-go", text2: "Add funds to your account and use them for obtaining data" },
    { alt: "support", imgSrc: "/assets/cloned/images/b79e2a885f9c.webp", label: "support", text: "Integration support", text2: "Our 24/7 customer support team is with you every step of the way" }
];
/** Cost Efficient Solution section. */
export default function CostEfficientSolutionSection({ mediaTile2Data = MediaTile2_data } = {}) {
  return (
    <div className="box-content block relative my-20 -mx-[0.9375rem] text-left before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
      <div className="box-content w-275 block relative z-20 mx-[6.5625rem] max-md:w-75 max-md:mx-[52.5px] md:max-lg:w-150 md:max-lg:mx-[6.1875rem] 2xl:mx-[26.5625rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
        <div className="box-content block -mx-[0.9375rem] max-md:mx-0 before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
          <div className="h-[23.675rem] min-h-px block relative float-left max-md:h-[49.975rem] max-md:[float:initial] md:max-lg:h-[25.9375rem]">
            <div className="h-full block px-[0.9375rem] before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-left after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-left">
              <div className="box-content h-full block">
                <h2 className="box-content block text-color-001 [font-family:Raleway] text-[2rem] font-semibold leading-[2.5625rem] text-center max-md:text-[1.625rem] max-md:leading-[2.0625rem] md:max-lg:text-[1.75rem] md:max-lg:leading-9" data-component="heading">
                  {" Cost-efficient solution"}
                </h2>
                {" "}
                <div className="box-content block">
                  <div className="box-content block">
                    <h2 className="box-content block text-clr-16 text-[2.125rem] font-bold leading-[2.75rem] text-center max-md:text-[1.625rem] max-md:leading-[2.0625rem] md:max-lg:text-[1.75rem] md:max-lg:leading-9" data-component="heading">
                      for budget-conscious businesses
                    </h2>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="box-content h-7.5 block" />
                <div className="box-content block relative max-h-62.5 mt-10 -mx-[0.9375rem] p-[2.1875rem] rounded-md text-center shadow-[var(--clr-2)_0px_17px_40px_0px] max-lg:mt-2.5 max-lg:p-[1.5625rem] max-lg:max-h-none before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-sm before:font-medium before:leading-[1.4375rem] before:text-center after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-sm after:font-medium after:leading-[1.4375rem] after:text-center">
                  <div className="box-content block">
                    {mediaTile2Data.map((d, i) => <MediaTile2 key={i} d={d} styles={MediaTile2_styles[i]} />)}
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
