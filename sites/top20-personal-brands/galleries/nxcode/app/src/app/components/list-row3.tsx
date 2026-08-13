export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item mt-3 mb-2 pl-2 max-md:mt-[10.7px] max-md:pl-[7.1px]">
      <a className="inline text-primary font-medium cursor-pointer hover:underline" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
