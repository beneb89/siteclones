import type { MediaCard3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCard3Data = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  label: string;
  kind?: string;
};
/** A card with media + heading. */
export default function MediaCard3({ d, styles }: { d: MediaCard3Data; styles: MediaCard3Styles }) {
  return (
    <div className="w-87.5 block relative max-w-87.5 mr-2.5 shrink-0 max-md:w-[20.9375rem]">
      <a className={cn("flex p-8 rounded-2xl flex-col justify-between bg-color-001 cursor-pointer h-full max-md:p-5", styles.className)} data-component="link" href={d.href}>
        <div className="flex relative mb-2 justify-center overflow-hidden aspect-[2/3]">
          <img className="w-full block max-w-full overflow-clip object-contain aspect-[auto_400/600] align-middle text-clr-0 h-full" data-component="image" alt={d.alt} height="600" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={d.imgSrc} srcSet={d.srcSet} width="400" />
        </div>
        <div className="flex items-end gap-5">
          <div className="flex flex-col flex-1">
            <span className="block opacity-50 [font-family:mono,_'mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-sm leading-[1.3125rem] tracking-[-0.35px] uppercase max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[-0.32px] md:max-lg:leading-[1.25rem] md:max-lg:tracking-[-0.34px]">
              Digital
            </span>
            <h3 className="overflow-hidden text-[1.1875rem] font-medium leading-[1.75rem] text-balance line-clamp-3 max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.625rem] 2xl:text-xl 2xl:leading-7.5" data-component="heading">
              {d.title}
            </h3>
            <span className="flex gap-2 text-sm leading-[1.375rem] max-lg:leading-[1.3125rem] 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem]">
              <span className="block">
                <div className="block">
                  {d.label}
                </div>
              </span>
            </span>
          </div>
          <div className="flex rounded-full justify-center items-center text-foreground bg-background h-10 w-10">
            <svg className="block overflow-hidden align-middle h-5 w-5" data-component={d.kind} viewBox="0 0 20 20" fill="currentColor">
              <title>
                {"Carat"}
              </title>
              <path d="M10.9724 10.0006L6.84766 5.87577L8.02616 4.69727L13.3295 10.0006L8.02616 15.3038L6.84766 14.1253L10.9724 10.0006Z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
