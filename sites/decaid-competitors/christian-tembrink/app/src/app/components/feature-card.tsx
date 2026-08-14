export type FeatureCardData = {
  title: string;
  title2: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="flex relative max-w-[33.3333%] py-2 px-1 flex-col basis-1/3 max-md:max-w-full max-md:basis-full">
      <div className="block relative max-w-full">
        <div className="block">
          <div className="block">
            <h3 className="block my-[1.9375rem] text-primary [font-family:Raleway] text-[1.9375rem] leading-9 text-center [overflow-wrap:break-word]" data-component="heading">
              <span className="inline text-color-004">
                <strong className="inline font-bold">
                  {d.title}
                </strong>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="block relative max-w-full -mt-8">
        <div className="block">
          <div className="block">
            <h4 className="block my-[2.1625rem] text-primary [font-family:Raleway] text-[1.625rem] leading-7.5 text-center [overflow-wrap:break-word]" data-component="heading">
              <span className="inline text-color-004">
                <strong className="inline font-bold">
                  {d.title2}
                </strong>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
