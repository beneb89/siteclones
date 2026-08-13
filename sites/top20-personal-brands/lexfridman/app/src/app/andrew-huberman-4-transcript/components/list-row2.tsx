export type ListRow2Data = {
  href: string;
  label: string;
  label2: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item">
      <a className="box-content inline text-primary cursor-pointer" data-component="link" href={d.href}>
        <span className="box-content inline">
          {d.label}
        </span>
        {d.label2}
      </a>
    </li>
  );
}
