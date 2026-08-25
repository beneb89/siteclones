export type ListRow10Data = {
  href: string;
  label2: string;
  target?: string;
  label?: string;
};
/** A list row. */
export default function ListRow10({ d }: { d: ListRow10Data }) {
  return (
    <li className="list-item">
      <a className="block p-[0.9375rem] uppercase cursor-pointer" data-component="link" href={d.href} target={d.target} title={d.label}>
        {d.label2}
      </a>
    </li>
  );
}
