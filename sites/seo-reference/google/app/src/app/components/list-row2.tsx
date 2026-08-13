export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="flex items-center">
      <div className="block mx-1 align-bottom text-muted-foreground [font-family:'Material_Icons'] text-lg leading-4.5 [font-feature-settings:'liga'] before:content-['chevron\_right'] before:text-muted-foreground before:text-lg before:leading-4.5" aria-hidden="true" />
      {" "}
      <a className="block text-muted-foreground [word-break:break-word] cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
