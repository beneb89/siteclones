import Icon8 from "../svgs/svg-icon8";
import ListRow, { type ListRowData } from "../components/list-row";
import { ListRow_styles } from "../_styles";
const ListRow_data: ListRowData[] = [
    { text: "Read", text2: " — view accounts, campaigns, ad sets, ads, and insights" },
    { text: "Read/write", text2: " — all of the above plus create, edit, and pause campaigns" },
    { text: "Read/write/financial", text2: " — includes billing, payment methods, and spend limit management" }
];
/** Install4Commands section. */
export default function Install4CommandsSection({ listRowData = ListRow_data } = {}) {
  return (
    <div className="block">
      <h2 className="block mt-10 mb-4 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-[1.5rem] tracking-[-0.6px] max-lg:leading-8" data-component="heading" id="install-4-commands-to-connect-claude-code-to-mcpfacebookcomads">
        Install: 4 commands to connect Claude Code to mcp.facebook.com/ads
      </h2>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Prerequisites for the Meta Ads MCP setup: "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="https://docs.anthropic.com/claude/docs/mcp" rel="noopener noreferrer" target="_blank">
          Claude Code
        </a>
        {" installed, a Meta Business Manager account with at least one "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/glossary/ad-account">
          ad account
        </a>
        {" you control."}
      </p>
      {" "}
      <h3 className="block mt-8 mb-3 text-xl leading-7 tracking-[-0.5px]" data-component="heading" id="step-1-add-the-mcp-server-to-your-claude-code-config">
        Step 1 — Add the MCP server to your Claude Code config
      </h3>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Open (or create) your Claude Code MCP config file. On macOS it lives at "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ~/.claude/mcp.json
        </code>
        .
      </p>
      {" "}
      <div className="block relative my-4">
        <div className="w-[3.9375rem] h-6 flex absolute right-0 z-10 py-1 px-2 rounded-bl-[1.2px] items-center gap-2 text-color-002 bg-border">
          <span className="block text-xs leading-4">
            json
          </span>
          <button className="block opacity-50 text-center cursor-pointer hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)]" data-component="button" title="Copy code">
            <Icon8 />
          </button>
        </div>
        <pre className="border border-solid border-border block p-4 rounded-[1.2px] overflow-auto [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap bg-surface">
          <code className="block text-accent text-sm leading-5 before:content-[''] before:hidden after:content-[''] after:hidden">
            {"{\n  \"mcpServers\": {\n    \"meta-ads\": {\n      \"url\": \"https://mcp.facebook.com/ads\",\n      \"transport\": \"http\"\n    }\n  }\n}\n"}
          </code>
        </pre>
      </div>
      {" "}
      <p className="block my-4 text-accent leading-7">
        That's the entire config block. No API keys, no environment variables — OAuth handles auth.
      </p>
      {" "}
      <h3 className="block mt-8 mb-3 text-xl leading-7 tracking-[-0.5px]" data-component="heading" id="step-2-start-claude-code-and-trigger-the-oauth-flow">
        Step 2 — Start Claude Code and trigger the OAuth flow
      </h3>
      {" "}
      <div className="block relative my-4">
        <div className="w-[4.1875rem] h-6 flex absolute right-0 z-10 py-1 px-2 rounded-bl-[1.2px] items-center gap-2 text-color-002 bg-border">
          <span className="block text-xs leading-4">
            bash
          </span>
          <button className="block opacity-50 text-center cursor-pointer hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)]" data-component="button" title="Copy code">
            <Icon8 />
          </button>
        </div>
        <pre className="border border-solid border-border block p-4 rounded-[1.2px] overflow-auto [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap bg-surface">
          <code className="block text-accent text-sm leading-5 before:content-[''] before:hidden after:content-[''] after:hidden">
            {"claude\n"}
          </code>
        </pre>
      </div>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"On first use of any "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          meta-ads
        </code>
        {" tool, Claude Code will surface a login link via "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          mcp_meta_ads_get_login_link
        </code>
        . Click it, log in with the Meta account that owns your ad account, and complete the OAuth consent screen.
      </p>
      {" "}
      <h3 className="block mt-8 mb-3 text-xl leading-7 tracking-[-0.5px]" data-component="heading" id="step-3-pick-your-oauth-scopes-deliberately">
        Step 3 — Pick your OAuth scopes deliberately
      </h3>
      {" "}
      <p className="block my-4 text-accent leading-7">
        Meta's consent screen offers three scope tiers:
      </p>
      {" "}
      <ul className="block my-4 ml-6 [list-style-type:disc] list-outside">
        {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
      </ul>
      {" "}
      <p className="block my-4 text-accent leading-7">
        For a first connection, grant read/write but not financial. You want the agent to be able to draft and pause campaigns without being able to touch billing. See the permissions section below for the full audit-trail pattern.
      </p>
      {" "}
      <h3 className="block mt-8 mb-3 text-xl leading-7 tracking-[-0.5px]" data-component="heading" id="step-4-verify-the-connection">
        Step 4 — Verify the connection
      </h3>
      {" "}
      <pre className="border border-solid border-border block my-4 p-4 rounded-[1.2px] overflow-auto [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap bg-surface">
        <code className="inline py-0.5 px-1.5 rounded-sm text-accent text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          {"ads_get_ad_accounts\n"}
        </code>
      </pre>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Ask Claude Code to call this tool. It should return a list of your Business Manager's ad accounts with IDs and names. If you see accounts, you're connected. If you get an auth error, re-run "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          mcp_meta_ads_get_login_link
        </code>
        {" and repeat the OAuth flow."}
      </p>
    </div>
  );
}
