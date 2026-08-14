export type ListRow2Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item mb-2 text-muted-foreground">
      <strong className="inline text-foreground font-semibold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
