export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="block">
      <a className="h-[3.2rem] flex relative py-[0.8rem] px-4 items-center overflow-hidden whitespace-nowrap text-nowrap cursor-pointer hover:bg-[linear-gradient(to_right,_var(--background)_0px,_var(--clr-9)_35%,_var(--clr-9)_65%,_var(--background)_100%)] hover:[background-position:0%_0%]" data-component="link" href={d.href}>
        <span className="w-0 h-[1.6rem] block flex-1 overflow-hidden">
          {d.label}
        </span>
      </a>
    </li>
  );
}
