import ListRow, { type ListRowData } from "../components/list-row";
const ListRow_data: ListRowData[] = [
    { text: "The bottleneck moves from API knowledge to prompt and workflow design.", text2: " Anyone who can describe a Meta operation in plain English can now execute it reliably." },
    { text: "AI assistants become first-class operators.", text2: " Claude or ChatGPT can plan and execute multi-step Meta workflows through an MCP server pointed at the CLI, without scraping the Ads Manager UI [2]." },
    { text: "The auditable surface improves.", text2: " CLI commands are text, exit codes are deterministic (0 success, 3 auth error, 4 API error), and JSON output makes every change diff-able [1]." }
];
/** Why The Meta section. */
export default function WhyTheMetaSection({ listRowData = ListRow_data } = {}) {
  return (
    <section className="block">
      <h2 className="block mt-22.5 mb-[1.6875rem] text-4xl font-bold leading-[2.6875rem] tracking-[-0.72px] max-md:mt-[4.0625rem] max-md:mb-[19.5px] max-md:text-[1.625rem] max-md:leading-[2.0625rem] max-md:tracking-[-0.52px] md:max-lg:mt-[4.6875rem] md:max-lg:mb-[22.5px] md:max-lg:text-3xl md:max-lg:leading-9 md:max-lg:tracking-[-0.6px]" data-component="heading" id="why-the-meta-ads-cli-changes-the-operating-model">
        Why the Meta Ads CLI Changes the Operating Model
      </h2>
      {" "}
      <p className="block mb-5">
        For a decade, programmatic Meta work meant writing Marketing API calls in Python or Node, owning auth flow, pagination, retry logic, and a brittle layer between the human strategist and the platform. The CLI collapses that stack into commands a media buyer can read and an LLM can generate [1]. Three implications:
      </p>
      {" "}
      <ol className="block mb-5 pl-6 [list-style-type:decimal] list-outside">
        {listRowData.map((d, i) => <ListRow key={i} d={d} />)}
      </ol>
      {" "}
      <p className="block mb-5">
        For agencies and in-house teams, this is the same shift the Google Ads MCP triggered in October 2025: access moves from developers-only to marketer-friendly plain-English queries, with read-only access protecting against hallucinated changes [2].
      </p>
      {" "}
    </section>
  );
}
