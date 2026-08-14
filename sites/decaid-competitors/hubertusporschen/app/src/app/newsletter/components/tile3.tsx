export type Tile3Data = {
  text: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <span className="flex items-center gap-[0.4rem] max-md:gap-1.5 2xl:hidden">
      <span className="block text-color-030 [font-family:Inter,_-apple-system,_BlinkMacSystemFont,_sans-serif] text-[0.8125rem] font-bold leading-[1.375rem] max-md:leading-[1.3125rem] 2xl:hidden">
        ✓
      </span>
      {d.text}
    </span>
  );
}
