export type TextLink5Data = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A text link. */
export default function TextLink5({ d }: { d: TextLink5Data }) {
  return (
    <a className="block mb-3 text-muted-foreground text-sm leading-[1.375rem] cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
