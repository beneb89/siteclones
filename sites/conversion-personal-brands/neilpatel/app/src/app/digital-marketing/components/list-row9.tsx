export type ListRow9Data = {
  text: string;
};
/** A list row. */
export default function ListRow9({ d }: { d: ListRow9Data }) {
  return (
    <li className="list-item relative mb-[16.7px] pl-[2.0625rem] max-md:mb-[13.3px] before:content-[''] before:block before:absolute before:top-[16.7px] before:right-[39.3875rem] before:bottom-[12.7px] before:left-0 before:w-2 before:h-2 before:-mt-1 before:bg-primary max-md:before:top-[13.3px] max-md:before:right-[18.55rem] max-md:before:bottom-[10.7px] md:max-lg:before:right-[42.7625rem] 2xl:before:right-[39.7rem]">
      {d.text}
    </li>
  );
}
