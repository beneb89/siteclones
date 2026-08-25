export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item py-1">
      <a className="inline-block text-muted-foreground text-[0.9375rem] leading-[1.4375rem] cursor-pointer 2xl:[font-size:inherit] 2xl:leading-[inherit]" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
