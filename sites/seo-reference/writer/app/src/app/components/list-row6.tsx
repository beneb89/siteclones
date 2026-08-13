export type ListRow6Data = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d }: { d: ListRow6Data }) {
  return (
    <li className="list-item [list-style-type:none]" id={d.id}>
      <a className="inline-block py-[0.5625rem] text-color-001 [font-family:Poppins,_sans-serif] cursor-pointer max-lg:py-1.5 max-md:text-[0.6875rem] max-md:leading-[0.8125rem] md:max-lg:text-xs md:max-lg:leading-[0.875rem] hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] focus:border-color-001 focus:outline-color-001 focus:[text-decoration-color:var(--color-001)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
