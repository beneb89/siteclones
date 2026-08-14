export type ListRow5Data = {
  href: string;
  label: string;
  href2: string;
  label2: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item">
      <a className="inline font-semibold underline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {d.label}
      </a>
      {" und "}
      <a className="inline font-semibold underline cursor-pointer" data-component="link" href={d.href2} rel="noopener noreferrer" target="_blank">
        {d.label2}
      </a>
    </li>
  );
}
