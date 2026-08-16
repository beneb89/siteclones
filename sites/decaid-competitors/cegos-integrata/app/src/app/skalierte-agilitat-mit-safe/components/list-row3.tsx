export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="flex mb-5 items-center gap-4 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
      <span className="block rounded-full shrink-0 bg-muted h-2 w-2" aria-hidden="true" />
      <a className="block cursor-pointer max-md:text-background" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
