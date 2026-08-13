import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  id: string;
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item [list-style-type:none]", styles.className)} id={d.id}>
      <a className={cn("inline-block py-[0.5625rem] text-color-001 [font-family:Poppins,_sans-serif] cursor-pointer max-lg:py-1.5 max-md:text-[0.6875rem] max-md:leading-[0.8125rem] md:max-lg:text-xs md:max-lg:leading-[0.875rem] hover:border-background hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]", styles.className2)} data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
