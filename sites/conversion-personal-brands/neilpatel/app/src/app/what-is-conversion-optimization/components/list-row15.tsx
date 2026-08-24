export type ListRow15Data = {
  href: string;
  rel?: string;
  label: string;
};
/** A list row. */
export default function ListRow15({ d }: { d: ListRow15Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel={d.rel}>
        {d.label}
      </a>
    </li>
  );
}
