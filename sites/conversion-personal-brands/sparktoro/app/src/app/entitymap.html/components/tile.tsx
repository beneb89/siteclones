export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <span className="border border-solid border-accent block py-0.5 px-2 rounded-[3px] text-color-005 [font-family:ui-monospace,_Menlo,_'Courier_New',_monospace] text-[0.6875rem] leading-[1.25rem] bg-surface-3">
      {d.text}
      <span className="inline text-color-012">
        {d.text2}
      </span>
    </span>
  );
}
