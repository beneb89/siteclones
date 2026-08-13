export type Tile3Data = {
  text: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <option className="box-content w-full min-h-6 block min-w-6 px-3 rounded-sm items-center gap-[7.5px] text-muted [font-family:'Segoe_UI',_SegoeUI-regular,_sans-serif] text-[0.9375rem] leading-5 whitespace-nowrap">
      {d.text}
    </option>
  );
}
