export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item ml-4 py-[0.1875rem]">
      <a className="inline max-w-full cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
