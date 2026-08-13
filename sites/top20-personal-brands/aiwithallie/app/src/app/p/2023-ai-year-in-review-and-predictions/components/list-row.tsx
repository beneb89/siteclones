export type ListRowData = {
  description: string;
  description2: string;
  href: string;
  description3: string;
  description4: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item mt-2.5">
      <p className="block text-left">
        <b className="inline font-bold">
          {d.description}
        </b>
        {d.description2}
        <a className="inline text-color-001 font-bold underline [word-break:break-word] cursor-pointer" data-component="link" href={d.href} target="_blank">
          {d.description3}
        </a>
        {d.description4}
      </p>
    </li>
  );
}
