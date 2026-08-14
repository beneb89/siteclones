export type ListRow2Data = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="box-content list-item text-foreground text-base leading-7" id={d.id}>
      <div className="box-content border border-solid border-border block mb-5 p-5 rounded-sm after:content-[''] after:table after:w-0 after:h-0">
        {"\n\t\t\t\tPingback: "}
        <a className="box-content inline text-color-007 cursor-pointer" data-component="link" href={d.href} rel="ugc external nofollow">
          {d.label}
        </a>
        {" "}
      </div>
      {" "}
    </li>
  );
}
