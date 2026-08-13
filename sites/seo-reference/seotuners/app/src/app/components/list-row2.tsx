export type ListRow2Data = {
  id: string;
  href: string;
  label: string;
  ariacontrols: string;
  id2: string;
  label2: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="flex [list-style-type:none]">
      <div className="flex relative py-2 px-4 items-center text-muted-foreground font-medium whitespace-nowrap text-nowrap" id={d.id}>
        <a className="h-7.5 flex items-center self-center gap-[0.3125rem] text-accent cursor-pointer hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)]" data-component="link" href={d.href} aria-current={d.ariacurrent}>
          {" "}
          <span className="flex items-center text-muted-foreground text-xl leading-7.5">
            {d.label}
          </span>
          {" "}
        </a>
        {" "}
        <button className="w-0 h-7.5 flex relative ml-[0.3125rem] rounded-4xl flex-col justify-center self-center font-bold leading-[1.5625rem] text-center cursor-pointer" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false" aria-haspopup="true" id={d.id2}>
          {" "}
          <span className="w-0 h-0 flex">
            {"  "}
            <span className="w-px h-px block absolute -top-45000 min-w-0 -m-px overflow-hidden">
              {d.label2}
            </span>
            {" "}
          </span>
          {" "}
        </button>
        {" "}
      </div>
      {"  "}
    </li>
  );
}
