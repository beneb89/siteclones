export type MediaTileData = {
  alt: string;
  imgSrc: string;
  label: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="flex items-start gap-6">
      <div className="w-25 h-20 flex justify-center items-center shrink-0 overflow-hidden">
        <img className="w-25 h-20 block max-w-full overflow-clip object-contain aspect-[auto_150/150] align-middle" data-component="image" alt={d.alt} height="150" src={d.imgSrc} title={d.label} width="150" />
        {" "}
      </div>
      {" "}
      <div className="block">
        <p className="block text-lg font-medium leading-[1.8125rem]">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
