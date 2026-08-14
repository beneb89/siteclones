export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item relative pl-[1.8625rem] max-md:pl-7 2xl:hidden">
      <span className="w-[0.975rem] h-[1.1875rem] block absolute left-0 pt-0.5 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] 2xl:hidden">
        {d.text}
      </span>
      {d.text2}
    </li>
  );
}
