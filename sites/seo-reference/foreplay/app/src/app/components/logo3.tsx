import type { DittoNodeMetaMap } from "../ditto-meta";
import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  href: string;
  label: string;
  label2: string;
};
/** A logo. */
export default function Logo3({ d, meta, styles }: { d: Logo3Data; meta: DittoNodeMetaMap; styles: Logo3Styles }) {
  return (
    <li className="flex flex-1">
      <a className="w-full flex min-w-50 max-w-full py-2 px-2.5 justify-start items-center flex-1 gap-3 text-color-001 cursor-pointer max-md:py-1 max-lg:whitespace-nowrap max-lg:text-nowrap max-md:px-0" data-component="link" href={d.href}>
        <div data-ditto-id={meta[2]?.anchor} className={cn("w-11 h-11 block bg-no-repeat", styles.className)} />
        <div className="block">
          <div className="block">
            <div className="block text-sm leading-5 tracking-[-0.09px]">
              {d.label}
            </div>
          </div>
          <div className="block items-center text-color-002">
            <div className="block font-medium">
              {d.label2}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
