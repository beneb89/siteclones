export type Tile8Data = {
  alt: string;
  imgSrc: string;
};
/** A content tile. */
export default function Tile8({ d }: { d: Tile8Data }) {
  return (
    <img className="w-full block opacity-70 max-h-11 overflow-clip object-contain aspect-[auto_100/100] align-middle h-auto max-w-full 2xl:hidden" data-component="image" alt={d.alt} height="100" src={d.imgSrc} width="100" />
  );
}
