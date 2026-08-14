export type Tile4Data = {
  alt: string;
  imgSrc: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <img className="w-full block opacity-70 max-h-11 overflow-clip object-contain aspect-[auto_100/100] align-middle h-auto max-w-full" data-component="image" alt={d.alt} height="100" src={d.imgSrc} width="100" />
  );
}
