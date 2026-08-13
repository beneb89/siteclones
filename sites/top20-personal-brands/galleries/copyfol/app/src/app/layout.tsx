import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "11 Hand-Picked Personal Brand Websites (2026) + How to Build Yours",
  "description": "Wanna see examples of successful personal brand websites? Check our top, curated picks, then read on to discover the best and easiest way to recreate them for yourself.",
  "robots": "follow, index",
  "alternates": {
    "canonical": "/personal-brand-website"
  },
  "openGraph": {
    "title": "11 Hand-Picked Personal Brand Websites (2026) + How to Build Yours",
    "description": "Wanna see examples of successful personal brand websites? Check our top, curated picks, then read on to discover the best and easiest way to recreate them for yourself.",
    "type": "website",
    "images": [
      "https://cdn.sanity.io/images/q3dpdl9z/production/a4d40b82af50dbf74eec8c33a3b12230d26e5817-2880x1620.webp?fit=max&auto=format"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "11 Hand-Picked Personal Brand Websites (2026) + How to Build Yours",
    "description": "Wanna see examples of successful personal brand websites? Check our top, curated picks, then read on to discover the best and easiest way to recreate them for yourself.",
    "images": [
      "https://cdn.sanity.io/images/q3dpdl9z/production/a4d40b82af50dbf74eec8c33a3b12230d26e5817-2880x1620.webp?fit=max&auto=format"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/f3a1404f79ac.ico"
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
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What makes it a *personal branding* website?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The difference between a “regular” website and a personal brand website is that the latter is all about you. Its goal is to communicate the picture and narrative you want to portray. It should show your uniqueness and why you’re the top professional in your field, through photos, intros, and your past work.\"}},{\"@type\":\"Question\",\"name\":\"What is a website template?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A website template decides the starting layout and colors of your site. In most cases, some elements are fixed, but usually you can customize many aspects later. What these are always depend on the website builder you use. For example, in Copyfolio, the layout of your homepage hero section is fixed for each template, but you can change the rest of the sections, colors, fonts, and everything else if you’d like.\"}},{\"@type\":\"Question\",\"name\":\"Why do I need a personal website?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Having a personal website is the ultimate signal that you’re more than just the average Joe and take your career seriously. It’ll show clients and employers that you’re willing to put in the effort—and that you’re more invested (and maybe even skilled) than your competitors.\"}},{\"@type\":\"Question\",\"name\":\"What makes a personal branding website effective in 2026?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"In the era of AI-generated everything, showing not just your expertise but also your human side will help you stand out. This start making sure your personal brand really reflects you and follows all the way to the content you create. Be strategic, yes. But also be authentic and try to make a genuine connection with your audience.\"}},{\"@type\":\"Question\",\"name\":\"Do I need to hire a designer to build my website?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"With the right website builder, you won’t need a designer for your personal website. Just make sure to choose an app like Copyfolio that has great templates to start and easy ways of customizing it. Look for features like global color palettes and design styles, so that you won’t have to set things individually for all elements.\"}},{\"@type\":\"Question\",\"name\":\"Can I build a personal brand website without coding skills?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"As long as you use a what-you-see-if-what-you-get (WYSIWYG) style visual editor, you won’t need any coding skills to build a successful website. 10+ years ago you had to be able to dig into code to fix your once-again-broken Wordpress site. But in 2026, you can easily find website builders that do just as much (if not more) without the hassle and frustration that came with Wordpress.\"}},{\"@type\":\"Question\",\"name\":\"How do I choose the right colors and fonts for my personal brand?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Start by reading through your brand personality traits and think about what colors could match them. You could also research color psychology to help you out—or ask Brandi about it. Since she knows your personal brand inside out (+has all the color knowledge), Brandi can help suggest specific colors that’ll match your vibe.\"}}]}" }}
        />
      </head>
      <body className="block text-foreground [font-family:Onest,_'Onest_Fallback'] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
