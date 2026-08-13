export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item my-2">
      <strong className="inline my-5 py-4 [font-weight:650] tracking-[-0.48px]">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
