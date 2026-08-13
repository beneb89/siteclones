export type ListRow9Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow9({ d }: { d: ListRow9Data }) {
  return (
    <li className="list-item mt-4 pl-1 max-lg:mt-2">
      <a className="inline text-foreground text-lg [font-weight:550] leading-[1.5625rem] underline cursor-pointer max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[-0.1px] hover:text-clr-23 hover:outline-clr-23 hover:[text-decoration-color:var(--clr-23)] hover:no-underline" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
