export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item relative pl-5.5 text-[0.9375rem] leading-6 before:content-[''] before:block before:absolute before:top-[9.3px] before:right-158 before:bottom-[32.7px] before:left-0.5 before:w-1.5 before:h-1.5 before:bg-muted-foreground before:rounded-tl-[999px] max-md:before:right-[20.9375rem] max-md:before:bottom-[56.7px] md:max-lg:before:right-182 md:max-lg:before:bottom-[8.7px]">
      {d.text}
    </li>
  );
}
