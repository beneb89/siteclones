/** Permissions Audit Trails section. */
export default function PermissionsAuditTrailsSection() {
  return (
    <div className="block">
      <h2 className="block mt-10 mb-4 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-[1.5rem] tracking-[-0.6px] max-lg:leading-8" data-component="heading" id="permissions-audit-trails-and-the-readonly-safety-pattern">
        Permissions, audit trails, and the read-only safety pattern
      </h2>
      {" "}
      <p className="block my-4 text-accent leading-7">
        The Meta Ads MCP OAuth scope conversation is the one most setup tutorials skip. Get it wrong and you've given an AI agent the ability to move budget across accounts or change payment methods.
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        <strong className="inline font-normal">
          The three-tier model:
        </strong>
      </p>
      {" "}
      <ul className="block my-4 ml-6 [list-style-type:disc] list-outside">
        <li className="list-item pl-1 text-muted leading-7">
          <strong className="inline font-normal">
            Read
          </strong>
          {" — safe for any automated agent. Use this for reporting loops, benchmarking, competitive monitoring via "}
          <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/features/api-access">
            API access
          </a>
          .
        </li>
        <li className="list-item mt-2 pl-1 text-muted leading-7">
          <strong className="inline font-normal">
            Read/write
          </strong>
          {" — appropriate for supervised agents that draft campaigns for human review. The paused-first pattern above is your guard rail."}
        </li>
        <li className="list-item mt-2 pl-1 text-muted leading-7">
          <strong className="inline font-normal">
            Read/write/financial
          </strong>
          {" — only appropriate for tightly scoped workflows with an explicit human approval step for any financial action. Don't grant this to a general-purpose agent."}
        </li>
      </ul>
      {" "}
      <p className="block my-4 text-accent leading-7">
        <strong className="inline font-normal">
          The audit trail question:
        </strong>
        {" Meta Business Manager logs OAuth authorizations under Settings > Security > Active Sessions. For team accounts, create a dedicated Business Manager user for MCP access — not your personal admin account. Agent activity stays attributable separately from human actions in the account log."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        <strong className="inline font-normal">
          The read-only safety pattern:
        </strong>
        {" For monitoring and reporting agents — think "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/meta-ads-mcp-247-agent">
          always-on Meta Ads agents
        </a>
        {" running on a schedule — grant read scope only. These agents can pull "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ads_get_opportunity_score
        </code>
        {" daily, flag under-performing ad sets, and surface "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/glossary/dynamic-creative">
          dynamic creative
        </a>
        {" fatigue signals without any write exposure. The workflow post at "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/competitor-ad-to-meta-campaign-mcp">
          competitor ad to Meta campaign pipeline
        </a>
        {" shows how to chain adlibrary data into a read-only monitoring loop before any write tools fire."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"For "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/meta-ads-campaign-automation">
          Meta ads campaign automation
        </a>
        {" that involves live budget changes, the minimum viable safety pattern is: read/write scope, PAUSED state on all agent-created objects, and a Slack or email approval gate before any status change to ACTIVE."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"One more thing that often gets missed: "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ads_get_opportunity_score
        </code>
        {" is a read tool that calls Meta's internal scoring model against your account. It can surface campaigns where "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/glossary/advantage-plus">
          Advantage+
        </a>
        {" signals are strong but your manual targeting is constraining delivery. Run it before you restructure anything — it's a fast signal on where the algorithm wants to go before you let an agent "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/how-to-launch-multiple-ads-quickly">
          launch multiple ads quickly
        </a>
        {". Once the agent fires that launch, the "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/meta-ads-mcp-vs-ads-manager">
          MCP vs Ads Manager
        </a>
        {" call shapes what comes next — speed-bound bulk work to MCP, judgment-bound creative QA back to the UI. See also: "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/guides/facebook-campaign-template-systems">
          campaign template system
        </a>
        .
      </p>
    </div>
  );
}
