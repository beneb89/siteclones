export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item relative mb-[0.4rem] pl-5 max-md:mb-1.5 2xl:hidden before:content-['—'] before:block before:absolute before:inset-y-0 before:right-[422.5px] before:left-0 before:w-[0.9375rem] before:h-[25.5px] before:text-accent before:text-[0.9375rem] before:leading-[1.625rem] max-md:before:right-[13.8125rem] max-md:before:bottom-[25.5px] md:max-lg:before:right-[33.5625rem] 2xl:before:hidden">
      {d.text}
    </li>
  );
}
