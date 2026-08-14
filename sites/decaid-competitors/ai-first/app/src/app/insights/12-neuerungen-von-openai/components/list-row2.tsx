export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item mb-[0.3125rem] max-md:mb-[0.2875rem]">
      {d.text}
    </li>
  );
}
