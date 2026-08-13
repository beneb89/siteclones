export type TextLink2Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="block text-muted-foreground cursor-pointer hover:text-clr-6 hover:outline-clr-6 hover:[text-decoration-color:var(--clr-6)]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
