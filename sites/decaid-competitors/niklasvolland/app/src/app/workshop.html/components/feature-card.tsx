export type FeatureCardData = {
  text: string;
  text2: string;
  title: string;
  text3: string;
  description: string;
  text4: string;
  text5: string;
  text6: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="border border-solid border-border flex relative py-10 px-8 rounded-3xl flex-col overflow-hidden max-lg:py-8 max-lg:px-6" style={{ backgroundImage: "linear-gradient(var(--color-004) 0%, var(--color-010) 100%)" }}>
      <div className="flex mb-6 justify-between items-start">
        <span className="block text-primary text-[0.6875rem] font-semibold leading-[1.125rem] tracking-[1.98px] uppercase">
          {d.text}
        </span>
        {" "}
        <span className="border border-solid border-border block py-1 px-2.5 rounded-[99px] text-muted text-[0.6875rem] font-medium leading-[1.125rem] tracking-[0.55px]">
          {d.text2}
        </span>
        {" "}
      </div>
      {" "}
      <h3 className="block mb-3.5 text-[1.625rem] font-semibold leading-[1.9375rem] tracking-[-0.31px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <span className="block mb-4.5 text-primary text-[0.8125rem] font-medium leading-[1.3125rem] tracking-[0.39px]">
        {d.text3}
      </span>
      {" "}
      <p className="block flex-1 text-muted-foreground text-[0.9375rem] leading-[1.4375rem]">
        {d.description}
      </p>
      {" "}
      <ul className="border-t border-solid border-t-border flex mt-6 pt-6 flex-col gap-2.5 [list-style-type:none] list-outside">
        <li className="flex items-start gap-2.5 text-muted-foreground text-sm leading-[1.25rem] before:content-[''] before:block before:w-1.5 before:h-1.5 before:mt-2 before:bg-primary before:rounded-tl-[50%]">
          {d.text4}
        </li>
        <li className="flex items-start gap-2.5 text-muted-foreground text-sm leading-[1.25rem] before:content-[''] before:block before:w-1.5 before:h-1.5 before:mt-2 before:bg-primary before:rounded-tl-[50%]">
          {d.text5}
        </li>
        <li className="flex items-start gap-2.5 text-muted-foreground text-sm leading-[1.25rem] before:content-[''] before:block before:w-1.5 before:h-1.5 before:mt-2 before:bg-primary before:rounded-tl-[50%]">
          {d.text6}
        </li>
      </ul>
      {" "}
    </div>
  );
}
