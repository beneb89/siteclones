export type MediaTileData = {
  alt: string;
  imgSrc: string;
  label: string;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="box-content flex items-center max-md:pb-[0.9375rem]">
      <p className="box-content block">
        <img className="box-content w-20 h-20 inline min-w-20 max-w-full mr-5 overflow-clip object-contain max-md:hidden md:max-lg:w-15 md:max-lg:h-15 md:max-lg:min-w-15" data-component="image" alt={d.alt} src={d.imgSrc} title={d.label} />
      </p>
      {" "}
      <div className="box-content block text-lg leading-[1.6875rem] max-md:ml-2.5 max-md:text-[0.9375rem] max-md:leading-[1.4375rem] md:max-lg:text-base md:max-lg:leading-6">
        {d.text}
      </div>
      {" "}
    </div>
  );
}
