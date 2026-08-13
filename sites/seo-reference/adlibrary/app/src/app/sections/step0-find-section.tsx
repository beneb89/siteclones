/** Step0Find section. */
export default function Step0FindSection() {
  return (
    <div className="block">
      <h2 className="block mt-10 mb-4 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-[1.5rem] tracking-[-0.6px] max-lg:leading-8" data-component="heading" id="step-0-find-the-angle-on-adlibrary-before-you-wire-mcp">
        Step 0: find the angle on adlibrary before you wire MCP
      </h2>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Before you run a single install command, do this: go to "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/features/unified-ad-search">
          adlibrary's unified ad search
        </a>
        {" and pull the top 20 active ads in your category. Look for the hook pattern that keeps recurring across different brands. That's the angle the algorithm has rewarded — and it's the input your MCP agent needs before it writes a single campaign brief."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"Here's what happens when buyers skip this step: Claude Code writes a campaign structure that's technically correct but creatively generic. The "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/glossary/advantage-plus">
          Advantage+
        </a>
        {" catalog knows it's seen this hook before. The "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/glossary/learning-phase">
          learning phase
        </a>
        {" runs long, CPMs spike, and you blame the agent. The agent didn't fail — the brief did."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/features/ad-timeline-analysis">
          Ad timeline analysis
        </a>
        {" makes this concrete: it shows whether a competitor has been running a specific hook for four days or four weeks. A four-week run at consistent spend is strong signal. A four-day run is a test that hasn't proven anything yet. That distinction — temporal signal — is exactly what an MCP agent can't generate on its own. It can build what you hand it. It can't observe what's working in-market without a "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/use-cases/ad-data-for-ai-agents">
          data layer for AI agents
        </a>
        .
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        Get the angle first. Then build.
      </p>
    </div>
  );
}
