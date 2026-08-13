/** Top navigation bar. */
export default function Navbar() {
  return (
    <header className="border-b-4 border-solid border-b-color-005 block relative z-100 py-5 bg-background max-md:py-3 md:max-lg:py-[0.9375rem]" role="banner">
      <div className="block max-w-300 mx-auto px-10 max-md:px-4 md:max-lg:px-5">
        <nav className="flex justify-between items-center" data-component="nav" aria-label="Main navigation" role="navigation">
          <div className="contents min-w-0">
            <a className="w-60 h-18 flex items-center text-color-007 underline cursor-pointer max-md:w-40 max-md:h-12 md:max-lg:w-50 md:max-lg:h-15 hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" aria-label="Surmado home" href="/">
              <img className="w-auto h-18 block max-w-full overflow-clip aspect-[auto_240/72] max-md:h-12 md:max-lg:h-15" data-component="image" alt="Surmado: AI for small business" height="72" src="/assets/cloned/svg/623e3daba52e.svg" width="240" />
            </a>
            <div className="contents max-lg:hidden before:content-[''] before:block before:absolute before:-top-2.5 before:inset-x-0 before:h-2.5 before:bg-foreground 2xl:before:hidden" id="mobile-nav" role="menubar">
              <a className="h-11 min-h-11 flex py-2.5 px-2 items-center text-sm leading-[1.5rem] tracking-[0.5px] uppercase whitespace-nowrap text-nowrap cursor-pointer hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)] focus:border-clr-21 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" data-component="link" href="/sites" role="menuitem">
                Surmado Sites
              </a>
              <div className="flex relative items-center" role="none">
                <button className="h-11 min-h-11 flex py-2.5 px-2 items-center gap-1 text-sm font-normal leading-[1.1875rem] tracking-[0.5px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer after:content-[''] after:block after:w-2 after:h-1 max-lg:after:hidden max-lg:after:w-auto max-lg:after:h-auto hover:border-clr-11 hover:text-clr-11 hover:outline-clr-11 hover:[text-decoration-color:var(--clr-11)] focus:border-clr-22 focus:text-clr-22 focus:outline-clr-22 focus:[text-decoration-color:var(--clr-22)]" data-component="button" aria-expanded="false" aria-haspopup="true" role="menuitem">
                  Reports
                </button>
              </div>
              <div className="flex relative items-center" role="none">
                <button className="h-11 min-h-11 flex py-2.5 px-2 items-center gap-1 text-sm font-normal leading-[1.1875rem] tracking-[0.5px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer after:content-[''] after:block after:w-2 after:h-1 max-lg:after:hidden max-lg:after:w-auto max-lg:after:h-auto hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)] focus:border-clr-21 focus:text-clr-21 focus:outline-clr-21 focus:[text-decoration-color:var(--clr-21)]" data-component="button" aria-expanded="false" aria-haspopup="true" role="menuitem">
                  Who We Serve
                </button>
              </div>
              <a className="h-11 min-h-11 flex py-2.5 px-2 items-center text-sm leading-[1.5rem] tracking-[0.5px] uppercase whitespace-nowrap text-nowrap cursor-pointer hover:border-clr-11 hover:text-clr-11 hover:outline-clr-11 hover:[text-decoration-color:var(--clr-11)] focus:border-clr-22 focus:text-clr-22 focus:outline-clr-22 focus:[text-decoration-color:var(--clr-22)]" data-component="link" href="/pricing" role="menuitem">
                Pricing
              </a>
              <a className="min-h-11 hidden py-2.5 px-2 items-center text-color-007 text-sm leading-[1.5rem] tracking-[0.5px] uppercase whitespace-nowrap text-nowrap cursor-pointer" aria-current="page" href="/blog" role="menuitem">
                Blog
              </a>
              <a className="min-h-11 border-b-2 border-solid border-b-clr-2 hidden py-2.5 px-2 items-center text-sm font-semibold leading-[1.5rem] tracking-[0.5px] uppercase whitespace-nowrap text-nowrap cursor-pointer" href="https://app.surmado.com/" role="menuitem">
                Login
              </a>
            </div>
          </div>
          <div className="flex items-center gap-5 max-lg:hidden">
            <a className="w-[12.8125rem] h-[3.7375rem] min-h-12 border-2 border-solid border-foreground block relative min-w-12 py-4 px-8 rounded-md overflow-hidden [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-sm font-black leading-[1.5rem] tracking-[1px] text-center uppercase whitespace-nowrap text-nowrap bg-color-005 cursor-pointer before:content-[''] before:hidden before:absolute before:inset-0 before:-z-1 before:bg-color-007 before:opacity-0 before:rounded-tl-2xl hover:bg-clr-12 hover:transform-[matrix(1,0,0,1,0,-0.775511)] focus:bg-clr-17 focus:transform-[matrix(1,0,0,1,0,-0.067591)]" data-component="link" href="/sites#get-invited">
              Rebuild My Site
            </a>
          </div>
          <button className="min-h-11 hidden min-w-11 p-2.5 flex-col justify-center items-center text-color-010 [font-family:Arial] text-[0.8125rem] font-normal leading-[0.9375rem] text-center cursor-pointer max-lg:w-11 max-lg:h-[3.3125rem] max-lg:flex" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation menu">
            <span className="w-6 h-[0.1875rem] block my-1 bg-foreground" />
            <span className="w-6 h-[0.1875rem] block my-1 bg-foreground" />
            <span className="w-6 h-[0.1875rem] block my-1 bg-foreground" />
          </button>
        </nav>
      </div>
    </header>
  );
}
