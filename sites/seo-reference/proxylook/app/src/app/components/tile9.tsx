export type Tile9Data = {
  href: string;
  label: string;
};
/** A content tile. */
export default function Tile9({ d }: { d: Tile9Data }) {
  return (
    <th className="border-b border-solid border-b-border table-cell p-3 align-middle text-accent text-xs font-bold leading-[1.25rem] tracking-[0.36px] text-center uppercase bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
      <a className="inline text-foreground cursor-pointer [border-collapse:collapse] [border-spacing:2px]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </th>
  );
}
