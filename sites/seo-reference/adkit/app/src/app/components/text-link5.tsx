export type TextLink5Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink5({ d }: { d: TextLink5Data }) {
  return (
    <a className="block text-muted-foreground cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
