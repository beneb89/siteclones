export type MediaTileData = {
  alt: string;
  imgSrc: string;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <li className="flex items-center gap-2 [font-family:Roboto,_Arial,_Helvetica,_sans-serif]">
      <img className="w-4.5 h-[1.1875rem] block m-[0.4375rem] overflow-clip aspect-[auto_18/18]" data-component="image" alt={d.alt} height="18" src={d.imgSrc} width="18" />
      {" "}
      <span className="flex flex-col gap-5">
        {d.text}
      </span>
      {" "}
    </li>
  );
}
