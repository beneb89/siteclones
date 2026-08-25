export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item relative mb-2 pl-4 leading-[1.3125rem] before:content-['·'] before:block before:absolute before:inset-y-0 before:right-50 before:left-1 before:w-[0.3125rem] before:h-[1.3125rem] before:text-border before:text-[0.9375rem] before:font-bold before:leading-[1.3125rem] max-md:before:right-72.5 md:max-lg:before:right-[18.6875rem] 2xl:before:right-[15.3125rem]">
      {d.text}
    </li>
  );
}
