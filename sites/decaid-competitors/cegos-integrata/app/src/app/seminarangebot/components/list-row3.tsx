export type ListRow3Data = {
  href: string;
  label: string;
  text: string;
  href2: string;
  label2: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content list-item relative ml-5">
      <strong className="box-content inline font-bold">
        <a className="box-content inline text-primary cursor-pointer" data-component="link" href={d.href}>
          {d.label}
        </a>
        {d.text}
        <a className="box-content inline text-primary cursor-pointer" data-component="link" href={d.href2}>
          {d.label2}
        </a>
        :
      </strong>
      {d.text2}
    </li>
  );
}
