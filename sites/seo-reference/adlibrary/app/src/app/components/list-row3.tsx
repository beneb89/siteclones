export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item mt-2">
      <a className="block py-1 text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-medium leading-5 cursor-pointer hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)] focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
