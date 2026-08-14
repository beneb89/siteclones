export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="border border-solid border-border block relative py-8 px-6.5 rounded-2xl bg-color-021 [backdrop-filter:blur(8px)] max-lg:py-6.5 max-lg:px-5.5">
      <span className="block mb-3.5 text-primary text-[0.6875rem] font-semibold leading-[1.125rem] tracking-[1.98px] uppercase">
        {d.text}
      </span>
      {" "}
      <h3 className="block mb-3 text-[1.375rem] font-semibold leading-[1.625rem] tracking-[-0.26px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
