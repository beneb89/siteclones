import Tile, { type TileData } from "../components/tile";
const Tile_data: TileData[] = [
    { text: "Campaigns, ad sets, ads, creatives", text2: "create, list, update, delete (default PAUSED)", text3: "meta ads campaign create --name \"Summer Sale\" --objective OUTCOME_SALES --daily-budget 5000" },
    { text: "Insights", text2: "spend, impressions, CTR, ROAS by date and breakdown", text3: "meta ads insights get --campaign_id CAMPAIGN_ID --fields=impressions,conversions --date-preset last_7d" },
    { text: "Catalogs and product sets", text2: "catalog create, product add, set management", text3: "meta ads catalog create --name \"Q2 SKUs\"" },
    { text: "Conversion pixels", text2: "create pixels, link to ad accounts and catalogs via datasets", text3: "meta ads pixel create --name \"lead-form-v3\"" },
    { text: "Output formats", text2: "table (human), JSON (jq-compatible), TSV (shell pipelines)", text3: "--output json" }
];
/** What The Meta section. */
export default function WhatTheMetaSection({ tileData = Tile_data } = {}) {
  return (
    <section className="block">
      <h2 className="block mt-22.5 mb-[1.6875rem] text-4xl font-bold leading-[2.6875rem] tracking-[-0.72px] max-md:mt-[4.0625rem] max-md:mb-[19.5px] max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:tracking-[-0.52px] md:max-lg:mt-[4.6875rem] md:max-lg:mb-[22.5px] md:max-lg:text-3xl md:max-lg:leading-9 md:max-lg:tracking-[-0.6px]" data-component="heading" id="what-the-meta-ads-cli-actually-does">
        What the Meta Ads CLI Actually Does
      </h2>
      {" "}
      <p className="block mb-5">
        According to Meta’s launch announcement (John Holstein, Matt Mayberry, Andrew Kutsy, Sanjay Patel), the CLI exposes the Meta Marketing API across five surfaces [1]:
      </p>
      {" "}
      <table className="table my-[1.3125rem] text-sm leading-[1.375rem] [border-collapse:collapse] [border-spacing:2px]">
        <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
          <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
            <th className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle font-semibold text-left bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              Surface
            </th>
            <th className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle font-semibold text-left bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              Operations
            </th>
            <th className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle font-semibold text-left bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              Example Command
            </th>
          </tr>
        </thead>
        <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
          {tileData.map((d, i) => <Tile key={i} d={d} />)}
        </tbody>
      </table>
      {" "}
      <article className="block">
        <h3 className="block mt-12 mb-3 text-2xl font-semibold leading-[1.9375rem] tracking-[-0.24px] max-md:mt-10 max-md:mb-2.5 max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.2px] md:max-lg:mt-11 md:max-lg:mb-[0.6875rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-0.22px]" data-component="heading" id="safety-defaults-baked-in">
          Safety defaults baked in
        </h3>
        {" "}
        <ul className="block mb-5 pl-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1.5">
            {"New campaigns, ad sets and ads are created in "}
            <strong className="inline font-bold">
              PAUSED
            </strong>
            {" state. Nothing spends until a human (or a second authenticated step) flips it live [1]."}
          </li>
          <li className="list-item mb-1.5">
            {"Automation flags "}
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              --no-input
            </code>
            {" and "}
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              --force
            </code>
            {" are opt-in, not default. Interactive prompts protect ad-hoc shell sessions from accidental writes."}
          </li>
          <li className="list-item mb-1.5">
            Standard exit codes (
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              0
            </code>
            {" success, "}
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              3
            </code>
            {" auth error, "}
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              4
            </code>
            {" API error) let CI pipelines fail fast and trigger alerts."}
          </li>
          <li className="list-item mb-1.5">
            Tokens and secrets live in environment variables, not flags, keeping credentials out of shell history.
          </li>
        </ul>
        {" "}
      </article>
      {" "}
      <article className="block">
        <h3 className="block mt-12 mb-3 text-2xl font-semibold leading-[1.9375rem] tracking-[-0.24px] max-md:mt-10 max-md:mb-2.5 max-md:text-xl max-md:leading-6.5 max-md:tracking-[-0.2px] md:max-lg:mt-11 md:max-lg:mb-[0.6875rem] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.8125rem] md:max-lg:tracking-[-0.22px]" data-component="heading" id="prerequisites">
          Prerequisites
        </h3>
        {" "}
        <ul className="block mb-5 pl-6 [list-style-type:disc] list-outside">
          <li className="list-item mb-1.5">
            Python 3.12 or newer
          </li>
          <li className="list-item mb-1.5">
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              pip
            </code>
            {" or "}
            <code className="inline py-0.5 px-[0.35rem] rounded-sm [font-family:ui-monospace,_monospace] text-sm leading-[1.375rem] bg-surface">
              uv
            </code>
            {" for installation"}
          </li>
          <li className="list-item mb-1.5">
            A Meta Business account with Marketing API access
          </li>
          <li className="list-item mb-1.5">
            A system user access token scoped to the ad accounts you want to manage
          </li>
        </ul>
        {" "}
      </article>
      {" "}
    </section>
  );
}
