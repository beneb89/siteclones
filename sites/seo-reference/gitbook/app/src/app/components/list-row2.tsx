export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="flex flex-col max-lg:hidden 2xl:hidden">
      <a className="w-[17.5625rem] flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-color-001 text-balance cursor-pointer max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px before:h-8 max-lg:before:hidden 2xl:before:hidden hover:bg-clr-7 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" href={d.href}>
        <span className="block max-lg:hidden 2xl:hidden">
          {d.label}
        </span>
      </a>
    </li>
  );
}
