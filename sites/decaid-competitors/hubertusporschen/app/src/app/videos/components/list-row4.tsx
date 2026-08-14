export type ListRow4Data = {
  href: string;
  label: string;
  text: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item mb-2 2xl:hidden">
      {"→ "}
      <a className="border-b border-solid border-b-color-019 inline text-primary font-medium cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
      {d.text}
    </li>
  );
}
