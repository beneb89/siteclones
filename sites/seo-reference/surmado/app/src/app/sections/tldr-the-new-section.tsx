import ListRow, { type ListRowData } from "../components/list-row";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
import Tile, { type TileData } from "../components/tile";
import Tile2, { type Tile2Data } from "../components/tile2";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import ListRow4 from "../components/list-row4";
import Tile3, { type Tile3Data } from "../components/tile3";
import ListRow5 from "../components/list-row5";
import ListRow6, { type ListRow6Data } from "../components/list-row6";
import { Tile_styles, Tile2_styles } from "../_styles";
import { listRow4Data as listRow4DataContent, listRow4Data2 as listRow4Data2Content, listRow5Data as listRow5DataContent } from "../content";
const ListRow_data: ListRowData[] = [
    { text: "What the GEO research from Princeton and IIT Delhi actually found (and how to apply it)." },
    { text: "Platform-specific tactics for Google AI Overviews, Perplexity, Microsoft Copilot, Claude, and Gemini." },
    { text: "How to spot and avoid “AI visibility” scams." },
    { text: "Where Surmado Site Audit, AI Visibility, and Strategy fit into your optimization workflow." }
];
const ListRow2_data: ListRow2Data[] = [
    { text: "Traditional SEO", text2: " gets you into the top 10 organic results." },
    { text: "Answer Engine Optimization (AEO)", text2: " makes your content easy to extract for snippets and direct answers." },
    { text: "Generative Engine Optimization (GEO)", text2: " convinces AI systems to cite you when they synthesize answers." }
];
const ListRow_data2: ListRowData[] = [
    { text: "The GEO study (Aggarwal et al.) found that adding quotations from credible sources raised a source’s share of the AI answer by roughly 41%, statistics by about 31%, and citations by about 28%." },
    { text: "Each platform behaves differently. Google AIOs lean on organic strength but fan queries out beyond the top 10. Perplexity rewards freshness and authority. Copilot retrieves from Bing." },
    { text: "No one can guarantee placement in AI answers. Anyone promising that is running a scam." },
    { text: "Surmado AI Visibility ($50) tests your visibility across 7 platforms. Site Audit ($50) fixes technical barriers. Strategy ($50) gives you the strategic playbook." }
];
const ListRow_data3: ListRowData[] = [
    { text: "Keyword research and targeting." },
    { text: "Backlink building." },
    { text: "Technical site health (speed, mobile-friendliness, crawlability)." },
    { text: "Content that matches search intent." }
];
const ListRow_data4: ListRowData[] = [
    { text: "“Our Services”" },
    { text: "“Pricing Information”" },
    { text: "“Contact Details”" }
];
const ListRow_data5: ListRowData[] = [
    { text: "“What HVAC services do you offer in Dallas?”" },
    { text: "“How much does HVAC repair cost?”" },
    { text: "“Do you offer emergency service?”" }
];
const ListRow_data6: ListRowData[] = [
    { text: "This is a question." },
    { text: "This is the accepted answer." },
    { text: "These are the relationships between concepts." }
];
const Tile_data: TileData[] = [
    { text: "Adding quotations from credible sources", text2: "+40.9%", text3: "+28.0%" },
    { text: "Including clear statistics and data", text2: "+30.6%", text3: "+22.8%" },
    { text: "Improving readability and fluency", text2: "+28.0%", text3: "+13.5%" },
    { text: "Adding inline citations to sources", text2: "+27.5%", text3: "+13.5%" },
    { text: "Using domain-specific terminology", text2: "+17.6%", text3: "+10.9%" },
    { text: "Simplifying language", text2: "+14.0%", text3: "+6.2%" },
    { text: "Authoritative voice and tone", text2: "+10.4%", text3: "+18.7%" },
    { text: "Keyword stuffing", text2: "-8.3%", text3: "+4.7%" }
];
const ListRow_data7: ListRowData[] = [
    { text: "Your website" },
    { text: "Google Business Profile" },
    { text: "Bing Places" },
    { text: "Yelp" },
    { text: "LinkedIn" },
    { text: "Facebook" },
    { text: "Apple Maps" }
];
const Tile2_data: Tile2Data[] = [
    { text: "Goal", text2: "Rank in top 10 results", text3: "Be extracted for direct answers", text4: "Be cited in AI-generated synthesis" },
    { text: "Target Systems", text2: "Google/Bing organic rankings", text3: "Featured snippets, voice search, AI summaries", text4: "LLM citation in ChatGPT, Claude, Gemini, Perplexity" },
    { text: "Primary Metric", text2: "Keyword rankings, organic traffic", text3: "Snippet ownership, voice response frequency", text4: "Citation frequency, Share of Voice in AI answers" },
    { text: "Core Tactics", text2: "Backlinks, keywords, technical health", text3: "40-60 word answers, Q&A format, FAQ schema", text4: "Expert quotes, statistics, consensus building, inline citations" },
    { text: "Content Style", text2: "Comprehensive, keyword-optimized", text3: "Concise, question-focused, structured", text4: "Evidentiary, citable, authoritative" },
    { text: "Success Signal", text2: "Position 1-3 in SERPs", text3: "Featured snippet or “People Also Ask” inclusion", text4: "Brand mentioned in AI Overview or Perplexity answer" }
];
const ListRow_data8: ListRowData[] = [
    { text: "Google fans the query out into related sub-queries." },
    { text: "It retrieves candidate sources for those sub-queries, drawing on its search index rather than only the original query’s top 10-20 results." },
    { text: "The LLM reads those pages and synthesizes a summary." },
    { text: "The summary appears at the top of the SERP as the AI Overview." }
];
const ListRow3_data: ListRow3Data[] = [
    { description: "JavaScript rendering:", description2: " AI Overviews are generated in near-real-time. If your content requires heavy client-side JavaScript to render, the AI may time out before reading it. Use server-side rendering or ensure text is present in the initial HTML response." },
    { description: "Schema markup:", description2: " Controlled tests show that pages with valid, comprehensive schema are significantly more likely to be cited. LocalBusiness, Article, and Product remain eligible for Google rich results. FAQPage, HowTo, and Service no longer are — ship them as semantic markup for machines, not as a rich-result play." },
    { description: "Robots.txt:", description2: " Ensure you’re not blocking Googlebot. AI Overviews use the same crawler as traditional search. If you block it, you’re invisible." }
];
const ListRow3_data2: ListRow3Data[] = [
    { description: "The 40-word answer block:", description2: " Place direct answers immediately after question-based H2 tags. This is the format the AI extracts most reliably." },
    { description: "Semantic HTML structure:", description2: " Use logical H1 > H2 > H3 progression so the document outline matches the argument." },
    { description: "Information gain:", description2: " Google has explicitly stated a preference for content that adds new information to the corpus. Publish original survey data, unique case studies, or contrarian viewpoints backed by evidence." }
];
const ListRow_data9: ListRowData[] = [
    { text: "Broad retrieval of candidate results." },
    { text: "Reranking based on quality and relevance signals." },
    { text: "Synthesis with inline citations." }
];
const ListRow2_data2: ListRow2Data[] = [
    { text: "All (Default):", text2: " Requires standard technical SEO and high domain authority." },
    { text: "Academic Mode:", text2: " Restricts to scholarly papers. Publish white papers, research reports, or get cited in academic journals." },
    { text: "Reddit Mode:", text2: " Restricts to Reddit. Participate authentically in relevant subreddits. Ensure your brand is mentioned in high-engagement threads." },
    { text: "YouTube Mode:", text2: " Searches video transcripts. Create detailed video descriptions and ensure accurate closed captions." }
];
const ListRow_data10: ListRowData[] = [
    { text: "Ensure your brand meets Wikipedia’s notability guidelines." },
    { text: "Get mentioned in press coverage that Wikipedia editors can cite." },
    { text: "Provide accurate, neutral information to editors when they request it." }
];
const ListRow_data11: ListRowData[] = [
    { text: "Complete 100% of fields (description, industry, size, specialties, website)." },
    { text: "Write a clear “About” section with specific service offerings, not vague marketing speak." },
    { text: "Post regularly (at least 1-2x per week) to signal activity and recency." },
    { text: "Use LinkedIn Articles to publish thought leadership that Copilot can cite." }
];
const ListRow_data12: ListRowData[] = [
    { text: "Detailed “About” sections that clearly state expertise and company role." },
    { text: "Regular activity (posts, comments, shares) to signal thought leadership." },
    { text: "Recommendations and endorsements that reinforce key skills." }
];
const ListRow_data13: ListRowData[] = [
    { text: "Upload PDFs, articles, or reports for analysis." },
    { text: "Ask it to compare multiple sources." },
    { text: "Request deep research on a topic using its browsing capability." }
];
const ListRow_data14: ListRowData[] = [
    { text: "Clear section headings (H2, H3)." },
    { text: "Bulleted lists for key points." },
    { text: "Tables for comparative data." },
    { text: "Inline citations and footnotes." }
];
const ListRow3_data3: ListRow3Data[] = [
    { description: "ClaudeBot", description2: " crawls to train future models on your content. Blocking it protects your IP but only affects what later Claude versions learn, not whether Claude cites you today." },
    { description: "Claude-SearchBot", description2: " powers Claude’s search-based answers. This is the bot that determines whether Claude can cite you right now, and Anthropic warns that blocking it may reduce your visibility in Claude’s search answers." },
    { description: "Claude-User", description2: " fetches a page when a user asks Claude to look at it directly, and honors robots.txt." }
];
const ListRow_data15: ListRowData[] = [
    { text: "Industry publications" },
    { text: "Review sites" },
    { text: "Forum discussions (Reddit, Hacker News)" },
    { text: "News articles" }
];
const ListRow_data16: ListRowData[] = [
    { text: "Participate authentically in relevant subreddits." },
    { text: "Answer questions on Stack Overflow." },
    { text: "Engage on Hacker News when your product is mentioned." }
];
const ListRow_data17: ListRowData[] = [
    { text: "Accurate, detailed titles and descriptions." },
    { text: "High-quality transcripts (not auto-generated)." },
    { text: "On-screen text and graphics that match the spoken content." }
];
const ListRow_data18: ListRowData[] = [
    { text: "High-quality, relevant imagery that explicitly depicts the subject matter." },
    { text: "Proper file naming (not IMG_1234.jpg)." },
    { text: "Alt text that matches what’s actually in the image." }
];
const ListRow_data19: ListRowData[] = [
    { text: "Email signatures and domains matter." },
    { text: "Shared Google Docs and Sheets referencing your brand build entity recognition." },
    { text: "Calendar invites and meeting notes mentioning your product create usage signals." }
];
const ListRow2_data3: ListRow2Data[] = [
    { text: "Googlebot:", text2: " Used for both traditional search and AI Overviews." },
    { text: "GPTBot:", text2: " OpenAI’s crawler for ChatGPT training. Doesn’t affect whether ChatGPT can cite you today." },
    { text: "OAI-SearchBot:", text2: " OpenAI’s crawler for ChatGPT search. This is the bot that determines whether ChatGPT can cite you right now." },
    { text: "ClaudeBot:", text2: " Anthropic’s crawler for Claude training. Doesn’t affect whether Claude can cite you today." },
    { text: "Claude-SearchBot:", text2: " Anthropic’s crawler for Claude’s search answers. Blocking it may reduce your visibility in Claude’s search answers." },
    { text: "PerplexityBot:", text2: " Perplexity’s crawler for its search-based answers." },
    { text: "Bingbot:", text2: " Microsoft’s crawler for Bing and Copilot." }
];
const ListRow_data20: ListRowData[] = [
    { text: "Temperature settings (randomness factor)." },
    { text: "User history and context." },
    { text: "Random seed generation." }
];
const ListRow_data21: ListRowData[] = [
    { text: "Web crawling." },
    { text: "Indexing of public data (Google Business Profile, LinkedIn, Yelp)." },
    { text: "Training on existing web data." }
];
const ListRow_data22: ListRowData[] = [
    { text: "Consumes API tokens." },
    { text: "May trigger rate limits or bans." },
    { text: "Does not “teach” the AI to recommend your brand to other users." }
];
const ListRow_data23: ListRowData[] = [
    { text: "AI-generated article spinning to create mass content." },
    { text: "Hidden keyword stuffing in white text." },
    { text: "Cloaking (showing different content to AI crawlers than to users)." }
];
const ListRow3_data4: ListRow3Data[] = [
    { description: "Transparency about methodology.", description2: " They explain what they can and cannot control." },
    { description: "Focus on measurement, not magic.", description2: " They test current visibility and give you a roadmap for improvement." },
    { description: "Clear deliverables.", description2: " They provide reports, audits, and action plans, not vague promises." },
    { description: "Realistic timelines.", description2: " They acknowledge that building AI visibility takes weeks or months, not days." },
    { description: "No guaranteed placements.", description2: " They talk about probability, not certainty." }
];
const ListRow_data24: ListRowData[] = [
    { text: "Google AI Overviews" },
    { text: "ChatGPT (OpenAI)" },
    { text: "Perplexity" },
    { text: "Claude (Anthropic)" },
    { text: "Gemini (Google)" },
    { text: "Grok (xAI)" },
    { text: "DeepSeek" }
];
const ListRow2_data4: ListRow2Data[] = [
    { text: "Presence Rate:", text2: " How often you’re mentioned (0-100%)." },
    { text: "Authority Score:", text2: " How confidently AI systems recommend you (0-100%)." },
    { text: "Platform breakdown:", text2: " Which platforms mention you most." },
    { text: "Ghost Influence:", text2: " How often competitors are mentioned instead of you." },
    { text: "Citation analysis:", text2: " What AI systems say about you and where they get the information." }
];
const ListRow_data25: ListRowData[] = [
    { text: "Schema markup (LocalBusiness, Article, Product for rich results; FAQ, HowTo, Service as semantic markup)." },
    { text: "Core Web Vitals (LCP, CLS, INP)." },
    { text: "Crawlability and indexability." },
    { text: "Mobile performance." },
    { text: "Heading hierarchy and semantic HTML." },
    { text: "Accessibility and security." }
];
const ListRow_data26: ListRowData[] = [
    { text: "Why it matters for AI visibility." },
    { text: "How to fix it (with code examples where relevant)." },
    { text: "Expected impact on citation probability." }
];
const ListRow_data27: ListRowData[] = [
    { text: "Prioritized recommendations with ROI analysis." },
    { text: "Multi-quarter roadmap connecting SEO, AEO, and GEO tactics." },
    { text: "Real Options Valuation for high-uncertainty decisions." },
    { text: "Adversarial critique to stress-test assumptions." }
];
const ListRow_data28: ListRowData[] = [
    { text: "Which content should you cut? (Kill zone avoidance)" },
    { text: "Which content should you double down on? (Proprietary data, hyper-transactional)" },
    { text: "How do you sequence experiments over 90 days?" },
    { text: "Which platforms should you prioritize?" }
];
const ListRow_data29: ListRowData[] = [
    { text: "Site Audit for quick audits." },
    { text: "AI Visibility for AI visibility tests." },
    { text: "Strategy for bigger engagements." }
];
const ListRow_data30: ListRowData[] = [
    { text: "Client onboarding: Run Site Audit + AI Visibility ($100 total, 2 jobs)." },
    { text: "Store baseline metrics in your CRM." },
    { text: "Run AI Visibility monthly via API to track changes ($50/month, 1 job)." },
    { text: "Run Strategy quarterly for strategic guidance ($50/quarter, 1 job)." }
];
const ListRow_data31: ListRowData[] = [
    { text: "Google Business Profile" },
    { text: "Bing Places" },
    { text: "Yelp" },
    { text: "Apple Maps" },
    { text: "Facebook" },
    { text: "LinkedIn" }
];
const ListRow_data32: ListRowData[] = [
    { text: "Business hours" },
    { text: "Service descriptions" },
    { text: "Category selections" },
    { text: "Website URLs" }
];
const ListRow_data33: ListRowData[] = [
    { text: "name" },
    { text: "description" },
    { text: "address (full PostalAddress object)" },
    { text: "telephone" },
    { text: "priceRange" },
    { text: "openingHours" },
    { text: "areaServed" },
    { text: "sameAs (links to social profiles)" }
];
const ListRow_data34: ListRowData[] = [
    { text: "Add at least one quotation from a credible source per topic (even if the source is you, properly attributed)." },
    { text: "Include specific statistics and data." },
    { text: "Add inline citations to authoritative sources." }
];
const ListRow_data35: ListRowData[] = [
    { text: "“same-day service”" },
    { text: "“transparent pricing”" },
    { text: "“good for kids”" },
    { text: "“emergency availability”" }
];
const ListRow_data36: ListRowData[] = [
    { text: "Complete 100% of fields." },
    { text: "Write a clear, specific “About” section." },
    { text: "Post regularly (1-2x per week minimum)." }
];
const ListRow_data37: ListRowData[] = [
    { text: "Detailed “About” sections." },
    { text: "Regular activity (posts, comments)." },
    { text: "Recommendations that reinforce key skills." }
];
const ListRow_data38: ListRowData[] = [
    { text: "Run AI Visibility via API." },
    { text: "Store results in your CRM or BI tool." },
    { text: "Track Presence Rate and Authority Score over time." }
];
const ListRow_data39: ListRowData[] = [
    { text: "AI visibility trends." },
    { text: "Platform-by-platform breakdown." },
    { text: "Competitive benchmarking." }
];
const Tile3_data: Tile3Data[] = [
    { description: "Traditional SEO", description2: " remains the foundation. You must rank in the top 10 for AI systems to read you." },
    { description: "Answer Engine Optimization (AEO)", description2: " makes your content easy to extract. Concise answers, question-based headings, and FAQ schema are the core tactics." },
    { description: "Generative Engine Optimization (GEO)", description2: " convinces AI systems to cite you. Expert quotes, statistics, inline citations, and cross-platform consistency are the differentiators." }
];
const ListRow_data40: ListRowData[] = [
    { text: "Quotations from credible sources: +40.9%" },
    { text: "Statistics: +30.6%" },
    { text: "Inline citations: +27.5%" },
    { text: "Keyword stuffing: no meaningful benefit" }
];
const ListRow2_data5: ListRow2Data[] = [
    { text: "Google AI Overviews:", text2: " Pull from top-10 results. Optimize for traditional SEO first, then add snippable structure." },
    { text: "Perplexity:", text2: " Rewards freshness, authority, and multi-channel presence." },
    { text: "Microsoft Copilot:", text2: " Leans heavily on LinkedIn for B2B queries." },
    { text: "Claude:", text2: " Prefers long-form, comprehensive guides." },
    { text: "Gemini:", text2: " Analyzes multimodal content (video, images)." }
];
const ListRow2_data6: ListRow2Data[] = [
    { text: "AI Visibility", text2: " ($50): Test AI visibility across 7 platforms." },
    { text: "Site Audit", text2: " ($50): Fix technical barriers to AI readability." },
    { text: "Strategy", text2: " ($50): Get strategic guidance for the AI era." }
];
const ListRow2_data7: ListRow2Data[] = [
    { text: "Aggarwal et al., “GEO: Generative Engine Optimization” (KDD 2024):", text2: " IIT Delhi, Princeton, Georgia Tech, and the Allen Institute for AI. GEO-bench covers 10,000 queries; the headline experiment uses its 1,000-query test split." },
    { text: "Seer Interactive / Dataslayer (2025):", text2: " Large-scale analysis of AI Overviews impact on CTR and traffic." },
    { text: "Pew Research Center (2025):", text2: " User behavior study on clicking patterns when AI summaries appear." },
    { text: "Search Engine Land:", text2: " Platform-specific optimization research for Perplexity, Copilot, and Google AIOs." },
    { text: "Microsoft Learn:", text2: " Official documentation on Copilot and its Bing-backed web retrieval." },
    { text: "Multiple industry case studies:", text2: " Authoritas, BrightEdge, Semrush, SE Ranking." }
];
const ListRow6_data: ListRow6Data[] = [
    { href: "/strategy/", label: "Get Strategic Guidance with Strategy", text: " ($50 per job)" },
    { href: "/pricing/#products", label: "See all plans", text: " (Pay As You Go, or the Pro membership)" },
    { href: "/sites/", label: "Have Surmado Sites do the work", text: " — we rebuild the site, implement the fixes above, and keep them current" }
];
/** Tldr The New section. */
export default function TldrTheNewSection({ listRowData = ListRow_data, listRow2Data = ListRow2_data, listRowData2 = ListRow_data2, listRowData3 = ListRow_data3, listRowData4 = ListRow_data4, listRowData5 = ListRow_data5, listRowData6 = ListRow_data6, tileData = Tile_data, listRowData7 = ListRow_data7, tile2Data = Tile2_data, listRowData8 = ListRow_data8, listRow3Data = ListRow3_data, listRow3Data2 = ListRow3_data2, listRowData9 = ListRow_data9, listRow2Data2 = ListRow2_data2, listRowData10 = ListRow_data10, listRowData11 = ListRow_data11, listRowData12 = ListRow_data12, listRowData13 = ListRow_data13, listRowData14 = ListRow_data14, listRow3Data3 = ListRow3_data3, listRowData15 = ListRow_data15, listRowData16 = ListRow_data16, listRowData17 = ListRow_data17, listRowData18 = ListRow_data18, listRowData19 = ListRow_data19, listRow2Data3 = ListRow2_data3, listRowData20 = ListRow_data20, listRowData21 = ListRow_data21, listRowData22 = ListRow_data22, listRowData23 = ListRow_data23, listRow3Data4 = ListRow3_data4, listRowData24 = ListRow_data24, listRow2Data4 = ListRow2_data4, listRowData25 = ListRow_data25, listRowData26 = ListRow_data26, listRowData27 = ListRow_data27, listRowData28 = ListRow_data28, listRowData29 = ListRow_data29, listRowData30 = ListRow_data30, listRowData31 = ListRow_data31, listRowData32 = ListRow_data32, listRowData33 = ListRow_data33, listRow4Data = listRow4DataContent, listRow4Data2 = listRow4Data2Content, listRowData34 = ListRow_data34, listRowData35 = ListRow_data35, listRowData36 = ListRow_data36, listRowData37 = ListRow_data37, listRowData38 = ListRow_data38, listRowData39 = ListRow_data39, tile3Data = Tile3_data, listRowData40 = ListRow_data40, listRow2Data5 = ListRow2_data5, listRow2Data6 = ListRow2_data6, listRow2Data7 = ListRow2_data7, listRow5Data = listRow5DataContent, listRow6Data = ListRow6_data } = {}) {
  return (
    <article className="block py-10 bg-background max-lg:py-6">
      <div className="block max-w-200 mx-auto px-10 max-md:px-4 md:max-lg:px-5">
        <div className="block leading-[1.8125rem]">
          <p className="block mb-4">
            {"If you read our "}
            <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="https://help.surmado.com/docs/great-decoupling-ai-overviews-zero-click">
              Great Decoupling
            </a>
            {" article, you know "}
            <strong className="inline font-bold">
              what
            </strong>
            {" changed in search economics."}
          </p>
          {" "}
          <p className="block mb-4">
            {"This guide explains "}
            <strong className="inline font-bold">
              how
            </strong>
            {" to optimize for it: the fundamentals of Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), plus practical patterns you can reuse on your own pages."}
          </p>
          {" "}
          <p className="block mb-4">
            Specifically, you’ll learn:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            <li className="list-item mb-2">
              {"The difference between "}
              <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="/glossary/#aeo">
                Answer Engine Optimization (AEO)
              </a>
              {" and "}
              <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="/glossary/#geo">
                Generative Engine Optimization (GEO)
              </a>
              .
            </li>
            {listRowData.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            This is the tactical companion to the strategic overview. Let’s get specific.
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="tldr-the-new-optimization-disciplines">
            TLDR: The New Optimization Disciplines
          </h2>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
            {listRowData2.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="the-vocabulary-seo-vs-aeo-vs-geo">
            The Vocabulary: SEO vs AEO vs GEO
          </h2>
          {" "}
          <p className="block mb-4">
            Before we get tactical, you need to understand the three distinct disciplines.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="traditional-seo">
            Traditional SEO
          </h3>
          {" "}
          <p className="block mb-4">
            Traditional Search Engine Optimization optimizes for ranking in the list of results.
          </p>
          {" "}
          <p className="block mb-4">
            The goal is to appear in positions 1-10 when someone searches for a keyword.
          </p>
          {" "}
          <p className="block mb-4">
            Core tactics:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData3.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Traditional SEO is still the foundation.
            </strong>
            {" In SE Ranking’s analysis, 92.36% of queries that triggered an AI Overview cited at least one domain that also appeared in the organic top 10. That is a statement about queries, not about pages: it does not mean 92% of cited URLs rank in the top 10."}
          </p>
          {" "}
          <p className="block mb-4">
            You cannot skip traditional SEO and jump to GEO. Organic strength is what puts you in the retrieval pool in the first place. It is not a hard gate, though — query fan-out means an AI Overview can cite sources that never ranked in the top 10 for the original query.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="answer-engine-optimization-aeo">
            Answer Engine Optimization (AEO)
          </h3>
          {" "}
          <p className="block mb-4">
            AEO treats the search engine as a question-answering machine.
          </p>
          {" "}
          <p className="block mb-4">
            The goal is to make your content easy to extract for direct answers, featured snippets, voice responses, and AI summaries.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Core philosophy:
            </strong>
            {" concision and structure."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Primary tactics:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              1. The 40-60 Word Direct Answer
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Place the answer to the question in the first 40-60 words immediately following a question-based heading.
          </p>
          {" "}
          <p className="block mb-4">
            Example:
          </p>
          {" "}
          <pre className="block my-6 p-4 rounded-2xl overflow-auto text-color-001 [font-family:monospace] whitespace-pre text-nowrap bg-color-011 max-lg:-mx-4 max-lg:p-3 max-lg:text-xs max-lg:leading-[1.375rem] max-lg:rounded-[initial]">
            <code className="inline rounded-lg [font-family:'SF_Mono',_Monaco,_'Cascadia_Code',_monospace] text-sm leading-[1.5625rem]">
              <span className="inline">
                <span className="inline text-accent font-bold">
                  ## Do you offer same-day HVAC repair in Dallas?
                </span>
              </span>
              {"\n"}
              <span className="inline" />
              {"\n"}
              <span className="inline">
                <span className="inline">
                  Yes. We offer 24/7 emergency HVAC repair with same-day service in Dallas,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  including weekends and holidays. Our service call fee is $89, which includes
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  diagnosis. Repairs start at $150. Call 214-555-1234 to schedule.
                </span>
              </span>
            </code>
          </pre>
          {" "}
          <p className="block mb-4">
            This format makes it trivial for the AI to identify the question and extract the answer.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              2. Question-Based Headings (H2/H3)
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Structure content around actual user queries.
          </p>
          {" "}
          <p className="block mb-4">
            Instead of:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData4.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            Use:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData5.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            This mirrors how users phrase questions to AI systems.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              3. FAQ and HowTo Schema Markup
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Schema markup is the native language AI systems prefer. A caveat on what it buys you: Google retired FAQ rich results in May 2026 and deprecated HowTo rich results in 2023, and it says no special structured data is required for AI Overviews or AI Mode. FAQPage and HowTo markup are still worth shipping as machine-readable structure — just not as a route to a rich result.
          </p>
          {" "}
          <p className="block mb-4">
            Implementing FAQPage schema tells the AI explicitly:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData6.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            AEO is about reducing friction between the user’s question and your answer.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="generative-engine-optimization-geo">
            Generative Engine Optimization (GEO)
          </h3>
          {" "}
          <p className="block mb-4">
            GEO is newer and more technical.
          </p>
          {" "}
          <p className="block mb-4">
            The goal is to optimize for how Large Language Models select sources during the synthesis process.
          </p>
          {" "}
          <p className="block mb-4">
            Unlike AEO, which targets extraction of pre-written answers, GEO targets the model’s training biases and citation preferences.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The GEO Study (Aggarwal et al., 2024)
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            In 2024, researchers from IIT Delhi, Princeton, Georgia Tech, and the Allen Institute for AI published the first large-scale empirical study of GEO tactics.
          </p>
          {" "}
          <p className="block mb-4">
            They built GEO-bench, a benchmark of 10,000 queries, and ran the headline experiment on its 1,000-query test split across five runs. They measured two different things, and the distinction matters: how much of the generated answer a source ends up occupying (position-adjusted word count), and how visible a rater judges that source to be (subjective impression).
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Key findings:
            </strong>
          </p>
          {" "}
          <table className="table my-6 rounded-2xl overflow-hidden bg-surface-2 max-lg:block max-lg:overflow-x-auto max-lg:text-sm max-lg:leading-[1.5625rem]">
            <thead className="table-header-group align-middle">
              <tr className="table-row align-middle">
                <th className="table-cell py-4 px-5 align-top font-bold text-left bg-surface-2 max-lg:py-3 max-lg:px-4">
                  Tactic
                </th>
                <th className="table-cell py-4 px-5 align-top font-bold text-left bg-surface-2 max-lg:py-3 max-lg:px-4">
                  Position-Adjusted Word Count
                </th>
                <th className="table-cell py-4 px-5 align-top font-bold text-left bg-surface-2 max-lg:py-3 max-lg:px-4">
                  Subjective Impression
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle">
              {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
            </tbody>
          </table>
          {" "}
          <p className="block mb-4">
            {"Two rows come with caveats the numbers alone hide. The authors report that an authoritative voice showed "}
            <strong className="inline font-bold">
              no significant improvement
            </strong>
            , so treat that row as unproven rather than as a small win. And keyword stuffing did not collapse visibility the way the folklore says: it moved the two metrics in opposite directions by single digits, which is a finding of little or no benefit, not of universal harm.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              What this tells us:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            LLMs are biased toward content that looks evidentiary.
          </p>
          {" "}
          <p className="block mb-4">
            Quotations from credible sources (+40.9%) work because the model uses quotation marks and attribution as a proxy for credibility.
          </p>
          {" "}
          <p className="block mb-4">
            Statistics (+30.6%) signal factual density.
          </p>
          {" "}
          <p className="block mb-4">
            Inline citations (+27.5%) show that the content itself is building on authoritative sources, creating a chain of trust.
          </p>
          {" "}
          <p className="block mb-4">
            Keyword stuffing, by contrast, bought nothing worth having. It degrades the text’s natural flow, and the study found no meaningful upside to it.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The Consensus Engine Theory
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            LLMs generate text based on probability. They favor information that appears consistently across their training data.
          </p>
          {" "}
          <p className="block mb-4">
            This creates what we call the “Consensus Engine” effect.
          </p>
          {" "}
          <p className="block mb-4">
            If your business hours are listed as “Mon-Fri 9-5” on your website but “Mon-Sat 8-6” on Yelp, the AI loses confidence. It may omit your hours entirely to avoid hallucinating incorrect information.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              GEO strategy is about building consensus.
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Your NAP (name, address, phone), hours, services, and value propositions must be identical across:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData7.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            Consistency reduces noise. The AI can triangulate the facts with high confidence.
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="comparison-table-seo-vs-aeo-vs-geo">
            Comparison Table: SEO vs AEO vs GEO
          </h2>
          {" "}
          <table className="table my-6 rounded-2xl overflow-hidden bg-surface-2 max-lg:block max-lg:overflow-x-auto max-lg:text-sm max-lg:leading-[1.5625rem]">
            <thead className="table-header-group align-middle">
              <tr className="table-row align-middle">
                <th className="table-cell py-4 px-5 align-top font-bold text-left bg-surface-2 max-lg:py-3 max-lg:px-4">
                  Aspect
                </th>
                <th className="table-cell py-4 px-5 align-top font-bold text-left bg-surface-2 max-lg:py-3 max-lg:px-4">
                  Traditional SEO
                </th>
                <th className="table-cell py-4 px-5 align-top font-bold text-left bg-surface-2 max-lg:py-3 max-lg:px-4">
                  AEO
                </th>
                <th className="table-cell py-4 px-5 align-top font-bold text-left bg-surface-2 max-lg:py-3 max-lg:px-4">
                  GEO
                </th>
              </tr>
            </thead>
            <tbody className="table-row-group align-middle">
              {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
            </tbody>
          </table>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The key insight:
            </strong>
            {" You need all three."}
          </p>
          {" "}
          <p className="block mb-4">
            SEO gets you into the pool of pages the AI reads.
          </p>
          {" "}
          <p className="block mb-4">
            AEO makes your content easy to extract.
          </p>
          {" "}
          <p className="block mb-4">
            GEO makes the AI choose you over competitors when synthesizing the final answer.
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="quick-answers-to-common-aeo-and-geo-questions">
            Quick answers to common AEO and GEO questions
          </h2>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="how-is-geo-different-from-answer-engine-optimization-aeo">
            How is GEO different from Answer Engine Optimization (AEO)?
          </h3>
          {" "}
          <p className="block mb-4">
            Answer Engine Optimization focuses on making it easy for a system to pull a direct answer from your page: clear question headings, concise answers nearby, and structured FAQs.
          </p>
          {" "}
          <p className="block mb-4">
            Generative Engine Optimization focuses on influencing which sources a large language model trusts when it synthesizes an answer: statistics, attributed expert quotes, inline citations to reputable sources, and the same facts repeated accurately across your site and major listings.
          </p>
          {" "}
          <p className="block mb-4">
            Most teams need both. Traditional SEO still comes first so answer engines can find you in the candidate set.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="what-does-example-content-for-aeo-look-like">
            What does example content for AEO look like?
          </h3>
          {" "}
          <p className="block mb-4">
            {"Use the HVAC repair pattern earlier in this guide under "}
            <strong className="inline font-bold">
              The 40-60 Word Direct Answer
            </strong>
            . The recipe is simple: put the user’s question in the heading, then answer it in plain language in the first paragraph.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="what-does-example-content-for-geo-look-like">
            What does example content for GEO look like?
          </h3>
          {" "}
          <p className="block mb-4">
            GEO-heavy pages read like reference material worth citing: specific numbers with sources, quotations with attribution, and consistent business facts across channels so models can triangulate confidence.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="how-do-i-optimize-for-aeo-and-geo-without-skipping-steps">
            How do I optimize for AEO and GEO without skipping steps?
          </h3>
          {" "}
          <p className="block mb-4">
            Earn relevance in traditional search for the topics you care about, then layer AEO structure (questions and tight answers), then GEO signals (evidence and consensus). The implementation checklist later in this guide follows that order.
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="platform-specific-optimization-tactics">
            Platform-Specific Optimization Tactics
          </h2>
          {" "}
          <p className="block mb-4">
            Each AI platform behaves differently. A one-size-fits-all approach fails.
          </p>
          {" "}
          <p className="block mb-4">
            Here’s what works for each major platform.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="google-ai-overviews-the-hybrid-engine">
            Google AI Overviews: The Hybrid Engine
          </h3>
          {" "}
          <p className="block mb-4">
            Google AI Overviews are not a separate search engine. They are a summarization layer on top of traditional Google Search.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              How it works:
            </strong>
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            {listRowData8.map((d, i) => <ListRow key={i} d={d} />)}
          </ol>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Key finding:
            </strong>
            {" SE Ranking found that 92.36% of AI Overview-triggering queries cited at least one domain that also ranked in the organic top 10. Read it carefully — it counts queries with any overlap, not the share of citations that come from the top 10."}
          </p>
          {" "}
          <p className="block mb-4">
            So strong organic visibility still helps, but it is not a gate. AI Overview retrieval fans a query out into related sub-queries and can pull sources well outside the conventional top 10.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Optimization tactics for Google AIOs:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              1. Technical Prerequisites
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              2. Content Architecture
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow3Data2.map((d, i) => <ListRow3 key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              3. The Citation Advantage
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Seer Interactive found that brands cited within the AI Overview text saw about a 35% higher organic click-through rate than brands ranking below but not cited — roughly 0.70% against 0.52%. It is a correlation across brands, not evidence that the citation caused the lift.
          </p>
          {" "}
          <p className="block mb-4">
            Being cited is a badge of authority. It signals to the user that this brand is the definitive source.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              4. Ads in AI Overviews
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            {"Google says eligible ads may appear above, below, or "}
            <strong className="inline font-bold">
              within
            </strong>
            {" AI Overviews. Placement inside the overview is limited to certain markets and formats and is expanding, and advertisers can neither target it directly nor opt out."}
          </p>
          {" "}
          <p className="block mb-4">
            This creates “Sponsored Citations” for brands willing to pay.
          </p>
          {" "}
          <p className="block mb-4">
            Do not plan on a wall between the generated answer and paid placement. There isn’t one.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="perplexity-ai-the-citation-first-engine">
            Perplexity AI: The Citation-First Engine
          </h3>
          {" "}
          <p className="block mb-4">
            Perplexity brands itself as an “Answer Engine” focused on transparency and source attribution.
          </p>
          {" "}
          <p className="block mb-4">
            For researchers, academics, and B2B customers, Perplexity is increasingly the first search destination.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              How it works:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Perplexity uses a three-layer (L3) reranking system.
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            {listRowData9.map((d, i) => <ListRow key={i} d={d} />)}
          </ol>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Optimization tactics for Perplexity:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              1. Domain Authority Bias
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Perplexity exhibits a strong preference for established, authoritative domains.
          </p>
          {" "}
          <p className="block mb-4">
            If you’re a low-authority blog competing with WebMD or Mayo Clinic, you’re unlikely to be cited unless you’re the sole source of a specific fact.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Strategy:
            </strong>
            {" Focus on niche expertise. Be the only source for a specific data point, case study, or local insight."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              2. Freshness as a Core Signal
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Perplexity updates its index multiple times daily.
          </p>
          {" "}
          <p className="block mb-4">
            Content with recent publication or update dates receives a significant ranking boost.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Tactic:
            </strong>
            {" Add “Last updated: [Date]” to your articles and actually update them. Refresh statistics, add new case studies, incorporate recent developments."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              3. Engagement Metrics
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Unlike Google, which relies heavily on links, Perplexity appears to weigh post-click engagement.
          </p>
          {" "}
          <p className="block mb-4">
            Higher scroll depth and longer session durations correlate with sustained citation frequency over time.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Implication:
            </strong>
            {" Your content must be genuinely useful and readable, not just optimized for extraction."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              4. Focus Modes and Multi-Channel Optimization
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Perplexity offers “Focus Modes” that restrict search to specific datasets.
          </p>
          {" "}
          <p className="block mb-4">
            To maximize visibility, you need a presence across multiple channels:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow2Data2.map((d, i) => <ListRow2 key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              5. The Wikipedia Gateway
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Perplexity treats Wikipedia as ground truth.
          </p>
          {" "}
          <p className="block mb-4">
            If your brand or industry has a Wikipedia entry, ensure it’s accurate and neutral.
          </p>
          {" "}
          <p className="block mb-4">
            If you’re cited as a reference on relevant Wikipedia pages, your authority score in Perplexity increases significantly.
          </p>
          {" "}
          <p className="block mb-4">
            You cannot ethically manipulate Wikipedia. But you can:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData10.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="microsoft-copilot-the-b2b-and-enterprise-engine">
            Microsoft Copilot: The B2B and Enterprise Engine
          </h3>
          {" "}
          <p className="block mb-4">
            Microsoft Copilot (formerly Bing Chat) is distinctive for how tightly it sits inside Microsoft 365 and the Microsoft Graph. For public web content, Microsoft documents Bing Search as the retrieval system behind it.
          </p>
          {" "}
          <p className="block mb-4">
            For B2B brands, Copilot is the most important platform because it’s embedded in the tools your customers use every day.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Optimization tactics for Microsoft Copilot:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              1. Your Bing Presence
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Copilot retrieves public web content through Bing, so Bing visibility — not just Google visibility — is what puts you in front of it. Verify your site in Bing Webmaster Tools and confirm Bingbot is not blocked.
          </p>
          {" "}
          <p className="block mb-4">
            Microsoft has not published any LinkedIn-specific weighting for Copilot, so treat LinkedIn as one more indexable property rather than a privileged channel. It is still worth keeping accurate: a well-maintained Company Page is a strong, crawlable, consistent source of the facts about your business.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              LinkedIn Company Page optimization:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData11.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Personal profiles for founders/executives:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData12.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              2. Clarity Over Cleverness
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Microsoft’s documentation emphasizes “Clarity Signals.”
          </p>
          {" "}
          <p className="block mb-4">
            Copilot prefers content that is unambiguous and explicit.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Bad example:
            </strong>
            {" “We deliver excellence in innovative solutions for forward-thinking enterprises.”"}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Good example:
            </strong>
            {" “We sell industrial HVAC systems for manufacturing facilities in Ohio. We handle installation, maintenance, and 24/7 emergency repair.”"}
          </p>
          {" "}
          <p className="block mb-4">
            Vague marketing language is ignored. Concrete, specific language is indexed and retrieved.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              3. Citations and Footnotes
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Copilot is the most aggressive platform at providing citations.
          </p>
          {" "}
          <p className="block mb-4">
            It places footnotes within the text and a “Learn More” list at the bottom.
          </p>
          {" "}
          <p className="block mb-4">
            This makes it a high-value target for referral traffic if you can get cited.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Strategy:
            </strong>
            {" Provide clear, citable statistics and data points in your content. Use specific numbers, dates, and attributions that the AI can footnote."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              4. Local SEO and Bing Places
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            For local businesses, Copilot relies on Bing Places.
          </p>
          {" "}
          <p className="block mb-4">
            Many businesses optimize their Google Business Profile but neglect Bing Places.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Critical tactic:
            </strong>
            {" Ensure absolute consistency in NAP data across Bing Places, Google Business Profile, and your website."}
          </p>
          {" "}
          <p className="block mb-4">
            A disconnect between Google and Bing is a common failure point for Copilot visibility.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              5. B2B Brand Lift Measurement
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Microsoft provides specific API tools for measuring “Brand Lift” and B2B performance.
          </p>
          {" "}
          <p className="block mb-4">
            Agencies working with B2B clients can use these to measure campaign impact, but note that they measure advertising lift — they are not a readout of how Copilot describes a brand.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="claude-the-long-context-research-engine">
            Claude: The Long-Context Research Engine
          </h3>
          {" "}
          <p className="block mb-4">
            Claude (by Anthropic) operates differently from search-first platforms.
          </p>
          {" "}
          <p className="block mb-4">
            It’s often used as a reasoning engine where users upload documents or ask it to analyze topics in depth.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              How users interact with Claude:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData13.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Optimization tactics for Claude:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              1. The Definitive Guide Strategy
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Claude’s distinct advantage is its large context window (up to 200,000+ tokens).
          </p>
          {" "}
          <p className="block mb-4">
            It excels at reading entire books or comprehensive reports.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Strategy:
            </strong>
            {" Produce long-form, comprehensive content."}
          </p>
          {" "}
          <p className="block mb-4">
            “The Definitive Guide to X” format works exceptionally well.
          </p>
          {" "}
          <p className="block mb-4">
            Short, thin content is less likely to be utilized by users leveraging Claude for deep research.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              2. Structured, Scannable Long-Form
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Long doesn’t mean unreadable.
          </p>
          {" "}
          <p className="block mb-4">
            Claude processes structure well. Use:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData14.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            This makes it easy for Claude to extract specific information when a user asks a follow-up question.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              3. Anthropic’s Three Bots: ClaudeBot, Claude-SearchBot, and Claude-User
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Anthropic operates three separate user agents, each controlled independently in robots.txt.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The three bots:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow3Data3.map((d, i) => <ListRow3 key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Recommendation for brands seeking visibility:
            </strong>
            {" Allow Claude-SearchBot and Claude-User. ClaudeBot is a separate, independent decision about training that doesn’t affect today’s visibility."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              4. Research Mode and Multi-Source Citations
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Claude’s “Research Mode” performs multi-step analysis across multiple sources.
          </p>
          {" "}
          <p className="block mb-4">
            Brands that appear across multiple high-quality domains stand the best chance of being synthesized.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Strategy:
            </strong>
            {" Get mentioned in:"}
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData15.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            This multi-source presence gives Claude triangulation points for verification.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              5. Constitutional AI and Safety Filters
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Claude uses “Constitutional AI” with strong safety guardrails.
          </p>
          {" "}
          <p className="block mb-4">
            Content that borders on unethical, manipulative, or factually dubious is filtered out.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Implication:
            </strong>
            {" Ethical, safe, well-sourced content is a prerequisite for visibility in Claude."}
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="gemini-the-multimodal-and-workspace-engine">
            Gemini: The Multimodal and Workspace Engine
          </h3>
          {" "}
          <p className="block mb-4">
            Gemini is Google’s native multimodal model, distinct from Google AI Overviews.
          </p>
          {" "}
          <p className="block mb-4">
            It powers the “AI Mode” assistant and integrates deeply with Google Workspace (Docs, Sheets, Gmail, Drive).
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Optimization tactics for Gemini:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              1. Citation Patterns: Competitors vs Publishers
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Analysis of Gemini’s citation behavior reveals interesting patterns.
          </p>
          {" "}
          <p className="block mb-4">
            This is distinct from Google Search, which leans more on industry publications.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Implication:
            </strong>
            {" For B2B, your competitor’s blog is your biggest rival for AI visibility, not just their ads or rankings."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Strategy:
            </strong>
            {" Publish better, more detailed content than your competitors. Original research, detailed case studies, and transparent pricing information are high-value targets."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              2. Discussion Forums for Technical Queries
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            For developer tools and technical queries, Gemini heavily weighs Reddit and Hacker News.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Strategy for technical products:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData16.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            This builds the multi-source consensus Gemini uses for technical recommendations.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              3. Video SEO and Multimodal Optimization
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Gemini processes video, images, and audio natively.
          </p>
          {" "}
          <p className="block mb-4">
            Unlike traditional search which reads alt text, Gemini analyzes the pixel data of images and the audio of videos.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Video optimization tactics:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData17.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Image optimization tactics:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData18.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              4. Google Workspace Integration
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Gemini has deep access to Google Workspace data for users who enable it.
          </p>
          {" "}
          <p className="block mb-4">
            For B2B brands, this means:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData19.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Strategy:
            </strong>
            {" Encourage customers to use Google Workspace integrations if your product has them. Each interaction is a signal."}
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="technical-infrastructure-for-ai-visibility">
            Technical Infrastructure for AI Visibility
          </h2>
          {" "}
          <p className="block mb-4">
            Underpinning all content strategies is technical infrastructure.
          </p>
          {" "}
          <p className="block mb-4">
            AI crawlers are less forgiving than traditional search bots. They have lower tolerance for latency and ambiguity.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="robotstxt-and-ai-user-agents">
            Robots.txt and AI User Agents
          </h3>
          {" "}
          <p className="block mb-4">
            The robots.txt file has evolved from a simple allow/disallow list to a granular permission system.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Key user agents to know:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow2Data3.map((d, i) => <ListRow2 key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The strategic choice:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Blocking training bots (GPTBot, ClaudeBot) doesn’t remove you from today’s AI answers; it only shapes what future models learn. Blocking the search bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot) is what results in zero visibility in those tools’ answers today.
          </p>
          {" "}
          <p className="block mb-4">
            For marketing purposes, the visibility benefits usually outweigh the IP risks.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Recommendation:
            </strong>
            {" Allow AI crawlers unless you have specific legal or competitive reasons to block them."}
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="advanced-schema-implementation">
            Advanced Schema Implementation
          </h3>
          {" "}
          <p className="block mb-4">
            Schema markup is the Rosetta Stone for AI.
          </p>
          {" "}
          <p className="block mb-4">
            It translates human concepts into machine-readable entities.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Critical schema types for AI visibility:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              LocalBusiness Schema
            </strong>
          </p>
          {" "}
          <pre className="block my-6 p-4 rounded-2xl overflow-auto text-color-001 [font-family:monospace] whitespace-pre text-nowrap bg-color-011 max-lg:-mx-4 max-lg:p-3 max-lg:text-xs max-lg:leading-[1.375rem] max-lg:rounded-[initial]">
            <code className="inline rounded-lg [font-family:'SF_Mono',_Monaco,_'Cascadia_Code',_monospace] text-sm leading-[1.5625rem]">
              <span className="inline">
                <span className="inline">
                  {"{"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"@context\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "https://schema.org"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"@type\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "LocalBusiness"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"name\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  {"\"ABC Heating & Air\""}
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"description\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "24/7 emergency HVAC repair with same-day service"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"address\""}
                </span>
                <span className="inline">
                  {": {"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"    \"@type\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "PostalAddress"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"    \"streetAddress\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "123 Main St"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"    \"addressLocality\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "Dallas"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"    \"addressRegion\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "TX"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"    \"postalCode\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "75201"
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  {"  },"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"telephone\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "+1-214-555-1234"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"priceRange\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "$$"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"openingHours\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "Mo-Fr 08:00-18:00"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"sameAs\""}
                </span>
                <span className="inline">
                  : [
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-color-004">
                  {"    \"https://www.facebook.com/abcheating\""}
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-color-004">
                  {"    \"https://www.linkedin.com/company/abcheating\""}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  {"  ]"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  {"}"}
                </span>
              </span>
            </code>
          </pre>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              FAQPage Schema
            </strong>
          </p>
          {" "}
          <pre className="block my-6 p-4 rounded-2xl overflow-auto text-color-001 [font-family:monospace] whitespace-pre text-nowrap bg-color-011 max-lg:-mx-4 max-lg:p-3 max-lg:text-xs max-lg:leading-[1.375rem] max-lg:rounded-[initial]">
            <code className="inline rounded-lg [font-family:'SF_Mono',_Monaco,_'Cascadia_Code',_monospace] text-sm leading-[1.5625rem]">
              <span className="inline">
                <span className="inline">
                  {"{"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"@context\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "https://schema.org"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"@type\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "FAQPage"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"  \"mainEntity\""}
                </span>
                <span className="inline">
                  {": [{"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"    \"@type\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "Question"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"    \"name\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "Do you offer same-day HVAC repair?"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"    \"acceptedAnswer\""}
                </span>
                <span className="inline">
                  {": {"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"      \"@type\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "Answer"
                </span>
                <span className="inline">
                  ,
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-accent">
                  {"      \"text\""}
                </span>
                <span className="inline">
                  {": "}
                </span>
                <span className="inline text-color-004">
                  "Yes. We offer 24/7 emergency HVAC repair with same-day service in Dallas, including weekends and holidays."
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  {"    }"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  {"  }]"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  {"}"}
                </span>
              </span>
            </code>
          </pre>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Validation is critical.
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Use Google’s Rich Results Test to validate schema.
          </p>
          {" "}
          <p className="block mb-4">
            Broken schema is worse than no schema. It sends conflicting signals to AI systems.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Nested schema builds relationships.
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Nesting Review schema inside Product schema, or Author schema inside Article schema, establishes the connections that build E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="how-to-spot-and-avoid-ai-visibility-scams">
            How to Spot and Avoid AI Visibility Scams
          </h2>
          {" "}
          <p className="block mb-4">
            The anxiety around AI adoption has created a marketplace for fraudulent services.
          </p>
          {" "}
          <p className="block mb-4">
            Here’s how to protect yourself.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="red-flag-1-guaranteed-placement-in-ai-answers">
            Red Flag #1: “Guaranteed Placement” in AI Answers
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The scam:
            </strong>
            {" Agencies promising “guaranteed inclusion” in ChatGPT, Gemini, or Google AI Overviews."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why it’s impossible:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            LLMs are non-deterministic. Their output varies based on:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData20.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            No external party has administrative access to insert a brand into model weights or guarantee a specific output.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The reality:
            </strong>
            {" You can optimize for higher probability of citation, but no one can guarantee it."}
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="red-flag-2-well-submit-your-site-to-ai-services">
            Red Flag #2: “We’ll Submit Your Site to AI” Services
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The scam:
            </strong>
            {" Services offering to “submit your site to ChatGPT” or “register your business with AI search engines.”"}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why it’s a scam:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            There is no submission process for LLMs.
          </p>
          {" "}
          <p className="block mb-4">
            AI models discover businesses organically through:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData21.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            {"There is no paid “AI listing” program. Anyone claiming to sell this is lying. (Longer take: "}
            <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="/blog/can-you-pay-to-get-listed-in-chatgpt/">
              can you pay to get listed in ChatGPT?
            </a>
            . Short answer, no.)
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="red-flag-3-bot-farms-and-query-spam">
            Red Flag #3: Bot Farms and Query Spam
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The scam:
            </strong>
            {" Services that “train” AI models by spamming them with thousands of questions about your brand using bot farms."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why it fails:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Interactions in a chat interface are not immediately fed back into the model’s training set.
          </p>
          {" "}
          <p className="block mb-4">
            Training happens in distinct, infrequent epochs (months or years apart).
          </p>
          {" "}
          <p className="block mb-4">
            Spamming queries into a live chatbot:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData22.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            It’s a waste of money.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="red-flag-4-black-hat-geo-tactics">
            Red Flag #4: Black Hat GEO Tactics
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              The tactics:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData23.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why they fail:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Modern LLMs evaluate text quality using:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            <li className="list-item mb-2">
              <strong className="inline font-bold">
                Perplexity:
              </strong>
              {" A measure of how natural text sounds."}
            </li>
            <li className="list-item mb-2">
              <strong className="inline font-bold">
                Burstiness:
              </strong>
              {" Variation in sentence length and structure."}
            </li>
          </ul>
          {" "}
          <p className="block mb-4">
            AI-generated “slop” often has low perplexity and unnatural burstiness patterns.
          </p>
          {" "}
          <p className="block mb-4">
            These are easily detected and downgraded by quality filters.
          </p>
          {" "}
          <p className="block mb-4">
            The GEO study found no meaningful visibility benefit from keyword stuffing.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="how-to-identify-legitimate-services">
            How to Identify Legitimate Services
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Good signs:
            </strong>
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            {listRow3Data4.map((d, i) => <ListRow3 key={i} d={d} />)}
          </ol>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Surmado’s approach:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            We test how AI systems currently talk about your business (AI Visibility).
          </p>
          {" "}
          <p className="block mb-4">
            We identify technical and structural issues blocking AI visibility (Site Audit).
          </p>
          {" "}
          <p className="block mb-4">
            We give you a strategic playbook for improvement (Strategy).
          </p>
          {" "}
          <p className="block mb-4">
            We never promise guaranteed placement because it’s technically impossible.
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="where-surmado-fits-measurement-and-strategy">
            Where Surmado Fits: Measurement and Strategy
          </h2>
          {" "}
          <p className="block mb-4">
            The shift to answer engines requires new tools and new metrics.
          </p>
          {" "}
          <p className="block mb-4">
            Surmado offers three products designed for this era.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="surmado-ai-visibility-ai-visibility-testing-50">
            Surmado AI Visibility: AI Visibility Testing ($50)
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              What it does:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Tests how 7 AI platforms talk about your business for the customer profile that matters, with 50+ questions they’d actually ask.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Platforms tested:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData24.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              What you get:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow2Data4.map((d, i) => <ListRow2 key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why this matters:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Traditional rank trackers tell you where you rank on Google.
          </p>
          {" "}
          <p className="block mb-4">
            AI Visibility tells you what AI systems actually say about you when users ask for recommendations.
          </p>
          {" "}
          <p className="block mb-4">
            This is the new success metric: Share of Voice in AI answers.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Async and API-friendly:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            AI Visibility reports run asynchronously (about 15-30 minutes).
          </p>
          {" "}
          <p className="block mb-4">
            You can call the API, get a job ID, and receive results via webhook when complete.
          </p>
          {" "}
          <p className="block mb-4">
            Perfect for agencies managing multiple clients or devs building custom dashboards.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Cost:
            </strong>
            {" $50 per job."}
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="surmado-site-audit-technical-foundation-for-ai-visibility-50">
            Surmado Site Audit: Technical Foundation for AI Visibility ($50)
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              What it does:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Audits your site for technical and structural issues that block AI systems from reading you.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              What Site Audit checks:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData25.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why this matters:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            AI systems can’t cite you if they can’t read you.
          </p>
          {" "}
          <p className="block mb-4">
            Site Audit identifies the structural barriers preventing AI platforms from understanding your business.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              What you get:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            A prioritized action plan. 5-10 fixes ranked by impact.
          </p>
          {" "}
          <p className="block mb-4">
            Each issue includes:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData26.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Cost:
            </strong>
            {" $50 per job."}
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="surmado-strategy-strategic-guidance-50">
            Surmado Strategy: Strategic Guidance ($50)
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              What it does:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Runs a six-AI adversarial debate analyzing your business, competitive landscape, and market positioning.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              What Strategy delivers:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData27.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why this matters:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            The AI era requires strategic decisions, not just tactical fixes.
          </p>
          {" "}
          <p className="block mb-4">
            Strategy answers:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData28.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              For agencies:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Strategy helps you rewrite retainer proposals around answer engines and Share of Voice instead of old-school “we’ll get you to #1 for keyword X” promises.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Cost:
            </strong>
            {" $50 per job."}
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="plans-agency-leverage">
            Plans: Agency Leverage
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              How plans work:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            $50 per job pay-as-you-go, or choose a plan for better value.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Pro membership:
            </strong>
            {" $99/month billed annually ($150 monthly) with 5 jobs included (extra jobs $25 each)."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Agencies:
            </strong>
            {" volume pricing and white-label by agreement (email "}
            <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="mailto:hi@surmado.com">
              hi@surmado.com
            </a>
            ).
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why plans matter for agencies:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Agencies can buy Jobs at volume, then mix and match:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData29.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            No minimums.
          </p>
          {" "}
          <p className="block mb-4">
            You can resell the value however you want.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Example agency workflow:
            </strong>
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            {listRowData30.map((d, i) => <ListRow key={i} d={d} />)}
          </ol>
          {" "}
          <p className="block mb-4">
            Plans give you flexibility and margin.
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="the-5-phase-implementation-playbook">
            The 5-Phase Implementation Playbook
          </h2>
          {" "}
          <p className="block mb-4">
            Here’s how to actually implement AEO and GEO.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="phase-1-clarity-audit-week-1">
            Phase 1: Clarity Audit (Week 1)
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Objective:
            </strong>
            {" Establish a single, unambiguous digital identity."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Actions:
            </strong>
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            <li className="list-item mb-2">
              <p className="block mb-4">
                Audit NAP (name, address, phone) across all directories:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                {listRowData31.map((d, i) => <ListRow key={i} d={d} />)}
              </ul>
              {" "}
            </li>
            <li className="list-item mb-2">
              <p className="block mb-4">
                Check for inconsistencies in:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                {listRowData32.map((d, i) => <ListRow key={i} d={d} />)}
              </ul>
              {" "}
            </li>
            <li className="list-item mb-2">
              <p className="block mb-4">
                Document every discrepancy.
              </p>
              {" "}
            </li>
          </ol>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why this matters:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            AI models function as consensus engines.
          </p>
          {" "}
          <p className="block mb-4">
            If your hours differ across platforms, the AI loses confidence and may exclude you from “Open Now” queries to avoid hallucination errors.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Metric:
            </strong>
            {" Aim for 100% consistency across all tier-1 directories."}
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="phase-2-technical-signal-boosting-week-2">
            Phase 2: Technical Signal Boosting (Week 2)
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Objective:
            </strong>
            {" Translate business data into machine-readable format."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Actions:
            </strong>
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            <li className="list-item mb-2">
              <p className="block mb-4">
                Implement LocalBusiness schema with these properties:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                {listRowData33.map((d, i) => <ListRow key={i} d={d} />)}
              </ul>
              {" "}
            </li>
            {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} />)}
          </ol>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why this matters:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            This disambiguates your entity.
          </p>
          {" "}
          <p className="block mb-4">
            It tells the AI “This is a plumber in Chicago” in its native code language.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="phase-3-content-engineering-for-answers-weeks-3-4">
            Phase 3: Content Engineering for Answers (Weeks 3-4)
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Objective:
            </strong>
            {" Capture Q&A voice queries with snippable content."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Actions:
            </strong>
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            {listRow4Data2.map((d, i) => <ListRow4 key={i} d={d} />)}
            <li className="list-item mb-2">
              <p className="block mb-4">
                Apply the GEO tactics:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                {listRowData34.map((d, i) => <ListRow key={i} d={d} />)}
              </ul>
              {" "}
            </li>
          </ol>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Example format:
            </strong>
          </p>
          {" "}
          <pre className="block my-6 p-4 rounded-2xl overflow-auto text-color-001 [font-family:monospace] whitespace-pre text-nowrap bg-color-011 max-lg:-mx-4 max-lg:p-3 max-lg:text-xs max-lg:leading-[1.375rem] max-lg:rounded-[initial]">
            <code className="inline rounded-lg [font-family:'SF_Mono',_Monaco,_'Cascadia_Code',_monospace] text-sm leading-[1.5625rem]">
              <span className="inline">
                <span className="inline text-accent font-bold">
                  ## How much does HVAC repair typically cost in Dallas?
                </span>
              </span>
              {"\n"}
              <span className="inline" />
              {"\n"}
              <span className="inline">
                <span className="inline">
                  HVAC repair in Dallas typically costs between $150-$800 depending on the issue.
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  Simple repairs like thermostat replacement start at $150. Compressor or evaporator
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  coil repairs range from $400-$800. Our service call fee is $89, which includes
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  diagnosis and is credited toward repair costs.
                </span>
              </span>
              {"\n"}
              <span className="inline" />
              {"\n"}
              <span className="inline">
                <span className="inline">
                  According to the National Average HVAC Repair Cost study (2024), Dallas prices
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline">
                  are roughly 12% above the national average due to high summer demand.
                </span>
              </span>
              {"\n"}
              <span className="inline" />
              {"\n"}
              <span className="inline">
                <span className="inline text-accent font-bold">
                  ### Common Dallas HVAC Repairs and Costs:
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-color-012">
                  -
                </span>
                <span className="inline">
                  {" Thermostat replacement: $150-$250"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-color-012">
                  -
                </span>
                <span className="inline">
                  {" Refrigerant recharge: $200-$400"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-color-012">
                  -
                </span>
                <span className="inline">
                  {" Compressor repair: $400-$800"}
                </span>
              </span>
              {"\n"}
              <span className="inline">
                <span className="inline text-color-012">
                  -
                </span>
                <span className="inline">
                  {" Evaporator coil repair: $500-$800"}
                </span>
              </span>
            </code>
          </pre>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why this matters:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            This targets the “snippable” format preferred by Google AI Overviews, Perplexity, and voice assistants.
          </p>
          {" "}
          <p className="block mb-4">
            It reduces friction for the AI to extract the answer.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="phase-4-reputation-management-loop-ongoing">
            Phase 4: Reputation Management Loop (Ongoing)
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Objective:
            </strong>
            {" Feed the sentiment analysis engine with structured review data."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Actions:
            </strong>
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            <li className="list-item mb-2">
              <p className="block mb-4">
                Request reviews from recent customers.
              </p>
              {" "}
            </li>
            <li className="list-item mb-2">
              <p className="block mb-4">
                Guide them to mention specific features in their reviews:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                {listRowData35.map((d, i) => <ListRow key={i} d={d} />)}
              </ul>
              {" "}
            </li>
            <li className="list-item mb-2">
              <p className="block mb-4">
                Respond to every review (positive and negative).
              </p>
              {" "}
            </li>
            <li className="list-item mb-2">
              <p className="block mb-4">
                In your response, use semantic keywords that reinforce the association:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                <li className="list-item mb-2">
                  “We’re glad you appreciated our same-day service.”
                </li>
                <li className="list-item mb-2">
                  “Transparency in pricing is one of our core values.”
                </li>
              </ul>
              {" "}
            </li>
          </ol>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why this matters:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            AI systems read review content to determine “best for” recommendations.
          </p>
          {" "}
          <p className="block mb-4">
            The owner’s response confirms the context of the review, strengthening the entity-attribute association.
          </p>
          {" "}
          <h3 className="block mt-8 mb-3 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-xl [font-weight:1000] leading-5 tracking-[-0.5px] uppercase [overflow-wrap:break-word] max-lg:text-lg max-lg:leading-4.5 max-lg:tracking-[-0.45px]" data-component="heading" id="phase-5-the-b2b-and-developer-layer-if-applicable">
            Phase 5: The B2B and Developer Layer (If Applicable)
          </h3>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Objective:
            </strong>
            {" Win Microsoft Copilot and enable programmatic visibility tracking."}
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Actions for B2B brands:
            </strong>
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            <li className="list-item mb-2">
              <p className="block mb-4">
                Optimize your LinkedIn Company Page:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                {listRowData36.map((d, i) => <ListRow key={i} d={d} />)}
              </ul>
              {" "}
            </li>
            <li className="list-item mb-2">
              <p className="block mb-4">
                Optimize key executive profiles:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                {listRowData37.map((d, i) => <ListRow key={i} d={d} />)}
              </ul>
              {" "}
            </li>
            <li className="list-item mb-2">
              <p className="block mb-4">
                Ensure Bing Places is complete and matches Google Business Profile exactly.
              </p>
              {" "}
            </li>
          </ol>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Actions for developers and agencies:
            </strong>
          </p>
          {" "}
          <ol className="block mb-4 pl-6 [list-style-type:decimal] list-outside">
            <li className="list-item mb-2">
              <p className="block mb-4">
                Set up API access to Surmado AI Visibility and Site Audit.
              </p>
              {" "}
            </li>
            <li className="list-item mb-2">
              <p className="block mb-4">
                Build a monthly monitoring workflow:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                {listRowData38.map((d, i) => <ListRow key={i} d={d} />)}
              </ul>
              {" "}
            </li>
            <li className="list-item mb-2">
              <p className="block mb-4">
                Create client dashboards showing:
              </p>
              {" "}
              <ul className="block mb-4 pl-6 [list-style-type:circle] list-outside">
                {listRowData39.map((d, i) => <ListRow key={i} d={d} />)}
              </ul>
              {" "}
            </li>
          </ol>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Why this matters:
            </strong>
          </p>
          {" "}
          <p className="block mb-4">
            Copilot relies heavily on LinkedIn and the Microsoft Graph.
          </p>
          {" "}
          <p className="block mb-4">
            For B2B, this is the primary channel for AI discovery.
          </p>
          {" "}
          <p className="block mb-4">
            For agencies, API integration lets you offer “AI visibility monitoring” as a service without manually running tests every month.
          </p>
          {" "}
          <p className="block mb-4">
            {"Five phases of schema work, content engineering, and reputation management is a lot to keep running manually every quarter. "}
            <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="/sites/">
              Surmado Sites
            </a>
            {" builds each of those fixes into the site directly during the rebuild, then keeps testing your AI visibility afterward instead of leaving that to the next audit cycle."}
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="the-bottom-line">
            The Bottom Line
          </h2>
          {" "}
          <p className="block mb-4">
            The optimization landscape has split into three distinct disciplines.
          </p>
          {tile3Data.map((d, i) => <Tile3 key={i} d={d} />)}
          {" "}
          <p className="block mb-4">
            The GEO research gives us quantitative benchmarks, measured as a source’s share of the generated answer:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRowData40.map((d, i) => <ListRow key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            Each platform behaves differently:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow2Data5.map((d, i) => <ListRow2 key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            Beware of scams. No one can guarantee AI placement. Anyone promising that is lying.
          </p>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Surmado helps you measure and optimize:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow2Data6.map((d, i) => <ListRow2 key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            The businesses that master AEO and GEO in 2026 will own their categories in answer engines.
          </p>
          {" "}
          <p className="block mb-4">
            The ones that ignore it will watch competitors get cited while they wonder why their rankings don’t matter anymore.
          </p>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <h2 className="block mt-10 mb-4 [font-family:'Nunito_Sans_Variable',_'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_sans-serif] text-2xl [font-weight:1000] leading-6 tracking-[-0.6px] uppercase [overflow-wrap:break-word] max-lg:mt-8 max-lg:text-xl max-lg:leading-5 max-lg:tracking-[-0.5px] max-md:[word-break:break-word]" data-component="heading" id="sources-used-in-this-article">
            Sources Used in This Article
          </h2>
          {" "}
          <p className="block mb-4">
            This article synthesizes findings from:
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow2Data7.map((d, i) => <ListRow2 key={i} d={d} />)}
          </ul>
          {" "}
          <hr className="w-180 h-px border-t border-solid border-t-border block my-8 overflow-hidden text-muted-foreground max-md:w-[21.4375rem] md:max-lg:w-182" />
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Related Reading:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} />)}
          </ul>
          {" "}
          <p className="block mb-4">
            <strong className="inline font-bold">
              Take Action:
            </strong>
          </p>
          {" "}
          <ul className="block mb-4 pl-6 [list-style-type:disc] list-outside">
            <li className="list-item mb-2">
              <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="/ai-visibility/">
                Test Your AI Visibility
              </a>
              {" ($50 per job)"}
            </li>
            <li className="list-item mb-2">
              <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="https://try.surmado.com/site-audit">
                Try Site Audit
              </a>
              {" or "}
              <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="/site-audit/">
                Audit Your Technical Foundation ($50 per job)
              </a>
              {" | "}
              <a className="inline text-primary underline cursor-pointer hover:border-clr-13 hover:text-clr-13 hover:outline-clr-13 hover:[text-decoration-color:var(--clr-13)]" data-component="link" href="https://app.surmado.com/">
                Log in
              </a>
            </li>
            {listRow6Data.map((d, i) => <ListRow6 key={i} d={d} />)}
          </ul>
          {" "}
        </div>
      </div>
    </article>
  );
}
