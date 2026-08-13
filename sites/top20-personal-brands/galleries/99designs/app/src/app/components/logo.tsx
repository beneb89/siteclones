import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = Record<string, never>;
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="block mx-auto max-md:mx-0.5" role="listitem">
      <div className={cn("h-full border border-dashed border-border grid relative rounded-[5px] items-center justify-items-center grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-square", styles.className)}>
        <svg className="w-auto h-4 block overflow-hidden align-middle text-color-003" data-component="icon" height="1em" viewBox="0 0 32 32" width="1em" fontSize="inherit" color="#dad9d7" fill="currentColor">
          <path d="M7.971 14.057c-.09-.709-.659-1.041-1.57-1.041l-2.992-.039c-1.311.159-1.261.42-1.37 2.009l-.053 13.14c0 .875.769 1.349 1.672 1.349l2.808.028c.911 0 1.421-.625 1.53-1.378 3.879.316 3.575 2.207 13.211 2.312 2.815.026 4.827.044 5.486-1.059.469-.866.226-1.934.325-2.38.135-.613 1.218-1.234 1.362-2.118.126-.77-.108-1.426-.036-2.293.09-.989 1.435-2.196 1.48-3.168.036-.884-.388-1.838-.388-2.59.009-1.155.577-1.768.55-2.231-.135-1.978-1.85-2.511-3.293-2.643-1.435-.131-6.613 0-7.236 0-.614 0-.821-.525-.55-1.05.28-.534 2.68-5.268.659-7.604-1.543-1.785-3.41-.368-3.293.525.162 1.146-.343 2.109-1.642 3.693s-3.564 2.721-4.385 5.495c-.623 1.251-1.696.901-2.274 1.041z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
