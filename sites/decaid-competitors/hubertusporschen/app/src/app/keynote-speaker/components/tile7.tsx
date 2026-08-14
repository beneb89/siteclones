export type Tile7Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile7({ d }: { d: Tile7Data }) {
  return (
    <div className="border border-solid border-border block p-6 text-center bg-color-002 2xl:hidden">
      <span className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] font-semibold leading-[0.9375rem] tracking-[1.62px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
        {d.text}
      </span>
      <div className="block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.375rem] 2xl:hidden">
        {d.text2}
      </div>
    </div>
  );
}
