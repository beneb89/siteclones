export type ListRow3Data = {
  text: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="border-t border-solid border-t-surface grid py-3.5 items-start gap-3 grid-cols-[28px_1fr] max-md:py-3">
      <span className="block pt-0.5 text-color-006 text-xs font-bold leading-[1.0625rem]" aria-hidden="true">
        {d.text}
      </span>
      {" "}
      <a className="h-full block font-semibold leading-[1.3125rem] text-pretty cursor-pointer max-md:text-[0.9375rem] max-md:leading-[1.25rem]" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
