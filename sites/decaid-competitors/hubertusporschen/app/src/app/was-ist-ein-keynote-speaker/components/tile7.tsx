export type Tile7Data = {
  alt: string;
  imgSrc: string;
};
/** A content tile. */
export default function Tile7({ d }: { d: Tile7Data }) {
  return (
    <img className="hidden h-auto max-w-full 2xl:w-full 2xl:block 2xl:opacity-70 2xl:max-h-11 2xl:overflow-clip 2xl:object-contain 2xl:aspect-[auto_100/100] 2xl:align-middle" alt={d.alt} height="100" src={d.imgSrc} width="100" />
  );
}
