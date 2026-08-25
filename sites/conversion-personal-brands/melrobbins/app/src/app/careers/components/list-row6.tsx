export type ListRow6Data = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item py-1">
      <a className="inline-block text-muted-foreground text-[0.9375rem] leading-[1.125rem] cursor-pointer 2xl:leading-[1.1875rem] 2xl:[font-size:inherit]" data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
