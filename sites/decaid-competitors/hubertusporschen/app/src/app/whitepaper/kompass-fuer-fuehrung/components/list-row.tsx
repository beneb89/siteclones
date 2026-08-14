export type ListRowData = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item relative py-2 pl-6 text-[0.9375rem] leading-[1.4375rem] 2xl:hidden">
      <span className="w-[0.9375rem] h-[23.3px] block absolute left-0 text-accent font-semibold 2xl:hidden">
        →
      </span>
      {d.text}
      <b className="inline text-primary font-semibold 2xl:hidden">
        {d.text2}
      </b>
      {d.text3}
    </li>
  );
}
