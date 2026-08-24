export type ListRow5Data = {
  href: string;
  rel?: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel={d.rel} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
