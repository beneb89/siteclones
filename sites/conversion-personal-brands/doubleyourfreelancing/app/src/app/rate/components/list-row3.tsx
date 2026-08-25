export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item max-h-[1e+06px] py-2">
      <a className="inline max-h-[1e+06px] text-accent cursor-pointer" href={d.href} target="_self">
        {d.label}
      </a>
      {" "}
    </li>
  );
}
