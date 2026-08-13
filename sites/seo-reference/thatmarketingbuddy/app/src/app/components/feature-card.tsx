export type FeatureCardData = {
  title: string;
  text: string;
  text3: string;
  text4: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="block p-5 rounded-xl bg-foreground">
      <h4 className="block mb-3 text-background text-sm font-bold leading-5" data-component="heading">
        {d.title}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        <span className="flex py-1 px-2.5 rounded-md items-center text-color-002 text-xs leading-4 bg-surface">
          {d.text}
        </span>
        <span className="flex py-1 px-2.5 rounded-md items-center text-color-002 text-xs leading-4 bg-surface">
          {d.description}
        </span>
        <span className="flex py-1 px-2.5 rounded-md items-center text-color-002 text-xs leading-4 bg-surface">
          {d.text3}
        </span>
        <span className="flex py-1 px-2.5 rounded-md items-center text-color-002 text-xs leading-4 bg-surface">
          {d.text4}
        </span>
      </div>
    </div>
  );
}
