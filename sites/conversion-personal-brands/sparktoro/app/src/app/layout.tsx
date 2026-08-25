import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "SparkToro | Audience Research at Your Fingertips",
  "description": "Our mission is to make it easy to discover the websites, blogs, podcasts, social accounts, and publications that reach your audience.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "SparkToro | Audience Research at Your Fingertips",
    "description": "Our mission is to make it easy to discover the websites, blogs, podcasts, social accounts, and publications that reach your audience.",
    "images": [
      "https://sparktoro.com/img/product-page/mockups/v21-overview.74a54708edd3a83b112af4a198df6822.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "SparkToro | Audience Research at Your Fingertips",
    "description": "Our mission is to make it easy to discover the websites, blogs, podcasts, social accounts, and publications that reach your audience.",
    "site": "@SparkToro",
    "images": [
      "https://sparktoro.com/img/product-page/mockups/v21-overview.74a54708edd3a83b112af4a198df6822.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/b0bf5422763e.ico",
        "sizes": "any"
      },
      {
        "url": "/assets/cloned/svg/b34dd8feeaab.svg",
        "type": "image/svg+xml"
      },
      {
        "url": "/assets/cloned/images/47b9c90ee5e4.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/af69b6b4a778.png",
        "type": "image/png",
        "sizes": "16x16"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/d1cac04f01b7.png"
      },
      {
        "url": "/assets/cloned/images/8e60b469870d.png",
        "sizes": "57x57"
      },
      {
        "url": "/assets/cloned/images/e0fadc09aa96.png",
        "sizes": "72x72"
      },
      {
        "url": "/assets/cloned/images/893fa1274f5d.png",
        "sizes": "76x76"
      },
      {
        "url": "/assets/cloned/images/9b193b5f4004.png",
        "sizes": "114x114"
      },
      {
        "url": "/assets/cloned/images/4daed422d5ec.png",
        "sizes": "120x120"
      },
      {
        "url": "/assets/cloned/images/4122b1db9ebd.png",
        "sizes": "144x144"
      },
      {
        "url": "/assets/cloned/images/a8c16b60c959.png",
        "sizes": "152x152"
      },
      {
        "url": "/assets/cloned/images/7edff87c9ccf.png",
        "sizes": "180x180"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"http://schema.org/\",\"@id\":\"https://fast.wistia.net/embed/iframe/ta217rcs6u\",\"@type\":\"VideoObject\",\"duration\":\"PT1M39S\",\"name\":\"V3-Homepage-How-SparkToro-Works\",\"thumbnailUrl\":\"https://embed-ssl.wistia.com/deliveries/cec1057e3b67b355c5891fc5b0cbcc69.jpg?image_crop_resized=1280x720\",\"embedUrl\":\"https://fast.wistia.net/embed/iframe/ta217rcs6u\",\"uploadDate\":\"2026-07-28T00:29:39.000Z\",\"description\":\"a V3 Videos video\",\"contentUrl\":\"https://embed-ssl.wistia.com/deliveries/2e61d81332c15ea4cc15316a06b0b480cc887acc.m3u8\",\"transcript\":\"Sparktoro is powerful audience research software that understands the behaviors and demographics of any group on the Web. I'll show you. This is a search for knitting enthusiasts, primarily hobbyists, who buy materials for their fiber arts project. It's someone I was helping just a couple months ago.\\n\\nAnd this is the report showing data about this audience, their total market size, their estimated value, gender, age. We have lots of demographic data.\\n\\nWe also have tons of data about where they go on the web and what they do, which social networks are popular, which search and AI tools they use, what websites they visit, the categorization of those YouTube channels, podcasts, AI prompt topics, search keywords in Google, social accounts, subreddits, you name it. SparkToro has got a tremendous amount of data about any audience and it comes from just three sources. The three sources are for demographic data. We use LinkedIn profiles.\\n\\nWe have a giant database of hundreds of millions of LinkedIn profiles, and we get it from there. Four, all of the data about websites that are visited, including social networks and search and AI tools, that comes from Datos, our clickstream data provider who has panel data on millions of devices in the United States, UK, and Canada that they sell to us. And we combine that with crawled data from podcasts and YouTube channels and subreddits and social networks to deliver the rest. Those three sources underlie everything you see in SparkToro today.\\n\\nIt's not hallucinated. It's real data. Give it a spin.\",\"potentialAction\":{\"@type\":\"SeekToAction\",\"target\":\"", "/?wtime={seek_to_second_number}\",\"startOffset-input\":\"required name=seek_to_second_number\"}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"http://schema.org/\",\"@id\":\"https://fast.wistia.net/embed/iframe/9zyut56u0o\",\"@type\":\"VideoObject\",\"duration\":\"PT2M37S\",\"name\":\"V3-Whats-in-Free-vs-Premium-Reports\",\"thumbnailUrl\":\"https://embed-ssl.wistia.com/deliveries/ec768b8fba8de654826217d3cdf8c9430acd02cd.jpg?image_crop_resized=1280x720\",\"embedUrl\":\"https://fast.wistia.net/embed/iframe/9zyut56u0o\",\"uploadDate\":\"2026-08-02T19:58:27.000Z\",\"description\":\"a V3 Videos video\",\"contentUrl\":\"https://embed-ssl.wistia.com/deliveries/54d35a3952e094268979605132c0b3eeca3b6b29.m3u8\",\"transcript\":\"Howdy folks, I'm Rand Fishkin, co founder and CEO of SparkToro. I'm going to show you what's in a free audience research report and what's in a premium audience research report. So I have searched here for US attorneys inside of small firms with fewer than thirty employees who focus on contract and employment law, business law, corporate law securities. And this audience has these demographic features which we show inside the tool.\\n\\nThis comes by the way from our LinkedIn database. We know which social networks and search and AI tools they visit from our clickstream data panel. Thanks to our friends at Tatos. This data we show a sampling of what's in there, but they're the top five.\\n\\nSo if you're interested in like, hey, what are the most important social network search and AI tools? You'll see that in the report. Also the websites that they visit, an estimate of the traffic those websites receive and the affinity that this group has for visiting those sites. If you're looking to do partnerships or advertising or outreach or PR or find what else is interesting to your audience so that you can build better campaigns, this data is in here as well.\\n\\nSo are some hidden gems which are sites with lower traffic, but high relative affinity. The rest of the data in the free report is hidden as you can see, and we don't have access to all the details that we would inside the full report. In a full premium report, can see that all of the data including total addressable market, some of the AI insights that we're able to generate off of this audience data, the full list of social networks, search and AI tools, websites and hidden gems, categorization of audience visits, the breakdown, YouTube channels, podcasts, AI prompt topics that they type into, chatty PT or Claude or Perplexity or any of those.\\n\\nThe affinity that they have for search keywords in Google, social accounts, subreddits, all of this data is complete in here and I can click to any section and see the full report. You are also able to on these full premium reports take action. We have some AI powered actionable, items, tasks that you can accomplish, marketing tasks that you can accomplish there. You can export this data into CSV format, from any section that you'd like or from the overview page, which will give you all of the full export.\\n\\nYou can also see history of this data over time and of course a much more complete list. So there you go. Free report, plenty of useful things, premium report, a whole whole lot more.\",\"potentialAction\":{\"@type\":\"SeekToAction\",\"target\":\"", "/?wtime={seek_to_second_number}\",\"startOffset-input\":\"required name=seek_to_second_number\"}}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
