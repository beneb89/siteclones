import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  href2: string;
  label: string;
  text: string;
  href3: string;
  title: string;
  text2: string;
  ariaLabel: string;
  href4: string;
  alt2: string;
  imgSrc2: string;
  href5: string;
  label2: string;
  text3: string;
  text4: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className="block p-1 overflow-hidden shadow-[var(--clr-11)_0px_0px_50px_0px]">
      <div className="h-full min-h-143.5 flex relative rounded-[10px] flex-col bg-background shadow-[var(--clr-11)_0px_0px_50px_0px]">
        <div className={cn("h-[15.325rem] block rounded-tl-[10px] rounded-tr-[10px] overflow-hidden", styles.className)}>
          <a className="inline text-primary cursor-pointer" data-component="link" href={d.href}>
            {" "}
            <img className="w-97.5 h-[15.3125rem] block max-w-full rounded-tl-[10px] rounded-tr-[10px] overflow-clip object-cover aspect-[auto_350/210] max-md:w-[21.0625rem] md:max-lg:w-182.5" data-component="image" alt={d.alt} height="210" sizes="auto, (max-width: 350px) 100vw, 350px" src={d.imgSrc} srcSet={d.srcSet} width="350" />
            {" "}
          </a>
          {" "}
        </div>
        {" "}
        <div className={cn("h-[20.55rem] min-h-75 flex p-4 flex-col justify-between grow", styles.className2)}>
          <div className="flex justify-between text-color-009 text-base leading-[1.6875rem]">
            <a className="block text-muted text-[0.8125rem] font-medium leading-7 tracking-[0.5px] uppercase cursor-pointer" data-component="link" href={d.href2}>
              {d.label}
            </a>
            {" "}
            <span className="flex items-center gap-1 text-muted text-[0.8125rem] leading-[1.375rem]">
              {" "}
              <svg className="w-auto h-4 block shrink-0 overflow-hidden align-middle" data-component="icon" fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {d.text}
            </span>
            {" "}
          </div>
          {" "}
          <h3 className="block mb-2 text-color-001 text-[1.3125rem] font-semibold leading-[1.8125rem]" data-component="heading">
            <a className="inline text-color-002 text-[1.375rem] leading-7 cursor-pointer" data-component="link" href={d.href3}>
              {d.title}
            </a>
            {" "}
          </h3>
          {" "}
          <div className="block mb-7.5 grow text-color-002 text-base leading-[1.625rem]">
            {d.text2}
          </div>
          {" "}
          <div className="flex relative justify-between items-center">
            <div className="h-0.5 block absolute -top-4 inset-x-0 z-1 min-w-0 bg-surface-2">
              <div className="w-0 h-full block absolute top-0" style={{ backgroundImage: "linear-gradient(90deg, var(--clr-12), var(--color-008))" }} />
              {" "}
              <span className="w-7 h-4.5 block absolute -top-[0.3125rem] left-82.5 z-10 opacity-0 px-2.5 text-color-008 font-bold leading-4.5 [text-shadow:var(--clr-13)_1px_1px_2px] bg-background">
                {" "}
                <svg className="w-auto h-3 inline relative -top-1 bottom-1 overflow-hidden" data-component="icon" fill="none" height="12" viewBox="0 0 8 12" width="8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {" "}
              </span>
              {" "}
            </div>
            {" "}
            <div className="w-3/4 flex items-center gap-3">
              <a className="h-[3.4375rem] block text-primary cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href4}>
                {" "}
                <img className="w-full h-[3.4375rem] border-2 border-solid border-surface-2 block max-w-full rounded-[50%] overflow-clip object-cover aspect-[auto_55/55]" data-component="avatar" alt={d.alt2} height="55" src={d.imgSrc2} width="55" />
                {" "}
              </a>
              {" "}
              <div className="flex flex-col flex-1">
                <a className="block text-xl font-semibold leading-6 cursor-pointer" data-component="link" href={d.href5}>
                  {d.label2}
                </a>
                {" "}
                <span className="block text-sm leading-[1.0625rem]">
                  {d.text3}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="flex flex-col items-start gap-1">
              <span className="flex flex-col items-center gap-1 text-muted text-[0.8125rem] leading-[1.375rem]">
                {" "}
                <svg className="w-auto h-5 block shrink-0 overflow-hidden align-middle" data-component="icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z" stroke="#808080" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.5 8.33331H17.5" stroke="#808080" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3335 1.66669V5.00002" stroke="#808080" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.6665 1.66669V5.00002" stroke="#808080" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {d.text4}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
