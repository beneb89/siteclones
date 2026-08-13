/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <div className="block">
      <p className="block mb-5">
        {"The Meta Ads CLI is an official command-line tool Meta released on April 29, 2026 that wraps the Meta Marketing API into terminal commands and lets AI agents like Claude and ChatGPT manage campaigns through an MCP server. At Baker, we have rebuilt our Meta Ads operations around the new CLI for B2B SaaS clients spending from $3K to $250K per month, and the headline finding is that "}
        <strong className="inline font-bold">
          70-80% of the recurring work in a Meta account (audits, reporting, duplication, fatigue checks) can now be driven from natural language with deterministic execution
        </strong>
        . This guide is Baker’s CLI + MCP Operating Framework: what the CLI actually does, how to wire it to Claude or ChatGPT safely, and the five workflows that pay back in week one.
      </p>
      {" "}
    </div>
  );
}
