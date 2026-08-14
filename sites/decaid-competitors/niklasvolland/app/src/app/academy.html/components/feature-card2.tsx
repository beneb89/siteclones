export type FeatureCard2Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="block relative z-1 px-4 text-center">
      <div className="w-15 h-15 border border-solid border-color-012 flex relative z-2 mb-6 mx-auto rounded-[50%] justify-center items-center text-primary text-lg font-semibold leading-[1.8125rem] bg-color-010">
        {d.text}
      </div>
      {" "}
      <h4 className="block mb-2.5 text-lg font-semibold leading-[1.8125rem] tracking-[-0.09px]" data-component="heading">
        {d.title}
      </h4>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
