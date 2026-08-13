export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="block text-primary underline cursor-pointer hover:opacity-80" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
