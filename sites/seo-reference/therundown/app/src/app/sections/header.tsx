/** Page header. */
export default function Header() {
  return (
    <header className="border-b border-solid border-b-border block relative pt-10 pb-8 overflow-hidden bg-color-007 max-lg:py-6">
      <div className="w-320 h-full block absolute top-0 left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] opacity-6 [mix-blend-mode:exclusion] max-w-320 [background-size:273.086px_273.086px] transform-[matrix(1,0,0,1,-640,0)] pointer-events-none max-md:w-[23.4375rem] max-md:max-w-[23.4375rem] max-md:transform-[matrix(1,0,0,1,-187.5,0)] md:max-lg:w-192 md:max-lg:max-w-192 md:max-lg:transform-[matrix(1,0,0,1,-384,0)] 2xl:w-[112.3125rem] 2xl:max-w-480 2xl:transform-[matrix(1,0,0,1,-898.5,0)]" style={{ backgroundImage: "url(\"/assets/cloned/images/42b7ba6cd866.webp\")" }} aria-hidden="true" />
      {" "}
      <div className="w-310 grid relative mx-5 gap-3 grid-cols-1 max-md:w-[21.4375rem] max-lg:mx-4 md:max-lg:w-184 2xl:w-312 2xl:mx-84">
        <p className="flex flex-wrap items-center gap-2 text-muted [font-family:'IBM_Plex_Mono',_SFMono-Regular,_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.1px] uppercase">
          <a className="block cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="link" href="/guides">
            Guides
          </a>
          {" "}
          <span className="block" aria-hidden="true">
            ·
          </span>
          {" "}
          <span className="block">
            published jul 23, 2026
          </span>
        </p>
        {" "}
        <h1 className="w-full max-w-220 block text-[2.0625rem] font-medium leading-[2.3125rem] tracking-[-0.67px] [overflow-wrap:anywhere] text-balance max-lg:text-2xl max-lg:leading-[1.6875rem] max-lg:tracking-[-0.48px] 2xl:text-[2.125rem] 2xl:leading-[2.375rem] 2xl:tracking-[-0.68px]" data-component="heading">
          Build Your Own AI SEO Specialist With Gumloop
        </h1>
        {" "}
        <div className="flex pt-1 flex-wrap items-center gap-2">
          <span className="h-5 flex min-w-0 px-2 rounded-md justify-center items-center shrink-0 gap-2 text-color-003 [font-family:'IBM_Plex_Mono',_SFMono-Regular,_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[0.6875rem] uppercase whitespace-nowrap text-nowrap bg-clr-5" aria-label="beginner, 1 of 3 difficulty">
            <span className="w-6.5 h-1.5 flex items-center gap-1" aria-hidden="true">
              <i className="w-1.5 h-1.5 block rounded-full italic bg-color-003" />
              <i className="w-1.5 h-1.5 block opacity-25 rounded-full italic bg-color-003" />
              <i className="w-1.5 h-1.5 block opacity-25 rounded-full italic bg-color-003" />
            </span>
            {" "}
            <span className="block">
              beginner
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}
