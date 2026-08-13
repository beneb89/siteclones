export type MediaTileData = {
  text: string;
  alt: string;
  imgSrc: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
        <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
          {d.text}
        </strong>
      </td>
      <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
        <img className="w-[1.0625rem] h-[1.0625rem] inline max-w-full mx-[0.075rem] overflow-clip [vertical-align:-1.7px] [border-collapse:collapse] [border-spacing:2px]" data-component="image" alt={d.alt} role="img" src={d.imgSrc} />
      </td>
      <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
    </tr>
  );
}
