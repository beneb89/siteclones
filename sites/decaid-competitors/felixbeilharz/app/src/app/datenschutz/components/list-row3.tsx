export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="box-content list-item ml-6 text-foreground text-base leading-7">
      <a className="box-content border-b border-dashed border-b-primary inline text-primary [background-size:1px_0px] [background-position:0px_100%] bg-repeat-x cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--clr-1) 0%, var(--clr-1) 100%)" }} data-component="link" href={d.href} target="_blank">
        {d.label}
      </a>
    </li>
  );
}
