export type ListRow5Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item ml-4 py-[0.1875rem]">
      <u className="inline underline">
        {d.text}
      </u>
      {d.text2}
    </li>
  );
}
