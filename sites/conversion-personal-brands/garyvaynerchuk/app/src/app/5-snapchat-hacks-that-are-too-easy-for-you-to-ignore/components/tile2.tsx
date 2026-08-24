export type Tile2Data = Record<string, never>;
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <span className="flex pl-7 items-center shrink-0 gap-7 max-md:pl-5 max-md:gap-5">
      <span className="block">
        Check out VeeFriends Cartoons!
      </span>
      <span className="w-[0.3125rem] h-[0.3125rem] block rounded-[50%] shrink-0 bg-color-001" />
    </span>
  );
}
