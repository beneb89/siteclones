import ListRow, { type ListRowData } from "../components/list-row";
const ListRow_data2: ListRowData[] = [
    { text: "Pipboard (Meta Ads):", text2: " highly rated MCP for Facebook and Instagram Ads. Pulls account visualisations into Claude and executes live optimisations (pause campaigns, reallocate budgets) without logging into Business Manager." },
    { text: "Google Ads Official MCP:", text2: " released October 2025. Same pattern, validated. Marketer-friendly plain-English queries with read-only as default. Explore tier gives 2,800 free daily calls." },
    { text: "Custom Agency MCPs:", text2: " Session Media’s playbook is to wrap internal IP (offer libraries, ICP definitions, naming conventions) inside an MCP so the assistant always operates within the agency’s framework, not generic best practice [4]." }
];
/** How Mcp Connects section. */
export default function HowMcpConnectsSection({ listRowData2 = ListRow_data2 } = {}) {
  return (
    <section className="block">
      <h2 className="block mt-22.5 mb-[1.6875rem] text-4xl font-bold leading-[2.6875rem] tracking-[-0.72px] max-md:mt-[4.0625rem] max-md:mb-[19.5px] max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:tracking-[-0.52px] md:max-lg:mt-[4.6875rem] md:max-lg:mb-[22.5px] md:max-lg:text-3xl md:max-lg:leading-9 md:max-lg:tracking-[-0.6px]" data-component="heading" id="how-mcp-connects-claude-and-chatgpt-to-the-cli">
        How MCP Connects Claude and ChatGPT to the CLI
      </h2>
      {" "}
      <p className="block mb-5">
        {"The CLI is the "}
        <strong className="inline font-bold">
          deterministic execution layer
        </strong>
        {". MCP (Model Context Protocol) is the "}
        <strong className="inline font-bold">
          bridge
        </strong>
        {" that lets AI assistants invoke it."}
      </p>
      {" "}
      <article className="block">
        <h3 className="block mt-12 mb-3 text-2xl font-semibold leading-[1.9375rem] tracking-[-0.24px] max-md:mt-10 max-md:mb-2.5 max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.2px] md:max-lg:mt-11 md:max-lg:mb-[0.6875rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-0.22px]" data-component="heading" id="the-baker-mcp-pattern-for-meta-ads">
          The Baker MCP Pattern for Meta Ads
        </h3>
        {" "}
        <ol className="block mb-5 pl-6 [list-style-type:decimal] list-outside">
          <li className="list-item mb-1.5">
            <strong className="inline font-bold">
              Wrap the CLI in an MCP server.
            </strong>
            {" Either build a thin server that exposes a few high-level tools ("}
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              audit_account
            </code>
            {", "}
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              pause_underperforming
            </code>
            {", "}
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              pull_insights
            </code>
            ), or use a third-party server like Pipboard that already exposes Meta Ads operations to Claude [3].
          </li>
          <li className="list-item mb-1.5">
            <strong className="inline font-bold">
              Scope the token.
            </strong>
            {" Read-only token first. Write-enabled token only when the workflow has a human approval step."}
          </li>
          <li className="list-item mb-1.5">
            <strong className="inline font-bold">
              Constrain the toolset.
            </strong>
            {" Expose 5-10 named CLI commands at most. Less surface = fewer hallucinated arguments."}
          </li>
          <li className="list-item mb-1.5">
            <strong className="inline font-bold">
              Force structured output.
            </strong>
            {" Always pass "}
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              --output json
            </code>
            {" so the model parses results deterministically instead of pattern-matching on table layouts."}
          </li>
          <li className="list-item mb-1.5">
            <strong className="inline font-bold">
              Log every run.
            </strong>
            {" Pipe CLI invocations to an append-only log so you can replay and audit any change the assistant made."}
          </li>
        </ol>
        {" "}
      </article>
      {" "}
      <article className="block">
        <h3 className="block mt-12 mb-3 text-2xl font-semibold leading-[1.9375rem] tracking-[-0.24px] max-md:mt-10 max-md:mb-2.5 max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.2px] md:max-lg:mt-11 md:max-lg:mb-[0.6875rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-0.22px]" data-component="heading" id="third-party-mcps-already-in-market">
          Third-party MCPs already in market
        </h3>
        {" "}
        <p className="block mb-5">
          {"According to the "}
          <a className="inline underline cursor-pointer hover:border-muted hover:text-muted hover:outline-muted hover:[text-decoration-color:var(--muted)]" data-component="link" href="#sources">
            Top 10 MCP Servers for PPC Marketers
          </a>
          {" review [3]:"}
        </p>
        {" "}
        <ul className="block mb-5 pl-6 [list-style-type:disc] list-outside">
          {listRowData2.map((d, i) => <ListRow key={i} d={d} />)}
        </ul>
        {" "}
        <p className="block mb-5">
          The Meta Ads CLI now lets every team build the equivalent of Pipboard internally, scoped to their own accounts and conventions.
        </p>
        {" "}
      </article>
      {" "}
    </section>
  );
}
