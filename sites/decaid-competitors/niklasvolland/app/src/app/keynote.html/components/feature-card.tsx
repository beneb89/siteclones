export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="border border-solid border-border block relative py-9 px-8 rounded-3xl overflow-hidden cursor-default max-lg:py-7 max-lg:px-6" style={{ backgroundImage: "linear-gradient(var(--color-004) 0%, var(--color-010) 100%)" }}>
      <span className="block mb-4.5 text-primary text-[0.6875rem] font-semibold leading-[1.125rem] tracking-[1.98px] uppercase">
        {d.text}
      </span>
      {" "}
      <h3 className="block mb-3.5 text-2xl font-semibold leading-[1.8125rem] tracking-[-0.24px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.4375rem]">
        {d.description}
      </p>
      {" "}
      <div className="flex mt-6 flex-wrap gap-1.5">
        <span className="border border-solid border-border block py-1 px-2.5 rounded-[99px] text-muted text-[0.6875rem] leading-[1.125rem] tracking-[0.22px] bg-border">
          {d.text2}
        </span>
        {" "}
        <span className="border border-solid border-border block py-1 px-2.5 rounded-[99px] text-muted text-[0.6875rem] leading-[1.125rem] tracking-[0.22px] bg-border">
          {d.text3}
        </span>
        {" "}
        <span className="border border-solid border-border block py-1 px-2.5 rounded-[99px] text-muted text-[0.6875rem] leading-[1.125rem] tracking-[0.22px] bg-border">
          {d.text4}
        </span>
        {" "}
      </div>
      {" "}
    </div>
  );
}
