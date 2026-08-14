export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="box-content list-item pb-[0.5625rem] leading-5">
      <a className="box-content block text-[0.875rem] font-medium cursor-pointer before:content-['•'] before:hidden before:text-background before:text-sm before:font-medium before:leading-5 before:text-left" data-component="link" href={d.href} target="_blank">
        {d.label}
      </a>
    </li>
  );
}
