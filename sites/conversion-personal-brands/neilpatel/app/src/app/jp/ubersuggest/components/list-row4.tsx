export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="w-75 flex p-8 rounded-[15px] gap-[1.5625rem] text-color-026 bg-surface-7 max-md:w-[22.1875rem] max-md:p-5 max-md:flex-col max-md:gap-2.5 md:max-lg:w-[21.0375rem] 2xl:w-[19.0625rem]">
      {d.text}
    </li>
  );
}
