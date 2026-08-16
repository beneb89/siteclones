export type Tile2Data = {
  text: string;
  href: string;
  label: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <tr className="hidden max-md:h-12.5 max-md:table-row max-md:align-middle max-md:bg-surface max-md:[border-spacing:0px_1px]">
      <td className="hidden max-md:table-cell max-md:relative max-md:py-[0.4375rem] max-md:px-[0.9375rem] max-md:overflow-hidden max-md:align-middle max-md:whitespace-nowrap max-md:text-nowrap max-md:[border-spacing:0px_1px]">
        {d.text}
      </td>
      <td className="hidden">
        <a className="hidden after:content-[''] after:inline-block after:mx-[3.5px] after:text-primary after:text-[0.8125rem] after:leading-[0.8125rem] md:max-lg:after:hidden 2xl:after:hidden" href={d.href} target="_blank">
          {d.label}
        </a>
        {d.text2}
      </td>
      <td className="hidden">
        {d.text3}
      </td>
    </tr>
  );
}
