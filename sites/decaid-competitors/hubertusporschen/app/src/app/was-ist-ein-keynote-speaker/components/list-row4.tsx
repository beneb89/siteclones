export type ListRow4Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item text-[0.9375rem] leading-[1.4375rem] 2xl:hidden">
      <span className="block mb-0.5 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[0.88px] uppercase 2xl:hidden">
        {d.text}
      </span>
      {" "}
      <span className="inline text-muted-foreground 2xl:hidden">
        {d.text2}
      </span>
      {" "}
    </li>
  );
}
