export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <ul className="box-content block my-3.5 leading-[1.3125rem] [list-style-type:none] list-outside max-md:my-[0.8125rem] max-lg:leading-[1.25rem] md:max-lg:my-[13.5px]">
      <li className="box-content list-item ml-5">
        {d.text}
      </li>
    </ul>
  );
}
