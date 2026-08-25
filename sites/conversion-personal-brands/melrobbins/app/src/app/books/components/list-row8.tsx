export type ListRow8Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow8({ d }: { d: ListRow8Data }) {
  return (
    <li className="list-item">
      <a className="inline text-muted-foreground text-sm leading-5 underline cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
