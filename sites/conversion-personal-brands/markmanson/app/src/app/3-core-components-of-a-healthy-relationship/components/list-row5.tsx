export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item relative mb-[0.9375rem] pl-6.5">
      <a className="inline font-semibold italic underline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
