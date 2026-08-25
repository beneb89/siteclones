export type ListRow3Data = {
  text: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item max-h-[1e+06px] mt-[1.35rem] [list-style-type:disc] 2xl:hidden">
      {d.text}
      <a className="inline max-h-[1e+06px] text-primary cursor-pointer 2xl:hidden" data-component="link" href={d.href} rel="noopener" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
