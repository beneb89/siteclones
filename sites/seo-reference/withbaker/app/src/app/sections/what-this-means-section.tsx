/** What This Means section. */
export default function WhatThisMeansSection() {
  return (
    <section className="block">
      <h2 className="block mt-22.5 mb-[1.6875rem] text-4xl font-bold leading-[2.6875rem] tracking-[-0.72px] max-md:mt-[4.0625rem] max-md:mb-[19.5px] max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:tracking-[-0.52px] md:max-lg:mt-[4.6875rem] md:max-lg:mb-[22.5px] md:max-lg:text-3xl md:max-lg:leading-9 md:max-lg:tracking-[-0.6px]" data-component="heading" id="what-this-means-for-agencies-and-in-house-teams">
        What This Means for Agencies and In-House Teams
      </h2>
      {" "}
      <p className="block mb-5">
        The CLI does not commoditise Meta Ads expertise. It commoditises the parts of Meta Ads work that were never expertise: clicking through Ads Manager, copy-pasting reports, manually duplicating ad sets. The premium shifts to:
      </p>
      {" "}
      <ul className="block mb-5 pl-6 [list-style-type:disc] list-outside">
        <li className="list-item mb-1.5">
          <strong className="inline font-bold">
            Offer and creative angle.
          </strong>
          {" The CLI cannot invent a hook. The Baker EPIC angle framework (Emotional, Practical, Identity, Critical) still drives 80% of the lift on a scaled account."}
        </li>
        <li className="list-item mb-1.5">
          <strong className="inline font-bold">
            Tracking architecture.
          </strong>
          {" Garbage in, garbage out applies to AI agents as much as to the algorithm. CAPI and first-click attribution remain the highest-leverage technical work [7]."}
        </li>
        <li className="list-item mb-1.5">
          <strong className="inline font-bold">
            Account strategy.
          </strong>
          {" Andromeda consolidation, audience expansion timing and the budget tier audit calibration in "}
          <a className="inline underline cursor-pointer hover:border-muted hover:text-muted hover:outline-muted hover:[text-decoration-color:var(--muted)]" data-component="link" href="/blog/meta-ads-audit-checklist-2026">
            Baker’s audit checklist
          </a>
          {" still need a human strategist."}
        </li>
      </ul>
      {" "}
      <p className="block mb-5">
        The teams that win in the CLI era are the ones that put their best frameworks behind the MCP, not the ones that try to compete with the CLI on speed.
      </p>
      {" "}
    </section>
  );
}
