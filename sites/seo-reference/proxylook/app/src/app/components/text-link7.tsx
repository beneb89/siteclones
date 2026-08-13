export type TextLink7Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink7({ d }: { d: TextLink7Data }) {
  return (
    <a className="block py-[0.1875rem] text-color-001 text-[0.8125rem] leading-[1.375rem] cursor-pointer hover:text-surface hover:opacity-80 hover:outline-surface hover:[text-decoration-color:var(--surface)]" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
