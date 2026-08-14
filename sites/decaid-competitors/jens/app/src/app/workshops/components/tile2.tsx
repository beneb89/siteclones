export type Tile2Data = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="block">
      <div className="block text-primary text-[3.5rem] font-medium leading-14 tracking-[-2.24px]">
        {d.text}
      </div>
      <p className="block mt-2 text-muted-foreground text-sm font-light leading-[1.3125rem]">
        {d.description}
      </p>
    </div>
  );
}
