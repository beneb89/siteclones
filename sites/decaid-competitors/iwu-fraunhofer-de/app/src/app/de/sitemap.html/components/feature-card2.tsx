export type FeatureCard2Data = {
  id: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <li className="border-t border-solid border-t-border block relative align-top bg-surface">
      <h4 className="block relative text-primary text-lg leading-5.5 [word-break:break-word] [overflow-wrap:break-word] 2xl:text-[1.375rem] 2xl:leading-[1.625rem]">
        <a className="block py-[0.9375rem] pr-[4.0625rem] pl-[4.6875rem] text-foreground text-xs leading-[0.9375rem] tracking-[0.3px] cursor-pointer 2xl:py-4.5 2xl:pr-19.5 2xl:pl-22.5 2xl:text-sm 2xl:leading-4.5 2xl:tracking-[0.36px]" href="/de/Ueber-uns/Kuratorium.html" id={d.id}>
          {d.title}
        </a>
      </h4>
      {" "}
    </li>
  );
}
