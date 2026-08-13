export type FeatureCardData = {
  description: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="border border-solid border-border block p-6 rounded-xl text-center bg-color-004">
      <div className="block mb-2 text-accent text-3xl font-bold leading-9">
        {d.title}
      </div>
      <p className="block mb-5 text-sm leading-5">
        {d.description}
      </p>
    </div>
  );
}
