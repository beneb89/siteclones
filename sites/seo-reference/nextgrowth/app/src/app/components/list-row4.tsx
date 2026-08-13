export type ListRow4Data = {
  href: string;
  label: string;
  href2: string;
  label2: string;
  href3: string;
  label3: string;
  href4: string;
  label4: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item">
      <a className="inline text-primary cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] hover:underline focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href={d.href}>
        {d.label}
      </a>
      <ul className="block ml-6 [list-style-type:none] list-outside">
        <li className="list-item">
          <a className="inline text-primary cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] hover:underline focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href={d.href2}>
            {d.label2}
          </a>
        </li>
        <li className="list-item">
          <a className="inline text-primary cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] hover:underline focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href={d.href3}>
            {d.label3}
          </a>
        </li>
        <li className="list-item">
          <a className="inline text-primary cursor-pointer hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)] hover:underline focus:border-background focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-component="link" href={d.href4}>
            {d.label4}
          </a>
        </li>
      </ul>
    </li>
  );
}
