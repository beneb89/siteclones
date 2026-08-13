export type Logo2Data = {
  alt: string;
  imgSrc: string;
  text: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
      <img className="w-[1.0625rem] h-[1.0625rem] inline max-w-full mx-[0.075rem] overflow-clip [vertical-align:-1.7px] [border-collapse:collapse] [border-spacing:2px]" data-component="image" alt={d.alt} role="img" src={d.imgSrc} />
      {d.text}
    </td>
  );
}
