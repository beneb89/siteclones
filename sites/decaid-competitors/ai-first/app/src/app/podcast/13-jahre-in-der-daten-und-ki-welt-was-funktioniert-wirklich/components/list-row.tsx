export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item mb-[0.3125rem] max-md:mb-[0.2875rem]">
      {d.text}
    </li>
  );
}
