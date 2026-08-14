export type ListRow4Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="border-l-[3px] border-solid border-l-accent flex py-6 px-[1.8625rem] items-baseline gap-5 bg-color-005 max-md:px-7 2xl:hidden">
      <span className="block shrink-0 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </span>
      <span className="h-full block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.0625rem] italic leading-[1.625rem] 2xl:hidden">
        {d.text2}
      </span>
    </li>
  );
}
