export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="box-content block">
      <h3 className="box-content block text-color-001 [font-family:Oswald] text-2xl leading-[2.125rem] max-md:pb-5 max-lg:text-[1.375rem] max-lg:leading-[1.9375rem] md:max-lg:pb-5.5" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <div className="box-content block">
        <p className="box-content block pt-[0.3125rem] pb-2.5 leading-7">
          {d.description}
        </p>
        {" "}
      </div>
    </div>
  );
}
