import ListRow3, { type ListRow3Data } from "../components/list-row3";
import ListRow4, { type ListRow4Data } from "../components/list-row4";
const ListRow3_data: ListRow3Data[] = [
    { text: "AlsoAsked: ", text2: "Reveals related questions people may ask" },
    { text: "Reddit:", text2: " Shows how communities phrase and answer problems" },
    { text: "Google Search Console:", text2: " Displays exact queries bringing traffic" },
    { text: "ChatGPT:", text2: " Surfaces follow-up questions your audience types" }
];
const ListRow4_data: ListRow4Data[] = [
    { text: "Use the same business name format on each profile" },
    { text: "Use the same address format and phone number everywhere" },
    { text: "Use the same service and product names across pages and listings" },
    { text: "Match Google Business Profile categories to your services" },
    { text: "Add SameAs links for your main profiles" },
    { text: "Keep author names and titles consistent across bios" },
    { text: "Keep business hours consistent on major listings" }
];
/** Principles For Ai section. */
export default function PrinciplesForAiSection({ listRow3Data = ListRow3_data, listRow4Data = ListRow4_data } = {}) {
  return (
    <div className="block relative min-w-0 max-w-full gap-5">
      <div className="block">
        <h2 className="block mt-2 mb-4 text-primary text-5xl font-medium leading-13.5 max-md:text-[2.375rem] max-md:leading-[2.6875rem] md:max-lg:text-[2.75rem] md:max-lg:leading-[3.125rem]" data-component="heading">
          5 Principles for AI Search Visibility
        </h2>
        <p className="block mb-[0.9rem]">
          In 2026, GEO is built on five main principles that apply across different AI engines. These principles help brands appear as citations and mentions in AI-generated answers. Each one explains how AI tools choose and cite sources.
        </p>
        <p className="block mb-[0.9rem]">
          The following sections provide practical advice with examples. Following these principles will help you stand out to ChatGPT, Perplexity, Gemini, and Google AI Overviews.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          1. Answer Common Questions
        </h3>
        <p className="block mb-[0.9rem]">
          GEO starts with answering user questions. AI tools mirror how people talk and ask things. Your content should match how people phrase their questions. Content built around real questions is more commonly used in AI search.
        </p>
        <p className="block mb-[0.9rem]">
          Research questions using tools you already have access to:
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          Examples of good questions:
        </p>
        <p className="block mb-[0.9rem]">
          “How much does a kitchen remodel cost in 2026?”
        </p>
        <p className="block mb-[0.9rem]">
          “Is Invisalign safe for teenagers?”
        </p>
        <p className="block mb-[0.9rem]">
          “Which CRM is better for small businesses, HubSpot or Salesforce?”
        </p>
        <p className="block mb-[0.9rem]">
          Each question focuses on one goal. Your content should answer these directly and clearly.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          2. Prove the Content is Real and Accurate.
        </h3>
        <p className="block mb-[0.9rem]">
          AI engines choose pages they can verify. Facts that include sources, dates, and numbers are used more often in AI answers. Claims without proof are usually ignored.
        </p>
        <p className="block mb-[0.9rem]">
          Use E-E-A-T signals on the page. Add the author’s name, role, and credentials near the top. Add an updated date that matches the real edit. Link to primary sources like the CDC, FDA, IRS, state agencies, court sites, and standards bodies. Use the exact agency or publisher name in the sentence.
        </p>
        <p className="block mb-[0.9rem]">
          Make it easy for AI to find proof in each section. Include a number, the year it was published, and the source in the same paragraph. When sharing costs, add a short example calculation for it. Name the tool, report, or dataset when you mention results. If you describe a product step, include screenshots or mention the feature and its location in the menu so it’s easy to check.
        </p>
        <p className="block mb-[0.9rem]">
          Regularly review and update older pages. Check prices, laws, and product details every 3 to 6 months. Make sure to replace outdated numbers, update links, and refresh screenshots when the interface changes. When your facts match actual official sources, AI tools are more likely to cite your page.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          3. Build Entity Authority and Trust
        </h3>
        <p className="block mb-[0.9rem]">
          Entities include your brand name, people, products, and locations. AI tools match these details to public records and online profiles. Google uses a Knowledge Graph, and many brands have a Knowledge Panel. Wikidata keeps records with IDs that link names, roles, and locations. When your details are consistent across these sources, AI answers can connect your content to your brand.
        </p>
        <p className="block mb-[0.9rem]">
          Consistent naming across platforms is required, and NAP consistency is part of it for local brands. Your company name, author names, and product names should match on your website, LinkedIn, Crunchbase, Google Business Profile, Bing Places, and Apple Business Connect.
        </p>
        <p className="block mb-[0.9rem]">
          Add SameAs links that point to your official profile URLs.
        </p>
        <p className="block mb-[0.9rem]">
          Include your URL, logo, and contactPoint in your ‘Organization’ markup to support entity matching.
        </p>
        <p className="block mb-[0.9rem]">
          Key consistency checks:
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          Create About and Team pages that show credentials people can check. List education, certifications, awards, and memberships. Use the Organization, Person, and LocalBusiness schema for local office pages.
        </p>
        <p className="block mb-[0.9rem]">
          Trust also comes from reviews and third-party sites like Google, G2, Trustpilot, Yelp, BBB, Capterra, and Clutch. When these sources match your site, AI tools can connect your business more quickly and avoid confusion caused by similar names.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          4. Optimize for Semantic Search
        </h3>
        <p className="block mb-[0.9rem]">
          AI engines care more about meaning than exact keywords. GEO works better when your page uses related terms and connected ideas. These systems compare your text to the question and look for topics that closely match.
        </p>
        <p className="block mb-[0.9rem]">
          Group related topics into content hubs using your site taxonomy and category pages. Create one pillar page for the main topic, then add a topic cluster of pages for subtopics.
        </p>
        <p className="block mb-[0.9rem]">
          Connect them with internal linking and descriptive anchor text. Use entity and attribute details across pages, like service name, location, price range, or feature set.
        </p>
        <p className="block mb-[0.9rem]">
          Use varied phrasing naturally:
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          <li className="list-item ml-9">
            Say “generative search” in one place and “answer engines” in another
          </li>
          <li className="list-item ml-9">
            Mention “AI overviews” and “AI-generated responses” naturally
          </li>
        </ul>
        <p className="block mb-[0.9rem]">
          This helps AI tools understand your full topic without repeating yourself.
        </p>
        <p className="block mb-[0.9rem]">
          Add navigation signals. Use schema breadcrumbs to show where a page fits in your site’s structure. Breadcrumbs help group related topics more clearly.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          5. Maintain Content Freshness
        </h3>
        <p className="block mb-[0.9rem]">
          Large language models and AI search tools prefer recent sources for topics that change often. Pricing, legal rules, and product details need to be up to date. Old content loses citations to newer, updated competitors.
        </p>
        <p className="block mb-[0.9rem]">
          Establish a review cycle. Use a 3-6 month cycle for checking priority pages, such as pricing, legal, and feature pages.
        </p>
        <p className="block mb-[0.9rem]">
          Build a content inventory in a spreadsheet and use it as a content audit log. Track last update dates, new screenshots, 2025-2026 statistics, and updated feature lists. Add a changelog or revision history note when you update key facts.
        </p>
        <p className="block mb-[0.9rem]">
          Update your pages even for small changes. Adding new FAQs from support chats can add value, sharing new client examples showcases your work, and updating feature comparisons highlights market changes.
        </p>
        <p className="block mb-[0.9rem]">
          Small edits like this can help keep your pages active in AI indexes.
        </p>
        <p className="block mb-[0.9rem]">
          Show search engines that your pages are fresh. Things like updating your XML sitemap when you change pages, configuring the last modified HTTP header on your server correctly, and ensuring the dateModified time matches real editing times on schema markup can all make a difference. You can also check your server logs to see when bots revisit updated pages.
        </p>
        <p className="block">
          Dated content, year in review, or “2026 update” sections on site pages can help maintain topical relevance and bring in leads or sales. AI tools like to quote these types of sections to show up to date information and pick up on headings such as “What Change for GEO in 2026?” to provide information from relevant, recently dated content.
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
