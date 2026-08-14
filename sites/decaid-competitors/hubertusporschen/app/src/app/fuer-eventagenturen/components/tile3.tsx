export type Tile3Data = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="border-t-2 border-solid border-t-accent block pt-4 2xl:hidden">
      <div className="block mb-1 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1.6px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <p className="block text-primary text-[0.9375rem] font-medium leading-[1.625rem] max-md:leading-6 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
