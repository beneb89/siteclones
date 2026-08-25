export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="border border-solid border-surface-2 block py-5.5 px-5 rounded-xl bg-surface-6">
      <div className="block mb-1 [font-family:'League_Spartan',_sans-serif] text-[1.0625rem] font-bold leading-[1.625rem] uppercase">
        {d.text}
      </div>
      {" "}
      <div className="block text-color-052 text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[1.54px] uppercase">
        {d.text2}
      </div>
      {" "}
    </div>
  );
}
