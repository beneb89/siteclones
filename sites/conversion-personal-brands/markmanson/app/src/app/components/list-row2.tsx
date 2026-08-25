export type ListRow2Data = {
  href: string;
  label: string;
  label2: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="border-b border-solid border-b-foreground list-item">
      <a className="block py-5 cursor-pointer max-md:py-4" data-component="link" href={d.href} title={d.label}>
        {d.label2}
      </a>
    </li>
  );
}
