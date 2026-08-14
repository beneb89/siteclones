export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content list-item mt-[0.725rem] max-lg:mt-2.5 2xl:mt-3">
      <strong className="box-content inline font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
