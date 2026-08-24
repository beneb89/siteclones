export type ListRow8Data = {
  href: string;
  rel?: string;
  label: string;
};
/** A list row. */
export default function ListRow8({ d }: { d: ListRow8Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel={d.rel}>
        {d.label}
      </a>
    </li>
  );
}
