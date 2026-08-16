export type ListRow5Data = {
  label: string;
  text: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="box-content list-item relative ml-5">
      <strong className="box-content inline font-bold">
        <a className="box-content inline text-primary cursor-pointer" data-component="link" href="/seminarangebot/agilitaet-scrum">
          {d.label}
        </a>
        :
      </strong>
      {d.text}
    </li>
  );
}
