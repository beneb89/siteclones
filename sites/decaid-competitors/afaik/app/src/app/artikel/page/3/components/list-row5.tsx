export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="box-content list-item mt-2">
      <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href} rel="noreferrer noopener" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
