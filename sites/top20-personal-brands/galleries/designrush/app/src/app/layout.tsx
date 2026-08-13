import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Best AI Website Designs of 2026 | DesignRush",
  "description": "Check out AI website designs that feature responsive designs, interactive elements, and sleek aesthetics for intuitive, personalized user experiences.",
  "alternates": {
    "canonical": "/best-designs/websites/ai"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/77379b85446b.ico",
        "type": "image/x-icon"
      },
      {
        "url": "/assets/cloned/images/c7daf3e82672.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/a8bac993039b.png",
        "type": "image/png",
        "sizes": "16x16"
      },
      {
        "url": "/assets/cloned/svg/119918998a66.svg",
        "type": "image/svg+xml"
      },
      {
        "url": "/assets/cloned/images/b8c405d6031b.png",
        "type": "image/png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/eb4a1b7d2917.png",
        "sizes": "180x180"
      }
    ],
    "other": [
      {
        "url": "/assets/cloned/svg/d4b7ce0f759e.svg",
        "rel": "mask-icon",
        "color": "#5bbad5"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#ffffff"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"DesignRush\",\"url\":\"", "/\",\"logo\":\"", "/topbest/images/svg/designrush-new-logo.svg\",\"image\":\"", "/topbest/images/svg/designrush-new-logo.svg\",\"address\":{\"@type\":\"PostalAddress\",\"addressRegion\":\"FL\",\"addressLocality\":\"Miami\",\"streetAddress\":\"18117 Biscayne Blvd\",\"addressCountry\":\"US\",\"postalCode\":\"33160\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Best Designs\",\"item\":\"", "/best-designs\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Best Website Designs\",\"item\":\"", "/best-designs/websites\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"AI\",\"item\":\"", "/best-designs/websites/ai\"}],\"@id\":\"", "/best-designs/websites/ai#breadcrumb\"},{\"@type\":\"CollectionPage\",\"url\":\"", "/best-designs/websites/ai\",\"name\":\"Best AI Website Designs of 2026\",\"dateModified\":\"2026-07-09\",\"description\":\"Check out AI website designs that feature responsive designs, interactive elements, and sleek aesthetics for intuitive, personalized user experiences.\",\"inLanguage\":\"en\",\"breadcrumb\":{\"@id\":\"", "/best-designs/websites/ai#breadcrumb\"},\"mainEntity\":{\"@id\":\"", "/best-designs/websites/ai#itemlist\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"DesignRush\",\"url\":\"", "/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/topbest/images/feed/feed-logo.png\",\"width\":300,\"height\":60}},\"editor\":{\"@type\":\"Person\",\"name\":\"Lensey Etcubañas\",\"url\":\"", "/author/lensey-etcubanas\",\"description\":\"Lensey Etcubañas is an experienced content marketer with proven results. She has worked in advertising, eCommerce, IT, and creative industries for companies like SVEN, Incrementum Digital, and Martha Stewart. Her promotional email sequence plan for a Process Improvement Management Consultancy yielded thousands of dollars in revenue and an 84% CTR. She takes her diverse industry knowledge and editorial experience to her current role at DesignRush.\"}},{\"@type\":\"ItemList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"ReadSpeaker AI\",\"description\":\"ReadSpeaker AI outgrew its template WordPress site and needed to present itself as a credible, enterprise-ready AI partner. GoingClear led a UX-driven redesign, mapping buyer personas and journeys first. The result turns complex text-to-speech technology into a clear, engaging, conversion-focused experience built to support HubSpot-powered B2B marketing.\",\"url\":\"", "/best-designs/websites/readspeaker-ai-website-design\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"DataBahn\",\"description\":\"Flowtrix’s website design for DataBahn pairs dark, tech-driven aesthetics with structured layouts and bold data visuals to communicate trust, intelligence, and enterprise-scale performance.\",\"url\":\"", "/best-designs/websites/databahn-website-design\"}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"Autonomys\",\"description\":\"Koncepted’s website design for Autonomys blends futuristic UI, serif-sans typography, and subtle animations, turning complex AI tech into an immersive digital journey.\",\"url\":\"", "/best-designs/websites/autonomys-website-design\"}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"AI Capts\",\"description\":\"Explore Elux Space's hero page concept for AI Capts, an AI captioning tool that uses a futuristic gradient, conversational UI, and hierarchical CTAs to create an intuitive experience.\",\"url\":\"", "/best-designs/websites/ai-capts-website-design\"}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"Algoworks\",\"description\":\"Algoworks’ bold website redesign pairs dynamic visuals with clear messaging to showcase its people-first, tech-driven services through interactive storytelling.\",\"url\":\"", "/best-designs/websites/algoworks-website-design\"}},{\"@type\":\"ListItem\",\"position\":6,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"Real Estate Developers Automate\",\"description\":\"This ZAPTA-made website design for \\\"Real Estate Developers Automate\\\" is bold and sci-fi-inspired, simplifying real estate automation with 3D visuals, modular UX, and smart sales journeys.\",\"url\":\"", "/best-designs/websites/real-estate-developers-automate-website-design\"}},{\"@type\":\"ListItem\",\"position\":7,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"Viewshape\",\"description\":\"Viewshape website design features monochromatic elegance, noticeable red shade for contrast, and clean, minimal iconography.\",\"url\":\"", "/best-designs/websites/viewshape-website-design\"}},{\"@type\":\"ListItem\",\"position\":8,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"Sistema for GUK AI\",\"description\":\"Sistema for GUK AI website design features silky and smooth visuals, vivid colors on a grey box, and soft background gradients.\",\"url\":\"", "/best-designs/websites/sistema-for-guk-ai-website-design\"}},{\"@type\":\"ListItem\",\"position\":9,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"FuturAI\",\"description\":\"FuturAI website design features dark themed design, neon color gradients, and creative shift in the “Contact” section.\",\"url\":\"", "/best-designs/websites/futurai-website-design\"}},{\"@type\":\"ListItem\",\"position\":10,\"item\":{\"@type\":\"CreativeWork\",\"name\":\"Future Works\",\"description\":\"Future Works website design features immersive scrolling experience, typewriter typography style, and pastel background colors.\",\"url\":\"", "/best-designs/websites/future-works-website-design\"}}],\"numberOfItems\":10,\"@id\":\"", "/best-designs/websites/ai#itemlist\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="h-full block min-w-80 text-foreground [font-family:Outfit,_sans-serif] text-base font-light not-italic leading-5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
