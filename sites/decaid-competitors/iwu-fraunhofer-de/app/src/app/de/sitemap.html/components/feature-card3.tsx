export type FeatureCard3Data = {
  id: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard3({ d }: { d: FeatureCard3Data }) {
  return (
    <li className="border-t border-solid border-t-border block relative align-top bg-surface">
      <h4 className="block relative text-primary text-lg leading-5.5 [word-break:break-word] [overflow-wrap:break-word]" data-component="heading">
        <a className="block py-[0.9375rem] pr-[4.0625rem] pl-[4.6875rem] text-foreground text-xs leading-[0.9375rem] tracking-[0.3px] cursor-pointer max-lg:pl-12.5" data-component="link" href="/de/Ueber-uns/Kuratorium.html" id={d.id}>
          {d.title}
        </a>
      </h4>
      {" "}
    </li>
  );
}
