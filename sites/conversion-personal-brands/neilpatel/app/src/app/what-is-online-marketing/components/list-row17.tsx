export type ListRow17Data = {
  label: string;
};
/** A list row. */
export default function ListRow17({ d }: { d: ListRow17Data }) {
  return (
    <li className="hidden 2xl:list-item 2xl:relative 2xl:pl-7 before:content-[''] before:block before:absolute before:top-2 before:right-97.5 before:bottom-[7.3px] before:left-0 before:w-2 before:h-2 before:bg-primary max-lg:before:hidden">
      <a className="hidden 2xl:inline-block 2xl:cursor-pointer" href="/blog/ab-testing-introduction">
        {d.label}
      </a>
    </li>
  );
}
