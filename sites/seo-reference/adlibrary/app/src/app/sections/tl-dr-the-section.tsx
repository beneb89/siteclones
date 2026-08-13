/** Tl Dr The section. */
export default function TlDrTheSection() {
  return (
    <div className="block">
      <blockquote className="border-l-4 border-solid border-l-color-004 block my-4 pl-4 text-color-002 italic leading-7">
        <p className="block my-4 text-accent">
          <strong className="inline font-normal">
            TL;DR:
          </strong>
          {" The Meta Ads MCP server at "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
            mcp.facebook.com/ads
          </code>
          {" exposes 29 Marketing API tools to Claude Code via OAuth 2.0 — no developer app required. Add the config block, complete the OAuth flow, run "}
          <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
            ads_get_ad_accounts
          </code>
          {" to confirm the connection, then let your Meta Ads MCP agent draft campaigns in PAUSED state for human review. Do Step 0 first: find the angle on "}
          <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/">
            adlibrary
          </a>
          {" before you build anything."}
        </p>
        {" "}
      </blockquote>
    </div>
  );
}
