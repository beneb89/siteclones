export type Tile2Data = {
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="flex items-start gap-3 font-light">
      <span className="flex mt-1 rounded-full justify-center items-center shrink-0 text-color-002 text-[0.8125rem] font-semibold leading-[1.25rem] bg-primary h-6 w-6" aria-hidden="true">
        ✓
      </span>
      <span className="block">
        {d.text}
      </span>
    </div>
  );
}
