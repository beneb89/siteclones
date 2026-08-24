export type ListRow18Data = {
  href: string;
  rel?: string;
  label: string;
};
/** A list row. */
export default function ListRow18({ d }: { d: ListRow18Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel={d.rel}>
        {d.label}
      </a>
    </li>
  );
}
