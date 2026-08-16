export type ListRowData = {
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="w-full border-t border-solid border-t-color-001 table relative align-top [word-break:break-word] [overflow-wrap:break-word]">
      <a className="h-12.5 table-cell pr-[1.5625rem] overflow-hidden align-middle text-background text-[0.75rem] font-normal tracking-[0.3px] cursor-pointer 2xl:h-15 2xl:pr-7.5 2xl:text-[0.875rem] 2xl:tracking-[0.36px]" data-component="link" href="/de/Ueber-uns/institutsleitung/MartinDix.html">
        {d.label}
      </a>
    </li>
  );
}
