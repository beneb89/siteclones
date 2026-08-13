export type ListRow5Data = {
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer hover:underline" data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
