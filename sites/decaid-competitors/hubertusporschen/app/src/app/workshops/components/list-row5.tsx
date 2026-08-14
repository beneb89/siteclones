export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item 2xl:hidden">
      {"→ "}
      <a className="border-b border-solid border-b-color-032 inline text-color-002 cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
