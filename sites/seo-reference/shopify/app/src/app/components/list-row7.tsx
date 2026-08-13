export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="hidden max-lg:border-b max-lg:border-solid max-lg:border-b-clr-9 max-lg:list-item max-lg:pointer-events-none">
      <a className="hidden max-lg:h-16 max-lg:flex max-lg:py-4 max-lg:items-center max-lg:text-foreground max-lg:text-2xl max-lg:[font-weight:330] max-lg:leading-8 max-lg:cursor-pointer max-lg:pointer-events-none" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
