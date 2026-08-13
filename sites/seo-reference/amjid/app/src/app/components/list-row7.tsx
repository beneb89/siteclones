export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="list-item mb-2">
      <a className="inline text-muted-foreground text-sm leading-[1.375rem] cursor-pointer max-md:text-[0.8125rem] max-md:leading-[1.3125rem] hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
