export type MediaCardData = {
  imgSrc: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="w-[313.3px] flex p-6 gap-x-3 bg-background shadow-[var(--clr-16)_-20px_54px_25px_0px] max-md:w-[20.9375rem] md:max-lg:w-[209.3px]">
      <div className="block">
        <img className="w-full h-6 block max-w-full overflow-clip object-contain aspect-[auto_32/32]" data-component="image" alt="" height="32" src={d.imgSrc} width="32" />
        {" "}
      </div>
      {" "}
      <div className="block -mt-1">
        <h4 className="block font-medium" data-component="heading">
          {d.title}
        </h4>
        {" "}
        <p className="block mt-2 text-sm leading-5.5">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
