export type TextLink3Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d }: { d: TextLink3Data }) {
  return (
    <a className="block mb-3 text-muted-foreground text-sm leading-[1.375rem] cursor-pointer" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
