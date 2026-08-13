import ListRow4, { type ListRow4Data } from "../components/list-row4";
import Tile2 from "../components/tile2";
import Tile3, { type Tile3Data } from "../components/tile3";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import { Tile2_styles, Tile3_styles } from "../_styles";
import { tile2Data as tile2DataContent } from "../content";
const ListRow4_data8: ListRow4Data[] = [
    { text: "Page load time under 2.5 seconds LCP (Largest Contentful Paint)" },
    { text: "Mobile-friendly responsive layouts" },
    { text: "HTTPS enabled" },
    { text: "Internal linking with descriptive anchor text" },
    { text: "Title tags that match the page topic" },
    { text: "Meta descriptions that match the page’s purpose" },
    { text: "Header tags (H1, H2, H3) used in order" },
    { text: "Image alt text that describes the image" }
];
const ListRow4_data9: ListRow4Data[] = [
    { text: "Fix crawl errors in Google Search Console." },
    { text: "Fix 404 and broken links." },
    { text: "Keep an updated XML sitemap." },
    { text: "Check indexability and remove wrong noindex tags." },
    { text: "Set canonical tags on the main page version." },
    { text: "Remove redirect chains and fix duplicate URLs" },
    { text: "Confirm GPTBot access in robots.txt and check key pages in server logs." }
];
const ListRow4_data10: ListRow4Data[] = [
    { text: "Use descriptive slugs like /generative-engine-optimization-geo/ rather than /p1234/" },
    { text: "Create hierarchical paths reflecting topics: /services/seo/, /services/geo/" },
    { text: "Keep URLs stable over time to build trust." },
    { text: "Avoid parameter-heavy dynamic URLs whenever possible." },
    { text: "Keep slugs lowercase and use hyphens between words." },
    { text: "Use 1 format for trailing slashes and keep it consistent." },
    { text: "Pick www or non-www and keep it consistent sitewide." }
];
const ListRow4_data11: ListRow4Data[] = [
    { text: "Use H1 for page titles, H2 for major sections, and H3 for subtopics" },
    { text: "Write short paragraphs with 3–5 sentences each." },
    { text: "Include numbered steps for processes." },
    { text: "Add tables for comparisons and data." },
    { text: "Place summaries near the top of major sections." },
    { text: "Avoid walls of text without breaks." },
    { text: "Keep each section focused on one topic." }
];
const ListRow4_data12: ListRow4Data[] = [
    { text: "Implement schema.org structured data (Article, FAQPage, Product, LocalBusiness, Organization, Author)" },
    { text: "Configure robots.txt and llms.txt to allow AI crawlers (GPTBot, PerplexityBot)." },
    { text: "Set canonical tags on the main page version." },
    { text: "Check indexability and remove wrong noindex tags." },
    { text: "Fix 4xx and 5xx errors and remove redirect chains." },
    { text: "Use lazy loading for images below the fold." },
    { text: "Compress assets to reduce load time." },
    { text: "Enable a CDN for global delivery." }
];
const ListRow4_data13: ListRow4Data[] = [
    { text: "Align NAP (name, address, phone) across all directories." },
    { text: "Claim Google Business Profile and Apple Business Connect." },
    { text: "Update Bing Places and industry-specific listings." },
    { text: "Create detailed author pages with consistent titles and credentials." },
    { text: "Link author profiles to LinkedIn, X, and professional networks." },
    { text: "Use a consistent brand story and tagline everywhere." }
];
const ListRow4_data14: ListRow4Data[] = [
    { text: "Write as if explaining to a smart friend unfamiliar with jargon" },
    { text: "Use “you” and “we” for direct engagement" },
    { text: "Keep sentences under 20 words when possible" },
    { text: "Frame subheadings as questions users might ask" },
    { text: "Include examples and mini-stories showing outcomes" },
    { text: "Define technical terms with plain-language explanations" },
    { text: "Avoid dense paragraphs full of industry jargon" }
];
const ListRow4_data15: ListRow4Data[] = [
    { text: "Audit top pages quarterly for accuracy and freshness." },
    { text: "Check links, schema, and metadata against current standards." },
    { text: "Test heading variations and summary blurbs." },
    { text: "Monitor which page versions earn more AI citations." },
    { text: "Track GEO metrics in dashboards (AI citations, branded mentions, question coverage)." },
    { text: "Add notes inviting users to report errors." },
    { text: "Update content promptly when corrections are needed." }
];
const Tile3_data: Tile3Data[] = [
    { description: "Intent – matched topics", description2: "Each page answers a specific question", description3: "Use real queries from Search Console and support chats" },
    { description: "Early answers", description2: "Key info shows up at the top", description3: "Add an answer block and a short summary near the top" },
    { description: "Supporting evidence", description2: "Facts have proof", description3: "Link to studies, reports, and official data with the year" },
    { description: "FAQ and steps", description2: "Answers are easy to lift", description3: "Add an FAQ block and numbered steps where needed" },
    { description: "Internal links", description2: "Related pages connect", description3: "Link hub pages to topic cluster pages with descriptive anchor text" },
    { description: "Layout", description2: "Content is easy to scan", description3: "Short paragraphs, headings, lists, and comparison tables" }
];
const ListRow3_data2: ListRow3Data[] = [
    { text: "SaaS pages", text2: ": Include feature tables and use case sections" },
    { text: "Law firm pages: ", text2: "Answer client questions by practice area" },
    { text: "E-commerce pages:", text2: " Add spec tables, shipping details, and FAQ sections" }
];
const ListRow3_data3: ListRow3Data[] = [
    { text: "Visibility in AI answers:", text2: " How often does your domain appear for your target queries?" },
    { text: "Mention context:", text2: " Is your brand described positively, neutrally, or negatively?" },
    { text: "Conversions: ", text2: "Can you connect AI mentions to leads or sales?" },
    { text: "Brand trend:", text2: " Do brand mentions increase or drop over 6–12 months?" }
];
/** Best Practices Checklist section. */
export default function BestPracticesChecklistSection({ listRow4Data8 = ListRow4_data8, listRow4Data9 = ListRow4_data9, listRow4Data10 = ListRow4_data10, listRow4Data11 = ListRow4_data11, listRow4Data12 = ListRow4_data12, listRow4Data13 = ListRow4_data13, listRow4Data14 = ListRow4_data14, listRow4Data15 = ListRow4_data15, tile2Data = tile2DataContent, tile3Data = Tile3_data, listRow3Data2 = ListRow3_data2, listRow3Data3 = ListRow3_data3 } = {}) {
  return (
    <div className="block relative min-w-0 max-w-full gap-5">
      <div className="block">
        <h2 className="block mt-2 mb-4 text-primary text-5xl font-medium leading-13.5 max-md:text-[2.375rem] max-md:leading-[2.6875rem] md:max-lg:text-[2.75rem] md:max-lg:leading-[3.125rem]" data-component="heading">
          Best Practices Checklist for Generative Engine Optimization (GEO)
        </h2>
        <p className="block mb-[0.9rem]">
          Use this checklist as a practical guide for teams planning or reviewing GEO work. Each section covers specific on-page and off-page tasks. Treat it as a working document for your projects.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          SEO Foundation
        </h3>
        <p className="block mb-[0.9rem]">
          GEO needs a strong SEO foundation. Without it, AI models may not be able to access your content reliably.
        </p>
        <p className="block mb-[0.9rem]">
          <strong className="inline font-bold">
            Core requirements:
          </strong>
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data8.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          <strong className="inline font-bold">
            Crawl and index checks:
          </strong>
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data9.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          These basics support GEO performance and reduce crawl and citation issues.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Website URL structure
        </h3>
        <p className="block mb-[0.9rem]">
          A URL is the address of a page. It should describe the topic in just a few words. Short, easy-to-read URLs are simpler to scan, share, and check. They also help prevent duplicate page problems when the same content appears under different URLs.
        </p>
        <p className="block mb-[0.9rem]">
          Clear URLs help both users and AI systems understand your content.
        </p>
        <p className="block mb-[0.9rem]">
          <strong className="inline font-bold">
            URL best practices:
          </strong>
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data10.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Content Structure
        </h3>
        <p className="block mb-[0.9rem]">
          AI tools extract small sections of a page rather than the entire page at once. If a section answers a question by itself, it is easier to quote. That is why your layout and wording matter for GEO.
        </p>
        <p className="block mb-[0.9rem]">
          A good structure also helps people quickly find steps, numbers, and comparisons. This same layout makes it easier for AI systems to find the right section to cite.
        </p>
        <p className="block mb-[0.9rem]">
          <strong className="inline font-bold">
            Structure guidelines:
          </strong>
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data11.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          How you structure your content affects how AI models read and quote your pages. Better organization means more chances for citations and fewer skipped sections.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Technical Implementation
        </h3>
        <p className="block mb-[0.9rem]">
          Your technical setup determines if crawlers can reach your pages and read the right version. If bots find blocked paths, duplicate URLs, broken code, or wrong status codes, your content might be skipped. A clean setup also helps avoid indexing problems that block citations.
        </p>
        <p className="block mb-[0.9rem]">
          <strong className="inline font-bold">
            Technical checklist:
          </strong>
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data12.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          These technical basics make sure your pages are accessible to Googlebot, Bingbot, and other AI crawlers. They also help prevent duplicate and indexing issues that can block citations.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Strengthen Entity Signals
        </h3>
        <p className="block mb-[0.9rem]">
          Entity signals help AI systems identify and trust your brand.
        </p>
        <p className="block mb-[0.9rem]">
          <strong className="inline font-bold">
            Entity optimization tasks:
          </strong>
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data13.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          Strong entity signals make your brand more visible in AI responses across different platforms.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Conversational Content
        </h3>
        <p className="block mb-[0.9rem]">
          AI tools prefer content that is written in a natural, helpful way.
        </p>
        <p className="block mb-[0.9rem]">
          <strong className="inline font-bold">
            Conversational writing tips:
          </strong>
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data14.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          Content written in a conversational style is quoted more often in AI-driven search results.
        </p>
        <h3 className="block mt-2 mb-4 text-primary text-4xl font-medium leading-[2.6875rem] max-md:text-[2rem] max-md:leading-[2.375rem]" data-component="heading">
          Validation and Optimization
        </h3>
        <p className="block mb-[0.9rem]">
          Regular audits help your content perform well over time.
        </p>
        <p className="block mb-[0.9rem]">
          <strong className="inline font-bold">
            Ongoing optimization tasks:
          </strong>
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow4Data15.map((d, i) => <ListRow4 key={i} d={d} />)}
        </ul>
        <h2 className="block mt-2 mb-4 text-primary text-5xl font-medium leading-13.5 max-md:text-[2.375rem] max-md:leading-[2.6875rem] md:max-lg:text-[2.75rem] md:max-lg:leading-[3.125rem]" data-component="heading">
          Key Components of Effective GEO Content
        </h2>
        <p className="block mb-[0.9rem]">
          Good GEO content is helpful for readers and easy for AI tools to quote. Each page should give quick answers, proof, and a layout that works well in small sections.
        </p>
        <p className="block mb-[0.9rem]">
          Core components of GEO content:
        </p>
        <table className="w-full table mb-[0.9375rem] text-[1rem] [border-collapse:collapse]">
          <tbody className="table-row-group align-middle [border-collapse:collapse]">
            <tr className="table-row align-middle [border-collapse:collapse]">
              {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
            </tr>
            {tile3Data.map((d, i) => <Tile3 key={i} d={d} styles={Tile3_styles[i]} />)}
          </tbody>
        </table>
        <p className="block mb-[0.9rem]">
          Example in practice: A local plumbing company can improve its emergency services page by starting with a line like, “Emergency plumbing services in City are available 24 hours, with response times averaging 45 minutes.” This answer should be in the first paragraph. The page can then link to pricing, common emergencies, and service area pages. Mentioning response time and availability, along with Google reviews, helps support service claims.
        </p>
        <p className="block mb-[0.9rem]">
          This approach works for many types of businesses:
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow3Data2.map((d, i) => <ListRow3 key={i} d={d} />)}
        </ul>
        <h2 className="block mt-2 mb-4 text-primary text-5xl font-medium leading-13.5 max-md:text-[2.375rem] max-md:leading-[2.6875rem] md:max-lg:text-[2.75rem] md:max-lg:leading-[3.125rem]" data-component="heading">
          How to Measure Generative Engine Optimization (GEO) Success
        </h2>
        <p className="block mb-[0.9rem]">
          GEO success is measured by more than just clicks and rankings. Track how often your brand is cited and mentioned in AI answers. Also, note if those mentions are positive, neutral, or negative.
        </p>
        <p className="block mb-[0.9rem]">
          <strong className="inline font-bold">
            Four measurement areas for GEO:
          </strong>
        </p>
        <ul className="block mb-6 [list-style-type:disc] list-outside">
          {listRow3Data3.map((d, i) => <ListRow3 key={i} d={d} />)}
        </ul>
        <p className="block mb-[0.9rem]">
          Be patient. Track trends over three to twelve months since AI index updates can take time to show content changes.
        </p>
        <p className="block mb-[0.9rem]">
          A page you update today might not appear in AI answers for weeks. Measure consistently to see real results.
        </p>
        <h2 className="block mt-2 mb-4 text-primary text-5xl font-medium leading-13.5 max-md:text-[2.375rem] max-md:leading-[2.6875rem] md:max-lg:text-[2.75rem] md:max-lg:leading-[3.125rem]" data-component="heading">
          Want to Improve Your Visibility in Generative AI?
        </h2>
        <p className="block mb-[0.9rem]">
          Get GEO help from seoTuners with nationwide service coverage. We improve pages so your brand shows up as a cited source in ChatGPT, Perplexity, Gemini, and Google AI Overviews.
        </p>
        <p className="block">
          Contact seoTuners to start a GEO audit and get an action plan for your top pages!
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
