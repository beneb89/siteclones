export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="hidden max-lg:flex max-lg:flex-col max-lg:gap-y-6 max-lg:pointer-events-none">
      <span className="hidden max-lg:flex max-lg:flex-col max-lg:gap-y-6 max-lg:text-lg max-lg:[font-weight:550] max-lg:leading-5 max-lg:pointer-events-none">
        <a className="hidden max-lg:block max-lg:font-normal max-lg:leading-[1.5625rem] max-lg:cursor-pointer max-lg:pointer-events-none" href={d.href}>
          {d.label}
        </a>
      </span>
    </li>
  );
}
