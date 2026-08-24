export type ListRow2Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item ml-[0.9375rem] pl-[1.5px]">
      <b className="box-content inline font-bold">
        {d.text}
      </b>
      {d.text2}
    </li>
  );
}
