export type FeatureCardData = {
  id: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <li className="border-t border-solid border-t-border block relative align-top bg-surface-2">
      <h4 className="block relative text-primary text-lg leading-5.5 [word-break:break-word] [overflow-wrap:break-word]">
        <a className="block py-[0.9375rem] pr-[4.0625rem] pl-[7.8125rem] text-foreground text-xs leading-[0.9375rem] tracking-[0.3px] cursor-pointer" href="/de/Ueber-uns/institutsleitung/MartinDix.html" id={d.id}>
          {d.title}
        </a>
      </h4>
      {" "}
    </li>
  );
}
