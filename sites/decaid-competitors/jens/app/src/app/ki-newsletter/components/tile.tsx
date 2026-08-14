export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="block text-primary [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.98px] uppercase">
        {d.text}
      </div>
      <div className="block text-2xl font-medium leading-[1.75rem] tracking-[-0.48px]">
        {d.text2}
      </div>
      <div className="block text-muted-foreground text-sm font-light leading-[1.375rem]">
        {d.text3}
      </div>
    </div>
  );
}
