export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="flex py-5 px-6 items-baseline gap-5 bg-background 2xl:hidden">
      <span className="block shrink-0 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] w-8 max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </span>
      <span className="h-full block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] leading-[1.625rem] max-md:text-[1.0625rem] 2xl:hidden">
        {d.text2}
      </span>
    </li>
  );
}
