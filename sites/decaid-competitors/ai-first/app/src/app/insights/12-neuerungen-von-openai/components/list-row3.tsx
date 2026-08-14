export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item relative mb-[0.3125rem] pl-10 max-md:mb-[0.2875rem] max-md:pl-[2.3rem]">
      <strong className="inline font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
