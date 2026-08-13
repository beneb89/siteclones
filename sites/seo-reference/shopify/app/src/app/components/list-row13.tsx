export type ListRow13Data = {
  text: string;
  href: string;
  lang: string;
  label: string;
};
/** A list row. */
export default function ListRow13({ d }: { d: ListRow13Data }) {
  return (
    <li className="flex mb-7 flex-col">
      <div className="flex min-w-0 items-center leading-6">
        <span className="block min-w-0">
          {d.text}
        </span>
      </div>
      <div className="flex min-w-0 mt-1 flex-wrap">
        <span className="flex min-w-0 items-center">
          <a className="block min-w-0 text-muted-foreground text-sm leading-5 cursor-pointer" href={d.href} lang={d.lang}>
            {d.label}
          </a>
        </span>
      </div>
    </li>
  );
}
