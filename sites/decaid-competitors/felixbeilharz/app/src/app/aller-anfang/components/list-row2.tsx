export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content block relative py-1 pl-8 text-foreground text-base leading-[1.3125rem]">
      <i className="box-content w-[1.3rem] h-[1.3rem] block absolute left-0 text-color-050 [font-family:ShortcodesUltimateIcons] text-center before:content-[''] before:text-color-050 before:text-base before:leading-[1.3125rem] before:text-center" />
      {d.text}
    </li>
  );
}
