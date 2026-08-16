export type MediaTileData = {
  description: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <p className="box-content block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
      <picture className="box-content w-[1.5625rem] inline">
        <source className="box-content inline" srcSet="/assets/cloned/images/b530f58dac94.webp 500w, /assets/cloned/images/f68f9853490b.webp 320w" type="image/webp" />
        <img className="box-content w-[1.5625rem] h-[1.5625rem] inline max-w-full rounded-[10px] overflow-clip align-bottom" data-component="image" src="/assets/cloned/images/493b18c73cb5.png" />
      </picture>
      {d.description}
    </p>
  );
}
