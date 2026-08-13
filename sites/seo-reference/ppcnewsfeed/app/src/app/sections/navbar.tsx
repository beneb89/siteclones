/** Top navigation bar. */
export default function Navbar() {
  return (
    <header className="w-full h-17.5 block sticky -top-20 z-10 px-8 shrink-0 bg-border shadow-[var(--clr-1)_0px_1px_3px_0px] max-md:top-0">
      <div className="block relative px-8 rounded-xl bg-border max-lg:px-0 max-lg:rounded-[initial] max-lg:bg-[initial]">
        <div className="min-h-17.5 flex justify-between items-stretch max-lg:hidden">
          <div className="flex pr-5 items-center">
            <span className="flex -ml-2.5 p-2.5 flex-col justify-center cursor-pointer 2xl:px-4 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-foreground after:content-[''] after:block after:w-6 after:h-0.5 after:mt-1 after:bg-foreground" data-component="button" role="button">
              {" "}
              <span className="w-6 h-0.5 block mt-1 bg-foreground" />
              {" "}
            </span>
            {" "}
            <div className="block ml-4">
              <a className="block text-2xl font-bold leading-9 tracking-[-1.8px] whitespace-nowrap text-nowrap cursor-pointer" data-component="link" href="/">
                {" "}
                <img className="w-[12.1875rem] h-12.5 min-h-5 block max-w-75 max-h-12.5 overflow-clip align-middle" data-component="image" alt="PPC News Feed" src="/assets/cloned/images/d7c9744f326e.png" />
                {" "}
              </a>
              {" "}
            </div>
            <div className="border-l border-solid border-l-surface hidden min-w-0 ml-8 py-2 pl-8 text-muted-foreground text-xs font-semibold leading-4.5 2xl:block">
              {" Your One-Stop Source for the Latest PPC News"}
            </div>
          </div>
          <div className="flex pl-5 justify-end items-center">
            <span className="flex relative -ml-2.5 p-2.5 items-center cursor-pointer 2xl:-ml-3 2xl:px-3" data-component="button" role="button">
              {" "}
              <span className="flex relative justify-center items-center">
                {" "}
                <i className="block [font-family:cs-icons] text-xl leading-5 before:content-[''] before:text-foreground before:text-xl before:leading-5 before:text-left" />
                {" "}
              </span>
              {" "}
            </span>
            {" "}
            <span className="w-10 h-10 flex rounded-md justify-center items-center bg-surface-2 cursor-pointer" data-component="button" role="button">
              {" "}
              <i className="block [font-family:cs-icons] text-xl leading-5 before:content-[''] before:text-foreground before:text-xl before:leading-5 before:text-left hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:border-foreground focus:text-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" />
              {" "}
            </span>
          </div>
        </div>
        <div className="min-h-17.5 hidden justify-between items-stretch max-lg:flex">
          <div className="flex pr-5 items-center max-lg:pr-2.5">
            <span className="hidden min-w-0 -mx-2.5 p-2.5 flex-col justify-center cursor-pointer max-lg:flex before:content-[''] before:block before:w-6 before:h-0.5 before:bg-foreground after:content-[''] after:block after:w-6 after:h-0.5 after:mt-1 after:bg-foreground" role="button">
              {" "}
              <span className="w-6 inline mt-1 bg-foreground max-lg:h-0.5 max-lg:block" />
              {" "}
            </span>
          </div>
          <div className="flex justify-center items-center">
            <div className="block min-w-0">
              <a className="block text-2xl font-bold leading-9 tracking-[-1.8px] whitespace-nowrap text-nowrap cursor-pointer" href="/">
                {" "}
                <img className="min-h-5 block max-w-75 max-h-12.5 overflow-clip align-middle max-lg:w-[12.1875rem] max-lg:h-12.5" alt="PPC News Feed" src="/assets/cloned/images/d7c9744f326e.png" />
                {" "}
              </a>
              {" "}
            </div>
          </div>
          <div className="flex pl-5 justify-end items-center max-lg:pl-2.5">
            <span className="flex relative min-w-0 -ml-2.5 p-2.5 items-center cursor-pointer" role="button">
              {" "}
              <i className="block min-w-0 [font-family:cs-icons] text-xl leading-5 before:content-[''] before:text-foreground before:text-xl before:leading-5 before:text-left" />
              {" "}
            </span>
            {" "}
            <span className="w-10 h-10 flex min-w-0 ml-2.5 rounded-md justify-center items-center bg-surface-2 cursor-pointer" role="button">
              {" "}
              <i className="block min-w-0 [font-family:cs-icons] text-xl leading-5 before:content-[''] before:text-foreground before:text-xl before:leading-5 before:text-left" />
              {" "}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
