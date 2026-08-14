export type ListRow2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item ml-6 text-foreground text-base leading-7">
      {d.text}
      <strong className="inline font-semibold">
        {d.text2}
      </strong>
      {d.text3}
    </li>
  );
}
