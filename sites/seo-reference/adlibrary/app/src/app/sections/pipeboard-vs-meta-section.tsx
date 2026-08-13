import Tile, { type TileData } from "../components/tile";
import { Tile_styles } from "../_styles";
const Tile_data: TileData[] = [
    { text: "Auth model", text2: "OAuth 2.0, no developer app needed", text3: "Requires Facebook developer app + access token" },
    { text: "Hosting", text2: "Meta-managed cloud", text3: "Self-hosted or local" },
    { text: "License", text2: "Proprietary (Meta ToS)", text3: "BSL 1.1 — restricts commercial hosting" },
    { text: "Tool coverage", text2: "29 tools, Meta-maintained", text3: "Varies by release; community-maintained" },
    { text: "Setup complexity", text2: "4 commands", text3: "Developer app provisioning + token management" },
    { text: "Audit trail", text2: "OAuth consent logs in Business Manager", text3: "Manual token rotation logging" },
    { text: "Beta risk", text2: "Yes — tool signatures may change", text3: "More stable but less feature velocity" }
];
/** Pipeboard Vs Meta section. */
export default function PipeboardVsMetaSection({ tileData = Tile_data } = {}) {
  return (
    <div className="block">
      <h2 className="block mt-10 mb-4 [font-family:instrumentSerif,_'instrumentSerif_Fallback'] text-[1.5rem] tracking-[-0.6px] max-lg:leading-8" data-component="heading" id="pipeboard-vs-metas-official-server-when-to-pick-which">
        Pipeboard vs Meta's official server: when to pick which
      </h2>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"There is a well-maintained third-party alternative to Meta Ads MCP: "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="https://github.com/pipeboard-co/meta-ads-mcp" rel="noopener noreferrer" target="_blank">
          Pipeboard's meta-ads-mcp
        </a>
        {" on GitHub. It's worth knowing when each option fits."}
      </p>
      {" "}
      <div className="block my-4 overflow-auto">
        <table className="border border-solid border-border table rounded-[3.2px] overflow-hidden bg-surface-2 shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-3)_0px_1px_2px_0px] w-auto">
          <thead className="table-header-group align-middle bg-surface">
            <tr className="table-row align-middle">
              <th className="border-r border-solid border-r-border border-b border-b-border table-cell py-1.5 px-3 align-middle text-color-003 font-semibold text-left">
                Dimension
              </th>
              <th className="border-r border-solid border-r-border border-b border-b-border table-cell py-1.5 px-3 align-middle text-color-003 font-semibold text-left">
                Meta official (
                <code className="inline py-0.5 px-1.5 rounded-sm text-accent [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
                  mcp.facebook.com/ads
                </code>
                )
              </th>
              <th className="border-b border-solid border-b-border table-cell py-1.5 px-3 align-middle text-color-003 font-semibold text-left">
                Pipeboard (
                <code className="inline py-0.5 px-1.5 rounded-sm text-accent [font-family:GeistMono,_ui-monospace,_SFMono-Regular,_'Roboto_Mono',_Menlo,_Monaco,_'Liberation_Mono',_'DejaVu_Sans_Mono',_'Courier_New',_monospace] text-sm leading-5 [overflow-wrap:break-word] bg-background before:content-[''] before:hidden after:content-[''] after:hidden">
                  meta-ads-mcp
                </code>
                )
              </th>
            </tr>
          </thead>
          <tbody className="table-row-group align-middle">
            {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
          </tbody>
        </table>
      </div>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"For most "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/use-cases/media-buyer-workflow">
          media buyer workflows
        </a>
        {", the official server wins on setup simplicity and the absence of app provisioning. The BSL 1.1 license on Pipeboard means you can't wrap it in a commercial SaaS product without a separate license — relevant if you're building an "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="/posts/best-meta-business-suite-automation-tools-guide-2026">
          automation tool
        </a>
        {" for clients."}
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        Pipeboard makes sense if: you need local control over the server process, you're on a compliance regime that requires data to stay on-premise, or you want to fork and extend the tool surface yourself.
      </p>
      {" "}
      <p className="block my-4 text-accent leading-7">
        {"For everyone else: start with "}
        <a className="inline text-primary cursor-pointer hover:underline" data-component="link" href="https://mcp.facebook.com/ads" rel="noopener noreferrer" target="_blank">
          mcp.facebook.com/ads
        </a>
        .
      </p>
    </div>
  );
}
