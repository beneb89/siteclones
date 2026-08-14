import type { Tile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile4Data = {
  ariaLabel: string;
  label: string;
  ariaLabel2: string;
  disabled?: boolean;
  label2: string;
  ariaLabel3: string;
  disabled2?: boolean;
  label3: string;
  ariaLabel4: string;
  disabled3?: boolean;
  label4: string;
  ariaLabel5: string;
  disabled4?: boolean;
  label5: string;
  ariaLabel6: string;
  disabled5?: boolean;
  label6: string;
  kind7?: string;
  ariaLabel7: string;
  label7: string;
  kind?: string;
  kind2?: string;
  kind3?: string;
  kind4?: string;
  kind5?: string;
  kind6?: string;
  ariaselected?: string;
  ariaselected2?: string;
  ariaselected3?: string;
  ariaselected4?: string;
  ariaselected5?: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <tr className="table-row align-middle [border-spacing:0px_8px] max-md:hidden">
      <td className="table-cell align-middle [border-spacing:0px_8px] max-md:hidden" role="gridcell">
        <button className={cn("w-11 h-11 border border-solid border-clr-1 block relative mx-1 pt-px rounded-[50%] text-muted text-base leading-6 text-center cursor-default pointer-events-none [border-spacing:0px_8px] max-md:hidden md:max-lg:mr-1 md:max-lg:ml-1", styles.className)} aria-label={d.ariaLabel} disabled type="button" data-component={d.kind}>
          <span className="inline pointer-events-none [border-spacing:0px_8px] max-md:hidden">
            {d.label}
          </span>
        </button>
      </td>
      <td className="table-cell align-middle [border-spacing:0px_8px] max-md:hidden" role="gridcell" aria-selected={d.ariaselected}>
        <button className={cn("w-11 h-11 border border-solid border-clr-1 block relative mx-1 pt-px rounded-[50%] text-base leading-6 text-center [border-spacing:0px_8px] max-md:hidden md:max-lg:mr-1 md:max-lg:ml-1", styles.className2)} aria-label={d.ariaLabel2} disabled={d.disabled} type="button" data-component={d.kind2}>
          <span className={cn("inline [border-spacing:0px_8px] max-md:hidden", styles.className3)}>
            {d.label2}
          </span>
        </button>
      </td>
      <td className="table-cell align-middle [border-spacing:0px_8px] max-md:hidden" role="gridcell" aria-selected={d.ariaselected2}>
        <button className={cn("w-11 h-11 border border-solid border-clr-1 block relative mx-1 pt-px rounded-[50%] text-base leading-6 text-center [border-spacing:0px_8px] max-md:hidden md:max-lg:mr-1 md:max-lg:ml-1", styles.className4)} aria-label={d.ariaLabel3} disabled={d.disabled2} type="button" data-component={d.kind3}>
          <span className={cn("inline [border-spacing:0px_8px] max-md:hidden", styles.className5)}>
            {d.label3}
          </span>
        </button>
      </td>
      <td className="table-cell align-middle [border-spacing:0px_8px] max-md:hidden" role="gridcell" aria-selected={d.ariaselected3}>
        <button className={cn("w-11 h-11 border border-solid border-clr-1 block relative mx-1 pt-px rounded-[50%] text-base leading-6 text-center [border-spacing:0px_8px] max-md:hidden md:max-lg:mr-1 md:max-lg:ml-1", styles.className6)} aria-label={d.ariaLabel4} disabled={d.disabled3} type="button" data-component={d.kind4}>
          <span className={cn("inline [border-spacing:0px_8px] max-md:hidden", styles.className7)}>
            {d.label4}
          </span>
        </button>
      </td>
      <td className="table-cell align-middle [border-spacing:0px_8px] max-md:hidden" role="gridcell" aria-selected={d.ariaselected4}>
        <button className={cn("w-11 h-11 border border-solid border-clr-1 block relative mx-1 pt-px rounded-[50%] text-base leading-6 text-center [border-spacing:0px_8px] max-md:hidden md:max-lg:mr-1 md:max-lg:ml-1", styles.className8)} aria-label={d.ariaLabel5} disabled={d.disabled4} type="button" data-component={d.kind5}>
          <span className={cn("inline [border-spacing:0px_8px] max-md:hidden", styles.className9)}>
            {d.label5}
          </span>
        </button>
      </td>
      <td className="table-cell align-middle [border-spacing:0px_8px] max-md:hidden" role="gridcell" aria-selected={d.ariaselected5}>
        <button className={cn("w-11 h-11 border border-solid border-clr-1 block relative mx-1 pt-px rounded-[50%] text-base leading-6 text-center [border-spacing:0px_8px] max-md:hidden md:max-lg:mr-1 md:max-lg:ml-1", styles.className10)} aria-label={d.ariaLabel6} disabled={d.disabled5} type="button" data-component={d.kind6}>
          <span className={cn("inline [border-spacing:0px_8px] max-md:hidden", styles.className11)}>
            {d.label6}
          </span>
        </button>
      </td>
      <td className="table-cell align-middle [border-spacing:0px_8px] max-md:hidden" role="gridcell">
        <button className={cn("w-11 h-11 border border-solid border-clr-1 block relative mx-1 pt-px rounded-[50%] text-muted text-base leading-6 text-center cursor-default pointer-events-none [border-spacing:0px_8px] max-md:hidden", styles.className12)} data-component={d.kind7} aria-label={d.ariaLabel7} disabled type="button">
          <span className="inline pointer-events-none [border-spacing:0px_8px] max-md:hidden">
            {d.label7}
          </span>
        </button>
      </td>
    </tr>
  );
}
