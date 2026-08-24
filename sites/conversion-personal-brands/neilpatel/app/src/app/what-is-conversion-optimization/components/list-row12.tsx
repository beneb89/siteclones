export type ListRow12Data = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow12({ d }: { d: ListRow12Data }) {
  return (
    <li className="list-item relative pl-7 2xl:hidden before:content-[''] before:block before:absolute before:top-2 before:right-97.5 before:bottom-[7.3px] before:left-0 before:w-2 before:h-2 before:bg-primary max-md:before:right-[18.5625rem] md:max-lg:before:right-157.5 2xl:before:hidden">
      <a className="inline-block cursor-pointer 2xl:hidden" data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
