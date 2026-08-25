export type Tile3Data = {
  text: string;
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <span className="border border-solid border-color-010 block py-0.5 px-[0.4375rem] rounded-xs text-color-005 [font-family:ui-monospace,_Menlo,_'Courier_New',_monospace] text-[0.6875rem] leading-[1.25rem] bg-surface-7">
      <span className="inline mr-[0.3rem] text-color-008 font-medium">
        {d.text}
      </span>
      <a className="inline cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </span>
  );
}
