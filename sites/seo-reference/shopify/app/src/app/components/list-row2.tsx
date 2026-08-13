export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="hidden max-lg:border-b max-lg:border-solid max-lg:border-b-border max-lg:flex max-lg:pb-6 max-lg:flex-col max-lg:gap-y-6 max-lg:pointer-events-none">
      <span className="hidden max-lg:block max-lg:text-lg max-lg:[font-weight:550] max-lg:leading-4 max-lg:pointer-events-none">
        <a className="hidden max-lg:inline max-lg:cursor-pointer max-lg:pointer-events-none" href={d.href}>
          {d.label}
        </a>
      </span>
    </li>
  );
}
