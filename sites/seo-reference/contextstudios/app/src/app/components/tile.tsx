export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block mt-6 mb-4 text-muted-foreground leading-[1.8125rem]">
      <strong className="inline text-foreground font-semibold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
