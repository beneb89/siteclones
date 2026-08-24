export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item relative mb-[0.3125rem] pl-[2.0625rem] before:content-[''] before:block before:absolute before:top-3 before:right-[38.7375rem] before:bottom-8 before:left-0 before:w-2 before:h-2 before:-mt-1 before:bg-primary max-md:before:right-[19.675rem] max-md:before:bottom-20 md:max-lg:before:right-[42.1125rem] 2xl:before:right-[39.9875rem]">
      {d.text}
    </li>
  );
}
