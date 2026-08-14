export type Tile7Data = {
  description: string;
};
/** A content tile. */
export default function Tile7({ d }: { d: Tile7Data }) {
  return (
    <p className="flex items-center gap-1 text-sm leading-3.5">
      <i className="block [font-family:'Font_Awesome_Pro'] text-center" />
      {d.description}
    </p>
  );
}
