export type Tile10Data = {
  text: string;
};
/** A content tile. */
export default function Tile10({ d }: { d: Tile10Data }) {
  return (
    <div className="flex pt-2 items-center">
      <i className="block pr-2 [font-family:'Font_Awesome_Pro'] leading-4 text-center" />
      {d.text}
    </div>
  );
}
