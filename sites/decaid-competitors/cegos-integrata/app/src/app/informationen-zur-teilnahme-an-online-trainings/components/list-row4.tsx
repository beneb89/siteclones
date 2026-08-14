export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="box-content list-item relative ml-5">
      <a className="box-content inline text-primary cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
