export type Tile2Data = {
  imgSrc: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <img className="w-px h-px block max-w-full overflow-clip aspect-[auto_1/1] align-middle" data-component="image" height="1" src={d.imgSrc} width="1" />
  );
}
