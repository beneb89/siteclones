export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="flex">
      <a className="block text-color-003 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-xs leading-4.5 cursor-pointer whitespace-nowrap hover:border-clr-15 hover:text-clr-15 hover:outline-clr-15 hover:[text-decoration-color:var(--clr-15)] focus:border-clr-26 focus:text-clr-26 focus:outline-clr-26 focus:[text-decoration-color:var(--clr-26)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
