export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item relative pl-6 [list-style-type:none] list-outside 2xl:pl-9 before:content-['•'] before:block before:absolute before:inset-y-0 before:right-[576.1px] before:left-0 before:text-foreground before:text-base before:leading-[1.375rem] before:text-center max-md:before:right-[19.9375rem] max-lg:before:text-base max-lg:before:leading-[1.375rem] md:max-lg:before:right-156 2xl:before:right-216 2xl:before:text-2xl 2xl:before:leading-[2.125rem]">
      {d.text}
    </li>
  );
}
