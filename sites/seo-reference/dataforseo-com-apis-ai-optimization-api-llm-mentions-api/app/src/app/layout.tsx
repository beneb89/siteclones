import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "LLM Mentions API – DataForSEO",
  "robots": "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "/apis/ai-optimization-api/llm-mentions-api"
  },
  "openGraph": {
    "title": "LLM Mentions API – DataForSEO",
    "type": "article",
    "siteName": "DataForSEO",
    "url": "/apis/ai-optimization-api/llm-mentions-api"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "LLM Mentions API – DataForSEO"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/a91eef35f11c.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/081717a61f69.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/c4c7872d7f8a.png"
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
    <html lang={"en-US"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Place\",\"@id\":\"", "/#place\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"}},{\"@type\":[\"LegalService\",\"Organization\"],\"@id\":\"", "/#organization\",\"name\":\"DATAFORSEO\",\"url\":\"", "\",\"email\":\"info@dataforseo.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Vesiv\\u00e4rava tn 50-201, Kesklinna linnaosa\",\"addressLocality\":\"Tallinn,\",\"addressRegion\":\"Harju maakond\",\"postalCode\":\"10152\",\"addressCountry\":\"Estonia\"},\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"", "/#logo\",\"url\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"contentUrl\":\"", "/wp-content/uploads/2016/11/logo_data_for_seo_429.png\",\"caption\":\"DATAFORSEO\",\"inLanguage\":\"en-US\",\"width\":\"429\",\"height\":\"80\"},\"priceRange\":\"$$$\",\"openingHours\":[\"Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00\"],\"location\":{\"@id\":\"", "/#place\"},\"image\":{\"@id\":\"", "/#logo\"},\"telephone\":\"+3726027642\"},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "\",\"name\":\"DATAFORSEO\",\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/apis/ai-optimization-api/llm-mentions-api#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"", "/\",\"name\":\"DATAFORSEO\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"", "/apis\",\"name\":\"APIs\"}},{\"@type\":\"ListItem\",\"position\":\"3\",\"item\":{\"@id\":\"", "/apis/ai-optimization-api\",\"name\":\"AI Optimization Data API\"}},{\"@type\":\"ListItem\",\"position\":\"4\",\"item\":{\"@id\":\"", "/apis/ai-optimization-api/llm-mentions-api\",\"name\":\"LLM Mentions API\"}}]},{\"@type\":\"WebPage\",\"@id\":\"", "/apis/ai-optimization-api/llm-mentions-api#webpage\",\"url\":\"", "/apis/ai-optimization-api/llm-mentions-api\",\"name\":\"LLM Mentions API &ndash; DataForSEO\",\"datePublished\":\"2025-10-07T11:01:14+03:00\",\"dateModified\":\"2026-07-08T14:58:00+03:00\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"", "/apis/ai-optimization-api/llm-mentions-api#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"", "/apis/ai-optimization-api/llm-mentions-api#author\",\"name\":\"Viktoriia Churbanova\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/ba5bed13fe66e5365d2552a9f198663c6cc7283c08a01e8f5d57842f95c95b38?s=96&amp;d=retro&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/ba5bed13fe66e5365d2552a9f198663c6cc7283c08a01e8f5d57842f95c95b38?s=96&amp;d=retro&amp;r=g\",\"caption\":\"Viktoriia Churbanova\",\"inLanguage\":\"en-US\"},\"worksFor\":{\"@id\":\"", "/#organization\"}},{\"@type\":\"Article\",\"headline\":\"LLM Mentions API &ndash; DataForSEO\",\"datePublished\":\"2025-10-07T11:01:14+03:00\",\"dateModified\":\"2026-07-08T14:58:00+03:00\",\"author\":{\"@id\":\"", "/apis/ai-optimization-api/llm-mentions-api#author\",\"name\":\"Viktoriia Churbanova\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"name\":\"LLM Mentions API &ndash; DataForSEO\",\"@id\":\"", "/apis/ai-optimization-api/llm-mentions-api#richSnippet\",\"isPartOf\":{\"@id\":\"", "/apis/ai-optimization-api/llm-mentions-api#webpage\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"", "/apis/ai-optimization-api/llm-mentions-api#webpage\"}}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n        {\n            \"@type\": \"Question\",\n            \"name\": \"Can I pull AI search metrics for multiple domains, brands, keywords or products simultaneously?\",\n            \"acceptedAnswer\": {\n                \"@type\": \"Answer\",\n                \"text\": \"Yes. The LLM Mentions endpoints of AI Optimization API support multi-target analysis for domains, brands, products, keywords and other entities. This option is useful for tracking AI visibility, as well as mentions, and citation performance across several competitors or any other entities you want to track in LLM responses.\"\n            }\n        },\n        {\n            \"@type\": \"Question\",\n            \"name\": \"How can I get LLM citation data with the AI Optimization Data API?\",\n            \"acceptedAnswer\": {\n                \"@type\": \"Answer\",\n                \"text\": \"Citation data can be retrieved through the LLM Mentions API, which provides access to source references, text snippets, mentions, and more from ChatGPT responses and Google AIO. This data helps to analyze which websites get cited in AI answers and how often they appear.\"\n            }\n        },\n        {\n            \"@type\": \"Question\",\n            \"name\": \"Which LLM Mentions endpoints support historical data, and what is the cut-off date for it?\",\n            \"acceptedAnswer\": {\n                \"@type\": \"Answer\",\n                \"text\": \"Three endpoints provide historical data: Historical Mentions, Timeseries New & Lost, and Timeseries Delta. The historical data in these endpoints is available up to 2025-08-01.\"\n            }\n        },\n        {\n            \"@type\": \"Question\",\n            \"name\": \"What is AI Search Volume in DataForSEO?\",\n            \"acceptedAnswer\": {\n                \"@type\": \"Answer\",\n                \"text\": \"AI Search Volume is a metric for estimating demand for AI searches and prompts. It allows assessing which topics, questions, or keywords are more or less popular in AI search environments.\"\n            }\n        },\n        {\n            \"@type\": \"Question\",\n            \"name\": \"Can I use DataForSEO LLM Mentions data in a GEO tool I sell to my own customers?\",\n            \"acceptedAnswer\": {\n                \"@type\": \"Answer\",\n                \"text\": \"Yes. Our pricing model is optimized for software builders, and most of our customers ship SEO and GEO tools that surface our data to their own end users. The specifics are in our Terms of Service. If you have a non-standard distribution model or an enterprise use case, our team is happy to talk it through.\"\n            }\n        },\n        {\n            \"@type\": \"Question\",\n            \"name\": \"What data sources are used in the LLM Mentions endpoints of AI Optimization API?\",\n            \"acceptedAnswer\": {\n                \"@type\": \"Answer\",\n                \"text\": \"DataForSEO AI Optimization API and its LLM Mentions endpoints rely on various internal data sources and ptroprietary databases to provide data to users. Although we do not disclose our internal algorithms, it’s important to note that we do not use customer data (including customer API responses) in any of our products.\"\n            }\n        }\n    ]\n}" }}
        />
      </head>
      <body className="h-[11921.3px] min-h-screen block text-foreground [font-family:Raleway,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_'Helvetica_Neue',_sans-serif] text-base font-normal not-italic leading-[1.625rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background max-md:h-[19955.3px] md:max-lg:h-[15735.3px] 2xl:h-3065.5">
        {children}
      </body>
    </html>
  );
}
