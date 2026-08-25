export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item max-h-[1e+06px] py-2">
      <a className="inline max-h-[1e+06px] text-accent cursor-pointer" href={d.href} target="_blank">
        {d.label}
        <span className="inline max-h-[1e+06px] [font-family:icomoon] font-normal leading-[0.9375rem] before:content-[''] before:text-clr-19 before:text-[0.9375rem] before:leading-[0.9375rem]" />
        {" "}
      </a>
      {" "}
    </li>
  );
}
