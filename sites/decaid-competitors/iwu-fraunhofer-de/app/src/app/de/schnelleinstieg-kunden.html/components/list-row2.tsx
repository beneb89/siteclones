export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item left-[0.9375rem] ml-[0.9375rem] pt-[0.3125rem] align-top 2xl:left-4.5 2xl:ml-4.5 2xl:pt-1.5 before:content-[''] before:inline-block before:w-[0.9375rem] before:h-3.5 before:-ml-[0.9375rem] before:text-foreground before:text-sm before:leading-3.5 2xl:before:w-4.5 2xl:before:h-[1.05rem] 2xl:before:-ml-4.5 2xl:before:text-[1.0625rem] 2xl:before:leading-[1.0625rem]">
      <span className="inline">
        {d.text}
      </span>
    </li>
  );
}
