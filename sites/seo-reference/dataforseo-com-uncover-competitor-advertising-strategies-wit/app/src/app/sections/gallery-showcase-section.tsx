import MediaCard, { type MediaCardData } from "../components/media-card";
import { MediaCard_styles } from "../_styles";
const MediaCard_data: MediaCardData[] = [
    { href: "/blog/ai-visibility-for-local-businesses-why-food-travel-and-hospitality-face-the-highest-ai-competition", title: "AI Visibility for Local Businesses: Why Food, Travel, and Hospitality Face the Highest AI Competition", description: "Picking a local business is rarely a one-step decision. Customers check reviews, weigh prices, and compare two or three options before they commit. A lot of that work now happens inside an LLM. When someone asks ChatGPT to recommend a...", href2: "/blog/category/best-practices", label: "Best Practices", text: "\n\t\t\t\t\t\t\t\t\tBy Anatolii                                ", dateTime: "2026-07-22T18:22:26+03:00", date: "\n\t\t\t\t\t\t\t\t\t22.07.2026                                " },
    { href: "/blog/track-ai-visibility-over-time-with-historical-llm-mentions-api", title: "Track AI Visibility Over Time with Historical LLM Mentions Data API", description: "As new content gets published, competitors gain authority, or AI systems update the information they rely on, the sources and brand names included in AI responses change. So, while a single AI visibility check tells you whether your business appears...", href2: "/blog/category/whats-new", label: "What's New", text: "\n\t\t\t\t\t\t\t\t\tBy Irene T.                                ", dateTime: "2026-06-01T11:33:11+03:00", date: "\n\t\t\t\t\t\t\t\t\t01.06.2026                                " },
    { href: "/blog/the-gap-between-ai-search-visibility-and-citation", title: "The Gap Between AI Search Visibility and AI Citation", description: "Every brand wants to appear in AI-generated answers. However, being found during an LLM’s research is different from being featured in the final answer users actually see. That distinction creates a new challenge for SEO and GEO: what makes a...", href2: "/blog/category/whats-new", label: "What's New", text: "\n\t\t\t\t\t\t\t\t\tBy Irene T.                                ", dateTime: "2026-05-28T16:16:42+03:00", date: "\n\t\t\t\t\t\t\t\t\t28.05.2026                                " }
];
/** Gallery Showcase section. */
export default function GalleryShowcaseSection({ mediaCardData = MediaCard_data } = {}) {
  return (
    <section className="block py-16 max-lg:py-10">
      <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <h2 className="block mb-[2.4rem] text-color-001 text-3xl font-bold leading-9 max-lg:mb-6 max-md:text-xl max-md:leading-6 md:max-lg:text-[1.6875rem] md:max-lg:leading-[2rem] 2xl:mb-10" data-component="heading">
          Recent Posts
        </h2>
        {" "}
        <div className="grid gap-[1.6rem] grid-cols-[repeat(auto-fit,_minmax(342px,_1fr))] max-lg:gap-4 2xl:gap-7">
          {mediaCardData.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
