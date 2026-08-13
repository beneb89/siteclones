import ListRow4, { type ListRow4Data } from "../components/list-row4";
const ListRow4_data2: ListRow4Data[] = [
    { text: "Test 10 priority queries per service" },
    { text: "Record the sources the AI cites" },
    { text: "Record whether your domain appears" },
    { text: "Save the answer text snippet that mentions you" },
    { text: "Repeat the same queries each month" }
];
const ListRow4_data3: ListRow4Data[] = [
    { text: "Start each section with a 2–3 sentence answer block." },
    { text: "Use H2 and H3 that match Search Console and People Also Ask wording." },
    { text: "Stick to one topic per section and one idea per paragraph." },
    { text: "Add a brief summary line after long sections." },
    { text: "Use a small table or a pros and cons list when comparing options." }
];
const ListRow4_data4: ListRow4Data[] = [
    { text: "Use the same brand name format on every page and profile" },
    { text: "Keep service names and feature names identical across the site" },
    { text: "Keep NAP consistent on local pages and listings" },
    { text: "Put the author’s byline near the top, with their role and credentials" },
    { text: "Add SameAs links to your main profiles and listings" },
    { text: "Earn mentions on third-party sites in your category" }
];
const ListRow4_data5: ListRow4Data[] = [
    { text: "Total queries tested" },
    { text: "Queries with citations" },
    { text: "Brand mentions" },
    { text: "Context (positive, neutral, or negative)" }
];
const ListRow4_data6: ListRow4Data[] = [
    { text: "Use the same format for new pages" },
    { text: "Begin with an answer block near the top" },
    { text: "Write sections with headings that are real questions people search for" },
    { text: "Cite data from primary sources and include the year" },
    { text: "Keep brand, service, and feature names consistent on every page" }
];
const ListRow4_data7: ListRow4Data[] = [
    { text: "Remove weak pages that lower your site’s quality" },
    { text: "Combine similar posts into a single main hub page" },
    { text: "Link to related topic pages with clear anchor text" },
    { text: "Use 301 redirects for old URLs and set a canonical URL for the main page" }
];
/** How To Make section. */
export default function HowToMakeSection({ listRow4Data2 = ListRow4_data2, listRow4Data3 = ListRow4_data3, listRow4Data4 = ListRow4_data4, listRow4Data5 = ListRow4_data5, listRow4Data6 = ListRow4_data6, listRow4Data7 = ListRow4_data7 } = {}) {
  return (
    <div className="block relative min-w-0 max-w-full gap-5">
      <div className="block">
        <h2 className="block mt-2 mb-4 text-primary text-5xl font-medium leading-13.5 max-md:text-[2.375rem] max-md:leading-[2.6875rem] md:max-lg:text-[2.75rem] md:max-lg:leading-[3.125rem]" data-component="heading">
          How to Make AI Answers Pick Your Pages
        </h2>
        <p className="block mb-[0.9rem]">
          GEO turns into a repeatable process. Check AI answers for your main topics. Update your content based on what gets cited. Track how often you are mentioned compared to competitors in ChatGPT, Perplexity, Copilot, Gemini, and Google AI Overviews.
        </p>
        <p className="block mb-[0.9rem]">
          Each platform finds and cites sources in its own way. Your goal is to be cited across all of them. This section outlines four steps: discovery, content updates, measuring results, and making improvements.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Step 1: Check Where You Appear in AI-Generated Answers
        </h3>
        <p className="block mb-[0.9rem]">
          Start by testing priority queries inside AI tools. Open ChatGPT, Perplexity, and Gemini in incognito browser sessions. Type your main service questions and topic queries. Watch what sources the AI cites in responses.
        </p>
        <p className="block mb-[0.9rem]">
          What to track:
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data2.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          Search for your brand name plus core topics. Ask questions like, “What does [your brand] offer for [service]?” Note if responses reference your data or use similar wording to your pages. Track positive, neutral, and negative contexts.
        </p>
        <p className="block mb-[0.9rem]">
          Stay organized; use a spreadsheet to track your results. Add columns for the query, AI tool, date, whether you were cited, and notes about the context. Test the same queries each month to spot changes. This hands-on process can reveal patterns that automated tools might miss.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Step 2: Optimize Content for AI Engines
        </h3>
        <p className="block mb-[0.9rem]">
          Find pages that already rank well or nearly rank, and adjust them so AI can easily pull answers from them. Traditional SEO gives you a good reference point to start from. GEO optimization makes your content easier to quote.
        </p>
        <p className="block mb-[0.9rem]">
          Place answer blocks near the top of each page. Write two or three short sentences that give a definition, key steps, or a list of pros and cons. Keep the tone neutral and avoid promotional language. These blocks make it easy for AI systems to quote your content.
        </p>
        <p className="block mb-[0.9rem]">
          Break up dense text into shorter ones, each with one main idea. Use headings that match real questions users ask. For example, change “Our Services” to “What Services Does [Brand] Offer?” This structure matches how actual people search in AI tools.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Structure Content for AI Retrieval
        </h3>
        <p className="block mb-[0.9rem]">
          AI tools pull short passages, not entire pages. Each passage should answer one question clearly, without extra background. Make your sections easy to quote and reuse in answers.
        </p>
        <p className="block mb-[0.9rem]">
          Section guidelines:
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data3.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Build Entity Authority
        </h3>
        <p className="block mb-[0.9rem]">
          GEO relies on different factors, such as your brand, team, services, and location. If names differ across profiles, systems might link to the wrong brand. Keeping profiles consistent helps avoid confusion and supports brand mentions.
        </p>
        <p className="block mb-[0.9rem]">
          Entity checklist:
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data4.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Step 3: Measure Your Visibility Across AI Tools
        </h3>
        <p className="block mb-[0.9rem]">
          Build a GEO scorecard and track four numbers:
        </p>
        <ol className="block mb-6 [list-style-type:decimal] list-outside">
          {listRow4Data5.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ol>
        <p className="block mb-[0.9rem]">
          Keep the same query list across ChatGPT, Perplexity, Gemini, Copilot, and Google AI Overviews.
        </p>
        <p className="block mb-[0.9rem]">
          Check 10–20 priority topics each week and record results in a spreadsheet. Compare month to month and mark which pages earn citations whereas which do not. Update the pages that miss citations, then test the same queries again.
        </p>
        <p className="block mb-[0.9rem]">
          GEO performance measures how often your brand appears in AI answers. The number of clicks matters less than how often you are cited. A page might get fewer direct clicks but still show up in 50 AI responses each week. Track both traditional SEO metrics and GEO-specific visibility.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Step 4: Keep Improving What Works
        </h3>
        <p className="block mb-[0.9rem]">
          Review the pages that already show up in AI results. Look for patterns in their structure, tone, and sources. Make a note of what leads to citations and brand mentions on those pages.
        </p>
        <p className="block mb-[0.9rem]">
          Scale what works:
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data6.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          Clean up weak pages:
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data7.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block">
          Test and refine: Experiment with different answer lengths and layouts. Track which version gets quoted more over two to four weeks. Some topics work best with two sentences, while others need a five-step list. Use how often you are cited and mentioned to choose the best format.
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
