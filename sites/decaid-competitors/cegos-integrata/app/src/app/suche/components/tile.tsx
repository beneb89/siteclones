export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="w-[max-content] min-h-10 flex min-w-full p-2.5 rounded-[5px] items-center shrink-0 gap-2.5 whitespace-nowrap text-nowrap bg-background">
      <div className="w-4 h-4 border border-solid border-clr-13 block relative min-w-0 rounded-xs shrink-0 bg-background" />
      <span className="box-content block min-w-0 flex-1 order-[1] text-color-007 font-semibold leading-5 [font-feature-settings:'lnum',_'pnum']">
        {d.text}
      </span>
      <span className="box-content block min-w-0 ml-2 shrink-0 order-[2] text-muted-foreground text-xs leading-5 text-right [font-feature-settings:'lnum',_'pnum']">
        {d.text2}
      </span>
      {" "}
    </div>
  );
}
