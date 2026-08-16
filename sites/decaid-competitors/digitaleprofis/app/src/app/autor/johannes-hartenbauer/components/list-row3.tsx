export type ListRow3Data = {
  id: string;
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item" id={d.id}>
      <a className="inline text-sm font-semibold leading-[1.375rem] cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
