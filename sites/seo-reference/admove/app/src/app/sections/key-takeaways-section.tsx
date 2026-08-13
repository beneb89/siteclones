import ListRow from "../components/list-row";
import Tile2 from "../components/tile2";
import Tile3 from "../components/tile3";
import ListRow2 from "../components/list-row2";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import { ListRow2_meta, ListRow2_meta2, ListRow2_meta3 } from "../ditto-meta";
import { ListRow_styles, Tile2_styles, Tile3_styles, Tile3_styles2, ListRow3_styles } from "../_styles";
import { listRowData as listRowDataContent, tile2Data as tile2DataContent, tile3Data as tile3DataContent, tile3Data2 as tile3Data2Content, listRow2Data as listRow2DataContent, listRow2Data2 as listRow2Data2Content, listRow2Data3 as listRow2Data3Content } from "../content";
const ListRow3_data: ListRow3Data[] = [
    { description: "No optimization access.", description2: " The connectors cannot touch Meta's Advantage+ layer, bidding algorithms, or audience expansion logic. They can create a campaign and set its budget, but they cannot influence how Meta delivers it." },
    { description: "No lead form management.", description2: " Lead retrieval, form editing, and CRM synchronization remain manual or dependent on third-party integrations like LeadSync. If you run lead gen campaigns, the post-submission workflow hasn't changed." },
    { description: "No local file access (MCP only).", description2: " The MCP Server requires public URLs for creative assets and cannot reference files stored on your machine. You'll need to host images or videos somewhere accessible before uploading them." }
];
/** Key Takeaways section. */
export default function KeyTakeawaysSection({ listRowData = listRowDataContent, tile2Data = tile2DataContent, tile3Data = tile3DataContent, tile3Data2 = tile3Data2Content, listRow2Data = listRow2DataContent, listRow2Data2 = listRow2Data2Content, listRow2Data3 = listRow2Data3Content, listRow3Data = ListRow3_data } = {}) {
  return (
    <div className="w-full max-w-180 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]">
      <p className="block text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"On April 29, 2026, Meta shipped something that changes how paid social advertisers interact with the Marketing API. "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://www.facebook.com/business/news/meta-ads-ai-connectors" target="_blank">
          <strong className="inline">
            Meta Ads AI Connectors
          </strong>
          {" is the umbrella product"}
        </a>
        : two interfaces, one MCP Server and one CLI, that wrap the full Marketing API behind a single OAuth prompt. No Developer App, no App Review, and no multi-day approval wait. You authenticate through your browser, and you’re connected.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"Creating a Meta Developer App, navigating App Review, and configuring permissions manually took 25 minutes or more, and the approval process could stretch across days. The new path takes 5 to 15 minutes from start to first query, according to practitioner estimates. For media buyers pulling morning performance reports, "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="/solutions/agencies">
          agency owners managing cross-client operations
        </a>
        , and DTC brand operators syncing product catalogs, that friction reduction is the difference between using the API and never bothering.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        This guide covers both interfaces in practical terms: what they do, how they differ, how to set each one up, and where they fall short.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="auto">
        <strong className="inline">
          Key Takeaways
        </strong>
      </h3>
      <ul className="block relative mt-10 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] [list-style-type:disc] list-outside" dir="auto">
        {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
      </ul>
      <h2 className="block mt-8 text-color-002 [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-[2rem] leading-10 tracking-[-0.4px] text-left [font-feature-settings:'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] max-lg:text-[1.75rem] max-lg:leading-[2.1875rem] max-lg:tracking-[-0.3px] 2xl:tracking-[-0.65px]" data-component="heading" dir="ltr">
        <strong className="inline">
          What did Meta ship?
        </strong>
      </h2>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"Meta Ads AI Connectors is Meta’s name for two distinct interfaces to the Marketing API, both released on April 29, 2026, and both authenticated through "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://developers.facebook.com/documentation/facebook-login/facebook-login-for-business" target="_blank">
          Meta Business OAuth
        </a>
        {" rather than the traditional Developer App flow."}
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"The first interface is the "}
        <strong className="inline">
          Meta Ads MCP Server
        </strong>
        {", a hosted endpoint at mcp.facebook.com/ads that follows the Model Context Protocol (MCP) standard. "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank">
          MCP is an open protocol that lets AI assistants connect
        </a>
        {" to external data sources and tools through a standardized interface. You connect to Meta’s MCP Server through any compatible client: Claude Desktop, ChatGPT, or others that support the protocol. The interaction is conversational. You ask questions about your ad accounts in natural language, and the server handles the API calls behind the scenes."}
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"The second interface is the "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://developers.facebook.com/blog/post/2026/04/29/introducing-ads-cli/" target="_blank">
          <strong className="inline">
            Meta Ads CLI
          </strong>
        </a>
        {", a command-line tool installed via npm and authenticated through "}
        <em className="inline">
          meta auth login
        </em>
        . It requires Python 3.12+ and runs through terminal-based clients like Claude Code. The CLI is deterministic: it produces spec files and exit codes rather than conversational responses, and it’s designed for scripted, repeatable workflows.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"Both interfaces expose the same underlying capabilities: "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://pasqualepillitteri.it/en/news/1707/official-meta-ads-mcp-claude-29-tools-2026" target="_blank">
          29 tools across five capability areas
        </a>
        , independently confirmed by audits from MCP. Directory and Pasquale Pillitteri. Both enforce a critical safety mechanism. Every campaign, ad set, and ad created through the connectors lands in PAUSED status. No CLI flag overrides this. You must manually activate anything the connectors create.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The connectors are free during the current open beta. Meta has not announced long-term pricing as of May 2026.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Where Meta fits in the MCP ecosystem
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"Meta’s connectors arrived into an ad-platform MCP timeline that started almost a year earlier. "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://developers.google.com/analytics/devguides/MCP" target="_blank">
          Google Analytics launched its MCP
        </a>
        {" integration in July 2025. Google Ads followed in October 2025, though initially with read-only access and a requirement for a Developer App and token. "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://advertising.amazon.com/library/news/amazon-ads-mcp-server-open-beta" target="_blank">
          Amazon Ads entered closed beta
        </a>
        {" in November 2025 and opened its beta in February 2026. Meta’s April 2026 launch is the latest entry, but it’s the first major ad platform to ship full read-and-write access from day one."}
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"For multi-platform advertisers, this difference matters. Google Ads MCP still requires a Developer App for authentication, adding setup friction that Meta’s OAuth flow eliminates. "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://iabtechlab.com/introducing-the-iab-tech-lab-agent-registry/" target="_blank">
          The IAB Tech Lab Agent Registry listed 10 active MCP entries
        </a>
        {" as of March 2026, a sign that the protocol is moving toward industry-wide adoption. For advertisers managing spend across Google, Amazon, and Meta, the convergence points toward a future where campaign management across all three platforms runs through a unified MCP layer."}
      </p>
      <h2 className="block mt-8 text-color-002 [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-[2rem] leading-10 tracking-[-0.4px] text-left [font-feature-settings:'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] max-lg:text-[1.75rem] max-lg:leading-[2.1875rem] max-lg:tracking-[-0.3px] 2xl:tracking-[-0.65px]" data-component="heading" dir="ltr">
        <strong className="inline">
          MCP or CLI: which one do you need?
        </strong>
      </h2>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Use MCP for conversational analysis and ad-hoc reporting. Use CLI for deterministic, scriptable execution and bulk operations. That framework is the emerging consensus among early adopters, and it holds up well in practice.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The two interfaces sit on opposite ends of a spectrum. MCP is built for exploration: you talk to your ad data through a chat interface, ask follow-up questions, and get performance summaries in natural language. CLI is built for repeatability. You run commands that produce consistent outputs, generate spec files you can review before acting, and chain operations into automated workflows.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        One practical cost to consider: MCP sessions preload tool descriptions into the AI client’s context window. Meta’s 29-tool connector uses fewer tokens than a usual MCP, but the overhead grows when additional connectors are loaded alongside it. The CLI avoids that overhead because it doesn’t preload tool definitions every turn, making it more token-efficient for operators running multiple sessions daily.
      </p>
      <figure className="block mt-10 overflow-auto">
        <table className="border border-solid border-border table rounded-lg overflow-hidden [word-break:normal]">
          <tbody className="table-row-group align-middle">
            <tr className="table-row align-middle">
              {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
            </tr>
            <tr className="table-row align-middle">
              {tile3Data.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles[i]} />)}
            </tr>
            <tr className="table-row align-middle">
              {tile3Data2.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles2[i]} />)}
            </tr>
          </tbody>
        </table>
      </figure>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"Most advertisers will use both at different points. The MCP Server handles the thinking: pull overnight numbers, flag anomalies, and compare performance across ad sets. The CLI handles the doing. Apply budget changes, pause underperformers, and "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="/tools/ai-ad-generator">
          launch new catalog-based campaigns
        </a>
        . The combination works because each interface plays to its strengths without duplicating the other.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        A concrete example of the split in action: you open an MCP session at 8 AM and ask for a performance summary across your five active campaigns. The MCP Server surfaces that two campaigns have CPAs 35 percent above their weekly average. You follow up with questions to identify the ad sets responsible. Then you switch to the CLI, run a batch command that reduces daily budgets on those ad sets by 20 percent, and the changes land in PAUSED for your review. Analysis in MCP, execution in CLI.
      </p>
      <h2 className="block mt-8 text-color-002 [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-[2rem] leading-10 tracking-[-0.4px] text-left [font-feature-settings:'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] max-lg:text-[1.75rem] max-lg:leading-[2.1875rem] max-lg:tracking-[-0.3px] 2xl:tracking-[-0.65px]" data-component="heading" dir="ltr">
        <strong className="inline">
          What can the connectors do? The 29-tool catalog
        </strong>
      </h2>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Both the MCP Server and CLI expose the same 29 tools, grouped across five capability areas. The tools are the same regardless of which interface you use; the difference is how you interact with them. Here’s what they cover, organized by what advertisers do with them.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Reporting and insights (7 tools)
        </strong>
      </h3>
      <img className="w-180 h-117 block max-w-full mt-10 overflow-clip aspect-[1512/982] max-md:w-[20.9375rem] max-md:h-54.5" data-component="image" alt="Screenshot of Meta's UI" height="491" sizes="(min-width: 1420px) 100vw, (min-width: 1280px) and (max-width: 1419.98px) 100vw, (min-width: 810px) and (max-width: 1279.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/accaaf116467.png" srcSet="/assets/cloned/images/bb5ce605ef09.png 512w, /assets/cloned/images/666a7b6c8f4f.png 1024w, /assets/cloned/images/903e500a0df1.png 1512w" width="756" />
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Seven tools handle the read side of the connectors, and they’re where most advertisers will start because they carry zero risk.
      </p>
      <ul className="block relative mt-10 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] [list-style-type:disc] list-outside" dir="auto">
        <li className="list-item pl-5.5 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] [list-style-type:none] 2xl:pl-6 2xl:text-lg 2xl:leading-[1.8125rem] before:content-['•'] before:block before:absolute before:top-0 before:right-[44.6875rem] before:bottom-[230.3px] before:left-0 before:w-[0.3125rem] before:h-[1.6rem] before:text-color-001 before:text-base before:leading-[1.625rem] max-md:before:right-82.5 max-md:before:bottom-[537.5px] 2xl:before:bottom-72 2xl:before:h-[1.8rem] 2xl:before:text-lg 2xl:before:leading-[1.8125rem]">
          <p className="block">
            <strong className="inline">
              {"Performance data retrieval. "}
            </strong>
            Pull campaign-level, ad-set-level, and ad-level metrics across any date range. Replaces the manual Ads Manager export-and-pivot routine that eats the first hour of most media buyers’ mornings.
          </p>
        </li>
        <li className="list-item pl-5.5 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] [list-style-type:none] 2xl:pl-6 2xl:text-lg 2xl:leading-[1.8125rem] before:content-['•'] before:block before:absolute before:top-[4.8rem] before:right-[44.6875rem] before:bottom-[9.6rem] before:left-0 before:w-[0.3125rem] before:h-[1.6rem] before:text-color-001 before:text-base before:leading-[1.625rem] max-md:before:top-[9.6rem] max-md:before:right-82.5 max-md:before:bottom-96 2xl:before:top-[5.4rem] 2xl:before:bottom-[12.6rem] 2xl:before:h-[1.8rem] 2xl:before:text-lg 2xl:before:leading-[1.8125rem]">
          <p className="block">
            <strong className="inline">
              {"Cross-account summaries. "}
            </strong>
            {"Generate performance reports across multiple ad accounts in a single query. "}
            <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="/blog/the-agency-creative-velocity-playbook">
              For agencies managing ten or more client accounts
            </a>
            , this replaces what used to require either a custom reporting tool or a $500/month third-party platform, according to practitioner estimates from Common Thread Collective.
          </p>
        </li>
        <li className="list-item pl-5.5 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] [list-style-type:none] 2xl:pl-6 2xl:text-lg 2xl:leading-[1.8125rem] before:content-['•'] before:block before:absolute before:top-[11.2rem] before:right-[44.6875rem] before:bottom-[3.2rem] before:left-0 before:w-[0.3125rem] before:h-[1.6rem] before:text-color-001 before:text-base before:leading-[1.625rem] max-md:before:top-96 max-md:before:right-82.5 max-md:before:bottom-[9.6rem] 2xl:before:top-[12.6rem] 2xl:before:bottom-[5.4rem] 2xl:before:h-[1.8rem] 2xl:before:text-lg 2xl:before:leading-[1.8125rem]">
          <p className="block">
            <strong className="inline">
              {"Anomaly surfacing. "}
            </strong>
            {"Flag CPM spikes, budget pacing issues, and delivery anomalies. "}
            <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://commonthreadco.com/blogs/coachs-corner/meta-ai-mcp-cli-ads-connectors-ecommerce" target="_blank">
              CPMs can jump 30 to 40 percent during high-competition periods
            </a>
            , and catching those spikes early is the difference between adjusting spend and burning budget overnight.
          </p>
        </li>
      </ul>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The reporting tools represent the lowest-risk entry point into the connectors. They read data without modifying anything, which makes them ideal for a first session. Most advertisers who try the connectors start here, and many find that the reporting capabilities alone justify the setup time.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Campaign management (5 tools)
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Five tools cover the write side of campaign operations: budget editing, campaign pausing, lookalike audience creation, and status changes. Every entity created through these tools lands in PAUSED status, so there’s no risk of accidental live launches. The PAUSED default means you can build and stage campaigns through the connectors, then review and activate manually in Ads Manager.
      </p>
      <img className="w-180 h-117 block max-w-full mt-10 overflow-clip aspect-[1512/982] max-md:w-[20.9375rem] max-md:h-54.5" data-component="image" alt="Screenshot of Meta's UI with campaigm management tools" height="491" sizes="(min-width: 1420px) 100vw, (min-width: 1280px) and (max-width: 1419.98px) 100vw, (min-width: 810px) and (max-width: 1279.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/82e94e5356e2.png" srcSet="/assets/cloned/images/a3dd4a83e4f9.png 512w, /assets/cloned/images/5ed5ff4b84ad.png 1024w, /assets/cloned/images/9c72dacfa755.png 1512w" width="756" />
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The PAUSED-by-default behavior is worth reiterating because it’s the single most important safety mechanism in the system. Unlike some third-party automation tools that offer optional guardrails, the official connectors enforce this at the protocol level. If you create an ad set with a $500 daily budget through the CLI, that ad set sits paused until you deliberately activate it.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Catalog operations (10 tools)
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"The heaviest cluster in the toolkit. Ten of the 29 tools focus on product catalog management. These handle product feed updates, catalog item creation and editing, and inventory synchronization. "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="/solutions/ecommerce">
          For e-commerce operators managing large product catalogs
        </a>
        {" (hundreds or thousands of SKUs), these tools overlap most directly with existing feed management platforms. The value is in consolidation: catalog updates, campaign adjustments, and performance monitoring are all accessible through the same interface rather than spread across three or four separate tools."}
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The practical benefit of having catalog operations alongside campaign management in the same toolkit is the ability to catch and fix mismatches. A product goes out of stock, but its ad set is still running. A price changes in your store, but the catalog feed hasn’t synced. These are the small operational gaps that waste spend silently, and the connectors surface them within the same session where you’re already reviewing performance.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Signal diagnostics (3 account + 4 dataset tools)
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"Seven tools handle signal health monitoring: three for account-level diagnostics and four for dataset operations. In practice, these tools let you "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://www.facebook.com/business/help/952192354843755" target="_blank">
          check whether your Meta Pixel is firing correctly
        </a>
        , audit your Conversions API (CAPI) event coverage, and monitor the quality of the conversion signals feeding Meta’s delivery algorithm.
      </p>
      <img className="w-180 h-117 block max-w-full mt-10 overflow-clip aspect-[1512/982] max-md:w-[20.9375rem] max-md:h-54.5" data-component="image" alt="Screenshot of Meta's Capi UI" height="491" sizes="(min-width: 1420px) 100vw, (min-width: 1280px) and (max-width: 1419.98px) 100vw, (min-width: 810px) and (max-width: 1279.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/a9214737c271.png" srcSet="/assets/cloned/images/8289a5b430fe.png 512w, /assets/cloned/images/cd07caadd178.png 1024w, /assets/cloned/images/f51893f3c886.png 1512w" width="756" />
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="/blog/meta-capi-guide">
          Post-iOS-14 signal quality remains one of the most persistent pain points in paid social
        </a>
        . Before these connectors, diagnosing Pixel and CAPI issues required either manual debugging through the Pixel Helper browser extension or hiring a specialist.
      </p>
      <h2 className="block mt-8 text-color-002 [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-[2rem] leading-10 tracking-[-0.4px] text-left [font-feature-settings:'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] max-lg:text-[1.75rem] max-lg:leading-[2.1875rem] max-lg:tracking-[-0.3px] 2xl:tracking-[-0.65px]" data-component="heading" dir="ltr">
        <strong className="inline">
          How to get started
        </strong>
      </h2>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Both paths start with the same prerequisite: a Meta Business account with OAuth access to the ad accounts you want to manage. From there, the setup diverges depending on which interface you choose.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Setting up the MCP Server (5 to 7 minutes)
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"The MCP path is the faster of the two. You’ll need an "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://modelcontextprotocol.io/clients" target="_blank">
          MCP-compatible client installed on your machine
        </a>
        . Claude Desktop and ChatGPT both support MCP connections.
      </p>
      <ol className="block relative mt-10 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] [list-style-type:decimal] list-outside" dir="auto">
        <li className="list-item pl-5.5 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] [list-style-type:none] 2xl:pl-6 2xl:text-lg 2xl:leading-[1.8125rem]" data-ditto-id="style-li">
          <p className="block">
            Open your MCP client and navigate to the server configuration settings.
          </p>
        </li>
        <li className="list-item pl-5.5 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] [list-style-type:none] 2xl:pl-6 2xl:text-lg 2xl:leading-[1.8125rem]" data-ditto-id="style-li-2">
          <p className="block">
            {"Add a new MCP server using the endpoint "}
            <strong className="inline">
              mcp.facebook.com/ads
            </strong>
            .
          </p>
        </li>
        {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} meta={ListRow2_meta[i]} />)}
      </ol>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Setup time runs around 5 to 7 minutes in practitioner estimates, mostly spent on the OAuth authorization step.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Installing the CLI (10 to 15 minutes)
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The CLI path takes longer because it involves a local installation.
      </p>
      <ol className="block relative mt-10 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] [list-style-type:decimal] list-outside" dir="auto">
        <li className="list-item pl-5.5 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] [list-style-type:none] 2xl:pl-6 2xl:text-lg 2xl:leading-[1.8125rem]" data-ditto-id="style-li-3">
          <p className="block">
            Install the Meta Ads CLI package via npm.
          </p>
        </li>
        <li className="list-item pl-5.5 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] [list-style-type:none] 2xl:pl-6 2xl:text-lg 2xl:leading-[1.8125rem]" data-ditto-id="style-li-4">
          <p className="block">
            {"Run "}
            <strong className="inline">
              meta auth login
            </strong>
            {" in your terminal. This opens the same browser-based OAuth prompt as the MCP path."}
          </p>
        </li>
        {listRow2Data2.map((d, i) => <ListRow2 key={i} d={d} meta={ListRow2_meta2[i]} />)}
      </ol>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The extra time (10 to 15 minutes in practitioner estimates) comes from the npm installation and Python version verification steps. Once installed, subsequent sessions start instantly.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          The old way vs the new way
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"Before the connectors, accessing the Marketing API programmatically meant creating a "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://developers.meta.com/" target="_blank">
          Meta Developer App
        </a>
        , submitting it for App Review, waiting days for approval, and manually configuring permissions for each ad account. The process took 25 minutes or more of active setup, and the approval wait could stretch the total timeline to days or even weeks.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The new path collapses that entire process into an OAuth prompt. Click authorize, select your accounts, and you’re connected. No Developer App to create, no App Review to pass, and no permissions to configure manually. The total time from “I want API access” to “I’m pulling data” dropped from days to minutes.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        For agencies onboarding new clients, this is particularly significant. The old flow meant that adding a new client’s ad accounts required re-running the Developer App configuration or extending existing permissions through App Review. The new flow means onboarding a new client’s accounts takes the same 5 to 7 minutes as the first connection: authorize via OAuth, grant access to the relevant accounts, and start working.
      </p>
      <h2 className="block mt-8 text-color-002 [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-[2rem] leading-10 tracking-[-0.4px] text-left [font-feature-settings:'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] max-lg:text-[1.75rem] max-lg:leading-[2.1875rem] max-lg:tracking-[-0.3px] 2xl:tracking-[-0.65px]" data-component="heading" dir="ltr">
        <strong className="inline">
          Practical workflows by role
        </strong>
      </h2>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The connectors fit into each role's daily routine in a different way. Here's how the three core advertising roles put them to work.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          For media buyers: the morning performance check
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="auto">
        {"You open Claude Desktop at 8 AM and run one query against all your active accounts. Within seconds you "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="/solutions/dtc-brands">
          see which campaigns paced ahead of budget
        </a>
        , which ad sets saw CPM spikes, and which ads crossed your CPA threshold. The same read in Ads Manager means opening each account separately, exporting CSVs, and building the summary yourself.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="auto">
        When something looks off, the flow is:
      </p>
      <ol className="block relative mt-10 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] [list-style-type:decimal] list-outside" dir="auto">
        {listRow2Data3.map((d, i) => <ListRow2 key={i} d={d} meta={ListRow2_meta3[i]} />)}
      </ol>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="auto">
        Total time drops from roughly 45 minutes to 15. The change is about staying in one environment instead of toggling between Ads Manager tabs, spreadsheet exports, and Slack threads.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          For agency owners: the client reporting stack
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Your weekly client reporting used to involve pulling data from each account separately, assembling it into a template, and reviewing it before sending. With the MCP Server, you generate cross-account performance summaries in a single session. The connectors pull metrics across all client accounts you have OAuth access to, and you can ask follow-up questions (“Which client’s CPA increased the most week over week?”) without leaving the chat.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"Beyond reporting, the connectors shift the agency's operational model. The Pixel and CAPI diagnostic tools let you audit signal health across client accounts proactively, surfacing issues before they degrade campaign performance. "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="/tools/ad-testing">
          Batch creative test launches
        </a>
        {" via CLI let junior team members execute at scale without deep Ads Manager expertise."}
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          For DTC brand operators: catalog and signal automation
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"If you run an e-commerce brand with a product catalog of any size, the catalog operations tools are where the connectors pay for themselves fastest. "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="/blog/ai-agents-for-ecommerce-advertising">
          You can sync product feeds
        </a>
        , run catalog diagnostics to find broken listings or out-of-stock items still appearing in ads, and update catalog data without switching to a separate feed management platform.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        {"The signal diagnostic tools are equally valuable. You check whether your Pixel is firing on all key events, confirm that your CAPI integration is sending matching event data, and catch signal gaps before they affect delivery. Cleaner signals and a well-maintained catalog are the "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="/blog/meta-advantage-creative-best-practices-for-2026">
          operational foundation that makes Advantage+ Shopping Campaigns perform better
        </a>
        .
      </p>
      <img className="w-180 h-117 block max-w-full mt-10 overflow-clip aspect-[1512/982] max-md:w-[20.9375rem] max-md:h-54.5" data-component="image" alt="Screenshot of Meta's UI and settings" height="491" sizes="(min-width: 1420px) 100vw, (min-width: 1280px) and (max-width: 1419.98px) 100vw, (min-width: 810px) and (max-width: 1279.98px) 100vw, (max-width: 809.98px) 100vw" src="/assets/cloned/images/b9d17b7bc792.png" srcSet="/assets/cloned/images/230026abddae.png 512w, /assets/cloned/images/33836e823ee2.png 1024w, /assets/cloned/images/819e44a18a20.png 1512w" width="756" />
      <h2 className="block mt-8 text-color-002 [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-[2rem] leading-10 tracking-[-0.4px] text-left [font-feature-settings:'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] max-lg:text-[1.75rem] max-lg:leading-[2.1875rem] max-lg:tracking-[-0.3px] 2xl:tracking-[-0.65px]" data-component="heading" dir="ltr">
        <strong className="inline">
          What the connectors can’t do yet
        </strong>
      </h2>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The connectors are a beta product with real constraints. Knowing where they stop is as important as knowing what they do.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Beta capability gaps
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://developers.facebook.com/documentation/ads-commerce/marketing-api" target="_blank">
          Several features of the Marketing API aren’t yet exposed
        </a>
        {" through the connectors. Audience Network reservation buys, branded content tools, and some lift studies remain inaccessible as of May 2026. These are beta-stage omissions rather than architectural limits. Meta may close them as the connector surface expands."}
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Structural limitations
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The connectors automate workflow. Campaign optimization stays under Meta's control. Three gaps worth knowing:
      </p>
      <ul className="block relative mt-10 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.1875rem] [list-style-type:disc] list-outside" dir="auto">
        {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
      </ul>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Practical cost: the token tax
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        MCP sessions consume input tokens on tool descriptions before the model writes a single word back. Community benchmarks put the overhead at roughly 55,000 tokens for a 58-tool profile; Meta's 29 tools use less on their own, but the cost adds up when other connectors are loaded alongside it across multiple sessions and accounts daily. For individual users, the overhead is modest at current API pricing, but it scales with session frequency. The CLI skips this cost entirely, which is one reason the "MCP for analysis, CLI for execution" split makes economic sense on top of functional sense.
      </p>
      <h3 className="block mt-6 text-color-002 [font-family:Geist,_'Geist_Placeholder',_sans-serif] text-2xl leading-[2.125rem] tracking-[-0.1px] text-left [font-feature-settings:'salt',_'ss01',_'ss02'] max-lg:text-lg max-lg:leading-[1.5625rem] 2xl:text-[1.375rem] 2xl:leading-[1.9375rem]" data-component="heading" dir="ltr">
        <strong className="inline">
          Compliance risks that remain
        </strong>
      </h3>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The official connectors reduce one major compliance risk (unauthorized API access), but three ban vectors persist. Content policy violations from AI-generated ad creative can still trigger account suspensions. Aggressive automation that hits Meta’s rate limits can flag accounts for review. And unauthorized scope escalation, where an AI agent attempts actions beyond its granted permissions, remains a risk regardless of the access path.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="auto">
        {"Early experimenters learned this the hard way. Before the official connectors launched, at least one advertiser using a third-party MCP had their ad account permanently banned. "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://digiday.com/marketing/meta-opens-its-ad-ecosystem-to-third-party-ai-tools/" target="_blank">
          Digiday separately reported
        </a>
        {" on the broader pattern of account restrictions linked to unofficial AI tool integrations. David Parrottino, a Meta employee, has since "}
        <a className="inline text-primary cursor-pointer hover:border-color-004 hover:text-color-004 hover:outline-color-004 hover:[text-decoration-color:var(--color-004)] hover:underline" data-component="link" href="https://ppc.land/meta-opens-its-ad-system-to-claude-and-chatgpt-with-new-ai-connectors/" target="_blank">
          directed advertisers to the official connectors as the compliance-safe route
        </a>
        . The official path removes the "unauthorized access" risk, but it doesn't eliminate the need for human review of what the connectors produce
      </p>
      <h2 className="block mt-8 text-color-002 [font-family:'Source_Serif_4_Variable',_'Source_Serif_4_Variable_Placeholder',_serif] text-[2rem] leading-10 tracking-[-0.4px] text-left [font-feature-settings:'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] max-lg:text-[1.75rem] max-lg:leading-[2.1875rem] max-lg:tracking-[-0.3px] 2xl:tracking-[-0.65px]" data-component="heading" dir="ltr">
        <strong className="inline">
          What to do next
        </strong>
      </h2>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        The operating split is straightforward: MCP for analysis, CLI for execution. Start with whichever side matches your most immediate need.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Media buyers should connect the MCP Server through Claude Desktop or ChatGPT and run a morning performance check across your accounts. That single use case replaces the most time-consuming part of most buyers’ daily routine, and it requires nothing beyond the OAuth connection.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Agency owners can start with MCP for cross-client reporting and pilot the CLI for batch operations. The connectors are most valuable at scale, and agency workflows are where that scale already exists.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        DTC brand operators should connect through MCP and run a catalog diagnostic followed by a signal health check. Those two workflows address the most common operational gaps that silently degrade Advantage+ Shopping Campaign performance.
      </p>
      <p className="block mt-2 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] 2xl:text-lg 2xl:leading-[1.8125rem]" dir="ltr">
        Three things to watch going forward: Meta’s pricing announcement for post-beta access, the closure of beta capability gaps (lead forms, branded content tools, lift studies), and broader MCP adoption across platforms. Amazon Ads MCP moved to open beta in February 2026. Google Ads MCP continues to evolve. The unified multi-platform management layer that these protocols enable is getting closer to reality.
      </p>
    </div>
  );
}
