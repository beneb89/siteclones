export type MediaTileData = {
  srcSet: string;
  imgSrc: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <p className="box-content block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
      <picture className="box-content w-7.5 inline">
        <source className="box-content inline" sizes="(min-width:60px) 60px" srcSet={d.srcSet} type="image/webp" />
        <img className="box-content w-7.5 h-7.5 inline max-w-full rounded-[10px] overflow-clip align-bottom" data-component="image" src={d.imgSrc} />
      </picture>
      {d.description}
    </p>
  );
}
