import Tile2, { type Tile2Data } from "../components/tile2";
const Tile2_data: Tile2Data[] = [
    { text: "ROAS chasing", text2: "Model defunds prospecting to feed retargeting, starving the funnel", text3: "Constrain the toolset so the model cannot rebalance budget across campaigns autonomously" },
    { text: "Asset upload", text2: "Model cannot upload video/image files in remote environments", text3: "Keep humans on creative upload; CLI handles structural ops only" },
    { text: "Locale errors", text2: "Model generates wrong-locale voiceovers or copy", text3: "Pass locale as a required parameter in any creative-build prompt" }
];
/** Failure Modes To section. */
export default function FailureModesToSection({ tile2Data = Tile2_data } = {}) {
  return (
    <section className="block">
      <h2 className="block mt-22.5 mb-[1.6875rem] text-4xl font-bold leading-[2.6875rem] tracking-[-0.72px] max-md:mt-[4.0625rem] max-md:mb-[19.5px] max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:tracking-[-0.52px] md:max-lg:mt-[4.6875rem] md:max-lg:mb-[22.5px] md:max-lg:text-3xl md:max-lg:leading-9 md:max-lg:tracking-[-0.6px]" data-component="heading" id="failure-modes-to-plan-for">
        Failure Modes to Plan For
      </h2>
      {" "}
      <p className="block mb-5">
        The CLI is deterministic. The model orchestrating it is not. The Manus AI Meta automation analysis (Felipe Vergara) documents five failure modes that apply directly to any LLM-driven CLI workflow [8]:
      </p>
      {" "}
      <table className="table my-[1.3125rem] text-sm leading-[1.375rem] [border-collapse:collapse] [border-spacing:2px]">
        <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
          <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
            <th className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle font-semibold text-left bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              Failure Mode
            </th>
            <th className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle font-semibold text-left bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              What Happens
            </th>
            <th className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle font-semibold text-left bg-surface-2 [border-collapse:collapse] [border-spacing:2px]">
              CLI Mitigation
            </th>
          </tr>
        </thead>
        <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
          <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
            <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
              Budget formatting
            </td>
            <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
              Model inputs monthly budget as daily, risking 30x overspend
            </td>
            <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
              {"Validate "}
              <code className="inline py-0.5 px-[0.3125rem] rounded-sm [font-family:ui-monospace,_monospace] text-xs leading-[1.25rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                --daily-budget
              </code>
              {" is < monthly cap before exec; PAUSED default catches it"}
            </td>
          </tr>
          <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
            <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
              Objective mixing
            </td>
            <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
              Model proposes two objectives per campaign, which Meta rejects
            </td>
            <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
              {"Lint the JSON plan before calling "}
              <code className="inline py-0.5 px-[0.3125rem] rounded-sm [font-family:ui-monospace,_monospace] text-xs leading-[1.25rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
                campaign create
              </code>
              ; Meta API will also reject
            </td>
          </tr>
          {tile2Data.map((d, i) => <Tile2 key={i} d={d} />)}
        </tbody>
      </table>
      {" "}
      <p className="block mb-5">
        Baker’s rule: the CLI runs in a sandboxed environment with a kill switch, write-enabled commands require human approval, and the assistant’s first job on any new account is read-only audit, not write-back optimisation.
      </p>
      {" "}
    </section>
  );
}
