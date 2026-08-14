export type MediaTileData = {
  kind?: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="w-75 block py-8 px-4 rounded-[10px] bg-surface-7 shadow-[var(--clr-23)_0px_30px_20px_-13px]">
      <img className="w-30 h-30 block max-w-full rounded-full overflow-clip align-middle max-md:w-20 max-md:h-20" data-component={d.kind} alt="" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} />
      <div className="block mt-5 mb-2.5 text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-[1.25rem] font-bold">
        {d.text}
      </div>
      <div className="block mt-0.5 mb-2.5 text-muted-foreground [font-family:Satoshi,_Arial,_sans-serif] font-medium">
        {d.text2}
      </div>
    </div>
  );
}
