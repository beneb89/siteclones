export type ListRowData = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item pl-[0.4375rem] [list-style-type:none] list-outside 2xl:pl-[0.5625rem]" id={d.id}>
      <a className="inline [background-size:0px_1px] [background-position:100%_100%] bg-no-repeat cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--foreground), var(--foreground))" }} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
