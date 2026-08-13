/** Navbar2 section. */
export default function Navbar2() {
  return (
    <div className="block mb-2 pt-8 px-6 mx-auto max-w-7xl max-md:px-4">
      <nav className="block text-muted-foreground [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm font-light leading-5" data-component="nav" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 [list-style-type:none] list-outside">
          <li className="flex items-center">
            <a className="block cursor-pointer hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/">
              Home
            </a>
            <span className="block mx-2 text-color-001">
              ›
            </span>
          </li>
          <li className="flex items-center">
            <a className="block cursor-pointer hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/posts">
              Blog
            </a>
            <span className="block mx-2 text-color-001">
              ›
            </span>
          </li>
          <li className="flex items-center">
            <span className="block text-muted">
              Meta Ads MCP setup: connect Claude Code to Meta in 2026
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
