export type ListRow4Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-[16.7px] [list-style-type:decimal] max-md:mb-[13.3px]">
      <strong className="inline font-medium">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
