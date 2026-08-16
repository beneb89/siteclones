import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  href: string;
  label: string;
  text: string;
  href2: string;
  label2: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <tr className="table-row align-middle">
      <th className={cn("border-b border-solid border-b-border table-cell py-4 px-[1.05rem] align-top text-base font-bold leading-[1.5rem] [word-break:break-word] text-balance max-md:sticky max-md:left-0 max-md:z-1 max-md:py-[13.1px] max-md:px-[0.9rem] max-md:text-[0.9375rem] max-md:font-semibold max-md:leading-[1.4375rem] max-md:bg-background max-md:shadow-[var(--border)_1px_0px_0px_0px]", styles.className)}>
        <a className="inline font-semibold underline cursor-pointer max-md:[font-weight:inherit]" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
          {d.label}
        </a>
      </th>
      <td className={cn("border-b border-solid border-b-border border-l border-l-border table-cell py-4 px-[1.05rem] align-top text-muted [word-break:break-word] max-md:py-[13.1px] max-md:px-[0.9rem]", styles.className2)}>
        <strong className="inline font-bold">
          Ohne Konto:
        </strong>
        {d.text}
        <a className="inline font-semibold underline cursor-pointer" data-component="link" href={d.href2} rel="noopener noreferrer" target="_blank">
          {d.label2}
        </a>
        {d.text2}
      </td>
    </tr>
  );
}
