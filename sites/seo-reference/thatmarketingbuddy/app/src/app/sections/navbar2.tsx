import Icon3 from "../svgs/svg-icon3";
/** Navbar2 section. */
export default function Navbar2() {
  return (
    <div className="block bg-foreground">
      <div className="flex mx-auto py-3 px-5 flex-wrap items-center gap-y-2 gap-x-8 max-w-5xl">
        <span className="flex items-center shrink-0 gap-2.5">
          <span className="block relative shrink-0 h-9 w-9">
            <Icon3 />
            <span className="w-9 h-full flex absolute top-0 left-0 justify-center items-center text-background text-[0.6875rem] font-bold leading-[1.0625rem]">
              8.2
            </span>
          </span>
          <span className="block text-color-003 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
            My score
          </span>
          <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
            That Marketing Buddy scores DataForSEO 8.2 out of 10.
          </span>
        </span>
        <nav className="flex gap-7" data-component="nav" aria-label="Sections">
          <a className="border-b-2 border-solid border-b-background block pb-1 text-background [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4 tracking-[0.6px] uppercase cursor-pointer" data-component="link" aria-current="page" href="/software/dataforseo">
            Review
          </a>
          <a className="border-b-2 border-solid border-b-clr-3 block pb-1 text-color-003 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4 tracking-[0.6px] uppercase cursor-pointer hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]" data-component="link" href="/pricing/dataforseo">
            Pricing
          </a>
        </nav>
      </div>
    </div>
  );
}
