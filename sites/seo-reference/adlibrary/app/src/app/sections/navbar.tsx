import Icon2 from "../svgs/svg-icon2";
/** Top navigation bar. */
export default function Navbar() {
  return (
    <header className="w-full block relative z-20 max-w-320 px-8 max-md:px-4 max-md:max-w-none md:max-lg:max-w-192 2xl:max-w-344 2xl:mx-68">
      <div className="flex py-4 justify-between items-center">
        <a className="w-[226.5px] block shrink-0 cursor-pointer max-md:w-[168.3px]" data-component="link" href="/">
          <div className="flex items-center gap-4 justify-items-center [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace]">
            <img className="w-auto block max-w-full overflow-clip aspect-[auto_193/34] align-middle [filter:invert(1)] h-20 max-md:h-12" data-component="image" alt="adlibrary.com Logo" height="34" src="/assets/cloned/images/5163bf618313.png" width="193" />
            <span className="block text-base leading-6 whitespace-nowrap text-nowrap max-md:text-sm max-md:leading-5 md:max-lg:[font-size:inherit] md:max-lg:leading-[inherit]">
              adlibrary.com
            </span>
          </div>
        </a>
        <nav className="flex items-center gap-3 [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace]" data-component="nav">
          <a className="border border-solid border-foreground block py-1.5 px-4 rounded-sm text-sm leading-5 cursor-pointer hover:bg-primary hover:border-primary hover:text-surface hover:outline-surface hover:[text-decoration-color:var(--surface)]" data-component="link" href="/login">
            Login
          </a>
          <button className="h-9 block p-1 text-center cursor-pointer" data-component="button" aria-controls="site-nav-menu" aria-expanded="false" aria-label="Open menu">
            <Icon2 />
          </button>
        </nav>
      </div>
    </header>
  );
}
