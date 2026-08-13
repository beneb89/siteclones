/** Five Cli Mcp section. */
export default function FiveCliMcpSection() {
  return (
    <section className="block">
      <h2 className="block mt-22.5 mb-[1.6875rem] text-4xl font-bold leading-[2.6875rem] tracking-[-0.72px] max-md:mt-[4.0625rem] max-md:mb-[19.5px] max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:tracking-[-0.52px] md:max-lg:mt-[4.6875rem] md:max-lg:mb-[22.5px] md:max-lg:text-3xl md:max-lg:leading-9 md:max-lg:tracking-[-0.6px]" data-component="heading" id="the-five-cli--mcp-workflows-that-pay-back-in-week-one">
        The Five CLI + MCP Workflows That Pay Back in Week One
      </h2>
      {" "}
      <p className="block mb-5">
        Baker’s CLI + MCP Operating Framework prioritises workflows by the gap between current manual time and post-CLI time.
      </p>
      {" "}
      <article className="block">
        <h3 className="block mt-12 mb-3 text-2xl font-semibold leading-[1.9375rem] tracking-[-0.24px] max-md:mt-10 max-md:mb-2.5 max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.2px] md:max-lg:mt-11 md:max-lg:mb-[0.6875rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-0.22px]" data-component="heading" id="workflow-1-daily-creative-fatigue-audit">
          Workflow 1: Daily Creative Fatigue Audit
        </h3>
        {" "}
        <p className="block mb-5">
          {"Pull hook rate, hold rate and 7-day frequency for every active ad. Flag anything below the thresholds Ralph Burns published (hook rate <25%, hold rate <30%) and anything above prospecting frequency cap (3 per 7 days) [5]. Pre-CLI: 45 minutes of clicking. With CLI + Claude: a 30-second natural-language ask that returns a ranked pause list."}
        </p>
        {" "}
        <pre className="block my-6 py-4 px-5 rounded-lg overflow-auto text-color-002 whitespace-pre text-nowrap bg-clr-1">
          <code className="inline [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem]">
            <span className="inline">
              <span className="inline">
                meta ads insights get \
              </span>
            </span>
            {"\n"}
            <span className="inline">
              <span className="inline">
                {"  --level ad \\"}
              </span>
            </span>
            {"\n"}
            <span className="inline">
              <span className="inline">
                {"  --fields=ad_name,impressions,video_3s_rate,video_15s_rate,frequency \\"}
              </span>
            </span>
            {"\n"}
            <span className="inline">
              <span className="inline">
                {"  --date-preset last_7d \\"}
              </span>
            </span>
            {"\n"}
            <span className="inline">
              <span className="inline">
                {"  --output json"}
              </span>
            </span>
          </code>
        </pre>
        {" "}
      </article>
      {" "}
      <article className="block">
        <h3 className="block mt-12 mb-3 text-2xl font-semibold leading-[1.9375rem] tracking-[-0.24px] max-md:mt-10 max-md:mb-2.5 max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.2px] md:max-lg:mt-11 md:max-lg:mb-[0.6875rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-0.22px]" data-component="heading" id="workflow-2-weekly-andromeda-diagnostics">
          Workflow 2: Weekly Andromeda Diagnostics
        </h3>
        {" "}
        <p className="block mb-5">
          {"Andromeda needs 6+ distinct visual concepts per campaign and consolidated ad set structures [6]. The CLI lists creatives with their "}
          <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
            entity_id
          </code>
          {", so a Claude prompt can count distinct concepts per campaign and flag thin libraries before delivery degrades. See "}
          <a className="inline underline cursor-pointer hover:border-muted hover:text-muted hover:outline-muted hover:[text-decoration-color:var(--muted)]" data-component="link" href="/blog/meta-ads-andromeda-algorithm-2026">
            Baker’s Andromeda Adaptation Framework
          </a>
          {" for the underlying thresholds."}
        </p>
        {" "}
      </article>
      {" "}
      <article className="block">
        <h3 className="block mt-12 mb-3 text-2xl font-semibold leading-[1.9375rem] tracking-[-0.24px] max-md:mt-10 max-md:mb-2.5 max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.2px] md:max-lg:mt-11 md:max-lg:mb-[0.6875rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-0.22px]" data-component="heading" id="workflow-3-capi-event-match-quality-monitoring">
          Workflow 3: CAPI Event Match Quality Monitoring
        </h3>
        {" "}
        <p className="block mb-5">
          {"Standard pixel and Shopify-Meta integrations are wrong roughly 56% of the time, which means the algorithm trains on bad signals before any creative or targeting issue matters [7]. The CLI exposes pixel and dataset health through the insights and pixel commands. A scheduled Claude run can post EMQ scores to Slack daily and flag drops below 7.0. See "}
          <a className="inline underline cursor-pointer hover:border-muted hover:text-muted hover:outline-muted hover:[text-decoration-color:var(--muted)]" data-component="link" href="/blog/meta-conversions-api-capi-lead-gen-setup">
            Baker’s CAPI setup guide
          </a>
          .
        </p>
        {" "}
      </article>
      {" "}
      <article className="block">
        <h3 className="block mt-12 mb-3 text-2xl font-semibold leading-[1.9375rem] tracking-[-0.24px] max-md:mt-10 max-md:mb-2.5 max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.2px] md:max-lg:mt-11 md:max-lg:mb-[0.6875rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-0.22px]" data-component="heading" id="workflow-4-bulk-geographic-duplication">
          Workflow 4: Bulk Geographic Duplication
        </h3>
        {" "}
        <p className="block mb-5">
          {"Duplicating ad sets across 10 European countries used to mean 10 manual edits and 30 chances to leave audience expansion or audience network on by default. With the CLI, you template the ad set once in JSON, loop the country code, and run "}
          <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
            meta ads adset create
          </code>
          {" per country with consistent settings. According to Session Media, this single change eliminates the most common source of LinkedIn and Meta misconfiguration in their accounts [4]."}
        </p>
        {" "}
      </article>
      {" "}
      <article className="block">
        <h3 className="block mt-12 mb-3 text-2xl font-semibold leading-[1.9375rem] tracking-[-0.24px] max-md:mt-10 max-md:mb-2.5 max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.2px] md:max-lg:mt-11 md:max-lg:mb-[0.6875rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-0.22px]" data-component="heading" id="workflow-5-encac-reporting-joined-to-crm">
          Workflow 5: ENCAC Reporting Joined to CRM
        </h3>
        {" "}
        <p className="block mb-5">
          {"CLI insights export by "}
          <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
            --date-preset
          </code>
          {" and "}
          <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
            --breakdown
          </code>
          {", then join in shell with a CRM export keyed on "}
          <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
            lead_id
          </code>
          . The result is Effective New Customer Acquisition Cost (excluding repeat buyers, attributed via first-click CAPI) at the campaign level. According to John Moran (Tier 11), ENCAC is the only metric that survives iOS 14, Andromeda first-touch reweighting and cross-channel cannibalisation simultaneously [7]. Baker runs this as a weekly scheduled Claude job with the CLI under MCP.
        </p>
        {" "}
      </article>
      {" "}
    </section>
  );
}
