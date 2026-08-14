export type ListRowData = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="box-content flex p-[0.3125rem] justify-start items-start content-start text-foreground text-base leading-7 [word-break:break-word]">
      <div className="box-content w-[1.5625rem] block relative z-1 min-w-[1.5625rem] mr-[0.3125rem] ml-px rounded-bl-[7px] overflow-hidden [background-position:50%_50%] bg-no-repeat" style={{ backgroundImage: "linear-gradient(var(--color-005), var(--color-005))" }}>
        <span className="box-content block z-0 text-color-002 text-lg font-semibold leading-[2.5625rem] text-center">
          {d.text}
        </span>
      </div>
      <span className="box-content w-[95%] block z-0 leading-[2.3125rem] max-md:w-[85%]">
        {d.text2}
        <strong className="box-content inline font-semibold">
          {d.text3}
        </strong>
        {d.text4}
      </span>
    </li>
  );
}
