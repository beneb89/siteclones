export type ListRow4Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-2 leading-[1.875rem] max-md:leading-7 2xl:hidden">
      <strong className="inline text-primary font-semibold 2xl:hidden">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
