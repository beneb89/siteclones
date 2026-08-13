import Tile, { type TileData } from "../components/tile";
const Tile_data: TileData[] = [
    { text: "Search", text2: "Bing, Yahoo, Edge", text3: "Capturing search intent", text4: "Lower CPC than Google" },
    { text: "Audience", text2: "MSN, Outlook, Edge", text3: "Native display and retargeting", text4: "In-feed native format" },
    { text: "Shopping", text2: "Bing Shopping", text3: "E-commerce product ads", text4: "Bing Product Ads feed" },
    { text: "Performance Max", text2: "All Microsoft networks", text3: "Full funnel automation", text4: "Cross-network AI optimization" },
    { text: "Dynamic Search", text2: "Bing search", text3: "Large site/catalog coverage", text4: "Auto-generated from site content" }
];
/** Supported Campaign Types section. */
export default function SupportedCampaignTypesSection({ tileData = Tile_data } = {}) {
  return (
    <section className="block mb-10">
      <h2 className="block mt-10 mb-4 text-color-003 [font-family:'Space_Grotesk',_'Space_Grotesk_Fallback',_'Space_Grotesk',_ui-sans-serif,_system-ui] text-2xl font-semibold leading-8 tracking-[-0.24px]" data-component="heading">
        Supported Campaign Types
      </h2>
      <div className="block leading-6.5">
        <div className="block" id="campaign-types">
          <div className="block my-8 overflow-auto">
            <table className="border border-solid border-border table rounded-xl text-sm leading-5 [border-collapse:collapse] [border-spacing:2px] w-full">
              <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                <tr className="table-row align-middle bg-color-004 [border-collapse:collapse] [border-spacing:2px]">
                  <th className="border-b border-solid border-b-border table-cell p-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                    Type
                  </th>
                  <th className="border-b border-solid border-b-border table-cell p-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                    Network
                  </th>
                  <th className="border-b border-solid border-b-border table-cell p-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                    Best For
                  </th>
                  <th className="border-b border-solid border-b-border table-cell p-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                    Unique Feature
                  </th>
                </tr>
              </thead>
              <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                {tileData.map((d, i) => <Tile key={i} d={d} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
