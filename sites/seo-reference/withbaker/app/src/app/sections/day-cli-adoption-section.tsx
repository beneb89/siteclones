import Tile2, { type Tile2Data } from "../components/tile2";
const Tile2_data2: Tile2Data[] = [
    { text: "Week 1", text2: "Install CLI, scope read-only token, expose via MCP", text3: "Claude can answer questions about the account" },
    { text: "Week 2", text2: "Wire workflows 1 and 2 (creative fatigue, Andromeda)", text3: "Daily audit posted to Slack, no human clicks" },
    { text: "Week 3", text2: "Add workflow 3 (CAPI EMQ) and workflow 5 (ENCAC)", text3: "CRM-joined cost-per-new-customer report weekly" },
    { text: "Week 4", text2: "Introduce write-enabled commands behind approval", text3: "Bulk pause and bulk duplicate, human-approved" }
];
/** Day Cli Adoption section. */
export default function DayCliAdoptionSection({ tile2Data2 = Tile2_data2 } = {}) {
  return (
    <section className="block">
      <h2 className="block mt-22.5 mb-[1.6875rem] text-4xl font-bold leading-[2.6875rem] tracking-[-0.72px] max-md:mt-[4.0625rem] max-md:mb-[19.5px] max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:tracking-[-0.52px] md:max-lg:mt-[4.6875rem] md:max-lg:mb-[22.5px] md:max-lg:text-3xl md:max-lg:leading-9 md:max-lg:tracking-[-0.6px]" data-component="heading" id="the-30-day-cli-adoption-plan">
        The 30-Day CLI Adoption Plan
      </h2>
      {" "}
      <table className="w-full table my-[1.3125rem] text-sm leading-[1.375rem] [border-collapse:collapse] [border-spacing:2px]">
        <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
          <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
            <th className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle font-semibold text-left bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              Week
            </th>
            <th className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle font-semibold text-left bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              Focus
            </th>
            <th className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle font-semibold text-left bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              Deliverable
            </th>
          </tr>
        </thead>
        <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
          {tile2Data2.map((d, i) => <Tile2 key={i} d={d} />)}
        </tbody>
      </table>
      {" "}
      <p className="block mb-5">
        Multi-expert consensus (Pipboard, Session Media, Google Ads MCP rollout) is that read-only adoption captures most of the productivity gain on its own. Write-enabled automation adds incremental value but multiplies risk if the audit and approval layer is missing [3] [4].
      </p>
      {" "}
    </section>
  );
}
