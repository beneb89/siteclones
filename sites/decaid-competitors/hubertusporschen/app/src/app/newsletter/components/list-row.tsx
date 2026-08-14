export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="border-b border-solid border-b-border flex py-4 items-start gap-4 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] leading-[1.6875rem] max-md:text-[1.0625rem] max-lg:leading-[1.5rem] md:max-lg:[font-size:inherit] 2xl:hidden">
      <span className="block mt-0.5 shrink-0 text-color-011 [font-family:Inter,_-apple-system,_BlinkMacSystemFont,_sans-serif] font-bold 2xl:hidden" aria-hidden="true">
        —
      </span>
      {" "}
      <span className="block 2xl:hidden">
        {d.text}
      </span>
      {" "}
    </li>
  );
}
