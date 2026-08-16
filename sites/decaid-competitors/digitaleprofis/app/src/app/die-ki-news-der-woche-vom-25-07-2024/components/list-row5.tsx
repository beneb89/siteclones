export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item">
      <strong className="inline font-bold">
        <a className="inline font-semibold underline cursor-pointer" data-component="link" href={d.href} rel="noreferrer noopener" target="_blank">
          {d.label}
        </a>
      </strong>
    </li>
  );
}
