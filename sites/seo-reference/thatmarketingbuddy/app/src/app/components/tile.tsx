export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block p-4 rounded-xl bg-foreground">
      <p className="block mb-2 text-color-002 text-sm italic leading-[1.4375rem]">
        {d.description}
      </p>
      <cite className="flex items-center gap-1.5 text-color-003 text-xs leading-4">
        <span className="block rounded-full bg-muted w-1 h-1" />
        Customer testimonial
      </cite>
    </div>
  );
}
