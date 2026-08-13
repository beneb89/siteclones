export type ListRowData = {
  ariacontrols: string;
  href: string;
  id: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="block relative [list-style-type:none]">
      <a className="flex relative py-2.5 px-5 items-center text-clr-1 font-medium leading-5 cursor-pointer max-md:text-[0.9375rem]" aria-controls={d.ariacontrols} aria-expanded="false" aria-haspopup="true" href={d.href} id={d.id}>
        {d.label}
        <span className="flex min-w-0 -my-2.5 py-2.5 pl-2.5 items-center leading-[0.8125rem] max-md:leading-[0.9375rem]">
          <i className="block min-w-0 [font-family:'Font_Awesome_6_Free'] font-black pointer-events-none before:content-[''] before:text-clr-1 before:text-[0.8125rem] before:font-black before:leading-[0.8125rem] max-md:before:text-[0.9375rem] max-md:before:leading-[0.9375rem]" aria-hidden="true" />
        </span>
      </a>
      {"  "}
    </li>
  );
}
