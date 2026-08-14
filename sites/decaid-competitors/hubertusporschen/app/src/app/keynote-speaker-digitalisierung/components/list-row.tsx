export type ListRowData = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="border-l-[3px] border-solid border-l-primary flex py-5 px-6 items-baseline gap-5 bg-surface-2 2xl:hidden">
      <span className="block shrink-0 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] w-6 max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </span>
      <span className="h-full block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.0625rem] leading-[1.5625rem] 2xl:hidden">
        <strong className="inline text-primary font-bold 2xl:hidden">
          {d.text2}
        </strong>
        {d.text3}
      </span>
    </li>
  );
}
