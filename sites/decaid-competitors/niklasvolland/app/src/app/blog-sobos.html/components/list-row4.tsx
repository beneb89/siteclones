export type ListRow4Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-2 text-muted-foreground">
      <strong className="inline text-foreground font-semibold">
        {d.text}
      </strong>
      {d.text2}
      <em className="inline text-color-014 italic">
        {d.text3}
      </em>
    </li>
  );
}
