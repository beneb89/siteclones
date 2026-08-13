export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <div className="border-b border-solid border-b-surface-3 flex py-[0.5625rem] justify-between text-[0.8125rem] leading-[1.375rem]">
      <span className="block text-muted-foreground">
        {d.text}
      </span>
      <span className="block font-bold">
        {d.text2}
      </span>
    </div>
  );
}
