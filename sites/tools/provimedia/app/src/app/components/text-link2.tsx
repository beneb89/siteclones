export type TextLink2Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d }: { d: TextLink2Data }) {
  return (
    <a className="block py-1 text-muted text-sm leading-5 cursor-pointer hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
