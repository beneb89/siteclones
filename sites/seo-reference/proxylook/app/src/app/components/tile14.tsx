export type Tile14Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile14({ d }: { d: Tile14Data }) {
  return (
    <div className="flex justify-between">
      <span className="block text-muted-foreground">
        {d.text}
      </span>
      <b className="block font-bold">
        {d.text2}
      </b>
    </div>
  );
}
