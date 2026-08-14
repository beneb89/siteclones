export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="box-content flex flex-col flex-1 max-lg:grow-[initial] max-lg:basis-[initial]">
      <h3 className="box-content block mb-2.5 text-xl font-bold leading-[1.5625rem] max-lg:text-base max-lg:leading-5" data-component="heading">
        <strong className="box-content inline font-black">
          {d.title}
        </strong>
      </h3>
      <p className="box-content block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
        {d.description}
      </p>
    </div>
  );
}
