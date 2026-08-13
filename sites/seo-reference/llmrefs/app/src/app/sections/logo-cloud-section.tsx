import ListRow from "../components/list-row";
import Logo from "../components/logo";
import Icon2 from "../svgs/svg-icon2";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
import Tile, { type TileData } from "../components/tile";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import Tile2, { type Tile2Data } from "../components/tile2";
import { ListRow_styles, Logo_styles, Tile_styles } from "../_styles";
import { listRowData as listRowDataContent, logos as logosContent } from "../content";
const ListRow2_data: ListRow2Data[] = [
    { text: "Query fan-out.", text2: " The AI does not paste the full prompt into a search engine. It breaks the question into smaller sub-queries and searches for each one separately. If someone asks \"What is the best VPN for streaming Netflix in Europe?\" the AI might search for \"best VPN 2026,\" \"VPN Netflix streaming,\" and \"VPN Europe servers\" as three separate queries." },
    { text: "Information retrieval.", text2: " The AI searches the web and its own knowledge base for relevant sources. Most use a technique called retrieval-augmented generation (RAG). RAG pulls specific passages from web pages and feeds them to the language model as context." },
    { text: "Synthesis.", text2: " The AI combines information from multiple sources into a single, coherent response. It does not copy and paste. It rewrites and merges information from several pages into one answer." },
    { text: "Citation.", text2: " The response includes links or references to the original sources. These citations drive referral traffic back to the websites that were used." }
];
const Tile_data: TileData[] = [
    { text: "Output format", text2: "List of clickable links", text3: "Synthesized narrative response" },
    { text: "User behavior", text2: "User clicks through to find information", text3: "User gets the answer directly" },
    { text: "Query length", text2: "Short keywords (average 4 words)", text3: "Conversational questions (average 23 words)" },
    { text: "Success metrics", text2: "Rankings, click-through rate, traffic", text3: "Citations, brand mentions, share of voice" },
    { text: "Optimization focus", text2: "Keywords and backlinks", text3: "Content structure and authority signals" },
    { text: "The key question", text2: "\"Are we on page one?\"", text3: "\"Are we in the answer?\"" }
];
const ListRow2_data2: ListRow2Data[] = [
    { text: "E-E-A-T still matters.", text2: " Experience, expertise, authoritativeness, and trustworthiness influence both Google rankings and AI citations." },
    { text: "Technical optimization still matters.", text2: " Fast load times, mobile responsiveness, and crawlability help both search engines and AI systems access your content." },
    { text: "Quality content still wins.", text2: " Thin, surface-level content fails in both environments. AI systems want to cite sources that are genuinely helpful." },
    { text: "Backlinks still matter.", text2: " AI models use live web search to find sources. Pages with strong backlink profiles are more likely to rank for the sub-queries the AI generates. Links also increase how often your brand appears in Common Crawl, the public dataset that most large language models are trained on. More links means more training data exposure, which makes the AI more familiar with your brand." }
];
const ListRow3_data: ListRow3Data[] = [
    { text: "ChatGPT has over 800 million weekly active users" },
    { text: "Google AI Overviews appear on billions of searches per month" },
    { text: "Perplexity processes millions of queries daily" },
    { text: "Apple is integrating AI-native search (including Perplexity and Claude) directly into Safari" }
];
const ListRow2_data3: ListRow2Data[] = [
    { text: "Longer sessions.", text2: " Users spend an average of 6 minutes per AI search session, compared to seconds on Google." },
    { text: "More detailed queries.", text2: " AI search queries average 23 words, compared to 4 words on Google. Users describe their full situation instead of typing fragments." },
    { text: "Higher trust.", text2: " Users treat AI responses as authoritative answers, not starting points for more research." },
    { text: "Follow-up questions.", text2: " Users refine their queries through conversation, providing more context with each message." }
];
const ListRow2_data4: ListRow2Data[] = [
    { text: "Lower volume, higher intent.", text2: " Users arriving from AI search tend to be further along in their decision-making." },
    { text: "Higher conversion rates.", text2: " Users who click through from AI citations are more likely to convert. They have already received a recommendation from the AI." },
    { text: "Growing referral traffic.", text2: " ChatGPT alone is already driving referral traffic to tens of thousands of distinct domains. Vercel reports that 10% of new signups now come from ChatGPT referrals." }
];
const Tile2_data: Tile2Data[] = [
    { description: "Use clear heading hierarchies.", description2: " Organize content with a logical H1, H2, H3 structure. Each section should cover one distinct topic or question. AI systems use headings to understand what each section is about." },
    { description: "Write in scannable formats.", description2: " Use bullet points and numbered lists for processes, features, and comparisons. One study analyzed 10,000 real-world queries and found that pages with structured lists, quotes, and statistics had 30-40% higher visibility in AI responses." },
    { description: "Lead with answers.", description2: " Put the key information at the beginning of each section. Do not bury the answer under paragraphs of context. AI systems are looking for direct, extractable answers." },
    { description: "Keep paragraphs short.", description2: " Two to three sentences maximum. Long blocks of text are harder for AI to parse and less likely to be extracted as a citation." }
];
const ListRow2_data5: ListRow2Data[] = [
    { text: "Add expert quotes with attribution.", text2: " Include quotes from named experts with their title and company. AI systems treat this as a strong authority signal." },
    { text: "Cite statistics with sources.", text2: " When you include data, name the source. \"According to Semrush clickstream data\" carries more weight than an unsourced claim." },
    { text: "Show first-hand experience.", text2: " Share real observations, case studies, and specific examples from your own work. This demonstrates the \"experience\" part of E-E-A-T, which AI systems increasingly value." },
    { text: "Include clear author information.", text2: " Make it obvious who wrote the content and why they are qualified. Author pages with credentials help both SEO and GEO." }
];
const ListRow2_data6: ListRow2Data[] = [
    { text: "Unlinked brand mentions carry weight.", text2: " AI systems give brand mentions more weight even when they are not linked. Casual mentions of your brand across the web can boost your AI visibility." },
    { text: "Get into sources AI already cites.", text2: " Find out which web pages are already being cited by AI for your target queries. Then get your brand mentioned in those pages. This could be as simple as commenting in a Reddit thread that is already being regularly cited, or emailing the author of a blog post and asking to be included. This is the fastest way to lift your visibility. We have seen brands go from completely invisible to getting their first AI mentions in under an hour using this method." },
    { text: "Be active on platforms AI references.", text2: " Reddit, YouTube, and forums appear frequently in AI responses. Genuine participation builds visibility. Marketing spam does not." },
    { text: "Consider a Wikipedia entry.", text2: " Wikipedia appears to be a significant source in AI training data. If your brand qualifies for inclusion, an accurate entry may influence how AI systems describe you." }
];
const ListRow3_data2: ListRow3Data[] = [
    { text: "Verify AI crawlers are not blocked in your robots.txt file" },
    { text: "Check your server or CDN is not rejecting AI bot requests (especially if you use Cloudflare)" },
    { text: "Ensure important content is server-side rendered, not hidden behind JavaScript" },
    { text: "Confirm content is not locked behind logins, paywalls, or interactive elements" },
    { text: "Consider creating an llms.txt file to help AI systems understand your site structure" },
    { text: "Implement schema markup for FAQs, reviews, and product information" }
];
const ListRow3_data3: ListRow3Data[] = [
    { text: "Use clear heading hierarchies (H1, H2, H3) with one topic per section" },
    { text: "Write in scannable formats with bullet points and numbered lists" },
    { text: "Lead each section with a direct answer before providing context" },
    { text: "Keep paragraphs to 2-3 sentences maximum" },
    { text: "Include expert quotes with name, title, and company attribution" },
    { text: "Cite statistics and name their sources" },
    { text: "Use question-based headings that match how people ask AI questions" },
    { text: "Add clear author information with relevant credentials" }
];
const ListRow3_data4: ListRow3Data[] = [
    { text: "Refresh important content at least once every 3 months" },
    { text: "Update statistics and examples with current data" },
    { text: "Monitor which pages AI search engines are already citing for your target queries" },
    { text: "Build brand mentions on third-party sites, especially those already cited by AI" },
    { text: "Track share of voice and citation frequency over time" }
];
const ListRow2_data7: ListRow2Data[] = [
    { text: "Keyword stuffing.", text2: " AI systems penalize over-optimization just like Google does. Write naturally." },
    { text: "Thin content.", text2: " Surface-level information does not establish authority. AI wants to cite comprehensive sources." },
    { text: "Outdated information.", text2: " AI systems have a strong recency bias. Content older than 3 months sees significantly fewer citations." },
    { text: "Missing citations.", text2: " Claims without named sources lose credibility with both readers and AI." },
    { text: "Walls of text.", text2: " Long unbroken paragraphs are hard for AI to parse and extract from." }
];
const ListRow2_data8: ListRow2Data[] = [
    { text: "Blocking AI crawlers.", text2: " Check your robots.txt and CDN settings. Cloudflare users should double-check their AI bot configuration." },
    { text: "Relying on client-side rendering.", text2: " AI crawlers do not execute JavaScript. If your content is in a single-page app or loads dynamically, AI cannot read it." },
    { text: "Hiding content behind interactions.", text2: " Tabs, accordions, sliders, and dropdowns that require clicks to reveal content are invisible to AI bots." },
    { text: "Slow site performance.", text2: " Page speed affects how efficiently AI crawlers can access your content." }
];
const ListRow2_data9: ListRow2Data[] = [
    { text: "Mass-producing automated content.", text2: " Flooding your site with AI-generated articles is bad for SEO and does not help GEO either." },
    { text: "Only optimizing your own site.", text2: " AI learns about your brand from third-party sources too. You need a presence beyond your own domain." },
    { text: "Not tracking results.", text2: " Most of AI search is zero-click, so traditional Google Analytics attribution does not capture the full picture. You need AI-specific tracking." }
];
const ListRow2_data10: ListRow2Data[] = [
    { text: "Share of voice.", text2: " This is the most important GEO metric. It measures how frequently your brand appears in AI responses across a broad range of prompts. Think of it as your mention rate. The higher the percentage, the more AI impressions your brand gets." },
    { text: "Competitive rank.", text2: " Knowing your share of voice is useful, but you also need to know how you compare to competitors. This helps you find new optimization opportunities." },
    { text: "Citation tracking.", text2: " Which specific web pages are being cited by AI to answer queries in your space? And how often?" },
    { text: "Brand mention accuracy.", text2: " How do AI systems describe your brand? Is the information correct and favorable?" },
    { text: "AI referral traffic.", text2: " Check your server logs for the \"ChatGPT-User\" user agent to see if AI bots are visiting your pages. If you use Cloudflare, it shows this on the AI Crawl Metrics page." }
];
const ListRow3_data5: ListRow3Data[] = [
    { text: "Identify 10-20 queries relevant to your business, especially bottom-of-funnel prompts where people are making purchasing decisions" },
    { text: "Ask those queries to ChatGPT, Perplexity, and Gemini" },
    { text: "Note whether your brand appears, how it is described, and which sources are cited" },
    { text: "Repeat monthly to track changes" }
];
const ListRow2_data11: ListRow2Data[] = [
    { text: "GEO is about citations, not rankings.", text2: " Your goal is to be cited as a source in AI answers, not to hold a fixed position." },
    { text: "SEO is not dead.", text2: " AI models use live web search. Strong SEO performance directly feeds GEO results." },
    { text: "Make sure AI can read your content.", text2: " Check your robots.txt, CDN settings, and rendering approach. This is the most common issue we see." },
    { text: "Structure content for extraction.", text2: " Clear headings, bullet points, short paragraphs, and direct answers make it easy for AI to cite your content." },
    { text: "Target fan-out queries.", text2: " AI breaks long questions into smaller sub-queries. Make sure you rank for those too." },
    { text: "Keep content fresh.", text2: " AI has a strong recency bias. Update important content at least once every 3 months." },
    { text: "Build authority beyond your site.", text2: " Get your brand mentioned in sources AI already cites. This is the fastest path to AI visibility." },
    { text: "Track share of voice, not just traffic.", text2: " Most AI search is zero-click. You need new metrics to measure GEO performance." }
];
/** Logo Cloud section. */
export default function LogoCloudSection({ listRowData = listRowDataContent, logos = logosContent, listRow2Data = ListRow2_data, tileData = Tile_data, listRow2Data2 = ListRow2_data2, listRow3Data = ListRow3_data, listRow2Data3 = ListRow2_data3, listRow2Data4 = ListRow2_data4, tile2Data = Tile2_data, listRow2Data5 = ListRow2_data5, listRow2Data6 = ListRow2_data6, listRow3Data2 = ListRow3_data2, listRow3Data3 = ListRow3_data3, listRow3Data4 = ListRow3_data4, listRow2Data7 = ListRow2_data7, listRow2Data8 = ListRow2_data8, listRow2Data9 = ListRow2_data9, listRow2Data10 = ListRow2_data10, listRow3Data5 = ListRow3_data5, listRow2Data11 = ListRow2_data11 } = {}) {
  return (
    <section className="block mt-14 mb-20 px-6 2xl:max-w-350 2xl:mx-65">
      <div className="grid mx-auto gap-8 max-w-6xl grid-cols-[5fr_2fr] max-lg:grid-cols-1">
        <aside className="w-80 block min-w-0 order-[2] max-md:w-[20.4375rem] md:max-lg:w-180">
          <div className="h-177.5 flex sticky top-24 flex-col-reverse gap-3 max-lg:static max-lg:top-auto md:max-lg:h-142.5">
            <div className="block rounded-[14px] bg-background shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--border)_0px_0px_0px_1px_inset,var(--clr-1)_0px_0px_0px_0px] w-full">
              <div className="flex pt-4 px-5 flex-col">
                <h2 className="block font-bold" data-component="heading">
                  Table of Contents
                </h2>
              </div>
              <div className="block mt-1 pb-3 px-3">
                <nav className="block" data-component="nav" aria-label="Table of contents">
                  <ul className="flex flex-col gap-0.5 [list-style-type:none] list-outside">
                    {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="block relative p-6 rounded-[14px] overflow-hidden text-center shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--border)_0px_0px_0px_1px_inset,var(--clr-1)_0px_0px_0px_0px]" style={{ backgroundImage: "linear-gradient(var(--clr-1) 0%, var(--border) 100%)" }}>
              <div className="w-[11.275rem] h-[11.275rem] block absolute top-0 right-0 -z-1 opacity-90 aspect-square" style={{ backgroundImage: "radial-gradient(circle farthest-side at right top, var(--accent) 0%, var(--clr-3) 100%)" }} />
              <p className="block text-sm font-semibold leading-5">
                Grow your brand's visibility in AI search
              </p>
              <div className="flex mt-3 justify-center items-center">
                {logos.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
              </div>
              <a className="inline-flex relative mt-4 px-4 rounded-[10px] justify-center items-center gap-1.5 overflow-hidden text-sm font-semibold leading-5 whitespace-nowrap text-nowrap bg-background shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--accent)_0px_0px_0px_2px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer h-9 hover:bg-clr-2" data-component="link" href="/learn/ai-seo">
                <span className="block">
                  Learn AI SEO
                </span>
                <Icon2 />
              </a>
            </div>
          </div>
        </aside>
        <div className="block order-[1]">
          <div className="h-full block text-lg leading-8 mx-auto">
            <p className="block mb-6">
              Search is changing. When someone asks ChatGPT "What is the best project management tool for a remote team?" they do not get a list of links. They get a direct answer with specific recommendations.
            </p>
            {" "}
            <p className="block my-6">
              This is generative search. And it is reshaping how brands get discovered online.
            </p>
            {" "}
            <p className="block my-6">
              Generative engine optimization (GEO) is the practice of optimizing your content so that AI search engines cite it in their responses. If traditional SEO is about ranking on page one of Google, GEO is about being part of the answer itself.
            </p>
            {" "}
            <p className="block my-6">
              This guide explains what generative engine optimization is, how it differs from traditional SEO, and the specific techniques you can use to improve your search visibility in AI-generated content.
            </p>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="what-is-generative-engine-optimization">
              What Is Generative Engine Optimization?
            </h2>
            {" "}
            <p className="block mb-6">
              Generative engine optimization is the practice of structuring your content so that AI systems can find it, understand it, and cite it in their responses.
            </p>
            {" "}
            <p className="block my-6">
              When you search on Google, you get a list of blue links. When you ask a question to ChatGPT or Perplexity, you get a synthesized answer that pulls information from multiple sources across the web. GEO focuses on making your content one of those sources.
            </p>
            {" "}
            <p className="block my-6">
              {"You may also see this called AI SEO, "}
              <a className="inline text-primary font-medium underline cursor-pointer hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" href="/answer-engine-optimization">
                answer engine optimization (AEO)
              </a>
              {", or "}
              <a className="inline text-primary font-medium underline cursor-pointer hover:text-foreground hover:[text-decoration-color:var(--foreground)]" data-component="link" href="/llm-seo">
                large language model optimization (LLMO)
              </a>
              . The industry has not settled on a single term yet. They all describe the same goal. Get your content cited by AI.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="how-generative-search-engines-work">
              How generative search engines work
            </h3>
            {" "}
            <p className="block mb-6">
              Traditional search engines rank pages based on keywords, backlinks, and user signals. Generative AI search engines work differently. Here is what happens when someone asks an AI a question.
            </p>
            {" "}
            <ol className="block my-6 pl-7 [list-style-type:decimal] list-outside">
              {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ol>
            {" "}
            <p className="block my-6">
              Your goal with generative engine optimization is to be one of the sources the AI retrieves and cites. That means your content needs to rank for the sub-queries the AI generates, not just the long-form question the user typed.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="one-important-thing-to-understand-about-llms">
              One important thing to understand about LLMs
            </h3>
            {" "}
            <p className="block mb-6">
              Large language models (LLMs) are non-deterministic. Ask the same question five times, and you will get five different responses.
            </p>
            {" "}
            <p className="block my-6">
              This means generative engine optimization is not about ranking in a fixed position the way Google works. There is no "position #1" in ChatGPT. Instead, visibility in AI search is about frequency. How often does your brand appear across many different responses to many different prompts?
            </p>
            {" "}
            <p className="block my-6">
              Think of it as a mention rate, not a ranking. The higher your frequency, the more AI impressions your brand gets.
            </p>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="geo-vs-seo-what-is-the-difference">
              GEO vs SEO: What Is the Difference?
            </h2>
            {" "}
            <p className="block mb-6">
              Generative engine optimization and traditional SEO share the same foundation. Both reward high-quality, authoritative content. Both require solid technical implementation. But they differ in some important ways.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="how-ai-search-differs-from-traditional-search">
              How AI search differs from traditional search
            </h3>
            {" "}
            <table className="w-full table mb-8 text-base leading-6 [border-collapse:collapse] [border-spacing:2px]">
              <thead className="border-b border-solid border-b-clr-4 table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell pr-3 pb-3 align-bottom text-color-001 font-extrabold tracking-[-0.4px] [border-collapse:collapse] [border-spacing:2px]">
                    Aspect
                  </th>
                  <th className="table-cell pb-3 px-3 align-bottom text-color-001 font-extrabold tracking-[-0.4px] [border-collapse:collapse] [border-spacing:2px]">
                    Traditional SEO
                  </th>
                  <th className="table-cell pb-3 pl-3 align-bottom text-color-001 font-extrabold tracking-[-0.4px] [border-collapse:collapse] [border-spacing:2px]">
                    Generative Engine Optimization
                  </th>
                </tr>
              </thead>
              <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
              </tbody>
            </table>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="what-stays-the-same-between-geo-and-seo">
              What stays the same between GEO and SEO
            </h3>
            {" "}
            <p className="block mb-6">
              Here is the good news. If you have been doing solid SEO work, you are already most of the way there with GEO. The fundamentals have not changed.
            </p>
            {" "}
            <ul className="block my-6 pl-7 [list-style-type:disc] list-outside">
              {listRow2Data2.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            {" "}
            <p className="block my-6">
              SEO is not dead. AI models rely on live web search results to generate their answers. Strong SEO performance directly feeds GEO visibility.
            </p>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="why-generative-engine-optimization-matters-in-2026">
              Why Generative Engine Optimization Matters in 2026
            </h2>
            {" "}
            <p className="block mb-6">
              AI search is not a future trend. It is happening now, and the numbers are significant.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="the-scale-of-ai-search">
              The scale of AI search
            </h3>
            {" "}
            <ul className="block mb-6 pl-7 [list-style-type:disc] list-outside">
              {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
            </ul>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="users-behave-differently-in-ai-search">
              Users behave differently in AI search
            </h3>
            {" "}
            <p className="block mb-6">
              People interact with AI search engines differently than traditional search. This changes the SEO strategies that work.
            </p>
            {" "}
            <ul className="block my-6 pl-7 [list-style-type:disc] list-outside">
              {listRow2Data3.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="ai-search-traffic-converts-differently">
              AI search traffic converts differently
            </h3>
            {" "}
            <p className="block mb-6">
              Early data suggests that traffic from AI search engines has different characteristics than Google traffic.
            </p>
            {" "}
            <ul className="block my-6 pl-7 [list-style-type:disc] list-outside">
              {listRow2Data4.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="google-rankings-and-ai-visibility-are-diverging">
              Google rankings and AI visibility are diverging
            </h3>
            {" "}
            <p className="block mb-6">
              Ranking on page one of Google does not guarantee you will appear in AI answers. And appearing in AI answers does not require ranking on page one.
            </p>
            {" "}
            <p className="block my-6">
              Research from GEO firm Brandlight suggests that the overlap between top Google links and AI-cited sources has dropped from 70% to below 20%. This gap is growing as AI systems develop their own preferences for which sources to cite.
            </p>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="how-to-optimize-your-content-for-generative-ai-search-engines">
              How to Optimize Your Content for Generative AI Search Engines
            </h2>
            {" "}
            <p className="block mb-6">
              Generative engine optimization builds on SEO fundamentals, but adds specific techniques for improving search visibility in AI-generated content. Here are the best practices that work in 2026.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="1-make-sure-ai-crawlers-can-access-your-content">
              1. Make sure AI crawlers can access your content
            </h3>
            {" "}
            <p className="block mb-6">
              Before anything else, AI systems need to be able to read your pages. This sounds obvious, but it is the most common problem we see.
            </p>
            {" "}
            <p className="block my-6">
              <strong className="inline text-color-001 font-semibold">
                Check your robots.txt file.
              </strong>
              {" Many sites block AI crawlers without realizing it. Cloudflare recently changed its default configuration to block AI bots. If you use Cloudflare, your AI bot traffic may have been shut off automatically."}
            </p>
            {" "}
            <p className="block my-6">
              <strong className="inline text-color-001 font-semibold">
                Check your server logs.
              </strong>
              {" Look for the \"ChatGPT-User\" user agent in your server logs to see if AI bots are visiting your site. If you use Cloudflare, check the \"AI Crawl Metrics\" page in your dashboard."}
            </p>
            {" "}
            <p className="block my-6">
              <strong className="inline text-color-001 font-semibold">
                Avoid client-side rendering for important content.
              </strong>
              {" AI crawlers do not browse like humans. They can only read the HTML your server returns. If your content loads via JavaScript after the page renders, AI bots cannot see it. Think about your pricing page. You might have an interactive slider or tabs that reveal different plans. AI bots cannot click or interact with those elements. The content behind them is invisible."}
            </p>
            {" "}
            <p className="block my-6">
              <strong className="inline text-color-001 font-semibold">
                Keep content out from behind walls.
              </strong>
              {" Information behind logins, paywalls, or accordion dropdowns is not accessible to AI crawlers. If you want it cited, it needs to be in the HTML."}
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="2-structure-content-so-ai-can-extract-it">
              2. Structure content so AI can extract it
            </h3>
            {" "}
            <p className="block mb-6">
              AI systems need to pull specific pieces of information from your content. The easier you make this, the more likely you are to get cited.
            </p>
            {tile2Data.map((d, i) => <Tile2 key={i} d={d} />)}
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="3-target-the-sub-queries-ai-actually-searches-for">
              3. Target the sub-queries AI actually searches for
            </h3>
            {" "}
            <p className="block mb-6">
              This is where generative engine optimization differs most from traditional SEO strategy. Remember, when someone asks an AI a complex question, the AI breaks it into smaller sub-queries and searches for each one separately. These are called fan-out queries.
            </p>
            {" "}
            <p className="block my-6">
              For example, if someone asks ChatGPT "What is the best email marketing platform for a small e-commerce business with less than 10,000 subscribers?" the AI might search for "best email marketing platforms 2026," "email marketing e-commerce features," and "email marketing pricing small business."
            </p>
            {" "}
            <p className="block my-6">
              Make sure you have content that ranks for these shorter sub-queries too. Use the same terminology the AI might search for. Think about what fragments of a long question you would search for yourself, and make sure your content addresses each one.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="4-include-authority-signals-ai-systems-trust">
              4. Include authority signals AI systems trust
            </h3>
            {" "}
            <p className="block mb-6">
              AI systems evaluate source credibility when deciding which pages to cite. Give them clear signals that your content is trustworthy.
            </p>
            {" "}
            <ul className="block my-6 pl-7 [list-style-type:disc] list-outside">
              {listRow2Data5.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="5-keep-content-fresh">
              5. Keep content fresh
            </h3>
            {" "}
            <p className="block mb-6">
              AI has a huge recency bias. From our data, we see that when content becomes more than 3 months old, AI citations to that page drop off sharply.
            </p>
            {" "}
            <p className="block my-6">
              Revisit your important content at least once per quarter. Update statistics, refresh examples, and add new developments. This is not just good practice for SEO. It directly affects how often AI search engines cite your pages.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="6-build-authority-beyond-your-own-website">
              6. Build authority beyond your own website
            </h3>
            {" "}
            <p className="block mb-6">
              AI systems learn about your brand from across the entire web, not just your own site. This is one area where generative engine optimization strategies go beyond traditional on-page SEO.
            </p>
            {" "}
            <ul className="block my-6 pl-7 [list-style-type:disc] list-outside">
              {listRow2Data6.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="how-to-optimize-for-different-ai-search-engines">
              How to Optimize for Different AI Search Engines
            </h2>
            {" "}
            <p className="block mb-6">
              The core principles of generative engine optimization apply across all platforms. But each AI search engine has its own characteristics worth understanding.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="chatgpt">
              ChatGPT
            </h3>
            {" "}
            <p className="block mb-6">
              ChatGPT has the largest market share at around 70% of AI search usage. It draws from a mix of live web search and its training data. It favors comprehensive, well-sourced content with clear expertise signals. ChatGPT is increasingly driving measurable referral traffic through its citations.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="google-ai-overviews-and-ai-mode">
              Google AI Overviews and AI Mode
            </h3>
            {" "}
            <p className="block mb-6">
              Google AI Overviews integrate traditional search ranking signals with AI synthesis. Content that already ranks well in organic search tends to perform well in AI Overviews too. Schema markup and structured data may influence selection. Local relevance matters for location-based queries.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="perplexity">
              Perplexity
            </h3>
            {" "}
            <p className="block mb-6">
              Perplexity is heavily citation-focused and uses real-time web search. It has a strong preference for recent, up-to-date content and is more transparent about its sources than other platforms. Perplexity also has some of the highest conversion rates for SaaS products.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="google-gemini">
              Google Gemini
            </h3>
            {" "}
            <p className="block mb-6">
              Gemini is the fastest-growing AI search platform. It integrates deeply with Google's existing search infrastructure. Strong Google SEO performance tends to translate into Gemini visibility.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="claude">
              Claude
            </h3>
            {" "}
            <p className="block mb-6">
              Claude tends to synthesize information rather than quote directly. It favors well-structured, logical content. Apple has announced that Claude will be integrated into Safari, which could significantly increase its influence on how people discover content.
            </p>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="generative-engine-optimization-seo-techniques-a-practical-checklist">
              Generative Engine Optimization SEO Techniques: A Practical Checklist
            </h2>
            {" "}
            <p className="block mb-6">
              Here is a step-by-step checklist you can follow to implement generative engine optimization alongside your existing SEO strategy. These are the best practices for 2026.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="technical-foundations">
              Technical foundations
            </h3>
            {" "}
            <ol className="block mb-6 pl-7 [list-style-type:decimal] list-outside">
              {listRow3Data2.map((d, i) => <ListRow3 key={i} d={d} />)}
            </ol>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="content-optimization">
              Content optimization
            </h3>
            {" "}
            <ol className="block mb-6 pl-7 [list-style-type:decimal] list-outside">
              {listRow3Data3.map((d, i) => <ListRow3 key={i} d={d} />)}
            </ol>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="ongoing-maintenance">
              Ongoing maintenance
            </h3>
            {" "}
            <ol className="block mb-6 pl-7 [list-style-type:decimal] list-outside">
              {listRow3Data4.map((d, i) => <ListRow3 key={i} d={d} />)}
            </ol>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="common-generative-engine-optimization-mistakes-to-avoid">
              Common Generative Engine Optimization Mistakes to Avoid
            </h2>
            {" "}
            <h3 className="block mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="content-mistakes">
              Content mistakes
            </h3>
            {" "}
            <ul className="block mb-6 pl-7 [list-style-type:disc] list-outside">
              {listRow2Data7.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="technical-mistakes">
              Technical mistakes
            </h3>
            {" "}
            <ul className="block mb-6 pl-7 [list-style-type:disc] list-outside">
              {listRow2Data8.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="strategy-mistakes">
              Strategy mistakes
            </h3>
            {" "}
            <ul className="block mb-6 pl-7 [list-style-type:disc] list-outside">
              <li className="list-item my-3 pl-2">
                <strong className="inline text-color-001 font-semibold">
                  Treating GEO and SEO as separate strategies.
                </strong>
                {" They work together. AI models use live web search, which means strong SEO directly feeds GEO results."}
              </li>
              {listRow2Data9.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="how-to-measure-generative-engine-optimization-performance">
              How to Measure Generative Engine Optimization Performance
            </h2>
            {" "}
            <p className="block mb-6">
              Traditional SEO metrics do not fully capture how your brand performs in AI search. You need new metrics and new approaches.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="the-metrics-that-matter-for-geo">
              The metrics that matter for GEO
            </h3>
            {" "}
            <ul className="block mb-6 pl-7 [list-style-type:disc] list-outside">
              {listRow2Data10.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
            {" "}
            <p className="block my-6">
              Track share of voice and rank over time. This tells you whether your generative engine optimization efforts are growing your brand visibility or falling flat.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="tools-for-ai-search-visibility-tracking">
              Tools for AI search visibility tracking
            </h3>
            {" "}
            <p className="block mb-6">
              Several tools now help brands track and improve their AI search visibility. These tools monitor brand mentions across AI platforms, track citation frequency for specific queries, benchmark your share of voice against competitors, and analyze sentiment in how AI describes your brand.
            </p>
            {" "}
            <p className="block my-6">
              The GEO tooling market is still maturing. But the best tools for large language model SEO strategy already provide actionable data you can use to improve your AI visibility today.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="manual-testing-still-works">
              Manual testing still works
            </h3>
            {" "}
            <p className="block mb-6">
              You do not need expensive tools to get started. Run this test yourself.
            </p>
            {" "}
            <ol className="block my-6 pl-7 [list-style-type:decimal] list-outside">
              {listRow3Data5.map((d, i) => <ListRow3 key={i} d={d} />)}
            </ol>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="the-future-of-seo-with-large-language-models">
              The Future of SEO With Large Language Models
            </h2>
            {" "}
            <p className="block mb-6">
              Generative engine optimization is still in its early stages. The playbook is being written in real time. But several trends are already becoming clear.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="ai-search-will-keep-growing">
              AI search will keep growing
            </h3>
            {" "}
            <p className="block mb-6">
              With Apple building AI search into Safari, Google expanding AI Overviews and AI Mode, and ChatGPT adding features like direct shopping integrations with retailers, AI search usage will continue to grow. The businesses that invest in generative engine optimization now will have a significant head start.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="the-geo-and-seo-strategies-will-merge">
              The GEO and SEO strategies will merge
            </h3>
            {" "}
            <p className="block mb-6">
              GEO is not replacing SEO. They are converging. AI models use live web search to find sources, which means traditional SEO directly powers AI visibility. The most effective approach is to optimize for both simultaneously.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="content-freshness-will-matter-more">
              Content freshness will matter more
            </h3>
            {" "}
            <p className="block mb-6">
              AI systems increasingly favor fresh information. The 3-month citation cliff we see in our data will likely become a well-known ranking factor. Brands that refresh content regularly will maintain higher AI visibility than those that publish and forget.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="multi-modal-content-will-grow-in-importance">
              Multi-modal content will grow in importance
            </h3>
            {" "}
            <p className="block mb-6">
              As AI systems improve at understanding images, video, and audio, visual content may become a more important factor in generative engine optimization. Brands that invest in multi-format content now will be better positioned as these capabilities mature.
            </p>
            {" "}
            <h3 className="block mt-[3.125rem] mb-5 text-color-001 text-3xl font-extrabold leading-9 tracking-[-0.75px] max-md:mt-10 max-md:mb-4 max-md:text-2xl max-md:tracking-[-0.6px]" data-component="heading" id="personalization-will-change-the-game">
              Personalization will change the game
            </h3>
            {" "}
            <p className="block mb-6">
              AI responses are becoming more personalized. The same question may produce different answers for different users based on their context, location, and conversation history. This means brands will need to cover topics from multiple angles to capture visibility across different user segments.
            </p>
            {" "}
            <h2 className="block mt-[4.2rem] mb-[2.4rem] text-color-001 text-4xl font-extrabold leading-10 tracking-[-0.9px] max-md:mt-14 max-md:mb-8 max-md:text-[1.875rem] max-md:tracking-[-0.75px]" data-component="heading" id="key-takeaways">
              Key Takeaways
            </h2>
            {" "}
            <p className="block mb-6">
              Generative engine optimization is about making your content visible in AI-generated responses. Here is what matters most.
            </p>
            {" "}
            <ul className="block mt-6 pl-7 [list-style-type:disc] list-outside">
              {listRow2Data11.map((d, i) => <ListRow2 key={i} d={d} />)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
