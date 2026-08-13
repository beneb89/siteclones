export type ListRow8Data = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
/** A list row. */
export default function ListRow8({ d }: { d: ListRow8Data }) {
  return (
    <li className="list-item mb-2">
      <a className="inline text-muted-foreground text-sm leading-[1.375rem] cursor-pointer max-md:text-[0.8125rem] max-md:leading-[1.3125rem] hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
