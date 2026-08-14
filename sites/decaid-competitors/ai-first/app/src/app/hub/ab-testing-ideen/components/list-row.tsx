export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item relative mb-[0.3125rem] pl-10 max-md:mb-[0.2875rem] max-md:pl-[2.3rem]">
      <strong className="inline font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
