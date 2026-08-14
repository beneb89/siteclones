export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
      <a className="border-b border-solid border-b-clr-1 inline text-primary cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
