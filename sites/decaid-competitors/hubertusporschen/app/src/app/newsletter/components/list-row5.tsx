export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item">
      <a className="inline text-sm leading-[1.4375rem] cursor-pointer max-md:leading-[1.375rem]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
