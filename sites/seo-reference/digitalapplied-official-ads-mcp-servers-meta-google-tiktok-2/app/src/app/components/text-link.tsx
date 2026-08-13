export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="block py-2 px-3.5 rounded-[10px] text-color-003 text-sm font-medium leading-[1.25rem] cursor-pointer hover:bg-surface-2" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
