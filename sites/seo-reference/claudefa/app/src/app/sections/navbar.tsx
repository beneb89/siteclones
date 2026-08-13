import Icon from "../svgs/svg-icon";
/** Top navigation bar. */
export default function Navbar() {
  return (
    <section className="border-b border-solid border-b-border block py-1 px-4 bg-background w-full 2xl:hidden">
      <div className="flex justify-between items-center gap-2 2xl:hidden">
        <div className="block flex-1 text-center 2xl:hidden">
          <span className="inline text-sm leading-5 2xl:hidden">
            <span className="inline font-medium 2xl:hidden">
              Code Kit 5.7
            </span>
            {" is out now, rebuilt for the Claude 5 family. Includes access to our "}
            <a className="inline text-muted-foreground underline cursor-pointer 2xl:hidden hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" aria-label="Connect your Claude to the claudefa.st blog MCP server with a personal API key" href="/account">
              MCP
            </a>
            : serving up our entire blog for your Claude to analyze.
          </span>
        </div>
        <button className="flex -mr-2 rounded-2xl justify-center items-center shrink-0 text-sm font-medium leading-5 text-center whitespace-nowrap text-nowrap cursor-pointer h-8 w-8 2xl:hidden hover:bg-clr-63 hover:text-clr-64 hover:outline-clr-64 hover:[text-decoration-color:var(--clr-64)]" data-component="button" aria-label="Close top promo banner">
          <Icon />
        </button>
      </div>
    </section>
  );
}
