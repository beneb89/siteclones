import type { TileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TileData = {
  ariacontrols: string;
  id: string;
  label: string;
  kind?: string;
  href?: string;
  label2?: string;
  label3: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="block">
      <button className={cn("hidden 2xl:h-9 2xl:min-h-9 2xl:border-2 2xl:border-solid 2xl:border-clr-1 2xl:flex 2xl:max-h-9 2xl:py-2 2xl:px-3 2xl:rounded-lg 2xl:justify-center 2xl:items-center 2xl:text-sm 2xl:font-medium 2xl:leading-5 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:bg-clr-1 2xl:cursor-pointer after:content-[''] after:block after:w-[0.6875rem] after:h-5 after:ml-2 after:text-sm after:font-medium after:leading-5 after:text-left max-lg:after:hidden", styles.className)} aria-controls={d.ariacontrols} aria-expanded="false" aria-has-popup="true" id={d.id} type="button">
        {d.label}
      </button>
      <a className="h-9 min-h-9 border-2 border-solid border-clr-1 flex max-h-9 py-2 px-3 rounded-lg justify-center items-center text-sm leading-4 whitespace-nowrap text-nowrap bg-clr-1 cursor-pointer 2xl:hidden after:content-[''] after:hidden after:ml-[0.225rem] max-lg:after:block 2xl:after:hidden" data-component={d.kind} href={d.href} title={d.label2}>
        {d.label3}
      </a>
      {" "}
    </div>
  );
}
