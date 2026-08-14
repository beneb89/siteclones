export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item relative mb-[0.3125rem] pl-4.5 text-base leading-6 [border-collapse:collapse] before:content-['•'] before:block before:absolute before:-top-0.5 before:right-[16.05rem] before:-bottom-px before:left-0 before:w-2 before:h-[1.6875rem] before:text-color-001 before:text-lg before:leading-[1.6875rem] before:text-left max-md:before:right-[13.5625rem] md:max-lg:before:right-[230.5px] 2xl:before:right-[16.075rem]">
      {d.text}
    </li>
  );
}
