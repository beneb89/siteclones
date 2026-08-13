export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item py-3 px-4 rounded-lg pointer-events-none max-lg:hidden">
      <a className="inline cursor-pointer pointer-events-none max-lg:hidden hover:underline" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
