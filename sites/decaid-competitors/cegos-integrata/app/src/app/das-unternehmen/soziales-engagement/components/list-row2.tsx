export type ListRow2Data = {
  href: string;
  text: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item relative ml-5">
      <a className="box-content inline cursor-pointer" data-component="link" href={d.href}>
        <mark className="box-content inline text-color-009">
          {d.text}
        </mark>
      </a>
    </li>
  );
}
