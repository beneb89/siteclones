export type ListRow11Data = {
  href: string;
  rel?: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow11({ d }: { d: ListRow11Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel={d.rel} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
