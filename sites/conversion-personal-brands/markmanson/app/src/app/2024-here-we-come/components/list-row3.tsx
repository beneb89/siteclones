export type ListRow3Data = {
  id: string;
  href: string;
  label2: string;
  target?: string;
  label?: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item" id={d.id}>
      <a className="block p-[0.9375rem] uppercase cursor-pointer" data-component="link" href={d.href} target={d.target} title={d.label}>
        {d.label2}
      </a>
    </li>
  );
}
