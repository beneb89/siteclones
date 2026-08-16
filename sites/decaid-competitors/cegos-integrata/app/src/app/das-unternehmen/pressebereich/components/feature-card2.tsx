export type FeatureCard2Data = {
  id: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <div className="box-content block">
      <div className="box-content block relative">
        <div className="box-content block">
          <h3 className="box-content border border-solid border-surface block mb-2.5 py-5 px-[1.5625rem] text-xl font-bold leading-[1.5625rem] max-lg:text-base max-lg:leading-5" data-component="heading" id={d.id}>
            {d.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
