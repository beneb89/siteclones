export type MediaTileData = {
  description: string;
  description2: string;
  description3: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <p className="box-content block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
      <picture className="box-content w-7.5 inline">
        <source className="box-content inline" srcSet="/assets/cloned/images/64efc0496e65.webp 400w, /assets/cloned/images/a08608a40309.webp 320w" type="image/webp" />
        <img className="box-content w-7.5 h-7.5 inline max-w-full rounded-[10px] overflow-clip align-bottom" data-component="image" src="/assets/cloned/images/db1d40a89b68.png" />
      </picture>
      {d.description}
      <strong className="box-content inline font-bold">
        {d.description2}
      </strong>
      {d.description3}
    </p>
  );
}
