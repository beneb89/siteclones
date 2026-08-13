/** First Write Drafting section. */
export default function FirstWriteDraftingSection() {
  return (
    <div className="block">
      <h2 className="block mt-10 mb-4 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-[1.5rem] tracking-[-0.6px] max-lg:leading-8" data-component="heading" id="first-write-drafting-a-paused-campaign-endtoend">
        First write: drafting a paused campaign end-to-end
      </h2>
      {" "}
      <p className="block my-4 text-accent leading-7">
        The safest Meta Ads MCP write pattern on day one: instruct Claude Code to create the full campaign structure — campaign, ad set, ad — with every object in PAUSED state. You review in Ads Manager before activating anything.
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        Here's a prompt template that enforces this:
      </p>
      {" "}
      <pre className="border border-solid border-border block my-4 p-4 rounded-[1.2px] overflow-auto [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] whitespace-pre text-nowrap bg-surface">
        <code className="inline py-0.5 px-1.5 rounded-sm text-accent text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          {"Using the meta-ads MCP server, create a campaign in account [ACCOUNT_ID] with the following structure. Set status = PAUSED on every object. Do not activate anything.\n\nCampaign:\n- Name: [CAMPAIGN_NAME]\n- Objective: OUTCOME_TRAFFIC\n- Status: PAUSED\n- Special ad categories: none\n\nAd set:\n- Name: [AD_SET_NAME]\n- Daily budget: 5000 (cents)\n- Targeting: broad, [COUNTRY_CODE]\n- Bid strategy: LOWEST_COST_WITHOUT_CAP\n- Status: PAUSED\n\nAd:\n- Name: [AD_NAME]\n- Creative: [describe your creative briefly]\n- Status: PAUSED\n"}
        </code>
      </pre>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Claude Code will call "}
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
          ads_create_campaign
        </code>
        , then build the ad set and ad in sequence. All three objects land in your Ads Manager in PAUSED state. You can inspect targeting, budget, creative spec, and placement settings before a human clicks Publish.
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"This is the core workflow covered in depth at "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/meta-ads-mcp-adlibrary-workflows">
          10 Meta Ads MCP workflows for media buyers
        </a>
        {" — that post has ready-to-run prompt templates for bulk ad set creation, creative testing matrices, and audience exclusion management."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"For "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/automated-facebook-ad-launching">
          automated Facebook ad launching
        </a>
        {" at scale — where you're launching 20+ ad variations in a single session — the paused-first pattern is not just a safety measure; it's a quality gate. Review 20 AI-drafted ads at once, reject or edit the weak ones, activate the strong set in a batch. That's a different speed of iteration than building one ad at a time."}
      </p>
    </div>
  );
}
