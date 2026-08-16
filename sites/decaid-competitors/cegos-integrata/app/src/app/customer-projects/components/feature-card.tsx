export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="box-content flex min-w-0 flex-col gap-3 overflow-x-hidden overflow-y-auto [font-family:Raleway,_sans-serif,_sans-serif]">
      <div className="h-75 min-h-75 block relative rounded-[10px] flex-1 overflow-hidden text-center bg-color-014 w-full max-md:h-[363.3px]">
        <div className="flex p-4 flex-col justify-center items-center gap-2 h-full">
          <h3 className="block text-xl font-bold leading-[1.5625rem] max-md:text-base max-md:leading-[1.25rem] md:max-lg:text-lg md:max-lg:leading-[1.4375rem]" data-component="heading">
            {d.title}
          </h3>
          <p className="block">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
