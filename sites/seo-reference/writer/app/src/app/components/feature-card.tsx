export type FeatureCardData = {
  title: string;
  text: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="border-t border-solid border-t-foreground block pt-4">
      <h3 className="block mb-[1.0625rem] [font-family:Poppins] text-2xl leading-7.5" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <div className="block [font-family:Poppins] leading-[1.625rem] [font-feature-settings:'clig'_0,_'liga'_0] max-md:text-[1rem]">
        {d.text}
      </div>
      {" "}
    </div>
  );
}
