export type TextLink5Data = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A text link. */
export default function TextLink5({ d }: { d: TextLink5Data }) {
  return (
    <a className="block mb-2.5 text-muted-foreground text-[0.8125rem] leading-[1.3125rem] cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
      {d.label}
    </a>
  );
}
