export type TextLink3Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="block text-muted-foreground text-[0.8125rem] leading-[1.3125rem] cursor-pointer" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
