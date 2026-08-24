export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d }: { d: ListRow7Data }) {
  return (
    <li className="list-item relative pl-7 before:content-[''] before:block before:absolute before:top-2 before:right-100 before:bottom-[7.3px] before:left-0 before:w-2 before:h-2 before:bg-primary max-lg:before:right-auto max-lg:before:bottom-auto">
      <a className="inline-block cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
