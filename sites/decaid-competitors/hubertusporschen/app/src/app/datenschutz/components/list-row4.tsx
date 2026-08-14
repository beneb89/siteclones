export type ListRow4Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-[0.4rem] max-md:mb-1.5 2xl:hidden">
      <strong className="inline font-bold 2xl:hidden">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
