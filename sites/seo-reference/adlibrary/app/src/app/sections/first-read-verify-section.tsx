/** First Read Verify section. */
export default function FirstReadVerifySection() {
  return (
    <div className="block">
      <h2 className="block mt-10 mb-4 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-[1.5rem] tracking-[-0.6px] max-lg:leading-8" data-component="heading" id="first-read-verify-the-connection-without-touching-live-spend">
        First read: verify the connection without touching live spend
      </h2>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Once your Meta Ads MCP connection is confirmed via "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ads_get_ad_accounts
        </code>
        , run two more read queries before you touch any write tools.
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        <strong className="inline font-normal">
          Query 1 — Industry benchmark:
        </strong>
      </p>
      {" "}
      <pre className="border border-solid border-border block my-4 p-4 rounded-[1.2px] overflow-auto [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap bg-surface">
        <code className="inline py-0.5 px-1.5 rounded-sm text-accent text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          {"ads_insights_industry_benchmark\n"}
        </code>
      </pre>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"This returns category-level CPC, CPM, and CTR benchmarks from Meta's aggregate data. It's a useful sanity check that your account has proper read access, and the numbers give you a baseline for evaluating your own account's performance — relevant if you're using the "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/tools/learning-phase-calculator">
          learning phase calculator
        </a>
        {" to estimate how many conversions you need before an ad set exits learning."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        <strong className="inline font-normal">
          Query 2 — Advertiser context:
        </strong>
      </p>
      {" "}
      <pre className="border border-solid border-border block my-4 p-4 rounded-[1.2px] overflow-auto [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap bg-surface">
        <code className="inline py-0.5 px-1.5 rounded-sm text-accent text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          {"ads_insights_advertiser_context\n"}
        </code>
      </pre>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"This pulls your account's historical performance context — recent CPMs, conversion volume, audience overlap signals. Cross-reference this against in-market ad data from adlibrary's "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/features/api-access">
          API access layer
        </a>
        {" — together they give you a read-side picture of account health and competitor signals."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        At this point you have confirmed read access. Nothing you've done has touched live spend. Good place to pause and review what the agent is seeing before you grant it write tools in your prompts.
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"For a deeper look at "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/agentic-marketing-workflows-with-claude-code">
          agentic marketing workflows with Claude Code
        </a>
        , including how to chain read queries into automated reporting loops, that post walks through the orchestration patterns in detail.
      </p>
    </div>
  );
}
