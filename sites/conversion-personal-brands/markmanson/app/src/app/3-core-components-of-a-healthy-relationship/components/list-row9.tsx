export type ListRow9Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow9({ d }: { d: ListRow9Data }) {
  return (
    <li className="border-b border-solid border-b-foreground list-item">
      <a className="block py-[0.9375rem] cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
