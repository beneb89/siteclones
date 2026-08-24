export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-[16.7px] [list-style-type:decimal] max-md:mb-[13.3px]">
      {d.text}
    </li>
  );
}
