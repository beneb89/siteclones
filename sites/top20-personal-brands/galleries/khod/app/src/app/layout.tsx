import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "33 AI Website Examples & Design Inspiration [2026]",
  "description": "33 real AI website examples, grouped by category: hero design, messaging, motion, and more. Updated for 2026.",
  "robots": "index, follow",
  "alternates": {
    "canonical": "/resource-center/articles/ai-website-examples",
    "languages": {
      "x-default": "https://www.khod.io/resource-center/articles/ai-website-examples"
    }
  },
  "openGraph": {
    "title": "33 AI Website Examples & Design Inspiration [2026]",
    "description": "33 real AI website examples, grouped by category: hero design, messaging, motion, and more. Updated for 2026.",
    "type": "article",
    "url": "/resource-center/articles/ai-website-examples",
    "images": [
      "https://cdn.sanity.io/images/jqi5lycx/production/4fe97394d5e112bbd6e0f6bfb5169d4d8dcb8b96-1200x630.avif?w=1200&h=630&fm=jpg&q=80&fit=crop"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "33 AI Website Examples & Design Inspiration [2026]",
    "description": "33 real AI website examples, grouped by category: hero design, messaging, motion, and more. Updated for 2026.",
    "images": [
      "https://cdn.sanity.io/images/jqi5lycx/production/4fe97394d5e112bbd6e0f6bfb5169d4d8dcb8b96-1200x630.avif?w=1200&h=630&fm=jpg&q=80&fit=crop"
    ]
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/04baf5fbd5ea.jpg"
      }
    ],
    "icon": [
      {
        "url": "/assets/cloned/images/9c51b0490504.ico",
        "type": "image/x-icon",
        "sizes": "256x256"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/e68853534065.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"Khod\",\"alternateName\":\"Khod.io\",\"url\":\"", "\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/assets/khod_icon.jpg\"},\"description\":\"Khod helps B2B tech startups turn their websites into high-converting growth assets through strategy-led design, Webflow development, SEO, and CRO.\",\"foundingDate\":\"2022-10-10\",\"address\":{\"@type\":\"PostalAddress\",\"addressCountry\":\"RS\"},\"email\":\"hello@khod.io\",\"founder\":{\"@type\":\"Person\",\"name\":\"Evgenii Tilipman\",\"jobTitle\":\"Founder\",\"sameAs\":[\"https://www.linkedin.com/in/evgenii-tilipman/\"]},\"contactPoint\":{\"@type\":\"ContactPoint\",\"email\":\"hello@khod.io\",\"contactType\":\"sales\",\"availableLanguage\":\"English\"},\"areaServed\":\"Worldwide\",\"knowsAbout\":[\"Webflow development\",\"B2B web design\",\"Conversion rate optimization\",\"Search engine optimization\",\"Answer engine optimization\",\"Website strategy\",\"Technical SEO\",\"Webflow maintenance\",\"UI/UX design\"],\"sameAs\":[\"https://www.instagram.com/khod_io\",\"https://www.linkedin.com/company/khod-io\",\"https://www.youtube.com/@tilipmandigital\",\"https://www.youtube.com/@themovingtargetpodcast\"]},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"Khod\",\"alternateName\":\"Khod.io\",\"publisher\":{\"@id\":\"", "/#organization\"}},{\"@type\":\"WebPage\",\"@id\":\"", "/resource-center/articles/ai-website-examples#webpage\",\"url\":\"", "/resource-center/articles/ai-website-examples\",\"name\":\"33 AI Website Examples & Design Inspiration [2026]\",\"description\":\"33 real AI website examples, grouped by category: hero design, messaging, motion, and more. Updated for 2026.\",\"inLanguage\":\"en\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"breadcrumb\":{\"@id\":\"", "/resource-center/articles/ai-website-examples#breadcrumb\"}},{\"@type\":\"Article\",\"@id\":\"", "/resource-center/articles/ai-website-examples#article\",\"headline\":\"33 AI Website Examples & Design Inspiration [2026]\",\"description\":\"Explore 33 of the best AI website design examples with strong UX, and messaging. Grouped by category. Updated for 2026.\",\"datePublished\":\"2025-06-09T00:00:00.000Z\",\"dateModified\":\"2026-05-12T00:00:00.000Z\",\"author\":{\"@type\":\"Person\",\"name\":\"Marko Lazarevic\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"mainEntityOfPage\":{\"@id\":\"", "/resource-center/articles/ai-website-examples#webpage\"}},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/resource-center/articles/ai-website-examples#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Resource Center\",\"item\":\"", "/resource-center\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Articles\",\"item\":\"", "/resource-center/articles\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"33 AI Website Examples & Design Inspiration [2026]\",\"item\":\"", "/resource-center/articles/ai-website-examples\"}]},{\"@type\":\"FAQPage\",\"@id\":\"", "/resource-center/articles/ai-website-examples#faq\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is an AI website?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"\\\"AI website\\\" means different things to different people:\\n- Sites built by AI tools like v0, Lovable, or Bolt\\n- Sites that feature AI — chatbots, personalisation engines, generative search\\n- Sites built for AI-native companies\\nWhen we say AI website, we mean the third one. A marketing site whose job is to turn a complex AI product into a clear value proposition for the buyer evaluating it.\"}},{\"@type\":\"Question\",\"name\":\"What design patterns are most common on AI company websites?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A few keep showing up across the category:\\n- Dark mode with generative gradients\\n- Geometric or 3D hero sections\\n- Monospace type for technical credibility\\n- Terminal-style animations\\n- Prominent benchmarks, latency numbers, and model comparisons\\nThe visual language has converged because buyer expectations have. We break down the current set in detail in Web Design Trends 2026 for AI Brands.\"}},{\"@type\":\"Question\",\"name\":\"What should be on the homepage of an AI startup?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The headline names the buyer and the outcome.\\nThe product is visible above the fold — screenshot, short video, or live demo. Not a hero illustration of a brain.\\nBelow it, in this order:\\n- Named customer logos with the use case attached. Anonymous bars don't work.\\n- A demo of the product doing its job, not narrating it.\\n- How it works in three steps — what the buyer does, not how it's built.\\n- Two or three use cases tied to roles or problems, not industries.\\n- A direct comparison to the alternative, including the manual one.\\n- Pricing, or the logic behind it (per-seat, per-call, per-token).\\n- Security signals: SOC 2, model isolation, data residency.\\nOne primary CTA, repeated.\"}},{\"@type\":\"Question\",\"name\":\"How do AI companies build trust on their websites?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"By being specific. The AI category has more hype than proof, so buyers default to skeptical.\\nThe sites that earn the call do five things in common:\\n- Show actual product output instead of describing it\\n- Publish benchmarks and limitations honestly\\n- Name the underlying models or architecture\\n- List named customers and case studies, not anonymous logos\\n- Address security, data handling, and compliance up front\\nSpecificity is the trust signal.\"}},{\"@type\":\"Question\",\"name\":\"What tools were used to build the AI websites in this list?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A mix:\\n- Webflow\\n- Framer\\n- Custom Next.js stacks\\n- Astro\\nThe platform matters less than people assume. What separates the strong AI websites from the weak ones is positioning, hierarchy, and execution, not the CMS. An AI website can be built on any modern tool, including Webflow.\"}},{\"@type\":\"Question\",\"name\":\"Can you build an AI website with Webflow?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Webflow is one of several good options, and the one we use for most AI clients.\\nThe reason is practical: marketing teams at AI startups need to ship landing pages, update positioning, and launch campaigns without filing engineering tickets — and Webflow gives them that without sacrificing design control.\\nWe've launched Webflow sites for Bland AI, Synthflow, and Avarra ahead of funding announcements and sales pushes.\"}}]}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="min-h-full block text-foreground [font-family:Poppins,_Arial,_sans-serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
