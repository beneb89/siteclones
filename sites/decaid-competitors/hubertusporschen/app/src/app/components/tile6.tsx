export type Tile6Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <div className="block py-[14.9px] px-4 text-color-007 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.8125rem] leading-[1.375rem] bg-color-005 max-md:py-3.5 max-md:leading-[1.3125rem] 2xl:hidden">
      <strong className="block mb-1 text-accent text-[0.5625rem] font-medium leading-[0.9375rem] tracking-[1.44px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
        {d.text}
      </strong>
      {d.text2}
    </div>
  );
}
