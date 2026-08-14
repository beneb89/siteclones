export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="border border-solid border-border block relative py-10 px-8 rounded-3xl overflow-hidden max-lg:py-8 max-lg:px-6" style={{ backgroundImage: "linear-gradient(var(--color-004) 0%, var(--color-010) 100%)" }}>
      <span className="block mb-4.5 text-primary text-[0.6875rem] font-semibold leading-[1.125rem] tracking-[1.98px] uppercase">
        {d.text}
      </span>
      {" "}
      <h3 className="block mb-3.5 text-2xl font-semibold leading-[1.75rem] tracking-[-0.29px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.4375rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
