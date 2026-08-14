export type ListRow5Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item mb-[0.6625rem] text-base leading-[1.6875rem] max-md:mb-2.5 2xl:hidden">
      <strong className="inline text-accent font-semibold 2xl:hidden">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
